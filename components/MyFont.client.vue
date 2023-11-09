<script setup lang="ts">
import type { FontAwesomeIconProps } from '@fortawesome/vue-fontawesome';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
const props=defineProps<FontAwesomeIconProps>();
</script>

<template>
        <FontAwesomeIcon v-bind="props" />
</template>

<style scoped>

</style>