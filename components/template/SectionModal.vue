<template>
  <section class="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
    <h2 class="text-xl font-semibold col-span-full">Modal Dialog</h2>

    <Card>
      <template #title>
        Confirm Dialog
      </template>
      <template #content>
        <Toast />
        <h3 class="text-lg font-semibold mb-2">Basic</h3>
        <ConfirmDialog />
        <div class="card flex flex-wrap gap-2 justify-center">
            <Button @click="confirm1()" label="Save" outlined></Button>
            <Button @click="confirm2()" label="Delete" severity="danger" outlined></Button>
        </div>
        <Divider />

        <h3 class="text-lg font-semibold mb-2">Position</h3>
        <ConfirmDialog group="positioned" />
        <div class="flex flex-wrap justify-center gap-2 mb-4">
            <Button @click="confirmPosition('left')" icon="fas fa-arrow-right" label="Left" severity="secondary"></Button>
            <Button @click="confirmPosition('right')" icon="fas fa-arrow-left" label="Right" severity="secondary"></Button>
        </div>
        <div class="flex flex-wrap justify-center gap-2 mb-4">
            <Button @click="confirmPosition('top')" icon="fas fa-arrow-down" label="Top" severity="secondary"></Button>
            <Button @click="confirmPosition('bottom')" icon="fas fa-arrow-up" label="Bottom" severity="secondary"></Button>
        </div>
        <Divider />

        <h3 class="text-lg font-semibold mb-2">Template</h3>
        <ConfirmDialog group="templating">
          <template #message="slotProps">
            <div class="flex flex-col items-center w-full gap-4 border-b border-surface-200 dark:border-surface-700">
              <i :class="slotProps.message.icon" class="!text-6xl text-primary-500"></i>
              <p>{{ slotProps.message.message }}</p>
            </div>
          </template>
        </ConfirmDialog>
        <div class="card flex justify-center">
            <Button @click="showTemplate()" label="Save"></Button>
        </div>
        <Divider />

        <h3 class="text-lg font-semibold mb-2">Headless</h3>
        <ConfirmDialog group="headless">
          <template #container="{ message, acceptCallback, rejectCallback }">
            <div class="flex flex-col items-center p-8 bg-surface-0 dark:bg-surface-900 rounded">
              <div class="rounded-full bg-primary text-primary-contrast inline-flex justify-center items-center h-24 w-24 -mt-20">
                <i class="pi pi-question text-5xl"></i>
              </div>
              <span class="font-bold text-2xl block mb-2 mt-6">{{ message.header }}</span>
              <p class="mb-0">{{ message.message }}</p>
              <div class="flex items-center gap-2 mt-6">
                <Button label="Save" @click="acceptCallback"></Button>
                <Button label="Cancel" outlined @click="rejectCallback"></Button>
              </div>
            </div>
          </template>
        </ConfirmDialog>
        <div class="card flex justify-center">
          <Button @click="requireConfirmation()" label="Save"></Button>
        </div>
      </template>
    </Card>
  </section>
</template>

<script setup lang="ts">
type PositionType = "center" | "top" | "bottom" | "left" | "right" | "topleft" | "topright" | "bottomleft" | "bottomright" | undefined
const confirm = useConfirm();
const toast = useToast();

const confirm1 = () => {
    confirm.require({
        message: 'Are you sure you want to proceed?',
        header: 'Confirmation',
        icon: 'fas fa-exclamation-triangle',
        rejectProps: {
            label: 'Cancel',
            severity: 'secondary',
            outlined: true
        },
        acceptProps: {
            label: 'Save'
        },
        accept: () => {
            toast.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
        },
        reject: () => {
            toast.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
        }
    });
};
const confirm2 = () => {
    confirm.require({
        message: 'Do you want to delete this record?',
        header: 'Danger Zone',
        icon: 'fas fa-info-circle',
        rejectLabel: 'Cancel',
        rejectProps: {
            label: 'Cancel',
            severity: 'secondary',
            outlined: true
        },
        acceptProps: {
            label: 'Delete',
            severity: 'danger'
        },
        accept: () => {
            toast.add({ severity: 'info', summary: 'Confirmed', detail: 'Record deleted', life: 3000 });
        },
        reject: () => {
            toast.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
        }
    });
};
const confirmPosition = (position:PositionType) => {
    confirm.require({
        group: 'positioned',
        message: 'Are you sure you want to proceed?',
        header: 'Confirmation',
        icon: 'fas fa-info-circle',
        position: position,
        rejectProps: {
            label: 'Cancel',
            severity: 'secondary',
            text: true
        },
        acceptProps: {
            label: 'Save',
            text: true
        },
        accept: () => {
            toast.add({ severity: 'info', summary: 'Confirmed', detail: 'Request submitted', life: 3000 });
        },
        reject: () => {
            toast.add({ severity: 'error', summary: 'Rejected', detail: 'Process incomplete', life: 3000 });
        }
    });
};
const showTemplate = () => {
    confirm.require({
        group: 'templating',
        header: 'Confirmation',
        message: 'Please confirm to proceed moving forward.',
        icon: 'fas fa-exclamation-circle',
        rejectProps: {
            label: 'Cancel',
            icon: 'pi pi-times',
            outlined: true,
            size: 'small'
        },
        acceptProps: {
            label: 'Save',
            icon: 'pi pi-check',
            size: 'small'
        },
        accept: () => {
            toast.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
        },
        reject: () => {
            toast.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
        }
    });
};
const requireConfirmation = () => {
    confirm.require({
        group: 'headless',
        header: 'Are you sure?',
        message: 'Please confirm to proceed.',
        accept: () => {
            toast.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
        },
        reject: () => {
            toast.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
        }
    });
};
</script>

<style scoped>

</style>