<template>
  <div>
    <section class="content">
      <div class="container-fluid">
        <!-- Stats Info -->
        <div class="row">
          <div class="col-lg-3 col-6" v-for="item in stats">
            <AdminlteStatbox
              :key="item.id"
              :bg-color="item.bgColor"
              :href-to="item.hrefTo"
              :stat="item.stat"
              :title="item.title"
              :icon="item.icon"
            />
          </div>
        </div>

        <div class="row">
          <section class="col-lg-7">
            <ClientOnly>
              <div class="card">
                <div class="card-header">
                  <h3 class="card-title">
                    <i class="fas fa-chart-pie mr-1"></i>
                    Sales
                  </h3>
                  <div class="card-tools">
                    <ul class="nav nav-pills ml-auto">
                      <li class="nav-item">
                        <a class="nav-link active" href="#revenue-chart" data-toggle="tab">Area</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#sales-chart" data-toggle="tab">Donut</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="card-body">
                  <div class="tab-content p-0">
                    <div class="chart tab-pane active" id="revenue-chart" style="position: relative; height: 300px;">
                      <Chart type="line" :data="chartData" :options="chartOptions" style="height: 300px;" />
                    </div>
                    <div class="chart tab-pane" id="sales-chart" style="position: relative; height: 300px;">
                      <div class="d-flex justify-content-center">
                        <Chart type="doughnut" :data="chartDataDoughnut" :options="chartOptionsDoughnut" style="width: 300px;" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ClientOnly>

            <div class="card direct-chat direct-chat-primary">
              <div class="card-header">
                <h3 class="card-title">Direct Chat</h3>

                <div class="card-tools">
                  <span title="3 New Messages" class="badge badge-primary">3</span>
                  <button type="button" class="btn btn-tool" data-card-widget="collapse">
                    <i class="fas fa-minus"></i>
                  </button>
                  <button type="button" class="btn btn-tool" title="Contacts" data-widget="chat-pane-toggle">
                    <i class="fas fa-comments"></i>
                  </button>
                  <button type="button" class="btn btn-tool" data-card-widget="remove">
                    <i class="fas fa-times"></i>
                  </button>
                </div>
              </div>
              <div class="card-body">
                <div class="direct-chat-messages">
                  <div
                    class="direct-chat-msg"
                    v-for="item in messages"
                    :key="item.id"
                    :class="item.current_user ? 'right' : ''"
                  >
                    <div class="direct-chat-infos clearfix">
                      <span
                        class="direct-chat-name"
                        :class="item.current_user ? 'float-right' : 'float-left'"
                      >
                        {{ item.user_name }}
                      </span>
                      <span
                        class="direct-chat-timestamp"
                        :class="item.current_user ? 'float-left' : 'float-right'"
                      >
                        {{ item.time_stamp }}
                      </span>
                    </div>
                    <img class="direct-chat-img" :src="item.avatar" alt="message user image">
                    <div class="direct-chat-text">
                      {{ item.message }}
                    </div>
                  </div>
                </div>

                <div class="direct-chat-contacts">
                  <ul class="contacts-list">
                    <li v-for="contact in contacts" :key="contact.id">
                      <a href="#">
                        <img class="contacts-list-img" :src="contact.avatar" alt="User Avatar">

                        <div class="contacts-list-info">
                          <span class="contacts-list-name">
                            {{ contact.user_name }}
                            <small class="contacts-list-date float-right">{{ contact.time_stamp }}</small>
                          </span>
                          <span class="contacts-list-msg">{{ contact.last_message }}</span>
                        </div>
                        <!-- /.contacts-list-info -->
                      </a>
                    </li>
                  </ul>
                </div>

                <div class="card-footer">
                  <form action="#" method="post">
                    <div class="input-group">
                      <input type="text" name="message" placeholder="Type Message ..." class="form-control">
                      <span class="input-group-append">
                        <button type="button" class="btn btn-primary">Send</button>
                      </span>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div class="card">
              <div class="card-header">
                <h3 class="card-title">
                  <i class="ion ion-clipboard mr-1" />
                  To Do List
                </h3>

                <div class="card-tools">
                  <Paginator
                    :totalRecords="3"
                    :rows="1"
                    template="FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
                  ></Paginator>
                </div>
              </div>

              <div class="card-body">
                <ul class="todo-list" data-widget="todo-list">
                  <li v-for="todo in todos" :key="todo.id">
                    <!-- checkbox -->
                    <div  class="icheck-primary d-inline ml-2">
                      <input type="checkbox" value="" name="todo1" id="todoCheck1" :checked="todo.isDone">
                      <label for="todoCheck1"></label>
                    </div>
                    <!-- todo text -->
                    <span class="text">{{ todo.content }}</span>
                    <!-- Emphasis label -->
                    <small class="badge badge-danger"><i class="far fa-clock" /> {{ todo.timeLeft }}</small>
                    <!-- General tools such as edit or delete-->
                    <div class="tools">
                      <i class="fas fa-edit" />
                      <i class="fas fa-trash" />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// Init
type Stat = {
  id: number,
  bgColor: 'bg-info' | 'bg-success' | 'bg-warning' | 'bg-danger',
  hrefTo: string,
  stat: string,
  title: string,
  icon: string;
};
type Chat = {
  id: number,
  current_user: boolean,
  user_name: string,
  time_stamp: string,
  avatar: string,
  message: string
}
type Contact = {
  id: number,
  avatar: string,
  user_name: string,
  time_stamp: string,
  last_message: string
}
type Todo = {
  id: number,
  isDone: boolean,
  content: string,
  timeLeft: string
}

const stats = ref<Stat[]>([
  {
    id: 1,
    bgColor: 'bg-info',
    hrefTo: '#',
    stat: '150',
    title: 'New Orders',
    icon: 'ion ion-bag'
  },
  {
    id: 2,
    bgColor: 'bg-success',
    hrefTo: '#',
    stat: '53%',
    title: 'Bounce Rate',
    icon: 'ion ion-stats-bars'
  },
  {
    id: 3,
    bgColor: 'bg-warning',
    hrefTo: '#',
    stat: '44',
    title: 'User Registrations',
    icon: 'ion ion-person-add'
  },
  {
    id: 4,
    bgColor: 'bg-danger',
    hrefTo: '#',
    stat: '65',
    title: 'Unique Visitors',
    icon: 'ion ion-pie-graph'
  }
]);

// Line Chart
const chartData = ref();
const chartOptions = ref();        
const setChartData = () => {
    return {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Digital Goods',
                data: [28, 48, 40, 19, 86, 27, 90],
                fill: true,
                backgroundColor: 'rgba(60,141,188,0.9)',
                borderColor: 'rgba(60,141,188,0.8)',
                tension: 0.4,
                pointRadius: false
            },
            {
                label: 'Electronics',
                data: [65, 59, 80, 81, 56, 55, 40],
                fill: true,
                backgroundColor: 'rgba(210, 214, 222, 1)',
                borderColor: 'rgba(210, 214, 222, 1)',
                tension: 0.4,
                pointRadius: false,
                pointStrokeColor: '#c1c7d1',
            }
        ]
    };
};
const setChartOptions = () => {
    return {
      maintainAspectRatio: false,
      aspectRatio: 0.6,
      plugins: {
          legend: {
              display: false
          }
      },
    };
};

// Doughnut Chart
const chartDataDoughnut = ref();
const chartOptionsDoughnut = ref();
const setChartDataDoughnut = () => {
    const documentStyle = getComputedStyle(document.body);

    return {
        labels: ['A', 'B', 'C'],
        datasets: [
            {
                data: [540, 325, 702],
                backgroundColor: [documentStyle.getPropertyValue('--p-cyan-500'), documentStyle.getPropertyValue('--p-orange-500'), documentStyle.getPropertyValue('--p-gray-500')],
                hoverBackgroundColor: [documentStyle.getPropertyValue('--p-cyan-400'), documentStyle.getPropertyValue('--p-orange-400'), documentStyle.getPropertyValue('--p-gray-400')]
            }
        ]
    };
};
const setChartOptionsDoughnut = () => {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--p-text-color');

    return {
      responsive: true,
      aspectRatio: 1,
      plugins: {
          legend: {
              labels: {
                  cutout: '60%',
                  color: textColor
              }
          }
      }
    };
};

//Messages
const messages = ref<Chat[]>([
  {
    id: 1,
    current_user: true,
    user_name: 'Alexander Pierce',
    time_stamp: '23 Jan 2:00 pm',
    avatar: 'https://adminlte.io/themes/v3/dist/img/user1-128x128.jpg',
    message: "Is this template really for free? That's unbelievable!"
  },
  {
    id: 2,
    current_user: false,
    user_name: 'Sarah Bullock',
    time_stamp: '23 Jan 2:05 pm',
    avatar: 'https://adminlte.io/themes/v3/dist/img/user3-128x128.jpg',
    message: 'You better believe it!'
  }
]);
// Contacts
const contacts = ref<Contact[]>([
  {
    id: 1,
    avatar: 'https://adminlte.io/themes/v3/dist/img/user1-128x128.jpg',
    user_name: 'Count Dracula',
    time_stamp: '2/28/2015',
    last_message: 'How have you been? I was...'
  },
  {
    id: 2,
    avatar: 'https://adminlte.io/themes/v3/dist/img/user7-128x128.jpg',
    user_name: 'Sarah Doe',
    time_stamp: '2/23/2015',
    last_message: 'I will be waiting for...'
  },
  {
    id: 3,
    avatar: 'https://adminlte.io/themes/v3/dist/img/user3-128x128.jpg',
    user_name: 'Nadia Jolie',
    time_stamp: '2/20/2015',
    last_message: "I'll call you back at..."
  },
])
// Todos
const todos = ref<Todo[]>([
  {
    id: 1,
    isDone: false,
    content: 'Design a nice theme',
    timeLeft: '2 mins'
  },
  {
    id: 2,
    isDone: true,
    content: 'Let theme shine like a star ',
    timeLeft: '1 month'
  }
])

//Life-Cycle
onMounted(() => {
    chartData.value = setChartData();
    chartOptions.value = setChartOptions();

    chartDataDoughnut.value = setChartDataDoughnut();
    chartOptionsDoughnut.value = setChartOptionsDoughnut();
});
</script>

<style scoped>
</style>
