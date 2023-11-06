
<template>
  <div class="container">
    <div class="resume">
      <!-- 個人資料 -->
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

      <!-- 簡歷 -->
      <section>
        <h2>📜簡歷</h2>
        <p>{{ resumeContent }}</p>
      </section>

      <!-- 工作經驗 -->
      <section>
        <h2>👩🏻‍💻工作經驗</h2>
        <ul class="experience-list">
          <li v-for="(experience, index) in workExperience" :key="index">
            <strong>{{ experience.company }}:</strong> {{ experience.position }} - {{ experience.date }}
          </li>
        </ul>
      </section>

      <!-- 專案與作品集 -->
      <section>
        <h2>📂專案與作品集</h2>
        <ul class="projects-list">
          <li v-for="(project, index) in projects" :key="index">
            <strong>{{ project.name }}:</strong> {{ project.description }}
          </li>
          <!-- 添加其他專案和作品集項目 -->
        </ul>
      </section>

      <!-- 學歷 -->
      <section>
        <h2>🎒學歷</h2>
        <ul class="education-list">
          <li v-for="(education, index) in educationHistory" :key="index">
            <strong>{{ education.school }}:</strong> {{ education.degree }} - {{ education.date }}
          </li>
          <!-- 添加其他學歷項目 -->
        </ul>
      </section>

      <!-- 專業技能 -->
      <section>
        <h2>⚒️專業技能</h2>
        <ul class="skills-list">
          <li v-for="(skill, index) in skills" :key="index">{{ skill }}</li>
          <!-- 添加其他專業技能項目 -->
        </ul>
      </section>

      <!-- 語言能力 -->
      <section>
        <h2>🗣️語言能力</h2>
        <ul class="languages-list">
          <li v-for="(language, index) in languages" :key="index">
            <strong>{{ language.name }}:</strong> {{ language.proficiency }}
          </li>
          <!-- 添加其他語言能力項目 -->
        </ul>
      </section>
    </div>
    <div id="message-board-container" style="padding-left: 10%;">
      <MessageBoard />
    </div>
  </div>
</template>


<script>
import MessageBoard from './components/MessageBoard.vue';

export default {
  name: 'MyResume',
  components: {
    MessageBoard
  },
  data() {
    return {
      personalInfo: {
        profileImage: '/me.jpg',
        name: "陳意晴",
        englishName: "Ching",
        email: "Yiqing120405@gmail.com",
        phone: "0978009951"
      },
      resumeContent: "我叫做陳意晴，可以叫我晴，目前就讀國立臺中科技大學-資訊管理系，個性謹慎、熱愛學習，我的興趣是美術設計所以喜歡將設計和技術結合，擅長的是前端設計，熟悉技術的部份，程式語言包含HTML、CSS、Java Script和PHP，其他的部份包含API介接、RWD響應式網頁、Photoshop及Figma應用，也有使用過Git，在過去有兩項專案開發的經驗，一項是五專時期製作的宿舍管理系統，主要是為了解決紙張的浪費，及解決使用者及管理者在申請流程上更便利而將系統線上化，這個專案中我主要負責教官權限的功能規劃、前後端開發以及High charts圖表介接，另一項是近期開發的啤酒商行形象網站，主要負責前端功能規劃及開發、API介接(Axios)、Figma設計、Banner及內容圖片設計與RWD響應式網頁，希望參加這個培訓能讓我提升自己的綜合能力及實務能力，並不斷超越自我，在未來能成為更有競爭力的人🧙🏻",

      workExperience: [
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
      ],
      projects: [
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
      ],
      educationHistory: [
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
        // 添加其他學歷項目
      ],
      skills: ["程式語言：HTML、 CSS 、 JavaScript 、 PHP 、jQuery", "其他：Git、API、Photoshop、Figma", "資料庫：MySQL、 SQL Server", "框架：ASP.NET MVC"],
      languages: [
        {
          name: "國語",
          proficiency: "熟練程度 高",
        },
        {
          name: "英文",
          proficiency: "熟緷程度 低",
        },
      ],
    };
  },
};
</script>

<style scoped>
.resume {
  font-family: Arial, sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
}

.profile-image {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto;
}

.profile-picture {
  width: 100%;
  height: 100%;
  object-fit: cover;
}


section {
  margin-bottom: 20px;
  padding: 20px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h2 {
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 10px;
}

.personal-info p {
  font-size: 1rem;
  color: #555;
  margin: 5px 0;
}

.profile-image {
  width: 150px;
  height: 150px;
  border-radius: 50%;
}

.experience-list,
.projects-list,
education-list,
skills-list,
languages-list {
  list-style: none;
  padding: 0;
}

.experience-list li,
.projects-list li,
education-list li,
skills-list li,
languages-list li {
  font-size: 1rem;
  color: #333;
  margin: 5px 0;
}

.experience-list li strong,
.projects-list li strong,
education-list li strong {
  color: #555;
}

.container {
  display: flex;
  flex-direction: row-reverse;
  gap: 20px;
  margin-top: 20px;
}

.resume,
.message-board-container {
  flex: 1;
  /* 让两个容器占据相同的空间 */
  max-width: 800px;
  /* 或者根据需要设置最大宽度 */
}
</style>





