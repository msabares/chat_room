<template>
  <div>
    <b-form-input  type="text" @keyup.enter="sendMessage" placeholder="Type a message" v-model="message">
    </b-form-input>

    <b-button class="ml-2" variant="info" @click="sendMessage">Send</b-button>
  </div>
</template>

<script>

export default {
  props: {
    userName: {
      type:String
    },
    userColor: {
      type:String
    }
  },
  data() {
    return {
      message: '',
    }
  },
  methods: {
    sendMessage() {
      this.$socket.emit('chat message', this.userName, this.userColor,this.message.trim());
      this.message = '';
    }
  }
}
</script>

<style scoped>
  div {
    min-width: 100%;
    display: flex;
    margin-left: 5px;
    margin-right: 5px;
    margin-top: 10px;
  }
</style>
