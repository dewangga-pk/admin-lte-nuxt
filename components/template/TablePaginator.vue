<template>
  <Card>
    <template #content>
      <DataTable :value="tableData" paginator showGridlines  :rows="5" :rowsPerPageOptions="[5, 10, 20, 50]">
        <template #header>
          <span class="text-lg font-bold">Paginator</span>
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
</script>

<style scoped>

</style>