<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <section>
        <h2>🗣️語言能力</h2>
        <ul class="languages-list">
            <li v-for="(language, index) in Languages" :key="index">
                <strong>{{ language.name }}:</strong> {{ language.proficiency }}
            </li>
        </ul>
    </section>
</template>

<script setup>
const Languages = [
    {
        name: "國語",
        proficiency: "熟練程度 高",
    },
    {
        name: "英文",
        proficiency: "熟練程度 中",
    },
]
</script>
