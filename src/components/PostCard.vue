<template>
<div class="post-card">
    <h3>TITULO</h3>
    <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est aliquid nemo, porro tempore natus totam quasi nobis officia voluptarum fugit, unde debitis excepturi nisi quo! Saepe eum vitae estexercitationem! </P>
    <PostButton/>
</div>
</template>

<script lang="ts" setup>
import PostButton from './PostButton.vue';
</script>

<style scoped>
.post-card{
    border: radius 15px;
    padding: 10px;
    margin: 5px;
    border: 1px solid#ccc;

}
</style>