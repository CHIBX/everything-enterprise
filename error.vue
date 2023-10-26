<script setup lang="ts">
interface ServerError { url: string; statusCode: number; statusMessage: string; message: string; description: string; data?: any; }
useHead({
  link: [
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@500&display=swap' },
  ],
  htmlAttrs: {
    lang: 'en'
  }
});
const error = useError() as unknown as ServerError;
</script>

<template>
    <PortHeader />
    <main>
        <h1 class="at-404">{{ error.statusCode }}</h1>
        <h1 v-if="error!.statusCode === 404">Page not found</h1>
        <h1 v-else-if="error.statusCode === 403">Forbidden</h1>
        <h1 v-else-if="error.statusCode === 500">Internal Server Error</h1>
        <button class="go-back" @click="navigateTo('/')">Take Me Home</button>
    </main>
    <PortFooter />
</template>

<style scoped>
main {
    min-height: calc(100vh - 90px);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 20px;
}

.at-404 {
    font-weight: 1000;
    font-size: 75pt;
    color: #d67900;
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
