<template>
    <HeaderComponent />
    <main>
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
                <div v-for="dish in chef.dishes" :key="dish.id">
                    <h3>{{ dish.name }}</h3>
                    <p>{{ dish.description }}</p>
                    <button @click="addToCart(dish)">Ajouter au panier</button>
                </div>
            </div>
            <div v-else>
                <p>Cuisinier non trouvé.</p>
            </div>
        </div>
    </main>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useCartStore } from '../stores/cart'
import HeaderComponent from '../components/HeaderComponent.vue'

const route = useRoute()
const chefId = Number(route.params.id)
const chef = ref<any>(null)

const chefsData = [
    { 
        id: 1, 
        name: 'Chef Pierre', 
        specialties: ['Cuisine Française', 'Pâtisserie'], 
        dishes: [
            { id: 101, name: 'Coq au vin', price: 15, description: 'Description du Coq au vin' },
            { id: 102, name: 'Tarte aux pommes', price: 8, description: 'Description de la Tarte aux pommes' }
        ]
    },
    { 
        id: 2, 
        name: 'Chef Marie', 
        specialties: ['Cuisine Italienne'], 
        dishes: [
            { id: 201, name: 'Pizza Margherita', price: 12, description: 'Description de la Pizza Margherita' },
            { id: 202, name: 'Pasta Carbonara', price: 14, description: 'Description de la Pasta Carbonara' }
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

<style scoped>
main {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin-top: 20px;
}

button {
    border-radius: 12px;
    padding: 8px 16px;
    background-color: #2c3e50;
    color: white;
    border: none;
    cursor: pointer;
}

button:hover {
    background-color: #1a252f;
}
</style>
