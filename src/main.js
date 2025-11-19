// Compilar SCSS (index.scss) en el navegador y adjuntarlo al <head>
async function compileGlobalSCSS() {
    const sass = await import('https://jspm.dev/sass');
    const entryUrl = new URL('/src/styles/index.scss', location.href);
    const scss = await fetch(entryUrl).then(r => r.text());
    
    
    // Importer basado en canonicalize/load (no FileImporter) para evitar el requerimiento file://
    const importer = {
        canonicalize(url, { containingUrl }) {
          // Base HTTP del archivo que hace el import (@use/@forward)
          const baseHttp = containingUrl
            ? (containingUrl.href.startsWith('sass:')
                ? containingUrl.href.replace(/^sass:/, '')
                : containingUrl.href)
            : new URL('/src/styles/index.scss', location.href).href;
      
          const baseDir = baseHttp.replace(/[^/]+$/, ''); // carpeta del scss actual
          const target = url.endsWith('.scss') ? url : `${url}.scss`;
      
          // Resuelve relativo al archivo que importa
          const resolved = new URL(target, baseDir).href;
      
          return new URL(resolved);
        },
      
        async load(canonicalUrl) {
            // canonicalUrl ya es http(s)
            const httpUrl = canonicalUrl.href;
          
            // intento 1: archivo tal cual
            let res = await fetch(httpUrl);
          
            // intento 2: parcial con '_' (p. ej. variables.scss -> _variables.scss)
            if (!res.ok) {
              const u = new URL(httpUrl);
              const altPath = u.pathname.replace(/\/([^/]+)$/, '/_$1'); // agrega _
              const altUrl = `${u.origin}${altPath}`;
              res = await fetch(altUrl);
            }
          
            if (!res.ok) throw new Error(`SCSS no encontrado: ${httpUrl}`);
            const contents = await res.text();
            return { contents, syntax: 'scss' };
          }
          
      };
      
    
    
    const out = await sass.compileStringAsync(scss, {
    url: entryUrl,
    importers: [importer]
    });
    
    
    const style = document.createElement('style');
    style.setAttribute('data-origin', 'scss:global');
    style.textContent = out.css;
    document.head.appendChild(style);
    }
    
    
    await compileGlobalSCSS();
    
    
    // --- Router ---
    import { router, SFC_OPTIONS } from './router/index.js';
    // expone opciones del loader para que las SFC puedan usarlas (p. ej., desde HomeView.vue)
    window.SFC_OPTIONS = SFC_OPTIONS;

    // --- i18n ---
    import { i18n } from './i18n/index.js';

    // App raíz mínima (header + router-view)
    const { createApp, defineAsyncComponent } = window.Vue;
    const loader = window['vue3-sfc-loader'] || window.vue3SfcLoader;
    const App = {
      components: {
        NavBar: defineAsyncComponent(() =>
          loader.loadModule('/src/components/NavBar.vue', window.SFC_OPTIONS)
        )
      },
      template: `
          <div class="chirimboloOne"></div>
          <div class="chirimboloTwo"></div>
        <NavBar />
        <main class="container content mainContent">
          <router-view />
        </main>
      `
    };


    createApp(App).use(router).use(i18n).mount('#app');