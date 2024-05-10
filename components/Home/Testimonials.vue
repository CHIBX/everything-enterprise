<script setup lang="ts">
import data from '~/assets/testimonials.json';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay } from 'swiper/modules';
const testimonials = ref<typeof data['testimonials']>([]);
const slidesPV = ref(4);
if (import.meta.client) {
    slidesPV.value = (innerWidth > 1000) ? 4 : (innerWidth > 768 ? 3 : (innerWidth > 500 ? 1.8 : 1))
}
testimonials.value = data.testimonials || [{}];
</script>

<template>
    <div class="testimonials-bk">

        <Swiper :autoplay="{ delay: 4000 }" :slides-per-view="slidesPV" :space-between="50" :loop="true"
            :modules="[Autoplay]">
            <SwiperSlide v-for="({ message, name, image, rating }) in testimonials">
                <div class="testimonial">
                    <div class="testimonial-base">
                        <img :src="image" :alt="`${name}'s Avatar For The Testimonial`" height="100" width="100" />
                    </div>
                    <div class="testimonial-content">
                        <p class="testimonial-message">{{ message }}</p>
                        <div>
                            <NuxtRating :read-only="true" :rating-size="'25px'" :rating-value="rating" /> <strong>({{ rating }} / 5)</strong>
                        </div>
                    </div>
                    <div class="testimonial-name"><strong>({{ name }})</strong></div>
                </div>
            </SwiperSlide>

            <HomeTestimonialsControl />
        </Swiper>
    </div>
</template>

<style scoped>
.testimonials-bk {
    width: 100%;
    /* display: grid;
    justify-content: space-around;
    row-gap: 20px ;
    align-content: center;
    grid-auto-flow: row;
    grid-template-columns: repeat(auto-fit, minmax(min(300px, 25%), max(300px, 35%))); */
    background-color: rgb(245, 245, 245);
    padding: 0 20px;
    margin: 20px 0 0;
    min-height: 350px;
    user-select: none;
}

.testimonial {
    margin: 0 10px;
    padding: 20px;
}

.swiper {
    cursor: grab;
}

.swiper-slide {
    display: flex;
    justify-content: center;
}

.average-rating {
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
}

.testimonial-message {
    font-size: 1em;
    margin: 20px 0 10px;
}

.testimonial-content {
    text-align: center;
}

.testimonial-name {
    display: flex;
    justify-content: center;
    margin-top: 20px;
}

.testimonial-base {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
}

.testimonial-base img {
    height: 50px;
    width: 50px;
    border-radius: 50%;
    object-fit: cover;
}
</style>