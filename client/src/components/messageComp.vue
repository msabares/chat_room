<template>
    <div>
        <span v-if="this.status=='joined'" id="joined"> {{this.userName}} has joined the chat.</span>
        <span v-else-if="this.status=='left'" id="left"> {{this.userName}} has left the chat.</span>
        <span v-else id="message"> <span :style="{color: this.userColor}">{{this.userName}}:</span> {{this.message}}</span>
    </div>
</template>

<script>
    export default {
        name: "messageComp",
        props: {
            message: {
                type: String,
                default: ''
            },
            userName: {
                type: String
            },
            userColor: {
                type:String
            },
            status: {
                type: String
            }
        }
    }
</script>

<style scoped>
    div {
        margin-bottom: 10px;
    }
    #joined {
        color: green;
    }

    #left {
        color: red;
    }

    #message {
        word-wrap: break-word;
    }
</style>