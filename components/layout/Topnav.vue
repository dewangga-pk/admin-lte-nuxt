<template>
  <div>
    <nav class="relative flex items-center p-2 flex-row flex-nowrap content-start border-b border-gray-600/15 z-[1034] bg-white ml-64 transition-margin-width duration-300 ease-in-out">
      <!-- Left navbar links -->
      <ul class="flex pl-0 mb-0 list-none flex-row text-opacity-50 text-black">
        <li class="list-item m-0">
          <a class="px-4 py-2 h-10 relative">
            <i class="fas fa-bars" />
          </a>
        </li>
        <li class="m-0 hidden sm:inline-block">
          <a href="#" class="px-4 py-2 h-10 relative">Home</a>
        </li>
        <li class="m-0 hidden sm:inline-block">
          <a href="#" class="px-4 py-2 h-10 relative">Contact</a>
        </li>
      </ul>

      <!-- Right navbar links -->
      <ul class="flex pl-0 mb-0 list-none ml-auto flex-row text-opacity-50 text-black">
        <!-- Navbar Search -->
        <li class="m-0 list-item">
          <a class="px-4 py-2 h-10 relative block cursor-pointer hover:text-black">
            <i class="fas fa-search"/>
          </a>
          <div class="flex content-center flex-col absolute px-4 left-0 right-0 top-0 bottom-0 z-10 bg-white">
            <form class="flex flex-row flex-wrap items-center mt-0">
              <div class="w-full relative flex flex-wrap items-stretch">
                <input class="py-1 px-2 rounded leading-3 relative flex-auto mb-0 min-w-0 w-[1%] inline-block align-middle border-r-0 border border-gray-600/15 outline-none bg-grayDark-50" type="search" placeholder="Search" aria-label="Search">
                <div class="input-group-append">
                  <button class="btn btn-navbar" type="submit">
                    <i class="fas fa-search" />
                  </button>
                  <button class="btn btn-navbar" type="button" data-widget="navbar-search">
                    <i class="fas fa-times" />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </li>

        <!-- Messages Dropdown Menu -->
        <li class="m-0 list-item">
          <a class="px-4 py-2 h-10 relative block cursor-pointer hover:text-black">
            <i class="far fa-comments" />
            <span class="badge badge-danger navbar-badge">3</span>
          </a>
          <div class="hidden dropdown-menu dropdown-menu-lg dropdown-menu-right">
            <template v-for="message in messages">
              <a href="#" class="dropdown-item">
                <!-- Message Start -->
                <div class="media">
                  <img :src="message.avatar" alt="User Avatar" class="img-size-50 img-circle mr-3">
                  <div class="media-body">
                    <h3 class="dropdown-item-title">
                      {{ message.user_name }}
                      <span
                        class="float-right text-sm"
                        :class="message.starred ? 'text-warning' : 'text-muted'"
                      >
                        <i class="fas fa-star" />
                      </span>
                    </h3>
                    <p class="text-sm">{{ message.message }}</p>
                    <p class="text-sm text-muted">
                      <i class="far fa-clock mr-1" /> {{ message.time_stamp }}
                    </p>
                  </div>
                </div>
                <!-- Message End -->
              </a>
              <div class="dropdown-divider" />
            </template>
            <a href="#" class="dropdown-item dropdown-footer">See All Messages</a>
          </div>
        </li>

        <!-- Notifications Dropdown Menu -->
        <li class="m-0 list-item">
          <a class="px-4 py-2 h-10 relative block cursor-pointer hover:text-black">
            <i class="far fa-bell" />
            <span class="badge badge-warning navbar-badge">15</span>
          </a>
          <div class="hidden dropdown-menu dropdown-menu-lg dropdown-menu-right">
            <span class="dropdown-item dropdown-header">15 Notifications</span>
            <div class="dropdown-divider"></div>
            <template v-for="notif in notifications">
              <a href="#" class="dropdown-item">
                <i class="fas mr-2"
                  :class="notif.notif_type === 'message' ? 'fa-envelope' : notif.notif_type === 'report' ? 'fa-file' : 'fa-users'" /> 
                  {{ notif.total }} new {{ notif.notif_type }}s
                <span class="float-right text-muted text-sm">
                  {{ notif.time_stamp }}
                </span>
              </a>
              <div class="dropdown-divider" />
            </template>
            <a href="#" class="dropdown-item dropdown-footer">See All Notifications</a>
          </div>  
        </li>
        <li class="m-0 list-item">
          <a class="px-4 py-2 h-10 relative block cursor-pointer hover:text-black">
            <i class="fas fa-expand-arrows-alt"></i>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup lang="ts">
type Message = {
  user_name : string,
  avatar: string,
  message: string,
  time_stamp: string,
  starred: boolean
};
type Notification = {
  notif_type : 'message' | 'friend request' | 'report',
  total: number,
  time_stamp: string
};

const messages = ref<Message[]>([
  {
    user_name: 'Brad Diesel',
    avatar: 'https://adminlte.io/themes/v3/dist/img/user1-128x128.jpg',
    message: 'Call me whenever you can...',
    time_stamp: '4 Hours Ago',
    starred: false,
  },
  {
    user_name: 'John Pierce',
    avatar: 'https://adminlte.io/themes/v3/dist/img/user8-128x128.jpg',
    message: 'I got your message bro',
    time_stamp: '4 Hours Ago',
    starred: false,
  },
  {
    user_name: 'Nora Silvester',
    avatar: 'https://adminlte.io/themes/v3/dist/img/user3-128x128.jpg',
    message: 'The subject goes here',
    time_stamp: '4 Hours Ago',
    starred: true
  }
])

const notifications = ref<Notification[]>([
  { notif_type: 'message', total: 4 , time_stamp: '3 mins'},
  { notif_type: 'friend request', total: 8, time_stamp: '12 hours'},
  { notif_type: 'report', total: 3, time_stamp: '2 days'}
])

const isSearch = ref<boolean>(false)
</script>

<style scoped>

</style>