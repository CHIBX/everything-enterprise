<script setup lang="ts">
import {numberCounter} from '@/composables/useLazy';
import { faMagnifyingGlass, faHammer, faStar, faUser, faAward, faBoltLightning, faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
useHead({
  link: [
    { rel: 'stylesheet', href: useLazy('https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap') },
    { rel: 'stylesheet', href: useLazy('https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap') },
    { rel: 'stylesheet', href: useLazy('https://fonts.googleapis.com/css2?family=Delius&display=swap') },
    { rel: 'stylesheet', href: useLazy('https://fonts.googleapis.com/css2?family=Agbalumo:wght@400&display=swap') },
  ],
  title: 'Everything Enterprise',
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
      name: 'keywords', content: 'Everything Enterprise',
    }
  ],
});
useSeoMeta({
  "twitterImageAlt": "Picture of a nice furniture",
  "twitterCreator": 'Chiebidolu Chinaemerem',
  "twitterSite": "@chiebidolu06",
  "twitterCard": 'summary_large_image',
  "twitterDescription": 'Everything Enterprise is a leading provider of quality carpentry and interior design services. We offer a wide range of products, from handcrafted furniture to custom-made cabinetry.',
  "twitterImage": useRequestURL().origin + __publicAssetsURL('/images/Logo.webp'),
  "twitterTitle": 'Everything Enterprise',
  "author": 'Asemota Desmond',
  "articleTag": ['Everything Enterprise', 'Furniture', 'Carpentry', 'Interior Design', 'Quality Furniture', 'Quality Carpentry', 'Quality Interior Design'],
  "creator": 'Chiebidolu Chinaemerem',
  "description": 'Everything Enterprise is a leading provider of quality carpentry and interior design services. We offer a wide range of products, from handcrafted furniture to custom-made cabinetry.',
  "ogDescription": 'Everything Enterprise is a leading provider of quality carpentry and interior design services. We offer a wide range of products, from handcrafted furniture to custom-made cabinetry.',
  "ogImage": useRequestURL().origin + __publicAssetsURL('/images/Logo.webp'),
  "ogType": "website",
  "ogTitle": 'Everything Enterprise',
  "ogImageAlt": "Picture of a nice furniture",
  "ogUrl": useRequestURL().origin,
  "ogSiteName": 'Everything Enterprise'
})
useFavicon(__publicAssetsURL('/images/Logo.webp'));
const el1 = ref(0), el2 = ref(0), el3 = ref(0)
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
  });
  const { stop: stop1 } = useObserver([document.querySelector('.achievement-holder .background')], (entries) => {
    entries.forEach(({ isIntersecting}) => {
           if (isIntersecting) {
             let a = document.querySelectorAll('.achievement-holder .achievement');
              a.forEach((el) => (el)? el.classList.remove('no-achieve'): null)
              setTimeout(() => {
                  numberCounter(el1, {start: 0, end: 500, duration: 1200});
                  numberCounter(el2, {start: 0, end: 15, duration: 2000});
                  numberCounter(el3, {start: 0, end: 100, duration: 2000});
              }, 300);
              (stop1) ? stop1(): null;
           }
      });
    })
  });
  useNuxtApp().$library.add(faMagnifyingGlass, faHammer, faStar, faEnvelope, faUser, faAward, faBoltLightning, faAngleRight, faAngleLeft);
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
              <MyFont :icon="['fas', 'magnifying-glass']" size="3x" />
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
              <MyFont :icon="['fas', 'hammer']" size="3x" />
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
              <MyFont :icon="['fas', 'star']" size="3x" />
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
  <div class="yrExp-container"> 
      <h1>We have over 15 years of experience</h1>
      <div class="exp-subtext">We know what it takes to create a space you'll love.</div>
      <div class="exp-contact">
        <span>If you want to know more...</span>
        <NuxtLink to="/contact">Contact Us</NuxtLink>
      </div>
  </div>
  <div class="achievement-holder">
        <h2>Our Achievements</h2>
        <div class="background">
          <div class="achieves">
            <div class="achievement no-achieve" style="--dif: 3;">
              <div class="achieve-value"><span>{{ el1 }}</span>+</div>
                  <div class="achieve-title">Finished Projects</div>
             </div>
             <div class="achievement no-achieve" style="--dif: 4.5;">
                 <div class="achieve-value"><span>{{ el2 }}</span>+</div>
                  <div class="achieve-title">Years of Experience</div>
             </div>
             <div class="achievement no-achieve" style="--dif: 5;">
               <div class="achieve-value" ><span>{{ el3 }}</span>%</div>
                  <div class="achieve-title">Happy Clients</div>
             </div>
        </div>
      </div>
      </div>
      <div class="testimonials-holder">
        <h1>See What Our Clients Say</h1>
    <HomeTestimonials />
  </div>
</template>

<style scoped>
.achievement-holder{
   margin: 20px 0;
}
.achievement-holder h2{
    font-family: 'Delius', serif;
    font-weight: 700;
    text-align: center;
    margin: 50px 0 20px;
}
.achievement-holder .achievement{
    transition: 0.3s ease calc(0.1s * var(--dif)), opacity calc(0.1s * var(--dif) * 1.5) cubic-bezier(0.2, 0.14, 0.875, 1) calc(0.1s * var(--dif));
}
.no-achieve{
  opacity: 0;
  transform: translateY(100px);
}
.achieves{
  height: 400px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  gap: 0px 50px;
  padding: 0 15px;
  backdrop-filter: saturate(0.8) brightness(0.9);
}
.achievement-holder .achieve-value{
   color: white;
   font-size: 3.5rem;
   font-weight: 700;
   text-align: center;
}
.achievement-holder .achieve-title{
   color: white;
   font-size: 1.5rem;
   font-weight: 700;
   font-stretch: extra-expanded;
}
.achievement-holder .background {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  background-image: url('/images/close-up-carpenter-using-circular-saw-tool-cut-wooden-planks-make-furniture-homes.webp');
}
.testimonials-holder {
  margin-top: 50px;
}
.testimonials-holder h1{
  font-family: 'Agbalumo', serif;
  font-weight: 300;
  text-align: center;
  margin: 0 10px;
}
.features-wrapper {
  position: relative;
  min-height: 300px;
  margin-bottom: 20px;
}
.yrExp-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  color: white;
  margin-top: 20px;
  width: 100%;
  min-height: 300px;
  background-color: #8B4513;
  box-shadow: inset 2px 0 80px 1px #5f2b03, inset -2px 0 20px 1px #5f2b03;
}

.yrExp-container .exp-subtext {
  font-family: 'Delius', cursive;
  font-size: 1.2rem;
  margin: 0 10px;
  text-align: center;
}

.yrExp-container h1 {
  margin: 0 10px;
  text-align: center;
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 2.25rem;
}
.exp-contact {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}
.exp-contact span{
   font-family: Roboto, sans-serif;
   font-weight: 500;
   font-size: larger;
}
.exp-contact a{
  text-decoration: none;
  padding: 15px 20px;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: white;
  background-color: black;
  transition: 0.3s ease;
}
.exp-contact a:hover{
  box-shadow: 10px 5px 10px rgb(12, 12, 12);
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
  font-size: 1rem;
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
}

.col-sm-4:hover svg {
  color: #8B4513;
}

@media (max-width: 500px) {
  .achievement-holder .achieve-value{
   font-size: 2rem;
}
.achievement-holder .achieve-title{
   font-size: 1.2em;
}
.achievement-holder .background{
  background-position: 70% 0%;
}
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
}

@media (max-width: 400px) {
  .yrExp-container h1 {
    font-size: 26px;
  }
  .testimonials-holder h1{
    font-size: 24px;
  }
}
</style>