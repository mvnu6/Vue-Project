<template>
    <header>
        <nav>
            <ul>
                <li><router-link to="/">Accueil</router-link></li>
                <li><router-link to="/chefs">Liste des Chefs</router-link></li>
                <li><router-link to="/cart">Panier</router-link></li>
                <li><router-link to="/login">Connexion</router-link></li>
            </ul>
        </nav>
    </header>
</template>

<script setup lang="ts">
// Ajoutez ici toute logique nécessaire pour le header
</script>

<style scoped>
header {
    background-color: #333;
    padding: 10px 20px;
    display: flex;
    justify-content: center;
}

nav ul {
    list-style: none;
    display: flex;
    gap: 20px;
    margin: 0;
    padding: 0;
}

nav ul li {
    display: inline;
}

nav ul li a {
    color: white;
    text-decoration: none;
    font-size: 1rem;
}

nav ul li a:hover {
    text-decoration: underline;
}
</style>
