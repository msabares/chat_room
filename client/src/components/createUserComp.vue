<template>
    <div>
        <h1>Chatroom</h1>
        <b-form-input
                class="mb-3"
                v-model="userName"
                placeholder="Enter a username"
                @keyup.enter="joinChat"
                type="text">
        </b-form-input>
        <b-button class="w-25 align-self-center" variant="info" @click="joinChat">Join Chat</b-button>
    </div>
</template>

<script>
    export default {
        name: "createUserComp",
        data() {
            return {
                userName: '',
                userColor: ''
            }
        },
        methods: {
            joinChat: function() {
                this.userName = this.userName.trim();

                if (this.userName.length > 0) {
                    this.userColor = this.generateColor();
                    this.userName = this.userName + '#'+ this.generateID();
                    this.$emit('join-chat', this.userName, this.userColor);
                }
            },
            generateColor: function () {
                return '#'+(Math.random()*0xFFFFFF<<0).toString(16);
            },
            generateID: function () {
                return Math.round(Math.random() * 100);
            }

        }
    }
</script>

<style scoped>
    div {
        width: 70%;
        margin: 10em auto;
        display: flex;
        flex-direction: column;
        text-align: center;
    }

</style>