<script setup lang="ts">
import Page from '@/components/Page.vue'
import LightExtraHeading from '@/components/LightExtraHeading.vue'
import HTML5Logo from '@/components/logo/HTML5Logo.vue'
import CSS3Logo from '@/components/logo/CSS3Logo.vue'
import JavaScriptLogo from '@/components/logo/JavaScriptLogo.vue'
import TypeScriptLogo from '@/components/logo/TypeScriptLogo.vue'
import JavaLogo from '@/components/logo/JavaLogo.vue'
import Box from '@/components/Box.vue'
import Flex from '@/components/Flex.vue'
import Grid from '@/components/Grid.vue'
import GridItem from '@/components/GridItem.vue'
</script>

<template>
  <Page class="w-full bg-none">
    <Grid
      rows="grid-rows-6"
      cols="grid-cols-1"
      class="h-full"
    >
      <GridItem
        row-span="row-span-2"
        col-span="col-span-full"
      >
        <Box class="flex justify-center items-center h-full">
          <Transition
            appear
            name="fade-up"
          >
            <LightExtraHeading class="font-extrabold fancy hover:cursor-pointer"
              >SKILLS</LightExtraHeading
            >
          </Transition>
        </Box>
      </GridItem>
      <GridItem
        row-span="row-span-3"
        col-span="col-span-full"
      >
        <Flex class="justify-evenly items-center h-full">
          <Box
            class="grayscale w-[150px] h-[150px] rounded-xl p-2 border border-none bg-none transition-all hover:cursor-pointer hover:grayscale-0"
          >
            <HTML5Logo />
          </Box>
          <Box
            class="grayscale w-[150px] h-[150px] rounded-xl p-2 border border-none bg-none transition-all hover:cursor-pointer hover:grayscale-0"
          >
            <CSS3Logo />
          </Box>
          <Box
            class="grayscale w-[150px] h-[150px] rounded-xl p-2 border border-none bg-none transition-all hover:cursor-pointer hover:grayscale-0"
          >
            <JavaScriptLogo />
          </Box>
          <Box
            class="grayscale w-[150px] h-[150px] rounded-xl p-2 border border-none bg-none transition-all hover:cursor-pointer hover:grayscale-0"
          >
            <TypeScriptLogo />
          </Box>
          <Box
            class="grayscale w-[150px] h-[150px] rounded-xl p-2 border border-none bg-none transition-all hover:cursor-pointer hover:grayscale-0"
          >
            <JavaLogo />
          </Box>
        </Flex>
      </GridItem>
    </Grid>
  </Page>
</template>
