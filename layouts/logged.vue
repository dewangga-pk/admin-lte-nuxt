<template>
  <div class="wrapper">
    <AppTopnav />
    <AppSidebar />
    <div class="content-wrapper">
      <slot />
    </div>
    <AppFooter />
  </div>
</template>
<script setup lang="ts">
useHead({
  bodyAttrs:{
    class: 'sidebar-mini layout-fixed'
  }
})
</script>