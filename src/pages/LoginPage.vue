<template>
    <div>
      <h2>Se connecter</h2>
      <form @submit.prevent="handleSubmit">
        <section>
          <FieldComponent
            v-for="field in fields"
            :key="field.id"
            :data="field"
            v-model="user[field.id]"
          />
        </section>
        <section>
          <ButtonComponent
            v-for="button in buttons"
            :key="button.id"
            :data="button"
          />
        </section>
      </form>
      <router-link to="/register">Vous n'avez pas de compte ? Inscrivez-vous !</router-link>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { reactive } from 'vue'
  import { useRouter } from 'vue-router'
  import { useAuthStore } from './stores/auth'
  import FieldComponent from './components/FieldComponent.vue'
  import ButtonComponent from './components/ButtonComponent.vue'
  
  const authStore = useAuthStore()
  const router = useRouter()
  
  const user = reactive({
    email: '',
    password: ''
  })
  
  const fields = [
    { id: "email", type: "email", placeholder: "Entrez votre Email" },
    { id: "password", type: "password", placeholder: "Votre mot de passe" }
  ]
  
  const buttons = [
    { id: "submit-button", type: "submit", textContent: "Se Connecter" }
  ]
  
  const handleSubmit = async () => {
    await authStore.login(user)
    router.push('/')
  }
  </script>
  