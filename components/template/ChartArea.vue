<template>
  <Card pt:body="!p-0" style="height: min-content;">
    <template #content>
        <Panel toggleable :collapsed="false" pt:header="!bg-blue-500 !text-white">
          <template #header>
            Area Chart
          </template>
          <Chart type="line" :data="chartData" :options="chartOptions" class="h-72"  />
        </Panel>
    </template>
  </Card>
</template>

<script setup lang="ts">
onMounted(() => {
    chartData.value = setChartData();
    chartOptions.value = setChartOptions();
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
    const textColor = documentStyle.getPropertyValue('--p-text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--p-text-muted-color');
    const surfaceBorder = documentStyle.getPropertyValue('--p-content-border-color');

    return {
        maintainAspectRatio: false,
        aspectRatio: 0.6,
        plugins: {
            legend: {
                labels: {
                    color: textColor
                }
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
</script>

<style scoped>

</style>