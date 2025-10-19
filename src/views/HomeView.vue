<template>
    <section class="home mainContent">
        <h1>¡Hi Im {{ nombre }}!</h1>
        <p>I am a Full Stack Developer with a background in Systems Analysis and experience building high-traffic
            websites.
            My mission is to create scalable and efficient technological solutions, applying best practices in both
            back-end and front-
            end development. I aim to keep growing professionally through international projects, bringing adaptability,
            leadership,
            and fast learning skills to collaborative teams that drive innovation.</p>
        <h2>Technologies & Tools:</h2>
        <ul>
            <li>Front: TypeScript, JavaScript, Vue.js, React.js, Redux, Tailwind, HTML, CSS,
                SCSS.</li>
            <li>Back: Node.js, TypeScript, JavaScript, Node.js, AWS, MySQL, Redis, Docker, Kotlin,
                Elasticsearch, DynamoDB, Express.js, Docker, AWS, REST API, Postman.</li>
        </ul>
        <div class="contactContainer">
            <h2>Contact:</h2>
            <div class="contactBtns">
                <a href="mailto:gabriellossada@gmail.com">
                    <i class="icon-mail4"></i>
                    gabriellossada@gmail.com
                </a>
                <a href="https://github.com/glossada">
                    <i class="icon-github"></i>
                    github.com/glossada
                </a>
                <a href="https://www.linkedin.com/in/glossada/">
                    <i class="icon-linkedin"></i>
                    linkedin/glossada
                </a>
            </div>
        </div>
        <div class="jumpToExperience">
            <div class="jumpToExperienceBtn">
                <router-link to="/experience" class="experienceBtn">
                ¡Lets jump to my experience!
                </router-link>
            </div>
        </div>
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
        const nombre = ref('Gabriel');
        const activo = ref(false);
        const toggle = () => (activo.value = !activo.value);
        return { nombre, activo, toggle };
    }
};
</script>