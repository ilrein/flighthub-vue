<template>
  <div>
    <div class="font-bold text-4xl mb-4">
      Target
    </div>
    <div>
      <div>
        <div class="text-base font-bold">
          Dates
        </div>
        <div>
          <Datepicker v-model="date" :enable-time-picker="false" range space-confirm />
        </div>
      </div>

      <div class="mt-4">
        <div class="text-base font-bold">
          Insertion
        </div>
        <div>
          <select class="w-full border rounded p-2">
            <option v-for="option in props.insertionOptions" :key="option.value">
              {{ option.label }}
            </option>
          </select>
        </div>
      </div>

      <div class="mt-4">
        <div class="text-base font-bold">
          Shows
        </div>
        <div>
          <!-- <select class="w-full border rounded p-2">
            <option
              v-for="option in props.shows"
              :key="option.value"
            >
              {{ option.label }}
            </option>
          </select> -->
          <Multiselect v-model="shows" :multiple="true" :options="props.shows">
            <template v-slot:selection="{ values, isOpen }"><span class="multiselect__single" v-if="values.length" v-show="!isOpen">{{ values.length }} options selected</span></template>
          </Multiselect>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
// import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
// import { ChevronDownIcon } from '@heroicons/vue/20/solid'
import Datepicker from '@vuepic/vue-datepicker';
import { addDays } from 'date-fns'
import Multiselect from 'vue-multiselect'

import 'vue-multiselect/dist/vue-multiselect.css'
import '@vuepic/vue-datepicker/dist/main.css'

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

const date = ref([new Date(), addDays(new Date(), 7)])

const shows = ref()

console.log(props.maxImpressions, props);

</script>

<style lang="postcss">

</style>
