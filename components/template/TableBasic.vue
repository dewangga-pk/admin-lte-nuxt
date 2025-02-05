<template>
  <Card>
    <template #content>
      <DataTable :value="tableData">
        <template #header>
          <span class="text-lg font-bold">Basic</span>
        </template>
        <Column field="code" header="Code"></Column>
        <Column field="name" header="Name"></Column>
        <Column field="category" header="Category"></Column>
        <Column field="quantity" header="Quantity"></Column>
      </DataTable>
    </template>
  </Card>
</template>

<script setup lang="ts">
const tableData = ref([
  { code: 'P001', name: 'Product One', category: 'Category A', quantity: 10 },
  { code: 'P002', name: 'Product Two', category: 'Category B', quantity: 20 },
  { code: 'P003', name: 'Product Three', category: 'Category A', quantity: 15 },
  { code: 'P004', name: 'Product Four', category: 'Category C', quantity: 30 },
  { code: 'P005', name: 'Product Five', category: 'Category B', quantity: 5 },
  { code: 'P006', name: 'Product Six', category: 'Category A', quantity: 12 }
])
</script>

<style scoped>

</style>