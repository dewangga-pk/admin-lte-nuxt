<template>
  <Card>
    <template #content>
      <DataTable :value="tableData" showGridlines  stripedRows>
        <template #header>
          <span class="text-lg font-bold">Sort</span>
        </template> 
        <Column field="code" header="Code" sortable style="width: 25%"></Column>
        <Column field="name" header="Name" sortable style="width: 25%"></Column>
        <Column field="category" header="Category" sortable style="width: 25%"></Column>
        <Column field="quantity" header="Quantity" sortable style="width: 25%"></Column>
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
  { code: 'P005', name: 'Product Five', category: 'Category B', quantity: 5 }
])
</script>

<style scoped>

</style>