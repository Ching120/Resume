<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <section>
        <h2>🎒學歷</h2>
        <ul class="education-list">
            <li v-for="(edu, index) in Education" :key="index">
                <strong>{{ edu.school }}:</strong> {{ edu.degree }} - {{ edu.date }}
            </li>
        </ul>
    </section>
</template>

<script setup>
const Education = [
    {
        school: "康寧大學資訊管理科",
        degree: "副學士",
        date: "2022/06",
    },
    {
        school: "國立臺中科技大學",
        degree: "學士",
        date: "2024/06",
    },
];
</script>

<style></style>
