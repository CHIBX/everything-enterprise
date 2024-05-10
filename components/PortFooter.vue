<script setup lang="ts">
const subscriptionStatus=ref('');
async function suscribeUser(){}
</script>

<template>
    <footer>
        <nav class="footer-links">
             <div class="social-links">
                  <h3>Reach Out To Us</h3>
                  <div><a href="https://www.facebook.com/desmond.asemota.54" target="_blank"><MyIcon name="fa:facebook"/> Follow Us</a></div>
                  <!-- <div><a href="" target="_blank"><MyIcon name="fa:instagram" class="shake" /></a></div> -->
                  <!-- <div><a href="" target="_blank"><MyIcon name="fa:linkedin" class="shake" /></a></div> -->
                  <div><a href="https://api.whatsapp.com/send/?phone=%2B2348093313330&text=Hello.+I+am+interested+in+your+product.&type=phone_number" target="_blank"><MyIcon name="fa:whatsapp" class="shake" /> Talk to Us</a></div>
                  <div><a href="" target="_blank"><MyIcon name="fa:envelope" class="shake" /> Mail Us</a></div>
                  <div><a href="tel:+2348023669960" target="_blank"><MyIcon name="fa:phone" class="shake" /> Give Us A Call</a></div>
             </div>
             <div class="quick-links">
                  <h3>Quick Links</h3>
                  <div><NuxtLink href="/">Home</NuxtLink></div>
                  <div><NuxtLink href="/about">About Us</NuxtLink></div>
                  <div><NuxtLink href="/services">Services</NuxtLink></div>
                  <div><NuxtLink href="/contact">Contact Us</NuxtLink></div>
                  <div><NuxtLink href="/gallery">Gallery</NuxtLink></div>
             </div>
             <div class="newsletter-section">
                <h3>Newsletter</h3>
                <div>Subscribe to our newsletter to receive updates on our latest projects.</div>
                <form method="post">
                    <div><input type="email" id="subscription-email" required name="email" autocomplete="on" placeholder="Enter Email Address" /><button type="button" @click="suscribeUser" >Subscribe</button></div>
                    <div class="subscription-status" v-text="subscriptionStatus"></div>
                </form>
             </div>
        </nav>
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
    .subscription-status{
        margin-top: 2px;
        font-size: 12px;
    }
    .footer-links{
        display: grid;
        justify-content: space-around;
        gap: 50px 10px;
        grid-template-columns: repeat(auto-fit, minmax(250px, auto));
        min-height: 300px;
        padding: 20px 20px;
        font-size: 14px;
    }
    .footer-links > div{
        min-height: 200px;
        min-width: 250px;
        flex-basis: calc(100% / 3);
    }
    .newsletter-section > div{
        margin-top: 5px;
    }
    form{
        margin-top: 10px;
    }
    form button{
        display: inline-flex;
        justify-content: center;
        border: none;
        cursor: pointer;
        outline: none;
        padding: 15px 8px;
        border-radius: 0 3px 3px 0;
        background-color: rgb(156, 156, 156);
        font-weight: 700;
    }
    form button:hover{
        color: white;
        background-color: rgb(156, 72, 7);
    }
    form input{
        border: none;
        outline: none;
        min-width: 150px;
        width: 60%;
        padding: 15px 10px;
    }
    .created-by{
        padding: 5px 0;
        text-align: center;
        font-size: 12px;
    }
    .created-by a{
        text-decoration: underline;
    }
    .social-links, .quick-links{
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