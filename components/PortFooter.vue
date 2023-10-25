<script setup lang="ts">

</script>

<template>
    <footer>
        <div>
           
        </div>
        <div class="base-line">
           <span>Copyright 2023 &copy;</span>
           <span><NuxtLink href="/">Everything Enterprise</NuxtLink></span>
        </div>
    </footer>
</template>

<style scoped>
    footer {
        margin-top: 50px;
        color: white;
    }
    .base-line{
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 40px;
        padding: 0 20px;
        font-size: 12px;
        border-top: 1px solid white;
        background-color: black;
    }
    .base-line a{
        text-decoration: none;
        color: white;
    }
    .base-line a:hover{
        text-decoration: underline;
    }
</style>