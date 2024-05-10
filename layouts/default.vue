<script setup lang="ts">
useFavicon(__publicAssetsURL('./favicon.ico'));
useHead({
  link: [
    // { rel: 'stylesheet', href:  'https://fonts.googleapis.com/css2?family=Open+Sans:wght@500&display=swap' },
    {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&display=swap'}
  ],
  htmlAttrs: {
    lang: 'en',
  }
});
const isTop=ref(true);
function toTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
onMounted(() => {
    addEventListener('scroll', ()=>{
        isTop.value = (scrollY > 400) ? !1 : !0;
    })
})
// const showCookie=ref(false);
// if(import.meta.client){
//   setTimeout(() => {
//     showCookie.value = true
//   }, 3000);
// }
// const checkCookie = !useCookie('cookieConsent').value;
// if(checkCookie){
//   let date = new Date(Date.now() + 1000 * 60 * 60 * 24 * 365);
//   let cookie = useCookie('cookieConsent', { expires: date, maxAge: date.valueOf()});
//   provide('showCookie', showCookie);
//   provide('cookieConsent', cookie);
// }
// const popUpContent=ref(''),
// isPopUpVisible=ref(false);
// provide('isPUV', isPopUpVisible);
// provide('pUC', popUpContent);
</script>


<template>
  <div class="container">
    <PortHeader />
    <main>
      <slot />
    </main>
    <PortFooter />
<span id="to-top" :class="{'fade-on': !isTop}" class="cursor-pointer fixed iflex justify-center text-white items-center rounded-full  opacity-0 p-3 bottom-5 right-2.5" @click="toTop">
  <MyIcon name="uil:angle-up" size="30" />
</span>
</div>
</template>

<style scoped>
main {
  min-height: calc(100vh - 80px);
  margin: 80px 0 20px;
}

#to-top {
  z-index: 3;
  background-color: #923d00;
}

</style>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'DM Sans', 'Open Sans', sans-serif;
}
.fade-on {
  opacity: 1 !important;
}
#__nuxt{
  display: flex;
  justify-content: center; 
  overflow-x: hidden;
}
#__nuxt > div.container{
  width: 100%;
  max-width: 1800px;
}
.shift-enter-active, .shift-leave-active{
    transition: all 0.3s ease-in-out;
}  
.shift-enter-from,
.shift-leave-to{
  transform: translateX(-100%);
}
</style>

