<script setup lang="ts">
import 'swiper/css';
let gallery = ref<{name: string, path: string}[]>([])
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
const _types=ref<string[]>([]);
try{
   let arr=await $fetch('/api/gallery');
  //  arr.galleryData.forEach((data)=>{
  //     data.path=useCldImageUrl({options: {src: data.path}}).url;
  //  })
   gallery.value= arr.galleryData;
}
catch(e){
    gallery.value=[];
}
const galleryData=gallery.value.reduce((prev, {name, path}, index)=>{
    //@ts-ignore
    return Array.isArray(prev[name])? prev[name].push(path):prev[name]=[];
}, {}) as Record<string, string[]>;

// const isTypesOpen = ref(false);
// async function handleTypes(index: number){
//   if(imageType.value === _types.value[0]) {return;}
//   imageType.value = capitalize(_types.value[index]);
//   await getGalleryImages();
//   isTypesOpen.value=false;
// }
// const height = computed(() => (isTypesOpen.value? {height: '276px'}: {height: '0'}));
// const rotate = computed(() => (isTypesOpen.value? {transform: 'rotate(180deg)'}: {}));
// onMounted(()=>{
//    document.body.addEventListener('click', (e)=>{
//       const typeContainer = document.querySelector('.type-container') as HTMLElement;
//       if(!typeContainer.contains(e.target as HTMLElement)){
//         isTypesOpen.value=false;
//       }
//    })
// })
// <!-- <div class="type-container">
//         <div class="type-view" @click="()=>{isTypesOpen=!isTypesOpen}">
//          <span>{{ imageType }}</span>
//          <MyIcon :style="rotate" name="uil:angle-up" />
//         </div>
//         <div class="types" :style="height">
//           <div v-for="(_type, index) in _types" :class="{active: imageType.toLowerCase() === _type}" :key="index" @click="handleTypes(index)">{{ capitalize(_type) }}</div>
//         </div>
//     </div> -->
</script>

<template>
    <div class="gallery-header">
        <h2>Welcome to our Gallery</h2>
       <h4>Browse from our gallery</h4>
    </div>
    <Gallery :gallery-data="galleryData"  />
</template>

<style scoped>
.gallery-header h2, .gallery-header h4{
    text-align: center;
    font-weight: 400;
    font-size: 1.2em;
}
.gallery-header h2{
    font-family: 'Nunito', sans-serif;
    font-weight: 600;
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

