import os
import shutil
from collections import deque
from PIL import Image, ImageDraw, ImageFont, ImageFilter
import numpy as np

BASE_DIR = r"G:\Mi unidad\CONTABILIDAD\BIONATIVA"
PRODUCTS_DIR = os.path.join(BASE_DIR, "img", "products")
INDUSTRIAL_DIR = os.path.join(PRODUCTS_DIR, "industrial")
os.makedirs(PRODUCTS_DIR, exist_ok=True)
os.makedirs(INDUSTRIAL_DIR, exist_ok=True)

# Templates
BOLSA_TEMPLATE_PATH = r"C:\Users\PC\.gemini\antigravity\brain\e175552c-93dd-44f2-b87c-e18e8df91d22\.user_uploaded\media_1795637594999_f0a19eac.jpg"
POTE_TEMPLATE_PATH = r"C:\Users\PC\.gemini\antigravity\brain\e175552c-93dd-44f2-b87c-e18e8df91d22\.user_uploaded\media_1795637595381_b792fbc9.jpg"
CAJA_TEMPLATE_PATH = r"C:\Users\PC\.gemini\antigravity\brain\e175552c-93dd-44f2-b87c-e18e8df91d22\.user_uploaded\media_1795637595383_4f3af509.jpg"

bolsa_tpl = Image.open(BOLSA_TEMPLATE_PATH)
pote_tpl = Image.open(POTE_TEMPLATE_PATH)
caja_tpl = Image.open(CAJA_TEMPLATE_PATH)

def generate_pote_image(product_name, lote="BNL240501A", fvenc="05/2026"):
    im = pote_tpl.copy()
    arr = np.array(im).copy()
    
    # Inpaint text area y=660 to 705, x=290 to 730
    sample_top = arr[648:658, 290:730].mean(axis=0)
    sample_bottom = arr[705:714, 290:730].mean(axis=0)
    for y in range(660, 705):
        alpha = (y - 660) / 45.0
        arr[y, 290:730] = (1 - alpha) * sample_top + alpha * sample_bottom
        
    # Inpaint Lote / FVenc area y=758 to 835, x=330 to 690
    sample_lote_top = arr[750:758, 330:690].mean(axis=0)
    sample_fvenc_bot = arr[835:845, 330:690].mean(axis=0)
    for y in range(758, 835):
        alpha = (y - 758) / 77.0
        arr[y, 330:690] = (1 - alpha) * sample_lote_top + alpha * sample_fvenc_bot

    im_clean = Image.fromarray(arr).convert("RGBA")
    
    # Supersampling 2x text overlay for ultra-crisp vector typography
    w, h = im_clean.size
    overlay = Image.new("RGBA", (w * 2, h * 2), (0, 0, 0, 0))
    odraw = ImageDraw.Draw(overlay)
    
    # Calculate best font size based on text width
    font_size = 24
    font_test = ImageFont.truetype("C:/Windows/Fonts/arialbd.ttf", font_size * 2)
    bbox = font_test.getbbox(product_name.upper())
    text_w = bbox[2] - bbox[0]
    while text_w > 390 * 2 and font_size > 14:
        font_size -= 1
        font_test = ImageFont.truetype("C:/Windows/Fonts/arialbd.ttf", font_size * 2)
        bbox = font_test.getbbox(product_name.upper())
        text_w = bbox[2] - bbox[0]
        
    font_prod = font_test
    font_details = ImageFont.truetype("C:/Windows/Fonts/arial.ttf", 23 * 2)
    
    # Product name
    odraw.text((510 * 2, 682 * 2), product_name.upper(), fill=(5, 5, 5, 255), font=font_prod, anchor="mm")
    
    # Lote and FVenc
    odraw.text((510 * 2, 775 * 2), f"LOTE: {lote}", fill=(5, 5, 5, 255), font=font_details, anchor="mm")
    odraw.text((510 * 2, 815 * 2), f"F.VENC: {fvenc}", fill=(5, 5, 5, 255), font=font_details, anchor="mm")
    
    # Downscale overlay
    overlay_res = overlay.resize((w, h), Image.Resampling.LANCZOS)
    im_final = Image.alpha_composite(im_clean, overlay_res)
    
    return im_final.convert("RGB")


def apply_powder_tone(pil_img, color_type=None):
    if not color_type:
        return pil_img
    img = pil_img.convert('RGB')
    arr = np.array(img).astype(np.float32)
    h, w, _ = arr.shape
    lum = arr.mean(axis=2)

    visited = np.zeros((h, w), dtype=bool)
    queue = deque()
    for x in range(w):
        for y in [0, 1, 2, h-3, h-2, h-1]:
            if lum[y, x] >= 244 and not visited[y, x]:
                visited[y, x] = True
                queue.append((y, x))
    for y in range(h):
        for x in [0, 1, 2, w-3, w-2, w-1]:
            if lum[y, x] >= 244 and not visited[y, x]:
                visited[y, x] = True
                queue.append((y, x))
    while queue:
        cy, cx = queue.popleft()
        for dy, dx in [(-1, 0), (1, 0), (0, -1), (0, 1)]:
            ny, nx = cy + dy, cx + dx
            if 0 <= ny < h and 0 <= nx < w and not visited[ny, nx]:
                if lum[ny, nx] >= 245:
                    visited[ny, nx] = True
                    queue.append((ny, nx))
    bg_mask = visited
    bag_mask_raw = (~bg_mask).astype(np.float32)

    label_mask = np.zeros((h, w), dtype=np.float32)
    r = 13
    for y in range(292, 739):
        for x in range(221, 543):
            dx = max(0, 221 + r - x, x - (542 - r))
            dy = max(0, 292 + r - y, y - (738 - r))
            if dx*dx + dy*dy <= r*r:
                label_mask[y, x] = 1.0

    label_pil = Image.fromarray((label_mask * 255).astype(np.uint8))
    label_dilated = label_pil.filter(ImageFilter.MaxFilter(7))
    label_weight = np.array(label_dilated).astype(np.float32) / 255.0

    bag_pil = Image.fromarray((bag_mask_raw * 255).astype(np.uint8))
    bag_eroded = bag_pil.filter(ImageFilter.MinFilter(3))
    bag_smooth = bag_eroded.filter(ImageFilter.GaussianBlur(1.2))
    bag_weight = np.array(bag_smooth).astype(np.float32) / 255.0

    powder_weight = np.clip(bag_weight * (1.0 - label_weight), 0.0, 1.0)
    pw_pil = Image.fromarray((powder_weight * 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(1.0))
    powder_weight = np.array(pw_pil).astype(np.float32) / 255.0

    L = np.clip(lum / 255.0, 0.0, 1.0)
    if color_type == "whey":
        intensity = 0.95
        r_factor = 1.0 + (0.05 * (1.0 - L) + 0.015) * intensity
        g_factor = 1.0 - (0.07 * (1.0 - L) + 0.035) * intensity
        b_factor = 1.0 - (0.29 * (1.0 - L) + 0.135) * intensity
    elif color_type == "soya":
        intensity = 0.70
        r_factor = 1.0 + (0.04 * (1.0 - L) + 0.010) * intensity
        g_factor = 1.0 - (0.05 * (1.0 - L) + 0.020) * intensity
        b_factor = 1.0 - (0.22 * (1.0 - L) + 0.090) * intensity
    else:
        return pil_img

    specular = np.clip((L - 0.94) / 0.05, 0.0, 1.0)
    target_r = np.clip(arr[:, :, 0] * r_factor, 0, 255)
    target_g = np.clip(arr[:, :, 1] * g_factor, 0, 255)
    target_b = np.clip(arr[:, :, 2] * b_factor, 0, 255)
    target_r = target_r * (1.0 - specular) + arr[:, :, 0] * specular
    target_g = target_g * (1.0 - specular) + arr[:, :, 1] * specular
    target_b = target_b * (1.0 - specular) + arr[:, :, 2] * specular

    pw = powder_weight[:, :, np.newaxis]
    blended = arr * (1.0 - pw) + np.stack([target_r, target_g, target_b], axis=2) * pw
    blended = np.clip(blended, 0, 255).astype(np.uint8)
    return Image.fromarray(blended)


def generate_bolsa_image(product_name, lote="BNL240501A", fvenc="05/2026", color_type=None):
    im = bolsa_tpl.copy()
    arr = np.array(im).copy()
    
    # Inpaint text area on bolsa: y=592 to 620, x=225 to 540
    sample_top = arr[580:590, 225:540].mean(axis=0)
    sample_bottom = arr[620:628, 225:540].mean(axis=0)
    for y in range(592, 620):
        alpha = (y - 592) / 28.0
        arr[y, 225:540] = (1 - alpha) * sample_top + alpha * sample_bottom
        
    # Inpaint Lote / FVenc area: y=649 to 708, x=250 to 520
    sample_lote_top = arr[642:649, 250:520].mean(axis=0)
    sample_fvenc_bot = arr[708:715, 250:520].mean(axis=0)
    for y in range(649, 708):
        alpha = (y - 649) / 59.0
        arr[y, 250:520] = (1 - alpha) * sample_lote_top + alpha * sample_fvenc_bot

    im_clean = Image.fromarray(arr).convert("RGBA")
    
    # Supersampling 2x
    w, h = im_clean.size
    overlay = Image.new("RGBA", (w * 2, h * 2), (0, 0, 0, 0))
    odraw = ImageDraw.Draw(overlay)
    
    font_size = 15
    font_test = ImageFont.truetype("C:/Windows/Fonts/arialbd.ttf", font_size * 2)
    bbox = font_test.getbbox(product_name.upper())
    text_w = bbox[2] - bbox[0]
    while text_w > 280 * 2 and font_size > 9:
        font_size -= 1
        font_test = ImageFont.truetype("C:/Windows/Fonts/arialbd.ttf", font_size * 2)
        bbox = font_test.getbbox(product_name.upper())
        text_w = bbox[2] - bbox[0]
        
    font_prod = font_test
    font_details = ImageFont.truetype("C:/Windows/Fonts/arial.ttf", 15 * 2)
    
    odraw.text((381 * 2, 605 * 2), product_name.upper(), fill=(5, 5, 5, 255), font=font_prod, anchor="mm")
    odraw.text((381 * 2, 663 * 2), f"LOTE: {lote}", fill=(5, 5, 5, 255), font=font_details, anchor="mm")
    odraw.text((381 * 2, 689 * 2), f"F.VENC: {fvenc}", fill=(5, 5, 5, 255), font=font_details, anchor="mm")
    
    overlay_res = overlay.resize((w, h), Image.Resampling.LANCZOS)
    im_final = Image.alpha_composite(im_clean, overlay_res)
    
    im_rgb = im_final.convert("RGB")
    if color_type:
        return apply_powder_tone(im_rgb, color_type)
    return im_rgb


def generate_caja_image(product_name, weight_str="25 KG – CAJA INDUSTRIAL"):
    im = caja_tpl.copy()
    arr = np.array(im).copy()
    
    # Inpaint product name: y=355 to 395, x=275 to 705
    sample_top = arr[345:354, 275:705].mean(axis=0)
    sample_bot = arr[395:402, 275:705].mean(axis=0)
    for y in range(355, 395):
        alpha = (y - 355) / 40.0
        arr[y, 275:705] = (1 - alpha) * sample_top + alpha * sample_bot
        
    # If weight_str is not 25 KG, inpaint line 2 as well
    if "25 KG" not in weight_str.upper():
        sample_w_top = arr[396:402, 275:705].mean(axis=0)
        sample_w_bot = arr[443:448, 275:705].mean(axis=0)
        for y in range(402, 443):
            alpha = (y - 402) / 41.0
            arr[y, 275:705] = (1 - alpha) * sample_w_top + alpha * sample_w_bot
            
    im_clean = Image.fromarray(arr).convert("RGBA")
    
    # Supersampling 2x
    w, h = im_clean.size
    overlay = Image.new("RGBA", (w * 2, h * 2), (0, 0, 0, 0))
    odraw = ImageDraw.Draw(overlay)
    
    font_size = 23
    font_test = ImageFont.truetype("C:/Windows/Fonts/arialbd.ttf", font_size * 2)
    bbox = font_test.getbbox(product_name.upper())
    text_w = bbox[2] - bbox[0]
    while text_w > 390 * 2 and font_size > 14:
        font_size -= 1
        font_test = ImageFont.truetype("C:/Windows/Fonts/arialbd.ttf", font_size * 2)
        bbox = font_test.getbbox(product_name.upper())
        text_w = bbox[2] - bbox[0]
        
    font_prod = font_test
    # Dark forest green: (16, 45, 27)
    odraw.text((505 * 2, 373 * 2), product_name.upper(), fill=(16, 45, 27, 255), font=font_prod, anchor="mm")
    
    if "25 KG" not in weight_str.upper():
        font_weight = ImageFont.truetype("C:/Windows/Fonts/arialbd.ttf", 22 * 2)
        # Terracotta orange: (182, 95, 30)
        odraw.text((505 * 2, 423 * 2), weight_str.upper(), fill=(182, 95, 30, 255), font=font_weight, anchor="mm")
        
    overlay_res = overlay.resize((w, h), Image.Resampling.LANCZOS)
    im_final = Image.alpha_composite(im_clean, overlay_res)
    
    return im_final.convert("RGB")


# Complete Catalog Definitions for the 9 products + Creatina Monohidratada
PRODUCTS_MAPPING = [
    {
        "id": "creatina-monohidratada",
        "name_label": "CREATINA MONOHIDRATADA",
        "weight_ind": "25 KG – CAJA INDUSTRIAL",
        "lote": "BNL240501A",
        "fvenc": "05/2026",
        "file_bolsa": "creatina-monohidratada-bolsa-1kg.jpg",
        "file_pote": "creatina-monohidratada-pote-1kg.jpg",
        "file_ind": "creatina-monohidratada-25kg.jpg",
        "is_orig_template": True
    },
    {
        "id": "glutamina-pura",
        "name_label": "GLUTAMINA 100% PURA",
        "weight_ind": "25 KG – CAJA INDUSTRIAL",
        "lote": "BNL240601A",
        "fvenc": "06/2026",
        "file_bolsa": "glutamina-pura-bolsa-1kg.jpg",
        "file_pote": "glutamina-pura-pote-1kg.jpg",
        "file_ind": "glutamina-pura-25kg.jpg",
        "is_orig_template": False
    },
    {
        "id": "colageno-hidrolizado",
        "name_label": "COLÁGENO HIDROLIZADO",
        "weight_ind": "20 KG – SACO INDUSTRIAL",
        "lote": "BNL240602A",
        "fvenc": "06/2026",
        "file_bolsa": "colageno-hidrolizado-bolsa-1kg.jpg",
        "file_pote": "colageno-hidrolizado-pote-1kg.jpg",
        "file_ind": "colageno-hidrolizado-20kg.jpg",
        "is_orig_template": False
    },
    {
        "id": "glucosamina-sulfato",
        "name_label": "SULFATO DE GLUCOSAMINA",
        "weight_ind": "25 KG – CAJA INDUSTRIAL",
        "lote": "BNL240603A",
        "fvenc": "06/2026",
        "file_bolsa": "glucosamina-sulfato-bolsa-1kg.jpg",
        "file_pote": "glucosamina-sulfato-pote-1kg.jpg",
        "file_ind": "glucosamina-sulfato-25kg.jpg",
        "is_orig_template": False
    },
    {
        "id": "ascorbato-de-sodio",
        "name_label": "ASCORBATO DE SODIO (VITAMINA C)",
        "weight_ind": "25 KG – CAJA INDUSTRIAL",
        "lote": "BNL240604A",
        "fvenc": "06/2026",
        "file_bolsa": "ascorbato-de-sodio-bolsa-1kg.jpg",
        "file_pote": "ascorbato-de-sodio-pote-1kg.jpg",
        "file_ind": "ascorbato-de-sodio-25kg.jpg",
        "is_orig_template": False
    },
    {
        "id": "citrato-de-magnesio",
        "name_label": "CITRATO DE MAGNESIO",
        "weight_ind": "25 KG – CAJA INDUSTRIAL",
        "lote": "BNL240605A",
        "fvenc": "06/2026",
        "file_bolsa": "citrato-de-magnesio-bolsa-1kg.jpg",
        "file_pote": "citrato-de-magnesio-pote-1kg.jpg",
        "file_ind": "citrato-de-magnesio-25kg.jpg",
        "is_orig_template": False
    },
    {
        "id": "glicinato-de-magnesio",
        "name_label": "GLICINATO DE MAGNESIO",
        "weight_ind": "25 KG – CAJA INDUSTRIAL",
        "lote": "BNL240606A",
        "fvenc": "06/2026",
        "file_bolsa": "glicinato-de-magnesio-bolsa-1kg.jpg",
        "file_pote": "glicinato-de-magnesio-pote-1kg.jpg",
        "file_ind": "glicinato-de-magnesio-25kg.jpg",
        "is_orig_template": False
    },
    {
        "id": "cloruro-de-magnesio",
        "name_label": "CLORURO DE MAGNESIO",
        "weight_ind": "25 KG – CAJA INDUSTRIAL",
        "lote": "BNL240607A",
        "fvenc": "06/2026",
        "file_bolsa": "cloruro-de-magnesio-bolsa-1kg.jpg",
        "file_pote": "cloruro-de-magnesio-pote-1kg.jpg",
        "file_ind": "cloruro-de-magnesio-25kg.jpg",
        "is_orig_template": False
    },
    {
        "id": "citrato-de-potasio",
        "name_label": "CITRATO DE POTASIO",
        "weight_ind": "25 KG – CAJA INDUSTRIAL",
        "lote": "BNL240608A",
        "fvenc": "06/2026",
        "file_bolsa": "citrato-de-potasio-bolsa-1kg.jpg",
        "file_pote": "citrato-de-potasio-pote-1kg.jpg",
        "file_ind": "citrato-de-potasio-25kg.jpg",
        "is_orig_template": False
    },
    {
        "id": "sal-de-epsom",
        "name_label": "SAL DE EPSOM",
        "weight_ind": "25 KG – CAJA INDUSTRIAL",
        "lote": "BNL240609A",
        "fvenc": "06/2026",
        "file_bolsa": "sal-de-epsom-bolsa-1kg.jpg",
        "file_pote": "sal-de-epsom-pote-1kg.jpg",
        "file_ind": "sal-de-epsom-25kg.jpg",
        "is_orig_template": False
    },
    {
        "id": "proteina-suero-leche-80",
        "name_label": "PROTEÍNA DE SUERO 80%",
        "weight_ind": "20 KG – SACO INDUSTRIAL",
        "lote": "BNL240610A",
        "fvenc": "06/2026",
        "color_type": "whey",
        "skip_ind": True,
        "file_bolsa": "proteina-suero-leche-80-bolsa-1kg.jpg",
        "file_pote": "proteina-suero-leche-80-pote-1kg.jpg",
        "file_ind": "proteina-suero-leche-80-20kg.jpg",
        "is_orig_template": False
    },
    {
        "id": "proteina-soya-vegetal",
        "name_label": "PROTEÍNA DE SOYA 90%",
        "weight_ind": "20 KG – SACO INDUSTRIAL",
        "lote": "BNL240611A",
        "fvenc": "06/2026",
        "color_type": "soya",
        "skip_ind": True,
        "file_bolsa": "proteina-soya-vegetal-bolsa-1kg.jpg",
        "file_pote": "proteina-soya-vegetal-pote-1kg.jpg",
        "file_ind": "proteina-soya-vegetal-20kg.jpg",
        "is_orig_template": False
    },
    {
        "id": "arginina-pura",
        "name_label": "L-ARGININA PURA",
        "weight_ind": "25 KG – TAMBOR INDUSTRIAL",
        "lote": "BNL240612A",
        "fvenc": "06/2026",
        "skip_ind": True,
        "file_bolsa": "arginina-pura-bolsa-1kg.jpg",
        "file_pote": "arginina-pura-pote-1kg.jpg",
        "file_ind": "arginina-pura-25kg.jpg",
        "is_orig_template": False
    }
]

print("Iniciando procesamiento de imágenes...")

for p in PRODUCTS_MAPPING:
    print(f"--- Procesando: {p['name_label']} ({p['id']}) ---")
    
    path_bolsa = os.path.join(PRODUCTS_DIR, p["file_bolsa"])
    path_pote = os.path.join(PRODUCTS_DIR, p["file_pote"])
    path_ind = os.path.join(INDUSTRIAL_DIR, p["file_ind"])
    path_main = os.path.join(PRODUCTS_DIR, f"{p['id']}-1kg.jpg")
    
    if p.get("is_orig_template"):
        bolsa_tpl.save(path_bolsa, quality=95)
        pote_tpl.save(path_pote, quality=95)
        caja_tpl.save(path_ind, quality=95)
        pote_tpl.save(path_main, quality=95)
    else:
        im_bolsa = generate_bolsa_image(p["name_label"], p["lote"], p["fvenc"], color_type=p.get("color_type"))
        im_bolsa.save(path_bolsa, quality=95)
        
        path_cat = os.path.join(PRODUCTS_DIR, "catalogo-1kg", f"{p['id']}-1kg.jpg")
        im_bolsa.save(path_cat, quality=95)
        
        im_pote = generate_pote_image(p["name_label"], p["lote"], p["fvenc"])
        im_pote.save(path_pote, quality=95)
        
        if not p.get("skip_ind"):
            im_caja = generate_caja_image(p["name_label"], p["weight_ind"])
            im_caja.save(path_ind, quality=95)
        
        # Guardar también como hero image 1kg (el pote boticario)
        im_pote.save(path_main, quality=95)
        
    print(f"  ✓ Creado Bolsa: {p['file_bolsa']}")
    print(f"  ✓ Creado Pote:  {p['file_pote']}")
    print(f"  ✓ Creado Caja:  {p['file_ind']}")
    print(f"  ✓ Creado Main:  {p['id']}-1kg.jpg")

print("\n¡Generación completada exitosamente para todos los productos!")
