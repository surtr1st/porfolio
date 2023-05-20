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
            <SuperExtraHeading
              class="font-extrabold bg-clip-text bg-[110% auto] bg-center text-transparent fancy hover:cursor-pointer"
              >HELLO</SuperExtraHeading
            >
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

.fancy {
  @supports (background-clip: text) or (-webkit-background-clip: text) {
    background-image: url("data:image/svg+xml,%3csvg id='visual' viewBox='0 0 2000 540' width='2000' height='540' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1'%3e%3cdefs%3e%3cfilter id='blur1' x='-10%25' y='-10%25' width='120%25' height='120%25'%3e%3cfeFlood flood-opacity='0' result='BackgroundImageFix'%3e%3c/feFlood%3e%3cfeBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape'%3e%3c/feBlend%3e%3cfeGaussianBlur stdDeviation='304' result='effect1_foregroundBlur'%3e%3c/feGaussianBlur%3e%3c/filter%3e%3c/defs%3e%3crect width='2000' height='540' fill='%234FACF7'%3e%3c/rect%3e%3cg filter='url(%23blur1)'%3e%3ccircle cx='208' cy='500' fill='%23715DF2' r='675'%3e%3c/circle%3e%3ccircle cx='1055' cy='112' fill='%234FACF7' r='675'%3e%3c/circle%3e%3ccircle cx='1823' cy='343' fill='%23715DF2' r='675'%3e%3c/circle%3e%3ccircle cx='135' cy='71' fill='%23715DF2' r='675'%3e%3c/circle%3e%3ccircle cx='1356' cy='346' fill='%234FACF7' r='675'%3e%3c/circle%3e%3ccircle cx='563' cy='507' fill='%23715DF2' r='675'%3e%3c/circle%3e%3c/g%3e%3c/svg%3e");
    background-size: 110% auto;
    background-position: center;
    color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
  }
}
</style>
