<template>
  <section class="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
    <h2 class="text-xl font-semibold col-span-full">Tabs in Cards</h2>

    <Card class="col-span-full" pt:body="!p-0">
      <template #header>
        <div class="flex justify-between items-center px-4 py-3 border-b-2">
          <h3 class="text-lg">Tabs</h3>
          <div class="flex mb-2 gap-2 justify-end">
              <Button @click="value = '0'" label="Tab 1" class="!p-2" severity="contrast" :outlined="value !== '0'" />
              <Button @click="value = '1'" label="Tab 2" class="!p-2" severity="contrast" :outlined="value !== '1'" />
              <Button @click="value = '2'" label="Tab 3" class="!p-2" severity="contrast" :outlined="value !== '2'" />
          </div>
        </div>
      </template>
      <template #content>
        <Tabs v-model:value="value">
          <TabPanels>
            <TabPanel value="0">
              <p class="m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </TabPanel>
            <TabPanel value="1">
              <p class="m-0">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae vitae
                dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
                eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci
                velit, sed quia non numquam eius modi.
              </p>
            </TabPanel>
            <TabPanel value="2">
              <p class="m-0">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate non
                provident, similique sunt in culpa qui officia deserunt mollitia
                animi, id est laborum et dolorum fuga. Et harum quidem rerum
                facilis est et expedita distinctio. Nam libero tempore, cum soluta
                nobis est eligendi optio cumque nihil impedit quo minus.
              </p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </template>
    </Card>

    <h2 class="text-xl font-semibold col-span-full">Progress Bars</h2>
    <Card class="lg:col-span-2">
      <template #content>
        <div class="flex flex-col gap-2">
          <small>Base</small>
          <ProgressBar :value="90" pt:value="!bg-blue-500" />
          <small>.h-4</small>
          <ProgressBar :value="70" pt:value="!bg-green-500" pt:root="!h-4" />
          <small>.h-3.5</small>
          <ProgressBar :value="50" pt:value="!bg-yellow-500" pt:root="!h-3.5" />
          <small>.h-1</small>
          <ProgressBar :value="25" pt:value="!bg-red-500" pt:label="!hidden" pt:root="!h-1" />
        </div>
      </template>
    </Card>
  </section>
</template>

<script setup lang="ts">
const value = ref<string>('0')
</script>

<style scoped></style>
