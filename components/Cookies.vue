<script setup lang="ts">
const showCookie = inject<Ref<boolean>>('showCookie');
let cookie = inject<ReturnType<typeof useCookie>>('cookieConsent');
function closeCookie() { showCookie && (showCookie.value = false) }
function acceptCookie() {
    cookie? cookie.value = 'Thank you for visiting this website.': null;
}

</script>

<template>
    <div class="cookie-modal">
        <div class="cookie-query">
            <span>
                This website uses cookies to ensure you get the best experience on our website. By continuing to use this
                site, you agree to the use of cookies.
            </span>
            <div style="display: flex;gap: 20px;justify-content: center;margin-top: 5px;">
                <button @click="() => { closeCookie(); acceptCookie()}">Agree To All</button>
                <button @click="closeCookie">No To All</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.cookie-modal {
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
    bottom: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
}

.cookie-query {
    min-height: 30px;
    font-size: 14px;
    background-color: white;
    width: 320px;
    padding: 20px 10px;
    text-align: center;
    box-shadow: 0 -2px 10px 5px #5c5c5c;
    transition: 0.3s ease;
    transition-delay: 0.3s;
}

.cookie-query span {
    display: block;
    margin-bottom: 30px;
}

.cookie-query button {
    padding: 10px;
    background-color: #5f2b03;
    color: #F8F8F8;
    font-weight: 600;
    cursor: pointer;
}

.disappear {
    opacity: 0;
}</style>