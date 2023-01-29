<template>
  <div class="">
    
  </div>
</template>

<script setup lang="ts">
import { addDays } from 'date-fns';

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    required: true,
  },
});
</script>

<style lang="postcss">
</style>
