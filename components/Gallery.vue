<script setup lang="ts">
import type { Gallery } from '@/utils/types';
const props = defineProps<Gallery>();
const [parent] = useAutoAnimate();
</script>

<template>
    <div class="gallery-flex" ref="parent">
        <GalleryImage v-for="({ type, image, buffer }) in galleryData" :key="image" :type="type" :image="image" :buffer="buffer" />
    </div>
</template>

<style scoped>
.gallery-flex{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px 20px;
    flex-shrink: 0;
}
.gallery-flex :deep(img){
    max-width: 100%;
}
.gallery-flex > :deep(div){
    max-width: 300px;
    height: 300px;
}
</style>