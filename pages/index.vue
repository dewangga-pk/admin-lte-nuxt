
<template>
  <div class="pt-3">
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-3xl font-normal">Dashboard</h1>
      <div class="inline-flex items-center gap-2 text-sm text-gray-500">
        <NuxtLink to="/" class="text-blue-400">Home</NuxtLink>
        <span>/Dashboard</span>
      </div>
    </div>

    <div class="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-8 gap-4">
      <UiInfoBox
        v-for="item in infoBox"
        class="lg:col-span-2 col-span-1"
        :colorVariant="item.color"
        :shadow="item.shadow"
        :header="item.label"
        :value="item.value"
      >
        <template #icon>
          <i :class="item.icon" />
        </template>
      </UiInfoBox>

      <Card pt:body="p-3" class="col-span-full">
        <template #content>
          <div class="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-12 gap-2">
            <span class="col-span-full text-lg">Monthly Recap Report</span>
            <Divider class="col-span-full" />

            <div class="md:col-span-8 col-span-full">
              <span class="font-bold text-center block">Sales: 1 Jan, 2014 - 30 Jul, 2014</span>
              <Chart type="line" :data="chartData" :options="chartOptions" class="h-48" />
            </div>

            <div class="md:col-span-4 col-span-full flex flex-col gap-1">
              <span class="font-bold mb-1 text-center">Goal Completion</span>
              <template v-for="item in goalCompletion">
                <div class="flex justify-between">
                  <span>{{ item.label }}</span>
                  <small><b>{{ item.value }}</b>/{{ item.max }}</small>
                </div>
                <ProgressBar :value="(item.value/item.max)*100" :pt:value="`!${item.color}`" pt:label="!hidden" pt:root="!h-1.5" />
              </template>
            </div>

            <div v-for="item in recapInfo" class="md:col-span-3 sm:col-span-2 col-span-1  flex flex-col text-center md:border-r md:border-b-0 border-b">
              <span class="inline-flex gap-1 items-center justify-center">
                <i :class="[item.icon,item.color]" />
                {{ item.percentage }}
              </span>
              <b>{{ item.value }}</b>
              <span>{{ item.label }}</span>
            </div>
          </div>
        </template>
      </Card>

      <Card class="lg:col-span-5 col-span-1" style="height: min-content;" pt:body="!p-0">        
        <template #content>
          <Panel toggleable :collapsed="false" pt:header="!bg-gray-400">
            <template #header>
              Latest Orders 
            </template>
            <DataTable :value="tableData" paginator showGridlines  :rows="5" :rowsPerPageOptions="[5, 10, 20, 50]">
              <Column field="code" header="Code"></Column>
              <Column field="name" header="Name"></Column>
              <Column field="category" header="Category"></Column>
              <Column field="quantity" header="Quantity"></Column>
            </DataTable>
          </Panel>
        </template>
      </Card>

      <div class="lg:col-span-3 flex flex-col gap-4">
        <Card pt:body="!p-0" style="height: min-content;">
          <template #content>
            <Panel toggleable :collapsed="false" pt:header="!bg-gray-100">
              <template #header>
                Browser Usage
              </template>
              <Chart type="pie" :data="chartDataPie" :options="chartOptionsPie" class="w-full h-44 flex justify-center" />
              <template #footer>
                  <div class="flex flex-col gap-1">
                    <div class="flex justify-between border-b pb-2">
                      <span class="hover:text-blue-500 hover:cursor-pointer">United States of America</span>
                      <span class="inline-flex items-center text-red-500">
                        <i class="fas fa-arrow-down mr-2"/>
                        12%
                      </span>
                    </div>
                    <div class="flex justify-between border-b pb-2">
                      <span class="hover:text-blue-500 hover:cursor-pointer">India</span>
                      <span class="inline-flex items-center text-green-500">
                        <i class="fas fa-arrow-up mr-2"/>
                        4%
                      </span>
                    </div>
                    <div class="flex justify-between border-b pb-2">
                      <span class="hover:text-blue-500 hover:cursor-pointer">China</span>
                      <span class="inline-flex items-center text-yellow-500">
                        <i class="fas fa-arrow-left mr-2"/>
                        0%
                      </span>
                    </div>
                  </div>
              </template>
            </Panel>
          </template>
        </Card>
        <Card pt:body="!p-0" style="height: min-content;">
          <template #content>
            <Panel toggleable :collapsed="false" pt:header="!bg-gray-300" pt:footer="!bg-gray-100 hover:!bg-gray-300 hover:!cursor-pointer !rounded-b-md">
              <template #header>
                Recently Added Products
              </template>
              <div class="relative flex items-center gap-2 border-b pb-2 mb-2">
                <Image src="https://adminlte.io/themes/v3/dist/img/default-150x150.png" alt="Image" width="50" class="flex-shrink-0" />
                <div>
                  <span class="block font-semibold text-blue-500 hover:text-blue-600 hover:cursor-pointer">Samsung TV</span>
                  <small class="block">Samsung 32" 1080p 60Hz LED Smart HDTV.</small>
                </div>
                <Tag value="$1800" class="absolute right-0 top-1 !text-xs !bg-yellow-500" />
              </div>
              <div class="relative flex items-center gap-2 border-b pb-2 mb-2">
                <Image src="https://adminlte.io/themes/v3/dist/img/default-150x150.png" alt="Image" width="50" class="flex-shrink-0" />
                <div class="flex-1 truncate text-ellipsis">
                  <span class="block font-semibold text-blue-500 hover:text-blue-600 hover:cursor-pointer">Bicycle</span>
                  <small>26" Mongoose Dolomite Men's 7-speed, Navy Blue. Lorem ipsum dolor sit amet.</small>
                </div>
                <Tag value="$700" class="absolute right-0 top-1 !text-xs !bg-blue-500" />
              </div>
              <template #footer>
                  <span class="text-center block text-blue-500 hover:text-blue-600">View All Products</span>
              </template>
            </Panel>
          </template>
        </Card>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'dashboard',
});

const infoBox = ref([
  {
    color: 'blue',
    shadow: true,
    label: 'CPU Trafic',
    value: '10%',
    icon: 'fas fa-cog'
  },
  {
    color: 'red',
    shadow: true,
    label: 'Likes',
    value: '41,410',
    icon: 'fas fa-thumbs-up'
  },
  {
    color: 'green',
    shadow: true,
    label: 'Sales',
    value: '760',
    icon: 'fas fa-shopping-cart'
  },
  {
    color: 'yellow',
    shadow: true,
    label: 'New Members',
    value: '2,000',
    icon: 'fas fa-users'
  },
])
const goalCompletion = ref([
  {
    color: 'bg-blue-500',
    value: 160,
    max: 200,
    label: 'Add Products to Cart'
  },
  {
    color: 'bg-red-500',
    value: 310,
    max: 400,
    label: 'Complete Purchase'
  },
  {
    color: 'bg-green-500',
    value: 480,
    max: 800,
    label: 'Visit Premium Page'
  },
  {
    color: 'bg-yellow-500',
    value: 250,
    max: 500,
    label: 'Send Inquiries'
  }
])
const recapInfo = ref([
  {
    label: 'TOTAL REVENUE',
    value: '$35,210.43',
    icon: 'fas fa-caret-up',
    percentage: '17%',
    color: 'text-green-500'
  },
  {
    label: 'TOTAL COST',
    value: '$10,390.90',
    icon: 'fas fa-caret-left',
    percentage: '0%',
    color: 'text-yellow-500'
  },
  {
    label: 'TOTAL PROFIT',
    value: '$24,813.53',
    icon: 'fas fa-caret-up',
    percentage: '20%',
    color: 'text-green-500'
  },
  {
    label: 'GOAL COMPLETIONS',
    value: '1200',
    icon: 'fas fa-caret-down',
    percentage: '18%',
    color: 'text-red-500'
  }
])
// Table
const tableData = ref([
  { code: 'P001', name: 'Product One', category: 'Category A', quantity: 10 },
  { code: 'P002', name: 'Product Two', category: 'Category B', quantity: 20 },
  { code: 'P003', name: 'Product Three', category: 'Category A', quantity: 15 },
  { code: 'P004', name: 'Product Four', category: 'Category C', quantity: 30 },
  { code: 'P005', name: 'Product Five', category: 'Category B', quantity: 5 },
  { code: 'P006', name: 'Product Six', category: 'Category A', quantity: 12 },
  { code: 'P007', name: 'Product Seven', category: 'Category C', quantity: 25 },
  { code: 'P008', name: 'Product Eight', category: 'Category B', quantity: 18 },
  { code: 'P009', name: 'Product Nine', category: 'Category A', quantity: 7 },
  { code: 'P010', name: 'Product Ten', category: 'Category C', quantity: 22 },
  { code: 'P011', name: 'Product Eleven', category: 'Category B', quantity: 16 },
  { code: 'P012', name: 'Product Twelve', category: 'Category A', quantity: 9 },
  { code: 'P013', name: 'Product Thirteen', category: 'Category C', quantity: 28 },
  { code: 'P014', name: 'Product Fourteen', category: 'Category B', quantity: 14 },
  { code: 'P015', name: 'Product Fifteen', category: 'Category A', quantity: 11 },
])
// Chart
onMounted(() => {
    chartData.value = setChartData();
    chartOptions.value = setChartOptions();

    chartDataPie.value = setChartDataPie();
    chartOptionsPie.value = setChartOptionsPie();
});

const chartData = ref();
const chartOptions = ref();

const setChartData = () => {
    const documentStyle = getComputedStyle(document.documentElement);

    return {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'First Dataset',
                data: [65, 59, 80, 81, 56, 55, 10],
                fill: true,
                tension: 0.4,
                borderColor: documentStyle.getPropertyValue('--p-gray-500'),
                backgroundColor: 'rgba(107, 114, 128, 0.2)'
            },
            {
                label: 'Second Dataset',
                data: [28, 48, 40, 19, 86, 27, 90],
                fill: true,
                tension: 0.4,
                borderColor: documentStyle.getPropertyValue('--p-cyan-500'),
                backgroundColor: 'rgba(79, 152, 195, 0.2)'
            }
        ]
    };
};

const setChartOptions = () => {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColorSecondary = documentStyle.getPropertyValue('--p-text-muted-color');
    const surfaceBorder = documentStyle.getPropertyValue('--p-content-border-color');

    return {
        maintainAspectRatio: false,
        aspectRatio: 0.6,
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            x: {
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    color: surfaceBorder
                }
            },
            y: {
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    color: surfaceBorder
                }
            }
        }
    };
}

const chartDataPie = ref();
const chartOptionsPie = ref();

const setChartDataPie = () => {
    const documentStyle = getComputedStyle(document.body);

    return {
        labels: ['Chrome', 'IE', 'FireFox', 'Safari', 'Opera', 'Navigator'],
        datasets: [
            {
                data: [700, 500, 400, 600, 300, 100 ],
                backgroundColor: [
                  documentStyle.getPropertyValue('--p-orange-500'),
                  documentStyle.getPropertyValue('--p-green-500'),
                  documentStyle.getPropertyValue('--p-yellow-500'),
                  documentStyle.getPropertyValue('--p-cyan-500'), 
                  documentStyle.getPropertyValue('--p-sky-600'), 
                  documentStyle.getPropertyValue('--p-gray-500')
                ],
                hoverBackgroundColor: [
                  documentStyle.getPropertyValue('--p-orange-400'),
                  documentStyle.getPropertyValue('--p-green-400'),
                  documentStyle.getPropertyValue('--p-yellow-400'),
                  documentStyle.getPropertyValue('--p-cyan-400'), 
                  documentStyle.getPropertyValue('--p-sky-400'), 
                  documentStyle.getPropertyValue('--p-gray-400')
                ]
            }
        ]
    };
};

const setChartOptionsPie = () => {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--p-text-color');

    return {
        plugins: {
            legend: {
                labels: {
                    usePointStyle: true,
                    color: textColor
                },
                position: 'right',
                align: 'end'
            }
        }
    };
};
</script>

<style scoped>

</style>
