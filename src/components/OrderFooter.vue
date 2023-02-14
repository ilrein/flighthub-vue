<template>
  <div class="flex flex-row justify-end">
    <div class="flex flex-col font-poppins font-semibold">
      <div>
      Campaign total <span class="ml-4">{{ props.campaignTotal }}</span>
    </div>
    <button
      class="bg-blue-400 text-white rounded px-4 py-2"
      @click="emit('saveAndExport')"
    >
      Save and Export
    </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  campaignTotal: {
    type: Number,
    default: 0,
  },
})

const emit = defineEmits(['saveAndExport'])
</script>

