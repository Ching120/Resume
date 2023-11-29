<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <section>
        <h2>⚒️專業技能</h2>
        <ul class="skills-list">
            <li v-for="(skill, index) in Skills" :key="index">{{ skill }}</li>
        </ul>
    </section>
</template>

<script setup>
const  Skills = ["程式語言：HTML、 CSS 、 JavaScript 、 PHP 、jQuery", "其他：Git、API、Photoshop、Figma", "資料庫：MySQL、 SQL Server", "框架：ASP.NET MVC"]
</script>

<style scoped>
/* Add your styles specific to this component */
</style>
