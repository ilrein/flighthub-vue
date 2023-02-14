<template>
  <div ref="orderdropdown" class="bg-white z-10 border border-gray-400 absolute w-24 rounded py-1 px-2 top-0 font-inter text-[10px]">
    <div class="flex flex-col">
      <p class="">Starting On</p>
      <div class="flex flex-row border rounded">
        <select v-model="val" class="w-full ">
          <option
            v-for="option in props.orderOptions"
            :key="option.value"
            :value="option.value"
            v-text="option.label"
          />
        </select>
      </div>

      <p class="">Impressions</p>
      <input
        v-model="impressions"
        type="number"
        class="w-full border rounded"
        :max="props.maxImpressions"
        min="0"
      />
      <div class="flex flex-row-reverse w-full">
        <button class="bg-blue-400 text-white text-xs w-fit mt-1 px-2" @click="add">Add</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from "vue";
import { ref } from "vue";
import { onClickOutside } from "@vueuse/core";

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

const emit = defineEmits(["add", 'close']);

const impressions = ref(0);
const val = ref(props.orderOptions[0].value);

const add = () => {
  emit("add", {
    impressions: impressions.value,
    date: val.value,
  });
};

const orderdropdown = ref<HTMLElement | null>(null);
onClickOutside(orderdropdown, () => emit('close'));
</script>
