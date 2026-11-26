# Reparaciones locales: pagos, seguridad y promociones

Fecha: 26 de noviembre de 2026  
Rama de trabajo: `codex/bionativa-pagos-promociones-20261126`

## Recuperación y alcance

- La carpeta `G:\Mi unidad\CONTABILIDAD\BIONATIVA` estaba accesible.
- El árbol de trabajo estaba limpio. El commit base `44a18f59fe30c72440283e2ae4eeed366fb265d9`, fechado el 26 de noviembre de 2026, coincidía con `origin/main` en el repositorio local.
- No se encontró una carpeta independiente de copias de seguridad. La versión recuperable verificada es el commit base de Git; la rama nueva conserva ese punto de partida. No se sobrescribió ni eliminó ninguna copia.
- Durante esta continuación se limitaron los cambios al motor de promociones, pruebas e informe. El diff local ya existente de `index.html` se preservó y no se editó como parte de esta fase.

## Cambios

- `functions/api/payment-status.js`: además de exigir un ID numérico y consultar Mercado Pago desde el servidor, ahora requiere que la respuesta del proveedor corresponda al mismo ID solicitado y tenga un estado de texto. Las respuestas malformadas o de otro ID quedan como `unknown`; no confirman el pago.
- `pago-resultado.html`: se comprobó que solo consulta el endpoint del servidor, exige un ID numérico antes de consultar, inserta el ID verificado con `textContent` y codifica el texto del enlace de WhatsApp. No necesitó cambios adicionales.
- `js/promotions-engine.js`: cuando existe el producto en el catálogo oficial, su variante predeterminada y su precio oficial prevalecen sobre el precio de respaldo del llamador. Así las promociones asociadas a la variante predeterminada también se reflejan en listados que no envían un ID de variante. Para productos que no están en el catálogo se conserva el precio de respaldo, limitado a valores finitos no negativos.
- `js/promotions-engine.js`: la tienda ignora configuraciones promocionales locales por navegador y usa los valores predeterminados que coinciden con el checkout del servidor. El panel `admin-promociones` conserva sus borradores locales.
- `tests/checkout.test.mjs`: se añadieron casos para el precio promocional en listados sin variante, aislamiento del `localStorage`, referencias y ahorros de todos los combos y rechazo de respuestas de Mercado Pago con un ID distinto.
- El catálogo del navegador, el catálogo del servidor y las reglas de promociones activas ya coincidían en IDs, variantes y precios; se conservaron esos valores.

## Verificación

`node --test tests/checkout.test.mjs`: 11 pruebas aprobadas, 0 fallidas. `git diff --check` terminó sin errores.

No se realizó push, PR, despliegue ni publicación.
