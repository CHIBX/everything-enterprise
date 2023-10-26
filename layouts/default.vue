<script setup lang="ts">
const href = ref<string>(), link=ref<string>();
useHead({
  link: [
    { rel: 'stylesheet', href },
    { rel:'stylesheet', href: link}
  ],
  htmlAttrs: {
    lang: 'en'
  }
});
onMounted(() => {
  useLazy(href, 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@500&display=swap');
  useLazy(link, 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,500..700,0..1,-50..200');
})
function toTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
</script>


<template>
  <PortHeader />
  <main>
    <slot />
  </main>
  <PortFooter />
  <Cookies />
  <span id="to-top" class="material-symbols-outlined" @click="toTop">
    arrow_upward
  </span>
</template>

<style scoped>
main {
  min-height: calc(100vh - 90px);
  margin-bottom: 20px;
}

#to-top svg {
  height: 70px;
  width: 70px;
}

#to-top {
  position: fixed;
  bottom: 20px;
  right: 10px;
  z-index: 100;
  padding: 10px;
  color: white;
  cursor: pointer;
  border-radius: 50%;
  background-color: rgb(201, 114, 0);
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
</style>