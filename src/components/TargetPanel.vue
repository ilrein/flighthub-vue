<template>
  <div class="h-full border-r pr-2 text-black">
    <div class="font-bold text-4xl mb-4">
      Target
    </div>
    <div>
      <div>
        <div class="text-base font-poppins font-semibold">
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
          <multiselect v-model="selectedShows" :options="props.shows" :multiple="true" :close-on-select="false" :clear-on-select="false" :preserve-search="true" placeholder="Pick some" label="label" track-by="label" :preselect-first="true">
            <template v-slot:selection="{ values, isOpen }"><span class="multiselect__single" v-if="values.length" v-show="!isOpen">{{ values.length }} options selected</span></template>
          </multiselect>
        </div>
      </div>

      <div class="mt-4">
        <div class="text-base font-bold">
          Geo Restrictions
        </div>
        <div>
          <select class="w-full border rounded p-2">
            <option v-for="option in props.geoRestrictions" :key="option.value">
              {{ option.label }}
            </option>
          </select>
        </div>
      </div>

      <div class="mt-4">
        <div class="text-base font-bold mb-1">
          Frequency Cap
        </div>
        <div>
          <div class="font-inter text-sm mb-1">
            Max of <input type="number" class="border rounded" placeholder="#" v-model="maxImpressions" /> impressions
          </div>
          <div class="mt-1 font-inter text-sm">
            Every <input type="number" class="border rounded" v-model="maxImpressionsTimeLimit" /> day(s)
          </div>
        </div>
      </div>

      <div class="mt-4">
        <div class="text-base font-bold">
          Position Locked
        </div>
        <div>
          <select class="w-full border rounded p-2">
            <option selected>None selected</option>
            <option v-for="option in props.positionLocked" :key="option.value">
              {{ option.label }}
            </option>
          </select>
        </div>
      </div>

      <div class="flex flex-row justify-between items-center py-4">
        <button class="bg-gray-100 rounded px-4 py-2" @click="onReset">
          Reset
        </button>

        <button class="bg-blue-400 text-white rounded px-4 py-2" @click="submit">
          Adjust Target
        </button>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Datepicker from '@vuepic/vue-datepicker';
import { addDays } from 'date-fns'

// @ts-expect-error
import Multiselect from 'vue-multiselect'

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
    required: true,
  },
  shows: {
    type: Array,
    required: true,
  },
  geoRestrictions: {
    type: Array,
    required: true,
  },
  positionLocked: {
    type: Array,
    required: true,
  }
})

const emit = defineEmits(['submit'])

const date = ref([new Date(), addDays(new Date(), 7)])

const selectedShows = ref([])
const maxImpressions = ref()
const maxImpressionsTimeLimit = ref()

const onSelectShow = (selectedOption: any) => {
  console.log(selectedOption);
  const foundShow = selectedShows.value.find((show: any) => show.value === selectedOption.value)

  if (foundShow) {
    selectedShows.value = selectedShows.value.filter((show: any) => show.value !== selectedOption.value)
  } else {
    selectedShows.value.push(selectedOption)
  }
}

const onReset = () => {
  date.value = [new Date(), addDays(new Date(), 7)]
  selectedShows.value = []
  maxImpressions.value = null
  maxImpressionsTimeLimit.value = null
}

const submit = () => emit('submit', {
  date: date.value,
  selectedShows: selectedShows.value,
  maxImpressions: maxImpressions.value,
  maxImpressionsTimeLimit: maxImpressionsTimeLimit.value,
})
</script>
