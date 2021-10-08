<template>
    <ul id="ToDoList">
        <li v-for="item in items" v-bind:key="item.input">
            <ToDoItem v-bind:input="item"></ToDoItem>
        </li>
    </ul>
</template>

<script>
import ToDoItem from '@/components/ToDoItem.vue'
export default {
    name:"ToDoList",
    props: {
        items: Array
    },
    components: {
        ToDoItem
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
