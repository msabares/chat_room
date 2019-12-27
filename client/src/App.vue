<template>
  <div id="app">
    <create-user-comp v-if="!userName" @join-chat="setUserName"/>
    <div id="chatUI" v-else>
      <h1>Chatroom</h1>
      <user-list-comp id="userList"/>
      <div id="chatBox">
        <chat-comp/>
        <input-comp :user-name="userName" :user-color="userColor"/>
      </div>
    </div>
  </div>
</template>

<script>
import inputComp from './components/inputComp.vue'
import chatComp from "./components/chatComp"
import createUserComp from "./components/createUserComp";
import userListComp from "./components/userListComp";

export default {
  name: 'app',
  data() {
    return {
      userName: '',
      userColor: '',
    }
  },
  methods: {
    setUserName(userName, userColor) {
      this.userName = userName;
      this.userColor = userColor;
      this.$socket.emit('connect status', this.userName, this.userColor);
    },
    disconnectNotice() {
      this.$socket.emit('disconnected status', this.userName);
    },

  },
  components: {
    createUserComp,
    chatComp,
    inputComp,
    userListComp
  },
  mounted() {
    window.addEventListener('unload', this.disconnectNotice)
  },
  beforeDestroy() {
    window.removeEventListener('unload', this.disconnectNotice)
  }
}
</script>

<style>

  body {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    background: black;
    color:white;
    font-weight: bold;
  }

  h1 {
    width: 100%;
    text-align: center;
  }

  #chatUI {
    margin-top: 5em;
    display: flex;
    justify-content: center;
    align-items: baseline;
    flex-wrap: wrap;
  }

  #chatBox {
    width: 50%;
  }


</style>
