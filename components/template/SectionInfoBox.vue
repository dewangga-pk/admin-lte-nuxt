<template>
  <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
    <h2 class="text-xl font-semibold col-span-full">Info Box</h2>

    <UiInfoBox colorVariant="blue" :shadow="true" header="Messages" :value="1410">
      <template #icon>
        <i class="fas fa-envelope" />
      </template>
    </UiInfoBox>

    <UiInfoBox colorVariant="green" :shadow="true" header="Bookmarks" :value="410">
      <template #icon>
        <i class="fas fa-bookmark"/>
      </template>
    </UiInfoBox>

    <UiInfoBox colorVariant="yellow" header="Uploads" :value="13648">
      <template #icon>
        <i class="fas fa-file-upload"/>
      </template>
    </UiInfoBox>

    <UiInfoBox colorVariant="red" :shadow="true" header="Likes" :value="93139">
      <template #icon>
        <i class="fas fa-star"/>
      </template>
    </UiInfoBox>

    <h2 class="text-xl font-semibold col-span-full">Info Box <strong>Filled</strong></h2>

    <UiInfoBox :filled="true" header="Bookmarks" :value="41410" size="lg">
      <template #icon>
        <i class="fas fa-star"/>
      </template>
      <div class="w-full h-1 bg-gray-300 rounded-md">
        <span class="bg-white w-3/4 h-full block rounded-md" />
      </div>
      <small class="text-white">70% Increase in 30 Days</small>
    </UiInfoBox>

    <UiInfoBox color-variant="green" :filled="true" header="Likes" :value="41410" size="lg">
      <template #icon>
        <i class="fas fa-thumbs-up"/>
      </template>
      <div class="w-full h-1 bg-gray-300 rounded-md">
        <span class="bg-white w-3/4 h-full block rounded-md" />
      </div>
      <small class="text-white">70% Increase in 30 Days</small>
    </UiInfoBox>

    <UiInfoBox color-variant="yellow" :filled="true" header="Events" :value="41410" size="lg">
      <template #icon>
        <i class="far fa-calendar-alt"/>
      </template>
      <div class="w-full h-1 bg-gray-300 rounded-md">
        <span class="bg-white w-3/4 h-full block rounded-md" />
      </div>
      <small class="text-white">70% Increase in 30 Days</small>
    </UiInfoBox>

    <UiInfoBox color-variant="red" :filled="true" header="Comments" :value="41410" size="lg">
      <template #icon>
        <i class="fas fa-comments"/>
      </template>
      <div class="w-full h-1 bg-gray-300 rounded-md">
        <span class="bg-white w-3/4 h-full block rounded-md" />
      </div>
      <small class="text-white">70% Increase in 30 Days</small>
    </UiInfoBox>
  </section>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>