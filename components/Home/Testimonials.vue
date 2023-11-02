<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
const testimonials = ref([]);
const slidesPV=ref(4);
if(import.meta.client){
    slidesPV.value =  (innerWidth > 1000) ? 4: (innerWidth > 768? 3 : (innerWidth > 500? 1.8: 1))
 }
testimonials.value = (await $fetch('/api/testimonials')).testimonials as [];
// const modules = [Autoplay];
</script>

<template>
    <div class="testimonials-bk">

        <Swiper :autoplay="{ delay: 4000 }" :slides-per-view="slidesPV" :space-between="50" :loop="true" :modules="[Autoplay]">
          <SwiperSlide v-for="({ message, name, image, rating }) in testimonials">
            <div class="testimonial">
                <div class="testimonial-image">
                    <img :src="image" :alt="`${name}'s Avatar For The Testimonial`" height="100" width="100" />
                </div>
                <div class="testimonial-content">
                    <p class="testimonial-message">{{ message }}</p>
                    <NuxtRating :read-only="true" :rating-size="'25px'" :rating-value="rating" />
                    <h3 class="testimonial-name">{{ name }}</h3>
                </div>
            </div>
          </SwiperSlide>   

              <HomeTestimonialsControl />
        </Swiper>

    </div>
</template>

<style scoped>
.testimonials-bk {
    background-color: rgb(245, 245, 245);
    padding: 20px 0;
    margin-top: 20px;
    min-height: 350px;
    user-select: none;
}
.testimonial{
    margin: 0 10px;
    max-width: 300px;
}
.swiper{
    cursor: grab;
}
.swiper-slide{
    display: flex;
    justify-content: center;
}
.average-rating {
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
}
.testimonial-message{
    font-size: 13.5px;
    margin: 20px 0 10px;
}
.testimonial-content{
    text-align: center;
}
.testimonial-image{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
}
.testimonial-image img{
    border-radius: 50%;
    object-fit: cover;
}

</style>