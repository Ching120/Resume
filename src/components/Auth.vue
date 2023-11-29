<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="auth-container">
        <h2>{{ isLogin ? 'Login' : 'Register' }}</h2>
        <form @submit.prevent="submitForm" class="auth-form">
            <label for="username">帳號:</label>
            <input v-model="username" type="text" required />

            <label for="password">密碼:</label>
            <input v-model="password" type="password" required />

            <!-- Additional field for name during registration -->
            <label v-if="!isLogin" for="name">姓名:</label>
            <input v-if="!isLogin" v-model="name" type="text" required />

            <button type="submit" class="auth-button">{{ isLogin ? 'Login' : 'Register' }}</button>
        </form>
        <p>{{ isLogin ? '還沒有帳號前往 ' : '已經有帳號了？ ' }}<a href="#" @click="toggleMode">{{ isLogin ? '註冊' :
            'Login' }}</a></p>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            username: '',
            password: '',
            name: '',
            isLogin: true,
        };
    },
    methods: {
        async submitForm() {
            try {
                if (this.isLogin) {
                    // Login 
                    const response = await axios.post('http://localhost:3000/api/login', {
                        user_id: this.username,
                        user_pwd: this.password,
                    });
                    console.log('Login Response:', response.data);
                    // 登入成功後觸發身份驗證完成事件
                    this.$emit('authenticated');
                } else {
                    // Register
                    const response = await axios.post('http://localhost:3000/api/register', {
                        user_id: this.username,
                        user_pwd: this.password,
                        user_name: this.name,
                    });
                    console.log('Register Response:', response.data);
                    alert('註冊成功🎉前往登入~~');
                }
            } catch (error) {
                console.error('Error:', error.response ? error.response.data : error.message);
            }
        },
        toggleMode() {
            // 切換登入和註冊
            this.isLogin = !this.isLogin;
        },
    }
}
</script>

<style>
.auth-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
}

.auth-form {
    width: 100%;
    max-width: 400px;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

label {
    margin-bottom: 8px;
}

input {
    width: 100%;
    padding: 8px;
    margin-bottom: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

.auth-button {
    width: 100%;
    background-color: #c99797;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}
</style>
