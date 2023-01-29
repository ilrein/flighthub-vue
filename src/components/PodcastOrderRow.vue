<template>
  <div class="overflow-scroll">
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

    <div class="flex flex-row w-max overflow-x-scroll mt-4">
      <div v-for="week in weeks" :key="`${week}`" class="w-32 min-w-32 flex-1">
        {{ format(week, 'MMM L') }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import {
  addDays,
  addMonths,
  nextMonday,
  differenceInWeeks,
  format
} from 'date-fns';

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
  startDate: {
    type: Date,
    default: new Date(),
  },
  endDate: {
    type: Date,
    default: addMonths(new Date(), 2),
  },
});

console.log(props);


const weeks = computed(() => {
  const weeks = [];
  
  let startingPoint = nextMonday(props.startDate);
  const diff = differenceInWeeks(props.endDate, startingPoint);

  while (weeks.length < diff) {
    weeks.push(startingPoint);
    startingPoint = addDays(startingPoint, 7);
  }
  
  return weeks;
});
</script>

<style lang="postcss">

</style>
