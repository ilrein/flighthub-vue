<template>
  <div class="overflow-scroll mb-8">
    <div class="flex flex-row">
      <img :src="props.image" :alt="props.title" class="w-12 h-12 mr-4">
      <div class="leading-none">
        <div class="text-xl font-semibold" v-text="props.title" />
        <div v-if="props.heldOrders" class="text-[10px]">
          {{ props.heldOrders }} Held Orders
        </div>
        <div v-if="props.episodeDrops" class="text-[10px]">
          {{ props.episodeDrops }} Episode Drops
        </div>
      </div>
    </div>

    <div class="flex flex-row w-max h-max overflow-x-scroll mt-4 border-l-2 border-r-2 border-black">
      <div v-for="week in weeks" :key="`${week}`" class="w-32 min-w-32 border-r border-gray-300 h-full min-h-[140px]">
        <div class="px-2">
          {{ week.week }}
        </div>
        <div class="px-2">
          {{ week.impressions }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';

import type { ImpressionWeek } from '../types'

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true
  },
  heldOrders: {
    type: Number,
    default: 0,
  },
  episodeDrops: {
    type: Number,
    default: 0,
  },
  maxImpressions: {
    type: Number,
    default: 0,
  },
  weeks: {
    type: Array as PropType<ImpressionWeek[]>,
    default: () => [],
  },
});
</script>

<style lang="postcss">
</style>
