<template>
  <div
    class="
      text-sm
      font-medium
      text-center text-gray-500
      border-b border-gray-200
      dark:text-gray-400
      dark:border-gray-700
    "
  >
    <ul class="flex flex-wrap -mb-px">
      <li class="mr-2">
        <a
          class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
          >Run of Show</a
        >
      </li>
      <li class="mr-2">
        <a
          :class="{
            'border-blue-600 dark:border-blue-500': props.activeTab === 'episode-lock',
          }"
          class="inline-block p-4 border-b-2 rounded-t-lg active"
          aria-current="page"
          >Episode Lock</a
        >
      </li>
    </ul>
  </div>
</template>

<script setup>
const props = defineProps({
  activeTab: {
    type: String,
    required: true,
  },
});
</script>

<style lang="postcss"></style>
