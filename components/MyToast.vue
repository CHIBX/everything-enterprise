<script setup lang="ts">
const props = withDefaults(defineProps<{
    successIcon?: string;
    errorIcon?: string;
    infoIcon?: string
}>(), {
    successIcon: 'material-symbols:check-circle-rounded',
    errorIcon: 'material-symbols:error-circle-rounded-outline-sharp',
    infoIcon: 'material-symbols:info-rounded',
});
const icons = {
    success: props.successIcon,
    error: props.errorIcon,
    info: props.infoIcon,
}
const colors = {
    success: 'text-white bg-green-500',
    error: 'text-white bg-red-500',
    info: 'text-black bg-blue-300',
}
</script>


<template>
    <PrimeToast position="top-center" :pt="{root: {class: ' min-w-[310px] max-w-[450px] w-1/2 px-1.5'}}">
            <template #container="{ message, closeCallback }">
                <div class="flex mb-2.5 items-center gap-5 p-5 rounded-lg" :class="colors[message.severity as keyof typeof colors]" style="flex: 1">
                    <MyIcon class="" :name="icons[message.severity as keyof typeof icons]" size="30" />
                    <div class="flex w-full flex-col gap-2">
                        <h4 class="font-bold " v-if="message.detail">{{ message.detail }}</h4>
                        <div class="font-medium text-lg my-3" v-if="message.summary">{{ message.summary }}</div>
                    </div>
                    <MyIcon class="cursor-pointer" name="material-symbols:close-rounded" size="30" @click="closeCallback" />
                </div>
            </template>
        </PrimeToast>
</template>


<style scoped></style>