<script setup>
import { ref } from 'vue';

const username = ref('');
const password = ref('');
const valid = ref(false);
const showPassword = ref(false);

const usernameRules = [ (v) => !!v || 'Email/Username is required' ];

const passwordRules = [ (v) => !!v || 'Password is required' ];

const togglePasswordVisibility = () => {
    showPassword.value = !showPassword.value;
};

const login = () => {
    if (valid.value && username.value && password.value) {
        console.log('Login attempt:', username.value, password.value);
        // Lógica para iniciar sesión aquí.
    }
};

const clearInputs = () => {
    username.value = '';
    password.value = '';
}
</script>

<template>
    <v-container class="fill-height" fluid> 
        <v-row justify="center" align="center">
            <v-col cols="10" md="4">
                <v-card class="loginCard">
                    <v-card-title class="text-h4 text-center mb-3">Login</v-card-title>
                    <v-card-text>
                        <v-form v-model="valid">
                            <!-- Email/Username -->
                            <v-text-field v-model="username" label="Email / Username" :rules="usernameRules"
                                prepend-icon="mdi-account" required class="mb-5" clearable clear-icon="mdi-close-circle"/>

                            <!-- Password -->
                            <v-text-field v-model="password" :type="showPassword ? 'text' : 'password'" label="Password"
                                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                                @click:append="togglePasswordVisibility" :rules="passwordRules" prepend-icon="mdi-lock"
                                required class="mb-5" clearable clear-icon="mdi-close-circle"/>

                            <!-- Submit Button -->
                             <v-row class="mt-5" justify="space-between">
                                 <v-btn :disabled="!password & !username" @click="clearInputs" class="button" variant="tonal" color="red">Clear</v-btn>
                                 <v-btn :disabled="!valid" @click="login" class="button" variant="tonal" color="green-darken-4">Login</v-btn>
                            </v-row>
                        </v-form>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>



<style scoped lang="scss">
.fill-height {
    min-height: 100vh;
    background-color: $bg-primary-color;
}

.loginCard {
    padding: 2rem;
}

.button {
    width: 30%;
    height: 3rem;
}
</style>