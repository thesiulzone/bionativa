@echo off
chcp 65001 > nul
echo ========================================================
echo   SELECCIÓN DE FOTOS HISTÓRICAS - BIONATIVA LAB
echo ========================================================
echo.
echo Se abrirá tu navegador para seleccionar fotos desde Google Fotos.
echo Podrás elegir fotos de:
echo  - Jorge de la Flor
echo  - Rutas: Pilcopata, Paucartambo, Yanatile, Curahuasi, Quiquijana
echo  - Maquinaria Lyson, colmenas, apiarios
echo  - Ecopride del Perú y BioNativa LAB
echo.
echo Al presionar 'Confirmar' en Google Fotos, se descargarán automáticamente
echo en la carpeta: img\historia
echo.
pause
python -u "c:\Users\PC\JORGE-DIGITAL-HUB\00-CENTRAL\tools\viral-pipeline\google_photos_picker.py" --brand "01-BIONATIVA-LAB" --limit 30 --output-dir "g:\Mi unidad\CONTABILIDAD\BIONATIVA\img\historia"
echo.
echo ========================================================
echo   Proceso finalizado. Puedes cerrar esta ventana.
echo ========================================================
pause
