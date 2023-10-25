<script setup lang="ts">
import useLazy from '~/composables/useLazy';

let href = ref<string>();
useHead({
  link: [
    { rel: 'stylesheet', href },
  ],
  title: 'Everything Enterprise',
});
useSeoMeta({
  "twitterImageAlt": "Picture of a nice furniture",
  "twitterCreator": 'Chiebidolu Chinaemerem',
  "twitterSite": "@chiebidolu06",
  "twitterCard": 'summary_large_image',
  "twitterImage": useRequestURL().origin + __publicAssetsURL('/background.jpg'),
  "twitterTitle": 'Everything Enterprise',
  "author": 'Asemota Desmond',
  "articleTag": ['Everything Enterprise', 'Furniture', 'Carpentry', 'Interior Design', 'Quality Furniture', 'Quality Carpentry', 'Quality Interior Design'],
  "creator": 'Chiebidolu Chinaemerem',
  "description": 'Everything Enterprise is a leading provider of quality carpentry and interior design services. We offer a wide range of products, from handcrafted furniture to custom-made cabinetry.',
  "ogDescription": 'Everything Enterprise is a leading provider of quality carpentry and interior design services. We offer a wide range of products, from handcrafted furniture to custom-made cabinetry.',
  "ogImage": useRequestURL().origin + __publicAssetsURL('/background.jpg'),
  "ogType": "website",
  "ogTitle": 'Everything Enterprise',
  "ogImageAlt": "Picture of a nice furniture",
  "ogUrl": useRequestURL().origin,
  "ogSiteName": 'Everything Enterprise',
})
useFavicon(__publicAssetsURL('/Logo.jpg'));
onMounted(()=>{
  const { stop, remove } = useObserver(Array.from(document.querySelectorAll('.service')), (entries)=>{
       entries.forEach(({ target, isIntersecting })=>{
         if(isIntersecting){
           target.classList.remove('service-shown');
           remove(target);
          }
          if(stop && !document.querySelectorAll('.service-shown').length){
             stop();
          }
       })
    })
  useLazy(href, 'https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap', 2000);
})
</script>

<template>
  <div class="fore-face">
     <HomeFrontFace />
  </div>
  <div class="reasons-container">
      <div>
         
      </div>
      <div></div>
      <div></div>
  </div>
  <HomeQualities />
  <HomeSpecialties />
</template>

<style scoped>

</style>