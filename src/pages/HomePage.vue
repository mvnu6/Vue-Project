<template>
    <HeaderComponent />
    <main>
      <h1>{{ welcomeMessage || 'Home Page' }}</h1>
      <nav>
        <router-link to="/chefs">Voir les cuisiniers</router-link>
        <router-link v-if="!isAuthenticated" to="/login">Se connecter</router-link>
        <router-link v-if="!isAuthenticated" to="/register">S'inscrire</router-link>
        <router-link v-if="isAuthenticated" to="/cart">Mon Panier</router-link>
      </nav>
    </main>
  </template>
  
  <script lang="ts" setup>
  import { computed } from 'vue'
  import { useAuthStore } from '../stores/auth'
  import HeaderComponent from '../components/HeaderComponent.vue'; // Importez le composant Header
  
  const authStore = useAuthStore()
  const welcomeMessage = computed(() => authStore.welcomeMessage)
  const isAuthenticated = computed(() => authStore.isAuthenticated)
  </script>
  
<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
}

h1 {
  margin-bottom: 20px;
  font-size: 2em;
  color: #333;
}

nav {
  display: flex;
  gap: 15px;
}

router-link {
  text-decoration: none;
  color: #007bff;
  font-weight: bold;
}

router-link:hover {
  text-decoration: underline;
}

router-link:active {
  color: #0056b3;
}
</style>