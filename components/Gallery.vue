<script setup lang="ts">
import PrimeGalleria from 'primevue/galleria';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Autoplay } from 'swiper/modules';
const slidesPV = ref(4);
if (import.meta.client) {
    slidesPV.value = (innerWidth > 1300) ? 6 : (innerWidth > 1000) ? 4 : (innerWidth > 768 ? 3 : (innerWidth > 600 ? 2.5 : innerWidth > 500 ? 2 : 1))
}
const props = defineProps<{galleryData: Record<string, string[]>}>();
const r = ref(4000);
const images = ref<{path:string}[]>([]);
const [parent] = useAutoAnimate();
const activeGalleriaIndex=ref(0);
const canGoFullScreen=ref(false);
function transformImageList(paths: string[]){
   images.value = paths.slice().map((path)=>({path}));
}
const responsiveOptions = [
    {
        breakpoint: '1500px',
        numVisible: 5
    },
    {
        breakpoint: '1024px',
        numVisible: 4
    },
    {
        breakpoint: '768px',
        numVisible: 3
    },
    {
        breakpoint: '560px',
        numVisible: 2
    }
];
// function capitalize(str:string){
//   return useCapitalize(str);
// }
</script>

<template>
    <section v-for="(paths, name, i) in props.galleryData" class="">
        <div class="flex justify-between mb-2.5 pr-2.5 pl-2.5" ><h3>{{ useCapitalize(name) }}</h3><NuxtLink :to="`/${name}`">See more</NuxtLink></div>
        <div class="flex mt-5 gap-y-2.5 gap-x-5"> 
            <Swiper class="mx-5" :autoplay="{delay: r}" :slides-per-view="slidesPV" :space-between="20" :loop="true" :modules="[Navigation, Autoplay]" :navigation="{nextEl: `.${i}-swiper-next`, prevEl: `.${i}-swiper-prev`}">
                <SwiperSlide v-for="(imagePath, index) in paths">
                    <GalleryImage :path="imagePath" @open="()=>{transformImageList(paths);activeGalleriaIndex=index;canGoFullScreen=true;}" />
                </SwiperSlide>
            </Swiper>
            <div :class="`${i}-swiper-prev`" class="left-2.5"><MyIcon name="uil:angle-left-b" /></div>
            <div :class="`${i}-swiper-next`" class="right-2.5"><MyIcon name="uil:angle-right-b" /></div>
        </div>
    </section>
    <div ref="parent">
        <PrimeGalleria v-if="canGoFullScreen" :responsiveOptions="responsiveOptions" :value="images" v-model:active-index="activeGalleriaIndex" containerStyle="max-width: 50%" :circular="true" :showIndicators="true" :transition-interval="500" :full-screen="true">
            <template #item="slotProps">
                <img :src="slotProps.item.path" class="w-full block"/>
            </template>
            <template #thumbnail="slotProps">
                <img :src="slotProps.item.path" class="block" />
            </template>
        </PrimeGalleria>
    </div>
</template>

<style scoped>
svg{
    height: 25px;
    width: 25px;
}
[class*=swiper-prev], [class*=swiper-next]{
    position: absolute;
    z-index: 3;
    display: flex;
    align-items: center;
    justify-self: center;
    cursor: pointer;
    padding: 10px;
    color: #8B4513;
    border-radius: 50%;
    transform: translateY(-50%);
    top: 50%;
    background-color: rgb(255, 255, 255);
    box-shadow: var(--hor) 0 5px rgb(0, 0, 0);
    transition: 0.1s ease-in-out;
}
</style>