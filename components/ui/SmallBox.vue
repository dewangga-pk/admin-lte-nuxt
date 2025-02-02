<template>
  <div class="w-full rounded-lg shadow-md text-white flex flex-col gap-2"
    :class="props.colorVariant ? colorClasses[props.colorVariant] : 'bg-blue-500'"
  >
    <!-- Inner -->
    <div class="p-2.5 relative">
      <h3 class="mb-2.5 font-bold text-3xl">
        <slot name="value">150</slot>
      </h3>
      <p class="text-sm">
        <slot name="label">New Orders</slot>
      </p>
      <div class="absolute top-5 right-[15px] text-grayDark-500/30 transition-all duration-300 text-5xl">
        <slot name="icon">
          <i class="fas fa-shopping-cart" />
        </slot>
      </div>
    </div>
    <!-- More Info -->
    <a href="#" class="w-full p-0.5 rounded-b-lg text-center bg-grayDark-500/20 hover:bg-grayDark-500/30">
      More Info
      <i class="fas fa-arrow-circle-right" />
    </a>
  </div>
</template>

<script setup lang="ts">
interface Props {
  colorVariant?: string
}

const props = withDefaults(defineProps<Props>(), {
  colorVariant: 'blue'
})

const colorClasses: Record<string, string> = {
  blue: 'bg-blue-500',
  green: 'bg-green-500',
  red: 'bg-red-500',
  yellow: 'bg-yellow-400',
}
</script>

<style scoped>

</style>