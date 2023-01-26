<template>
  <div class="p-4">
    <div class="font-bold text-4xl mb-4">
      Target
    </div>
    <div>
      <div>
        <div class="text-base font-bold">
          Dates
        </div>
        <div>
          <Datepicker
            v-model="date"
            :enable-time-picker="false"
            range
            space-confirm
          />
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
import '@vuepic/vue-datepicker/dist/main.css'

const date = ref([new Date(), addDays(new Date(), 7)])
</script>

<style lang="postcss">
</style>
