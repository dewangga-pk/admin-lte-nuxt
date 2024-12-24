<template>
  <div>
    <div class="card d-flex justify-content-center">
      <DatePicker v-model="date" inline showWeek style="width: 30rem;" />
    </div>
  </div>
</template>

<script setup lang="ts">
const date = ref();
</script>

<style>
.p-datepicker-weekday-cell{
  text-align: center;
}
</style>
