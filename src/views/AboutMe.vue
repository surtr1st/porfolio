<script setup lang="ts">
import Flex from '@/components/Flex.vue'
import Page from '@/components/Page.vue'
import LightExtraHeading from '@/components/LightExtraHeading.vue'
import Heading1 from '@/components/Heading1.vue'
import Paragraph from '@/components/Paragraph.vue'
import ScrollReveal from 'scrollreveal'
import { onMounted } from 'vue'
import { SCROLL_REVEAL_DELAY } from '@/globals'

const about = `
Currently, I am an independent software developer specializing in both front-end and back-end development, although my expertise lies primarily in back-end development. I adore innovative work and am passionate about developing software that could possibly simplifies processes people's workflow. I am also a continuous learner who is naturally curious, learning many new things is like my hobby.
`
const sr = ScrollReveal({ delay: SCROLL_REVEAL_DELAY, reset: true, mobile: false })
onMounted(() => sr.reveal('#about-me'))
</script>

<template>
  <Page class="w-full bg-none">
    <Flex class="h-full w-[1090px] justify-center items-center">
      <Flex
        id="about-me"
        class="flex-col justify-center items-center gap-4"
      >
        <Transition
          appear
          name="fade-up"
        >
          <LightExtraHeading class="font-extrabold fancy hover:cursor-pointer"
            >ABOUT ME</LightExtraHeading
          >
        </Transition>
        <Transition
          appear
          name="fade-down"
        >
          <Heading1 class="font-semibold">My name is Ishi</Heading1>
        </Transition>
        <Transition
          appear
          name="fade-down"
        >
          <Paragraph class="text-lg font-light w-1/2">
            {{ about }}
          </Paragraph>
        </Transition>
      </Flex>
    </Flex>
  </Page>
</template>
