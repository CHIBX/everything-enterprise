<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import  { useSwiper } from 'swiper/vue';
const carousel= useSwiper();
</script>

<template>
    <div class="testimonial-controls">
        <ClientOnly>
            <button @click="()=>carousel.slidePrev()"><FontAwesomeIcon :icon="['fas', 'angle-left']"/></button>
            <button @click="()=>carousel.slideNext()"><FontAwesomeIcon :icon="['fas', 'angle-right']"/></button>
        </ClientOnly>
    </div>
</template>

<style scoped>
.testimonial-controls{
    padding: 20px 0;
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
}
.testimonial-controls button{
    background-color: transparent;
    cursor: pointer;
    padding: 15px 20px;
    border: none;
    border-top: 2px solid rgb(0, 0, 0);
    border-bottom: 2px solid rgb(0, 0, 0);
}
</style>