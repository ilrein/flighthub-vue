<template>
  <div class="flex flex-row justify-between">
    <div>
      Showing target conditions from {{ props.startDate }} to {{ props.endDate }}
    </div>
    <div>
      Sort by <select class="border p-1">
        <option v-for="option in props.sortOptions" :key="option.value" :value="option.value">
          {{ option.label }}
        </option>
      </select>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import { addDays, format } from 'date-fns'

import type { DropdownOption } from '../types'

const props = defineProps({
  startDate: {
    type: Date,
    default: format(new Date, 'LLLL d, yyyy')
  },
  endDate: {
    type: Date,
    default: format(addDays(new Date(), 7), 'LLLL d, yyyy')
  },
  sortOptions: {
    type: Array as PropType<DropdownOption[]>,
    default: () => [
      {
        label: 'Most Available',
        value: 'most-available',
      },
      {
        label: 'Least Available',
        value: 'least-available',
      }
    ]
  }
});
</script>

<style lang="postcss">
</style>
