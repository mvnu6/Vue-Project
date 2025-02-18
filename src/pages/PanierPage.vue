<template>
    <div>
      <h2>Mon Panier</h2>
      <div v-if="cartItems.length">
        <ul>
          <li v-for="item in cartItems" :key="item.id">
            {{ item.name }} - {{ item.price }} €
            <button @click="removeItem(item.id)">Retirer</button>
          </li>
        </ul>
        <p>Total : {{ total }} €</p>
      </div>
      <div v-else>
        <p>Votre panier est vide.</p>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { computed } from 'vue'
  import { useCartStore } from './stores/panier'
  
  const cartStore = useCartStore()
  const cartItems = computed(() => cartStore.items)
  const total = computed(() => cartStore.total)
  
  const removeItem = (id: number) => {
    cartStore.removeItem(id)
  }
  </script>
  