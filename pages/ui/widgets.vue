
<template>
  <div class="pt-3">
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-3xl font-normal">Widgets</h1>
      <div class="inline-flex items-center gap-2 text-sm text-gray-500">
        <NuxtLink to="/" class="text-blue-400">Home</NuxtLink>
        <span>/</span>
        <span>Widgets</span>
      </div>
    </div>

    <h2 class="text-xl font-semibold mb-4">Info Box</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <UiBaseInfoBox colorVariant="blue" :shadow="true" header="Messages" :value="1410">
        <template #icon>
          <i class="fas fa-envelope"></i>
        </template>
      </UiBaseInfoBox>

      <UiBaseInfoBox colorVariant="green" :shadow="true" header="Bookmarks" :value="410">
        <template #icon>
          <i class="fas fa-bookmark"></i>
        </template>
      </UiBaseInfoBox>

      <UiBaseInfoBox colorVariant="yellow" header="Uploads" :value="13648">
        <template #icon>
          <i class="fas fa-file-upload"></i>
        </template>
      </UiBaseInfoBox>

      <UiBaseInfoBox colorVariant="red" :shadow="true" header="Likes" :value="93139">
        <template #icon>
          <i class="fas fa-star"></i>
        </template>
      </UiBaseInfoBox>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'dashboard',
});
</script>

<style scoped>

</style>
