<script setup lang="ts">
import  { useSwiper } from 'swiper/vue';
const carousel= useSwiper();
</script>

<template>
    <div class="testimonial-controls">
            <button name="arrow-left" style="border-left:  2px solid rgb(0, 0, 0);" @click="()=>carousel.slidePrev()"><MyFont :icon="['fas', 'angle-left']" style="font-size: 20px;"/></button>
            <button name="arrow-right" style="border-right:  2px solid rgb(0, 0, 0);" @click="()=>carousel.slideNext()"><MyFont :icon="['fas', 'angle-right']" style="font-size: 20px;"/></button>
    </div>
</template>

<style scoped>
.testimonial-controls{
    padding: 20px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
}
.testimonial-controls button{
    background-color: transparent;
    cursor: pointer;
    padding: 10px 15px;
    border-style: outset;
    border: none;
    border-top: 2px solid rgb(0, 0, 0);
    border-bottom: 2px solid rgb(0, 0, 0);
}
</style>