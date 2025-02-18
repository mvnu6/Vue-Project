<template>
  <div class="cart" v-if="isLoggedIn">
    <h2>Panier</h2>
    <ul>
      <li v-for="item in cart" :key="item.id">
        {{ item.name }} - {{ item.price }}€
        <button @click="removeFromCart(item.id)">Retirer</button>
      </li>
    </ul>
    <button @click="goToHome" class="home-button">Retour à l'accueil</button>
    <button @click="logout" class="logout-button">Déconnexion</button>
  </div>
  <div v-else>
    <p>Veuillez vous connecter pour voir votre panier.</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useCart } from '../services/CartService';

const { cart, removeFromCart } = useCart();
const isLoggedIn = ref(localStorage.getItem('isLoggedIn') === 'true');
const router = useRouter();

function checkLogin() {
  isLoggedIn.value = localStorage.getItem('isLoggedIn') === 'true';
}

function goToHome() {
  router.push('/');
}

function logout() {
  localStorage.removeItem('isLoggedIn');
  isLoggedIn.value = false;
  router.push('/login');
}

checkLogin();
</script>

<style scoped>
.cart {
  border: 1px solid #ccc;
  padding: 16px;
  width: 300px;
  margin: 0 auto;
}

.cart h2 {
  text-align: center;
  margin-bottom: 16px;
}

.cart ul {
  list-style-type: none;
  padding: 0;
}

.cart li {
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
  border-bottom: 1px solid #eee;
}

.cart button {
  color: white;
  border: none;
  padding: 4px 8px;
  cursor: pointer;
}

.cart button:hover {
  background-color: #ff1a1a;
}

.home-button {
  margin-top: 16px;
  background-color: #007bff;
  color: white;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
  display: block;
  width: 100%;
  text-align: center;
}

.home-button:hover {
  background-color: #0056b3;
}

.logout-button {
  margin-top: 16px;
  background-color: #dc3545;
  color: white;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
  display: block;
  width: 100%;
  text-align: center;
}

.logout-button:hover {
  background-color: #c82333;
}
</style>
