<template>
  <div class="flex flex-row justify-end">
    <div class="flex flex-col">
      <div>
      Campaign total {{ props.campaignTotal }}
    </div>
    <button
      class="bg-blue-400 text-white rounded"
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

