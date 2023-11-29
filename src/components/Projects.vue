<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <section>
        <h2>📂專案與作品集</h2>
        <ul class="project-list">
            <li v-for="(project, index) in Projects" :key="index">
                <strong>{{ project.name }}:</strong> {{ project.description }}
            </li>
        </ul>
    </section>
</template>

<script setup>
const Projects = [
    {
        name: "• 康寧大學宿舍管理系統",
        description: "內容：負責教官功能前後端開發(PHP 、 MySQL)",
    },
    {
        name: "• Nine Night啤酒商行企業形象網站",
        description: "內容：負責前端畫面開發、API 介接、 Logo.Banner 製作",
    },
    {
        name: "• Adidas企業形象網站",
        description: "網站刻板練習",
    },
    {
        name: "• YouTube影音網站",
        description: "網站刻板練習",
    },
    {
        name: "• IT幫幫忙",
        description: "網站刻板練習",
    },
];
</script>
