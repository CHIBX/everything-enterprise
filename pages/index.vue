<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
const href = ref<string>(), link = ref<string>();
useHead({
  link: [
    { rel: 'stylesheet', href },
    { rel: 'stylesheet', href: link }
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
onMounted(() => {
  const { stop, remove } = useObserver(Array.from(document.querySelectorAll('.service')), (entries) => {
    entries.forEach(({ target, isIntersecting }) => {
      if (isIntersecting) {
        target.classList.remove('service-shown');
        remove(target);
      }
      if (stop && !document.querySelectorAll('.service-shown').length) {
        stop();
      }
    })
  })
  useLazy(href, 'https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');
});
</script>

<template>
  <div class="fore-face">
    <HomeFrontFace />
  </div>
  <div class="features-wrapper">
    <div class="container">
      <div class="col-sm-4">
        <div class="featured-icon-box text-center">
          <div class="featured-icon">
            <ClientOnly>
              <FontAwesomeIcon :icon="['fas', 'magnifying-glass']" size="3x" />
            </ClientOnly>
          </div>
          <div class="featured-title">
            <h3>Who we are</h3>
          </div>
          <div class="featured-desc">
            <p>Lorem ipsum dolor sit amet consect adipisi elit sed do eiusm tempor</p>
          </div>
        </div>
      </div>
      <div class="col-sm-4">
        <div class="featured-icon-box text-center">
          <div class="featured-icon">
            <ClientOnly>
              <FontAwesomeIcon :icon="['fas', 'hammer']" size="3x" />
            </ClientOnly>
          </div>
          <div class="featured-title">
            <h3>What we do</h3>
          </div>
          <div class="featured-desc">
            <p>Lorem ipsum dolor sit amet consect adipisi elit sed do eiusm tempor</p>
          </div>
        </div>
      </div>
      <div class="col-sm-4">
        <div class="featured-icon-box text-center">
          <div class="featured-icon">
            <ClientOnly>
              <FontAwesomeIcon :icon="['fas', 'star']" size="3x" />
            </ClientOnly>
          </div>
          <div class="featured-title">
            <h3>Why Choose Us?</h3>
          </div>
          <div class="featured-desc">
            <p>Lorem ipsum dolor sit amet consect adipisi elit sed do eiusm tempor</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <HomeQualities />
  <HomeSpecialties />
</template>

<style scoped>
.features-wrapper {
  position: relative;
  min-height: 300px;
  margin-bottom: 20px;
}

.features-wrapper .container {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgb(255, 245, 245);
  margin: 0 auto;
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.2);
  user-select: none;
  min-width: 750px;
}

.col-sm-4 .featured-desc {
  color: #838383;
  font-size: 15px;
  padding: 0 5px;
}

.features-wrapper .col-sm-4 {
  background-color: white;
  height: 100%;
  text-align: center;
}

.col-sm-4 .featured-icon-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  height: 100%;
}

.featured-icon {
  position: relative;
  padding: 20px;
  background-color: #8B4513;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.featured-icon::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 0;
  height: 0;
  border-radius: 50%;
  background-color: white;
  opacity: 0;
  transition: all 0.3s ease-in;
}

.featured-icon svg {
  position: relative;
  z-index: 3;
  transition: all 0.3s ease;
}

.col-sm-4:hover .featured-icon::before {
  width: 100%;
  height: 100%;
  opacity: 1;
}

.col-sm-4:hover svg {
  color: #8B4513;
}

@media (max-width: 786px) {
  .features-wrapper .container {
    position: static;
    transform: none;
    max-width: 500px;
    min-width: 300px;
    box-shadow: none;
    flex-wrap: wrap;
  }

  .features-wrapper .col-sm-4 {
    padding: 30px 15px 20px;
  }
}</style>