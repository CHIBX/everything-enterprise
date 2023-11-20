<script setup lang="ts">

</script>

<template>
    <h2 class="service-head" v-pre><span>What We Specialize In</span></h2>
    <div class="services" v-pre>
        <div class="service service-shown" style="--dif: 2">
            <img src="/images/armchair-pillow.webp" alt="Chair with Beautiful Luxury Pillow"
                title="Chair with Beautiful Luxury Pillow" draggable="false" />
            <div class="service-body">
                <strong>Masterful Chairs for Every Space</strong>
                <p>We craft beautiful and functional chairs for your home or office, using only the finest materials and
                    construction methods. Our chairs are designed to be comfortable, stylish, and durable. </p>
            </div>
        </div>
        <div class="service service-shown" style="--dif: 2.5">
            <img src="/images/shelf.webp" alt="Empty Wooden Shelves" title="Empty Wooden Shelves"
                draggable="false" />
            <div class="service-body">
                <strong>Shelving for Every Space </strong>
                <p>Our shelves are handcrafted from the finest wood, using traditional carpentry techniques. Each shelf is a
                    unique work of art that will add beauty and functionality to your home. </p>
            </div>
        </div>
        <div class="service service-shown" style="--dif: 3">
            <img src="/images/classic-bedroom-hotel-room-with-doubles-bed.webp" alt="Classic Room with Doubles Bed"
                title="Classic Room with Doubles Bed" draggable="false" />
            <div class="service-body">
                <strong>Craft Your Dream Bed with Our Expertise</strong>
                <p>Our beds are made from the highest quality materials and craftsmanship, and we are committed to providing
                    our customers with the best possible experience. </p>
            </div>
        </div>
        <div class="service service-shown" style="--dif: 3.5">
            <img src="/images/cupboard.webp" alt="Wooden Cupboard" title="Wooden Cupboard" draggable="false" />
            <div class="service-body">
                <strong>The Art of Exquisite Cupboard Design</strong>
                <p>We design and build custom cupboards for kitchens, bathrooms, and bedrooms. Choose from a wide variety of
                    styles and finishes to find the perfect look for your home. </p>
            </div>
        </div>
        <div class="service service-shown" style="--dif: 4">
            <img src="/images/table.webp" alt="Interior Design for Table" title="Interior Design for Table" draggable="false" />
            <div class="service-body">
                <strong>Crafting Custom Tables to Elevate Your Living Space</strong>
                <p>At Everything Enterprise, we create custom tables tailored to meet the unique needs of our clients,
                    providing versatile spaces for meals, work, and relaxation.
                </p>
            </div>
        </div>
        <div class="service service-shown" style="--dif: 5">
            <img src="/images/cabinets.webp" alt="Example of a cabinet" title="Example of a cabinet" draggable="false" />
            <div class="service-body">
                <strong>Transforming Your Space with Exquisite Cabinets</strong>
                <p>At Everything Enterprise, we create custom tables tailored to meet the unique needs of our clients,
                    providing versatile spaces for meals, work, and relaxation.
                </p>
            </div>
        </div>
        <div class="service service-shown" style="--dif: 5">
            <img src="/images/wardrobe.webp" alt="Example of a Wardrobe" title="Example of a Wardrobe" draggable="false" />
            <div class="service-body">
                <strong>We Design and Build Dream Wardrobes</strong>
                <p>Our wardrobes are not only well-made, but they are also stylish and functional. We offer a variety of styles to choose from, including traditional, modern, and contemporary. We believe that everyone should be able to afford a well-made wardrobe
                </p>
            </div>
        </div>
    </div>
</template>

<style>
.services {
    position: relative;
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
    border-radius: 5px;
    transition: 0.3s ease, opacity calc(0.1s * var(--dif)) cubic-bezier(0.2, 0.14, 0.875, 1) calc(0.1s * var(--dif));
    flex-basis: min(max(90vw, 500px), min(350px, 50%));
}

.service-shown {
    opacity: 0;
    transition: transform 0.5s ease-in;
    transform: translateY(300px);
}

.service-body {
    padding: 20px 10px 10px 5px;
    border-top: 0.2px solid rgb(207, 207, 207);
}

.service-body p {
    font-size: 13.5px;
    letter-spacing: 1px;
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