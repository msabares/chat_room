<template>
    <div id="chatBox" class="overflow-auto">
        <message-comp
                v-for="(msg, index) of this.messages" :key="index"
                :user-name="msg.userName"
                :user-color="msg.colorID"
                :message="msg.message"
                :status="msg.status"/>
    </div>
</template>

<script>
import messageComp from "./messageComp";

export default {
    data() {
        return {
            messages: [],
        }
    },
    sockets: {
        chatMessage(data) {
            this.messages.push({userName:data[0], colorID:data[1] ,message:data[2], status: 'message'});
        },
        connectStatus(data) {
            this.messages.push({userName:data[0], status:'joined'});
        },
        disconnectStatus(userName) {
            this.messages.push({userName:userName, status:'left'});
        }
    },
    updated() {
        this.scrollToEnd();
    },
    methods: {
        scrollToEnd: function () {
            this.$el.scrollTop = this.$el.lastElementChild.offsetTop;
        }
    },
    components: {
        messageComp
    }
}

</script>

<style scoped>
    #chatBox {
        border-style: solid;
        border-width: 1.5px;
        min-width: 100%;
        height: 17em;
        margin: 5px;
        padding: 5px;
    }
</style>