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
      <div
        v-for="week in weeks"
        :key="`${week.week}`"
        class="w-32 min-w-32 border-r border-gray-300 h-full min-h-[140px] cursor-pointer transition-colors relative"
        @mouseover="hoverWeek = week.week"
        @mouseleave="hoverWeek = null"
      >
        <div class="px-2">
          {{ week.week }}
        </div>
        <div class="px-2">
          {{ week.impressions }}
        </div>
        <svg
          v-if="hoverWeek === week.week"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6 text-blue-400 absolute bottom-0 left-0 hover:text-blue-700"
          @click="onSelect(week)"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import { ref } from 'vue';

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
  id: {
    type: String,
    required: true,
  }
});

const hoverWeek = ref();

const onSelect = (week: any) => {
  console.log(week, props.id);
};
</script>
