# glportfolio


Stack sin build para Node 12.x: Vue 3.5.13 (CDN) + vue-router + vue3-sfc-loader. SCSS compilado en el navegador.


## Desarrollo
- Abrir carpeta en VS Code → **Live Server → Go Live**.
- Editar `src/views/*.vue` y `src/styles/*.scss`. La página recarga sola.


## Estructura
- `public/` → fuentes, iconos, imágenes.
- `src/views/` → vistas `.vue`.
- `src/components/` → componentes `.vue`.
- `src/styles/` → SCSS modular (`_variables.scss`, `_fonts.scss`, `main.scss`, por-vista, y `index.scss` como entry).
- `src/router/index.js` → rutas.


## Producción
Este starter es ideal para prototipos y hosting estático. Para producción con bundle/SSR, migrar a **Vite**/**Nuxt** usando una versión de Node aislada (p. ej., con `nvm`), sin tocar tu Node 12 del trabajo.