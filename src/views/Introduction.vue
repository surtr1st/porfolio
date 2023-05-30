<script setup lang="ts">
import Flex from '@/components/Flex.vue'
import Page from '@/components/Page.vue'
import SuperExtraHeading from '@/components/SuperExtraHeading.vue'
import LightExtraHeading from '@/components/LightExtraHeading.vue'
import Heading1 from '@/components/Heading1.vue'
</script>

<template>
  <Page class="w-screen bg-none">
    <Flex class="h-full w-[1090px] justify-center items-center">
      <Flex class="flex-col">
        <Flex>
          <Transition
            appear
            name="fade-up"
          >
            <SuperExtraHeading class="font-extrabold fancy hover:cursor-pointer"
              >HELLO</SuperExtraHeading
            >
          </Transition>
          <Flex class="items-end">
            <Transition
              appear
              name="fade-up"
            >
              <Heading1 class="font-semibold">AND</Heading1>
            </Transition>
          </Flex>
        </Flex>
        <Transition
          appear
          name="fade-down"
        >
          <LightExtraHeading class="font-bold">WELCOME TO MY PORTFOLIO</LightExtraHeading>
        </Transition>
      </Flex>
    </Flex>
  </Page>
</template>
