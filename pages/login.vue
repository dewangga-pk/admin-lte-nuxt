<template>
  <div class="border-t-[3px] border-blue-500 rounded-t-lg">
    <Card>
      <template #header>
        <div class="text-center border-b py-5">
          <h1 class="text-3xl font-bold">Admin<span class="font-normal">LTE</span></h1>
        </div>
      </template>
      <template #content>
        <p class="text-center mb-5 p-0">Sign in to start your session</p>
        <AuthLoginForm />
        <div class="mt-4 text-left">
          <a href="#" class="text-blue-500 hover:text-blue-600 text-sm">I forgot my password</a>
          <br>
          <a href="#" class="text-blue-500 hover:text-blue-600 text-sm">Register a new membership</a>
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'auth',
  auth: {
    navigateAuthenticatedTo: '/'
  }
});
</script>

<style scoped>

</style>