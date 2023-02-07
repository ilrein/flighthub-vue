<template>
  <div class="relative grid bg-blue-50 border border-blue-50" :style="`width: ${props.width}%;`">
    <div class="flex flex-row justify-between font-inter text-xs items-center">
      <div class="flex flex-row flex-1">
        <Bars3Icon class="w-3 mr-1" />
        <div>
          {{ props.title }}
        </div>
      </div>
      <div>
        {{ props.impressions }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Bars3Icon } from "@heroicons/vue/24/outline";

const props = defineProps({
  impressions: {
    type: Number,
    default: 0,
  },
  title: {
    type: String,
    required: true,
  },
  width: {
    type: Number,
    default: 100,
  }
});
</script>
