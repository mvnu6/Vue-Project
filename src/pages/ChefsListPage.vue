<template>
    <HeaderComponent />
    <main>
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
    </main>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import ChefCard from '../components/ChefCard.vue'
import HeaderComponent from '../components/HeaderComponent.vue'; // Importez le composant Header
import { useCart } from '../services/CartService';

const router = useRouter()
const { addToCart } = useCart();

const chefs = ref([
    { id: 1, name: 'Chef Pierre', specialties: ['Cuisine Française', 'Pâtisserie'], dishes: [
        { id: 1, name: 'Plat 1', description: 'Description du plat 1' },
        { id: 2, name: 'Plat 2', description: 'Description du plat 2' }
    ]},
    { id: 2, name: 'Chef Marie', specialties: ['Cuisine Italienne'], dishes: [
        { id: 3, name: 'Plat 3', description: 'Description du plat 3' }
    ]}
    // Ajoutez d'autres chefs et plats si nécessaire
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

main {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    /* Supprimez le fond blanc */
    /* background-color: #f9f9f9; */
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin-top: 20px;
}
</style>
