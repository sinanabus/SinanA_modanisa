<template>
  <Header title="To Do App"/>
  <AddToDoItem/>
</template>

<script>
import Header from './components/Header.vue'
import AddToDoItem from './components/AddToDoItem.vue'

export default {
  name: 'App',
  components: {
    Header,
    AddToDoItem
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
