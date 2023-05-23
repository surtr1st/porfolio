<script setup lang="ts">
interface IGridItem {
  colSpan?: number | 'full'
  rowSpan?: number | 'full'
}
const { rowSpan, colSpan } = defineProps<IGridItem>()

const gridColSpan = `col-span-${colSpan}`
const gridRowSpan = `row-span-${rowSpan}`

const className = `${rowSpan ? gridRowSpan : ''} ${colSpan ? gridColSpan : ''}`
</script>

<template>
  <div :class="className">
    <slot />
  </div>
</template>
