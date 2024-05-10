<script lang="ts" setup>
const props = withDefaults(defineProps<{
    name: string;
    size?: string;
}>(), {
    size: '22'
});
</script>

<template>
    <ClientOnly>
        <Icon v-bind="{...props, ...$attrs}" />
    </ClientOnly>
</template>

<style>

</style>