<script setup lang="ts">
import Flex from '@/components/Flex.vue'
import Page from '@/components/Page.vue'
import SuperExtraHeading from '@/components/SuperExtraHeading.vue'
import LightExtraHeading from '@/components/LightExtraHeading.vue'
</script>

<template>
  <Page class="m-auto w-[1445px]">
    <Flex class="h-full justify-start items-center">
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
