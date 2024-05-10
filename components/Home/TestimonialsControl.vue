<script setup lang="ts">
import  { useSwiper } from 'swiper/vue';
const carousel= useSwiper();
</script>

<template>
    <div class="py-5 flex justify-center items-center gap-10">
            <button class="border-t-2 border-b-2 border-l-2 border-black p-2" @click="()=>carousel.slidePrev()"><MyIcon name="uil:angle-left-b" size="25" /></button>
            <button class="border-t-2 border-b-2 border-r-2 border-black p-2" @click="()=>carousel.slideNext()"><MyIcon name="uil:angle-right-b" size="25" /></button>
    </div>
</template>

<style scoped>
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