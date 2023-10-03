<template>
    <header>
        <!-- <span v-for="(link, index) in links" :key="index">{{ link }}</span> -->
       <div class="flex">
          <span class="logo-holder"><img src="/Logo.jpg" alt="My Logo" class="my-logo" /></span>
          <span><span v-for="(link, index) in links" :key="index"><NuxtLink :to="link[0]">{{ link[1] }}</NuxtLink></span></span>
       </div> 
    </header>
</template>

<script setup lang="ts">
let links = [['/home','Home'], ['/about-me', 'About Me'], ['/contact', 'Contact Me'], ['/services', 'My Services'], ['/gallery', 'Gallery']]
</script>

<style scoped>
header{
    min-height: 80px;
    box-shadow:  0 1px 10px rgba(0, 0, 0, 0.3);
}
.my-logo{
    margin-top: 5px; 
}
.logo-holder{
    margin-left: 20px;
}
.flex{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>

<style>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.my-logo {
    width: 70px;
    height: 70px;
    border-radius: 50%;
}
</style>