<template>
    <section class="about">
        <h1>{{ $t('experience.title') }}</h1>
        <div class="enterpriseTitle">
            <h2><a href="https://42i.co/"><img src="/public/images/42i.png" alt="42i Logo" /> - {{ $t('experience.company') }}</a></h2>
        </div>
        <div>
            <p v-html="$t('experience.intro', {
                backend: `<strong><a href='#back'>${$t('experience.backEnd')}</a></strong>`,
                frontend: `<strong><a href='#front'>${$t('experience.frontEnd')}</a></strong>`
            })"></p>
        </div>
        <div class="backEndSection">
            <h3 id="back">{{ $t('experience.backEnd') }}</h3>
            <p>{{ $t('experience.backEndMainServer') }}</p>
            <ul>
                <li v-for="(item, index) in $tm('experience.backEndMainServerItems')" :key="index">{{ item }}</li>
            </ul>
            <p><strong>{{ $t('experience.backEndMainServerTech') }}</strong> Kotlin, Spring, mySQL, SQS, Redis</p>
        </div>
        <div class="BackOfficeSection">
            <h3 id="front">{{ $t('experience.frontEnd') }}</h3>
            <p>{{ $t('experience.backOffice') }}</p>
            <a href="https://42i.co/portfolio/pulip" target="_blank"><img class="pulipImg" src="/public/images/pulip-logo.png" alt="42i Logo" /></a>
            <ul>
                <li v-for="(item, index) in $tm('experience.backOfficeItems')" :key="index">{{ item }}</li>
            </ul>
            <p><strong>{{ $t('experience.backOfficeTech') }}</strong> React, Bootstrap, JavaScript, TypeScript, SCSS</p>
        </div>
        <div class="EventSection">
            <h3 id="front">{{ $t('experience.event') }}</h3>
            <p>{{ $t('experience.eventIntro') }}</p>
            <div class="eventLogos">
                <a href="https://www.hotsale.com.mx/" target="_blank"><img class="eventImg" src="/public/images/hotsale-logo.png" alt="42i Logo" /> Hotsale (Mexico)</a>
                <a href="https://www.hotfashion.mx/" target="_blank"><img class="eventImg" src="/public/images/hotfashion-logo.png" alt="42i Logo" /> Hotfashion (Mexico)</a>
                <a href="https://www.hotsale.com.co/" target="_blank"><img class="eventImg" src="/public/images/hotsale-colombia-logo.png" alt="42i Logo" /> Hotsale (Colombia)</a>
                <a href="https://www.cyberdays.gt/" target="_blank"><img class="eventImg" src="/public/images/cyberdays-gt-logo.png" alt="42i Logo" /> Cyberdays (Guatemala)</a>
                <a href="https://www.glamdays.com.ar/" target="_blank"><img class="eventImg" src="/public/images/glamdays-logo.png" alt="42i Logo" /> Glamdays (Argentina)</a>
            </div>
            <ul>
                <li v-for="(item, index) in $tm('experience.eventItems')" :key="index">{{ item }}</li>
            </ul>
            <p><strong>{{ $t('experience.eventTech') }}</strong> Vue, nodeJS, HTML, JavaScript, TypeScript, SCSS, Redis, Elasticsearch, Service Workers</p>
        </div>
        <div class="ExtraSection">
            <h3 id="front">{{ $t('experience.extra') }}</h3>
            <p>{{ $t('experience.extraIntro') }}</p>
            <ul>
                <li><strong>{{ $tm('experience.extraItems')[0] }}</strong> Docker.</li>
                <li><strong>{{ $tm('experience.extraItems')[1] }}</strong> AWS (mail services, SQS, bastion...).</li>
                <li><strong>{{ $tm('experience.extraItems')[2] }}</strong> Claude code</li>
            </ul>
        </div>

    </section>
</template>


<script>
export default { name: 'AboutView' };
</script>
