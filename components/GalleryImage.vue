<script setup lang="ts">
import PrimeImage from 'primevue/image';
defineProps<{
    path: string;
}>();
const emit=defineEmits<{
    (e: 'open'): void
}>()
</script>

<template>
    <div class="gallery-image overflow-hidden">
        <PrimeImage class="cursor-pointer w-full h-full aspect-square object-fill transform hover:scale-105" :preview="false" :src="path" @click="()=>emit('open')">
            <template #indicatoricon>
                <MyIcon name="uil:search" />
            </template>
        </PrimeImage>
    </div>
</template>

<style scoped>
.gallery-image {
    
}
</style>