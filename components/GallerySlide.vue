<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Autoplay, Virtual } from 'swiper/modules';
<<<<<<< HEAD
import type { ReturnImageInfo } from '~/types';

const props = defineProps<{
    image: ReturnImageInfo[],
    index: number
}>();

=======
import { vOnClickOutside } from '@vueuse/components';
import type { ReturnImageInfo } from '~/types';

const props = defineProps<{
    image: ReturnImageInfo[]
}>();


>>>>>>> a75ba2571e4dd0ae27aabd334c515ecbb99e1e1d
// let isSecureProtocol = true;
// if (import.meta.client) {
//     isSecureProtocol = window.location.protocol === 'https:';
// }
// isSecureProtocol ? secure_url : url

const slidesPV = ref(4);
if (import.meta.client) {
    slidesPV.value = (innerWidth > 1300) ? 6 : (innerWidth > 1000) ? 4 : (innerWidth > 768 ? 3 : (innerWidth > 600 ? 2.5 : innerWidth > 500 ? 2 : 1))
}

const [parent] = useAutoAnimate();
const activeGalleriaIndex = ref(0);
const canGoFullScreen = ref(false);
let sizeBasedOnDevice = 300;
if (import.meta.client) {
<<<<<<< HEAD
    sizeBasedOnDevice = (innerWidth < 600) ? Math.max(innerWidth - 50, 300) : 500;
=======
    sizeBasedOnDevice = (innerWidth < 500) ? innerWidth - 20 : 480;
>>>>>>> a75ba2571e4dd0ae27aabd334c515ecbb99e1e1d
}

// const responsiveOptions = [
//     {
//         breakpoint: '1400px',
//         // numVisible: 6,
//         numScroll: 1
//     },
//     {
//         breakpoint: '1199px',
//         // numVisible: 3.5,
//         numScroll: 1
//     },
//     {
//         breakpoint: '767px',
//         // numVisible: 2,
//         numScroll: 1
//     },
//     {
//         breakpoint: '575px',
//         // numVisible: 1.5,
//         numScroll: 1
//     },
//     {
//         breakpoint: '400px',
//         // numVisible: 1,
//         numScroll: 1
//     }
// ];
<<<<<<< HEAD
</script>

<template>
    <div class="relative px-2.5">
        <Swiper :space-between="20" :slidesPerView="'auto'" :centeredSlides="true" :modules="[Navigation, Autoplay]"
            :navigation="{ nextEl: `.a-swiper-next-${index}`, prevEl: `.a-swiper-prev-${index}` }" :loop="true"
            :autoplay="{ delay: Number((Math.floor(Math.random() * (5000 - 2000 + 1)) + 2000).toString().padStart(4, '0')), pauseOnMouseEnter: true }">
            <SwiperSlide v-for="({ secure_url, url, folder, width, height, name }, index) in image" :key="name"
                :virtualIndex="name" :style="{ height: `240px`, width: `250px` }">
                <div class="relative image object-contain">
                    <img :style="{ height: `240px`, width: `250px` }" :src="secure_url" class="w-full rounded-lg"
                        :alt="folder? `${folder} images`: undefined" width="250" height="240" />
                    <MyIcon name="uil:trash-alt" class="trash absolute top-3 right-3" size="30" />
                    <MyIcon name="uil:eye" class="image-eye absolute" size="30"
=======

</script>

<template>
    <div class="relative">
        <Swiper :space-between="20" :slidesPerView="'auto'" :centeredSlides="true" :modules="[Navigation, Autoplay]"
            :navigation="{ nextEl: `.a-swiper-next`, prevEl: `.a-swiper-prev` }" :loop="true"
            :autoplay="{ delay: 5000, pauseOnMouseEnter: true }">
            <SwiperSlide v-for="({ secure_url, url, folder, width, height, name }, index) in image" :key="name"
                :virtualIndex="name" :style="{ height: `280px`, width: `300px` }">
                <div class="relative image object-contain">
                    <img :style="{ height: `280px`, width: `300px` }" :src="secure_url" class="w-full rounded-lg"
                        :alt="`${folder} images`" width="300" height="280" />
                    <MyIcon name="uil:trash-alt" class="trash absolute top-3 right-5" size="35" />
                    <MyIcon name="uil:eye" class="image-eye absolute" size="35"
>>>>>>> a75ba2571e4dd0ae27aabd334c515ecbb99e1e1d
                        @click="() => { canGoFullScreen = true; activeGalleriaIndex = index }" />
                </div>
            </SwiperSlide>
        </Swiper>
<<<<<<< HEAD
        <div :class="`a-swiper-prev-${index} left-1`">
            <MyIcon name="uil:angle-left-b" size="30" />
        </div>
        <div :class="`a-swiper-next-${index} right-1`">
=======
        <div class="a-swiper-prev left-1">
            <MyIcon name="uil:angle-left-b" size="30" />
        </div>
        <div class="a-swiper-next right-1">
>>>>>>> a75ba2571e4dd0ae27aabd334c515ecbb99e1e1d
            <MyIcon name="uil:angle-right-b" size="30" />
        </div>
    </div>

    <div ref="parent">

<<<<<<< HEAD
        <PrimeDialog class="gallery-dialog h-full select-none" v-model:visible="canGoFullScreen" :modal="true" :pt="{
            root: {
                style: 'flex-direction: row; align-items: center;position: relative;overflow: hidden;max-height: none;'
            },
            mask: { style: 'backdrop-filter: blur(3px) brightness(0.6);' }
        }">
            <template #container="{ closeCallback }">
                <MyIcon name="uil:times" @click="closeCallback"
                    class="absolute text-white hover:text-red-600 top-2.5 right-2.5 cursor-pointer" size="40" />

                <div class="relative overflow-hidden" >
                    <Swiper :modules="[Navigation, Autoplay]" :slidesPerView="'auto'" :spaceBetween="20"
                        :centeredSlides="true" :navigation="{ nextEl: `.b-swiper-next`, prevEl: `.b-swiper-prev` }"
                        :loop="true" :grabCursor="true">

                        <SwiperSlide v-for="(  { secure_url, folder, name }, index  ) in image" :virtualIndex="name"
                            :style="{ height: `${sizeBasedOnDevice}px`, width: `${sizeBasedOnDevice}px` }">
                            <div class="relative object-contain">
                                <img :style="{ height: `${sizeBasedOnDevice}px`, width: `${sizeBasedOnDevice}px` }"
                                    :src="secure_url" class="w-full rounded-md" :alt="folder? `${folder} images`: undefined"
                                    :width="sizeBasedOnDevice" :height="sizeBasedOnDevice" />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                    <div class="b-swiper-prev left-1">
                        <MyIcon name="uil:angle-left-b" size="30" />
                    </div>
                    <div class="b-swiper-next right-1">
                        <MyIcon name="uil:angle-right-b" size="30" />
                    </div>
                </div>
            </template>
        </PrimeDialog>
=======
        <PrimeDialog class="gallery-dialog h-full" v-model:visible="canGoFullScreen" :modal="true" :pt="{
            root: {
                style: 'flex-direction: row; align-items: center;position: relative;'
            },
            mask: { style: 'backdrop-filter: blur(3px) brightness(0.6)' }            
        }">
            <template #container="{ closeCallback }">
                <!-- <MyIcon name="uil:times" @click="closeCallback"
                    class="absolute text-white hover:text-red-600" size="32" /> -->

                <div class="relative overflow-hidden" v-on-click-outside="closeCallback">
                    <Swiper :modules="[Navigation, Autoplay]" :slidesPerView="'auto'" :spaceBetween="20" :centeredSlides="true"
                    :navigation="{ nextEl: `.b-swiper-next`, prevEl: `.b-swiper-prev` }" :loop="true" :grabCursor="true"
                    >
                    
                    <SwiperSlide v-for="(  { secure_url, folder, name }, index  ) in image" 
                        :virtualIndex="name" :style="{ height: `${sizeBasedOnDevice}px`, width: `${sizeBasedOnDevice}px` }">
                        <div class="relative object-contain">
                            <img :style="{ height: `${sizeBasedOnDevice}px`, width: `${sizeBasedOnDevice}px` }" :src="secure_url" class="w-full rounded-md"
                            :alt="`${folder} images`" :width="sizeBasedOnDevice" :height="sizeBasedOnDevice" />
                        </div>
                    </SwiperSlide>
                </Swiper>
                <div class="b-swiper-prev left-1">
                    <MyIcon name="uil:angle-left-b" size="25" />
                </div>
                <div class="b-swiper-next right-1">
                    <MyIcon name="uil:angle-right-b" size="25" />
                </div>
            </div>
            </template>
        </PrimeDialog>

        <!-- <PrimeGalleria v-model:visible="canGoFullScreen" :containerStyle="`width: 80%; min-width: 300px`" :value="image"
            v-model:activeIndex="activeGalleriaIndex" :circular="true" :showThumbnails="false" :showIndicators="true"
            :showIndicatorsOnItem="true" indicatorsPosition="top" :transitionInterval="500" :fullScreen="true" :pt="{
            'closeButton': {
                class: 'text-white hover:text-red-600'
            },
            'indicators': {
                class: 'gap-1.5 py-1.5'
            },
            'indicator': {
                class: 'rounded-full flex'
            }
            // 'thumbnailWrapper': {
            //     class: '-mb-20'
            // },
            // 'thumbnailContainer': {
            //     class: 'py-2.5'
            // },
            // 'thumbnailItems': {
            //     class: 'gap-2.5'
            // }
        }">
            <template #item="{ item: { url, secure_url, width, height, folder } }">
                <img :src="secure_url" class="rounded-lg" :alt="`${folder} images`"
                    :style="{ height: `${sizeBasedOnDevice}px`, width: `${sizeBasedOnDevice}px` }" />
            </template>
            <template #indicator="slotProps">
                <span :class="(slotProps.index === activeGalleriaIndex) ? 'text-pb-800' : 'text-white'">
                    <MyIcon name="tabler:circle-filled" />
                </span>
            </template>
        </PrimeGalleria> -->
>>>>>>> a75ba2571e4dd0ae27aabd334c515ecbb99e1e1d
    </div>
</template>

<style>
[class*=swiper-prev],
[class*=swiper-next] {
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
    box-shadow: inset 1px 0 5px #00000059, inset -1px 0 5px #00000059;
    transition: 0.1s ease-in-out;
}

<<<<<<< HEAD
.gallery-dialog .swiper-slide {
=======
.gallery-dialog .swiper-slide{
>>>>>>> a75ba2571e4dd0ae27aabd334c515ecbb99e1e1d
    display: flex;
    justify-content: center;
}

<<<<<<< HEAD
.gallery-dialog img {
=======
.gallery-dialog img{
>>>>>>> a75ba2571e4dd0ae27aabd334c515ecbb99e1e1d
    filter: brightness(1.2);
}

.image img {
    transition: 0.3s ease;
}

.image svg {
    color: transparent;
    cursor: pointer;
}


.image:hover .trash:hover {
    color: red;
}

.image:hover img {
    filter: brightness(0.5);
}

.image:hover .trash {
    transition: 0.2s ease;
    color: white;
}

.image-eye {
    color: transparent;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: 0.3s ease;
}

.image:hover .image-eye {
    color: white;
}
</style>