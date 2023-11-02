<script setup lang="ts">

</script>

<template>
    <h2 class="service-head" v-pre><span>What We Specialize In</span></h2>
    <div class="services" v-pre>
        <div class="service service-shown" style="--dif: 3">
            <img src="/images/armchair-pillow.webp" alt="Chair with Beautiful Luxury Pillow"
                title="Chair with Beautiful Luxury Pillow" draggable="false" />
            <div class="service-body">
                <strong>We do Chairs</strong>
                <p>We craft beautiful and functional chairs for your home or office, using only the finest materials and
                    construction methods. Our chairs are designed to be comfortable, stylish, and durable. </p>
            </div>
        </div>
        <div class="service service-shown" style="--dif: 3.5">
            <img src="/images/empty-wooden-shelves.webp" alt="Empty Wooden Shelves" title="Empty Wooden Shelves"
                draggable="false" />
            <div class="service-body">
                <strong>We do Shelves</strong>
                <p>Our shelves are handcrafted from the finest wood, using traditional carpentry techniques. Each shelf is a
                    unique work of art that will add beauty and functionality to your home. </p>
            </div>
        </div>
        <div class="service service-shown" style="--dif: 4">
            <img src="/images/classic-bedroom-hotel-room-with-doubles-bed.webp" alt="Classic Room with Doubles Bed"
                title="Classic Room with Doubles Bed" draggable="false" />
            <div class="service-body">
                <strong>We do Beds</strong>
                <p>Our beds are made from the highest quality materials and craftsmanship, and we are committed to providing
                    our customers with the best possible experience. </p>
            </div>
        </div>
        <div class="service service-shown" style="--dif: 4.5">
            <img src="/images/cupboard.webp" alt="Wooden Cupboard" title="Wooden Cupboard" draggable="false" />
            <div class="service-body">
                <strong>We do Cupboards</strong>
                <p>We design and build custom cupboards for kitchens, bathrooms, and bedrooms. Choose from a wide variety of
                    styles and finishes to find the perfect look for your home. </p>
            </div>
        </div>
        <div class="service service-shown" style="--dif: 5">
            <img src="/images/table.webp" alt="Interior Design Table" title="Interior Design Table" draggable="false" />
            <div class="service-body">
                <strong>We do Tables</strong>
                <p>At Everything Enterprise, we create custom tables tailored to meet the unique needs of our clients,
                    providing versatile spaces for meals, work, and relaxation.
                </p>
            </div>
        </div>
        <div class="service service-shown" style="--dif: 5.5">
            <img src="/images/bookshelves.webp" alt="Interior Design Table" title="Interior Design Table" draggable="false" />
            <div class="service-body">
                <strong>We do Bookshelves</strong>
                <p>We specialize in creating
                    custom-made bookshelves that are both stylish and functional while working with you understanding your needs and preferences to we create a bookshelf that is
                    perfect for your space and budget.
                </p>
            </div>
        </div>
        <div class="service service-shown" style="--dif: 6">
            <img src="/images/cabinets.webp" alt="Interior Design Table" title="Interior Design Table" draggable="false" />
            <div class="service-body">
                <strong>We do Cabinets</strong>
                <p>At Everything Enterprise, we create custom tables tailored to meet the unique needs of our clients,
                    providing versatile spaces for meals, work, and relaxation.
                </p>
            </div>
        </div>
    </div>
</template>

<style>
.services {
    position: relative;
    /* display: grid;
    grid-auto-flow: row;
    grid-template-columns: repeat(auto-fit, minmax(300px, 0.7fr)); */
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    grid-gap: 15px;
    margin: 10px 20px 0;
}

.service-head {
    text-align: center;
    margin: 20px 0;
}

.service {
    display: flex;
    flex-direction: column;
    transition: 0.3s ease, opacity calc(0.1s * var(--dif)) cubic-bezier(0.2, 0.14, 0.875, 1) calc(0.1s * var(--dif));
    flex-basis: min(max(90vw, 500px), min(350px, 50%));
}

.service-shown {
    opacity: 0;
    transition: transform 0.5s ease-in;
    transform: translateY(300px);
}

.service:hover {
    transform: scaleY(1.02) translateY(-10px);
    box-shadow: 0 5px 10px 2px rgba(44, 44, 44, 0.5);
}

.service-body {
    padding: 20px 10px 10px;
    border-top: 0.2px solid rgb(207, 207, 207);
}

.service-body p {
    font-size: 13.5px;
}

.service img {
    min-width: 300px;
    max-width: 100%;
    min-height: 300px;
    max-height: 300px;
    user-select: none;
    object-fit: cover;
}

@media (max-width: 770px) {
    .service{
        flex-basis: max(80%, 300px);
    }
    .service img {
       min-height: 300px;
    }
}
</style>