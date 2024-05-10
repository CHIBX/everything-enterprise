<script setup lang="ts">
import { useCapitalize } from '~/composables/useLazy';

const props = defineProps<{
    types: string[],
    upload: ({ id:number,type: string; file?: File; })
}>();
const emit = defineEmits<{
    (e: 'delete', id: number): void;
}>();
// const capitalize = (str:string)=> useCapitalize(str);
function addFile(e: Event){
    let input = e.target as HTMLInputElement;
    let { files } = input;
    if(!files?.length){return} 
    props.upload.file = files[0];
}

</script>

<template>
    <div class="upload-field w-full flex items-center justify-around gap-2.5">
        <select class="select py-2.5 px-1.5 text-sm rounded-sm border border-gray-400" :id="`select-${upload.id}`" v-model="upload.type">
            <option v-for="(_type, index) in types" :value="_type" :selected="index==0">{{ useCapitalize(_type) }}</option>
        </select>
        <input type="file" class="hidden" :id="`file-${upload.id}`" @change="addFile" accept="image/jpg, image/jpeg, image/png, image/webp" />
        <label :for="`file-${upload.id}`" class="label py-2.5 px-1.5 text-center cursor-pointer text-white bg-black min-w-20 rounded whitespace-nowrap overflow-hidden text-ellipsis">{{upload.file ? upload.file.name: 'Select Image'}}</label>
        <span class="trash cursor-pointer" @click="()=>{emit('delete', upload.id)}">
            <MyIcon name="material-symbols:delete-outline-rounded" size="25" class="hover:text-red-600 transition-none" /> 
        </span>
    </div>
</template>

<style scoped>
.select{
    min-width: 110px;
    width: 60%;
    max-width: 150px;
}
.label{
    min-width: 75px;
}
</style>