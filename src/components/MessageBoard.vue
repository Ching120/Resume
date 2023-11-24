<template>
    <div>
        <h1>留言板</h1>
        <div v-for="message in messages" :key="message.id">
            <p>{{ message.user_message }}&nbsp;
            <button @click="deleteMessage(message.id)">刪除</button></p>
        </div>
        <input v-model="newMessage" placeholder="留言">&nbsp;
        <button @click="postMessage">留言</button>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            messages: [],
            newMessage: ''
        };
    },
    created() {
        this.fetchMessages();
    },
    methods: {
        fetchMessages() {
            axios.get('http://localhost:3000/api/messages')
                .then(response => {
                    this.messages = response.data;
                })
                .catch(error => {
                    console.error(error);
                });
        },
        postMessage() {
            axios.post('http://localhost:3000/api/messages', { user_message: this.newMessage })
                .then(response => {
                    this.messages.push(response.data); 
                    this.newMessage = ''; 
                })
                .catch(error => {
                    console.error(error);
                });
        },
        deleteMessage(id) {
            axios.delete(`http://localhost:3000/api/messages/${id}`)
                .then(() => {
                    this.messages = this.messages.filter(message => message.id !== id);
                })
                .catch(error => {
                    console.error(error);
                });
        }
    }
}
</script>
