import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Login from "@/views/Login.vue";
import DefaultLayoutWithAppbar from "@/layouts/DefaultLayoutWithAppbar.vue";


const routes = [
    {
        path: '/:pathMatch(.*)*',
        redirect: '/home'
    },
    {
        path: '/', 
        component: DefaultLayoutWithAppbar, 
        children: [
            { 
                path: '/home',
                name: 'Home', 
                component: Home 
            },
        ]
    },
    { 
        path: '/login', 
        name: 'Login', 
        component: Login 
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;