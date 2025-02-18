import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    welcomeMessage: 'Bienvenue sur HomeMade!',
    isAuthenticated: false,
    user: null
  }),
  actions: {
    async login(credentials: { email: string, password: string }) {
      // Simulation de connexion, ici tu appellerais une API
      if (credentials.email && credentials.password) {
        this.isAuthenticated = true
        this.user = { email: credentials.email }
        this.welcomeMessage = `Bienvenue ${credentials.email}!`
      }
    },
    async register(userData: { pseudo: string, email: string, tel: string, mdp: string, verifmdp: string }) {
      // Simulation d'inscription
      if (userData.mdp === userData.verifmdp) {
        this.isAuthenticated = true
        this.user = { pseudo: userData.pseudo, email: userData.email }
        this.welcomeMessage = `Bienvenue ${userData.pseudo}!`
      }
    },
    logout() {
      this.isAuthenticated = false
      this.user = null
      this.welcomeMessage = ''
    }
  }
})
