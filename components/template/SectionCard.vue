<template>
  <section class="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
    <h2 class="text-xl font-semibold col-span-full">Cards</h2>

    <div>
      <Card>
        <template #title>Simple Card</template>
        <template #content>
          <p class="m-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
            sed consequuntur error repudiandae numquam deserunt quisquam
            repellat libero asperiores earum nam nobis, culpa ratione quam
            perferendis esse, cupiditate neque quas!
          </p>
        </template>
      </Card>
    </div>

    <div class="border-t-4 border-greeb-500 rounded-t-xl">
      <Card>
        <template #title>Simple Card</template>
        <template #content>
          <p class="m-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
            sed consequuntur error repudiandae numquam deserunt quisquam
            repellat libero asperiores earum nam nobis, culpa ratione quam
            perferendis esse, cupiditate neque quas!
          </p>
        </template>
      </Card>
    </div>

    <div>
      <Card pt:root="!bg-yellow-500 !text-white">
        <template #title>Simple Card</template>
        <template #content>
          <p class="m-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
            sed consequuntur error repudiandae numquam deserunt quisquam
            repellat libero asperiores earum nam nobis, culpa ratione quam
            perferendis esse, cupiditate neque quas!
          </p>
        </template>
      </Card>
    </div>

    <Card style="overflow: hidden">
      <template #header>
        <img
          alt="user header"
          src="https://primefaces.org/cdn/primevue/images/card-vue.jpg"
        />
      </template>
      <template #title>Advanced Card</template>
      <template #subtitle>Card subtitle</template>
      <template #content>
        <p class="m-0">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
          sed consequuntur error repudiandae numquam deserunt quisquam repellat
          libero asperiores earum nam nobis, culpa ratione quam perferendis
          esse, cupiditate neque quas!
        </p>
      </template>
      <template #footer>
        <div class="flex gap-4 mt-1">
          <Button
            label="Cancel"
            severity="secondary"
            outlined
            class="w-full"
          />
          <Button
            label="Save"
            class="w-full"
          />
        </div>
      </template>
    </Card>

    <h2 class="text-xl font-semibold col-span-full">Panel</h2>
    <Card pt:body="!p-0" style="height: min-content;">
      <template #content>
          <Panel toggleable :collapsed="false">
            <template #header>
                Toggleable
            </template>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              delectus eveniet recusandae quo soluta quam optio! Sunt reprehenderit
              ipsam similique.
            </p>
          </Panel>
      </template>
    </Card>

    <Card pt:body="!p-0" style="height: min-content;">
      <template #content>
          <Panel toggleable :collapsed="false" pt:header="!bg-blue-500 !text-white">
            <template #header>
                Toggleable
            </template>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              delectus eveniet recusandae quo soluta quam optio! Sunt reprehenderit
              ipsam similique.
            </p>
          </Panel>
      </template>
    </Card>

    <Card pt:body="!p-0" style="height: min-content;">
      <template #content>
          <Panel pt:header="!py-1 !px-4 !bg-yellow-500 !text-white">
            <template #header>
                Maximizable
            </template>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              delectus eveniet recusandae quo soluta quam optio! Sunt reprehenderit
              ipsam similique.
            </p>
            <Drawer v-model:visible="visible" header="Maximizable" position="full">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
                    delectus eveniet recusandae quo soluta quam optio! Sunt reprehenderit
                    ipsam similique.
                </p>
            </Drawer>
            <template #icons>
                <Button icon="fas fa-expand" severity="secondary" size="small" rounded text @click="visible = true" />
            </template>
          </Panel>
      </template>
    </Card>

    <BlockUI blocked>
        <Card pt:body="!p-0" style="height: min-content;">
          <template #content>
              <Panel toggleable :collapsed="false">
                <template #header>
                    Blocked
                </template>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
                  delectus eveniet recusandae quo soluta quam optio! Sunt reprehenderit
                  ipsam similique.
                </p>
              </Panel>
          </template>
        </Card>
    </BlockUI>
  </section>
</template>

<script setup lang="ts">
const visible = ref(false);
</script>

<style scoped></style>
