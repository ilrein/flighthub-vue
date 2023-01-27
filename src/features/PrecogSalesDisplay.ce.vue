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
        body
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { addDays } from 'date-fns'

import FlowTabs from '../components/FlowTabs.vue'
import TargetPanel from '../components/TargetPanel.vue';

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
  }
})
</script>

<style lang='postcss'>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
