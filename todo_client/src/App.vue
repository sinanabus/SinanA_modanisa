<template>
  <Header title="To Do App"/>
  <AddToDoItem></AddToDoItem>
  <ToDoList></ToDoList>
</template>

<script>
import Header from '@/components/Header.vue'
import AddToDoItem from '@/components/AddToDoItem.vue'
import ToDoList from '@/components/ToDoList.vue'

export default {
  name: 'App',
  components: {
    Header,
    AddToDoItem,
    ToDoList,
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
