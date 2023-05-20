<script setup lang="ts">
import Flex from '@/components/Flex.vue'
import Page from '@/components/Page.vue'
import SuperExtraHeading from '@/components/SuperExtraHeading.vue'
import LightExtraHeading from '@/components/LightExtraHeading.vue'
</script>

<template>
  <Page class="w-full">
    <Flex class="h-full w-[1090px] justify-center items-center">
      <Flex class="flex-col">
        <Flex>
          <SuperExtraHeading class="font-bold">HELLO</SuperExtraHeading>
          <Flex class="items-end">
            <LightExtraHeading class="font-extralight italic mb-[11px]">AND</LightExtraHeading>
          </Flex>
        </Flex>
        <LightExtraHeading class="font-semibold">WELCOME TO MY PORTFOLIO</LightExtraHeading>
      </Flex>
    </Flex>
  </Page>
</template>
