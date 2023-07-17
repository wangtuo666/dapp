<script setup >
import { createApp } from 'vue';
  import heade from './components/heade.vue'
  const app = createApp({});
  app.component('heade', heade);
  app.mount('#app');
</script>

<template>
  <heade></heade>
  <router-view></router-view>
</template>

<style scoped lang="scss" >

</style>
