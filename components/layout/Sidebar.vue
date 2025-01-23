<template>
  <div>
    <aside class="fixed top-0 bottom-0 left-0 float-none shadow-2xl bg-grayDark h-screen overflow-y-hidden z-[1038] w-64 transition-margin-width duration-300 ease-in-out text-white/70 flex flex-col">
      <!-- Brand Logo -->
      <a href="#" class="text-white/80 hover:text-white w-full block border-b border-gray-600 text-xl whitespace-nowrap px-2 py-3">
        <img
          src="https://adminlte.io/themes/v3/dist/img/AdminLTELogo.png"
          alt="AdminLTE Logo"
          class="opacity-80 float-left ml-3 mr-2 leading-3 -mt-0.5 max-h-8 w-auto shadow-lg rounded-full align-middle"
          style="opacity: .8"
        >
        <span class="font-light">AdminLTE 3</span>
      </a>

      <!-- Sidebar -->
      <div class="py-0 px-2 overflow-y-scroll" style="scrollbar-color: #a9a9a9 transparent;">
        <!-- Sidebar user (optional) -->
        <div class="border-b border-gray-600 overflow-hidden whitespace-nowrap relative pb-4 my-4 flex">
          <div class="inline-block pl-3">
            <img
              src="https://adminlte.io/themes/v3/dist/img/user2-160x160.jpg" 
              class="rounded-full align-middle h-auto w-8 shadow-md" 
              alt="User Image"
            >
          </div>
          <div class="inline-block py-1 pr-1 pl-2 overflow-hidden whitespace-nowrap">
            <a href="#" class="block hover:text-white">Alexander Pierce</a>
          </div>
        </div>

        <!-- SidebarSearch Form -->
        <div class="flex flex-row items-center">
          <div class="w-full flex-nowrap relative flex items-stretch">
            <input 
              class="rounded-r-none bg-grayDark-400/15 border border-gray-600 text-white relative flex-auto w-[1%] min-w-0 mb-0 h-[calc(2.25rem + 2px)] py-1 px-3 font-normal leading-6 rounded-l shadow-inner focus:outline-none"
              type="search"
              placeholder="Search" 
              aria-label="Search"
            >
            <div class="-ml-[1px] flex">
              <button class="rounded-l-none rounded-r cursor-pointer bg-grayDark-400/15 border border-gray-600 text-white inline-block text-center align-middle text-base py-1 px-3">
                <i class="fas fa-search fa-fw" />
              </button>
            </div>
          </div>
        </div>

        <!-- Sidebar Menu -->
        <PanelMenu :model="menus" multiple class="mt-2" unstyled>
         <template #item="{ item }">
            <a
              v-ripple
              class="relative mb-0.5 rounded block py-2 px-4 hover:cursor-pointer"
              :class="getMenuClass(item)"
            >
              <i :class="[item.icon, 'text-[1.1rem] ml-[0.05rem] mr-1.5 text-center w-6']" />
              <span class="inline m-0 whitespace-normal"  >{{ item.label }}</span>
              <i v-if="item.items" class="absolute right-4 top-[0.7rem] fas fa-angle-left" />
            </a>
          </template>
        </PanelMenu>
        <!-- /.sidebar-menu -->
      </div>
      <!-- /.sidebar -->
    </aside>
  </div>
</template>

<script setup lang="ts">
type Menu = {
  icon: string,
  label: string,
  route_path?: string,
  route_name?: string,
  items?: Array<{
    icon: string,
    label: string,
    submenu_route_path?: string,
    submenu_route_name?: string,
  }>
};

const menus = ref<Menu[]>([
  {
    icon: 'fas fa-tachometer-alt',
    label: 'Dashboard',
    route_path: '/',
    route_name: 'index',
    items: [
      { icon: 'far fa-circle nav-icon', label: 'Dashboard v1', submenu_route_name: 'index', submenu_route_path: '/'},
      { icon: 'far fa-circle nav-icon', label: 'Dashboard v2'},
      { icon: 'far fa-circle nav-icon', label: 'Dashboard v3'},
    ]
  },
  {
    icon: 'fas fa-th',
    label: 'Widgets'
  },
  {
    icon: 'fas fa-copy',
    label: 'Layout Options',
    items: [
      { icon: 'far fa-circle nav-icon', label: 'Top Navigation'},
      { icon: 'far fa-circle nav-icon', label: 'Top Navigation + Sidebar'},
      { icon: 'far fa-circle nav-icon', label: 'Boxed'},
      { icon: 'far fa-circle nav-icon', label: 'Fixed Sidebar'},
      { icon: 'far fa-circle nav-icon', label: 'Fixed Sidebar + Custom Area'},
      { icon: 'far fa-circle nav-icon', label: 'Fixed Navbar'},
      { icon: 'far fa-circle nav-icon', label: 'Fixed Footer'},
      { icon: 'far fa-circle nav-icon', label: 'Collapsed Sidebar'},
    ]
  },
  {
    icon: 'fas fa-chart-pie',
    label: 'Charts',
    items: [
      { icon: 'far fa-circle nav-icon', label: 'ChartJS'},
      { icon: 'far fa-circle nav-icon', label: 'Flot'},
      { icon: 'far fa-circle nav-icon', label: 'Inline'},
      { icon: 'far fa-circle nav-icon', label: 'uPlot'},
    ]
  },
  {
    icon: 'fas fa-tree',
    label: 'UI Elements',
    items: [
      { icon: 'far fa-circle nav-icon', label: 'General'},
      { icon: 'far fa-circle nav-icon', label: 'Icons'},
      { icon: 'far fa-circle nav-icon', label: 'Buttons'},
      { icon: 'far fa-circle nav-icon', label: 'Sliders'},
      { icon: 'far fa-circle nav-icon', label: 'Modals & Alerts'},
      { icon: 'far fa-circle nav-icon', label: 'Navbar & Tabs'},
      { icon: 'far fa-circle nav-icon', label: 'Timeline'},
      { icon: 'far fa-circle nav-icon', label: 'Ribbons'},
    ]
  },
  {
    icon: 'fas fa-edit',
    label: 'Forms',
    items: [
      { icon: 'far fa-circle nav-icon', label: 'General Elements'},
      { icon: 'far fa-circle nav-icon', label: 'Advanced Elements'},
      { icon: 'far fa-circle nav-icon', label: 'Editors'},
      { icon: 'far fa-circle nav-icon', label: 'Validation'}
    ]
  },
  {
    icon: 'fas fa-table',
    label: 'Tables',
    items: [
      { icon: 'far fa-circle nav-icon', label: 'Simple Tables'},
      { icon: 'far fa-circle nav-icon', label: 'DataTables'},
      { icon: 'far fa-circle nav-icon', label: 'jsGrid'},
    ]
  },
  {
    icon: 'far fa-calendar-alt',
    label: 'Calendar'
  },
  {
    icon: 'far fa-image',
    label: 'Gallery'
  },
  {
    icon: 'fas fa-columns',
    label: 'Kanban Board'
  },
  {
    icon: 'far fa-envelope',
    label: 'Mailbox',
    items: [
      { icon: 'far fa-circle nav-icon', label: 'Inbox'},
      { icon: 'far fa-circle nav-icon', label: 'Compose'},
      { icon: 'far fa-circle nav-icon', label: 'Read'},
    ]
  },
  {
    icon: 'fas fa-book',
    label: 'Pages',
    items: [
      { icon: 'far fa-circle nav-icon', label: 'Invoice'},
      { icon: 'far fa-circle nav-icon', label: 'Profile'},
      { icon: 'far fa-circle nav-icon', label: 'E-commerce'},
      { icon: 'far fa-circle nav-icon', label: 'Projects'},
      { icon: 'far fa-circle nav-icon', label: 'Project Add'},
      { icon: 'far fa-circle nav-icon', label: 'Project Edit'},
      { icon: 'far fa-circle nav-icon', label: 'Project Detail'},
      { icon: 'far fa-circle nav-icon', label: 'Contact'},
      { icon: 'far fa-circle nav-icon', label: 'FAQ'},
      { icon: 'far fa-circle nav-icon', label: 'Contact Us'},
    ]
  },
  {
    icon: 'far fa-plus-square',
    label: 'Extras',
    items: [
      { icon: 'far fa-circle nav-icon', label: 'Login v1'},
      { icon: 'far fa-circle nav-icon', label: 'Register v1'},
      { icon: 'far fa-circle nav-icon', label: 'Forgot Password v1'},
      { icon: 'far fa-circle nav-icon', label: 'Recover Password v1'},
      { icon: 'far fa-circle nav-icon', label: 'Login v2'},
      { icon: 'far fa-circle nav-icon', label: 'Register v2'},
      { icon: 'far fa-circle nav-icon', label: 'Forgot Password v2'},
      { icon: 'far fa-circle nav-icon', label: 'Recover Password v2'},
      { icon: 'far fa-circle nav-icon', label: 'LockScreen'},
      { icon: 'far fa-circle nav-icon', label: 'Legacy User Menu'},
      { icon: 'far fa-circle nav-icon', label: 'Languange Menu'},
      { icon: 'far fa-circle nav-icon', label: 'Error 404'},
      { icon: 'far fa-circle nav-icon', label: 'Error 500'},
      { icon: 'far fa-circle nav-icon', label: 'Pace'},
      { icon: 'far fa-circle nav-icon', label: 'Blank Page'},
      { icon: 'far fa-circle nav-icon', label: 'Starter Page'},
    ]
  },
  {
    icon: 'fas fa-search',
    label: 'Search',
    items: [
      { icon: 'far fa-circle nav-icon', label: 'Simple Search'},
      { icon: 'far fa-circle nav-icon', label: 'Enhanced'},
    ]
  },
  {
    icon: 'fas fa-ellipsis-h',
    label: 'Tabbed IFrame Plugin'
  },
  {
    icon: 'fas fa-file',
    label: 'Documentation'
  },
]);

const route = useRoute()
const currentRoute = ref(route.name)

const getMenuClass = (item:any) => {
  if (item.route_name && item.route_name === currentRoute.value) {
    return 'text-white bg-blue';
  } else if (item.submenu_route_name && item.submenu_route_name === currentRoute.value) {
    return 'bg-white/90 text-grayDark';
  } else {
    return 'hover:text-white hover:bg-gray-600/70';
  }
};
</script>

<style scoped>

</style>