import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import LoginPage from '../pages/LoginPage.vue'
import RegisterPage from '../pages/RegisterPage.vue' // Assure-toi que ce fichier existe
import ChefsListPage from '../pages/ChefsListPage.vue'
import ChefPage from '../pages/ChefPage.vue'
import CartPage from '../pages/PanierPage.vue'

const routes = [
    { path: '/', component: HomePage },
    { path: '/login', component: LoginPage },
    { path: '/register', component: RegisterPage }, // Vérifie bien cette ligne
    { path: '/chefs', component: ChefsListPage },
    { path: '/chef/:id', component: ChefPage },
    { path: '/cart', component: CartPage },
    
  ]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
