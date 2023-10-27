<script setup lang="ts">

</script>

<template>
    <h2 class="service-head"><span>What We Specialize In</span></h2>
    <div class="services">
        <div class="service service-shown" style="--dif: 3">
            <img src="/armchair-pillow.webp" alt="Chair with Beautiful Luxury Pillow"
                title="Chair with Beautiful Luxury Pillow" draggable="false" />
            <div class="service-body">
                <strong>We do Chairs</strong>
                <p>We craft beautiful and functional chairs for your home or office, using only the finest materials and
                    construction methods. Our chairs are designed to be both comfortable and stylish, and they will last for
                    many
                    years to come. </p>
            </div>
        </div>
        <div class="service service-shown" style="--dif: 4">
            <img src="/empty-wooden-shelves.webp" alt="Empty Wooden Shelves" title="Empty Wooden Shelves"
                draggable="false" />
            <div class="service-body">
                <strong>We do shelves</strong>
                <p>Our shelves are handcrafted from the finest wood, using traditional carpentry techniques. Each shelf is a
                    unique work of art that will add beauty and functionality to your home. </p>
            </div>
        </div>
        <div class="service service-shown" style="--dif: 5">
            <img src="/classic-bedroom-hotel-room-with-doubles-bed.webp" alt="Classic Room with Doubles Bed"
                title="Classic Room with Doubles Bed" draggable="false" />
            <div class="service-body">
                <strong>We do Beds</strong>
                <p>Our beds are made from the highest quality materials and craftsmanship, and we are committed to providing
                    our customers with the best possible experience. </p>
            </div>
        </div>
        <div class="service service-shown" style="--dif: 6">
            <img src="/cupboard.webp" alt="Wooden Cupboard" title="Wooden Cupboard" draggable="false" />
            <div class="service-body">
                <strong>We do cupboards</strong>
                <p>We design and build custom cupboards to fit your needs, whether you\'re looking for a new kitchen,
                    bathroom, or bedroom storage solution. We offer a wide variety of cupboard styles and finishes to choose
                    from, so you can find the perfect look for your home. </p>
            </div>
        </div>
    </div>
</template>

<style>
.services {
    display: grid;
    position: relative;
    grid-auto-flow: row;
    grid-template-columns: repeat(auto-fit, minmax(300px, 0.5fr));
    justify-content: center;
    grid-gap: 20px;
    margin: 10px 20px 0;
}

.service-head {
    text-align: center;
    margin: 20px 0;
}

.service {
    display: flex;
    flex-direction: column;
    transition: 0.3s cubic-bezier(0.77, 0, 0.175, 1), opacity calc(0.1s * var(--dif)) cubic-bezier(0.1, 0, 0.175, 1) calc(0.1s * var(--dif));
    border-radius: 3px;
}

.service-shown {
    opacity: 0;
    transform: translateY(200px);
}

.service:hover {
    transform: scaleY(1.02) translateY(-10px);
    box-shadow: 0 5px 10px 2px rgba(0, 0, 0, 0.5);
}

.service-body {
    padding: 20px 10px 10px;
    border-top: 0.2px solid rgb(207, 207, 207);
}

.service-body p {
    font-size: 14px;
}

.service img {
    min-width: 300px;
    width: 100%;
    min-height: 250px;
    max-height: 300px;
    user-select: none;
    object-fit: cover;
}

@media (max-width: 676px) {
    .services {
        grid-template-columns: minmax(300px, 0.7fr);
    }

    .service img {
        min-width: 300px;
        max-width: 100%;
        min-height: 250px;
        max-height: 300px;
    }
}
</style>