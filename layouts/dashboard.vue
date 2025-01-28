<template>
  <div class="min-h-screen bg-gray-100">
    <LayoutTopnav 
      @toggle-sidebar="toggleSidebar"
    />
    <LayoutSidebar 
      :collapsed="isSidebarCollapsed" 
      :mobile-hidden="isSmallScreen && isSidebarCollapsed"
      @toggle-sidebar="toggleSidebar"
    />

    <!-- Overlay moved to dashboard layout -->
    <div 
      v-if="!isSidebarCollapsed && isSmallScreen" 
      class="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity"
      @click="toggleSidebar"
    />

    <!--  -->
    <div 
      class="pt-14 p-6"
      :class="[
        'transition-all duration-300',
        {
          // Desktop view (>= 1024px)
          'lg:ml-[4.5rem]': isSidebarCollapsed && !isSmallScreen,
          'lg:ml-64': !isSidebarCollapsed && !isSmallScreen,
          // Tablet/Mobile view (< 1024px)
          'ml-0': isSmallScreen && isSidebarCollapsed,
      }]"
    >
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
// Lifecycle hooks
onMounted(() => {
  // Check if small screen on mount and when window resizes
  checkScreenSize(); 
  window.addEventListener('resize', checkScreenSize);
});

onUnmounted(() => {
  window.removeEventListener('resize', checkScreenSize);
});

// States
const isSidebarCollapsed = ref(false);
const isSmallScreen = ref(false);

// Methods
const checkScreenSize = () => {
  // Now checking for tablet/mobile at 1024px
  isSmallScreen.value = window.innerWidth < 1024;
  // Auto collapse sidebar on small screens
  if (isSmallScreen.value) {
    isSidebarCollapsed.value = true;
  }
};

const toggleSidebar = () => {
  isSidebarCollapsed.value = !isSidebarCollapsed.value;
};

// Provide these values to child components
provide('isSidebarCollapsed', isSidebarCollapsed);
provide('isSmallScreen', isSmallScreen);
</script>
