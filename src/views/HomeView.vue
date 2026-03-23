<template>
    <section class="home mainContent">

        <!-- Intro -->
        <div class="introSection">
            <h1>{{ $t('home.greeting', { name: nombre }) }}</h1>
            <p>{{ $t('home.intro') }}</p>
        </div>

        <!-- Tecnologías como chips -->
        <div class="techSection">
            <h2>{{ $t('home.techTitle') }}</h2>
            <div class="techGrid">
                <div class="techCategory">
                    <h3 class="techLabel">{{ $t('home.techFront') }}</h3>
                    <div class="techTags">
                        <span class="tag">TypeScript</span>
                        <span class="tag">JavaScript</span>
                        <span class="tag">Vue.js</span>
                        <span class="tag">React.js</span>
                        <span class="tag">Redux</span>
                        <span class="tag">Tailwind</span>
                        <span class="tag">HTML</span>
                        <span class="tag">CSS / SCSS</span>
                    </div>
                </div>
                <div class="techCategory">
                    <h3 class="techLabel">{{ $t('home.techBack') }}</h3>
                    <div class="techTags">
                        <span class="tag">Node.js</span>
                        <span class="tag">TypeScript</span>
                        <span class="tag">Kotlin</span>
                        <span class="tag">Spring</span>
                        <span class="tag">MySQL</span>
                        <span class="tag">Redis</span>
                        <span class="tag">Elasticsearch</span>
                        <span class="tag">DynamoDB</span>
                        <span class="tag">Express.js</span>
                        <span class="tag">REST API</span>
                    </div>
                </div>
                <div class="techCategory">
                    <h3 class="techLabel">{{ $t('home.techInfra') }}</h3>
                    <div class="techTags">
                        <span class="tag">Docker</span>
                        <span class="tag">AWS</span>
                    </div>
                </div>
                <div class="techCategory">
                    <h3 class="techLabel">{{ $t('home.techAI') }}</h3>
                    <div class="techTags">
                        <span class="tag">Claude Code</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- Educación -->
        <div class="educationSection">
            <h2>{{ $t('home.educationTitle') }}</h2>
            <div class="educationItem">
                <strong>{{ $t('home.educationDegree') }}</strong>
                <p>{{ $t('home.educationInstitution') }}</p>
                <p class="educationDate">2016 - 2019 | {{ $t('home.educationStatus') }}</p>
            </div>
        </div>

        <!-- Idiomas -->
        <div class="languagesSection">
            <h2>{{ $t('home.languagesTitle') }}</h2>
            <ul>
                <li><strong>{{ $t('home.langSpanish') }}:</strong> {{ $t('home.langNative') }}</li>
                <li>
                    <strong>{{ $t('home.langEnglish') }}:</strong>
                    C2 — <a href="https://www.efset.org/cert/KeZwRB" target="_blank">{{ $t('home.langCertificate') }}</a>
                </li>
            </ul>
        </div>

        <!-- Contacto -->
        <div class="contactSection">
            <div class="contactContainer">
                <h2>{{ $t('home.contactTitle') }}</h2>
                <div class="contactBtns">
                    <a href="mailto:gabriellossada@gmail.com">
                        <i class="icon-mail4"></i>
                        gabriellossada@gmail.com
                    </a>
                    <a href="https://github.com/glossada" target="_blank">
                        <i class="icon-github"></i>
                        github.com/glossada
                    </a>
                    <a href="https://www.linkedin.com/in/glossada/" target="_blank">
                        <i class="icon-linkedin"></i>
                        linkedin/glossada
                    </a>
                </div>
            </div>
        </div>

        <!-- CTA Experiencia -->
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
const { ref } = Vue;

export default {
    name: 'HomeView',
    setup() {
        const nombre = ref('Gabriel');
        return { nombre };
    }
};
</script>
