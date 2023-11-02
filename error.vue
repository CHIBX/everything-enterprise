<script setup lang="ts">
import type { NuxtError } from '#app';
// interface ServerError { url: string; statusCode: number; statusMessage: string; message: string; description: string; data?: any; }
useHead({
  link: [
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@500&display=swap' },
  ]
});
const error = useError() as unknown as NuxtError;
if(import.meta.server){
    console.log(error.message);
}
</script>

<template>
    <PortHeader />
    <main>
        <div v-if="error">
        <h1 class="at-404">{{ error.statusCode }}</h1>
        <h1 v-if="error.statusCode === 404">Seems like you got lost</h1>
        <h1 v-else-if="error.statusCode === 403">Forbidden</h1>
        <h1 v-else-if="error.statusCode === 500">Internal Server Error</h1>
        <div>{{ error.message }}</div>
        <button class="go-back" @click="navigateTo('/', {open:{target:'_self'}})">Take Me Home</button>
        </div>
    </main>
    <PortFooter />
</template>

<style scoped>
main {
    min-height: calc(100vh - 90px);
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
}

.at-404 {
    font-weight: 1000;
    font-size: 75pt;
    color: #d67900;
}
main > div {
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
}</style>

<style>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
}
</style>
