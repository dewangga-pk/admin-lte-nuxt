
<template>
  <div class="pt-3">
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-3xl font-normal">ChartJs</h1>
      <div class="inline-flex items-center gap-2 text-sm text-gray-500">
        <NuxtLink to="/" class="text-blue-400">Home</NuxtLink>
        <span>/Ui/</span>
        <span>ChartJs</span>
      </div>
    </div>

    <section class="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
      <TemplateChartArea />
      <TemplateChartLine />
      <TemplateChartDoughnut />
      <TemplateChartBasic />
      <TemplateChartPie />
      <TemplateChartStacked />
    </section>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'dashboard',
});
</script>

<style scoped>

</style>
