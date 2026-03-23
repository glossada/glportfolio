<template>
    <section class="about mainContent">

        <h1>{{ $t('experience.title') }}</h1>

        <!-- Empresa -->
        <div class="enterpriseTitle">
            <h2>
                <a href="https://42i.co/" target="_blank">
                    <img src="/public/images/42i.png" alt="42i Logo" />
                    {{ $t('experience.company') }}
                </a>
            </h2>
            <p class="workPeriod">{{ $t('experience.workPeriod') }}</p>
        </div>

        <!-- Tabs de navegación -->
        <div class="expTabs">
            <button
                class="expTab"
                :class="{ active: activeTab === 'backend' }"
                @click="setTab('backend')"
            >
                {{ $t('experience.backEnd') }}
            </button>
            <button
                class="expTab"
                :class="{ active: activeTab === 'frontend' }"
                @click="setTab('frontend')"
            >
                {{ $t('experience.frontEnd') }}
            </button>
            <button
                class="expTab"
                :class="{ active: activeTab === 'events' }"
                @click="setTab('events')"
            >
                {{ $t('experience.event') }}
            </button>
            <button
                class="expTab"
                :class="{ active: activeTab === 'extra' }"
                @click="setTab('extra')"
            >
                {{ $t('experience.extra') }}
            </button>
        </div>

        <!-- Contenido por tab -->

        <!-- Backend -->
        <div v-show="activeTab === 'backend'" class="tabContent backEndSection">
            <div class="tabHeader">
                <h3>{{ $t('experience.backEnd') }}</h3>
                <p class="tabSubtitle">{{ $t('experience.backEndMainServer') }}</p>
            </div>
            <ul>
                <li v-for="(item, index) in $tm('experience.backEndMainServerItems')" :key="index">{{ item }}</li>
            </ul>
            <div class="techPill">
                <strong>{{ $t('experience.backEndMainServerTech') }}</strong>
                <span class="tag">Kotlin</span>
                <span class="tag">Spring</span>
                <span class="tag">Node.js</span>
                <span class="tag">MySQL</span>
                <span class="tag">SQS</span>
                <span class="tag">Redis</span>
            </div>
        </div>

        <!-- Frontend -->
        <div v-show="activeTab === 'frontend'" class="tabContent BackOfficeSection">
            <div class="tabHeader">
                <h3>{{ $t('experience.frontEnd') }}</h3>
                <p class="tabSubtitle">{{ $t('experience.backOffice') }}</p>
            </div>
            <a href="https://42i.co/portfolio/pulip" target="_blank">
                <img class="pulipImg" src="/public/images/pulip-logo.png" alt="Pulip Logo" />
            </a>
            <ul>
                <li v-for="(item, index) in $tm('experience.backOfficeItems')" :key="index">{{ item }}</li>
            </ul>
            <div class="techPill">
                <strong>{{ $t('experience.backOfficeTech') }}</strong>
                <span class="tag">React</span>
                <span class="tag">TypeScript</span>
                <span class="tag">JavaScript</span>
                <span class="tag">Redux</span>
                <span class="tag">Bootstrap</span>
                <span class="tag">SCSS</span>
            </div>
        </div>

        <!-- Events -->
        <div v-show="activeTab === 'events'" class="tabContent EventSection">
            <div class="tabHeader">
                <h3>{{ $t('experience.event') }}</h3>
                <p class="tabSubtitle">{{ $t('experience.eventIntro') }}</p>
            </div>
            <div class="eventLogos">
                <a href="https://www.hotsale.com.mx/" target="_blank">
                    <img class="eventImg" src="/public/images/hotsale-logo.png" alt="Hotsale Mexico" />
                    <span>Hotsale (México)</span>
                </a>
                <a href="https://www.hotfashion.mx/" target="_blank">
                    <img class="eventImg" src="/public/images/hotfashion-logo.png" alt="Hotfashion" />
                    <span>Hotfashion (México)</span>
                </a>
                <a href="https://www.hotsale.com.co/" target="_blank">
                    <img class="eventImg" src="/public/images/hotsale-colombia-logo.png" alt="Hotsale Colombia" />
                    <span>Hotsale (Colombia)</span>
                </a>
                <a href="https://www.cyberdays.gt/" target="_blank">
                    <img class="eventImg" src="/public/images/cyberdays-gt-logo.png" alt="Cyberdays Guatemala" />
                    <span>Cyberdays (Guatemala)</span>
                </a>
                <a href="https://www.glamdays.com.ar/" target="_blank">
                    <img class="eventImg" src="/public/images/glamdays-logo.png" alt="Glamdays Argentina" />
                    <span>Glamdays (Argentina)</span>
                </a>
            </div>
            <ul>
                <li v-for="(item, index) in $tm('experience.eventItems')" :key="index">{{ item }}</li>
            </ul>
            <div class="techPill">
                <strong>{{ $t('experience.eventTech') }}</strong>
                <span class="tag">Vue.js</span>
                <span class="tag">Node.js</span>
                <span class="tag">JavaScript</span>
                <span class="tag">TypeScript</span>
                <span class="tag">Redis</span>
                <span class="tag">Elasticsearch</span>
                <span class="tag">Service Workers</span>
                <span class="tag">SCSS</span>
            </div>
        </div>

        <!-- Extra -->
        <div v-show="activeTab === 'extra'" class="tabContent ExtraSection">
            <div class="tabHeader">
                <h3>{{ $t('experience.extra') }}</h3>
                <p class="tabSubtitle">{{ $t('experience.extraIntro') }}</p>
            </div>
            <ul>
                <li><strong>{{ $tm('experience.extraItems')[0] }}</strong> Docker</li>
                <li><strong>{{ $tm('experience.extraItems')[1] }}</strong> AWS (mail services, SQS, bastion…)</li>
                <li><strong>{{ $tm('experience.extraItems')[2] }}</strong> Claude Code</li>
            </ul>
            <div class="techPill">
                <span class="tag">Docker</span>
                <span class="tag">AWS</span>
                <span class="tag">Claude Code</span>
            </div>
        </div>

    </section>
</template>


<script>
const { ref } = Vue;

export default {
    name: 'ExperienceView',
    setup() {
        const activeTab = ref('backend');

        const setTab = (tab) => {
            activeTab.value = tab;
        };

        return { activeTab, setTab };
    }
};
</script>
