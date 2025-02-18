<template>
    <div>
      <h2>Liste des Cuisiniers</h2>
      <div class="chefs-container">
        <ChefCard 
           v-for="chef in chefs" 
           :key="chef.id" 
           :chef="chef" 
           @click="goToChefDetail(chef.id)" />
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  import ChefCard from './components/ChefCard.vue'
  
  const router = useRouter()
  const chefs = ref([
    { id: 1, name: 'Chef Pierre', specialties: ['Cuisine Française', 'Pâtisserie'] },
    { id: 2, name: 'Chef Marie', specialties: ['Cuisine Italienne'] }
    // Ajoute d'autres chefs si nécessaire
  ])
  
  const goToChefDetail = (id: number) => {
    router.push(`/chef/${id}`)
  }
  </script>
  
  <style scoped>
  </style>
  