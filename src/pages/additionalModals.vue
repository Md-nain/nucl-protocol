<template>
    <main>
      <Header pageTitle="Additional Modals" />
      <div class="main-content">
        <div class="modals-list-main-content p-2">
            <div class="row d-flex algin-items-center flex-wrap">
                <div class="col-sm-3">
                  <!-- Can use button as well-->
                  <a href="javascript:void(0);" class="btn medium-btn mt-1" data-bs-toggle="modal" data-bs-target="#authorization-modal">EIP 2612 Authorization</a>
                </div>
                <div class="col-sm-3">
                  <a href="javascript:void(0);" class="btn medium-btn mt-1" @click="openModal()">Transaction Pending</a>
                </div>
                <div class="col-sm-3">
                  <a href="javascript:void(0);" class="btn medium-btn mt-1" data-bs-toggle="modal" data-bs-target="#transactionConfirmed-modal">Transaction Confirmed</a>
                </div>
                <div class="col-sm-3">
                  <a href="javascript:void(0);" class="btn medium-btn mt-1" data-bs-toggle="modal" data-bs-target="#transactionFailed-modal">Transaction Failed</a>
                </div>
                <div class="col-sm-3">
                  <a href="javascript:void(0);" class="btn medium-btn mt-1" data-bs-toggle="modal" data-bs-target="#insufficientGas-modal">Insufficient Gas Balance</a>
                </div>
                <div class="col-sm-3">
                  <a href="javascript:void(0);" class="btn medium-btn mt-1" data-bs-toggle="modal" data-bs-target="#stakingStrategy-modal">stETH/ETH Leveraged Staking strategy</a>
                </div>
                <div class="col-sm-3">
                  <a href="javascript:void(0);" class="btn medium-btn mt-1" data-bs-toggle="modal" data-bs-target="#signatureValidity-modal">Signature Validity Period</a>
                </div>
                
            </div>

            <!-- Authorization Modal -->
            <div class="modal medium-modal fade" id="authorization-modal" tabindex="-1" aria-hidden="true">
              <div class="modal-dialog">
                  <div class="modal-content">
                      <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLabel">EIP 2612 Authorization</h5>
                          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body pb-0">
                          <div class="text">
                            <p>
                              Security & decentralization are given the highest priority by Cian. Therefore users’ Smart Wallet is completely decentralized - no transaction can be initiated without user’s signature, which conflicts with user’s automation need. EIP2612 is used to solve this problem.
                            </p>
                            <p>
                              EIP2612 is an Ethereum standard for improved signature and approval mechanism on EVM. One of its features is keeping user’s signature alive within predefined scope for predetermined time frame.
                            </p>
                            <p>
                              In Cian, EIP2612 is used to keep users’ signature valid during the automation process. It is restricted to transactions within user selected automation scenarios.
                            </p>
                          </div>
                          
                          <div class="btn-content" style="padding: 0.05rem 0;">
                            <button class="btn w-100">OK, Got it</button>
                          </div>
                      </div>
                  </div>
              </div>
            </div><!-- Authorization Modal --> 

            <!-- Transaction Pending Modal -->
            <div class="modal fade" id="transactionProcessing-modal" tabindex="-1" aria-hidden="true">
              <div class="modal-dialog">
                  <div class="modal-content">
                      <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLabel">Transaction Pending</h5>
                          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body pb-0">
                          <div class="gray-area">
                            <div class="spinner text-center">
                              <div class="icon">
                                  <img src="@/static/images/icons/spinner-icon.svg" alt="icon">
                              </div>
                            </div>
                          </div>
                      </div>
                  </div>
              </div>
            </div><!-- Transaction Processing Modal --> 

            <!-- Transaction Confirmed Modal -->
            <div class="modal fade" id="transactionConfirmed-modal" tabindex="-1" aria-hidden="true">
              <div class="modal-dialog">
                  <div class="modal-content">
                      <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLabel">Transaction Confirmed</h5>
                          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body pb-0">
                          <div class="gray-area">
                            <div class="icon">
                                <img src="@/static/images/icons/transaction-tik-icon.svg" alt="icon">
                            </div>
                            <div class="caption">
                              <span>You have successfully Created a strategy</span>
                            </div>
                            <div class="link">
                              <a href="#">View on Etherscan</a>
                            </div>
                          </div>
                      </div>
                  </div>
              </div>
            </div><!-- Transaction Confirmed Modal --> 

            <!-- Transaction Confirmed Modal -->
            <div class="modal fade" id="transactionFailed-modal" tabindex="-1" aria-hidden="true">
              <div class="modal-dialog">
                  <div class="modal-content">
                      <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLabel">Transaction Failed</h5>
                          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body pb-0">
                          <div class="gray-area">
                              <div class="icon">
                                  <img src="@/static/images/icons/transaction-failed-icon.svg" alt="icon">
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
            </div><!-- Transaction Confirmed Modal --> 

            <!-- Insufficient Gas Modal -->
            <div class="modal fade" id="insufficientGas-modal" tabindex="-1" aria-hidden="true">
              <div class="modal-dialog">
                  <div class="modal-content">
                      <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLabel">Insufficient GAS Contract Balance</h5>
                          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body pb-0">
                          <div class="text">
                            <p>
                              GAS Contract Balance : O ETH
                            </p>
                            <p>
                              To execute the strategy. ETH balance in your “Gas Contract” must be greater than 0.1.
                            </p>
                          </div>
                          
                          <div class="btn-content pt-1">
                            <button class="btn w-100">OK, Got it</button>
                          </div>
                      </div>
                  </div>
              </div>
            </div><!-- Insufficient Gas Modal --> 

            <!-- stakingStrategy Modal -->
            <div class="modal medium-modal fade" id="stakingStrategy-modal" tabindex="-1" aria-hidden="true">
              <div class="modal-dialog">
                  <div class="modal-content">
                      <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLabel">stETH/ETH Leveraged Staking strategy was created</h5>
                          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body pb-0">
                        <div class="text increased-lineheight">
                            <p>
                              You successfully deposited 0.004 ETH at 2023-09-25 08:25, the strategy details are as follows: <br>
                              Strategy Name: stETH/ETH Leveraged Staking <br>
                              Strategy Real-time APY: 3.54%<br>
                              Protocols Used: Aave, Lido, Curve, Balancer<br>
                              Yield Token: stETH
                            </p>
                          </div>
                          
                          <div class="btn-content pt-1-half">
                            <button class="btn w-100">OK, Got it</button>
                          </div>
                      </div>
                  </div>
              </div>
            </div><!-- stakingStrategy Modal --> 

            <!-- Signature Validity Modal -->
            <div class="modal medium-modal fade" id="signatureValidity-modal" tabindex="-1" aria-hidden="true">
              <div class="modal-dialog">
                  <div class="modal-content">
                      <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLabel">Signature Validity Period (EIP-2612 Standard)</h5>
                          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body pb-0">
                        <div class="text">
                            <p>
                              The EIP-2612 standard will not cause additional fees to your automated transactions. 
                              It is extremely important to set up you signature valid period properly since your automated tasks can only take place within this period. 
                              If it reaches the deadline, none of your subsequent tasks will be executed. 
                              For this reason, please make sure to regularly monitor and Update the signature valid period.
                            </p>
                          </div>
                          
                          <div class="btn-content pt-1-half">
                            <a href="/settings" class="btn w-100">Go To Settings</a>
                          </div>
                      </div>
                  </div>
              </div>
            </div><!-- stakingStrategy-modal Modal --> 

            

            

        </div>
      </div>
    </main>
</template>

<script>
import Header from '@/components/Header.vue';
import { Modal } from 'bootstrap';

export default {
  setup() {
    const modalElement = document.getElementById('transactionProcessing-modal');
      // 创建 Modal 实例
    const modal = new Modal(modalElement);
    function openModal() {
      // 获取模态框元素
      
      // 显示模态框
      modal.show();
    }
    function hideModal() {
      // 获取模态框元素
      
      // 显示模态框
      modal.hide();
    }

    return {
      openModal,
      hideModal
    };
  },

  components: {
    Header,
  },
};
</script>

<style lang="scss" scoped>

</style>
