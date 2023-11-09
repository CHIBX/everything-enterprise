<script setup lang="ts">

</script>

<template>
    <footer>
        <div class="footer-links">
             <div class="social-links">
                  <h3>Reach Out To Us</h3>
                  <div><a href="https://www.facebook.com/desmond.asemota.54" target="_blank" rel="noopener noreferrer"><MyFont :icon="['fab', 'facebook']"/> Follow Us</a></div>
                  <!-- <div><a href="" target="_blank" rel="noopener noreferrer"><MyFont :icon="['fab', 'instagram']" class="shake" /></a></div> -->
                  <!-- <div><a href="" target="_blank" rel="noopener noreferrer"><MyFont :icon="['fab', 'linkedin']" class="shake" /></a></div> -->
                  <div><a href="https://api.whatsapp.com/send/?phone=%2B2348023669960&text=Hello.+I+am+interested+in+your+product.&type=phone_number" target="_blank" rel="noopener noreferrer"><MyFont :icon="['fab', 'whatsapp']" class="shake" /> Talk to Us</a></div>
                  <div><a href="" target="_blank" rel="noopener noreferrer"><MyFont :icon="['far', 'envelope']" class="shake" /> Mail Us</a></div>
                  <div><a href="tel:+2348023669960" target="_blank" rel="noopener noreferrer"><MyFont :icon="['fas', 'phone']" class="shake" /> Give Us A Call</a></div>
             </div>
             <div></div>
        </div>
        <div class="base-line">
           <span>Copyright 2023 &copy;  <NuxtLink href="/">Everything Enterprise</NuxtLink>.</span> <span>All Rights Reserved</span>
        </div>
        <div class="created-by"><span>Created By <a href="https://github.com/CHIBX" target="_blank">Chinaemerem Chiebidolu</a></span></div>
    </footer>
</template>

<style scoped>
    footer a{
        text-decoration: none;
        color: white;
    }
    footer {
        margin-top: 50px;
        color: white;
        background-color: rgb(75, 33, 1);
    }
    .footer-links a:hover{
        text-decoration: underline;
    }
    .footer-links{
        display: flex;
        /* justify-content: space-around; */
        align-items: center;
        min-height: 300px;
        padding: 20px 20px;
        font-size: 14px;
    }
    .created-by{
        padding: 5px 0;
        text-align: center;
        font-size: 12px;
    }
    .created-by a{
        text-decoration: underline;
    }
    .social-links{
        display: flex;
        flex-direction: column;
        row-gap: 15px;
    }
    .social-links > div a{
        display: flex;
        align-items: center;
        gap: 10px;
    }
    .social-links h3 {margin-bottom: 20px;}
    .social-links svg{
        font-size: 24px;
    }
    .base-line{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 5px;
        align-items: center;
        min-height: 20px;
        padding: 10px 20px 5px;
        font-size: 12px;
        border-top: 1px solid white;
    }
    .base-line a:hover{
        text-decoration: underline;
    }
    .shake:hover{
        animation: shake 0.3s cubic-bezier(.36,.07,.19,.97);
    }
    @keyframes shake {
        0%, 100%{
            transform: rotateZ(0deg);
        }
        20%, 80% {
            transform: rotateZ(20deg);
        }
        40%, 60% {
            transform: rotateZ(-20deg);
        }
}
</style>