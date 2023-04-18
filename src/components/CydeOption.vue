<template >
   <div>Hola Mundo</div>
</template>

<script lang="ts" setup>
import { onMounted, onUpdated } from 'vue'

onMounted(()=> {
    console.log("Mounted")
})

onUpdated(() => {
    console.log("onUpdated")
})

</script>

<style scoped>

</style>