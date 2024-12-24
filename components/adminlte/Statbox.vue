<template>
  <div>
    <div class="small-box" :class="props.bgColor">
      <div class="inner">
        <h3>{{ props.stat }}</h3>

        <p>{{ props.title }}</p>
      </div>
      <div class="icon">
        <i :class="props.icon"></i>
      </div>
      <a :href="props.hrefTo" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></a>
    </div>
  </div>
</template>

<script setup lang="ts">
type Props = {
  bgColor?: 'bg-info' | 'bg-success' | 'bg-warning' | 'bg-danger',
  hrefTo?: string,
  stat?: string,
  title?: string,
  icon?: string;
};

const props = withDefaults(defineProps<Props>(), {
  bgColor: 'bg-info',
  hrefTo: '#',
  stat: '150',
  title: 'New Orders',
  icon: 'ion ion-bag'
});
</script>

<style scoped>

</style>