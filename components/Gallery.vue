<script setup lang="ts">
import type { GalleryData } from '~/types';
defineProps<{galleryData: GalleryData}>();

// function transformImageList(paths: string[]){
//    images.value = paths.slice().map((path)=>({path}));
// }
// function capitalize(str:string){
//   return useCapitalize(str);
// }
</script>

<template>
    <section v-for="(gallery, categories) in galleryData">
        <div class="flex justify-between mb-2.5 pr-4 pl-3 text-pb-700" ><h1 class="capitalize font-extrabold text-2xl">{{ categories }}</h1><NuxtLink :to="`/gallery/${categories}`" class="see-more underline underline-offset-1 inline-flex items-center">See More <MyIcon name="material-symbols:chevron-right-rounded" /></NuxtLink></div>
        <div class="mt-5"> 
            <GallerySlide :image="gallery" />
        </div>
    </section>
</template>

<style scoped>
.see-more :deep(svg){
    transition: all 0.2s ease-in;
}
.see-more:hover :deep(svg){
    transform: translateX(5px);
}
</style>