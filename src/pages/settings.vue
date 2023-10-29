<template>
  
    <main>
      <Header pageTitle="Settings" />
      <div class="main-content">
        <div class="settings-main-content d-flex flex-wrap">
          <div class="settings-main">
            <!--Alignment tabs-->
            <div class="text-center">
              <!--navigation-bar-->
              <div class="tabs-navigation">
                <ul class="nav nav-pills" id="pills-tab" role="tablist">
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link"
                      :class="{ active: selectedTab === 'settings-overview-tab' }"
                      id="settings-tab1"
                      @click="selectedTab = 'settings-overview-tab'"
                    >
                      Overview
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link"
                      :class="{ active: selectedTab === 'gas-contract-tab' }"
                      id="settings-tab2"
                      @click="selectedTab = 'gas-contract-tab'"
                    >
                      Gas Contract
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link"
                      :class="{ active: selectedTab === 'notification-tab' }"
                      id="settings-tab3"
                      @click="selectedTab = 'notification-tab'"
                    >
                      Notification
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link"
                      :class="{ active: selectedTab === 'eip-auth-tab' }"
                      id="settings-tab4"
                      @click="selectedTab = 'eip-auth-tab'"
                    >
                      EIP-2612 Authorization
                    </button>
                  </li>
                </ul>
              </div> <!-- navigation-bar -->
            </div><!--center-->

            <!-- Tabs content -->
            <div class="tab-content" id="pills-tabContent">
              <!-- Tab Pane -->
              <div class="tab-pane fade" :class="{ show: selectedTab === 'settings-overview-tab' }" id="settings-overview-tab" role="tabpanel" aria-labelledby="settings-overview-tab">
                <div class="pane-content">
                  <!-- wallet list-->
                  <div class="smart-wallet-list">
                    <div class="section-title-cta d-flex align-items-center justify-content-between">
                      <div class="section-title">
                        <h6 class="mb-0">My Smart Wallets</h6>
                      </div>
                      <div class="btn-content">
                        <div class="btn"> + Create Strategy Wallet</div>
                      </div>
                    </div>
                    <div class="wallet-fields-list d-flex flex-wrap mb-1-half">
                      <div class="input-field position-relative">
                        <div class="sno"><span>#1</span></div>
                        <input type="text" value="0xf375...198t">
                      </div>
                      <div class="input-field position-relative">
                        <div class="sno"><span>#2</span></div>
                        <input type="text" value="0xf375...198t">
                      </div>
                      <div class="input-field position-relative">
                        <div class="sno"><span>#3</span></div>
                        <input type="text" value="0xf375...198t">
                      </div>
                    </div>
                    <div class="s-wallet-code-box nucl-content-box">
                      <div class="box-content">
                        <div class="row">
                          <div class="qr-code-content col-12 col-sm-6 d-flex flex-wrap">
                            <div class="title-code-area">
                              <div class="heading">
                                <h6>Smart Wallet</h6>
                              </div>
                              <div class="code-cta">
                                <div class="code">
                                  <span>0xf37386577ede41efc7aeA90C50572C91465e195e</span>
                                </div>
                                <div class="icon">
                                  <img src="/src/static/images/icons/copy-icon.svg" alt="copy">
                                </div>
                                <div class="icon">
                                  <img src="/src/static/images/icons/share-small-icon.svg" alt="share">
                                </div>
                              </div>
                            </div>
                            <div class="barcode">
                              <img src="@/static/images/wallet-barcode.png" alt="barcode">
                            </div>
                          </div>
                        </div>
                        
                        
                      </div>
                    </div>
                  </div><!-- wallet list-->
                  <div class="tabs-triggering-boxes">
                    <div class="row">
                      <!--box -->
                      <div class="nucl-content-box tabs-triggering-box col-12 col-sm-6" @click="selectedTab = 'gas-contract-tab'">
                        <div class="box-content">
                            <div class="top-content">
                              <div class="text-area">
                                <div class="heading">
                                  <h6>Gas Contract</h6>
                                </div>
                                <div class="text">
                                  <p>Deposit gas for automation</p>
                                </div>
                              </div>
                              <div class="icon">
                                <img src="@/static/images/icons/gas-icon.svg" alt="icon">
                              </div>
                            </div>
                            <div class="bottom-content">
                              <span>Current balance: 0 ETH</span>
                            </div>
                        </div>
                      </div><!--box-->
                      <!--box -->
                      <div class="nucl-content-box tabs-triggering-box col-12 col-sm-6" @click="selectedTab = 'notification-tab'">
                        <div class="box-content">
                            <div class="top-content">
                              <div class="text-area">
                                <div class="heading">
                                  <h6>Notification</h6>
                                </div>
                                <div class="text">
                                  <p>Use this email to receive account notifications</p>
                                </div>
                              </div>
                              <div class="icon">
                                <img src="@/static/images/icons/notification-box-icon.svg" alt="icon">
                              </div>
                            </div>
                            <div class="bottom-content">
                              <span>E-mail:  --</span>
                            </div>
                        </div>
                      </div><!--box-->
                      <div class="nucl-content-box tabs-triggering-box col-12 col-sm-6" @click="selectedTab = 'eip-auth-tab'">
                        <div class="box-content">
                            <div class="top-content">
                              <div class="text-area">
                                <div class="heading">
                                  <h6>EIP-2612 Authorization</h6>
                                </div>
                                <div class="text">
                                  <p>Define the timeframe for automation authorization</p>
                                </div>
                              </div>
                              <div class="icon">
                                <img src="@/static/images/icons/box-auth-icon.svg" alt="icon">
                              </div>
                            </div>
                            <div class="bottom-content">
                              <span>Expire After: 2023-10-25 16:19:54</span>
                            </div>
                        </div>
                      </div><!--box-->
                    </div>
                  </div>
                </div>
              </div><!-- Tab Pane -->
              <!-- Tab Pane -->
              <div class="tab-pane fade" :class="{ show: selectedTab === 'gas-contract-tab' }" id="gas-contract-tab" role="tabpanel" aria-labelledby="gass-contract-tab">
                <div class="pane-content">
                  <!-- Notifiction Box-->
                  <div class="notification-box pt-1 pb-1-half">
                    <div class="box-content d-flex align-items-center flex-wrap">
                      <div class="icon">
                        <img src="@/static/images/icons/disclaimer-alert-icon.svg" alt="icon">
                      </div>
                      <div class="text">
                        <span>
                          During the automation, transactions are initiated by various Cian smart contracts, which must pay the gas fees incurred for users. As user’s Smart Wallet is completely decentralized, this cost could not be deducted automatically.
                          <br />
                          A dedicated smart contract is used for gas handling, to which a user pre-deposits gas fees through either his smart wallet or the coupled EOA wallet. Deposit unsupported tokens or through other wallets results in loss of funds.
                          <br />
                          Plz. make sure sufficient gas fees are deposited to avoid undesired cease of automation.
                        </span>
                      </div>
                    </div>
                  </div><!-- notifiction Box-->
                  <!-- Box -->
                  <div class="nucl-content-box gas-contract-balance-box">
                    <div class="box-content">
                      <div class="row d-flex flex-wrap align-items-center">
                        <div class="col-12 col-sm-7">
                          <div class="heading mb-1">
                            <h6>GAS Contract Balance</h6>
                          </div>
                          <div class="coin-value d-flex align-items-center">
                            <div class="coin d-flex align-items-center pe-1">
                              <div class="icon">
                                <img src="@/static/images/icons/eth-icon.svg" alt="">
                              </div>
                              <span>ETH</span>
                            </div>
                            <div class="value">
                              <span>0.008</span>
                            </div>
                          </div>
                        </div>
                        <div class="multi-btns col-12 col-sm-5">
                          <div class="d-flex align-items-center justify-content-end">
                            <div class="btn medium-btn bordered" data-bs-toggle="modal" data-bs-target="#withdraw-modal">Withdraw</div>
                            <div class="btn medium-btn" data-bs-toggle="modal" data-bs-target="#deposit-modal">Deposite</div>
                          </div>
                        </div>


                        <!-- Withdraw Modal -->
                        <div class="modal fade" id="withdraw-modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                          <div class="modal-dialog">
                              <div class="modal-content">
                                  <div class="modal-header">
                                      <h5 class="modal-title" id="exampleModalLabel">Withdraw</h5>
                                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                  </div>
                                  <div class="modal-body">
                                      <div class="bordered-note-box">
                                        <div class="content">
                                          <span>The funds will be stored in your smart wallet as ETH. The address of the smart wallet is 0xf373...195e</span>
                                        </div>
                                      </div>
                                      <!-- Amount Coin Field -->
                                      <div class="amount-coins-field">
                                        <div class="label-field">
                                          <label>Amount to withdraw</label>
                                          <div class="code">
                                            <span>Bal: <em>50.25876391</em></span>
                                          </div>
                                        </div>
                                        <div class="field-group limit-cta amount-field">
                                          <div class="input-field">
                                            <input type="number" placeholder="Enter" >
                                            <div class="cta">
                                              <span>Max</span>
                                            </div>
                                            <!-- Coin Dropdown -->
                                            <CoinDropdown :coins="withdrawcoins" :selected-coin="selectedWithdrawCoin" @update:selected-coin="updateSelectedWithdrawCoin" />

                                          </div>
                                        </div>
                                      </div><!-- Amount Coin Field -->
                                      
                                      <div class="btn-content">
                                        <button class="btn w-100">Confirm</button>
                                      </div>
                                  </div>
                              </div>
                          </div>
                        </div><!-- Withdraw Modal --> 

                        <!-- Deposit Modal -->
                        <div class="modal fade" id="deposit-modal" tabindex="-1" aria-labelledby="depositModalLabel" aria-hidden="true">
                          <div class="modal-dialog">
                              <div class="modal-content">
                                  <div class="modal-header">
                                      <h5 class="modal-title" id="depositModalLabel">Deposit</h5>
                                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                  </div>
                                  <div class="modal-body">
                                      <div class="account-dropdown mb-1-half">
                                        <div class="label">
                                          <label>Select account to deposit</label>
                                        </div>
                                        <AccountDropdown :accounts="accountList" :selectedAccount="selectedAccount" @update:selected-account="updateSelectedAccount" />
                                      </div>
                                      <!-- Amount Coin Field -->
                                      <div class="amount-coins-field">
                                        <div class="label-field">
                                          <label>Amount to </label>
                                          <div class="code">
                                            <span>Bal: <em>50.25876391</em></span>
                                          </div>
                                        </div>
                                        <div class="field-group limit-cta amount-field">
                                          <div class="input-field">
                                            <input type="number" placeholder="Enter" >
                                            <div class="cta">
                                              <span>Max</span>
                                            </div>
                                            <!-- Coin Dropdown -->
                                            <CoinDropdown :coins="depostcoins" :selected-coin="selectedDepositCoin" @update:selected-coin="updateSelectedDepositCoin" />
                                          </div>
                                        </div>
                                      </div><!-- Amount Coin Field -->
                                      
                                      <div class="btn-content">
                                        <button class="btn w-100">Deposit</button>
                                      </div>
                                  </div>
                              </div>
                          </div>
                        </div><!-- Deposit Modal --> 


                      </div>
                    </div>
                  </div><!-- Box -->

                  <!-- Box -->
                  <div class="nucl-content-box transactions-table-box">
                    <div class="box-content">
                      <div class="table-reponsive">
                        <table class="table">
                          <thead>
                            <tr>
                              <th>Creation Time</th>
                              <th>Transaction Types</th>
                              <th>Asset</th>
                              <th>Amount</th>
                              <th>Status</th>
                              <th>Note</th>
                            </tr>
                          </thead>
                          <tbody>
                            <!-- No data Tr-->
                            <tr>
                              <td colspan="6" class="nodata">
                                <div class="icon">
                                  <img src="@/static/images/icons/nodata-icon.svg" alt="">
                                </div>
                                <span>No data</span>
                              </td>
                            </tr><!-- No data-->
                            <tr>
                              <td>2023-09-25 16:40:08</td>
                              <td>Withdraw</td>
                              <td class="has-icon"><img src="@/static/images/icons/eth-icon.svg" alt="icon" /> ETH</td>
                              <td>- 0.25798</td>
                              <td>Pending...</td>
                              <td>--</td>
                            </tr>
                            <tr>
                              <td>2023-09-25 16:40:08</td>
                              <td>Transfer out</td>
                              <td class="has-icon"><img src="@/static/images/icons/eth-icon.svg" alt="icon" /> ETH</td>
                              <td>- 0.25798</td>
                              <td class="completed">Completed</td>
                              <td>AAVE</td>
                            </tr>
                            <tr>
                              <td>2023-09-25 16:40:08</td>
                              <td>Deposit</td>
                              <td class="has-icon"><img src="@/static/images/icons/eth-icon.svg" alt="icon" /> ETH</td>
                              <td>- 0.25798</td>
                              <td class="completed">Completed</td>
                              <td>--</td>
                            </tr>
                            
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div><!-- Box -->

                </div>
              </div>
              <!-- Tab Pane -->
              <!-- Tab Pane -->
              <div class="tab-pane fade" :class="{ show: selectedTab === 'notification-tab' }" id="notification-tab" role="tabpanel" aria-labelledby="notification-tab">
                <div class="pane-content">
                  <!-- Notifiction Box-->
                  <div class="notification-box pt-1 pb-1-half">
                    <div class="box-content d-flex align-items-center flex-wrap">
                      <div class="icon">
                        <img src="@/static/images/icons/disclaimer-alert-icon.svg" alt="icon">
                      </div>
                      <div class="text">
                        <span>
                          An email address is strongly adviced to be provided for receiving notifications eg. changes in strategy APY, gas fee warnings, strategy updates etc.
                        </span>
                      </div>
                    </div>
                  </div><!-- notifiction Box-->

                  <!-- Box -->
                  <div class="nucl-content-box">
                    <div class="box-content">
                      <div class="icon-title d-flex align-items-center pb-1-half text-dark">
                        <div class="icon">
                          <img src="@/static/images/icons/envelop-icon.svg" alt="icon">
                        </div>
                        <h6>Your Email</h6>
                      </div>
                      <div class="col-sm-6">
                        <div class="field-cta-row d-flex align-items-center pt-1-half">
                          <div class="input-field">
                            <input type="email" placeholder="Enter">
                          </div>
                          <div class="btn-content">
                            <button class="btn medium-btn">Sign In</button>
                          </div>
                        </div>
                        
                      </div>
                    </div>
                  </div><!--box-->

                </div>
              </div><!-- Tab Pane -->
              <!-- Tab Pane -->
              <div class="tab-pane fade" :class="{ show: selectedTab === 'eip-auth-tab' }" id="eip-auth-tab" role="tabpanel" aria-labelledby="eip-auth-tab">
                <div class="pane-content">
                  <!-- Notifiction Box-->
                  <div class="notification-box pt-1 pb-1-half">
                    <div class="box-content d-flex align-items-center flex-wrap">
                      <div class="icon">
                        <img src="@/static/images/icons/disclaimer-alert-icon.svg" alt="icon">
                      </div>
                      <div class="text">
                        <span>
                          Please note that the automation of your defi tasks can only be executed within the Signature validity period. Make sure to frequently update it before deadline is reached.
                        </span>
                      </div>
                    </div>
                  </div><!-- notifiction Box-->

                  <!-- Box -->
                  <div class="nucl-content-box">
                    <div class="box-content">
                      <div class="heading">
                        <h6>EIP 2612 Authorization Validity time</h6>
                      </div>
                      <div class="col-sm-6">
                        <div class="field-cta-row d-flex align-items-center pt-1-half">
                          <div class="input-field has-unit position-relative">
                            <input type="email" placeholder="Enter">
                            <div class="unit"><span>Day(s)</span></div>
                          </div>
                          <div class="btn-content">
                            <button class="btn medium-btn">Update</button>
                          </div>
                        </div>
                        <div class="note error">
                          <span>Expire After: 2023-10-25 16:19:54</span>
                        </div>
                      </div>
                    </div>
                  </div><!--box-->
                </div>
              </div><!-- Tab Pane -->
            </div>
          </div>
        </div>
      </div>
    </main>
    
</template>


<script>
import Header from '@/components/Header.vue';
import CoinDropdown from '@/components/CoinDropdown.vue';
import AccountDropdown from '@/components/AccountDropdown.vue';
import ethIcon from '@/static/images/icons/eth-icon.svg'
import bnbIcon from '@/static/images/icons/bnb-icon.svg'
import crvIcon from '@/static/images/icons/crv-icon.svg'
import daiIcon from '@/static/images/icons/dai-icon.svg'
export default {
  components: {
    Header,
    CoinDropdown,
    AccountDropdown,
  },
  data() {
    return {
      selectedTab: 'settings-overview-tab',
      isDropdownOpen: false,
      

      withdrawcoins: [
        { id: 1, name: 'ETH', image: ethIcon },
        { id: 2, name: 'BNB', image: bnbIcon },
        // Add more coin options as needed for the dropdown
      ],
      selectedWithdrawCoin: { id: 1, name: 'ETH', image: ethIcon },
      depostcoins: [
        { id: 1, name: 'CRV', image: crvIcon },
        { id: 2, name: 'DAI', image: daiIcon },
      ],
      selectedDepositCoin: { id: 1, name: 'CRV', image: crvIcon },

      accountList: [
        { id: 1, name: 'Smart Wallet', number: '0xf373...195e' },
        { id: 2, name: 'Metamask wallet', number: '0x0000...8888' },
        // Add more accounts as needed
      ],
      selectedAccount: null, // Initialize the selectedAccount

    }
  },
  methods: {
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    // selectCoin(coin) {
    //   this.selectedCoin = coin;
    //   this.isDropdownOpen = false;
    // },


    updateSelectedWithdrawCoin(coin) {
      this.selectedWithdrawCoin = coin;
    },
    updateSelectedDepositCoin(coin) {
      this.selectedDepositCoin = coin;
    },

    updateSelectedAccount(account) {
      this.selectedAccount = account;
    },

  },
}
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
.settings-main-content{
  height: 100%;
  .settings-main{
    padding: 0.36rem 0.42rem;
    width: 100%;
  }
    .notification-box{
        color: rgba(0,0,0,0.6)
    }
}
.section-title-cta{
  padding: 0.1rem 0;
}
.tab-content{
  .pane-content{
    padding-bottom: 0.1rem ;
  }
  .wallet-fields-list{
    .input-field{
      margin-right: 0.17rem;
      margin-bottom: 0.12rem;
      .sno{
        position: absolute;
        left: 0.15rem; 
        top: 0.14rem;
        font-size: 0.14rem;
        color: rgba(0,0,0,0.6);
      }
      input{
        padding-left: 0.46rem;
        font-weight: 400;
        width: 2.7rem;
        height: 0.5rem;
        color: rgba(0,0,0,0.6);
      }
    }
  }
}
.qr-code-content{
  .title-code-area{
    width: calc(100% - 0.58rem);
    padding-right: 0.2rem;
    .code-cta{
      padding-top: 0.1rem;
    }
  }
  .barcode{
    width: 0.58rem;
    img{
      width: 100%;
    }
  }
}
.tabs-triggering-boxes{
  padding: 0 0.05rem;
}
.tabs-triggering-box{
  margin-bottom: 0.2rem;
  padding: 0 0.1rem;
  .box-content{
    padding: 0.18rem 0.17rem 0.15rem;
    &:hover{
      cursor: pointer;
      .top-content{
        .icon:after{
          right: 0.02rem;
        }
      }
    }
  }
  .top-content{
    display: flex;
    flex-wrap: wrap;
    border-bottom: 0.01rem solid rgba(0,0,0,0.3);
    padding: 0.02rem 0;
    .text-area{
      width: calc(100% - 0.76rem);
      padding-right: 0.15rem;
    }
    .icon{
      width: 0.76rem;
      position: relative;
      padding-right: 0.2rem;
      text-align: center;
      padding-top: 0.04rem;
      &:after{
        content: '';
        background-image: url('../static/images/icons/angle-right.svg');
        width: 0.09rem;
        height: 0.15rem;
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
        position: absolute;
        right: 0.04rem;
        top: 40%;
        transform: translateY(-50%);
        transition: all 0.3s ease 0s;
      }
    }
  }
  .bottom-content{
    padding-top : 0.12rem;
  }
}

.smart-wallet-list{
  margin-bottom: 0.3rem;
}
.gas-contract-balance-box{
  font-weight: 600;
  .coin-value{
    .coin{
      min-width: 1.8rem;
      .icon{
        margin-right: 0.1rem;
        width: 0.28rem;
        img{
          width: 100%;
        }
      }
    }
  }
}
.transactions-table-box{
  .table{
    td{
      &.nodata{
        font-weight: 500;
        border: none;
        padding: 0.4rem ;
        .icon{
            padding-bottom: 0.05rem;
        }
      }
      &.has-icon{
        img{
          width: 0.22rem;
          margin-right: 0.04rem;
        }
      }
    }
  }
}

.nucl-content-box {
  .icon-title{
    .icon{
      width: 0.22rem;
      margin-right: 0.1rem;
      img{
        width: 100%
      }
    }
    h6{
      margin: 0;
      font-family: var(--inter-font);
      font-weight: 600;
    }
  }
  .field-cta-row{
    padding-top: 0.2rem;
    .input-field{
      padding-right: 0.2rem;
      &.has-unit{
       input{
        padding-right: 0.7rem;
       }
        .unit{
          position: absolute;
          right: 0.4rem;
          top: 0.12rem;
        }
      }
    }
    input{
      min-width: 3rem;
      margin-top: 0.03rem;
    }
  }
}
.note.error{
  color: var(--orange-color);
  padding-top: 0.05rem;
}

</style>