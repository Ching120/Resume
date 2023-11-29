<template>
  <div id="app">
    <Auth v-if="!isLoggedIn" @authenticated="handleAuthentication"></Auth>
  <div v-else>
  <div class="body" style="
    background-color: aliceblue;
">
    <div class="container">
      <PersonalInfo />
      <ResumeContent />
      <WorkExperience />
      <Projects />
      <Education />
      <Skills />
      <Languages /><button @click="handleLogout" class="logout-btn">Logout</button>
    </div>
    <div class="message">
      <MessageBoard />
    </div>
  </div>
  </div>
  </div>
</template>

<script>
import Auth from './components/Auth.vue';
import PersonalInfo from './components/AboutMe.vue';
import ResumeContent from './components/Content.vue';
import WorkExperience from './components/Work.vue';
import Projects from './components/Projects.vue';
import Education from './components/Education.vue';
import Skills from './components/Skill.vue';
import Languages from './components/Languages.vue';
import MessageBoard from './components/MessageBoard.vue';


export default {
  name: 'App',
  components: {
    Auth,
    PersonalInfo,
    ResumeContent,
    WorkExperience,
    Projects,
    Education,
    Skills,
    Languages,
    MessageBoard,
  },
  computed: {
    isLoggedIn() {
      return this.$store.state.isAuthenticated;
    },
  },
  methods: {
    handleAuthentication() {
      // 在 Auth 組件中通知 App 組件進行身份驗證
      this.$store.commit("setAuthentication", true);
    },
      handleLogout() {
      // 在这里执行登出逻辑
      this.$store.commit("setAuthentication", false);
    },
  }
};
</script>

<style >
.body {
  display: flex;
  flex-direction: row-reverse;
}

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
  justify-content: center;
  flex-direction: column;
}

.resume,
.message-board-container {
  flex: 1;
  max-width: 800px;
}
.logout-btn{
    background-color: rgb(130, 141, 131);
    border: none;
    color: white;
    width: 100%;
    height: 30px;
    border-radius: 15px;
}
</style>





