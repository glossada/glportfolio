const { createRouter, createWebHashHistory } = window.VueRouter;
const loaderGlobal = window['vue3-sfc-loader'] || window.vue3SfcLoader;
const { loadModule } = loaderGlobal;


// Opciones compartidas del loader
export const SFC_OPTIONS = {
moduleCache: { vue: window.Vue },
getFile: async (url) => {
const res = await fetch(url);
if (!res.ok) throw new Error(`No se pudo cargar: ${url}`);
return await res.text();
},
addStyle: (textContent) => {
const style = document.createElement('style');
style.textContent = textContent;
document.head.appendChild(style);
}
};


const Home = () => loadModule('/src/views/HomeView.vue', SFC_OPTIONS);
const ExperienceView = () => loadModule('/src/views/ExperienceView.vue', SFC_OPTIONS);
const NotFound = () => loadModule('/src/views/NotFoundView.vue', SFC_OPTIONS);


export const router = createRouter({
history: createWebHashHistory(),
routes: [
{ path: '/', component: Home },
{ path: '/experience', component: ExperienceView },
{ path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
],
scrollBehavior(to, _from, savedPosition) {
// Si hay un hash en la URL (ancla), scroll a ese elemento
if (to.hash) {
return new Promise((resolve) => {
// Pequeño delay para asegurar que el DOM esté listo
setTimeout(() => {
const element = document.querySelector(to.hash);
if (element) {
resolve({
el: to.hash,
behavior: 'smooth',
top: 80 // Offset para compensar navbar fijo si existe
});
} else {
resolve({ top: 0 });
}
}, 100);
});
}
// Si hay posición guardada (navegación back/forward), restaurarla
if (savedPosition) {
return savedPosition;
}
// Por defecto, scroll al inicio
return { top: 0 };
}
});