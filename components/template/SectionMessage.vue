<template>
  <section class="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
    <h2 class="text-xl font-semibold col-span-full">Message & Toast</h2>

    <Card class="col-span-2">
      <template #title>
        <h3 class="text-lg font-semibold">
          <i class="fas fa-exclamation-triangle" />
          Messages
        </h3>
      </template>
      <template #content>
        <div class="flex flex-col gap-2">
          <Message severity="success" closable>Success Message</Message>
          <Message severity="info" closable>Info Message</Message>
          <Message severity="warn" closable>Warn Message</Message>
          <Message severity="error" closable>Error Message</Message>
          <Message severity="secondary" closable>Secondary Message</Message>
          <Message severity="contrast" closable>Contrast Message</Message>
        </div>
      </template>
    </Card>

    <Card class="col-span-2">
      <template #title>
        <h3 class="text-lg font-semibold">
          <i class="fas fa-bullhorn" />
          Toast
        </h3>
      </template>
      <template #content>
        <Toast />
        <div class="flex flex-wrap gap-2">
            <Button label="Success" severity="success" @click="showSuccess" />
            <Button label="Info" severity="info" @click="showInfo" />
            <Button label="Warn" severity="warn" @click="showWarn" />
            <Button label="Error" severity="danger" @click="showError" />
            <Button label="Secondary" severity="secondary" @click="showSecondary" />
            <Button label="Contrast" severity="contrast" @click="showContrast" />
        </div>
      </template>
    </Card>
  </section>
</template>

<script setup lang="ts">
const toast = useToast();

const showSuccess = () => {
    toast.add({ severity: 'success', summary: 'Success Message', detail: 'Message Content', life: 3000 });
};

const showInfo = () => {
    toast.add({ severity: 'info', summary: 'Info Message', detail: 'Message Content', life: 3000 });
};

const showWarn = () => {
    toast.add({ severity: 'warn', summary: 'Warn Message', detail: 'Message Content', life: 3000 });
};

const showError = () => {
    toast.add({ severity: 'error', summary: 'Error Message', detail: 'Message Content', life: 3000 });
};

const showSecondary = () => {
    toast.add({ severity: 'secondary', summary: 'Secondary Message', detail: 'Message Content', life: 3000 });
};

const showContrast = () => {
    toast.add({ severity: 'contrast', summary: 'Contrast Message', detail: 'Message Content', life: 3000 });
};
</script>

<style scoped>

</style>