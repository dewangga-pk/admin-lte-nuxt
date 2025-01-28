<template>
  <div
  :class="[
      // Outer container
      'flex items-center p-2 rounded-md gap-2',
      props.shadow ? 'shadow-md' : 'border border-gray-200',
      'bg-white'
    ]"
  >
    <div
      :class="[
        'w-16 h-16 rounded text-white text-2xl flex items-center justify-center',
        colorClasses[colorVariant] || colorClasses['default']
      ]"
    >
      <slot name="icon"></slot>
    </div>

    <!-- Text Content -->
    <div class="flex flex-col justify-around h-full flex-1">
      <span class="text-xs text-gray-600">
        {{ props.header }}
      </span>
      <span class="font-semibold text-base">
        {{ props.value }}
      </span>
      <!-- Default slot (for extra info, like subtext or details) -->
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  colorVariant?: string;
  shadow?: boolean;
  header?: string;
  value?: string | number;
}

const props = withDefaults(defineProps<Props>(), {
  colorVariant: 'white',
  shadow: false,
  header: '',
  value: '',
});

const colorClasses: Record<string, string> = {
  white: 'bg-white',
  blue: 'bg-blue-500 text-white',
  green: 'bg-green-500 text-white',
  red: 'bg-red-500 text-white',
  yellow: 'bg-yellow-400 text-white',
};
</script>
