import { defineStore } from 'pinia'

interface User {
  email: string
  pseudo?: string
}

export const useAuthStore = defineStore('auth', {
  state: () => ({
    welcomeMessage: 'Bienvenue sur HomeMade!',
    isAuthenticated: false,
    user: null as User | null
  }),
  actions: {
    async login(credentials: { email: string, password: string }) {
      try {
        if (credentials.email && credentials.password) {
          this.isAuthenticated = true
          this.user = { email: credentials.email }
          this.welcomeMessage = `Bienvenue ${credentials.email}!`
        }
      } catch (error) {
        console.error("Erreur de connexion:", error)
      }
    },
    async register(userData: { pseudo: string, email: string, tel: string, mdp: string, verifmdp: string }) {
      try {
        if (userData.mdp === userData.verifmdp) {
          this.isAuthenticated = true
          this.user = { pseudo: userData.pseudo, email: userData.email }
          this.welcomeMessage = `Bienvenue ${userData.pseudo}!`
        } else {
          console.error("Les mots de passe ne correspondent pas")
        }
      } catch (error) {
        console.error("Erreur lors de l'inscription:", error)
      }
    },
    logout() {
      this.isAuthenticated = false
      this.user = null
      this.welcomeMessage = ''
    }
  }
})
