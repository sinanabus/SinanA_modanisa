<template>
    <div class="item">
        {{input}}
    </div>
</template>

<script>
export default {
    name:"ToDoItem",
    props : {
        input: String
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
