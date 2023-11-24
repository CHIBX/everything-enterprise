<script setup lang="ts">
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
useNuxtApp().$library.add(faBars, faXmark);
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
}
</script>

<template>
    <header>
        <div class="flex">
            <span class="logo-holder"><img src="/images/Logo.webp" alt="My Logo" class="my-logo" draggable="false" height="70" width="70" /></span>
            <div class="modal-nav">
                <div class="link-holder-parent">
                    <span class="material-symbols-outlined close" @click="closeNav">
                    <MyFont :icon="['fas', 'xmark']" size="2x" />
                    </span>
                    <div class="link-holder">
                        <span
                            v-for="([name, link]) in [['Home', '/'], ['About Us', '/about'], ['Services', '/services'], ['Contact Us', '/contact'], ['Gallery', '/gallery']]">
                            <NuxtLink :to="link" exact-active-class="header-link-active">{{ name }}</NuxtLink>
                        </span>
                    </div>
                </div>
            </div>
            <button @click="openNav" class="mobile-menu material-symbols-outlined">
                    <MyFont :icon="['fas', 'bars']" size="1x" />
            </button>
        </div>
    </header>
</template>

<style scoped>
header {
    min-height: 80px;
    box-shadow: 0 8px 10px rgba(0, 0, 0, 0.3);
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    top: 0;
    width: 100%;
    max-width: 1802px;
    background-color: white;
    z-index: 5;
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
    margin-top: 5px;
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

@media (max-width: 675px) {
    .mobile-menu {
        display: block;
    }

    .link-holder {
        flex-direction: column;
        justify-content: flex-start;
        height: 100%;
        gap: 20px;
        margin-top: 60px;
    }

    .close {
        display: block
    }

    .dark-op {
        background-color: rgba(0, 0, 0, 0.7);
        position: fixed;
        height: 100dvh;
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