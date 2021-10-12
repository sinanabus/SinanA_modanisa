<template>
  <Header title="To Do App"></Header>
  <AddToDoItem @addtodo='POSTtodos'></AddToDoItem>
  <ToDoList v-bind:items='items'></ToDoList>
</template>

<script>
import Header from '@/components/Header.vue'
import AddToDoItem from '@/components/AddToDoItem.vue'
import ToDoList from '@/components/ToDoList.vue'
//import API from '@/api'
import axios from 'axios'

window.axios = require('axios')

export default {
  name: 'App',
  components: {
    Header,
    AddToDoItem,
    ToDoList,
  },
  data ()  {
   return {
     uid : String,
     items : []
   }
  },
  methods : {
    async POSTtodos (todos)  {
      // handle POST method to backend
      var send = {"uid" : this.uid ,"items": todos}
      await axios.post("http://localhost:8080/todos", send).then(await this.GETtodos(this.uid))
    },
    async GETtodos (uid) {
      // handle GET method to backend
      await axios.get('http://localhost:8080/todos/' + uid).then(response => this.items = response.data.items)
    },
    async getIP () {
      // Get IP of the user to store in the backend
        await fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(response => {
        this.uid = response.ip;
        });
        console.log(this.uid)
    },
  },

  mounted () {
    this.getIP();
    this.GETtodos(this.uid);
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
