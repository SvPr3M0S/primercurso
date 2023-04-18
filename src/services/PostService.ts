import { ref, Ref } from 'vue';
import IPost from '@/interfaces/IPost';

class PostService {
    private posts:Ref<Array<IPost>> //referencia 
    private post:Ref<IPost>

    constructor() {
        this.posts = ref<Array<IPost>>([]) //generar post vacios array 
        this.post = ref<IPost>({})
    }

    getPosts ():Ref<Array<IPost>> {
        return this.posts //informacion vacia
    }

    getPost ():Ref<IPost> {
        return this.post
    }

    async fetchAll(): Promise<void> {
        //funcion asincrona
        try {
            const url = 'https://jsonplaceholder.typicode.com/posts'
            const response = await fetch(url) //await esperar la informaion que estamos esperando
            const json = await response.json() //ocurra una espera a esa repuesta    
            this.posts.value = await json
        } catch(error) {
            console.log(error)
        }
    }

    //details
    async fetchById(id: string | Array<string>): Promise<void> {
        try {
            //const url = 'https://jsonplaceholder.typicode.com/posts/'+id
            const url = `https://jsonplaceholder.typicode.com/posts/${id}`
            const response = await fetch(url)
            const json = await response.json()
            this.post.value = await json
        } catch(error) {
            console.log(error)
        }
    }
}

export default PostService