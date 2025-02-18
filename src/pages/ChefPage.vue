<template>
    <div>
      <h2>Détails du Cuisinier</h2>
      <div v-if="chef">
        <h3>{{ chef.name }}</h3>
        <p>Spécialités : {{ chef.specialties.join(', ') }}</p>
        <h4>Plats</h4>
        <ul>
          <li v-for="dish in chef.dishes" :key="dish.id">
            {{ dish.name }} - {{ dish.price }} €
            <button @click="addToCart(dish)">Ajouter au panier</button>
          </li>
        </ul>
      </div>
      <div v-else>
        <p>Cuisinier non trouvé.</p>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref, onMounted } from 'vue'
  import { useRoute } from 'vue-router'
  import { useCartStore } from './stores/cart'
  
  const route = useRoute()
  const chefId = Number(route.params.id)
  const chef = ref<any>(null)
  
  // Données fictives pour l'exemple
  const chefsData = [
    { 
      id: 1, 
      name: 'Chef Pierre', 
      specialties: ['Cuisine Française', 'Pâtisserie'], 
      dishes: [
        { id: 101, name: 'Coq au vin', price: 15 },
        { id: 102, name: 'Tarte aux pommes', price: 8 }
      ]
    },
    { 
      id: 2, 
      name: 'Chef Marie', 
      specialties: ['Cuisine Italienne'], 
      dishes: [
        { id: 201, name: 'Pizza Margherita', price: 12 },
        { id: 202, name: 'Pasta Carbonara', price: 14 }
      ]
    }
  ]
  
  onMounted(() => {
    chef.value = chefsData.find(c => c.id === chefId)
  })
  
  const cartStore = useCartStore()
  const addToCart = (dish: any) => {
    cartStore.addItem(dish)
  }
  </script>
  