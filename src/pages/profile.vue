<template>
    <main>
      <Header pageTitle="My Profile" />
      <div class="main-content">
        <div class="profile-main-content d-flex flex-wrap">
          <div class="profile-main">
            <section>
              <div class="section-title">
                <h6>Overview</h6>
              </div>
              <div class="overview-content-boxes row d-flex flex-wrap">
                <!--box-->
                <div class="box-item col-12 col-sm-4">
                  <div class="item-content">
                    <div class="data">
                      <div class="heading">
                        <span>Net Worth ($)</span>
                      </div>
                      <div class="value">
                          <strong>0</strong>
                        </div>
                    </div>
                    <div class="icon">
                      <img src="@/static/images/icons/networth-icon.svg" alt="icon">
                    </div>
                  </div>
                </div><!--box-->
                <!--box-->
                <div class="box-item col-12 col-sm-4">
                  <div class="item-content">
                    <div class="data">
                      <div class="heading">
                        <span>Gross Asset ($)</span>
                      </div>
                      <div class="value">
                          <strong>0</strong>
                        </div>
                    </div>
                    <div class="icon">
                      <img src="@/static/images/icons/gross-assets-icon.svg" alt="icon">
                    </div>
                  </div>
                </div><!--box-->
                <!--box-->
                <div class="box-item col-12 col-sm-4">
                  <div class="item-content">
                    <div class="data">
                      <div class="heading">
                        <span>Debt ($)</span>
                      </div>
                      <div class="value">
                          <strong>0</strong>
                        </div>
                    </div>
                    <div class="icon">
                      <img src="@/static/images/icons/debt-icon.svg" alt="icon">
                    </div>
                  </div>
                </div><!--box-->
                <!--box-->
                <div class="box-item col-12 col-sm-4">
                  <div class="item-content">
                    <div class="data">
                      <div class="heading">
                        <span>Collateral ($)</span>
                      </div>
                      <div class="value">
                          <strong>0</strong>
                        </div>
                    </div>
                    <div class="icon">
                      <img src="@/static/images/icons/collateral-icon.svg" alt="icon">
                    </div>
                  </div>
                </div><!--box-->

              </div>
            </section>

            <section class="pt-1">
              <div class="section-title">
                <h6>Asset overview</h6>
              </div>
              <div class="assets-overview-boxes row d-flex flex-wrap">
                <!--box-->
                <div class="box-item col-12 col-sm-6">
                  <div class="item-content">
                    <div class="icon">
                      <img src="@/static/images/icons/smart-wallet-icon.svg" alt="icon">
                    </div>
                    <div class="heading">
                      <span>Smart Wallet</span>
                    </div>
                    <div class="progress-item">
                      <div class="progress">
                        <div class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </div>
                    <div class="value">
                      <strong>0</strong>
                    </div>
                  </div>
                </div><!--box-->
                <!--box-->
                <div class="box-item col-12 col-sm-6">
                  <div class="item-content">
                    <div class="icon">
                      <img src="@/static/images/icons/collateral-icon.svg" alt="icon">
                    </div>
                    <div class="heading">
                      <span>Collateral</span>
                    </div>
                    <div class="progress-item">
                      <div class="progress">
                        <div class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </div>
                    <div class="value">
                      <strong>0</strong>
                    </div>
                  </div>
                </div><!--box-->
                <!--box-->
                <div class="box-item col-12 col-sm-6">
                  <div class="item-content">
                    <div class="icon">
                      <img src="@/static/images/icons/debt-icon.svg" alt="icon">
                    </div>
                    <div class="heading">
                      <span>Debt</span>
                    </div>
                    <div class="progress-item">
                      <div class="progress">
                        <div class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </div>
                    <div class="value">
                      <strong>0</strong>
                    </div>
                  </div>
                </div><!--box-->
                <!--box-->
                <div class="box-item col-12 col-sm-6">
                  <div class="item-content">
                    <div class="icon">
                      <img src="@/static/images/icons/liquidity-bar-icon.svg" alt="icon">
                    </div>
                    <div class="heading">
                      <span>Liquidity</span>
                    </div>
                    <div class="progress-item">
                      <div class="progress">
                        <div class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </div>
                    <div class="value">
                      <strong>0</strong>
                    </div>
                  </div>
                </div><!--box-->
                <!--box-->
                <div class="box-item col-12 col-sm-6">
                  <div class="item-content">
                    <div class="icon">
                      <img src="@/static/images/icons/yield-farm-icon.svg" alt="icon">
                    </div>
                    <div class="heading">
                      <span>Yield Farm</span>
                    </div>
                    <div class="progress-item">
                      <div class="progress">
                        <div class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </div>
                    <div class="value">
                      <strong>0</strong>
                    </div>
                  </div>
                </div><!--box-->
                <!--box-->
                <div class="box-item col-12 col-sm-6">
                  <div class="item-content">
                    <div class="icon">
                      <img src="@/static/images/icons/strategy-bar-icon.svg" alt="icon">
                    </div>
                    <div class="heading">
                      <span>Strategy</span>
                    </div>
                    <div class="progress-item">
                      <div class="progress">
                        <div class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </div>
                    <div class="value">
                      <strong>0</strong>
                    </div>
                  </div>
                </div><!--box-->

              </div>
            </section>
          </div>

          <!-- profile-aside-->
          <div class="profile-aside">
            <!-- Profile Aside -->
            <div class="aside-content">

              <!-- screen 1 -->
              <div class="smart-wallet-box" style="display: none;">
                <div class="icon-title">
                  <h6>
                    <img src="@/static/images/icons/wallet-icon.svg" alt="wallet">
                    NUCL Smart Wallet
                  </h6>
                </div>
                <!-- Create Wallet -->
                <div class="create-wallet-box-content">
                  <div class="title">
                    <h2>Create Smart Wallet</h2>
                    <div class="text">
                      <div class="description">
                        <p>
                          A Smart Wallet is a collection of interoperable multi-chain smart contracts (1 for each chain) exclusively created for & accessible to your wallet. With a smart wallet, you can access advanced (decentralized) intelligent tools that dramatically reduce your manual operations & increase your capital efficiency. Therefore increase your Defi APY without modifying your strategy.
                        </p>
                      </div>
                      <ul class="end-ticked-list">
                        <li>Intelligent Position Management</li>
                        <li>Position association</li>
                        <li>Automation</li>
                      </ul>
                    </div>
                    <div class="btn-content">
                      <a href="javascript:void(0)" class="btn">Create Smart Wallet</a>
                    </div>
                    <div class="note">
                      <span>By creating a wallet. I accept NUCL’s Terms, Privacy and Cookies policy.</span>
                    </div>
                  </div>
                </div>
              </div><!-- screen 1 -->

              <!-- screen 2 -->
              <div class="smart-wallet-box walletbox-afterlogin" v-if="showWalletbox">
                <div class="icon-title">
                  <h6>
                    <img src="@/static/images/icons/wallet-icon.svg" alt="wallet">
                    NUCL Smart Wallet
                  </h6>
                </div>
                <!-- Create Smart Wallet -->
                <div class="smart-wallet-data-content">
                  <!-- Notifiction Box-->
                  <div class="notification-box">
                    <div class="box-content d-flex align-items-center flex-wrap">
                      <div class="icon">
                        <img src="@/static/images/icons/disclaimer-alert-icon.svg" alt="icon">
                      </div>
                      <div class="text">
                        <span>Deposit assets in your smart wallet (decentralized) to enjoy NUCL's functions</span>
                      </div>
                    </div>
                  </div><!-- notifiction Box-->
                  <div class="wallet-amount py-1 text-center">
                      <span>$0.00</span>
                  </div>

                  <!--Depost/Withdraw boxes-->
                  <div class="transaction-options row d-flex flex-wrap justify-content-between text-center">
                    <div class="option-item col-12 col-sm-6" @click="showDepositScreen">
                      <div class="item-content">
                        <div class="icon">
                          <img src="@/static/images/icons/deposit-icon.svg" alt="icon">
                        </div>
                        <div class="caption">
                          <span>Deposit</span>
                        </div>
                      </div>
                    </div>
                    <div class="option-item col-12 col-sm-6" @click="showWithdrawScreen">
                      <div class="item-content">
                        <div class="icon">
                          <img src="@/static/images/icons/withdraw-icon.svg" alt="icon">
                        </div>
                        <div class="caption">
                          <span>Withdraw</span>
                        </div>
                      </div>
                    </div>
                  </div><!--Depost/Withdraw boxes-->

                  <!--Search Field-->
                  <div class="search-field">
                    <div class="search">
                      <div class="icon">
                        <img src="@/static/images/icons/search-field-icon.svg" alt="icon">
                      </div>
                      <div class="input-field">
                        <input type="text" placeholder="Search">
                      </div>
                    </div><!--Search Field-->
                  </div>
                  <!-- Coins list -->
                  <div class="coin-boxes-list">
                    <!--Coin Box-->
                    <div class="coin-box-item">
                      <div class="item-content">
                        <div class="icon">
                          <img src="@/static/images/icons/eth-icon.svg" alt="icon">
                        </div>
                        <div class="data">
                          <div class="name">
                            <span>0 ETH</span>
                          </div>
                          <div class="amount">
                            <span>$ 0</span>
                          </div>
                        </div>
                        <div class="cta">
                          <a href="javascript:void(0)" @click="showDepositScreen">Deposit</a>
                        </div>
                      </div>
                    </div><!--Coin Box-->
                    <!--Coin Box-->
                    <div class="coin-box-item">
                      <div class="item-content">
                        <div class="icon">
                          <img src="@/static/images/icons/bnb-icon.svg" alt="icon">
                        </div>
                        <div class="data">
                          <div class="name">
                            <span>0 BNB</span>
                          </div>
                          <div class="amount">
                            <span>$ 0</span>
                          </div>
                        </div>
                        <div class="cta">
                          <a href="javascript:void(0)" @click="showDepositScreen">Deposit</a>
                        </div>
                      </div>
                    </div><!--Coin Box-->
                    <!--Coin Box-->
                    <div class="coin-box-item">
                      <div class="item-content">
                        <div class="icon">
                          <img src="@/static/images/icons/crv-icon.svg" alt="icon">
                        </div>
                        <div class="data">
                          <div class="name">
                            <span>0 CRV</span>
                          </div>
                          <div class="amount">
                            <span>$ 0</span>
                          </div>
                        </div>
                        <div class="cta">
                          <a href="javascript:void(0)" @click="showDepositScreen">Deposit</a>
                        </div>
                      </div>
                    </div><!--Coin Box-->
                    <!--Coin Box-->
                    <div class="coin-box-item">
                      <div class="item-content">
                        <div class="icon">
                          <img src="@/static/images/icons/dai-icon.svg" alt="icon">
                        </div>
                        <div class="data">
                          <div class="name">
                            <span>0 DAI</span>
                          </div>
                          <div class="amount">
                            <span>$ 0</span>
                          </div>
                        </div>
                        <div class="cta">
                          <a href="javascript:void(0)" @click="showDepositScreen">Deposit</a>
                        </div>
                      </div>
                    </div><!--Coin Box-->
                  </div><!-- Coins list -->
                </div>
              </div><!-- screen 2 -->

              <!-- Deposit Screen -->
              <div class="smart-wallet-box deposit-screen" v-if="depositScreen">

                <div class="heading backto-walletdata d-flex align-items-center">
                  <div class="icon" @click="showWalletDataScreen">
                    <img src="@/static/images/icons/curved-backarrow-icon.svg" alt="<">
                  </div>
                  <h6>Deposit</h6>
                </div>

                <div class="qrcode-box">
                  <div class="box-content">
                      <div class="content-holder">
                        <div class="barcode">
                        <img src="@/static/images/barcode.png" width="140" height="140" alt="barcode">
                      </div>
                      <div class="code-cta">
                        <div class="code">
                          <span>0xf354...16bt</span>
                        </div>
                        <div class="icon">
                          <img src="@/static/images/icons/copy-icon.svg" alt="copy">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!--Search Field-->
                <div class="search-field">
                    <div class="search">
                      <div class="icon">
                        <img src="@/static/images/icons/search-field-icon.svg" alt="icon">
                      </div>
                      <div class="input-field">
                        <input type="text" placeholder="Search">
                      </div>
                    </div><!--Search Field-->
                  </div>
                  <!-- Coins list -->
                  <div class="coin-boxes-list">
                    <!--Coin Box-->
                    <div class="coin-box-item">
                      <div class="item-content">
                        <div class="icon">
                          <img src="@/static/images/icons/eth-icon.svg" alt="icon">
                        </div>
                        <div class="data">
                          <div class="name">
                            <span>0 ETH</span>
                          </div>
                          <div class="amount">
                            <span>$ 0</span>
                          </div>
                        </div>
                        <div class="cta">
                          <a href="javascript:void(0)" @click="showDepositAmountScreen">Deposit</a>
                        </div>
                      </div>
                    </div><!--Coin Box-->
                    <!--Coin Box-->
                    <div class="coin-box-item">
                      <div class="item-content">
                        <div class="icon">
                          <img src="@/static/images/icons/bnb-icon.svg" alt="icon">
                        </div>
                        <div class="data">
                          <div class="name">
                            <span>0 BNB</span>
                          </div>
                          <div class="amount">
                            <span>$ 0</span>
                          </div>
                        </div>
                        <div class="cta">
                          <a href="javascript:void(0)">Deposit</a>
                        </div>
                      </div>
                    </div><!--Coin Box-->
                    <!--Coin Box-->
                    <div class="coin-box-item">
                      <div class="item-content">
                        <div class="icon">
                          <img src="@/static/images/icons/crv-icon.svg" alt="icon">
                        </div>
                        <div class="data">
                          <div class="name">
                            <span>0 CRV</span>
                          </div>
                          <div class="amount">
                            <span>$ 0</span>
                          </div>
                        </div>
                        <div class="cta">
                          <a href="javascript:void(0)">Deposit</a>
                        </div>
                      </div>
                    </div><!--Coin Box-->
                    <!--Coin Box-->
                    <div class="coin-box-item">
                      <div class="item-content">
                        <div class="icon">
                          <img src="@/static/images/icons/dai-icon.svg" alt="icon">
                        </div>
                        <div class="data">
                          <div class="name">
                            <span>0 DAI</span>
                          </div>
                          <div class="amount">
                            <span>$ 0</span>
                          </div>
                        </div>
                        <div class="cta">
                          <a href="javascript:void(0)">Deposit</a>
                        </div>
                      </div>
                    </div><!--Coin Box-->
                    <!--Coin Box-->
                    <div class="coin-box-item">
                      <div class="item-content">
                        <div class="icon">
                          <img src="@/static/images/icons/dai-icon.svg" alt="icon">
                        </div>
                        <div class="data">
                          <div class="name">
                            <span>0 DAI</span>
                          </div>
                          <div class="amount">
                            <span>$ 0</span>
                          </div>
                        </div>
                        <div class="cta">
                          <a href="javascript:void(0)">Deposit</a>
                        </div>
                      </div>
                    </div><!--Coin Box-->
                  </div><!-- Coins list -->
              
              </div><!-- Deposit Screen -->

              <!-- Deposit Amount Screen -->
              <div class="smart-wallet-box deposite-amout-screen" v-if="depositAmountScreen">
                <div class="heading backto-walletdata d-flex align-items-center">
                  <div class="icon" @click="showWalletDataScreen">
                    <img src="@/static/images/icons/curved-backarrow-icon.svg" alt="<">
                  </div>
                  <h6>Deposit</h6>
                </div>
                <!--Coin Box-->
                <div class="coin-box-item no-cta">
                  <div class="item-content">
                    <div class="icon">
                      <img src="@/static/images/icons/eth-icon.svg" alt="icon">
                    </div>
                    <div class="data">
                      <div class="name">
                        <span>Binance</span>
                      </div>
                      <div class="amount">
                        <span>80.23568974 ETH</span>
                      </div>
                    </div>
                  </div>
                </div><!--Coin Box-->

                <!-- Amount Field -->
                <div class="field-group limit-cta amount-field">
                  <div class="input-field">
                    <input type="number" placeholder="Enter" >
                    <div class="cta">
                      <span>Max</span>
                    </div>
                  </div>
                </div><!-- Amount Field -->

                <div class="btn-content">
                  <button class="btn w-100 almost-zero-b-radius">Deposite</button>
                </div>
              </div><!-- Deposit Amount Screen -->

              <!-- Withdraw Screen -->
              <div class="smart-wallet-box widhdraw-screen" v-if="withdrawScreen">
                <div class="heading backto-walletdata d-flex align-items-center">
                  <div class="icon" @click="showWalletDataScreen">
                    <img src="@/static/images/icons/curved-backarrow-icon.svg" alt="<">
                  </div>
                  <h6>Widthdraw</h6>
                </div>
                <!--Search Field-->
                <div class="search-field">
                    <div class="search">
                      <div class="icon">
                        <img src="@/static/images/icons/search-field-icon.svg" alt="icon">
                      </div>
                      <div class="input-field">
                        <input type="text" placeholder="Search">
                      </div>
                    </div><!--Search Field-->
                  </div>
                  <!-- Coins list -->
                  <div class="coin-boxes-list">
                    <!--Coin Box-->
                    <div class="coin-box-item">
                      <div class="item-content">
                        <div class="icon">
                          <img src="@/static/images/icons/eth-icon.svg" alt="icon">
                        </div>
                        <div class="data">
                          <div class="name">
                            <span>0 ETH</span>
                          </div>
                          <div class="amount">
                            <span>$ 0</span>
                          </div>
                        </div>
                        <div class="cta">
                          <a href="javascript:void(0)" @click="showWithdrawAmountScreen">Withdraw</a>
                        </div>
                      </div>
                    </div><!--Coin Box-->
                    <!--Coin Box-->
                    <div class="coin-box-item">
                      <div class="item-content">
                        <div class="icon">
                          <img src="@/static/images/icons/bnb-icon.svg" alt="icon">
                        </div>
                        <div class="data">
                          <div class="name">
                            <span>0 BNB</span>
                          </div>
                          <div class="amount">
                            <span>$ 0</span>
                          </div>
                        </div>
                        <div class="cta">
                          <a href="javascript:void(0)" @click="showWithdrawAmountScreen">Withdraw</a>
                        </div>
                      </div>
                    </div><!--Coin Box-->
                    <!--Coin Box-->
                    <div class="coin-box-item">
                      <div class="item-content">
                        <div class="icon">
                          <img src="@/static/images/icons/crv-icon.svg" alt="icon">
                        </div>
                        <div class="data">
                          <div class="name">
                            <span>0 CRV</span>
                          </div>
                          <div class="amount">
                            <span>$ 0</span>
                          </div>
                        </div>
                        <div class="cta">
                          <a href="javascript:void(0)"  @click="showWithdrawAmountScreen">Withdraw</a>
                        </div>
                      </div>
                    </div><!--Coin Box-->
                    <!--Coin Box-->
                    <div class="coin-box-item">
                      <div class="item-content">
                        <div class="icon">
                          <img src="@/static/images/icons/dai-icon.svg" alt="icon">
                        </div>
                        <div class="data">
                          <div class="name">
                            <span>0 DAI</span>
                          </div>
                          <div class="amount">
                            <span>$ 0</span>
                          </div>
                        </div>
                        <div class="cta">
                          <a href="javascript:void(0)" @click="showWithdrawAmountScreen">Withdraw</a>
                        </div>
                      </div>
                    </div><!--Coin Box-->
                    <!--Coin Box-->
                    <div class="coin-box-item">
                      <div class="item-content">
                        <div class="icon">
                          <img src="@/static/images/icons/dai-icon.svg" alt="icon">
                        </div>
                        <div class="data">
                          <div class="name">
                            <span>0 DAI</span>
                          </div>
                          <div class="amount">
                            <span>$ 0</span>
                          </div>
                        </div>
                        <div class="cta">
                          <a href="javascript:void(0)" @click="showWithdrawAmountScreen">Withdraw</a>
                        </div>
                      </div>
                    </div><!--Coin Box-->
                    <!--Coin Box-->
                    <div class="coin-box-item">
                      <div class="item-content">
                        <div class="icon">
                          <img src="@/static/images/icons/dai-icon.svg" alt="icon">
                        </div>
                        <div class="data">
                          <div class="name">
                            <span>0 DAI</span>
                          </div>
                          <div class="amount">
                            <span>$ 0</span>
                          </div>
                        </div>
                        <div class="cta">
                          <a href="javascript:void(0)" @click="showWithdrawAmountScreen">Withdraw</a>
                        </div>
                      </div>
                    </div><!--Coin Box-->
                    <!--Coin Box-->
                    <div class="coin-box-item">
                      <div class="item-content">
                        <div class="icon">
                          <img src="@/static/images/icons/dai-icon.svg" alt="icon">
                        </div>
                        <div class="data">
                          <div class="name">
                            <span>0 DAI</span>
                          </div>
                          <div class="amount">
                            <span>$ 0</span>
                          </div>
                        </div>
                        <div class="cta">
                          <a href="javascript:void(0)" @click="showWithdrawAmountScreen">Withdraw</a>
                        </div>
                      </div>
                    </div><!--Coin Box-->
                  </div><!-- Coins list -->

              </div><!-- Withdraw Screen -->

                <!-- Withdraw Amount Screen -->
              <div class="smart-wallet-box withdraw-amout-screen" v-if="withdrawAmountScreen">
                <div class="heading backto-walletdata d-flex align-items-center">
                  <div class="icon" @click="showWalletDataScreen">
                    <img src="@/static/images/icons/curved-backarrow-icon.svg" alt="<">
                  </div>
                  <h6>Withdraw</h6>
                </div>
                <!--Coin Box-->
                <div class="coin-box-item no-cta">
                  <div class="item-content">
                    <div class="icon">
                      <img src="@/static/images/icons/eth-icon.svg" alt="icon">
                    </div>
                    <div class="data">
                      <div class="name">
                        <span>Binance</span>
                      </div>
                      <div class="amount">
                        <span>80.23568974 ETH</span>
                      </div>
                    </div>
                  </div>
                </div><!--Coin Box-->

                <!-- Amount Field -->
                <div class="field-group limit-cta amount-field">
                  <div class="input-field">
                    <input type="number" placeholder="Enter" >
                    <div class="cta">
                      <span>Max</span>
                    </div>
                  </div>
                </div><!-- Amount Field -->
                
                <!-- Notifiction Box-->
                <div class="notification-box">
                    <div class="box-content d-flex align-items-center flex-wrap">
                      <div class="icon">
                        <img src="@/static/images/icons/disclaimer-alert-icon.svg" alt="icon">
                      </div>
                      <div class="text">
                        <span>Funds are withdrawn to the owner of smart wallet: wallet address(0x0000...2222)</span>
                      </div>
                    </div>
                  </div><!-- notifiction Box-->

                <div class="btn-content">
                  <button class="btn w-100 almost-zero-b-radius">Withdraw</button>
                </div>
              </div><!-- Deposit Amount Screen -->

            </div><!-- aside content -->
          </div><!-- profile-aside-->
        </div>


         <!-- Bottom Right Alert -->
         <div class="alert bottom-right-alert" v-if="showBottomRightAlert">
            <div class="alert-content">
              <div class="alert-header">
                <div class="heading">
                  <h6>Wallet Connected</h6>
                </div>
                <button type="button" class="btn-close" @click="hideBottomRightAlert">
                  
                </button>
              </div>
              <div class="alert-body">
                <span>0xf37386577ede41efc7aeA90C50572C91465e195e</span>
              </div>
            </div>
          </div><!-- Bottom Right Alert -->

      </div>
    </main>
</template>


<script>
import Header from '@/components/Header.vue';
export default {
  components: {
    Header,
  },
  data() {
    return {
      showWalletbox: true,
      depositScreen: false,
      depositAmountScreen: false,
      withdrawScreen: false,
      withdrawAmountScreen: false,
      showBottomRightAlert: false,
    }
  },
  methods: {
    showWalletDataScreen(){
      this.showWalletbox= true;
      this.depositScreen = false;
      this.withdrawScreen = false;
    },
    showDepositScreen() {
      this.showWalletbox = false;
      this.depositScreen = true;
    },
    showDepositAmountScreen(){
      this.depositScreen = false;
      this.depositAmountScreen = true;
    },
    showWithdrawScreen(){
      this.showWalletbox = false;
      this.depositAmountScreen = false;
      this.withdrawScreen = true;
    },
    showWithdrawAmountScreen(){
      this.withdrawScreen = false;
      this.withdrawAmountScreen = true;
    },
    hideBottomRightAlert() {
      this.showBottomRightAlert = false; 
    },
  },
  mounted() {
    setTimeout(() => {
      this.showBottomRightAlert = true; // Trigger the animation
    }, 500);
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
.profile-main-content{
  height: 100%;
  .profile-main{
    padding: 0.36rem 0.42rem;
    width: calc(100% - 3rem);
  }
  .profile-aside{
    width: 3rem;
    .aside-content{
      height: 100%;
      overflow: auto;
    }
  }
}
</style>