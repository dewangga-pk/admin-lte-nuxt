<template>
  <div
    class="fixed left-0 top-0 h-screen bg-gray-800 text-white z-50 flex flex-col"
    :class="['transition-all duration-300',
      {
        // Desktop view (>= 1024px)
        'lg:w-[4.5rem]': props.collapsed && !props.mobileHidden,
        'lg:w-64': !props.collapsed && !props.mobileHidden,
        // Tablet/Mobile view (< 1024px)
        'w-64 transform': true,
        '-translate-x-full': props.mobileHidden,
        'translate-x-0': !props.mobileHidden
      }
  ]">
    <div class="p-4 border-b border-gray-700 flex items-center gap-3">
      <i class="fab fa-windows text-2xl" />
      <span class="text-xl font-bold text-white flex items-center gap-2" :class="[props.collapsed && 'hidden']">AdminLTE 3</span>
    </div>

    <div class="p-4 border-b border-gray-700 flex items-center gap-3">
      <img 
        src="https://adminlte.io/themes/v3/dist/img/user2-160x160.jpg" 
        class="w-8 h-8 rounded-full" 
        alt="User Image">
      <span :class="[props.collapsed && 'hidden']">Alexander Pierce</span>
    </div>

    <div class="p-4 border-b border-gray-700" :class="[props.collapsed && 'hidden']">
      <input 
        type="text" 
        class="w-full bg-gray-700 text-white px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" 
        placeholder="Search">
    </div>
    
    <div class="flex-1 overflow-y-auto custom-scrollbar">
      <nav class="mt-2">
        <template v-for="item in menuItems" :key="item.id">
          <!-- Section Header -->
          <div v-if="item.type === 'header'" class="px-4 py-2 text-xs font-bold text-gray-400 uppercase tracking-wider" :class="[props.collapsed && 'hidden']">
            {{ item.label }}
          </div>
          
          <!-- Menu Item -->
          <template v-else>
            <NuxtLink
              class="flex items-center gap-2 px-4 py-3 text-gray-300 hover:bg-gray-700 hover:text-white transition-colors cursor-pointer" 
              :to="item.route"
              :class="{ '!bg-blue-500 !text-white': isActive(item.id) }"
              @click="item.route ? false : toggleMenu(item.id)"
            >
              <i :class="['text-lg w-6', item.icon]" />
              <span :class="[props.collapsed && 'hidden']">{{ item.label }}</span>
              
              <!-- Badge if exists -->
              <span v-if="item.badge && !props.collapsed" 
                    :class="['ml-auto px-2 py-0.5 text-xs rounded-full', `badge-${item.badge.type}`]">
                {{ item.badge.text }}
              </span>
              
              <!-- Arrow icon for items with submenu -->
              <i v-if="item.children && !props.collapsed" 
                 class="fas fa-angle-right ml-auto transition-transform duration-200"
                 :class="{ 'rotate-90': expandedMenus.includes(item.id) }"/>
            </NuxtLink>

            <!-- Submenu -->
            <div 
              v-if="item.children && expandedMenus.includes(item.id)" 
              class="overflow-hidden transition-all duration-200"
            >
              <div class="bg-gray-900">
                <div 
                  v-for="child in item.children" 
                  :key="child.id" 
                  class="flex items-center gap-2 px-4 py-3 text-gray-300 hover:bg-gray-700 hover:text-white transition-colors cursor-pointer"
                >
                  <i :class="['text-lg w-6', child.icon]"/>
                  <span :class="[props.collapsed && 'hidden']">{{ child.label }}</span>
                </div>
              </div>
            </div>
          </template>
        </template>
      </nav>
    </div>
  </div>
</template>

<script lang="ts" setup>
// Props
interface Props {
  collapsed?: boolean;
  mobileHidden?: boolean;
}
const props = withDefaults(defineProps<Props>(), {
  collapsed: false,
  mobileHidden: false
});
// Emits
const emit = defineEmits(['toggle-sidebar']);

// Types
interface Badge {
  text: string;
  type: 'new' | 'info' | 'warning' | 'danger';
}

interface MenuItem {
  id: string;
  type?: 'header' | 'item';
  label: string;
  icon?: string;
  badge?: Badge;
  route?: string;
  children?: MenuItem[];
}

// State
const expandedMenus = ref<string[]>(['dashboard']);
const activeItem = ref<string>('dashboard');
const menuItems = ref<MenuItem[]>([
  {
    id: 'dashboard',
    type: 'item',
    label: 'Dashboard',
    icon: 'fas fa-tachometer-alt',
    children: [
      { id: 'dashboard-v1', label: 'Dashboard v1', icon: 'fas fa-circle' },
      { id: 'dashboard-v2', label: 'Dashboard v2', icon: 'fas fa-circle' },
      { id: 'dashboard-v3', label: 'Dashboard v3', icon: 'fas fa-circle' },
    ]
  },
  {
    id: 'widgets',
    type: 'item',
    label: 'Widgets',
    icon: 'fas fa-th-large',
    badge: { text: 'New', type: 'new' },
    route: '/ui/widgets'
  },
  {
    id: 'layout',
    type: 'item',
    label: 'Layout Options',
    icon: 'fas fa-copy',
    badge: { text: '6', type: 'info' }
  },
  {
    id: 'charts',
    type: 'item',
    label: 'Charts',
    icon: 'fas fa-chart-pie',
    children: [] // Add your chart submenu items here
  },
  {
    id: 'ui',
    type: 'item',
    label: 'UI Elements',
    icon: 'fas fa-laptop',
    children: [] // Add your UI submenu items here
  },
  {
    id: 'forms',
    type: 'item',
    label: 'Forms',
    icon: 'fas fa-edit',
    children: [] // Add your forms submenu items here
  },
  {
    id: 'tables',
    type: 'item',
    label: 'Tables',
    icon: 'fas fa-table',
    children: [] // Add your tables submenu items here
  },
  {
    id: 'examples-header',
    type: 'header',
    label: 'EXAMPLES'
  },
  {
    id: 'calendar',
    type: 'item',
    label: 'Calendar',
    icon: 'fas fa-calendar-alt',
    badge: { text: '2', type: 'info' }
  },
  {
    id: 'gallery',
    type: 'item',
    label: 'Gallery',
    icon: 'fas fa-images'
  }
]);

// Methods
function isActive(id: string): boolean {
  return activeItem.value === id;
}

function toggleMenu(id: string): void {
  const index = expandedMenus.value.indexOf(id);
  if (index === -1) {
    expandedMenus.value.push(id);
  } else {
    expandedMenus.value.splice(index, 1);
  }
}
</script>
<style scoped>
/* WebKit-based browsers (Chrome, Safari, Edge Chromium) */
.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: #2d3748; /* e.g., Tailwind's gray-800 */
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background-color: #4a5568; /* e.g., Tailwind's gray-600 */
  border-radius: 9999px;     /* fully rounded corners */
  border: 2px solid #2d3748; /* match the track background */
}

/* Firefox (limited customization) */
.custom-scrollbar {
  scrollbar-width: thin;
  scrollbar-color: #4a5568 #2d3748;
}
</style>