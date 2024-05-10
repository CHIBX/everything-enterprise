<script setup lang="ts">
defineProps<{
    isLoading?: boolean
}>();
</script>


<template>
     <PrimeButton><template v-if="isLoading"><MyIcon name="svg-spinners:ring-resize" size="22" /></template><template v-else><slot /></template></PrimeButton>
</template>


<style scoped></style>