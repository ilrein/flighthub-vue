<template>
  <div class="bg-white z-10 border border-gray-400 absolute w-24">
    <div class="flex flex-col">
      <p class="font-inter text-[10px]">Starting On</p>
      <div class="flex flex-row">
        <select>
          <option
            v-for="option in props.orderOptions"
            :key="option.value"
            :value="option.value"
            class="font-inter text-[10px]"
            v-text="option.label"
          />
        </select>
      </div>

      <p>Impressions</p>
      <input
        v-model="impressions"
        type="number"
        :max="props.maxImpressions"
        min="0"
      />
      <button @click="add">Add</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from "vue";
import { ref } from "vue";

const props = defineProps({
  orderOptions: {
    type: Array as PropType<{ label: string; value: string }[]>,
    default: () => [],
  },
  maxImpressions: {
    type: Number,
    default: 0,
  },
});

const emit = defineEmits(["add"]);

const impressions = ref(0);

const add = () => {
  emit("add", {
    impressions: impressions.value,
  });
};
</script>
