"""
Script para generar las imágenes oficiales de presentaciones BioNativa LAB
a partir del Catálogo Inchem 2026, reemplazando logotipos de terceros por la marca BioNativa.
"""

import os
import pymupdf
from PIL import Image, ImageDraw, ImageFont
import numpy as np

BASE_DIR = r"G:\Mi unidad\CONTABILIDAD\BIONATIVA"
PDF_PATH = os.path.join(BASE_DIR, "FICHAS TECNICAS", "INCHEM 2026 CATÁLOGO (1).pdf")
PRODUCTS_DIR = os.path.join(BASE_DIR, "img", "products")
INDUSTRIAL_DIR = os.path.join(PRODUCTS_DIR, "industrial")
os.makedirs(INDUSTRIAL_DIR, exist_ok=True)

# 1. Renderizar logotipos de BioNativa
svg_logo = pymupdf.open(os.path.join(BASE_DIR, "img", "logo.svg"))
pix_logo = svg_logo[0].get_pixmap(dpi=200, alpha=True)
logo_rgba = Image.frombytes("RGBA", [pix_logo.width, pix_logo.height], pix_logo.samples)

arr_l = np.array(logo_rgba)
ys, xs = np.where(arr_l[:, :, 3] > 10)
bionativa_logo = logo_rgba.crop((xs.min(), ys.min(), xs.max()+1, ys.max()+1))

svg_sym = pymupdf.open(os.path.join(BASE_DIR, "img", "logo-symbol.svg"))
pix_sym = svg_sym[0].get_pixmap(dpi=200, alpha=True)
sym_rgba = Image.frombytes("RGBA", [pix_sym.width, pix_sym.height], pix_sym.samples)
arr_s = np.array(sym_rgba)
sys, sxs = np.where(arr_s[:, :, 3] > 10)
bionativa_symbol = sym_rgba.crop((sxs.min(), sys.min(), sxs.max()+1, sys.max()+1))

print("Logos vectoriales cargados con éxito.")

# 2. Renderizar páginas del catálogo a 300 DPI
doc = pymupdf.open(PDF_PATH)
pages_rendered = {}
for p_idx in range(2, 8): # páginas 3 a 8
    pix = doc[p_idx].get_pixmap(dpi=300)
    pages_rendered[p_idx + 1] = Image.frombytes("RGB", [pix.width, pix.height], pix.samples)
    print(f"Página {p_idx+1} renderizada a 300 DPI ({pix.width}x{pix.height})")

def get_fonts():
    try:
        f_title = ImageFont.truetype("arialbd.ttf", 26)
        f_sub = ImageFont.truetype("arialbd.ttf", 18)
        f_body = ImageFont.truetype("arial.ttf", 16)
        f_sm = ImageFont.truetype("arial.ttf", 13)
        f_jar_title = ImageFont.truetype("arialbd.ttf", 16)
        f_jar_sub = ImageFont.truetype("arial.ttf", 11)
        f_jar_sm = ImageFont.truetype("arial.ttf", 9)
    except:
        f_title = ImageFont.load_default()
        f_sub = f_title
        f_body = f_title
        f_sm = f_title
        f_jar_title = f_title
        f_jar_sub = f_title
        f_jar_sm = f_title
    return f_title, f_sub, f_body, f_sm, f_jar_title, f_jar_sub, f_jar_sm

f_title, f_sub, f_body, f_sm, f_jar_title, f_jar_sub, f_jar_sm = get_fonts()

# =========================================================================
# GENERADOR DE IMÁGENES INDUSTRIALES (20kg / 25kg)
# =========================================================================

# A) CAJA INDUSTRIAL 25kg
# Plantilla base: recortada de página 3 (Creatina)
p3 = pages_rendered[3]
w, h = p3.size
# Coordenadas exactas caja en página 3
caja_crop = p3.crop((int(w * 0.70), int(h * 0.60), int(w * 0.99), int(h * 0.90)))

def make_industrial_box(product_name, weight_str, filename):
    im = caja_crop.copy().convert("RGBA")
    
    # 1. Cubrir la etiqueta anterior
    white_patch = Image.new("RGBA", (230, 130), (255, 255, 255, 255))
    im.paste(white_patch, (550, 440))
    
    # 2. Dibujar texto y logo BioNativa
    draw = ImageDraw.Draw(im)
    # Nombre de producto
    name_lines = product_name.upper().split("\n")
    cur_y = 390
    for line in name_lines:
        draw.text((665, cur_y), line, fill=(30, 59, 43), font=f_sub, anchor="mm")
        cur_y += 22
        
    # Logo BioNativa
    lw = 180
    lh = int(lw * bionativa_logo.height / bionativa_logo.width)
    logo_resized = bionativa_logo.resize((lw, lh), Image.Resampling.LANCZOS)
    im.paste(logo_resized, (665 - lw//2, 450), logo_resized)
    
    # Peso y tipo
    draw.text((665, 520), f"{weight_str.upper()} - CAJA INDUSTRIAL", fill=(182, 122, 82), font=f_sm, anchor="mm")
    draw.text((665, 540), "CALIDAD Y PUREZA USP / COA", fill=(100, 100, 100), font=f_sm, anchor="mm")
    
    outpath = os.path.join(INDUSTRIAL_DIR, filename)
    im.convert("RGB").save(outpath, quality=95)
    print(f"Creada caja industrial: {filename}")

# B) TAMBOR INDUSTRIAL 25kg
# Plantilla base: recortada de página 4 (Ashwagandha) o página 5 (Espirulina)
p4 = pages_rendered[4]
w4, h4 = p4.size
tambor_crop = p4.crop((int(w4 * 0.33), int(h4 * 0.68), int(w4 * 0.50), int(h4 * 0.96)))

def make_industrial_drum(product_name, weight_str, filename):
    im = tambor_crop.copy().convert("RGBA")
    
    # Cubrir etiqueta anterior
    draw = ImageDraw.Draw(im)
    # Ubicación de etiqueta en el tambor
    dw, dh = im.size
    lx1, ly1 = int(dw * 0.22), int(dh * 0.30)
    lx2, ly2 = int(dw * 0.78), int(dh * 0.62)
    draw.rectangle([(lx1, ly1), (lx2, ly2)], fill=(255, 255, 255, 255))
    draw.rectangle([(lx1+2, ly1+2), (lx2-2, ly2-2)], outline=(182, 122, 82, 180), width=1)
    
    cx = (lx1 + lx2) // 2
    # Título producto
    name_lines = product_name.upper().split("\n")
    ty = ly1 + 18
    for l in name_lines:
        draw.text((cx, ty), l, fill=(30, 59, 43), font=f_sm, anchor="mm")
        ty += 16
        
    # Logo
    lw = int((lx2 - lx1) * 0.75)
    lh = int(lw * bionativa_logo.height / bionativa_logo.width)
    logo_resized = bionativa_logo.resize((lw, lh), Image.Resampling.LANCZOS)
    im.paste(logo_resized, (cx - lw//2, ty + 6), logo_resized)
    
    # Peso
    draw.text((cx, ly2 - 16), weight_str.upper(), fill=(30, 59, 43), font=f_sm, anchor="mm")
    
    outpath = os.path.join(INDUSTRIAL_DIR, filename)
    im.convert("RGB").save(outpath, quality=95)
    print(f"Creado tambor industrial: {filename}")

# C) SACO INDUSTRIAL 20kg / 25kg
# Plantilla base: recortada de página 4 (Proteína Suero) o página 5 (Citrato Magnesio)
saco_crop = p4.crop((int(w4 * 0.33), int(h4 * 0.04), int(w4 * 0.50), int(h4 * 0.29)))

def make_industrial_sack(product_name, weight_str, filename):
    im = saco_crop.copy().convert("RGBA")
    
    # Sello de marca en el saco
    sw, sh = im.size
    badge_w, badge_h = int(sw * 0.52), int(sh * 0.38)
    badge = Image.new("RGBA", (badge_w, badge_h), (250, 246, 240, 230))
    bdraw = ImageDraw.Draw(badge)
    bdraw.rectangle([(2, 2), (badge_w-3, badge_h-3)], outline=(30, 59, 43), width=2)
    bdraw.rectangle([(5, 5), (badge_w-6, badge_h-6)], outline=(182, 122, 82), width=1)
    
    # Logo en el sello
    lw = int(badge_w * 0.70)
    lh = int(lw * bionativa_logo.height / bionativa_logo.width)
    logo_r = bionativa_logo.resize((lw, lh), Image.Resampling.LANCZOS)
    badge.paste(logo_r, ((badge_w - lw)//2, 10), logo_r)
    
    # Texto en el sello
    cx = badge_w // 2
    bdraw.text((cx, 10 + lh + 14), product_name.upper().split("\n")[0], fill=(30, 59, 43), font=f_sm, anchor="mm")
    bdraw.text((cx, 10 + lh + 30), f"{weight_str.upper()} - SACO INDUSTRIAL", fill=(182, 122, 82), font=f_sm, anchor="mm")
    bdraw.text((cx, 10 + lh + 46), "GRADO PURO FARMACÉUTICO", fill=(80, 80, 80), font=f_sm, anchor="mm")
    
    bx = (sw - badge_w) // 2 + 10
    by = (sh - badge_h) // 2 - 20
    im.paste(badge, (bx, by), badge)
    
    outpath = os.path.join(INDUSTRIAL_DIR, filename)
    im.convert("RGB").save(outpath, quality=95)
    print(f"Creado saco industrial: {filename}")


# =========================================================================
# GENERADOR DE IMÁGENES MINORISTAS 1KG (POTE PLASTIFICADO + BOLSA)
# =========================================================================

# Plantilla base Pote + Bolsa de Creatina (página 3)
pote_pouch_base = p3.crop((int(w * 0.65), int(h * 0.35), int(w * 0.85), int(h * 0.65)))

# Plantilla base Espirulina (polvo verde, pág 5)
p5 = pages_rendered[5]
w5, h5 = p5.size
pote_pouch_green = p5.crop((int(w5 * 0.65), int(h5 * 0.35), int(w5 * 0.85), int(h5 * 0.65)))

# Plantilla base Té Verde (polvo marrón, pág 6)
p6 = pages_rendered[6]
w6, h6 = p6.size
pote_pouch_brown = p6.crop((int(w6 * 0.65), int(h6 * 0.35), int(w6 * 0.85), int(h6 * 0.65)))

# Plantilla base Colágeno (polvo crema, pág 7)
p7 = pages_rendered[7]
w7, h7 = p7.size
pote_pouch_cream = p7.crop((int(w7 * 0.36), int(h7 * 0.38), int(w7 * 0.52), int(h7 * 0.67)))

def make_1kg_presentation(product_name, subtitle, filename, base_type="white"):
    if base_type == "green":
        im = pote_pouch_green.copy().convert("RGBA")
    elif base_type == "brown":
        im = pote_pouch_brown.copy().convert("RGBA")
    elif base_type == "cream":
        im = pote_pouch_cream.copy().convert("RGBA")
    else:
        im = pote_pouch_base.copy().convert("RGBA")
        
    pw, ph = im.size
    
    # 1. Limpiar etiqueta Inchem de la bolsa (lado derecho)
    # Parche neutro
    draw = ImageDraw.Draw(im)
    
    # Posición de la etiqueta de la bolsa
    # En escala de 874x850 aprox:
    p_lx = int(pw * 0.48)
    p_ly = int(ph * 0.42)
    p_w = int(pw * 0.08)
    p_h = int(ph * 0.20)
    draw.rectangle([(p_lx, p_ly), (p_lx + p_w, p_ly + p_h)], fill=(248, 248, 248, 240))
    
    # Isotipo BioNativa en la bolsa
    sw = int(p_w * 0.70)
    sh = int(sw * bionativa_symbol.height / bionativa_symbol.width)
    sym_r = bionativa_symbol.resize((sw, sh), Image.Resampling.LANCZOS)
    im.paste(sym_r, (p_lx + (p_w - sw)//2, p_ly + 10), sym_r)
    
    # 2. Etiqueta boticaria en el Pote Blanco (lado izquierdo)
    label_w = int(pw * 0.28)
    label_h = int(ph * 0.24)
    label = Image.new("RGBA", (label_w, label_h), (255, 255, 255, 245))
    ldraw = ImageDraw.Draw(label)
    
    # Bordes estéticos boticarios
    ldraw.rectangle([(2, 2), (label_w-3, label_h-3)], outline=(30, 59, 43, 200), width=1)
    ldraw.rectangle([(5, 5), (label_w-6, label_h-6)], outline=(182, 122, 82, 120), width=1)
    
    # Logo en pote
    lw = int(label_w * 0.70)
    lh = int(lw * bionativa_logo.height / bionativa_logo.width)
    logo_jar = bionativa_logo.resize((lw, lh), Image.Resampling.LANCZOS)
    label.paste(logo_jar, ((label_w - lw)//2, 10), logo_jar)
    
    # Textos
    cx = label_w // 2
    y_text = 10 + lh + 14
    ldraw.text((cx, y_text), product_name.upper(), fill=(30, 59, 43), font=f_jar_title, anchor="mm")
    ldraw.text((cx, y_text + 18), subtitle.upper(), fill=(182, 122, 82), font=f_jar_sub, anchor="mm")
    ldraw.text((cx, y_text + 34), "100% PURO • GRADO FARMACÉUTICO", fill=(80, 80, 80), font=f_jar_sm, anchor="mm")
    ldraw.text((cx, y_text + 48), "CONTENIDO NETO 1 KG", fill=(30, 59, 43), font=f_jar_sm, anchor="mm")
    
    # Pegar en el cuerpo del pote
    jar_x = int(pw * 0.16)
    jar_y = int(ph * 0.32)
    im.paste(label, (jar_x, jar_y), label)
    
    outpath = os.path.join(PRODUCTS_DIR, filename)
    im.convert("RGB").save(outpath, quality=95)
    print(f"Creada presentación 1kg: {filename}")


# =========================================================================
# EJECUCIÓN DEL CATÁLOGO COMPLETO DE LOS 16 PRODUCTOS
# =========================================================================

CATALOG_MAPPING = [
    {
        "id": "creatina-monohidratada",
        "name_1k": "Creatina Monohidratada",
        "sub_1k": "Micronizada 200 Mesh",
        "base_1k": "white",
        "ind_type": "box",
        "ind_name": "Creatina\nMonohidratada",
        "weight_ind": "25 kg",
        "file_1k": "creatina-monohidratada-1kg.jpg",
        "file_ind": "creatina-monohidratada-25kg.jpg"
    },
    {
        "id": "proteina-suero-leche-80",
        "name_1k": "Proteína Suero 80%",
        "sub_1k": "Whey Protein WPC80",
        "base_1k": "white",
        "ind_type": "sack",
        "ind_name": "Proteína Suero 80%\nWhey WPC80",
        "weight_ind": "20 kg",
        "file_1k": "proteina-suero-leche-80-1kg.jpg",
        "file_ind": "proteina-suero-leche-80-20kg.jpg"
    },
    {
        "id": "proteina-soya-vegetal",
        "name_1k": "Proteína de Soya",
        "sub_1k": "Aislada 90% No-GMO",
        "base_1k": "white",
        "ind_type": "sack",
        "ind_name": "Proteína de Soya\nAislada 90%",
        "weight_ind": "20 kg",
        "file_1k": "proteina-soya-vegetal-1kg.jpg",
        "file_ind": "proteina-soya-vegetal-20kg.jpg"
    },
    {
        "id": "ashwagandha-pura",
        "name_1k": "Ashwagandha Pura",
        "sub_1k": "Extracto KSM Withania",
        "base_1k": "brown",
        "ind_type": "drum",
        "ind_name": "Ashwagandha\nKSM Estandarizada",
        "weight_ind": "25 kg",
        "file_1k": "ashwagandha-pura-1kg.jpg",
        "file_ind": "ashwagandha-pura-25kg.jpg"
    },
    {
        "id": "glucosamina-sulfato",
        "name_1k": "Sulfato Glucosamina",
        "sub_1k": "Grado USP Articular",
        "base_1k": "white",
        "ind_type": "box",
        "ind_name": "Sulfato de\nGlucosamina USP",
        "weight_ind": "25 kg",
        "file_1k": "glucosamina-sulfato-1kg.jpg",
        "file_ind": "glucosamina-sulfato-25kg.jpg"
    },
    {
        "id": "espirulina-pura",
        "name_1k": "Espirulina Orgánica",
        "sub_1k": "Arthrospira Platensis",
        "base_1k": "green",
        "ind_type": "drum",
        "ind_name": "Espirulina\nOrgánica Polvo",
        "weight_ind": "25 kg",
        "file_1k": "espirulina-pura-1kg.jpg",
        "file_ind": "espirulina-pura-25kg.jpg"
    },
    {
        "id": "citrato-de-magnesio",
        "name_1k": "Citrato de Magnesio",
        "sub_1k": "Alta Biodisponibilidad",
        "base_1k": "white",
        "ind_type": "sack",
        "ind_name": "Citrato de\nMagnesio USP",
        "weight_ind": "25 kg",
        "file_1k": "citrato-de-magnesio-1kg.jpg",
        "file_ind": "citrato-de-magnesio-25kg.jpg"
    },
    {
        "id": "citrato-de-potasio",
        "name_1k": "Citrato de Potasio",
        "sub_1k": "Grado Farmacéutico",
        "base_1k": "white",
        "ind_type": "sack",
        "ind_name": "Citrato de\nPotasio USP",
        "weight_ind": "25 kg",
        "file_1k": "citrato-de-potasio-1kg.jpg",
        "file_ind": "citrato-de-potasio-25kg.jpg"
    },
    {
        "id": "sal-de-epsom",
        "name_1k": "Sal de Epsom",
        "sub_1k": "Sulfato de Magnesio",
        "base_1k": "white",
        "ind_type": "sack",
        "ind_name": "Sal de Epsom\nSulfato Magnesio",
        "weight_ind": "25 kg",
        "file_1k": "sal-de-epsom-1kg.jpg",
        "file_ind": "sal-de-epsom-25kg.jpg"
    },
    {
        "id": "cloruro-de-magnesio",
        "name_1k": "Cloruro de Magnesio",
        "sub_1k": "Hexahidratado Cristalino",
        "base_1k": "white",
        "ind_type": "sack",
        "ind_name": "Cloruro Magnesio\nHexahidratado",
        "weight_ind": "25 kg",
        "file_1k": "cloruro-de-magnesio-1kg.jpg",
        "file_ind": "cloruro-de-magnesio-25kg.jpg"
    },
    {
        "id": "te-verde-extracto",
        "name_1k": "Té Verde Concentrado",
        "sub_1k": "Polifenoles y EGCG",
        "base_1k": "brown",
        "ind_type": "drum",
        "ind_name": "Extracto Té Verde\nEGCG Polvo",
        "weight_ind": "25 kg",
        "file_1k": "te-verde-extracto-1kg.jpg",
        "file_ind": "te-verde-extracto-25kg.jpg"
    },
    {
        "id": "colageno-hidrolizado",
        "name_1k": "Colágeno Hidrolizado",
        "sub_1k": "Péptidos Tipo I y III",
        "base_1k": "cream",
        "ind_type": "sack",
        "ind_name": "Colágeno\nHidrolizado Puro",
        "weight_ind": "20 kg",
        "file_1k": "colageno-hidrolizado-1kg.jpg",
        "file_ind": "colageno-hidrolizado-20kg.jpg"
    },
    {
        "id": "arginina-pura",
        "name_1k": "L-Arginina Pura",
        "sub_1k": "Grado USP Óxido Nítrico",
        "base_1k": "white",
        "ind_type": "drum",
        "ind_name": "L - Arginina\nGrado USP Puro",
        "weight_ind": "25 kg",
        "file_1k": "arginina-pura-1kg.jpg",
        "file_ind": "arginina-pura-25kg.jpg"
    },
    {
        "id": "glutamina-pura",
        "name_1k": "L-Glutamina Pura",
        "sub_1k": "Micronizada Vegetal",
        "base_1k": "white",
        "ind_type": "drum",
        "ind_name": "L - Glutamina\nMicronizada Pura",
        "weight_ind": "25 kg",
        "file_1k": "glutamina-pura-1kg.jpg",
        "file_ind": "glutamina-pura-25kg.jpg"
    },
    {
        "id": "ascorbato-de-sodio",
        "name_1k": "Ascorbato de Sodio",
        "sub_1k": "Vitamina C No Ácida",
        "base_1k": "white",
        "ind_type": "box",
        "ind_name": "Ascorbato de Sodio\nVitamina C Neutra",
        "weight_ind": "25 kg",
        "file_1k": "ascorbato-de-sodio-1kg.jpg",
        "file_ind": "ascorbato-de-sodio-25kg.jpg"
    },
    {
        "id": "glicinato-de-magnesio",
        "name_1k": "Glicinato de Magnesio",
        "sub_1k": "Quelado Alta Asimilación",
        "base_1k": "white",
        "ind_type": "box",
        "ind_name": "Bisglicinato de\nMagnesio Quelado",
        "weight_ind": "25 kg",
        "file_1k": "glicinato-de-magnesio-1kg.jpg",
        "file_ind": "glicinato-de-magnesio-25kg.jpg"
    }
]

print("Iniciando generación de imágenes...")
for prod in CATALOG_MAPPING:
    # 1. Generar imagen 1kg (Pote + Bolsa)
    make_1kg_presentation(
        product_name=prod["name_1k"],
        subtitle=prod["sub_1k"],
        filename=prod["file_1k"],
        base_type=prod["base_1k"]
    )
    
    # 2. Generar imagen industrial
    if prod["ind_type"] == "box":
        make_industrial_box(
            product_name=prod["ind_name"],
            weight_str=prod["weight_ind"],
            filename=prod["file_ind"]
        )
    elif prod["ind_type"] == "drum":
        make_industrial_drum(
            product_name=prod["ind_name"],
            weight_str=prod["weight_ind"],
            filename=prod["file_ind"]
        )
    elif prod["ind_type"] == "sack":
        make_industrial_sack(
            product_name=prod["ind_name"],
            weight_str=prod["weight_ind"],
            filename=prod["file_ind"]
        )

print("¡Proceso completado exitosamente! Todas las imágenes han sido generadas y brandeadas.")
