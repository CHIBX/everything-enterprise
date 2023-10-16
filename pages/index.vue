<script setup lang="ts">
import designer from '/designer.svg';
import quality from '/quality.svg';
import quick_response from '/quick_response.svg';
useHead({
  link: [
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@500&display=swap' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap' },
  ],
  title: 'Everything Enterprise',
  htmlAttrs: {
    lang: 'en'
  }
});


</script>

<template>
  <div class="background">
    <!-- <img class="background-img" src="/background.jpg" alt="Furniture Picture" /> -->
    <!-- Discover the Perfect Blend of Style and Comfort at Everything Enterprise -->
    <!-- Transform Your Home with Timeless Elegance and Unmatched Comfort -->
    <!-- Experience the Art of Crafting Beautiful Furniture for Generations -->
    <!-- Indulge in the Finest Furniture Creations for a Lifetime of Luxury -->
    <div>
      <h2>Welcome to Everything Enterprise</h2>
      <h1>Discover the Perfect Harmony of Style, Functionality, and Durability</h1>
      <p>Everything Enterprise is your one-stop shop for all things carpentry and interior design. We offer a wide range
        of products, from handcrafted furniture to custom-made cabinetry. Whether you're looking to update your kitchen,
        remodel your bathroom, or simply add a touch of style to your home, we have everything you need.</p>
    </div>
  </div>
  <div class="qualities">
    <div class="sub-qualities">
      <img :src="designer" alt="" />
      <p><strong>Creative Designers</strong></p>
    </div>
    <div class="sub-qualities">
      <img :src="quality" alt="" />
      <p><strong>Quality Products</strong></p>
    </div>
    <div class="sub-qualities">
      <img :src="quick_response" alt="" />
      <p><strong>Quick Response</strong></p>
    </div>
  </div>
  <h2 class="service-head"><span class="service-head-text">What We Specialize In</span></h2>
  <div class="services">
    <div class="service">
      <img src="/armchair-pillow.jpg" alt="Chair with Beautiful Luxury Pillow"
        title="Chair with Beautiful Luxury Pillow" />
      <div class="service-body">
        <strong>We do chairs</strong>
        <p>We craft beautiful and functional chairs for your home or office, using only the finest materials and
          construction methods. Our chairs are designed to be both comfortable and stylish, and they will last for many
          years to come. </p>
      </div>
    </div>
    <div class="service">
      <img src="/empty-wooden-shelves.jpg" alt="Empty Wooden Shelves" title="Empty Wooden Shelves" />
      <div class="service-body">
        <strong>We do shelves</strong>
        <p>Our shelves are handcrafted from the finest wood, using traditional carpentry techniques. Each shelf is a
          unique work of art that will add beauty and functionality to your home.</p>
      </div>
    </div>
    <div class="service">
      <img src="/classic-bedroom-hotel-room-with-doubles-bed.jpg" alt="Classic Room with Doubles Bed"
        title="Classic Room with Doubles Bed" />
      <div class="service-body">
        <strong>We do beds</strong>
        <p>Our beds are made from the highest quality materials and craftsmanship, and we are committed to providing our
          customers with the best possible experience.
          <!-- We offer a wide range of customization options, so you can create a
          bed that is truly unique to your style and needs. -->
        </p>
      </div>
    </div>
    <div class="service">
      <img src="/cupboard.jpg" alt="Wooden Cupboard" title="Wooden Cupboard" />
      <div class="service-body">
        <strong>We do cupboards</strong>
        <p>We design and build custom cupboards to fit your needs, whether you're looking for a new kitchen, bathroom, or
          bedroom storage solution. We offer a wide variety of cupboard styles and finishes to choose from, so you can
          find the perfect look for your home. </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
div.background {
  position: relative;
  height: 100vh;
  width: 100%;
  font-weight: 1000;
  color: rgb(255, 255, 255);
  font-family: 'Roboto';
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  text-align: center;
  background-image: URL('/background.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0px 50%;
  box-shadow: inset 0 0 400px 300px rgba(0, 0, 0, 0.1);
}

div.background>div {
  min-width: 300px;
  width: 90%;
  margin-top: 100px;
}

div.background p {
  line-height: 28px;
}

div.background h1 {
  font-size: 32px;
  margin: 3px 0 5px;
}

.background-img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -2;
}

.services {
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: repeat(auto-fit, minmax(300px, .5fr));
  place-content: center;
  grid-gap: 20px;
  margin: 10px 20px 0;
}

.service-head {
  text-align: center;
  margin: 20px 0;
}

/* .service-head-tex {
  
} */

.line-under::before {
  content: '';
  background-color: black;
  height: 5px;
  width: calc(100% * var(--length));
}

.service {
  display: flex;
  flex-direction: column;
  transition: 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955);
  border-radius: 3px;
}

.service:hover {
  transform: scaleY(1.02) translateY(-10px);
  box-shadow: 0 5px 10px 2px rgba(0, 0, 0, 0.5);
}

.service-body {
  padding: 20px 10px 10px;
  border-top: 0.2px solid rgb(207, 207, 207);
}

.service-body p {
  font-size: 14px;
}

.service img {
  min-width: 220px;
  width: 100%;
  height: 220px;
  object-fit: cover;
}

.qualities {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px 0 30px;
  background-color: rgba(99, 99, 99, 0.05);
}

.qualities .sub-qualities {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.qualities img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

@media (max-width: 676px) {
  .services {
    grid-template-columns: repeat(1, minmax(280px, 80%));
  }
}
</style>