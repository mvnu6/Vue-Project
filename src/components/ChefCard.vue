<template>
    <div class="chef-card" @click="$emit('click')">
      <h3>{{ chef.name }}</h3>
      <p>Spécialités : {{ chef.specialties.join(', ') }}</p>
    </div>
  </template>
  
  <script setup lang="ts">
  const props = defineProps<{ chef: { id: number, name: string, specialties: string[] } }>()
  </script>
  
  <style scoped>
  .chef-card {
    border: 1px solid #ccc;
    padding: 1rem;
    cursor: pointer;
    transition: transform 0.2s;
  }
  .chef-card:hover {
    transform: scale(1.02);
  }
  </style>
  