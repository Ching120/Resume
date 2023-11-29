<template>
    <section>
        <h2>🧚🏻‍♀️個人資料</h2>
        <div class="profile-image">
            <img :src="personalInfo.profileImage" alt="個人照片">
        </div>
        <div class="personal-info">
            <p><strong>姓名:</strong> {{ personalInfo.name }}</p>
            <p><strong>英文名:</strong> {{ personalInfo.englishName }}</p>
            <p><strong>聯絡信箱:</strong> {{ personalInfo.email }}</p>
            <p><strong>聯絡電話:</strong> {{ personalInfo.phone }}</p>
        </div>
    </section>
</template>

<script setup>
const personalInfo = {
    profileImage: '/me.jpg',
    name: "陳意晴",
    englishName: "Ching",
    email: "Yiqing120405@gmail.com",
    phone: "0978009951"
};
</script>

<style>
</style>
