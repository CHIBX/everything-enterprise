<script setup lang="ts">
useFavicon(__publicAssetsURL('/Logo.jpg'));
</script>

<template>
    <header>
       <div class="flex">
          <span class="logo-holder"><img src="/Logo.jpg" alt="My Logo" class="my-logo" /></span>
          <div class="link-holder">
            <span><NuxtLink to="/" exact-active-class="header-link-active">Home</NuxtLink></span>
            <span><NuxtLink to="/services" exact-active-class="header-link-active">Services</NuxtLink></span>
            <span class="wide"><NuxtLink to="/contact" exact-active-class="header-link-active">Contact Me</NuxtLink></span>
            <span><NuxtLink to="/gallery" exact-active-class="header-link-active">Gallery</NuxtLink></span>
        </div>
       </div> 
    </header>
</template>

<style scoped>
header{
    min-height: 80px;
    box-shadow:  0 8px 10px rgba(0, 0, 0, 0.3);
    position: fixed;
    top: 0;
    width: 100%;
    background-color: white;
    z-index: 999;
}
.my-logo{
    margin-top: 5px; 
}
.wide{
    min-width: 130px;
}
.link-holder{
    flex-basis: 50%;
    padding: 0 10px;
    display: flex;
    justify-content: flex-end;
    gap: 10px;
}

.link-holder a{
  display: block;
  color: #ffffff;
  text-decoration: none;
  padding: 8px 15px;
  border-radius: 5px;
  padding: 10px 20px;
  color: black;
  transition: 0.3s;
  transition-timing-function: cubic-bezier(0.18, -0.55, 0.27, 1.55);
}
.link-holder a:hover{
  background-color: #ce4e0e;
  color: #fff;
  box-shadow: 0 1px 10px rgba(0, 0, 0);
}
a.header-link-active {
  background-color: #ce4e0e;
  color: #fff;
  text-decoration: none;
  transform: perspective(1000px) rotateX(-10deg);
  box-shadow: 0 1px 10px rgba(0, 0, 0);
}
.logo-holder{
    margin-left: 20px;
}
.flex{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>

<style>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
}
.my-logo {
    width: 70px;
    height: 70px;
    border-radius: 50%;
}
</style>