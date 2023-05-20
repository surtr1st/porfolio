<script setup lang="ts">
interface IFlex {
  className?: string
}
defineProps<IFlex>();
</script>

<template>
  <div
    :class="'flex ' + className"
  >
    <slot />
  </div>
</template>
