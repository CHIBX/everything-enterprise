<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
function openNav() {
    const nav = document.querySelector('header .link-holder-parent'),
        modalFNav = document.querySelector('header .modal-nav');
    if (!nav || !modalFNav) return;
    modalFNav.classList.add('dark-op');
    nav.classList.add('nav-open');
}
function closeNav() {
    const nav = document.querySelector('header .link-holder-parent'),
        modalFNav = document.querySelector('header .modal-nav');
    if (!nav || !modalFNav) return;
    nav.classList.remove('nav-open');
    let EvSignal = new AbortController();
    nav.addEventListener('transitionend', () => { modalFNav.classList.remove('dark-op'); EvSignal.abort(); EvSignal = undefined as any }, { signal: EvSignal.signal });
    useNuxtApp().$router.afterEach(()=>{})
}
</script>

<template>
    <header>
        <div class="flex">
            <span class="logo-holder"><img src="/images/Logo.jpg" alt="My Logo" class="my-logo" draggable="false" /></span>
            <div class="modal-nav">
                <div class="link-holder-parent">
                    <span class="material-symbols-outlined close" @click="closeNav"><ClientOnly>
                    <FontAwesomeIcon :icon="['fas', 'xmark']" size="2x" />
            </ClientOnly></span>
                    <div class="link-holder">
                        <span
                            v-for="([name, link]) in [['Home', '/'], ['Services', '/services'], ['Contact Us', '/contact'], ['Gallery', '/gallery']]">
                            <NuxtLink :to="link" exact-active-class="header-link-active">{{ name }}</NuxtLink>
                        </span>
                    </div>
                </div>
            </div>
            <button @click="openNav" class="mobile-menu material-symbols-outlined">
            <ClientOnly>
                    <FontAwesomeIcon :icon="['fas', 'bars']" size="1x" />
            </ClientOnly>
            </button>
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
    transition: 0.3s ease-in;
}

.link-holder {
    padding: 0 10px;
    display: flex;
    justify-content: flex-end;
    gap: 25px;
}

.close {
    display: none;
    float: right;
    margin: 15px 15px 0 0;
    transition: none;
    cursor: pointer;
}

.close:hover {
    color: #ff1c1c;
}

.link-holder a {
    text-decoration: none;
    border-radius: 5px;
    padding: 10px;
    color: black;
    transition: 0.3s ease;
}

.link-holder a:hover {
    color: #8B4513;
}

.link-holder a.header-link-active {
    color: #8B4513;
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

.modal-nav {
    width: 100%;
    transition: 0.3s ease;
}

.mobile-menu {
    display: none;
    padding: 10px 15px;
    font-size: 20px;
    border: 0.5px ridge black;
    border-radius: 3px;
    margin-right: 20px;
    cursor: pointer;
    user-select: none;
    background-color: transparent;
}

.link-holder-parent.nav-open {
    right: 0;
}

@media (max-width: 600px) {
    .mobile-menu {
        display: block;
    }

    .link-holder {
        flex-direction: column;
        justify-content: center;
        gap: 20px;
        margin-top: 60px;
    }

    .close {
        display: block
    }

    .dark-op {
        background-color: rgba(0, 0, 0, 0.7);
        position: fixed;
        min-height: 100%;
        top: 0;
        left: 0;
        z-index: 1000;
    }

    .link-holder-parent {
        position: absolute;
        top: 0;
        min-width: 300px;
        background-color: white;
        height: 100%;
        right: -350px;
    }
}</style>