<script setup lang="ts">
import type { GalleryFileDetails } from "~/utils/types";
const fyi = ref<HTMLInputElement>();
let types = ['tables', 'chairs', 'cabinets', 'wardrobes', 'cupboard', 'tv-stands', 'bookshelves', 'beds'];
async function sendFile(){
    const input = fyi.value!;
    const files = input.files;
    if (!files) {return}
    let fileDet: GalleryFileDetails[] = [];
    for (const file of files) {
    const buf = await file.arrayBuffer();
    let name = file.name;
    let ext = name.split('.').at(-1) as string;
    name = name.split('.')[0]!;
     fileDet.push({
        name,
        ext,
        type: types[Math.floor(Math.random() * types.length)],
        size: input.files![0].size,
        data: Array.from(new Uint8Array(buf).values())
    })
    }
    let details = {
        'files': fileDet
    };
    await $fetch('/api/upload', {
        method: 'POST',
        body: JSON.stringify(details),
    })
    input.value = '';
}
</script>

<template>
    <div>
       <form action="/api/upload" method="post" enctype="multipart/form-data">
        <input type="file" ref="fyi" name="images" multiple accept="image/jpeg, image/png, image/webp" />
        <button type="button" @click="sendFile">Submit</button>
       </form>
    </div>
</template>

<style scoped>

</style>