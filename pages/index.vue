
<template>
  <div>
    <DashboardHeader />
    <!-- <DashboardContent /> -->
    <div class="ml-64">
      <Button 
        label="Log Out"
        @click="() => signOut({ callbackUrl: '/login' })"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'dashboard',
});

const { signOut } = useAuth()
</script>

<style scoped>

</style>
