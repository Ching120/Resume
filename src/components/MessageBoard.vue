<template>
    <div style="width: max-content; padding-right: 30px;">
        <h1>留言板</h1>
        <input v-model="newMessage" placeholder="留言" />
        <button @click="postMessage" class="message-btn" style="color: white;">留言</button>
        <div v-for="message in messages" :key="message.id">
            <p>
                <span v-if="editingMessage !== message.id">
                    {{ message.user_message }}&nbsp;
                    <button @click="deleteMessage(message.id)" class="delete-btn">刪除</button>&nbsp;
                    <button @click="startEditing(message)" class="edit-btn">修改</button>
                </span>
                <span v-else>
                    <input v-model="editedMessage" placeholder="修改留言" />
                    <button @click="saveEdit(message.id)" class="save-btn">儲存</button>&nbsp;
                    <button @click="cancelEdit"  class="cancel-btn">取消</button>
                </span>
            </p>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            messages: [],
            newMessage: '',
            editingMessage: null,
            editedMessage: '',
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
        }, startEditing(message) {
            this.editingMessage = message.id;
            this.editedMessage = message.user_message;
        },
        saveEdit(id) {
            axios
                .put(`http://localhost:3000/api/messages/${id}`, { user_message: this.editedMessage })
                .then(() => {
                    // Update the local state after the successful update on the server
                    const editedIndex = this.messages.findIndex((message) => message.id === id);
                    if (editedIndex !== -1) {
                        this.messages[editedIndex].user_message = this.editedMessage;
                    }

                    // Reset editing state
                    this.editingMessage = null;
                    this.editedMessage = '';
                })
                .catch((error) => {
                    console.error(error);
                });
        },
        cancelEdit() {
            // Reset editing state
            this.editingMessage = null;
            this.editedMessage = '';
        },
    },
};
</script>
<style >
.message-btn{
    background-color: rgb(7, 185, 22);
    border: none;
    color: white;
    width: 100%;
    height: 30px;
    border-radius: 15px;
}
.delete-btn {
    background-color: #d66c6d;
    color: #fff;
    border-radius: 8px;
    border: none;
}

.edit-btn {
    background-color: #4a7fb1;
    color: #fff;
    border-radius: 8px;
    border: none;
}

.save-btn {
    background-color: #52c41a;
    color: #fff;
    border-radius: 8px;
    border: none;
}

.cancel-btn {
    background-color: #d9d9d9;
    /* Light gray color for cancel button */
    color: #000;
    border-radius: 8px;
    border: none;
}</style>