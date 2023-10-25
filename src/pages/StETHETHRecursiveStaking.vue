<template>
  <div>
    <Sidebar />
    <main>
      <Header pageTitle="stETH/ETH Recursive Staking" />
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
                  <div class="nucl-primary-content-box mt-1">
                    <div class="box-content">
                      <div class="row">
                        <!-- Left column-->
                        <div class="col-12 col-sm-6">
                          <div class="safety-block">
                            <div class="block-content">
                              <div class="heading">
                                <h6>Safety</h6>
                              </div>
                              <div class="safety-content">
                                <div class="d-flex saftety-icons">
                                  <img src="@/static/images/icons/safety-full.svg" alt="icon">
                                  <img src="@/static/images/icons/safety-full.svg" alt="icon">
                                  <img src="@/static/images/icons/safety-full.svg" alt="icon">
                                  <img src="@/static/images/icons/safety-semi-gray.svg" alt="icon">
                                  <img src="@/static/images/icons/safety-gray.svg" alt="icon">
                                </div>
                                <p>
                                  The safety level is evaluated by CIAN based on multiple factors:
                                </p>
                                <ul class="list-style-none">
                                  <li>- The level of knowledge required to navigate this strategy and optimize its performance</li>
                                  <li>- How battle-tested is this strategy</li>
                                  <li>- How trustable are the protocol(s) utilised in this strategy (audit + track record)</li>
                                </ul>
                                <p>There are 5 safety levels, where:</p>
                                <ul class="list-style-none">
                                  <li>- 1 = High Risk</li>
                                  <li>- 5 = Low Risk</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>

                        <!-- Right Column -->
                        <div class="col-12 col-sm-6">
                          <!-- Parameters Block -->
                          <div class="parameters-block">
                            <div class="heading">
                              <h6>Parameters</h6>
                            </div>
                            <!-- Parameters List -->
                            <div class="parameters-list">
                              <div class="list-item d-flex align-items-center justify-content-between">
                                <div class="name">Strategy APY</div>
                                <div class="value">3.54%</div>
                              </div>
                              <div class="list-item d-flex align-items-center justify-content-between">
                                <div class="name">Strategy TVL</div>
                                <div class="value">124.71 / 100K stETH</div>
                              </div>
                              <div class="list-item d-flex align-items-center justify-content-between">
                                <div class="name">Principal Token</div>
                                <div class="value"> <img src="@/static/images/icons/eth-icon.svg" alt="icon" class="icon"> <span>ETH</span> <span class="slash">/</span> <img src="@/static/images/icons/steth-icon.svg" alt="icon" class="icon"> <span>stETH</span></div>
                              </div>
                              <div class="list-item d-flex align-items-center justify-content-between">
                                <div class="name">Yield Token</div>
                                <div class="value"><img src="@/static/images/icons/steth-icon.svg" alt="icon" class="icon"><span>stETH</span></div>
                              </div>
                              <div class="list-item d-flex align-items-center justify-content-between">
                                <div class="name">Protocols Used</div>
                                <div class="value"><img src="@/static/images/icons/aave-icon.svg" alt="icon" class="icon"><span>AAVE</span><span class="slash">/</span> <img src="@/static/images/icons/lido-icon.svg" alt="icon" class="icon"> <span>Lido</span><span class="slash">/</span> <img src="@/static/images/icons/balancer-icon.svg" alt="icon" class="icon"> <span>Balancer</span><span class="slash">/</span> <img src="@/static/images/icons/crv-icon.svg" alt="icon" class="icon"> <span>Curve</span></div>
                              </div>
                              <div class="list-item d-flex align-items-center justify-content-between">
                                <div class="name">Collateral Ratio</div>
                                <div class="value">66.67%</div>
                              </div>
                              <div class="list-item d-flex align-items-center justify-content-between">
                                <div class="name">Min. Required Gas Balance</div>
                                <div class="value">0.1 ETH</div>
                              </div>
                              <div class="list-item d-flex align-items-center justify-content-between">
                                <div class="name">Liquidation Protection</div>
                                <div class="value">Supported</div>
                              </div>
                            </div><!-- Parameters List -->
                          </div><!-- Parameters Block -->

                          

                        </div><!-- Right Column -->

                      </div>
                    </div>
                  </div>
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
import CoinDropdown from '@/components/CoinDropdown.vue';

export default {
  components: {
    Sidebar,
    Header,
    CoinDropdown,
  },
  data(){
    return{
      selectedTab: 'automated-create-tab',
      
      depostcoins: [
        { id: 1, name: 'CRV', image: 'src/static/images/icons/crv-icon.svg' },
        { id: 2, name: 'DAI', image: 'src/static/images/icons/dai-icon.svg' },
      ],
      selectedDepositCoin: { id: 1, name: 'CRV', image: 'src/static/images/icons/crv-icon.svg' },
    }
  },
  method:{
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    updateSelectedDepositCoin(coin) {
      this.selectedDepositCoin = coin;
    },
  }
};
</script>

<style lang="scss" scoped>
.automated-main{
  padding: 0.36rem 0.42rem;
}
.parameters-list{
  font-weight: 500;
  .list-item{
    padding: 0.07rem 0;
    .value{
      img{
        width: 0.23rem;
        margin-right: 0.05rem;
        margin-top: -0.01rem;
      }
      span{
        padding-top: 0.01rem;
        display: inline-block;
        vertical-align: top;
      }
      .slash{
        padding: 0 0.04rem;
      }
    }
  }
}
.gray-content-box{
  .content-holder{
    background-color: var(--body-bg);
    padding: 0.2rem;
    border-radius: 0.1rem;
  }
}
</style>