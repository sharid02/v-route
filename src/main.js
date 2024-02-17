import { createApp } from 'vue'
import App from './App.vue'
import 'flowbite'
import { createRouter, createWebHistory } from 'vue-router'

// add this
import './index.css'



import About from './components/pages/About.vue'


const routes = [
    {path: '/about' , component: About},

]

const router = createRouter({
    history : createWebHistory(),
    routes
})


createApp(App).use(router).mount('#app')


