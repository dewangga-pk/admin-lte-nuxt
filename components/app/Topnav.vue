<template>
  <div>
    <nav class="main-header navbar navbar-expand navbar-white navbar-light">
      <!-- Left navbar links -->
      <ul class="navbar-nav">
        <ClientOnly>
          <li class="nav-item">
            <a class="nav-link" data-widget="pushmenu" href="#" role="button">
              <i class="fas fa-bars" />
            </a>
          </li>
        </ClientOnly>
        <li class="nav-item d-none d-sm-inline-block">
          <a href="#" class="nav-link">Home</a>
        </li>
        <li class="nav-item d-none d-sm-inline-block">
          <a href="#" class="nav-link">Contact</a>
        </li>
      </ul>

      <!-- Right navbar links -->
      <ul class="navbar-nav ml-auto">
        <!-- Navbar Search -->
        <li class="nav-item">
          <a class="nav-link" data-widget="navbar-search" href="#" role="button">
            <i class="fas fa-search"/>
          </a>
          <div class="navbar-search-block">
            <form class="form-inline">
              <div class="input-group input-group-sm">
                <input class="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search">
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
        <li class="nav-item dropdown">
          <a class="nav-link" data-toggle="dropdown" href="#">
            <i class="far fa-comments" />
            <span class="badge badge-danger navbar-badge">3</span>
          </a>
          <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
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
        <li class="nav-item dropdown">
          <a class="nav-link" data-toggle="dropdown" href="#">
            <i class="far fa-bell" />
            <span class="badge badge-warning navbar-badge">15</span>
          </a>
          <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
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
        <li class="nav-item">
          <a class="nav-link" data-widget="fullscreen" href="#" role="button">
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
</script>

<style scoped>

</style>