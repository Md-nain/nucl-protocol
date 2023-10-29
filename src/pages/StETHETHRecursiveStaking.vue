<template>
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
                  <!-- Primary-Box -->
                  <div class="nucl-primary-content-box">
                    <div class="box-content">
                      <div class="row">
                        <!-- Left column-->
                        <div class="col-12 col-sm-6">
                          <div class="graphchart-block">
                            <div class="heading pb-1-half">
                              <h6>Strategy APY</h6>
                            </div>
                            <div id="graphchart" class="graphchart"></div>
                          </div>
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
                          <div class="parameters-block mb-1">
                            <div class="heading">
                              <h6>Parameters</h6>
                            </div>
                            <!-- Parameters List -->
                            <div class="parameters-list">
                              <div class="list-item d-flex align-items-center justify-content-between">
                                <div class="name">Strategy APY</div>
                                <div class="value">
                                  3.54% 
                                  <img class="query-icon top-right-tooltip" data-bs-toggle="tooltip" data-bs-placement="left" 
                                  title="APY for ETH is 3.54% APY for stETH is 3.54%" src="@/static/images/icons/query-icon.svg" alt="?" />  
                                </div>
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

                          <!-- Balance Box -->
                          <div class="gray-content-box py-1-half">
                            <div class="content-holder">
                              <div class="heading">
                                <h6>Deposit</h6>
                              </div>
                              <!-- Amount Coin Field -->
                              <div class="amount-coins-field">
                                <div class="field-group limit-cta amount-field">
                                  <div :class="{'input-field': true, 'field-error': showFieldError}"><!-- field error class for showing field error -->
                                    <input type="number" placeholder="Enter" v-model="depositAmount">
                                    <div class="cta">
                                      <span>Max</span>
                                    </div>
                                    <!-- Coin Dropdown -->
                                    <CoinDropdown :coins="depostcoins" :selected-coin="selectedDepositCoin" @update:selected-coin="updateSelectedDepositCoin" />
                                  </div>
                                </div>
                              </div><!-- Amount Coin Field -->
                              <!-- Error Alert -->
                              <div class="alert primary-alert small-alert fixed-alert" v-if="showFieldError">
                                <div class="alert-content">
                                  <div class="d-flex align-items-center">
                                    <div class="icon me-1-half" @click="hideAlert">
                                      <img src="@/static/images/icons/alert-cross-icon.svg" alt="x">
                                    </div>
                                    <span>Deposit amount cannot remain empty!</span>
                                  </div>
                                </div>
                              </div><!-- Error Alert -->
                              <div class="wallet-balance-list">
                                <div class="wallet-balance d-flex align-items-center justify-content-between">
                                  <div class="checkbox-area">
                                    <div class="form-check">
                                      <input class="form-check-input" name="walletbalance" type="radio" value="" id="smartWalletBalance">
                                      <label class="form-check-label" for="smartWalletBalance">
                                        Smart Wallet Balance
                                      </label>
                                    </div>
                                  </div>
                                  <div class="balance">
                                    <span>0.005</span>
                                  </div>
                                </div>
                                <div class="wallet-balance d-flex align-items-center justify-content-between">
                                  <div class="checkbox-area">
                                    <div class="form-check">
                                      <input class="form-check-input" name="walletbalance" type="radio" checked value="" id="metamaskWalletBalance">
                                      <label class="form-check-label" for="metamaskWalletBalance">
                                        Metamask Wallet Balance
                                      </label>
                                    </div>
                                  </div>
                                  <div class="balance">
                                    <span>0.0186709</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div><!-- Balance Box -->

                          <!-- Notification Box -->
                          <div class="gray-content-box notification-option-box py-1-half">
                            <div class="content-holder">
                              <div class="heading">
                                <span>Notification (Optional)</span>
                              </div>
                              <div class="d-flex align-items-center pt-1">
                                <div class="form-check form-switch">
                                  <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked">
                                  <label class="form-check-label" for="flexSwitchCheckChecked"></label>
                                </div>
                                <div class="icon ms-1-half">
                                  <img src="@/static/images/icons/email-envelope-icon.svg" alt="icon">
                                </div>
                                <div class="label mb-0 mx-1-half">
                                  <label>Email</label>
                                </div>
                                <div class="input-field flex-grow-1 ms-1-half">
                                  <input type="email" placeholder="Enter">
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="btn-content p-1">
                            <button class="btn w-100" @click="execute">Execute</button>
                          </div>

                          <!-- CreateWallet Modal -->
                          <div class="modal fade" :class="{ 'show-modal': CreateWalletModal }" id="createWallet-modal" tabindex="-1" aria-hidden="true"  v-if="CreateWalletModal">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">Create Smart Wallet</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="closeModal"></button>
                                    </div>
                                    <div class="modal-body">
                                        <div class="text">
                                          <p>
                                            A Smart Wallet is a collection of interoperable multi-chain smart contracts 
                                            (1 for each chain) exclusively created for & accessible to your wallet. 
                                            With a smart wallet, you can access advanced (decentralized) intelligent 
                                            tools that dramatically reduce your manual operations & increase your capital efficiency. 
                                            <br>
                                            Therefore increase your Defi APY without modifying your strategy.
                                          </p>
                                          <ul class="end-ticked-list">
                                            <li>Intelligent Position Management</li>
                                            <li>Position association</li>
                                            <li>Automation</li>
                                          </ul>
                                        </div>
                                        
                                        <div class="btn-content pb-1-half">
                                          <button class="btn w-100">Create Smart Wallet</button>
                                        </div>
                                        <span>By creating a wallet. I accept NUCL’s Terms, Privacy and Cookies policy.</span>
                                    </div>
                                </div>
                            </div>
                          </div><!-- CreateWallet Modal --> 

                        </div><!-- Right Column -->

                      </div>
                    </div>
                  </div>
                  <!-- Primary Box-->
                  <div class="nucl-primary-content-box mt-1">
                    <div class="box-content">
                      <div class="row">
                        <!-- Left column-->
                        <div class="col-12 col-sm-6">
                         <div class="generic-text-block">
                          <div class="block-content">
                            <div class="heading pt-1-half">
                              <h6>How does it work?</h6>
                            </div>
                            <p>When entering:</p>
                            <ol>
                              <li>Flashloan ETH (about 2 times the principal) from Balancer.</li>
                              <li>Stake ETH for stETH on Lido or swap ETH for stETH on Curve, whichever
                                  approach is more cost-effective (swap if the price rate is 0.2% above the
                                  stake rate).
                              </li>
                              <li>Deposit stETH from step 2 on AAVE V2, then borrow ETH to repay the
                              flashloan.</li>
                            </ol>
                            <p>When withdrawing:</p>
                            <ol>
                              <li>Flashloan ETH (About 2 times the principal) from Balancer.</li>
                              <li>Repay the debt on AAVE V2, then withdraw all stETH.</li>
                              <li>Swap a part of the stETH for ETH on Curve to repay the flashloan.</li>
                            </ol>
                            <div class="heading pt-1-half">
                              <h6>Yield</h6>
                            </div>
                            <ol>
                              <li>Supply APY of stETH on AAVE V2 (if applicable).</li>
                              <li>Staking APY of stETH.</li>
                            </ol>
                            <p>Please be aware that all yields are leveraged.</p>
                          </div>
                         </div>
                        </div>
                        <!-- Right column-->
                        <div class="col-12 col-sm-6">
                          <div class="generic-text-block">
                            <div class="block-content">
                              <div class="heading pt-1-half">
                                <h6>Costs</h6>
                              </div>
                              <ol>
                                <li>Transaction fees and slippage on Dexes. Fees may vary based on market conditions.</li>
                                <li>The swap rate of STETH/ETH may incur some losses or gains relative to Lido’s staking/unstaking rate.</li>
                                <li>Borrow interest rate. When executing the strategy, CIAN leverage your position through borrowing ETH from AAVE V2.</li>
                                <li>Gas Fees.</li>
                                <li><strong>CIA does not charge any fees.</strong></li>
                              </ol>
                              <p>Please be aware that fees incurred in 1, 2, 3 are also getting leveraged.</p>
                              <div class="heading pt-1-half">
                                <h6>Liquidation Protection</h6>
                              </div>
                              <p>To further alleviate the risks related to leverage, this strategy comes with the ‘’Flash-Repay’’ automated function. 
                                If your collateral ratio was to rise above 77%, the system would automatically de-leverage your position in 
                                order to avoid liquidation (83%). This extra layer of protection was implemented to offset possible De-Peg events.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>  
                    </div>
                  </div>
                  <!-- Primary Box-->
                  <div class="nucl-primary-content-box mt-1">
                    <div class="box-content">
                      <div class="row">
                        <!-- Left column-->
                        <div class="col-12 col-sm-6">
                         <div class="generic-text-block">
                          <div class="block-content">
                            <div class="heading pt-1-half">
                              <h6>Decentralized Tooling Platform</h6>
                            </div>
                            <p>CIAN is a decentralized automation tooling/utility platform. When you use automation tools on CIAN, 
                              your funds always stay under your full control in your wallets or the protocols you selected. Same holds 
                              for automated strategies (eg. on this webpage) proposed by CIAN, which are essentially various 
                              combinations of selected CIAN automation tools.</p>
                            <div class="heading pt-1-half">
                              <h6>Smart Wallet</h6>
                            </div>
                            <p>
                              In order for CIAN to keep your automated tasks up & running when you are away, you need a smart wallet 
                              to initiate the (cyclic) execution triggered by the selected automation utilities.
                            </p>
                            <p>
                              Your smart wallet is a dedicated smart contract created with your (EOA) wallet. Complete decentralization
                               is guaranteed by the adoption of EIP2612 standard. Only with the creating wallet, can one withdraw funds 
                               from the smart wallet. These two wallets always work in pairs.
                            </p>
                          </div>
                         </div>
                        </div>
                        <!-- Right column-->
                        <div class="col-12 col-sm-6">
                          <div class="generic-text-block">
                            <div class="block-content">
                              <div class="heading pt-1-half">
                                <h6>Automated Strategy Workflow</h6>
                              </div>
                              <img class="w-85 mx-auto d-block py-1-half" src="@/static/images/automated-str-workflow.svg" alt="workflow image">
                              <div class="reduced-lineheight">
                                <p>To save users’ effort, CIAN implemented this workflow as an all-in-one process, during which you need to sign a couple of times with your creating wallet to :</p>
                                <p>(1)  deposit funds from creating wallet to your smart wallet.</p>
                                <p>(2) authorize the EIP2612 standard.</p>
                                <p>(3) approve the allocation of funds in your smart wallet to the protocols related to the selected strategy.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>  
                    </div>
                  </div>
                </div>
              </div><!-- Tab pane -->

              <!-- Tab Pane -->
              <div class="tab-pane fade" :class="{ show: selectedTab === 'mystrategies-tab' }" id="mystrategies-tab" role="tabpanel" aria-labelledby="mystrategies-tab">
                <div class="pane-content">
                  <div class="row less-gutters flex-flex flex-wrap">
                    <div class="col-12 col-sm-9">
                      <div class="nucl-content-box">
                        <div class="box-content">
                          <div class="row">
                            <div class="col-12 col-sm-6">
                              <div class="heading">
                                <h6>My Position <img class="query-icon top-right-tooltip" data-bs-toggle="tooltip" data-bs-placement="top" 
                                  title="Real-time position of the strategy owners.Negative value is shown for borrowed assets incurred by leveraging." src="@/static/images/icons/query-icon.svg" alt="?" /> </h6>
                              </div>
                              <div class="row">
                                <div class="col-12 col-sm-7">
                                  <!-- item -->
                                  <div class="coin-balance d-flex align-item-center justify-content-between">
                                    <div class="coin-icon-label  pe-1-half">
                                      <div class="icon">
                                        <img src="@/static/images/icons/eth-icon.svg" alt="icon">
                                      </div>
                                      <span>Eth</span>
                                    </div>
                                    <div class="value">
                                      <span>-0.008</span>
                                    </div>
                                  </div><!-- item -->
                                  <!-- item -->
                                  <div class="coin-balance d-flex align-item-center justify-content-between">
                                    <div class="coin-icon-label  pe-1-half">
                                      <div class="icon">
                                        <img src="@/static/images/icons/steth-icon.svg" alt="icon">
                                      </div>
                                      <span>stEth</span>
                                    </div>
                                    <div class="value">
                                      <span>0.008</span>
                                    </div>
                                  </div><!-- item -->

                                </div>
                              </div>
                            </div>
                            <div class="col-12 col-sm-6">
                              <div class="heading">
                                <h6>My Rewards</h6>
                              </div>
                              <div class="row">
                                <div class="col-12 col-sm-7">
                                  <!-- item -->
                                  <div class="coin-balance d-flex align-item-center justify-content-between">
                                    <div class="coin-icon-label  pe-1-half">
                                      <div class="icon">
                                        <img src="@/static/images/icons/steth-icon.svg" alt="icon">
                                      </div>
                                      <span>stEth</span>
                                    </div>
                                    <div class="value">
                                      <span>-0.008</span>
                                    </div>
                                  </div><!-- item -->
                                </div>
                              </div>
                              <div class="btns-content pt-1-half"><!-- Add disabled class here will add disabled styling to btns -->
                                <a href="javascript:void(0);" class="btn medium-btn me-1-half">Compound</a>
                                <a href="javascript:void(0);" class="btn medium-btn" data-bs-toggle="modal" data-bs-target="#withdraw-modal">Withdraw</a>
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

                                            <div class="py-1">
                                              <!-- item -->
                                              <div class="coin-balance d-flex align-item-center justify-content-between">
                                                <div class="coin-icon-label  pe-1-half">
                                                  <div class="icon">
                                                    <img src="@/static/images/icons/eth-icon.svg" alt="icon">
                                                  </div>
                                                  <span>Eth</span>
                                                </div>
                                                <div class="value">
                                                  <span>-0.008</span>
                                                </div>
                                              </div><!-- item -->
                                              <!-- item -->
                                              <div class="coin-balance d-flex align-item-center justify-content-between">
                                                <div class="coin-icon-label  pe-1-half">
                                                  <div class="icon">
                                                    <img src="@/static/images/icons/steth-icon.svg" alt="icon">
                                                  </div>
                                                  <span>stEth</span>
                                                </div>
                                                <div class="value">
                                                  <span>0.008</span>
                                                </div>
                                              </div><!-- item -->
                                            </div>

                                            <!-- Token Dropdown -->
                                            <div class="account-dropdown token-coins-dropdown mb-1">
                                              <div class="label">
                                                <label>The Token You Will Receive</label>
                                              </div>
                                              <!-- Coin Dropdown -->
                                              <div class="full-width-dropdown lightbordered-white-dropdown">
                                                <CoinDropdown :coins="tokencoins" :selected-coin="selectedTokenCoin" @update:selected-coin="updateSelectedTokenCoin" />
                                              </div>
                                            </div>

                                            <div class="input-group my-1">
                                              <label for="customRange" class="form-label">Withdrawal Amount</label>
                                              
                                              <div class="range-amount-input-field">
                                                <div class="input-field position-relative w-100">
                                                  <input type="range" class="form-range" min="0" max="100" id="customRange" @input="updateRangeColor" value="0"> <!-- pleaes check below const rangeValue = ref(0); -->
                                                  <div class="custom-range" :style="{ width: rangeValue + '%' }"></div>
                                                  <span>{{ rangeValue }}%</span>
                                                </div>
                                              </div>

                                            </div>
                                            
                                            <div class="btn-content"> <!-- For disabled btn add disabled class with btn-content class-->
                                              <button class="btn w-100">Confirm</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                              </div><!-- Withdraw Modal --> 

                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-12 col-sm-3">
                      <div class="nucl-content-box">
                        <div class="box-content">
                          <div class="heading mb-1">
                            <h6>Notification</h6>
                          </div>
                          <div class="icon-label d-flex align-items-center mb-1-half">
                            <div class="icon me-1-half">
                              <img src="@/static/images/icons/email-envelope-icon.svg" alt="icon">
                            </div>
                            <span>Email</span>
                          </div>
                          <a class="email-link" href="maito:jack@gmail.com">Jack@gmail.com</a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Box -->
                  <div class="nucl-content-box pb-1-half">
                    <div class="box-content">
                      <div class="d-flex align-items-start justify-content-between flex-wrap">
                        <div class="heading pb-1-half">
                          <h6>Strategy APY</h6>
                        </div>
                        <div class="filter-btns d-flex align-items-center">
                          <div class="item active">
                            <span>24H</span>
                          </div>
                          <div class="item">
                            <span>7D</span>
                          </div>
                          <div class="item">
                            <span>14D</span>
                          </div>
                          <div class="item">
                            <span>30D</span>
                          </div>
                          <div class="item">
                            <span>60D</span>
                          </div>
                          <div class="item">
                            <span>160D</span>
                          </div>
                          <div class="item">
                            <span>ALL</span>
                          </div>
                        </div>
                      </div>
                      
                      <div id="graphchart2" class="graphchart">
                      </div>

                    </div>

                  </div>


                  

                  <!-- Box -->
                  <div class="nucl-content-box transactions-table-box">
                    <div class="box-content">
                      <div class="heading pb-1-half">
                        <h6>Activity</h6>
                      </div>
                      <div class="table-reponsive">
                        <table class="table">
                          <thead>
                            <tr>
                              <th class="sno">#</th>
                              <th>Time</th>
                              <th>Types</th>
                              <th>Asset</th>
                              <th>Status</th>
                            </tr>
                          </thead>
                          <tbody>
                            <!-- No data Tr-->
                            <tr>
                              <td colspan="5" class="nodata">
                                <div class="icon">
                                  <img src="@/static/images/icons/nodata-icon.svg" alt="">
                                </div>
                                <span>No data</span>
                              </td>
                            </tr><!-- No data-->
                            <tr>
                              <td class="sno">1</td>
                              <td>2023-09-25 16:40:08</td>
                              <td>Withdraw</td>
                              <td class="has-icon"><img src="@/static/images/icons/eth-icon.svg" alt="icon" /> ETH - 0.25798</td>
                              <td>Pending...</td>
                            </tr>
                            <tr>
                              <td class="sno">2</td>
                              <td>2023-09-25 16:40:08</td>
                              <td>Withdraw</td>
                              <td class="has-icon"><img src="@/static/images/icons/eth-icon.svg" alt="icon" /> ETH - 0.25798</td>
                              <td class="completed">Completed</td>
                            </tr>
                            <tr>
                              <td class="sno">3</td>
                              <td>2023-09-25 16:40:08</td>
                              <td>Deposit</td>
                              <td class="has-icon"><img src="@/static/images/icons/eth-icon.svg" alt="icon" /> ETH - 0.25798</td>
                              <td class="completed">Completed</td>
                            </tr>
                            
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div><!-- Box -->
                </div>
              </div><!-- Tab pane -->

            </div><!-- Tab Content -->
          </div>
        </div>
      </div>
    </main>
</template>

<script>
import Header from '@/components/Header.vue';
import CoinDropdown from '@/components/CoinDropdown.vue';
import { Tooltip } from 'bootstrap';
import { ref, onBeforeUnmount, onMounted,watch } from 'vue';
import { G2, Line } from '@antv/g2plot';

export default {
  components: {
    Header,
    CoinDropdown,
  },
  setup() {
    
    const data1 = ref([
      {coin: 'Deposit ETH', time: '15:00', percent: 3.8 },
      {coin: 'Deposit ETH', time: '16:30', percent: 3.8 },
      {coin: 'Deposit ETH', time: '18:00', percent: 3.8 },
      {coin: 'Deposit ETH', time: '19:30', percent: 3.8 },
      {coin: 'Deposit ETH', time: '21:00', percent: 3.8 },
      {coin: 'Deposit ETH', time: '22:30', percent: 3.6 },
      {coin: 'Deposit ETH', time: '00:00', percent: 3.6 },
      {coin: 'Deposit ETH', time: '01:30', percent: 3.6 },
      {coin: 'Deposit ETH', time: '03:00', percent: 3.6 },
      {coin: 'Deposit ETH', time: '04:30', percent: 3.6 },
      {coin: 'Deposit ETH', time: '06:00', percent: 3.6 },
      {coin: 'Deposit ETH', time: '07:30', percent: 3.6 },
      {coin: 'Deposit ETH', time: '09:00', percent: 3.6 },
      {coin: 'Deposit ETH', time: '10:30', percent: 3.6 },
      {coin: 'Deposit ETH', time: '12:00', percent: 3.6 },
      {coin: 'Deposit ETH', time: '13:30', percent: 3.6 },
      
      {coin: 'Deposit stETH', time: '15:00', percent: 3.8 },
      {coin: 'Deposit stETH', time: '16:30', percent: 3.8 },
      {coin: 'Deposit stETH', time: '18:00', percent: 3.8 },
      {coin: 'Deposit stETH', time: '19:30', percent: 3.8 },
      {coin: 'Deposit stETH', time: '21:00', percent: 3.8 },
      {coin: 'Deposit stETH', time: '22:30', percent: 3.6 },
      {coin: 'Deposit stETH', time: '00:00', percent: 3.6 },
      {coin: 'Deposit stETH', time: '01:30', percent: 3.6 },
      {coin: 'Deposit stETH', time: '03:00', percent: 3.6 },
      {coin: 'Deposit stETH', time: '04:30', percent: 3.6 },
      {coin: 'Deposit stETH', time: '06:00', percent: 3.6 },
      {coin: 'Deposit stETH', time: '07:30', percent: 3.6 },
      {coin: 'Deposit stETH', time: '09:00', percent: 3.6 },
      {coin: 'Deposit stETH', time: '10:30', percent: 3.6 },
      {coin: 'Deposit stETH', time: '12:00', percent: 3.6 },
      {coin: 'Deposit stETH', time: '13:30', percent: 3.6 },
    ]);

    const data2 = ref([
      {coin: 'Deposit ETH', time: '15:00', percent: 3.8 },
      {coin: 'Deposit ETH', time: '16:30', percent: 3.8 },
      {coin: 'Deposit ETH', time: '18:00', percent: 3.8 },
      {coin: 'Deposit ETH', time: '19:30', percent: 3.8 },
      {coin: 'Deposit ETH', time: '21:00', percent: 3.8 },
      {coin: 'Deposit ETH', time: '22:30', percent: 3.6 },
      {coin: 'Deposit ETH', time: '00:00', percent: 3.6 },
      {coin: 'Deposit ETH', time: '01:30', percent: 3.6 },
      {coin: 'Deposit ETH', time: '03:00', percent: 3.6 },
      {coin: 'Deposit ETH', time: '04:30', percent: 3.6 },
      {coin: 'Deposit ETH', time: '06:00', percent: 3.6 },
      {coin: 'Deposit ETH', time: '07:30', percent: 3.6 },
      {coin: 'Deposit ETH', time: '09:00', percent: 3.6 },
      {coin: 'Deposit ETH', time: '10:30', percent: 3.6 },
      {coin: 'Deposit ETH', time: '12:00', percent: 3.6 },
      {coin: 'Deposit ETH', time: '13:30', percent: 3.6 },
      
      {coin: 'Deposit stETH', time: '15:00', percent: 3.8 },
      {coin: 'Deposit stETH', time: '16:30', percent: 3.8 },
      {coin: 'Deposit stETH', time: '18:00', percent: 3.8 },
      {coin: 'Deposit stETH', time: '19:30', percent: 3.8 },
      {coin: 'Deposit stETH', time: '21:00', percent: 3.8 },
      {coin: 'Deposit stETH', time: '22:30', percent: 3.6 },
      {coin: 'Deposit stETH', time: '00:00', percent: 3.6 },
      {coin: 'Deposit stETH', time: '01:30', percent: 3.6 },
      {coin: 'Deposit stETH', time: '03:00', percent: 3.6 },
      {coin: 'Deposit stETH', time: '04:30', percent: 3.6 },
      {coin: 'Deposit stETH', time: '06:00', percent: 3.6 },
      {coin: 'Deposit stETH', time: '07:30', percent: 3.6 },
      {coin: 'Deposit stETH', time: '09:00', percent: 3.6 },
      {coin: 'Deposit stETH', time: '10:30', percent: 3.6 },
      {coin: 'Deposit stETH', time: '12:00', percent: 3.6 },
      {coin: 'Deposit stETH', time: '13:30', percent: 3.6 },
    ]);

    const selectedTab = ref('automated-create-tab');
    const depostcoins = ref([
      { id: 1, name: 'CRV', image: 'src/static/images/icons/crv-icon.svg' },
      { id: 2, name: 'DAI', image: 'src/static/images/icons/dai-icon.svg' },
    ]);
    const selectedDepositCoin = ref(depostcoins.value[0]); // Set the initial selected coin



    const tokencoins = ref([
      { id: 1, name: 'ETH', image: 'src/static/images/icons/eth-icon.svg' },
      { id: 2, name: 'stETH', image: 'src/static/images/icons/steth-icon.svg' },
    ]);
    const selectedTokenCoin = ref(tokencoins.value[0]);
    const updateSelectedTokenCoin = (coin) => {
      selectedTokenCoin.value = coin;
    };


    const depositAmount = ref(null);
    const showFieldError = ref(false);
    const CreateWalletModal = ref(false);
    const modalShown = ref(false);
    const rangeValue = ref(0);

    const displayedRangeValue = ref(rangeValue.value);
    const updateRangeColor = (event) => {
      rangeValue.value = event.target.value;
    };

    const isDropdownOpen = ref(false);

    const toggleDropdown = () => {
      isDropdownOpen.value = !isDropdownOpen.value;
    };

    const updateSelectedDepositCoin = (coin) => {
      selectedDepositCoin.value = coin;
    };

    const execute = () => {
      if (!depositAmount.value) {
        showFieldError.value = true;
      } else if (!modalShown.value) {
        showFieldError.value = false;
        CreateWalletModal.value = true;
        // Assuming modalShown is defined elsewhere
        modalShown.value = true; 
      }
    };

    const hideAlert = () => {
      showFieldError.value = false;
    };

    const closeModal = () => {
      CreateWalletModal.value = false;
    };

    let plot1;
    let plot2;
    
    const createChart = (containerId, data) => {
      return new Line(containerId, {
        data,
        xField: 'time',
        yField: 'percent',
        seriesField: 'coin',
        color: ['#535cff', '#ffd205'],
        smooth: true,
        autoFit: true,
        xAxis: {
          tickCount: 16,
        },
        yAxis: {
          label: {
            formatter: (v) => `${v}%`,
          },
        },
        animation: {
          appear: {
            animation: 'wave-in',
            duration: 3000,
          },
        },
      });
    };

    let chart1 = null;
    let chart2 = null;

    onMounted(() => {
      chart1 = createChart('graphchart', data1.value);
      chart1.render();

      chart2 = createChart('graphchart2', data2.value);
      chart2.render();
    });
    onBeforeUnmount(() => {
      if (chart1) {
        chart1.destroy();
      }
      if (chart2) {
        chart2.destroy();
      }
    });

    return {
      data1,
      data2,
      selectedTab,
      depostcoins,
      selectedDepositCoin,
      depositAmount,
      showFieldError,
      CreateWalletModal,
      isDropdownOpen,
      toggleDropdown,
      updateSelectedDepositCoin,
      execute,
      hideAlert,
      closeModal,
      rangeValue,
      updateRangeColor,
      displayedRangeValue,
      tokencoins,
      selectedTokenCoin,
      updateSelectedTokenCoin,
    };
  },
  mounted() {
    new Tooltip(document.body, {
      selector: "[data-bs-toggle='tooltip']",
    });
  },
};
</script>

<style lang="scss" scoped>
.transactions-table-box{
  .table{
    table-layout: fixed;
    th{
      &.sno{
        width: 0.8rem;
      }
    }
    td{
      &.nodata{
        font-weight: 500;
        border: none;
        padding: 0.8rem ;
        .icon{
            padding-bottom: 0.05rem;
        }
      }
      &.sno{
        width: 0.4rem;
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
.query-icon[title]:after {
    white-space: pre-line;
    line-height: 1.5;
}
.tooltip-inner {
    white-space: pre-wrap;
}
.form-range{
  margin: 0 !important;
}
.input-group .input-field{
  line-height: 1;
  border-radius: 0.05rem;
}
.custom-range {
  position: absolute;
  left:0;
  top: 0.03rem;
  height: 0.08rem;

  z-index: 0;
  // border: 0.02rem solid var(--gray-color);
  border-top-left-radius: 0.05rem;
  border-bottom-left-radius: 0.05rem;
  border-radius: 0.05rem;
  overflow: hidden;
  pointer-events: none;
  z-index: 1;
  box-sizing: content-box;
  background: var(--blue-color); /* Blue color for the selected portion */
}
.range-amount-input-field{
  padding-right: 0.35rem;
  width: 100%;
  margin-bottom: 0.1rem;
  span{
    position: absolute;
    right: -0.35rem;
    top: 0.01rem;
    color: var(--black-color);
    font-weight: 500;
  }
}

</style>
