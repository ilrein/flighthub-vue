<template>
  <div
    class="relative grid bg-blue-50 border border-blue-50 h-[14px]"
    :style="`width: ${props.width}%; transform: translateY(${props.orderNumber * 14}px); background-color: ${props.hex};`"
  >
    <div class="flex flex-row justify-between font-inter text-xs items-center">
      <div class="flex flex-row flex-1" style="filter: saturate(0) grayscale(1) brightness(.7) contrast(1000%) invert(1);">
        <Bars3Icon class="w-3 mr-1" />
        <div>
          {{ `Order ${props.orderNumber + 1}` }}
        </div>
      </div>
      <div style="filter: saturate(0) grayscale(1) brightness(.7) contrast(1000%) invert(1);">
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
  width: {
    type: Number,
    default: 100,
  },
  orderNumber: {
    type: Number,
    default: 0,
  },
  hex: {
    type: String,
    default: "#000000",
  },
});
</script>
