<template>
  <div
    :class="[
      // Outer container
      'flex items-center p-2 rounded-md gap-2',
      props.shadow ? 'shadow-md' : 'border border-gray-200',
      props.filled ? colorClasses[colorVariant] : 'bg-white'
    ]"
  >
    <div
      :class="[
        'rounded text-white text-2xl flex items-center justify-center',
        // Only add the background color if not filled
        !props.filled && colorClasses[colorVariant],
        // If filled and size is 'lg', use a smaller icon container; otherwise, use the defined size class
        props.filled && props.size === 'lg' ? 'w-16 h-16' : sizeClasses[props.size]
      ]"
    >
      <slot name="icon" />
    </div>

    <!-- Text Content -->
    <div class="flex flex-col justify-around h-full flex-1">
      <span class="text-xs" :class="props.filled ? 'text-white' : 'text-gray-500'">
        {{ props.header }}
      </span>
      <span class="font-semibold text-base" :class="props.filled ? 'text-white' : 'text-gray-800'">
        {{ props.value }}
      </span>
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
  filled?: boolean;
  size?: 'md' | 'lg';
}

const props = withDefaults(defineProps<Props>(), {
  colorVariant: 'blue',
  shadow: false,
  header: '',
  value: '',
  filled: false,
  size: 'md',
});

const colorClasses: Record<string, string> = {
  blue: 'bg-blue-500',
  green: 'bg-green-500',
  red: 'bg-red-500',
  yellow: 'bg-yellow-400',
};

const sizeClasses: Record<string, string> = {
  md: 'w-16 h-16',
  lg: 'w-24 h-24',
};
</script>
