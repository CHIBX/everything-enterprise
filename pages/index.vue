<script setup lang="ts">
useHead({
    link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@500&display=swap' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap' },
    ],
    title: 'Everything Enterprise',
    htmlAttrs: {
        lang: 'en'
    }
})
</script>

<template>
    <div class="background">
      <img class="background-img" src="/background-small.jpg" alt="Furniture Picture" />
       <!-- Discover the Perfect Blend of Style and Comfort at Everything Enterprise -->
       <!-- Transform Your Home with Timeless Elegance and Unmatched Comfort -->
       <!-- Experience the Art of Crafting Beautiful Furniture for Generations -->
       <!-- Indulge in the Finest Furniture Creations for a Lifetime of Luxury -->
      <h2>Discover the Perfect Harmony of Style, Functionality, and Durability</h2>
    </div>
    <h3 class="service-head">Services We Offer</h3>
    <div class="services">
      <div class="service">
        <img src="/background2-small.jpg" alt="Toilet Furniture" title="Toilet Furniture" />
        <div class="service-body"></div>
      </div>
      <div class="service">
        <img src="/background2-small.jpg" alt="Toilet Furniture" title="Toilet Furniture" />
        <div class="service-body"></div>
      </div>
      <div class="service">
        <img src="/background2-small.jpg" alt="Toilet Furniture" title="Toilet Furniture" />
        <div class="service-body"></div>
      </div>
      <div class="service">
        <img src="/background2-small.jpg" alt="Toilet Furniture" title="Toilet Furniture" />
        <div class="service-body"></div>
      </div>
    </div>
</template>

<style scoped>
  div.background{
      height: 87vh;
      width: 100%;
      font-size: 40px;
      font-weight: 1000;
      color: white;
      display: flex;
      font-family: 'Roboto';
      justify-content: center;
      align-items: center;
      padding: 0 20px;
      text-align: center;
      position: relative;
  }
  .background-img{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -2;
  }
  .services{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 15px;
    grid-auto-flow: row;
    margin: 10px 7px 0;
  }
  .service{
    display: flex;
    flex-direction: column;
  }
  .service img{
    width: 100%;
  }
</style>