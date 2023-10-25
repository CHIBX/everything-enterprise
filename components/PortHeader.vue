<script setup lang="ts">
let menuBar = __publicAssetsURL('/menu_bar.svg');
</script>

<template>
    <header>
        <div class="flex">
            <span class="logo-holder"><img src="/Logo.jpg" alt="My Logo" class="my-logo" draggable="false" /></span>
            <div class="link-holder-parent">
                <div class="link-holder">
                    <span v-for="([name, link]) in [['Home', '/'], ['Services', '/services'], ['Contact Us', '/contact'], ['Gallery', '/gallery']]">
                        <NuxtLink :to="link" exact-active-class="header-link-active">{{ name }}</NuxtLink>
                    </span>
                </div>
            </div>
            <span class="mobile-menu" role="button">
                <img :src="menuBar" alt="Menu Toggle Bar" />
            </span>
        </div>
    </header>
</template>

<style scoped>
header {
    min-height: 80px;
    box-shadow: 0 8px 10px rgba(0, 0, 0, 0.3);
    position: fixed;
    top: 0;
    width: 100%;
    background-color: white;
    z-index: 5;
}

.my-logo {
    margin-top: 5px;
}

.link-holder span {
    flex: 0 0 auto;
}
.link-holder-parent {
    flex-basis: 100%;
}
.link-holder {
    padding: 0 10px;
    display: flex;
    justify-content: flex-end;
    gap: 25px;
}

.link-holder a {
    text-decoration: none;
    border-radius: 5px;
    padding: 10px;
    color: black;
    transition: 0.3s ease;
}

.link-holder a:hover {
    color: #b66700;
}

.link-holder a.header-link-active{
    color:  #b66700;
}

.logo-holder {
    margin-left: 20px;
}

.my-logo {
    width: 70px;
    height: 70px;
    border-radius: 50%;
}

.flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

@media (max-width: 600px) {
    .link-holder {
        display: none;
    }
}
</style>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
}
</style>