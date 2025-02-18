import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import LoginPage from '../pages/LoginPage.vue'
import RegisterPage from '../pages/RegisterPage.vue'
import ChefsListPage from '../pages/ChefsListPage.vue'
import ChefDetailPage from '../pages/ChefPage.vue'
import CartPage from '../pages/PanierPage.vue'

const routes = [
    {
        path: '/',
        component: HomePage
    },
    {
        path: '/login',
        component: LoginPage
    },
    {
        path: '/register',
        component: RegisterPage
    },
    {
        path: '/chefs',
        component: ChefsListPage
    },
    {
        path: '/chef/:id',
        component: ChefDetailPage
    },
    {
        path: '/cart',
        component: CartPage
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

export default router
