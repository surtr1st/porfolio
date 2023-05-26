<script setup lang="ts">
import Page from '@/components/Page.vue'
import LightExtraHeading from '@/components/LightExtraHeading.vue'
import Flex from '@/components/Flex.vue'
import Grid from '@/components/Grid.vue'
import GridItem from '@/components/GridItem.vue'
import Paragraph from '@/components/Paragraph.vue'
import ScrollReveal from 'scrollreveal'
import { onMounted, ref } from 'vue'
import { langs, libs, dbs } from '@/data'

const buttonTitle = ref<string>('Programming Languages')
const skillSections = ref<string>('pls')
const hoverBox = ref<HTMLDivElement | null>(null)
const boxPositions = ref<NodeListOf<HTMLDivElement> | null>(null)
const sr = ScrollReveal({ delay: 10, reset: true })

function changeSection(title: string, next: string) {
  skillSections.value = title
  buttonTitle.value = next
}

function moveEvent() {
  if (!boxPositions.value) return

  boxPositions.value.forEach((box) => {
    if (box.matches(':hover')) {
      if (!hoverBox.value) return
      hoverBox.value.classList.add('toggle')
      hoverBox.value.style.top = `${box.offsetTop}px`
      hoverBox.value.style.left = `${box.offsetLeft}px`
    }
  })
}

onMounted(() => {
  sr.reveal('#my-skills-overall')
})
</script>

<template>
  <Page class="w-full bg-none relative">
    <Grid
      :rows="6"
      :cols="1"
      class="h-full"
    >
      <GridItem
        :row-span="1"
        col-span="full"
      >
        <div class="flex justify-center items-center h-full">
          <Transition
            appear
            name="fade-up"
          >
            <LightExtraHeading class="font-extrabold fancy hover:cursor-pointer"
              >MY SKILLS OVERALL</LightExtraHeading
            >
          </Transition>
        </div>
      </GridItem>
      <GridItem
        :row-span="3"
        col-span="full"
      >
        <Transition
          mode="out-in"
          name="slide-up"
        >
          <Flex
            v-if="skillSections === 'pls'"
            class="justify-evenly items-center h-full"
          >
            <div
              id="hover-box"
              ref="hoverBox"
              class="invisible absolute left-[800px] w-[150px] h-[150px] rounded-xl p-2 border border-none bg-sky-300 transition-all ease-smoother duration-700 delay-100"
            ></div>
            <div
              v-for="content in langs"
              id="my-skills-overall"
              ref="boxPositions"
              class="logo text-center grayscale w-[150px] h-[150px] rounded-xl p-2 border border-none bg-none transition-all hover:cursor-pointer hover:grayscale-0"
              @mouseenter="moveEvent"
            >
              <component :is="content.logo"></component>
              <Paragraph class="mt-1">{{ content.label }}</Paragraph>
            </div>
          </Flex>
          <Flex
            v-else-if="skillSections === 'libs'"
            class="justify-evenly items-center h-full"
          >
            <div
              v-for="content in libs"
              class="logo text-center grayscale w-[150px] h-[150px] rounded-xl p-2 border border-none bg-none transition-all hover:cursor-pointer hover:grayscale-0"
            >
              <component :is="content.logo"></component>
              <Paragraph class="mt-1">{{ content.label }}</Paragraph>
            </div>
          </Flex>
          <Flex
            v-else-if="skillSections === 'dbs'"
            class="justify-evenly items-center h-full"
          >
            <div
              v-for="content in dbs"
              class="logo text-center grayscale w-[150px] h-[150px] rounded-xl p-2 border border-none bg-none transition-all hover:cursor-pointer hover:grayscale-0"
            >
              <component :is="content.logo"></component>
              <Paragraph class="mt-1">{{ content.label }}</Paragraph>
            </div>
          </Flex>
        </Transition>
      </GridItem>
      <GridItem
        :row-span="2"
        col-span="full"
      >
        <Flex class="justify-evenly items-center h-full">
          <Transition mode="out-in">
            <button
              class="btn-29"
              v-if="buttonTitle === 'Programming Languages'"
              @click="changeSection('libs', 'Frameworks & Libraries')"
            >
              <span class="text-container">
                <span class="text">{{ buttonTitle }}</span>
              </span>
            </button>
            <button
              class="btn-29"
              v-else-if="buttonTitle === 'Frameworks & Libraries'"
              @click="changeSection('dbs', 'Databases')"
            >
              <span class="text-container">
                <span class="text">{{ buttonTitle }}</span>
              </span>
            </button>
            <button
              class="btn-29"
              v-else-if="buttonTitle === 'Databases'"
              @click="changeSection('pls', 'Programming Languages')"
            >
              <span class="text-container">
                <span class="text">{{ buttonTitle }}</span>
              </span>
            </button>
          </Transition>
        </Flex>
      </GridItem>
    </Grid>
  </Page>
</template>

<style scoped>
.logo svg {
  transition: transform 450ms cubic-bezier(0.62, -0.01, 0.09, 0.96);
}

.logo:hover svg {
  transform: translateY(-25%);
}

.logo p {
  transition: transform 450ms cubic-bezier(0.62, -0.01, 0.09, 0.96);
}

.logo:hover p {
  transform: scale(125%);
}

#hover-box.toggle {
  visibility: visible;
  animation: slide-fade-down 1000ms;
}

.btn-29,
.btn-29 *,
.btn-29 :after,
.btn-29 :before,
.btn-29:after,
.btn-29:before {
  border: 0 solid;
  box-sizing: border-box;
}
.btn-29 {
  -webkit-tap-highlight-color: transparent;
  -webkit-appearance: button;
  background-color: transparent;
  background-image: none;
  cursor: pointer;
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol,
    Noto Color Emoji;
  font-size: 100%;
  font-weight: 900;
  line-height: 1.5;
  margin: 0;
  -webkit-mask-image: -webkit-radial-gradient(#000, #fff);
  padding: 0;
  text-transform: uppercase;
}
.btn-29:disabled {
  cursor: default;
}
.btn-29:-moz-focusring {
  outline: auto;
}
.btn-29 svg {
  display: block;
  vertical-align: middle;
}
.btn-29 [hidden] {
  display: none;
}
.btn-29 {
  --tilt: 30px;
  display: grid;
  padding: 1.2rem 3rem;
  place-content: center;
}
.btn-29,
.btn-29 .text-container {
  overflow: hidden;
  position: relative;
}
.btn-29 .text-container {
  display: block;
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
}
.btn-29 .text {
  display: block;
  font-weight: 900;
  mix-blend-mode: difference;
  position: relative;
}
.btn-29:hover .text {
  -webkit-animation: move-right-alternate 0.3s cubic-bezier(0.62, -0.01, 0.09, 0.96) forwards;
  animation: move-right-alternate 0.3s cubic-bezier(0.62, -0.01, 0.09, 0.96) forwards;
}
@-webkit-keyframes move-right-alternate {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(80%);
  }
  51% {
    transform: translateX(-80%);
  }
  to {
    transform: translateX(0);
  }
}
@keyframes move-right-alternate {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(80%);
  }
  51% {
    transform: translateX(-80%);
  }
  to {
    transform: translateX(0);
  }
}
.btn-29:before {
  -webkit-animation: move-out 0.3s cubic-bezier(0.62, -0.01, 0.09, 0.96);
  animation: move-out 0.3s cubic-bezier(0.62, -0.01, 0.09, 0.96);
  background: #4f46e5;
  -webkit-clip-path: polygon(
    0 0,
    calc(100% - var(--tilt)) 0,
    100% 50%,
    calc(100% - var(--tilt)) 100%,
    0 100%
  );
  clip-path: polygon(
    0 0,
    calc(100% - var(--tilt)) 0,
    100% 50%,
    calc(100% - var(--tilt)) 100%,
    0 100%
  );
  content: '';
  height: 100%;
  left: calc(-100% - var(--tilt));
  position: absolute;
  top: 0;
  width: calc(100% + var(--tilt));
}
.btn-29:hover:before {
  -webkit-animation: move-in 0.3s cubic-bezier(0.62, -0.01, 0.09, 0.96) forwards;
  animation: move-in 0.3s cubic-bezier(0.62, -0.01, 0.09, 0.96) forwards;
}
@-webkit-keyframes move-in {
  0% {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
}
@keyframes move-in {
  0% {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
}
@-webkit-keyframes move-out {
  0% {
    transform: translateX(100%);
  }
  to {
    transform: translateX(200%);
  }
}
@keyframes move-out {
  0% {
    transform: translateX(100%);
  }
  to {
    transform: translateX(200%);
  }
}
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.25s ease-out;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
</style>
