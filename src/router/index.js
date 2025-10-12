const { createRouter, createWebHistory } = window.VueRouter;
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
const About = () => loadModule('/src/views/AboutView.vue', SFC_OPTIONS);
const NotFound = () => loadModule('/src/views/NotFoundView.vue', SFC_OPTIONS);


export const router = createRouter({
history: createWebHistory(),
routes: [
{ path: '/', component: Home },
{ path: '/about', component: About },
{ path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
]
});