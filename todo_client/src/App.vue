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
      var send = {"uid" : "1" ,"items": todos}
      axios.post("http://localhost:8080/todos", send).then(await this.GETtodos())
    },
    async GETtodos () {
      await axios.get("http://localhost:8080/todos/1").then(response => this.items = response.data.items)
    }
  },
  mounted () {
    this.GETtodos();
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
