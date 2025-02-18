<template>
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
  import { useAuthStore } from './stores/auth'
  
  const authStore = useAuthStore()
  const welcomeMessage = computed(() => authStore.welcomeMessage)
  const isAuthenticated = computed(() => authStore.isAuthenticated)
  </script>
  
  <style scoped>
</style>
  