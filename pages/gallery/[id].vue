<script lang="ts" setup>
const { id } = useRoute().params;
const { data, error, pending } = useFetch(`/api/gallerytype`);
let pendWatch = watch(pending, () => {
    if(!pending.value){
        pendWatch();
    }
    if(error.value){
        throw createError({
            statusCode: 500,
            statusMessage: `Something went wrong on our end.\nPlease try again later.`,
        })
    }
    if(data.value){
        if(!data.value.types.includes(id.toString().toLowerCase())){
            throw createError({
                statusCode: 404,
                statusMessage: `No result found for category ${id}!`,
            });
        }
    }
})
</script>

<template>
    <div>
        {{ id }}
    </div>
</template>

<style>

</style>