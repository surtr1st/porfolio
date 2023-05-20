<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import Grid from './Grid.vue'
import Flex from './Flex.vue'

function handleScrollNext(e: Event) {
  // Prevent default scroll behavior
  e.preventDefault()

  // Determine the direction of scroll (up or down)
  const delta = (e as WheelEvent).deltaY

  // Calculate the height of each section
  const sectionHeight = window.innerHeight

  // Calculate the scroll amount
  const scrollAmount = delta > 0 ? sectionHeight : -sectionHeight

  // Scroll to the next section
  window.scrollTo({
    top: window.pageYOffset + scrollAmount,
    behavior: 'smooth',
  })
}

onMounted(() => {
  window.addEventListener('wheel', handleScrollNext)
})
onUnmounted(() => {
  window.removeEventListener('wheel', handleScrollNext)
})
</script>

<template>
  <nav
    class="fixed right-6 top-[114px] rounded-[50px] z-50 bg-neutral-950 w-[40px] h-[648px] transition-all ease-out-better opacity-5 hover:right-7 hover:ease-in-better hover:opacity-30 hover:cursor-pointer"
  >
    <Flex class="justify-center items-center flex-col">
      <div
        v-for="section in 6"
        :key="section"
        class="m-1 bg-indigo-600 w-[32px] h-[100px] rounded-[50px]"
      >
        <Grid class="place-items-center">
          <h3>{{ section }}</h3>
        </Grid>
      </div>
    </Flex>
  </nav>
</template>
