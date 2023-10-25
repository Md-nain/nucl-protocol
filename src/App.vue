<template>
  <div class="page-wrapper">
      <router-view /> <!-- This is where the page-specific content will be rendered -->
  </div>
</template>

<script>
import Sidebar from './components/Sidebar.vue';
import Header from './components/Header.vue';

export default {
  components: {
    Sidebar,
    Header,
  },
  data() {
    return {
      pageTitle: '', // You can set the default title here
    };
  },
};
</script>

<style>
.page-wrapper{
  min-height: 100vh;
}
</style>