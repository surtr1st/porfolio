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
import Paragraph from '@/components/Paragraph.vue'

const contents = [
  {
    logo: HTML5Logo,
    label: 'HTML',
  },
  {
    logo: CSS3Logo,
    label: 'CSS',
  },
  {
    logo: JavaScriptLogo,
    label: 'JavaScript',
  },
  {
    logo: TypeScriptLogo,
    label: 'TypeScript',
  },
  {
    logo: JavaLogo,
    label: 'Java',
  },
]
</script>

<template>
  <Page class="w-full bg-none">
    <Grid
      :rows="6"
      :cols="1"
      class="h-full"
    >
      <GridItem
        :row-span="1"
        col-span="full"
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
        :row-span="3"
        col-span="full"
      >
        <Flex class="justify-evenly items-center h-full">
          <Box
            v-for="content in contents"
            class="logo text-center grayscale w-[150px] h-[150px] rounded-xl p-2 border border-none bg-none transition-all hover:cursor-pointer hover:grayscale-0"
          >
            <component :is="content.logo"></component>
            <Paragraph>{{ content.label }}</Paragraph>
          </Box>
        </Flex>
      </GridItem>
      <GridItem> </GridItem>
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
</style>
