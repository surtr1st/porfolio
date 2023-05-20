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
          <Transition
            appear
            name="fade-up"
          >
            <SuperExtraHeading class="font-bold">HELLO</SuperExtraHeading>
          </Transition>
          <Flex class="items-end">
            <Transition
              appear
              name="fade-up"
            >
              <LightExtraHeading class="font-extralight italic mb-[11px]">AND</LightExtraHeading>
            </Transition>
          </Flex>
        </Flex>
        <Transition
          appear
          name="fade-down"
        >
          <LightExtraHeading class="font-semibold">WELCOME TO MY PORTFOLIO</LightExtraHeading>
        </Transition>
      </Flex>
    </Flex>
  </Page>
</template>

<style scoped>
@keyframes slide-fade-up {
  from {
    opacity: 0;
    transform: translateY(75%);
  }
  to {
    opacity: 1;
    transform: translateY(0%);
  }
}
@keyframes slide-fade-down {
  from {
    opacity: 0;
    transform: translateY(-75%);
  }
  to {
    opacity: 1;
    transform: translateY(0%);
  }
}
.fade-up-enter-active,
.fade-up-leave-active {
  animation: slide-fade-up 450ms;
  animation-fill-mode: forwards;
  animation-timing-function: cubic-bezier(0.62, -0.01, 0.09, 0.96);
}

.fade-up-enter-from,
.fade-up-leave-to {
  animation: slide-fade-up 350ms;
  animation-fill-mode: forwards;
  animation-timing-function: cubic-bezier(1, 0.01, 0.26, 0.82);
}

.fade-down-enter-active,
.fade-down-leave-active {
  animation: slide-fade-up 450ms;
  animation-fill-mode: forwards;
  animation-timing-function: cubic-bezier(0.62, -0.01, 0.09, 0.96);
}

.fade-enter-from,
.fade-leave-to {
  animation: slide-fade-up 350ms;
  animation-fill-mode: forwards;
  animation-timing-function: cubic-bezier(1, 0.01, 0.26, 0.82);
}
</style>
