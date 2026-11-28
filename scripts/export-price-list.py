"""
Generador oficial del Excel Maestro de Precios, Costos y Márgenes de BioNativa LAB.
Se ejecuta automáticamente al correr `node scripts/build-catalog.mjs`.
"""

import json
import os
import openpyxl
from openpyxl.styles import Font, PatternFill, Alignment, Border, Side
from openpyxl.utils import get_column_letter

ROOT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CATALOG_PATH = os.path.join(ROOT_DIR, "data", "catalog.master.json")
PROFIT_XLSX_PATH = os.path.join(ROOT_DIR, "PROFIT_PHARMA", "PROFIT_PHARMA_Catalogo_Precios.xlsx")
OUTPUT_DIR = os.path.join(ROOT_DIR, "LISTA DE PRECIOS")
OUTPUT_PATH = os.path.join(OUTPUT_DIR, "LISTA_PRECIOS_BIONATIVA_LAB_2026.xlsx")

# Costos reales unitarios por kg (S/ PEN) de los 19 productos propios BioNativa LAB
REAL_UNIT_COSTS = {
    "creatina-monohidratada": 61.00,
    "proteina-suero-leche-80": 94.00,
    "glutamina-pura": 49.00,
    "arginina-pura": 41.00,
    "proteina-soya-vegetal": 25.00,
    "colageno-hidrolizado": 40.00,
    "glucosamina-sulfato": 43.00,
    "ascorbato-de-sodio": 70.00,
    "espirulina-pura": 65.00,
    "te-verde-extracto": 139.00,
    "citrato-de-magnesio": 16.00,
    "glicinato-de-magnesio": 35.00,
    "cloruro-de-magnesio": 14.50,
    "citrato-de-potasio": 15.00,
    "sal-de-epsom": 8.93,
    "ashwagandha-pura": 89.00,
    "sulfato-de-condroitina": 103.57,
    "l-carnitina-base": 55.71,
    "stevia-pura": 114.29,
}


def main():
    os.makedirs(OUTPUT_DIR, exist_ok=True)

    with open(CATALOG_PATH, "r", encoding="utf-8") as f:
        catalog = json.load(f)

    wb_pf = openpyxl.load_workbook(PROFIT_XLSX_PATH, data_only=True)
    ws_pf_src = wb_pf["Precios Inteligentes"]
    pf_costs = []
    for r in range(2, ws_pf_src.max_row + 1):
        pid = ws_pf_src.cell(r, 1).value
        if pid is not None:
            pf_costs.append({
                "linea": ws_pf_src.cell(r, 2).value,
                "producto": ws_pf_src.cell(r, 3).value,
                "presentacion": ws_pf_src.cell(r, 4).value,
                "costo": float(ws_pf_src.cell(r, 5).value),
                "precio_venta": float(ws_pf_src.cell(r, 7).value),
            })

    bn_rows = []
    for p in catalog:
        if p.get("brand") == "bionativa-lab":
            vs = p["variants"]
            bolsa_price = float(vs[0]["pricing"]["webPrice"])
            unit_cost = REAL_UNIT_COSTS.get(p["id"], round(bolsa_price / 1.40, 2))
            for v in vs:
                kg = (v.get("netWeightGrams") or 1000) / 1000.0
                cost_total = round(unit_cost * kg, 2)
                reg_price = v["pricing"].get("regularPrice")
                web_price = float(v["pricing"]["webPrice"])
                pkg = v.get("packagingType", "")
                if pkg == "bolsa":
                    seg = "BioNativa - Bolsa 1 kg"
                elif pkg == "pote":
                    seg = "BioNativa - Pote 1 kg"
                else:
                    seg = "BioNativa - Granel Industrial"
                bn_rows.append({
                    "marca": "BioNativa LAB",
                    "segmento": seg,
                    "sku": v["sku"],
                    "producto": p["name"],
                    "categoria": p["categoryName"],
                    "presentacion": v["name"],
                    "kg": kg,
                    "costo_unit": unit_cost,
                    "costo_total": cost_total,
                    "reg_price": float(reg_price) if reg_price is not None else None,
                    "web_price": web_price,
                })

    pf_rows = []
    idx = 0
    for p in catalog:
        if p.get("brand") == "profit-pharma":
            for v in p.get("variants", []):
                src = pf_costs[idx]
                idx += 1
                pf_rows.append({
                    "marca": "Profit Pharma",
                    "segmento": "Profit Pharma",
                    "sku": v["sku"],
                    "linea": p.get("subCategoryName") or src["linea"],
                    "producto": p["name"].replace(" — Profit Pharma", ""),
                    "presentacion": v["name"],
                    "costo": src["costo"],
                    "web_price": float(v["pricing"]["webPrice"]),
                })

    wb = openpyxl.Workbook()

    HEADER_FILL = PatternFill("solid", fgColor="1E3B2B")
    ALT_FILL = PatternFill("solid", fgColor="F5F7F5")
    TOTAL_FILL = PatternFill("solid", fgColor="E6EFE9")
    HEADER_FONT = Font(name="Calibri", size=11, bold=True, color="FFFFFF")
    TITLE_FONT = Font(name="Calibri", size=15, bold=True, color="1E3B2B")
    SUBTITLE_FONT = Font(name="Calibri", size=10, italic=True, color="4A5568")
    BOLD_FONT = Font(name="Calibri", size=10, bold=True, color="1A202C")
    BODY_FONT = Font(name="Calibri", size=10, color="1A202C")
    THIN_BORDER = Border(
        left=Side(style="thin", color="D1D5DB"),
        right=Side(style="thin", color="D1D5DB"),
        top=Side(style="thin", color="D1D5DB"),
        bottom=Side(style="thin", color="D1D5DB"),
    )
    CURR_FMT = '"S/ "#,##0.00'
    PCT_FMT = "0.0%"
    INT_FMT = "#,##0"

    def style_header(ws, row, max_col):
        ws.row_dimensions[row].height = 28
        for c in range(1, max_col + 1):
            cell = ws.cell(row, c)
            cell.fill = HEADER_FILL
            cell.font = HEADER_FONT
            cell.alignment = Alignment(horizontal="center", vertical="center", wrap_text=True)
            cell.border = THIN_BORDER

    def auto_fit(ws, min_w=10, max_w=42):
        for col in ws.columns:
            col_letter = get_column_letter(col[0].column)
            max_len = 0
            for cell in col:
                if cell.row <= 2 and ws.title == "Resumen Ejecutivo":
                    continue
                val = str(cell.value or "")
                if val.startswith("="):
                    val = "S/ 99,999.99"
                max_len = max(max_len, len(val))
            ws.column_dimensions[col_letter].width = max(min_w, min(max_w, max_len + 4))

    # 1. Resumen Ejecutivo
    ws_res = wb.active
    ws_res.title = "Resumen Ejecutivo"
    ws_res.views.sheetView[0].showGridLines = True

    ws_res["A1"] = "BIONATIVA LAB — LISTA MAESTRA DE PRECIOS, COSTOS Y MÁRGENES (2026)"
    ws_res["A1"].font = TITLE_FONT
    ws_res["A2"] = (
        "Catálogo completo: 19 productos propios BioNativa LAB (57 SKUs) + 40 productos Profit Pharma (85 SKUs) "
        "= 59 productos (142 SKUs). Moneda: Soles (PEN, IGV incluido)."
    )
    ws_res["A2"].font = SUBTITLE_FONT

    res_headers = [
        "Segmento / Línea",
        "Cantidad SKUs",
        "Costo Promedio (S/)",
        "Precio Venta Promedio (S/)",
        "Importe Ganancia Prom. (S/)",
        "% Ganancia s/ Costo (Markup)",
        "% Margen s/ Venta (Bruto)",
    ]
    for c, h in enumerate(res_headers, 1):
        ws_res.cell(4, c, h)
    style_header(ws_res, 4, len(res_headers))

    segments = [
        "BioNativa - Bolsa 1 kg",
        "BioNativa - Pote 1 kg",
        "BioNativa - Granel Industrial",
        "Profit Pharma",
    ]
    cons_last_row = 1 + len(bn_rows) + len(pf_rows)

    for i, seg in enumerate(segments):
        r = 5 + i
        ws_res.cell(r, 1, seg).font = BOLD_FONT
        ws_res.cell(r, 2, f"=COUNTIF('Lista Consolidada'!$B$2:$B${cons_last_row}, A{r})").number_format = INT_FMT
        ws_res.cell(r, 3, f"=AVERAGEIF('Lista Consolidada'!$B$2:$B${cons_last_row}, A{r}, 'Lista Consolidada'!$G$2:$G${cons_last_row})").number_format = CURR_FMT
        ws_res.cell(r, 4, f"=AVERAGEIF('Lista Consolidada'!$B$2:$B${cons_last_row}, A{r}, 'Lista Consolidada'!$I$2:$I${cons_last_row})").number_format = CURR_FMT
        ws_res.cell(r, 5, f"=AVERAGEIF('Lista Consolidada'!$B$2:$B${cons_last_row}, A{r}, 'Lista Consolidada'!$J$2:$J${cons_last_row})").number_format = CURR_FMT
        ws_res.cell(r, 6, f"=AVERAGEIF('Lista Consolidada'!$B$2:$B${cons_last_row}, A{r}, 'Lista Consolidada'!$K$2:$K${cons_last_row})").number_format = PCT_FMT
        ws_res.cell(r, 7, f"=AVERAGEIF('Lista Consolidada'!$B$2:$B${cons_last_row}, A{r}, 'Lista Consolidada'!$L$2:$L${cons_last_row})").number_format = PCT_FMT
        for c in range(1, 8):
            cell = ws_res.cell(r, c)
            cell.border = THIN_BORDER
            if i % 2 == 1:
                cell.fill = ALT_FILL
            if c >= 2:
                cell.alignment = Alignment(horizontal="right", vertical="center")

    tr = 9
    ws_res.cell(tr, 1, "TOTAL CATÁLOGO GENERAL").font = BOLD_FONT
    ws_res.cell(tr, 2, "=SUM(B5:B8)").number_format = INT_FMT
    ws_res.cell(tr, 3, f"=AVERAGE('Lista Consolidada'!$G$2:$G${cons_last_row})").number_format = CURR_FMT
    ws_res.cell(tr, 4, f"=AVERAGE('Lista Consolidada'!$I$2:$I${cons_last_row})").number_format = CURR_FMT
    ws_res.cell(tr, 5, f"=AVERAGE('Lista Consolidada'!$J$2:$J${cons_last_row})").number_format = CURR_FMT
    ws_res.cell(tr, 6, f"=AVERAGE('Lista Consolidada'!$K$2:$K${cons_last_row})").number_format = PCT_FMT
    ws_res.cell(tr, 7, f"=AVERAGE('Lista Consolidada'!$L$2:$L${cons_last_row})").number_format = PCT_FMT
    for c in range(1, 8):
        cell = ws_res.cell(tr, c)
        cell.fill = TOTAL_FILL
        cell.font = BOLD_FONT
        cell.border = THIN_BORDER
        if c >= 2:
            cell.alignment = Alignment(horizontal="right", vertical="center")

    notes = [
        ("NOTAS METODOLÓGICAS Y FÓRMULAS:", True),
        ("1. Importe de Ganancia (Diferencia de Margen en S/): Precio de Venta Actual − Costo.", False),
        ("2. % Ganancia sobre Costo (Markup): (Precio de Venta Actual − Costo) / Costo.", False),
        ("3. % Margen sobre Venta (Margen Bruto): (Precio de Venta Actual − Costo) / Precio de Venta Actual.", False),
        ("4. Línea Propia BioNativa LAB: Costos reales por kg registrados en scripts/export-price-list.py.", False),
        ("5. Línea Profit Pharma: Costos oficiales de catálogo extraídos de PROFIT_PHARMA_Catalogo_Precios.xlsx.", False),
    ]
    for idx_n, (txt, is_b) in enumerate(notes):
        cell = ws_res.cell(11 + idx_n, 1, txt)
        cell.font = BOLD_FONT if is_b else BODY_FONT

    # 2. BioNativa LAB (57 SKUs)
    ws_bn = wb.create_sheet("BioNativa LAB (57 SKUs)")
    ws_bn.freeze_panes = "A2"
    bn_headers = [
        "SKU", "Producto", "Categoría", "Presentación", "Peso (kg)",
        "Costo Unit. / kg (S/)", "Costo Presentación (S/)", "Precio Regular (S/)",
        "Precio Venta Actual (S/)", "Importe Ganancia (S/)",
        "% Ganancia s/ Costo (Markup)", "% Margen s/ Venta (Bruto)",
    ]
    for c, h in enumerate(bn_headers, 1):
        ws_bn.cell(1, c, h)
    style_header(ws_bn, 1, len(bn_headers))

    for i, item in enumerate(bn_rows):
        r = 2 + i
        ws_bn.cell(r, 1, item["sku"])
        ws_bn.cell(r, 2, item["producto"])
        ws_bn.cell(r, 3, item["categoria"])
        ws_bn.cell(r, 4, item["presentacion"])
        ws_bn.cell(r, 5, item["kg"]).number_format = "#,##0.##"
        ws_bn.cell(r, 6, item["costo_unit"]).number_format = CURR_FMT
        ws_bn.cell(r, 7, f"=ROUND(E{r}*F{r}, 2)").number_format = CURR_FMT
        ws_bn.cell(r, 8, item["reg_price"]).number_format = CURR_FMT
        ws_bn.cell(r, 9, item["web_price"]).number_format = CURR_FMT
        ws_bn.cell(r, 10, f"=I{r}-G{r}").number_format = CURR_FMT
        ws_bn.cell(r, 11, f"=(I{r}-G{r})/G{r}").number_format = PCT_FMT
        ws_bn.cell(r, 12, f"=(I{r}-G{r})/I{r}").number_format = PCT_FMT
        for c in range(1, 13):
            cell = ws_bn.cell(r, c)
            cell.font = BODY_FONT
            cell.border = THIN_BORDER
            if i % 2 == 1:
                cell.fill = ALT_FILL

    # 3. Profit Pharma (85 SKUs)
    ws_pf = wb.create_sheet("Profit Pharma (85 SKUs)")
    ws_pf.freeze_panes = "A2"
    pf_headers = [
        "SKU", "Línea", "Producto", "Presentación", "Costo Catálogo (S/)",
        "Precio Mín. +35% (S/)", "Precio Venta Actual (S/)", "Importe Ganancia (S/)",
        "% Ganancia s/ Costo (Markup)", "% Margen s/ Venta (Bruto)", "Diferencia vs Mín. +35% (S/)",
    ]
    for c, h in enumerate(pf_headers, 1):
        ws_pf.cell(1, c, h)
    style_header(ws_pf, 1, len(pf_headers))

    for i, item in enumerate(pf_rows):
        r = 2 + i
        ws_pf.cell(r, 1, item["sku"])
        ws_pf.cell(r, 2, item["linea"])
        ws_pf.cell(r, 3, item["producto"])
        ws_pf.cell(r, 4, item["presentacion"])
        ws_pf.cell(r, 5, item["costo"]).number_format = CURR_FMT
        ws_pf.cell(r, 6, f"=ROUND(E{r}*1.35, 2)").number_format = CURR_FMT
        ws_pf.cell(r, 7, item["web_price"]).number_format = CURR_FMT
        ws_pf.cell(r, 8, f"=G{r}-E{r}").number_format = CURR_FMT
        ws_pf.cell(r, 9, f"=(G{r}-E{r})/E{r}").number_format = PCT_FMT
        ws_pf.cell(r, 10, f"=(G{r}-E{r})/G{r}").number_format = PCT_FMT
        ws_pf.cell(r, 11, f"=G{r}-F{r}").number_format = CURR_FMT
        for c in range(1, 12):
            cell = ws_pf.cell(r, c)
            cell.font = BODY_FONT
            cell.border = THIN_BORDER
            if i % 2 == 1:
                cell.fill = ALT_FILL

    # 4. Lista Consolidada (142 SKUs)
    ws_all = wb.create_sheet("Lista Consolidada")
    ws_all.freeze_panes = "A2"
    all_headers = [
        "Marca", "Segmento", "SKU", "Producto", "Categoría / Línea", "Presentación",
        "Costo (S/)", "Precio Regular (S/)", "Precio Venta Actual (S/)",
        "Importe Ganancia (S/)", "% Ganancia s/ Costo (Markup)", "% Margen s/ Venta (Bruto)",
    ]
    for c, h in enumerate(all_headers, 1):
        ws_all.cell(1, c, h)
    style_header(ws_all, 1, len(all_headers))

    all_items = []
    for item in bn_rows:
        all_items.append({
            "marca": item["marca"], "segmento": item["segmento"], "sku": item["sku"],
            "producto": item["producto"], "cat": item["categoria"], "pres": item["presentacion"],
            "costo": item["costo_total"], "reg": item["reg_price"], "venta": item["web_price"],
        })
    for item in pf_rows:
        all_items.append({
            "marca": item["marca"], "segmento": item["segmento"], "sku": item["sku"],
            "producto": item["producto"], "cat": item["linea"], "pres": item["presentacion"],
            "costo": item["costo"], "reg": None, "venta": item["web_price"],
        })

    for i, item in enumerate(all_items):
        r = 2 + i
        ws_all.cell(r, 1, item["marca"])
        ws_all.cell(r, 2, item["segmento"])
        ws_all.cell(r, 3, item["sku"])
        ws_all.cell(r, 4, item["producto"])
        ws_all.cell(r, 5, item["cat"])
        ws_all.cell(r, 6, item["pres"])
        ws_all.cell(r, 7, item["costo"]).number_format = CURR_FMT
        ws_all.cell(r, 8, item["reg"]).number_format = CURR_FMT
        ws_all.cell(r, 9, item["venta"]).number_format = CURR_FMT
        ws_all.cell(r, 10, f"=I{r}-G{r}").number_format = CURR_FMT
        ws_all.cell(r, 11, f"=(I{r}-G{r})/G{r}").number_format = PCT_FMT
        ws_all.cell(r, 12, f"=(I{r}-G{r})/I{r}").number_format = PCT_FMT
        for c in range(1, 13):
            cell = ws_all.cell(r, c)
            cell.font = BODY_FONT
            cell.border = THIN_BORDER
            if i % 2 == 1:
                cell.fill = ALT_FILL

    for ws in [ws_res, ws_bn, ws_pf, ws_all]:
        auto_fit(ws)
    ws_res.column_dimensions["A"].width = 32

    wb.save(OUTPUT_PATH)
    print(f"✔ Excel Maestro actualizado: {OUTPUT_PATH}")


if __name__ == "__main__":
    main()
