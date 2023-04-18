import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
import PostListsView from "../views/PostListsView.vue"
import PostDetailView from '../views/PostDetailView.vue'




const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: to => {
            return {name: 'PostLists'}
        }
    },
    {
        path: '/PostLists',
        name: 'PostLists',
        component: PostListsView
    },
    {
        path: '/PostDetail/:id',
        name: 'PostDetail',
        component: PostDetailView
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router