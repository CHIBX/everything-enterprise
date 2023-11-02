<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
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
</script>


<template>
  <PortHeader />
  <main>
    <slot />
  </main>
  <PortFooter />
  <!-- <Cookies /> -->
  <span id="to-top" class="" @click="toTop">
    <ClientOnly>
      <FontAwesomeIcon :icon="['fas', 'arrow-up']" />
    </ClientOnly>
  </span>
</template>

<style scoped>
main {
  min-height: calc(100vh - 90px);
  margin-bottom: 20px;
}

#to-top svg {
  height: 25px;
  width: 25px;
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
  padding: 10px;
  color: white;
  cursor: pointer;
  border-radius: 50%;
  background-color: #7c3400;
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