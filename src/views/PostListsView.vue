<template>
   <h1>Listado de posts </h1>
   <ul class="post-list">
        <li v-for="post in posts" :key="post.id">
        <router-link :to="{name:'PostDetail', params: {id:post.id}}">
            {{ post.title }}
        </router-link>
        </li>
   </ul>
</template>

<script lang="ts" setup>
import PostService from '@/services/PostService';
import {onMounted } from 'vue';
const service = new PostService()
const posts = service.getPosts()

onMounted(async () => {
    await service.fetchAll() //espera
})
// list-style-type: none; quita los puntos en el interface
</script>


<style scoped lang="scss">
.post-list {
    width: 95vw;
    height: 75px;
    padding: 20px;
    list-style-type: none; 

    li {
        padding: 10px;
        width: 100%;
        border: 1px solid #ccc;    
            //background-color: $primaryColor;
            //color: white;
            a {
                //color: $primaryColor;
                text-decoration:  none;
                color: $textColor;
                cursor: pointer;
            }

            a:hover {
                color: $primaryColor;
            }
        }
}

</style>
