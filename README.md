# ☕ Landing Page: Café Aroma

Sitio web de una cafetería hecho con **HTML y CSS** (con un poco de JavaScript para las interacciones). Totalmente responsive y sin dependencias. Es una buena base para cualquier negocio local: solo cambias textos, precios y colores.

## Características

- Diseño responsive con CSS Grid y Flexbox
- Menú de navegación fijo y menú hamburguesa en móvil
- Carta con pestañas (Cafés / Fríos / Dulces)
- Tabla de horarios y datos de contacto
- Formulario de reservas con validación (no permite fechas pasadas)
- Paleta de colores con variables CSS y HTML semántico

## Uso

Abre `index.html` en el navegador, o:

```bash
python -m http.server 8000
```

## Personalizar

- **Colores:** variables en `:root` de `css/style.css`
- **Carta y textos:** `index.html`
- **Reservas:** el formulario solo muestra una confirmación en pantalla; para enviarlas de verdad puedes conectar un servicio como Formspree o tu propio backend en `js/main.js`.

## Publicar con GitHub Pages

**Settings → Pages → Branch: `main` / `(root)` → Save**

## Estructura

```
index.html
css/style.css
js/main.js
```

## Licencia

MIT
