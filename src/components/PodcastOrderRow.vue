<template>
  <div class="overflow-scroll mb-8">
    <div class="flex flex-row">
      <img :src="props.image" :alt="props.title" class="w-12 h-12 mr-4" />
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

    <div class="grid grid-flow-col">
      <div
        class="
          flex flex-row
          w-max
          h-max
          overflow-x-scroll
          mt-4
          border-l-2 border-r-2 border-black
        "
      >
        <div
          v-for="(week, index) in weeks"
          :key="`${week.week}`"
          class="
            w-32
            border-r border-gray-300
            h-full
            min-h-[140px]
            cursor-pointer
            transition-colors
            relative
          "
          @mouseover="hoverWeek = week.week"
          @mouseleave="hoverWeek = null"
        >
          <div class="px-2 font-inter text-xs">
            {{ formatDate(week) }}
          </div>
          <div class="px-2">
            {{ week.impressions }}
          </div>
          <div class="flex flex-col">
            <OrderBar
              v-for="order in impressionOrders.find((o) => o.week === week.week)
                ?.orders || []"
              :key="order.id"
              :order-number="order.orderNumber"
              :impressions="order.impressions"
              :width="order.width"
              :hex="order.hex"
            />
          </div>
          <svg
            v-if="hoverWeek === week.week"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="
              w-6
              h-6
              text-blue-400
              absolute
              bottom-0
              left-0
              hover:text-blue-700
            "
            @click="onSelect(week)"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <OrderDropdown
            v-if="displayOrderWeek === week.week"
            :order-options="getOptions(week.week)"
            :max-impressions="week.impressions"
            @add="
              (data) => onAdd({ ...data, week: week.week, weekIndex: index })
            "
            @close="onClose"
          />
        </div>
      </div>

      <div class="col-span-1 h-full w-full bg-white z-10 mt-8 ml-2 text-right">
        <div class="">
          {{ props.maxImpressions }}
        </div>
        <div
          v-for="impressionOrder in impressionOrders"
          :key="impressionOrder.week"
        >
          <div
            v-for="order in impressionOrder.orders"
            :key="order.id"
            :style="`color: ${order.hex};`"
            class="text-xs"
          >
            {{ order.impressions }}
          </div>
        </div>
      </div>
    </div>

    <div class="flex flex-row-reverse w-[64rem]">
      <div class="flex flex-row flex-nowrap whitespace-nowrap">
        Show Total {{ sumOfOrderImpressions }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from "vue";
import { ref, reactive, computed } from "vue";
import { addDays, format } from "date-fns";
import randomHex from "random-hex";

import type { ImpressionWeek } from "../types";
import OrderDropdown from "./OrderDropdown.vue";
import OrderBar from "./OrderBar.vue";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
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
  },
});

const hoverWeek = ref();

const displayOrderWeek = ref();

const onSelect = (week: any) => {
  displayOrderWeek.value = week.week;
};

const formatDate = (date: any) => {
  return format(new Date(date.week), "MMM d");
};

const getOptions = (week: Date) => {
  const options = [];

  for (let i = 0; i < 8; i++) {
    options.push({
      label: format(addDays(new Date(week), i * 7), "MMM d"),
      value: format(addDays(new Date(week), i * 7), "yyyy-MM-dd"),
      maxImpressions: 0,
      available: true,
    });
  }

  return options;
};

const impressionOrders = reactive(
  props.weeks.map((week) => ({
    week: week.week,
    orders: [] as any[],
  }))
);

const orderCount = ref(0);
const onClose = () => {
  displayOrderWeek.value = null;
};
const onAdd = (order: any) => {
  const { impressions, week, weekIndex } = order;

  const getImpressionsForWeekByIndex = (index: number) => {
    return props.weeks.map((w) => w.impressions)[index];
  };

  if (!impressions) return;

  // possible impressions left to be ordered
  // reduce the impressions by the current week
  // if there are impressions left, go to the next week
  // const impressionsLeft = props.weeks.reduce((acc, curr, index) => {
  //   if (index === weekIndex) {
  //     return acc - curr.impressions;
  //   }

  //   return acc;
  // }, impressions);
  // console.log('impressionsLeft', impressionsLeft);

  const getTotalSizeOfOrderBar = (
    impressions: number,
    weekIndex: number
  ): number => {
    if (!getImpressionsForWeekByIndex(weekIndex + 1)) {
      return 100;
    }

    if (impressions <= getImpressionsForWeekByIndex(weekIndex)) {
      return 100;
    } else {
      return (
        100 +
        getTotalSizeOfOrderBar(
          impressions - getImpressionsForWeekByIndex(weekIndex),
          weekIndex + 1
        )
      );
    }
  };

  const index = impressionOrders.findIndex((o) => o.week === week);
  impressionOrders[index].orders.push({
    id: Math.random(),
    orderNumber: orderCount.value,
    impressions,
    width: getTotalSizeOfOrderBar(impressions, weekIndex),
    hex: randomHex.generate(),
  });

  orderCount.value++;

  onClose();
};

const sumOfOrderImpressions = computed(() => {
  return impressionOrders.reduce((acc, curr) => {
    return (
      acc +
      curr.orders.reduce((acc, curr) => {
        return acc + curr.impressions;
      }, 0)
    );
  }, 0);
});
</script>
