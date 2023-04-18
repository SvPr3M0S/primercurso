<template>
<div class="post">
    <h3>{{ props.title }}</h3>
    <p>{{ props.content }}</p>
    <input type="text" v-model="message" />
    <button @click="handleClick">Di Hola</button>

</div>
    
</template>

<script lang="ts" setup>
import { defineProps, defineEmits, Ref, ref } from 'vue'

const props = defineProps({
    title: String,
    content: String
})

const emit = defineEmits(['sayHi'])

const handleClick = () => {
    emit("sayHi", message.value)
    }
let message:Ref<string> = ref ("")
       
</script>

<style scoped>
.post {
    width: 300px;
    height: 200px;
    background-color: antiquewhite;
    border-radius: 10px;
    margin: 10px;
    padding: 10px;
}
</style>