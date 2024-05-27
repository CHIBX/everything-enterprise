<script setup lang="ts">
import { useImage, type UseAsyncStateReturn } from '@vueuse/core';
import 'swiper/css';
import type { WatchStopHandle } from 'vue';
import type { GalleryData } from '~/types';

useHead({
  link: [
    { rel: 'stylesheet', href: "https://fonts.googleapis.com/css2?family=Nunito&display=swap" }
  ],
  title: 'Gallery | Everything Enterprise',
  meta: [
    {
      name: 'description', content: 'Everthing Enterprise',
    },
    {
      name: 'author', content: 'Desmond Asemota'
    },
    {
      name: 'creator', content: 'Chiebidolu Chinaemerem',
    },
    {
      name: 'C.E.O', content: 'Desmond Asemota',
    },
    {
      name: 'keywords', content: 'Everything Enterprise, Everything Enterprise Gallery, Carpentry Gallery, Furniture Gallery',
    }
  ],
});

const { data, error, pending } = await useFetch('/api/gallery', {
  lazy: true,
  server: false,

  deep: false
});

const isPending = debouncedRef(pending, 2000);

const [galleryParent] = useAutoAnimate({ easing: 'ease-in-out', duration: 500 });
</script>

<template>
  <div class="h-full pt-5" ref="galleryParent">
    <div class="gallery-header mb-5">
      <h2>Welcome to our Gallery</h2>
    </div>
    <div v-if="isPending" class="flex justify-center items-center w-full h-full">
      <MyIcon name="eos-icons:loading" class="text-pb-600 mt-20" size="150" />
    </div>
    <div v-else-if="error"></div>
    <LazyGallery v-else :gallery-data="data!.galleryData" />
    <MyIcon name="eos-icons:loading" class="text-pb-600" size="150" />
  </div>

</template>

<style scoped>
.gallery-header h2 {
  text-align: center;
  font-weight: 400;
  font-size: 1.2em;
}

.gallery-header h2 {
  font-family: 'DM Sans', sans-serif;
  font-weight: 600;
  font-size: 1.7em;
}
</style>
