<script setup lang="ts">
import type { NuxtError } from '#app';
useHead({
    link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&display=swap' },
    ]
});
const error = useError();
</script>

<template>
    <div class="container">
        <PortHeader />
        <main>
            <div v-if="error">
                <img :src="error.statusCode === 404 ? '/images/404.webp' : '/images/carpenter-404.svg'"
                    :alt="error.statusCode + ' page'" />
                <!-- <h1 class="at-404">{{ error.statusCode }}</h1> -->
                <h1 v-if="error.statusCode === 404">Seems like you got lost</h1>
                <h1 v-else-if="error.statusCode === 403">Forbidden</h1>
                <h1 v-else-if="error.statusCode === 500">Internal Server Error</h1>
                <div>{{ error.statusMessage }}</div>
                <button class="go-back" @click="navigateTo('/', { open: { target: '_self' } })">Take Me Home</button>
            </div>
        </main>
        <PortFooter />
    </div>
</template>

<style scoped>
main {
    min-height: calc(100vh - 90px);
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 100%;
}

img {
    margin-top: 20px;
    max-width: 200px;
    max-height: 200px;
}
main>div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.page-not-found {
    font-weight: 1000;
    font-size: 24pt;
}

.go-back {
    margin: 20px auto 0;
    padding: 15px 15px;
    font-weight: 700;
    font-size: 16px;
    cursor: pointer;
    background-color: black;
    color: white;
}
</style>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'DM Sans', sans-serif;
}
</style>
