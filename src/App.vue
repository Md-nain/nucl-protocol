<template>
  <div class="page-wrapper">
    <div>
      <Sidebar />
      <TransactionModal />
      <router-view /> <!-- This is where the page-specific content will be rendered -->
      
      <RightSideAlert />
    </div>
    
  </div>
</template>

<script>
import Sidebar from './components/Sidebar.vue';
import Header from './components/Header.vue';
import TransactionModal from './components/TransactionModal.vue';
import RightSideAlert from './components/RightSideAlert.vue';

export default {
  components: {
    Sidebar,
    Header,
    TransactionModal,
    RightSideAlert,

  },

  data() {
    return {
      pageTitle: '', // You can set the default title here
    };
  },
  methods: {
  }
  
};
</script>

<style>
.page-wrapper{
  min-height: 100vh;
}
</style>