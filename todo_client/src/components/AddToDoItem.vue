<template>
    <div>
        <form ref="form" @submit.prevent="AddToDo">
            <input id='ToDoInput' v-model="input" placeholder="Create a new todo">
            <button id='AddButton'>Add</button>
        </form>
    </div>
</template>

<script>
export default {
    name:"AddToDoItem",
    data() {
        return { input: ''}
    },
    methods : {
        AddToDo() {
            this.$emit('addtodo', this.input);
            this.$refs.form.reset()
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
