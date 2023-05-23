<script setup lang="ts">
interface IGrid {
  cols?: number
  rows?: number
}
const { rows, cols } = defineProps<IGrid>()

const gridCols = `grid-cols-${rows}`
const gridRows = `grid-rows-${cols}`

const className = `grid ${cols ? gridCols : ''} ${rows ? gridRows : ''}`
</script>

<template>
  <div :class="className">
    <slot />
  </div>
</template>
