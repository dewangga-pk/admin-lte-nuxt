<template>
  <div class="wrapper">
    <AppTopnav />
    <AppSidebar />
    <div class="content-wrapper">
      <slot />
    </div>
  </div>
</template>
<script setup lang="ts">
useHead({
  bodyAttrs:{
    class: 'hold-transition sidebar-mini layout-fixed'
  }
})
</script>