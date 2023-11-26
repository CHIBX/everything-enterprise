<script setup lang="ts">
import type { GalleryData } from '@/utils/types';
const urlContainer = inject<Ref<Map<string, string>>>('objectUrl');
const img = ref<HTMLImageElement>();
const props = defineProps<GalleryData[number]>();
onMounted(()=>{
    let blob = new Blob([new Uint8Array(props.buffer)], {type: 'image/jpeg'});
    console.log(props.type)
    let map =unref(urlContainer);
    if(!map?.has(props.image)){
        let url = URL.createObjectURL(blob);
        img.value!.src=url;
        map?.set(props.image, url);
    }
    else{
        img.value!.src=map.get(props.image)||'';
    }
})
</script>

<template>
    <div class="gallery-image">
       <img ref="img" :alt="image" />
    </div>
</template>

<style scoped>

</style>