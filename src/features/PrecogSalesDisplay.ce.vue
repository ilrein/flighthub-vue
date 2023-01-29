<template>
  <div class="font-poppins">
    <FlowTabs active-tab="run-of-show" />
    <div class="grid grid-cols-6">
      <div class="col-span-2 p-4">
        <TargetPanel
          :startDate="props.startDate"
          :endDate="props.endDate"
          :insertionOptions="props.insertionOptions"
          :shows="props.shows"
          :geoRestrictions="props.geoRestrictions"
          :maxImpressions="props.maxImpressions"
          :maxImpressionsTimeLimit="props.maxImpressionsTimeLimit"
          :positionLocked="props.positionLocked"
        />
      </div>
      <div class="col-span-4 p-4">
        <OrderHeader />
        <PodcastOrderRow
          v-for="podcast in props.podcasts"
          :key="podcast.id"
          :title="podcast.title"
          :avatar="podcast.avatar"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { addDays } from 'date-fns'
import type { Podcast } from '../types'
import type { PropType } from 'vue';

import FlowTabs from '../components/FlowTabs.vue'
import TargetPanel from '../components/TargetPanel.vue';
import PodcastOrderRow from '../components/PodcastOrderRow.vue';
import OrderHeader from '../components/OrderHeader.vue';

const props = defineProps({
  startDate: {
    type: Date,
    default: new Date(),
  },
  endDate: {
    type: Date,
    default: addDays(new Date(), 7),
  },
  insertionOptions: {
    type: Array,
    default: () => [{
      label: 'Pre + Mid',
      value: 'pre-mid',
    }],
  },
  shows: {
    type: Array,
    default: () => [
      {
        label: 'Show 1',
        value: 'show-1',
      },
      {
        label: 'Show 2',
        value: 'show-2',
      },
      {
        label: 'Show 3',
        value: 'show-3',
      },
    ],
  },
  geoRestrictions: {
    type: Array,
    default: () => [
      {
        label: 'Canada',
        value: 'canada',
      }
    ]
  },
  maxImpressions: {
    type: Number,
    default: null,
  },
  maxImpressionsTimeLimit: {
    type: Number,
    default: null,
  },
  positionLocked: {
    type: String,
    default: null,
  },
  podcasts: {
    type: Array as PropType<Podcast[]>,
    default: () => [
      {
        id: 1,
        title: 'Podcast 1',
        avatar: 'https://picsum.photos/200/300',
      },
      {
        id: 2,
        title: 'Podcast 2',
        avatar: 'https://picsum.photos/200/300',
      },
      {
        id: 3,
        title: 'Podcast 3',
        avatar: 'https://picsum.photos/200/300',
      },
    ],
  }
})
</script>

<style lang='postcss'>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
