<script setup lang="ts">
let isMenuOpen = false;
const { currentRoute } = useRouter();
function openNav() {
    const nav = document.querySelector('header .link-holder-parent'),
        modalFNav = document.querySelector('header .modal-nav');
    if (!nav || !modalFNav) return;
    modalFNav.classList.add('dark-op');
    nav.animate([{ right: '-300px' }, { right: '0px' }], {
        duration: 300,
        fill: 'both',
        easing: 'ease-in-out'
    }).onfinish = () => {
        isMenuOpen = true;
    }
}
function closeNav() {
    const nav = document.querySelector('header .link-holder-parent'),
        modalFNav = document.querySelector('header .modal-nav');
    if (!nav || !modalFNav) return;
    let animation = nav.animate([{ right: '0px' }, { right: '-300px' }], {
        duration: 300,
        fill: 'both',
        easing: 'ease-in-out'
    });
    animation.onfinish = () => {
        modalFNav.classList.remove('dark-op');
        isMenuOpen = false;
    }
}

const menu = ref(null);
onClickOutside(menu, () => {
    if (innerWidth < 675 && isMenuOpen) {
        closeNav();
    }
});
onBeforeUnmount(watch(currentRoute, () => {
    if (isMenuOpen) {
        requestIdleCallback(closeNav);
    }
}))
</script>

<template>
    <header>
        <div class="flex">
            <span class="ml-5">
                <PrimeImage alt="Image" :pt="{
                    toolbar: {
                        class: 'text-white'
                    }
                }" preview>
                    <template #indicatoricon><span></span></template>
                    <template #image>
                        <img src="/images/Logo.webp" class="mt-2 max-w-16 max-h-16 rounded-full" alt="Logo"
                            draggable="false" height="64" width="64" />
                    </template>
                    <template #preview="{ style }">
                        <img src="/images/Logo.webp" alt="preview" width="300" height="300" />
                    </template>
                </PrimeImage>
            </span>
            <nav class="modal-nav">
                <div class="link-holder-parent bg-white" ref="menu">
                    <span class="close" @click="closeNav">
                        <MyIcon name="material-symbols:close-small" size="45" />
                    </span>
                    <div class="link-holder">
                        <span
                            v-for="([name, link]) in [['Home', '/'], ['About Us', '/about'], ['Services', '/services'], ['Contact Us', '/contact'], ['Gallery', '/gallery']]">
                            <NuxtLink :to="link" exact-active-class="header-link-active">{{ name }}</NuxtLink>
                        </span>
                    </div>
                </div>
            </nav>
            <button @click="openNav" class="mobile-menu">
                <MyIcon name="material-symbols:menu-rounded" />
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
    transition: 0.3s ease;
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

.flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.modal-nav {
    width: 100%;
    transition: 0.3s ease;
}

.modal-nav.dark-op {
    background-color: rgba(0, 0, 0, 0.8);
    position: fixed;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 1000;
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

    .link-holder-parent {
        position: absolute;
        top: 0;
        width: 300px;
        height: 100%;
        right: -300px;
    }
}
</style>