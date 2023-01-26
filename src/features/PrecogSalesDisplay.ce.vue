<template>
  <div class="font-poppins">
    <FlowTabs active-tab="run-of-show" />
    <div class="grid">
      <TargetPanel />
    </div>
  </div>
</template>

<script setup lang="ts">
import FlowTabs from '../components/FlowTabs.vue'
import TargetPanel from '../components/TargetPanel.vue';
</script>

<style lang='postcss'>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
