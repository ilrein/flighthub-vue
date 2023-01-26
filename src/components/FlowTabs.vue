<template>
  <div
    class="text-sm font-medium text-center border-b"
  >
    <ul class="flex flex-wrap -mb-px">
      <li class="mr-2">
        <a
          :class="props.activeTab === 'run-of-show' ? 'active' : 'not-active'"
          class="inline-block p-4 border-b-2 border-transparent rounded-t-lg cursor-pointer"
          >Run of Show</a
        >
      </li>
      <li class="mr-2">
        <a
          :class="props.activeTab === 'episode-lock' ? 'active' : 'not-active'"
          class="inline-block p-4 border-b-2 border-transparent rounded-t-lg cursor-pointer text-gray-300"
          aria-current="page"
          >Episode Lock</a
        >
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  activeTab: {
    type: String,
    required: true,
  },
});
</script>

<style lang="postcss" scoped>
.not-active {
  @apply hover:text-gray-600 hover:border-gray-300;
}

.active {
  @apply border-blue-600 text-blue-600;
}
</style>
