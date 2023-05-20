<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import Flex from './Flex.vue'
import { state } from '../states'

const sections = ['intro', 'about', 'skills', 'workex', 'projects', 'contacts']

function handleScrollNext(e: WheelEvent) {
  // Prevent default scroll behavior
  e.preventDefault()

  // Determine the direction of scroll (up or down)
  const delta = e.deltaY

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

document.addEventListener('DOMContentLoaded', function () {
  const smoothScrollLinks = document.querySelectorAll('#section')

  // Attach click event listener to each smooth scroll link
  Array.from(smoothScrollLinks).forEach((link, index) => {
    link.addEventListener('click', (event) => {
      event.preventDefault()

      const targetId = link.getAttribute('href')
      const targetElement = document.querySelector(`${targetId}`)

      if (targetElement) {
        const targetNavigate = smoothScrollLinks[index]
        targetNavigate.classList.add('bg-indigo-600')
        targetElement.scrollIntoView({ behavior: 'smooth' })
      }
    })
  })
})

onMounted(() => {
  window.addEventListener('wheel', handleScrollNext, { passive: false })
})
onUnmounted(() => {
  window.removeEventListener('wheel', handleScrollNext)
})
</script>

<template>
  <nav
    class="fixed right-6 top-[114px] rounded-[50px] z-[1000] bg-neutral-950 w-[40px] h-[648px] transition-all ease-out-better opacity-5 hover:right-7 hover:ease-in-better hover:opacity-70 hover:cursor-pointer"
  >
    <Flex class="justify-center items-center flex-col">
      <a
        v-for="section in sections"
        id="section"
        :key="section"
        :href="'#' + section"
        class="m-1 w-[32px] h-[100px] rounded-[50px] transition-all hover:bg-indigo-900"
      />
    </Flex>
  </nav>
  <slot />
</template>
