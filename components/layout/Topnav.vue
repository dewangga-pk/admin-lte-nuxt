<template>
  <header
    class="fixed top-0 right-0 h-14 bg-white border-b flex items-center justify-between px-4 z-40"
    :class="[ 'transition-all duration-300',
    {
      // Desktop view (>= 1024px)
      'lg:left-[4.5rem]': isSidebarCollapsed && !isSmallScreen,
      'lg:left-64': !isSidebarCollapsed && !isSmallScreen,
      // Tablet/Mobile view (< 1024px)
      'left-0': isSmallScreen
    }
  ]">
    <div class="flex items-center gap-4">
      <button class="p-2 rounded-lg hover:bg-gray-100 text-gray-600" @click="handleToggleSidebar">
        <i class="fas fa-bars"/>
      </button>
      <div class="md:flex items-center text-sm hidden">
        <span>Home</span>
        <i class="fas fa-angle-right text-xs mx-2"/>
        <span class="text-gray-500">Dashboard</span>
      </div>
    </div>

    <div class="flex items-center gap-2">
      <div class="relative mr-4 hidden lg:block">
        <span>
          <i class="fas fa-search absolute top-0 left-0 bottom-0 inline-flex items-center justify-center w-8 rounded-l-lg text-gray-300" />
          <input 
            type="text" 
            class="bg-gray-100 text-gray-700 pl-8 pr-4 py-1.5 rounded-lg w-64" 
            placeholder="Search">
        </span>
      </div>

      <div class="flex items-center gap-2">
        <button class="relative p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg" @click="messagesCount = 0">
          <i class="fas fa-envelope"/>
          <span v-if="messagesCount > 0" class="absolute top-0 right-0 -mt-1 -mr-1 px-1.5 py-0.5 text-xs bg-red-500 text-white rounded-full">{{ messagesCount }}</span>
        </button>
        <button class="relative p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg" @click="notificationsCount = 0">
          <i class="fas fa-bell"/>
          <span v-if="notificationsCount > 0" class="absolute top-0 right-0 -mt-1 -mr-1 px-1.5 py-0.5 text-xs bg-red-500 text-white rounded-full">{{ notificationsCount }}</span>
        </button>
        <button class="relative p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg">
          <i class="fas fa-flag"/>
          <span class="absolute top-0 right-0 -mt-1 -mr-1 px-1.5 py-0.5 text-xs bg-red-500 text-white rounded-full">9</span>
        </button>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
// Emits
const emit = defineEmits(['toggle-sidebar']);

// State
const messagesCount = ref<number>(4);
const notificationsCount = ref<number>(10);
const isSidebarCollapsed = inject('isSidebarCollapsed', ref(false));
const isSmallScreen = inject('isSmallScreen', ref(false));

// Methods
const handleToggleSidebar = () => {
  emit('toggle-sidebar');
};
</script>