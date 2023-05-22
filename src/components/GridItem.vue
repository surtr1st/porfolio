<script setup lang="ts">
interface IGridItem {
  colSpan?:
    | 'col-span-1'
    | 'col-span-2'
    | 'col-span-3'
    | 'col-span-4'
    | 'col-span-5'
    | 'col-span-6'
    | 'col-span-full'

  rowSpan?:
    | 'row-span-1'
    | 'row-span-2'
    | 'row-span-3'
    | 'row-span-4'
    | 'row-span-5'
    | 'row-span-6'
    | 'row-span-full'
}
const { rowSpan, colSpan } = defineProps<IGridItem>()

const className = `${rowSpan} ${colSpan}`
</script>

<template>
  <div :class="className">
    <slot />
  </div>
</template>
