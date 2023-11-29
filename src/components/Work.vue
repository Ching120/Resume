<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <section>
        <h2>👩🏻‍💻工作經驗</h2>
        <ul class="experience-list">
            <li v-for="(work, index) in Work" :key="index">
                <strong>{{ work.company }}:</strong> {{ work.position }} - {{ work.date }}
            </li>
        </ul>
    </section>
</template>

<script setup>
const Work = [
    {
        company: "•  康寧大學資訊管理科",
        position: "官網管理人員",
        date: "2019/01-2021/06",
    },
    {
        company: "•  日盛聯合會計師事務所",
        position: "會計師助理",
        date: "2022/01-2022/04",
    },
    {
        company: "•  希文資訊公司(外包)",
        position: "專案修改人員",
        date: "2022/01-2022/04",
    },
    {
        company: "•  創科資訊",
        position: "Camp",
        date: "2023/07-2023/09",
    },
];
</script>

<style></style>
