<template>
  <div>
    <aside class="main-sidebar sidebar-dark-primary elevation-4">
      <!-- Brand Logo -->
      <a href="#" class="brand-link">
        <img src="https://adminlte.io/themes/v3/dist/img/AdminLTELogo.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3" style="opacity: .8">
        <span class="brand-text font-weight-light">AdminLTE 3</span>
      </a>

      <!-- Sidebar -->
      <div class="sidebar">
        <!-- Sidebar user (optional) -->
        <div class="user-panel mt-3 pb-3 mb-3 d-flex">
          <div class="image">
            <img src="https://adminlte.io/themes/v3/dist/img/user2-160x160.jpg" class="img-circle elevation-2" alt="User Image">
          </div>
          <div class="info">
            <a href="#" class="d-block">Alexander Pierce</a>
          </div>
        </div>

        <!-- SidebarSearch Form -->
        <div class="form-inline">
          <div class="input-group" data-widget="sidebar-search">
            <input class="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search">
            <div class="input-group-append">
              <button class="btn btn-sidebar">
                <i class="fas fa-search fa-fw" />
              </button>
            </div>
          </div>
        </div>

        <!-- Sidebar Menu -->
        <nav class="mt-2">
          <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
            <li
              class="nav-item"
              v-for="menu in menus"
            >
              <a href="#" class="nav-link">
                <i
                  class="nav-icon"
                  :class="menu.icon"
                />
                <p>
                  {{ menu.title }}
                  <i
                    class="right fas fa-angle-left"
                    v-if="menu.sub_menu"
                  />
                </p>
              </a>
              <ul
                class="nav nav-treeview"
                v-if="menu.sub_menu"
              >
                <li
                  class="nav-item"
                  v-for="subMenu in menu.sub_menu"
                >
                  <a href="#" class="nav-link">
                    <i :class="subMenu.icon"/>
                    <p>{{ subMenu.title }}</p>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        <!-- /.sidebar-menu -->
      </div>
      <!-- /.sidebar -->
    </aside>
  </div>
</template>

<script setup lang="ts">
type Menu = {
  icon: string,
  title: string
  sub_menu?: Array<{
    icon: string,
    title: string
  }>
};

const menus = ref<Menu[]>([
  {
    icon: 'fas fa-tachometer-alt',
    title: 'Dashboard',
    sub_menu: [
      { icon: 'far fa-circle nav-icon', title: 'Dashboard v1'},
      { icon: 'far fa-circle nav-icon', title: 'Dashboard v2'},
      { icon: 'far fa-circle nav-icon', title: 'Dashboard v3'},
    ]
  },
  {
    icon: 'fas fa-th',
    title: 'Widgets'
  },
  {
    icon: 'fas fa-copy',
    title: 'Layout Options',
    sub_menu: [
      { icon: 'far fa-circle nav-icon', title: 'Top Navigation'},
      { icon: 'far fa-circle nav-icon', title: 'Top Navigation + Sidebar'},
      { icon: 'far fa-circle nav-icon', title: 'Boxed'},
      { icon: 'far fa-circle nav-icon', title: 'Fixed Sidebar'},
      { icon: 'far fa-circle nav-icon', title: 'Fixed Sidebar + Custom Area'},
      { icon: 'far fa-circle nav-icon', title: 'Fixed Navbar'},
      { icon: 'far fa-circle nav-icon', title: 'Fixed Footer'},
      { icon: 'far fa-circle nav-icon', title: 'Collapsed Sidebar'},
    ]
  },
  {
    icon: 'fas fa-chart-pie',
    title: 'Charts',
    sub_menu: [
      { icon: 'far fa-circle nav-icon', title: 'ChartJS'},
      { icon: 'far fa-circle nav-icon', title: 'Flot'},
      { icon: 'far fa-circle nav-icon', title: 'Inline'},
      { icon: 'far fa-circle nav-icon', title: 'uPlot'},
    ]
  },
  {
    icon: 'fas fa-tree',
    title: 'UI Elements',
    sub_menu: [
      { icon: 'far fa-circle nav-icon', title: 'General'},
      { icon: 'far fa-circle nav-icon', title: 'Icons'},
      { icon: 'far fa-circle nav-icon', title: 'Buttons'},
      { icon: 'far fa-circle nav-icon', title: 'Sliders'},
      { icon: 'far fa-circle nav-icon', title: 'Modals & Alerts'},
      { icon: 'far fa-circle nav-icon', title: 'Navbar & Tabs'},
      { icon: 'far fa-circle nav-icon', title: 'Timeline'},
      { icon: 'far fa-circle nav-icon', title: 'Ribbons'},
    ]
  },
  {
    icon: 'fas fa-edit',
    title: 'Forms',
    sub_menu: [
      { icon: 'far fa-circle nav-icon', title: 'General Elements'},
      { icon: 'far fa-circle nav-icon', title: 'Advanced Elements'},
      { icon: 'far fa-circle nav-icon', title: 'Editors'},
      { icon: 'far fa-circle nav-icon', title: 'Validation'}
    ]
  },
  {
    icon: 'fas fa-table',
    title: 'Tables',
    sub_menu: [
      { icon: 'far fa-circle nav-icon', title: 'Simple Tables'},
      { icon: 'far fa-circle nav-icon', title: 'DataTables'},
      { icon: 'far fa-circle nav-icon', title: 'jsGrid'},
    ]
  },
  {
    icon: 'far fa-calendar-alt',
    title: 'Calendar'
  },
  {
    icon: 'far fa-image',
    title: 'Gallery'
  },
  {
    icon: 'fas fa-columns',
    title: 'Kanban Board'
  },
  {
    icon: 'far fa-envelope',
    title: 'Mailbox',
    sub_menu: [
      { icon: 'far fa-circle nav-icon', title: 'Inbox'},
      { icon: 'far fa-circle nav-icon', title: 'Compose'},
      { icon: 'far fa-circle nav-icon', title: 'Read'},
    ]
  },
  {
    icon: 'fas fa-book',
    title: 'Pages',
    sub_menu: [
      { icon: 'far fa-circle nav-icon', title: 'Invoice'},
      { icon: 'far fa-circle nav-icon', title: 'Profile'},
      { icon: 'far fa-circle nav-icon', title: 'E-commerce'},
      { icon: 'far fa-circle nav-icon', title: 'Projects'},
      { icon: 'far fa-circle nav-icon', title: 'Project Add'},
      { icon: 'far fa-circle nav-icon', title: 'Project Edit'},
      { icon: 'far fa-circle nav-icon', title: 'Project Detail'},
      { icon: 'far fa-circle nav-icon', title: 'Contact'},
      { icon: 'far fa-circle nav-icon', title: 'FAQ'},
      { icon: 'far fa-circle nav-icon', title: 'Contact Us'},
    ]
  },
  {
    icon: 'far fa-plus-square',
    title: 'Extras',
    sub_menu: [
      { icon: 'far fa-circle nav-icon', title: 'Login v1'},
      { icon: 'far fa-circle nav-icon', title: 'Register v1'},
      { icon: 'far fa-circle nav-icon', title: 'Forgot Password v1'},
      { icon: 'far fa-circle nav-icon', title: 'Recover Password v1'},
      { icon: 'far fa-circle nav-icon', title: 'Login v2'},
      { icon: 'far fa-circle nav-icon', title: 'Register v2'},
      { icon: 'far fa-circle nav-icon', title: 'Forgot Password v2'},
      { icon: 'far fa-circle nav-icon', title: 'Recover Password v2'},
      { icon: 'far fa-circle nav-icon', title: 'LockScreen'},
      { icon: 'far fa-circle nav-icon', title: 'Legacy User Menu'},
      { icon: 'far fa-circle nav-icon', title: 'Languange Menu'},
      { icon: 'far fa-circle nav-icon', title: 'Error 404'},
      { icon: 'far fa-circle nav-icon', title: 'Error 500'},
      { icon: 'far fa-circle nav-icon', title: 'Pace'},
      { icon: 'far fa-circle nav-icon', title: 'Blank Page'},
      { icon: 'far fa-circle nav-icon', title: 'Starter Page'},
    ]
  },
  {
    icon: 'fas fa-search',
    title: 'Search',
    sub_menu: [
      { icon: 'far fa-circle nav-icon', title: 'Simple Search'},
      { icon: 'far fa-circle nav-icon', title: 'Enhanced'},
    ]
  },
  {
    icon: 'fas fa-ellipsis-h',
    title: 'Tabbed IFrame Plugin'
  },
  {
    icon: 'fas fa-file',
    title: 'Documentation'
  },
]);
</script>

<style scoped>

</style>