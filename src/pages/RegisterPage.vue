<template>
    <div>
      <h2>Inscription</h2>
      <form @submit.prevent="handleRegister">
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
      <router-link to="/login">Vous avez déjà un compte ? Connectez-vous !</router-link>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { reactive } from 'vue'
  import { useRouter } from 'vue-router'
  import { useAuthStore } from './stores/auth'
  import FieldComponent from './components/FieldComponent.vue'
  import ButtonComponent from './components/ButtonComponent.vue'
  
  const router = useRouter()
  const authStore = useAuthStore()
  
  const user = reactive({
    pseudo: '',
    email: '',
    tel: '',
    mdp: '',
    verifmdp: ''
  })
  
  const fields = [
    { id: "pseudo", type: "text", placeholder: "Entrez votre Pseudo" },
    { id: "email", type: "email", placeholder: "Entrez votre Email" },
    { id: "tel", type: "tel", placeholder: "+33..." },
    { id: "mdp", type: "password", placeholder: "Entrez votre mot de passe" },
    { id: "verifmdp", type: "password", placeholder: "Confirmez votre mot de passe" }
  ]
  
  const buttons = [
    { id: "submit-button", type: "submit", textContent: "S'inscrire" }
  ]
  
  const handleRegister = async () => {
    if (user.mdp !== user.verifmdp) {
      alert("Les mots de passe ne correspondent pas")
      return
    }
    await authStore.register(user)
    router.push('/')
  }
  </script>
  