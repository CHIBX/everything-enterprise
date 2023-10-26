<script setup lang="ts">
import 'vue3-carousel/dist/carousel.css?inline';
import { Carousel, Slide } from 'vue3-carousel';
const publicAssetURL = (path: string) => __publicAssetsURL(path);
</script>

<template>
    <Carousel :autoplay="7500" :wrap-around="true" :transition="500">
    <slide :index="0">
        <div class="background" :style="{ backgroundImage: `url(${publicAssetURL('/background.jpg')})` }">
        <div>
            <h2>Welcome to Everything Enterprise</h2>
            <p>Everything Enterprise is your one-stop shop for all things carpentry and interior design. We offer a widerange of products, from handcrafted furniture to custom-made cabinetry.</p>
        </div>
    </div>
    </slide>
    <slide :index="1">
        <div class="background" :style="{ backgroundImage: `url(${publicAssetURL('/interior_design.jpg')})` }">
        <div>
            <h2>Design Your Home</h2>
            <p>Whether you're looking to update your kitchen, remodel your bathroom, or simply add a touch of style to your home, we have everything you need.</p>
        </div>
    </div>
    </slide>
    <slide :index="2">
        <div class="background" :style="{ backgroundImage: `url(${publicAssetURL('/kitchen.jpg')})` }">
        <div>
            <h2>Create Your Dream Kitchen</h2>
            <p>Our team of skilled carpenters specializes in designing and creating beautiful, functional kitchens. From custom cabinets to unique countertops, we can bring your dream kitchen to life.</p>
        </div>
    </div>
    </slide>
   </Carousel>
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
@media (max-width: 400px){
    .background p{
       font-size: 14px;   
    }
}
</style>