<template>
    <p v-bind:style="{
        //'background-color' : '#ccc'
        backgroundColor : '#ccc', color: c}">
        El mensaje se ha enviado satisfatoriamente.
    </p>
    <button v-on:click="handleClick">Cambiar Color</button>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
    name: 'ClassBind',
    setup() {
        let c = ref('#fff')
        const handleClick = () => { c.value = "#ff0000"}
        return {c, handleClick}
    }

})

 </script>

<style>

</style>