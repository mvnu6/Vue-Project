<template>
    <HeaderComponent />
    <main>
        <h1>Page de Connexion</h1>
        <section>
            <form @submit.prevent="handleLogin">
                <section>
                    <FieldComponent class="input" v-for="field in fields" :key="field.id" :data="field" />
                    <p v-if="emailError" class="error-message">L'email doit être valide.</p>
                    <p v-if="passwordError" class="error-message">Le mot de passe doit contenir au moins 6 caractères.</p>
                </section>
                <section>
                    <ButtonComponent class="button" v-for="button in buttons" :key="button.id" :data="button" />
                </section>
            </form>
            <section class="register-section">
                <button @click="goToRegister" class="register-button">Pas encore de compte ? S'inscrire</button>
            </section>
            <section v-if="errorMessage" class="error-message">{{ errorMessage }}</section>
        </section>
    </main>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import FieldComponent from '../components/FieldComponent.vue';
import ButtonComponent from '../components/ButtonComponent.vue';
import HeaderComponent from '../components/HeaderComponent.vue';

const router = useRouter();

const email = ref('');
const password = ref('');
const errorMessage = ref('');
const emailError = ref(false);
const passwordError = ref(false);

const fields = [
    {
        id: 'email',
        type: 'email',
        placeholder: 'Entre ton email',
        modelValue: email,
        error: emailError
    },
    {
        id: 'password',
        type: 'password',
        placeholder: 'Entre ton mot de passe',
        modelValue: password,
        error: passwordError
    }
];

const buttons = [
    {
        id: 'login-button',
        type: 'submit',
        textContent: 'Se connecter'
    },
    {
        id: 'reset-button',
        type: 'reset',
        textContent: 'Réinitialiser'
    }
];

const goToRegister = () => {
    router.push('/register');
};

const validateFields = () => {
    emailError.value = !email.value.includes('@');
    passwordError.value = password.value.length < 6;
    return !emailError.value && !passwordError.value;
};

const handleLogin = () => {
    if (!validateFields()) {
        errorMessage.value = 'Veuillez corriger les erreurs dans le formulaire.';
        return;
    }

    if (email.value === 'test@example.com' && password.value === 'password123') {
        console.log('Connexion réussie');
        localStorage.setItem('isLoggedIn', 'true');
        router.push('/');
    } else {
        errorMessage.value = 'Erreur lors de la tentative de connexion. Veuillez vérifier vos identifiants.';
        console.error('Erreur lors de la tentative de connexion');
    }
};
</script>

<style scoped>
main {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    margin-top: 20px;
}

h1 {
    margin-bottom: 20px;
}

form {
    width: 100%;
    max-width: 400px;
}

.input {
    margin-bottom: 15px;
}

.input.error {
    border-color: red;
}

.button {
    border-radius: 12px;
    padding: 8px 16px;
    background-color: #2c3e50;
    color: white;
    border: none;
    cursor: pointer;
}

.button:hover {
    background-color: #1a252f;
}

.register-section {
    margin-top: 20px;
}

.register-button {
    background: none;
    border: none;
    color: blue;
    text-decoration: underline;
    cursor: pointer;
}

.register-button:hover {
    color: darkblue;
}

.error-message {
    color: red;
    margin-top: 10px;
}
</style>