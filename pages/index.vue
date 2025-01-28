
<template>
  <div>
    <!-- <DashboardHeader /> -->
    <!-- <DashboardContent /> -->
    <div>
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
