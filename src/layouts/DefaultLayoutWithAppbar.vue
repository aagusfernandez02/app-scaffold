<script setup>
</script>

<template>
    <v-app>
        <v-app-bar>
            <v-toolbar-title>Mi Aplicación</v-toolbar-title>
        </v-app-bar>

        <v-main>
            <v-container>
                <router-view />
            </v-container>
        </v-main>

        <v-footer>
            <span>&copy; 2024 Mi Empresa</span>
        </v-footer>
    </v-app>
</template>

<style scoped>
/**/
</style>