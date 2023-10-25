<script setup lang="ts">
const href = ref<string>();
useHead({
  link: [
    { rel: 'stylesheet', href },
  ],
  htmlAttrs: {
    lang: 'en'
  }
});
onMounted(() => {
  useLazy(href, 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@500&display=swap', 2000);
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
  <span id="to-top" @click="toTop">
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="50"
      height="50" viewBox="0 0 256 256" xml:space="preserve">
      <defs>
      </defs>
      <g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;"
        transform="translate(98.81400778210117 98.81400778210114) scale(0.64 0.64)">
        <path
          d="M 58.799 31.67 L 16.466 74.002 c -1.059 1.059 -2.776 1.059 -3.835 0 L 0.794 62.166 c -1.059 -1.059 -1.059 -2.776 0 -3.835 l 42.333 -42.333 c 1.059 -1.059 2.776 -1.059 3.835 0 l 11.837 11.837 C 59.858 28.893 59.858 30.61 58.799 31.67 z"
          style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;"
          transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
        <path
          d="M 31.201 31.67 l 42.333 42.333 c 1.059 1.059 2.776 1.059 3.835 0 l 11.837 -11.837 c 1.059 -1.059 1.059 -2.776 0 -3.835 L 46.873 15.998 c -1.059 -1.059 -2.776 -1.059 -3.835 0 L 31.201 27.834 C 30.142 28.893 30.142 30.61 31.201 31.67 z"
          style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;"
          transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
      </g>
    </svg>
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
  display: flex; align-items: center; justify-content: center;
  position: fixed;
  height: 45px;
  width: 45px;
  bottom: 20px;
  right: 10px;
  z-index: 100;
  /* padding: 10px; */
  cursor: pointer;
  border-radius: 50%;
  background-color: #d67900;
}</style>