<template>
  <Card>
    <template #title> Confirm Dialog </template>
    <template #content>
      <Toast />
      <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
        <div class="grid grid-cols-1 gap-1">
          <h3 class="text-lg font-semibold mb-2 col-span-full">Basic</h3>
          <ConfirmDialog />
          <Button @click="confirm1()" label="Save" outlined></Button>
          <Button @click="confirm2()" label="Delete" severity="danger" outlined></Button>
        </div>

        <div class="grid grid-cols-2 gap-1">
          <h3 class="text-lg font-semibold mb-2 col-span-full">Position</h3>
          <ConfirmDialog group="positioned" />
          <Button @click="confirmPosition('left')" icon="fas fa-arrow-right" label="Left" severity="secondary" />
          <Button @click="confirmPosition('right')" icon="fas fa-arrow-left" label="Right" severity="secondary" />
          <Button @click="confirmPosition('top')" icon="fas fa-arrow-down" label="Top" severity="secondary" />
          <Button @click="confirmPosition('bottom')" icon="fas fa-arrow-up" label="Bottom" severity="secondary" />
        </div>

        <div class="grid grid-cols-1 gap-1">
          <h3 class="text-lg font-semibold mb-2 col-span-full">Template</h3>
          <ConfirmDialog group="templating">
            <template #message="slotProps">
              <div
                class="flex flex-col items-center w-full gap-4 border-b border-surface-200 dark:border-surface-700"
              >
                <i
                  :class="slotProps.message.icon"
                  class="!text-6xl text-primary-500"
                ></i>
                <p>{{ slotProps.message.message }}</p>
              </div>
            </template>
          </ConfirmDialog>
          <Button @click="showTemplate()" label="Template" />
        </div>

        <div class="grid grid-cols-1 gap-1">
          <h3 class="text-lg font-semibold mb-2 col-span-full">Headless</h3>
          <ConfirmDialog group="headless">
            <template #container="{ message, acceptCallback, rejectCallback }">
              <div class="flex flex-col items-center p-8 bg-surface-0 dark:bg-surface-900 rounded">
                <div class="rounded-full bg-primary text-primary-contrast inline-flex justify-center items-center h-24 w-24 -mt-20">
                  <i class="pi pi-question text-5xl" />
                </div>
                <span class="font-bold text-2xl block mb-2 mt-6">{{message.header}}</span>
                <p class="mb-0">{{ message.message }}</p>
                <div class="flex items-center gap-2 mt-6">
                  <Button
                    label="Save"
                    @click="acceptCallback"
                  ></Button>
                  <Button
                    label="Cancel"
                    outlined
                    @click="rejectCallback"
                  ></Button>
                </div>
              </div>
            </template>
          </ConfirmDialog>
          <Button @click="requireConfirmation()" label="Headless" severity="info"></Button>
        </div>
      </div>
    </template>
  </Card>
</template>

<script setup lang="ts">
type PositionType =
  | 'center'
  | 'top'
  | 'bottom'
  | 'left'
  | 'right'
  | 'topleft'
  | 'topright'
  | 'bottomleft'
  | 'bottomright'
  | undefined
const confirm = useConfirm()
const toast = useToast()

const confirm1 = () => {
  confirm.require({
    message: 'Are you sure you want to proceed?',
    header: 'Confirmation',
    icon: 'fas fa-exclamation-triangle',
    rejectProps: {
      label: 'Cancel',
      severity: 'secondary',
      outlined: true,
    },
    acceptProps: {
      label: 'Save',
    },
    accept: () => {
      toast.add({
        severity: 'info',
        summary: 'Confirmed',
        detail: 'You have accepted',
        life: 3000,
      })
    },
    reject: () => {
      toast.add({
        severity: 'error',
        summary: 'Rejected',
        detail: 'You have rejected',
        life: 3000,
      })
    },
  })
}
const confirm2 = () => {
  confirm.require({
    message: 'Do you want to delete this record?',
    header: 'Danger Zone',
    icon: 'fas fa-info-circle',
    rejectLabel: 'Cancel',
    rejectProps: {
      label: 'Cancel',
      severity: 'secondary',
      outlined: true,
    },
    acceptProps: {
      label: 'Delete',
      severity: 'danger',
    },
    accept: () => {
      toast.add({
        severity: 'info',
        summary: 'Confirmed',
        detail: 'Record deleted',
        life: 3000,
      })
    },
    reject: () => {
      toast.add({
        severity: 'error',
        summary: 'Rejected',
        detail: 'You have rejected',
        life: 3000,
      })
    },
  })
}
const confirmPosition = (position: PositionType) => {
  confirm.require({
    group: 'positioned',
    message: 'Are you sure you want to proceed?',
    header: 'Confirmation',
    icon: 'fas fa-info-circle',
    position: position,
    rejectProps: {
      label: 'Cancel',
      severity: 'secondary',
      text: true,
    },
    acceptProps: {
      label: 'Save',
      text: true,
    },
    accept: () => {
      toast.add({
        severity: 'info',
        summary: 'Confirmed',
        detail: 'Request submitted',
        life: 3000,
      })
    },
    reject: () => {
      toast.add({
        severity: 'error',
        summary: 'Rejected',
        detail: 'Process incomplete',
        life: 3000,
      })
    },
  })
}
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
      size: 'small',
    },
    acceptProps: {
      label: 'Save',
      icon: 'pi pi-check',
      size: 'small',
    },
    accept: () => {
      toast.add({
        severity: 'info',
        summary: 'Confirmed',
        detail: 'You have accepted',
        life: 3000,
      })
    },
    reject: () => {
      toast.add({
        severity: 'error',
        summary: 'Rejected',
        detail: 'You have rejected',
        life: 3000,
      })
    },
  })
}
const requireConfirmation = () => {
  confirm.require({
    group: 'headless',
    header: 'Are you sure?',
    message: 'Please confirm to proceed.',
    accept: () => {
      toast.add({
        severity: 'info',
        summary: 'Confirmed',
        detail: 'You have accepted',
        life: 3000,
      })
    },
    reject: () => {
      toast.add({
        severity: 'error',
        summary: 'Rejected',
        detail: 'You have rejected',
        life: 3000,
      })
    },
  })
}
</script>

<style scoped></style>
