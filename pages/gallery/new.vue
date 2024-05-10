<script setup lang="ts">
import { useToast } from 'primevue/usetoast';
import PrimeToast from 'primevue/toast';

let id = 0;
const [parent] = useAutoAnimate();
const isDialogVisible = ref(false);
const toatser = useToast();
const isCategoryUpdating = ref(false);
const isUploading = ref(false);
const newCategoryName = ref('');
const types = ref<string[]>([]);
try {
    const { data, error } = await useFetch('/api/gallerytype');
    if (data.value) {
        types.value = data.value ? data.value.types : [];
    }
} catch (e) { }

const upload = ref<({ id: number, type: string; file?: File; })[]>([
    reactive({
        id,
        type: 'chairs',
        file: undefined
    })
]);
const addToList = () => {
    const newArr = upload.value.slice();
    newArr.push(
        reactive({
            id: ++id,
            type: '',
            file: undefined
        })

    );
    upload.value = newArr;
}
function deleteList(id: number) {
    upload.value = upload.value.filter((u) => {
        if (u.id === id) {
            console.log(u.id, u.type)
        }
        return u.id !== id;
    });
}
async function uploadImages() {
    const formData = new FormData();
    let errCount = 0, length = upload.value.length;
    for (let i = 0; i < length; i++) {
        let u = upload.value[i];
        if (!u.file) { errCount++; break; }
        const uint8 = new Uint8Array(await u.file.arrayBuffer())
        formData.append(`${u.type}:${i}`, new Blob([uint8], { type: 'image/*' }), u.file.name);
    }
    if (errCount > 0) { toatser.add({ severity: 'info', life: 3000, detail: 'Please select all images' }); return }
        console.log(formData, formData.get('chairs'));
        isUploading.value = true;
        await delay(500);
        const res = await $fetch('/api/upload', {
            method: 'POST', body: formData, onResponse(e) {
                const error = e.error;
                if (!error) {
                    id = 0;
                    upload.value = [
                        reactive({
                            id,
                            type: '',
                            file: undefined
                        })
                    ];
                    return;
                }
                const failedFileNames = (error as Error).message.split('|');
                upload.value = upload.value.filter((u) => {
                    if (!u.file?.name) { return }
                    return failedFileNames.includes(u.file.name);
                });
                toatser.add({ severity: 'error', life: 3000, detail: `Some files failed to upload\n${failedFileNames.map((el) => '-' + el).join('\n')}\nTry again` });
            }
        });
        await delay(200);
        isUploading.value = false;
}
async function onCategoryUpdate() {
    isCategoryUpdating.value = true;
    await delay(500);
    const res = await $fetch('/api/gallerytype', {
        method: 'POST', body: { type: unref(newCategoryName) }, onResponseError(e) {
            let response = e.response;
            let { statusText } = response;
            toatser.add({ severity: 'error', detail: statusText, life: 3000 });
        }
    }).catch(() => { });
    await delay(200);
    isCategoryUpdating.value = false;
    await delay(200);
    isDialogVisible.value = false;
    if (res) {
        toatser.add({ severity: 'success', detail: 'Category Added Successfully', life: 3000 });
        types.value = [...types.value, unref(newCategoryName)];
        newCategoryName.value = '';
    }
}
</script>

<template>
    <div class="flex flex-col items-center justify-center py-2.5">
        <!-- <PrimeToast position="top-center">
            <template #container="{ message, closeCallback }">
                <div class="flex items-center gap-5 bg-red-500 p-5 rounded-lg min-w-60 w-full" style="flex: 1">
                    <MyIcon class="text-white" name="material-symbols:error-circle-rounded-outline-sharp" size="30" />
                    <div class="flex flex-col gap-2">
                        <h4 class="font-bold text-white" v-if="message.detail">{{ message.detail }}</h4>
                        <div class="font-medium text-lg my-3 text-white" v-if="message.summary">{{ message.summary }}</div>
                    </div>
                    <MyIcon class="cursor-pointer text-white" name="material-symbols:close-rounded" size="30" @click="closeCallback" />
                </div>
            </template>
</PrimeToast> -->
        <MyToast />
        <div class="w-full p-2.5">
            <PrimeButton @click="isDialogVisible = true"
                class="float-right py-2.5 px-2 text-white bg-black rounded-md flex items-center">
                <MyIcon name="material-symbols:add" size="22" /> New Category
            </PrimeButton>
        </div>
        <h2 class="upload-header">Upload New Images</h2>
        <form class="form mt-2.5 px-2.5 pt-1.5 rounded-md" @submit.prevent="">
            <div class="inner-form flex flex-col items-center justify-center gap-5 p-2.5" ref="parent">
                <UploadField v-for="(_upload, _) in upload" :upload="_upload" @delete="(id) => deleteList(id)"
                    :types="types" :key="_upload.id" />
            </div>
            <div class="flex items-center justify-center gap-4 mb-2.5">
                <PrimeButton type="button"
                    class="flex gap-1.5 text-black border-2 border-black items-center py-2.5 px-3.5 cursor-pointer rounded"
                    @click="addToList">
                    <MyIcon name="material-symbols:add-circle-outline-rounded" size="20" /> Add
                </PrimeButton>
                <LoadButton :disabled="isUploading" :loading="isUploading" @click="uploadImages" class="py-3 px-3.5 flex gap-2.5 text-white border-none cursor-pointer rounded bg-black"
                    type="submit">
                    <MyIcon name="ic:round-cloud-upload" size="22" /> Upload
                </LoadButton>
            </div>
        </form>
        <PrimeDialog v-model:visible="isDialogVisible" modal :pt="{
            content: {
                style: { padding: '10px' }
            }
        }" :style="{ minWidth: '300px', width: '90%', maxWidth: '400px' }"
            >
            <template #header>
                <h2 class="px-3 mt-5 flex justify-end gap-3 font-black">Add New Category</h2>
            </template>
            <div class="w-full flex flex-col align-items-center px-3 my-3 justify-end gap-3">
                <label for="email" class="font-semibold w-6rem">Name:</label>
                <PrimeInputText v-model="newCategoryName"
                    class="w-full font-bold border-b-2 border-blue-300 p-1.5 rounded-sm" autocomplete="off" autofocus />
            </div>
            <template #footer>
                <div class="px-3 my-3 flex justify-end gap-3">
                    <PrimeButton :disabled="isCategoryUpdating" class="text-white bg-red-800 px-3 py-2 hover:opacity-80"
                        label="Cancel" @click="isDialogVisible = false" />
                    <LoadButton :isLoading="isCategoryUpdating" :disabled="isCategoryUpdating"
                        class="px-4 py-2 min-w-24 flex justify-center gap-1 text-white bg-black hover:opacity-80"
                        @click="onCategoryUpdate">
                        <MyIcon name="material-symbols:save-outline-rounded" size="22" /> Save
                    </LoadButton>
                </div>
            </template>
        </PrimeDialog>
    </div>

</template>

<style scoped>
.form {
    min-width: 310px;
    width: 35%;
    max-width: 350px;
    box-shadow: 3px 5px 10px #3333338c, 0 -2px 2px #3333334f;
}
</style>