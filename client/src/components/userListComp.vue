<template>
    <div class="overflow-auto">
        <p id="header"> Users Online [{{userList.length}}]</p>
        <ul v-for="(users, index) of this.userList" :key="index" >
            <li :style="{color: users.colorID}">{{users.userName}} </li>
        </ul>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "userListComp",
        data() {
            return {
                userList: [],
                testData: []
            }
        },
        sockets: {
            connectStatus(data) {
                this.userList.push({userName: data[0], colorID:data[1]});

            },
            disconnectStatus(userName) {
                this.userList.splice(this.userList.indexOf(userName), 1);
            }
        },
        updated() {
            this.scrollToEnd();
        },
        methods: {
            getList: function () {
                axios.get('http://localhost:3000/userList')
                .then(response => {
                    this.userList = response.data;
                } );
            },
            scrollToEnd: function () {
                this.$el.scrollTop = this.$el.lastElementChild.offsetTop;
            }
        },
        mounted() {
            this.getList()
        }
    }
</script>

<style scoped>
    div {
        border-style: solid;
        border-width: 1.5px;
        height: 20em;
        margin: 5px;
        padding: 5px;
    }

    #header {
        text-align: center;
        padding: 0;
        margin: 0;
    }


    ul {
        list-style-type: none;
        padding: 0;
        margin: 0;
    }

</style>