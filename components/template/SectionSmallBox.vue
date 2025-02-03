<template>
  <section class="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
    <h2 class="text-xl font-semibold col-span-full">Small Box</h2>
    <UiSmallBox />

    <UiSmallBox colorVariant="green">
      <template #value>53%</template>
      <template #label>Bounce Rate</template>
      <template #icon>
        <i class="ion ion-stats-bars" />
      </template>
    </UiSmallBox>

    <UiSmallBox colorVariant="yellow">
      <template #value>44</template>
      <template #label>User Registrations</template>
      <template #icon>
        <i class="fas fa-user-plus" />
      </template>
    </UiSmallBox>

    <UiSmallBox colorVariant="red">
      <template #value>65</template>
      <template #label>Unique Visitors</template>
      <template #icon>
        <i class="fas fa-chart-pie" />
      </template>
    </UiSmallBox>
  </section>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>