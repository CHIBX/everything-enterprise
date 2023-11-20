<script setup lang="ts">
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
useNuxtApp().$library.add(faArrowUp);
useHead({
  link: [
    { rel: 'stylesheet', href:  useLazy('https://fonts.googleapis.com/css2?family=Open+Sans:wght@500&display=swap') },
  ],
  htmlAttrs: {
    lang: 'en',
  }
});
onMounted(() => {
 ;
})
function toTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
onMounted(() => {
    globalThis.addEventListener('scroll', ()=>{
      let toTop = document.querySelector('#to-top') as HTMLElement;
      if(!toTop) return;
      (scrollY > 400) ? toTop.classList.add('fade-on') : toTop.classList.remove('fade-on');
    })
})
const showCookie=ref(false);
if(import.meta.client){
  setTimeout(() => {
    showCookie.value = true
  }, 3000);
}
const checkCookie = !useCookie('cookieConsent').value;
if(checkCookie){
  let date = new Date(Date.now() + 1000 * 60 * 60 * 24 * 365);
  let cookie = useCookie('cookieConsent', { expires: date, maxAge: date.valueOf()});
  provide('showCookie', showCookie);
  provide('cookieConsent', cookie);
}
const popUpContent=ref(''),
isPopUpVisible=ref(false);
provide('isPUV', isPopUpVisible);
provide('pUC', popUpContent);
let [parent] = useAutoAnimate();
</script>


<template>
  <PortHeader />
  <Transition name="popup">
     <div v-if="isPopUpVisible" class="popup">{{ popUpContent }}</div>
  </Transition>
  <main ref="parent">
      <slot />
  </main>
  <PortFooter />
<Transition type="animation" :duration="{ enter: 500, leave: 800 }" name="fade" v-if="checkCookie">
  <Cookies v-if="showCookie" />
</Transition>
  <span id="to-top" class="" @click="toTop">
      <MyFont :icon="['fas', 'arrow-up']" />
  </span>
</template>

<style scoped>

.popup{
  position: fixed;
  z-index: 2;
  top: 80px;
  right: 0;
  font-size: 0.8rem;
  padding: 15px 10px;
  background-color: #923d00;
  color: white;
}
.popup-enter-active{
  transition: 0.3s ease;
}
.popup-leave-active{
  transition: 1s ease-out;
}
.popup-enter-to, .popup-leave-from{
  right: 0;
}
.popup-leave-to, .popup-enter-from{
  right: -100%;
}
.fade-enter-active{
  transition: 0.3s ease-in;
}
.fade-leave-active{
  transition: 1s ease;
  transition-delay: 0.2s;
}
.fade-enter-from :deep(.cookie-query){
   opacity: 0;
}
.fade-enter-from, .fade-leave-to{
  opacity: 0;
}
.fade-enter-from :deep(.cookie-query){
  opacity: 0;
  transform: translateY(200px);
}
.fade-leave-from :deep(.cookie-query){
  opacity: 1;
  transform: translateY(0px);
}
.fade-leave-to :deep(.cookie-query){
  opacity: 0;
  transform: translateY(200px);
}
.fade-enter-to :deep(.cookie-query){
  opacity: 1;
  transform: translateY(0px);
}
main {
  min-height: calc(100vh - 80px);
  margin-bottom: 20px;
  width: 100%;
  margin-inline: auto;
}
#to-top svg {
  height: 25px;
  width: 25px;
}
.page-container{
  width: 100%;
  max-width: 1500px;
  box-shadow: 2px 0 10px #5f5f5f, -2px 0 10px #5f5f5f;
}
#to-top {
  opacity: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 20px;
  right: 10px;
  z-index: 100;
  padding: 12px;
  color: white;
  cursor: pointer;
  border-radius: 50%;
  background-color: #923d00;
  transition: 0.3s ease;
}

</style>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
    transition: 0.3s ease;
}
.fade-on {
  opacity: 1 !important;
}
</style>