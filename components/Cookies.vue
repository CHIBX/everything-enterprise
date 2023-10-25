<script setup lang="ts">
function closeCookie(){
   let cookieConsent = document.querySelector('.cookie-query')! as HTMLElement;
   let date = new Date(Date.now() + 1000 * 60 * 60 * 24 * 365);
   let cookie = useCookie('cookieConsent', {default: ()=>'Thank you for visiting our website', expires: date, maxAge: date.valueOf()});
   console.log(date, date.valueOf());
   cookieConsent.classList.add('disappear');
   cookieConsent.addEventListener('transitionend', function(){this.remove()})
}
</script>

<template>
    <div class="cookie-query">
    <span>This website uses cookies to ensure you get the best experience on our website. By continuing to use this site, you agree to the use of cookies.</span>
    <div style="display: flex;gap: 20px;justify-content: center;margin-top: 5px;">
        <button @click="closeCookie">Yes, I Agree</button>
        <button @click="closeCookie">No, I Don&apos;t</button>
    </div>
    </div>
</template>

<style scoped>
.cookie-query{
    min-height: 30px;
    position: fixed;
    z-index: 999;
    bottom: 0;
    width: 100%;
    background-color: white;
    padding: 10px;
    text-align: center;
    box-shadow: 0 -2px 10px 5px #5c5c5c;
    transition: 0.5s ease;
}
.cookie-query button{
    padding: 10px;
    background-color: #b86800;
    color: white;
    border-color: #b66700;
    font-weight: 700;
    cursor: pointer;
}
.disappear{
    opacity: 0;
}
</style>