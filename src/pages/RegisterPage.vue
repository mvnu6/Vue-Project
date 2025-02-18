<template>
    <main>
        <h1>Page d'Inscription</h1>
        <section>
            <form @submit="handleRegister">
                <section>
                    <FieldComponent class="input" v-for="field in fields" :key="field.id" :data="field" />
                </section>
                <section>
                    <ButtonComponent class="button" v-for="button in buttons" :key="button.id" :data="button" />
                </section>
            </form>
            <section class="login-section">
                <button @click="goToLogin" class="login-button">Déjà un compte ? Se connecter</button>
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

const router = useRouter();

const username = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const errorMessage = ref('');

const fields = [
    {
        id: 'username',
        type: 'text',
        placeholder: 'Entre ton pseudo',
        modelValue: username
    },
    {
        id: 'email',
        type: 'email',
        placeholder: 'Entre ton email',
        modelValue: email
    },
    {
        id: 'password',
        type: 'password',
        placeholder: 'Choisis un mot de passe',
        modelValue: password
    },
    {
        id: 'confirm-password',
        type: 'password',
        placeholder: 'Confirme ton mot de passe',
        modelValue: confirmPassword
    }
];

const buttons = [
    {
        id: 'register-button',
        type: 'submit',
        textContent: "S'inscrire"
    },
    {
        id: 'reset-button',
        type: 'reset',
        textContent: 'Réinitialiser'
    }
];

const goToLogin = () => {
    router.push('/login');
};

const handleRegister = async (event: Event) => {
    event.preventDefault();

    if (password.value !== confirmPassword.value) {
        errorMessage.value = 'Les mots de passe ne correspondent pas.';
        return;
    }

    try {
        errorMessage.value = ''; // Réinitialiser le message d'erreur
        // Exemple d'appel API pour l'inscription
        const response = await fetch('/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username.value,
                email: email.value,
                password: password.value
            })
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(errorText || 'Erreur lors de l\'inscription');
        }

        const data = await response.json();
        console.log('Inscription réussie', data);

        // Redirection après inscription réussie
        router.push('/');
    } catch (error) {
        errorMessage.value = `Erreur lors de la tentative d'inscription: ${error.message}`;
        console.error('Erreur lors de la tentative d\'inscription', error);
    }
};
</script>
<style scoped>
/* Style général de la page */
main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    padding: 20px;
    font-family: Arial, sans-serif;
}

/* Titre de la page */
h1 {
    font-size: 2rem;
    color: #333;
    margin-bottom: 20px;
}

/* Conteneur du formulaire */
form {
   
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 400px;
}

/* Section des champs de formulaire */
form section {
    margin-bottom: 15px;
}

/* Style des champs de formulaire */
.input {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1rem;
}

.input:focus {
    border-color: #007bff;
    outline: none;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
}

/* Section des boutons */
form section:last-of-type {
    display: flex;
    justify-content: space-between;
    gap: 10px;
}

/* Style des boutons */
.button {
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.button[type="submit"] {
    background-color: #007bff;
    color: #fff;
}

.button[type="submit"]:hover {
    background-color: #0056b3;
}

.button[type="reset"] {
    background-color: #6c757d;
    color: #fff;
}

.button[type="reset"]:hover {
    background-color: #5a6268;
}

/* Section "Déjà un compte ?" */
.login-section {
    margin-top: 20px;
    text-align: center;
}

.login-button {
    background: none;
    border: none;
    color: #007bff;
    font-size: 1rem;
    cursor: pointer;
    text-decoration: underline;
    transition: color 0.3s ease;
}

.login-button:hover {
    color: #0056b3;
}

.error-message {
    color: red;
    margin-top: 10px;
}
</style>