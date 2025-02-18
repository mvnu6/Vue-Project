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
  import ChefCard from '../components/ChefCard.vue'
  
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
h2 {
  text-align: center;
  margin-bottom: 20px;
  font-size: 2em;
  color: #fff;
}

.chefs-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  padding: 20px;
  background-color: #333;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.chefs-container > * {
  flex: 1 1 calc(33.333% - 40px);
  max-width: calc(33.333% - 40px);
  box-sizing: border-box;
}

@media (max-width: 768px) {
  .chefs-container > * {
    flex: 1 1 calc(50% - 20px);
    max-width: calc(50% - 20px);
  }
}

@media (max-width: 480px) {
  .chefs-container > * {
    flex: 1 1 100%;
    max-width: 100%;
  }
}
  </style>
  