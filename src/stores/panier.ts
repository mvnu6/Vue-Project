import { defineStore } from 'pinia'

export const useCartStore = defineStore('panier', {
  state: () => ({
    items: [] as Array<{ id: number, name: string, price: number }>
  }),
  getters: {
    total: (state) => state.items.reduce((sum, item) => sum + item.price, 0)
  },
  actions: {
    addItem(item: { id: number, name: string, price: number }) {
      this.items.push(item)
    },
    removeItem(itemId: number) {
      this.items = this.items.filter(item => item.id !== itemId)
    }
  }
})
