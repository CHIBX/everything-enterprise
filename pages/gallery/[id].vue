<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Autoplay, EffectCreative } from 'swiper/modules';
import type { WatchStopHandle } from 'vue';
// import { vOnClickOutside } from '@vueuse/components';

const { id } = useRoute().params;
const { data, error, pending } = await useFetch(`/api/gallery/${id}`, {
    lazy: true,
    server: false,
    deep: false
});

const [parent] = useAutoAnimate();
const activeSwiperIndex = ref(0);
const canGoFullScreen = ref(false);
let sizeBasedOnDevice = 300;
if (import.meta.client) {
    sizeBasedOnDevice = (innerWidth < 600) ? Math.max(innerWidth - 50, 300) : 500;
}
let a: WatchStopHandle;
a = watch(data, () => {
    console.log(data.value?.galleryData);
    a();
})
let isPending = debouncedRef(pending, 2000);
</script>

<template>
    <div class="py-5 px-2.5 select-none">
        <div v-if="isPending" class="flex justify-center items-center w-full h-full">
            <MyIcon name="eos-icons:loading" class="text-pb-600 mt-20" size="150" />
        </div>
        <div class="w-full full-gallery" v-else-if="data">
            <div class="relative image object-contain w-fit"
                v-for="({ secure_url, folder, name }, index) in data.galleryData">
                <img :style="{ height: `275px`, width: `300px` }" :src="secure_url" class="w-full rounded-lg"
                    :alt="folder ? `${folder} images` : undefined" width="300" height="275" />
                <MyIcon name="uil:trash-alt" class="trash absolute top-3 right-5" size="30" />
                <MyIcon name="uil:eye" class="image-eye absolute" size="30"
                    @click="() => { canGoFullScreen = true; activeSwiperIndex = index }" />
            </div>
        </div>
        <div class="w-full h-full flex items-center justify-center" v-else>
            Error Occured
        </div>
        <div ref="parent">

            <PrimeDialog v-if="data" class="gallery-dialog h-full select-none" v-model:visible="canGoFullScreen" :modal="true" :pt="{
            root: {
                style: 'flex-direction: row;justify-content: center; align-items: center;position: relative;overflow: hidden;max-height: none;width: 100%;'
            },
            mask: { style: 'backdrop-filter: blur(5px) brightness(0.3);align-items: center;' },
        }">
                <template #container="{ closeCallback }">
                    <MyIcon name="uil:times" @click="closeCallback"
                        class="absolute text-white hover:text-red-600 top-2.5 right-2.5" size="40" />

                    <div class="text-center">
                        <div class="relative"
                        :style="{ height: `${sizeBasedOnDevice}px`, width: `${sizeBasedOnDevice}px` }" >
                            <Swiper :modules="[Navigation]" :slidesPerView="1" :initialSlide="activeSwiperIndex"
                                :navigation="{ nextEl: `.b-swiper-next`, prevEl: `.b-swiper-prev` }" :loop="true"
                                :grabCursor="true" >

                                <SwiperSlide v-for="({ secure_url, folder, name }, index) in data.galleryData"
                                    :style="{ height: `${sizeBasedOnDevice}px`, width: `${sizeBasedOnDevice}px` }">
                                    <div class="relative object-contain">
                                        <img :style="{ height: `${sizeBasedOnDevice}px`, width: `${sizeBasedOnDevice}px` }"
                                            :src="secure_url" class="w-full rounded-md"
                                            :alt="folder ? `${folder} images` : undefined" :width="sizeBasedOnDevice"
                                            :height="sizeBasedOnDevice" />
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                            <div class="b-swiper-prev -left-6">
                                <MyIcon name="uil:angle-left-b" size="35" />
                            </div>
                            <div class="b-swiper-next -right-6">
                                <MyIcon name="uil:angle-right-b" size="35" />
                            </div>
                        </div>
                    </div>
                </template>
            </PrimeDialog>
        </div>
    </div>
</template>


<style scoped>
.full-gallery{
    display: flex;
    flex-flow: wrap;
    transition: all 0.3s ease-in-out;
    gap: 20px 10px;
    justify-content: center;
}
</style>
<style>
[class*=swiper-prev],
[class*=swiper-next] {
    position: absolute;
    z-index: 10;
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
    filter: brightness(0.7);
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