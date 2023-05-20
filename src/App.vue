<script setup lang="ts">
import Background from './views/Background.vue'
import Introduction from './views/Introduction.vue'
import AboutMe from './views/AboutMe.vue'
import Skills from './views/Skills.vue'
import WorkExperience from './views/WorkExperience.vue'
import Projects from './views/Projects.vue'
import Contacts from './views/Contacts.vue'
import Navigator from './components/Navigator.vue'
</script>

<template>
  <Navigator>
    <Introduction id="intro" />
    <AboutMe id="about" />
    <Skills id="skills" />
    <WorkExperience id="workex" />
    <Projects id="projects" />
    <Contacts id="contacts" />
  </Navigator>
  <Background />
</template>
