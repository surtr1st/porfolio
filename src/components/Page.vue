<template>
  <section class="h-screen">
    <slot />
  </section>
</template>

<style scoped>
section {
  scroll-snap-align: start;
  scroll-snap-stop: always;

  /* display: flex; */
  /* align-items: center; */
  /* justify-content: center; */
}

section:nth-of-type(even) {
  color: white;
}

section:nth-of-type(odd) {
  color: black;
  background: white;
}
</style>
