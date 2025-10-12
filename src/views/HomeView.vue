<template>
    <section class="home mainContent">
        <h1>¡Hola! Soy {{ nombre }}</h1>
        <p>Portfolio con <strong>Vue 3 + Router</strong>, estilos en <code>src/styles</code> (SCSS), sin build.</p>


        <BaseButton :active="activo" @click="toggle">
            {{ activo ? 'Activo ✨' : 'Activar efecto' }}
        </BaseButton>
    </section>
</template>


<script>
const { ref, defineAsyncComponent } = Vue;


export default {
    name: 'HomeView',
    components: {
        BaseButton: defineAsyncComponent(() => window['vue3-sfc-loader'].loadModule('/src/components/BaseButton.vue', window.SFC_OPTIONS))
    },
    setup() {
        const nombre = ref('Tu Nombre');
        const activo = ref(false);
        const toggle = () => (activo.value = !activo.value);
        return { nombre, activo, toggle };
    }
};
</script>