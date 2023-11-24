<script setup lang="ts">
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
let canFetch = true;
import type { Gallery } from '@/utils/types';
useNuxtApp().$library.add(faAngleUp);
provide('objectUrl', ref<Map<string, string>>(new Map()));
import { capitalize } from 'vue';
const imageType = ref<string>('All');
let gallery = ref<Gallery['galleryData']>([]);
useHead({
  link: [
    { rel: 'stylesheet', href: useLazy("https://fonts.googleapis.com/css2?family=Nunito&display=swap") },
    { rel: 'stylesheet', href: useLazy('https://fonts.googleapis.com/css2?family=Delius&display=swap') },
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
const _types=ref<string[]>([]);
let { types } = await $fetch('/api/gallerytype');
_types.value = ['all',...types];
if(import.meta.client){getGalleryImages();}
async function getGalleryImages(){  
  if(canFetch){
    try {
      console.log(imageType.value)
      canFetch=false;
      let { galleryData } = await $fetch('/api/gallery', {
        query: {
            type: imageType.value.toLowerCase() || 'all'
          }
        });
        setTimeout(() => {
          canFetch=true;
        }, 2000);
        gallery.value = [...galleryData];
        console.log(gallery.value)
      }
      catch (e) {
        console.error(e);
      }
  }
}
const isTypesOpen = ref(false);
function handleTypes(index: number){
  imageType.value = capitalize(_types.value[index]);
  getGalleryImages();
}
const height = computed(() => (isTypesOpen.value? {height: '276px'}: {height: '0'}));
const rotate = computed(() => (isTypesOpen.value? {transform: 'rotate(180deg)'}: {}));
</script>

<template>
    <div class="gallery-header">
        <h2>Welcome to our Gallery</h2>
       <h4>Browse from our gallery</h4>
    </div>
    <div class="type-container">
        <div class="type-view" @click="()=>{isTypesOpen=!isTypesOpen}">
         <span>{{ imageType }}</span>
         <MyFont :style="rotate" :icon="['fas', 'angle-up']" />
        </div>
        <div class="types" :style="height">
          <div v-for="(_type, index) in _types" :class="{active: imageType.toLowerCase() === _type}" :key="index" @click="handleTypes(index)">{{ capitalize(_type) }}</div>
        </div>
    </div>
    <Gallery :gallery-data="gallery" />
</template>

<style scoped>
.gallery-header h2, .gallery-header h4{
    text-align: center;
    font-weight: 400;
}
.gallery-header h2{
    font-family: 'Nunito', sans-serif;
    font-weight: 400;
    font-size: 2em;
}
.type-container{
  position: relative;
    display: flex;
    max-width: 150px;
    align-items: center;
    flex-direction: column;
    margin-left: 20px;
}
.type-view{
  padding: 12px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: rgb(231, 231, 231);
  cursor: pointer;
}
.active{
  background-color: rgb(214, 214, 214) !important;
}
.type-view:hover, .types > div:hover{
  background-color: rgb(214, 214, 214);
}
.types {
  position: absolute;
  z-index: 2;
  top: 48px;
  overflow-y: scroll;
  height: 276px;
  width: 100%;
}
.types > div{
  padding: 12px 15px;
  background-color: rgb(231, 231, 231);
  width: 100%;
  text-align: center;
  cursor: pointer;
}
</style>

