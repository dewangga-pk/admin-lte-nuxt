<template>
  <div>
    <section class="content">
      <div class="container-fluid">
        <!-- Stats Info -->
        <div class="row">
          <div class="col-lg-3 col-6" v-for="item in stats">
            <AdminlteStatbox
              :key="item.id"
              :bg-color="item.bgColor"
              :href-to="item.hrefTo"
              :stat="item.stat"
              :title="item.title"
              :icon="item.icon"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
type Stat = {
  id: number,
  bgColor: 'bg-info' | 'bg-success' | 'bg-warning' | 'bg-danger',
  hrefTo: string,
  stat: string,
  title: string,
  icon: string;
};

const stats = ref<Stat[]>([
  {
    id: 1,
    bgColor: 'bg-info',
    hrefTo: '#',
    stat: '150',
    title: 'New Orders',
    icon: 'ion ion-bag'
  },
  {
    id: 2,
    bgColor: 'bg-success',
    hrefTo: '#',
    stat: '53%',
    title: 'Bounce Rate',
    icon: 'ion ion-stats-bars'
  },
  {
    id: 3,
    bgColor: 'bg-warning',
    hrefTo: '#',
    stat: '44',
    title: 'User Registrations',
    icon: 'ion ion-person-add'
  },
  {
    id: 4,
    bgColor: 'bg-danger',
    hrefTo: '#',
    stat: '65',
    title: 'Unique Visitors',
    icon: 'ion ion-pie-graph'
  }
])
</script>

<style scoped>
</style>
