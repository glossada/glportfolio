<template>
    <section class="home mainContent">
        <div class="introSection">
            <h1>{{ $t('home.greeting', { name: nombre }) }}</h1>
            <p>{{ $t('home.intro') }}</p>
        </div>

        <div class="techSection">
            <h2>{{ $t('home.techTitle') }}</h2>
            <ul>
                <li><strong>{{ $t('home.techFront') }}</strong> TypeScript, JavaScript, Vue.js, React.js, Redux, Tailwind, HTML, CSS,
                    SCSS.</li>
                <li><strong>{{ $t('home.techBack') }}</strong> Node.js, TypeScript, JavaScript, Node.js, MySQL, Redis, Kotlin,
                    Elasticsearch, DynamoDB, Express.js, REST API, Postman.</li>
                <li><strong>{{ $t('home.techInfra') }}</strong> Docker, AWS.</li>
                <li><strong>{{ $t('home.techAI') }}</strong> Claude Code AI.</li>
            </ul>
        </div>

        <div class="educationSection">
            <h2>{{ $t('home.educationTitle') }}</h2>
            <div class="educationItem">
                <strong>{{ $t('home.educationDegree') }}</strong>
                <p>{{ $t('home.educationInstitution') }}</p>
                <p class="educationDate">2016 - 2019 | {{ $t('home.educationStatus') }}</p>
            </div>
        </div>

        <div class="languagesSection">
            <h2>{{ $t('home.languagesTitle') }}</h2>
            <ul>
                <li><strong>{{ $t('home.langSpanish') }}:</strong> {{ $t('home.langNative') }}</li>
                <li><strong>{{ $t('home.langEnglish') }}:</strong> C2 - <a href="https://www.efset.org/cert/KeZwRB" target="_blank">{{ $t('home.langCertificate') }}</a></li>
            </ul>
        </div>

        <div class="contactSection">
            <div class="contactContainer">
                <h2>{{ $t('home.contactTitle') }}</h2>
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
        </div>

        <div class="experienceSection">
            <div class="jumpToExperience">
                <div class="jumpToExperienceBtn">
                    <router-link to="/experience" class="experienceBtn">
                    {{ $t('home.experienceBtn') }} <i class="icon-arrow-right2"></i>
                    </router-link>
                </div>
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