<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
const publicAssetURL = (path: string) => __publicAssetsURL(path);
const modules = [Autoplay];
</script>

<template>
        <Swiper :autoplay="{ delay: 5000 }"  :loop="true" :modules="[Autoplay]">
            <SwiperSlide>
                <div class="background" :style="{ backgroundImage: `url(${publicAssetURL('/images/background.webp')})` }">
                    <div>
                        <h2>Welcome to Everything Enterprise</h2>
                        <p>Everything Enterprise is your one-stop shop for all things carpentry and interior design. We
                            offer a
                            widerange of products, from handcrafted furniture to custom-made cabinetry.</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div class="background"
                    :style="{ backgroundImage: `url(${publicAssetURL('/images/interior_design.webp')})` }">
                    <div>
                        <h2>Design Your Home</h2>
                        <p>Whether you're looking to update your kitchen, remodel your bathroom, or simply add a touch of
                            style
                            to your home, we have everything you need.</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div class="background" :style="{ backgroundImage: `url(${publicAssetURL('/images/kitchen.webp')})` }">
                    <div>
                        <h2>Create Your Dream Kitchen</h2>
                        <p>Our team of skilled carpenters specializes in designing and creating beautiful, functional
                            kitchens.
                            From custom cabinets to unique countertops, we can bring your dream kitchen to life.</p>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
</template>

<style scoped>
div.background {
    position: relative;
    height: 100vh;
    width: 100%;
    font-weight: 1000;
    color: rgb(255, 255, 255);
    font-family: 'Roboto';
    text-align: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: left;
    box-shadow: inset 0 0 400px 300px rgba(0, 0, 0, 0.1);
}

div.background>div {
    min-width: 300px;
    width: 100%;
    height: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    backdrop-filter: saturate(2) brightness(0.6);
}

div.background p {
    line-height: 28px;
}

div.background h1 {
    font-size: 32px;
    margin: 3px 0 5px;
}

.background-img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -2;
}

@media (max-width: 400px) {
    .background p {
        font-size: 14px;
    }
}</style>