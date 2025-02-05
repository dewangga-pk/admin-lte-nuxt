<template>
  <section class="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
    <h2 class="text-xl font-semibold col-span-full">Accordion & Carousel</h2>

    <Card class="col-span-2">
      <template #title>
        <h3 class="text-lg font-semibold">
          Collapsible Accordion
        </h3>
      </template>
      <template #content>
        <Accordion :value="['0']">
            <AccordionPanel value="0">
                <AccordionHeader>Header I</AccordionHeader>
                <AccordionContent>
                    <p class="m-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </AccordionContent>
            </AccordionPanel>
            <AccordionPanel value="1">
                <AccordionHeader>Header II</AccordionHeader>
                <AccordionContent>
                    <p class="m-0">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                        ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
                    </p>
                </AccordionContent>
            </AccordionPanel>
            <AccordionPanel value="2">
                <AccordionHeader>Header III</AccordionHeader>
                <AccordionContent>
                    <p class="m-0">
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa
                        qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                    </p>
                </AccordionContent>
            </AccordionPanel>
        </Accordion>
      </template>
    </Card>

    <Card class="col-span-2" pt:body="!p-0.5">
      <template #title>
        <h3 class="text-lg font-semibold px-4 pt-5">
          Carousel
        </h3>
      </template>
      <template #content>
        <Carousel circular :value="products" :numVisible="2" :numScroll="1" :responsiveOptions="responsiveOptions" pt:root="!p-0">
            <template #item="slotProps">
                <div class="border border-surface-200 dark:border-surface-700 rounded m-2  p-4">
                    <div class="mb-4">
                        <div class="relative mx-auto">
                            <img :src="'https://primefaces.org/cdn/primevue/images/product/' + slotProps.data.image" :alt="slotProps.data.name" class="w-full rounded" />
                            <Tag 
                              :value="slotProps.data.inventoryStatus"
                              :severity="getSeverity(slotProps.data.inventoryStatus)" 
                              class="absolute" style="left:5px; top: 5px"/>
                        </div>
                    </div>
                    <div class="mb-4 font-medium">{{ slotProps.data.name }}</div>
                    <div class="flex justify-between items-center">
                        <div class="mt-0 font-semibold text-base">${{ slotProps.data.price }}</div>
                        <span>
                            <Button icon="far fa-heart" severity="secondary" outlined />
                            <Button icon="fas fa-shopping-cart" class="ml-2"/>
                        </span>
                    </div>
                </div>
            </template>
        </Carousel>
      </template>
    </Card>

    <Card class="col-span-full">
      <template #title>
        Paginator
      </template>
      <template #content>
        <Paginator :rows="10" :totalRecords="120" :rowsPerPageOptions="[10, 20, 30]"></Paginator>
      </template>
    </Card>
  </section>
</template>

<script setup lang="ts">
const products = ref([
  { id: 1, image: 'chakra-bracelet.jpg', name: 'Product 1', inventoryStatus: 'INSTOCK', price: 49 },
  { id: 2, image: 'bamboo-watch.jpg', name: 'Product 2', inventoryStatus: 'LOWSTOCK', price: 89 },
  { id: 3, image: 'black-watch.jpg', name: 'Product 3', inventoryStatus: 'INSTOCK', price: 35 },
  { id: 4, image: 'blue-band.jpg', name: 'Product 4', inventoryStatus: 'OUTOFSTOCK', price: 120 },
  { id: 5, image: 'blue-t-shirt.jpg', name: 'Product 5', inventoryStatus: 'INSTOCK', price: 99 },
  { id: 6, image: 'bracelet.jpg', name: 'Product 6', inventoryStatus: 'LOWSTOCK', price: 75 },
])
const responsiveOptions = ref([
    { breakpoint: '1400px', numVisible: 2, numScroll: 1 },
    { breakpoint: '1024px', numVisible: 1, numScroll: 1 },
    { breakpoint: '768px', numVisible: 1, numScroll: 1 }
])

const getSeverity = (status:'INSTOCK' | 'LOWSTOCK' | 'OUTOFSTOCK'):'success' | 'warn' | 'danger' | undefined => {
    switch (status) {
        case 'INSTOCK':
            return 'success';
        case 'LOWSTOCK':
            return 'warn';
        case 'OUTOFSTOCK':
            return 'danger';
        default:
            return undefined;
    }
}
</script>

<style scoped>

</style>