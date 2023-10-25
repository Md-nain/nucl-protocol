<template>
  <div>
    <Sidebar />
    <main>
      <Header pageTitle="Automated" />
      <div class="main-content">
        <div class="automated-main-content">
          <div class="automated-main">
            <!--Alignment tabs-->
            <div class="text-center">
              <!--navigation-bar-->
              <div class="tabs-navigation">
                <ul class="nav nav-pills" id="pills-tab" role="tablist">
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link"
                      :class="{ active: selectedTab === 'automated-create-tab' }"
                      id="automated-tab1"
                      @click="selectedTab = 'automated-create-tab'"
                    >
                      Create
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link"
                      :class="{ active: selectedTab === 'mystrategies-tab' }"
                      id="automated-tab2"
                      @click="selectedTab = 'mystrategies-tab'"
                    >
                      My Strategies
                    </button>
                  </li>
                </ul>
              </div> <!-- navigation-bar -->
            </div><!--center-->
            <!-- Tab Content -->
            <div class="tab-content" id="pills-tabContent">
              <!-- Tab Pane -->
              <div class="tab-pane fade" :class="{ show: selectedTab === 'automated-create-tab' }" id="automated-create-tab" role="tabpanel" aria-labelledby="automated-create-tab">
                <div class="pane-content">
                  Create
                </div>
              </div><!-- Tab pane -->

              <!-- Tab Pane -->
              <div class="tab-pane fade" :class="{ show: selectedTab === 'mystrategies-tab' }" id="mystrategies-tab" role="tabpanel" aria-labelledby="mystrategies-tab">
                <div class="pane-content">
                  STRATEGIES
                </div>
              </div><!-- Tab pane -->

            </div><!-- Tab Content -->
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue';
import Header from '@/components/Header.vue';

export default {
  components: {
    Sidebar,
    Header,
  },
  data(){
    return{
      selectedTab: 'automated-create-tab',
    }
  },
};
</script>

<style lang="scss" scoped>
html{
  main{
    width: calc(100% - 2rem);
    margin-left: 2rem;
  }
  &.sidebar-collapsed{
    main{
      width: calc(100% - 0.64rem);
      margin-left: 0.64rem;
    }
  }
}
.main-content{
    height: calc(100vh - 0.68rem);
    overflow-y: auto;
    &::-webkit-scrollbar {
      width: 0.06rem;
    }
    &::-webkit-scrollbar-track {
      box-shadow: inset 0 0 2px 2px #f7f7f7; 
      border-radius: 6px;
      background: rgba(83, 92, 255, 0.3);
        
    }
    &::-webkit-scrollbar-thumb {
      background: #ddd; 
      background: var(--blue-color);
      border-radius: 6px;
    }
    &::-webkit-scrollbar-thumb:hover {
      background: var(--btn-focused);
    }
    .section-title{
      padding-bottom: 0.07rem;
    }
}
.automated-main{
  padding: 0.36rem 0.42rem;
}
</style>