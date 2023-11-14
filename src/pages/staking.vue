<template>
    <main>
      <Header pageTitle="Staking" />
      <div class="main-content">
        <div class="staking-main-content">
            <div class="main-title">
                <h2>Ether Staking</h2>
            </div>
            <div class="title-description">
                <p>Stake ETH and receive ETH while staking</p>
            </div>
            <div class="boxes-content-holder">
                <!-- Stake Box -->
                <div id="stakeboxblock" class="stake-box-block box-item" v-if="showStakeBox">
                    <div class="box-content">
                        <div class="header-area">
                            <div class="top-content row d-flex align-items-center">
                                <div class="col-sm-8 left-content">
                                    <div class="nav-item ms-auto me-0" id="claimbtn">
                                        <a href="javascript: void(0);" class="nav-link btn-link" @click="postClaim">Claim>></a>
                                    </div>
                                </div>
                                <div class="col-sm-4 right-content">
                                    <div class="title">
                                        <h3>earned <em>{{ earned }} ETH</em></h3>
                                    </div>
                                </div>
                            </div>
                            <div class="bottom-content row">
                                <div class="col-sm-8 left-content">
                                    <div class="data-label">
                                        <h6>Staked Amount</h6>
                                    </div>
                                    <div class="data-value">
                                        <span data-bs-toggle="tooltip" data-bs-placement="top" 
                                            :title="stakedAmount">{{ stakedAmount }} ETH</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="main-area">
                            <ul class="nav nav-tabs">
                                <li class="nav-item" id="stake-tab">
                                    <a href="javascript: void(0);" class="nav-link active">Stake</a>
                                </li>
                                <li class="nav-item" id="withdraw-tab">
                                    <a href="javascript: void(0);" class="nav-link" @click="toggleWithdrawBox">Withdraw</a>
                                </li>
                            </ul>
                            
                            <div class="content">
                                <div class="gray-field-content">
                                    <!-- Amount Coin Field -->
                                    <div class="amount-coins-field">
                                        <div class="label-field">
                                        <label>Amount to </label>
                                        <div class="code">
                                            <span>Bal: <em>{{ userStore.balance }} ETH</em></span>
                                        </div>
                                        </div>
                                        <div class="field-group limit-cta amount-field simplecoin-field">
                                        <div class="input-field">
                                            <input type="number" placeholder="Enter" v-model="inputStakeAmount" @blur="getStakeGasPrice">
                                            <div class="cta">
                                            <span @click="putMaxStakeAmount()">Max</span>
                                            </div>
                                            <div class="coin-name">
                                                <img src="@/static/images/icons/eth-icon.svg" alt="icon">
                                                <span>ETH</span>
                                            </div>
                                            <div class="error-msg" v-if="false">
                                                <span>ETH amount is required.</span>
                                            </div>
                                        </div>
                                        </div>
                                    </div><!-- Amount Coin Field -->
                                    <div class="data-list">
                                        <div class="list-item">
                                            <div class="name-label">
                                                <span>Max Transaction Cost</span>
                                            </div>
                                            <div class="value">
                                                <span>{{ stakeGasPrice }} ETH</span>
                                            </div>
                                        </div>
                                        <div class="list-item">
                                            <div class="name-label">
                                                <span>Reward Fee</span>
                                                <img class="query-icon" data-bs-toggle="tooltip" data-bs-placement="top" 
                                                title="Please note: this fee applies to staking rewards only, and is NOT taken from your staked amount." src="@/static/images/icons/query-icon.svg" alt="?" />  
                                            </div>
                                            <div class="value">
                                                <span>{{ feeRate }}%</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="btn-content py-1 mt-1-half mb-1-half">
                                    <button @click="postStake()" class="btn w-100">Submit</button>
                                </div>
                                <div class="statistics-block">
                                    <div class="title-area d-flex justify-content-between">
                                        <div class="title">
                                            <h6>Statistics</h6>
                                        </div>
                                        <div class="link">
                                            <a :href="getScanUrl()" target="_blank">View on Etherscan</a>
                                        </div>
                                    </div>
                                    <div class="data-list">

                                        <div class="list-item">
                                            <div class="name-label">
                                                <span>Total Staked</span>
                                            </div>
                                            <div class="value">
                                                <span>{{ totalStake }} ETH</span>
                                            </div>
                                        </div>
                                        <div class="list-item">
                                            <div class="name-label">
                                                <span>Stakers</span>
                                            </div>
                                            <div class="value">
                                                <span>Null</span>
                                            </div>
                                        </div>
                                        <div class="list-item">
                                            <div class="name-label">
                                                <span>Market Cap</span>
                                            </div>
                                            <div class="value">
                                                <span>Null</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>

                <!-- Box -->
                <div id="stakeWithdrawboxblock" class="stake-box-block box-item" v-else-if="showWithdrawBox">
                    <div class="box-content">
                        <div class="header-area">
                            <div class="top-content row d-flex align-items-center">
                                <div class="col-sm-8 left-content">
                                    <div class="nav-item ms-auto me-0" id="claimbtn">
                                        <a href="javascript: void(0);" class="nav-link btn-link" @click="postClaim">Claim>></a>
                                    </div>
                                    <!--
                                    <div class="data-label">
                                        <h6>Available To Stake</h6> <div class="status-bubble"></div>
                                    </div>
                                    <div class="data-value">
                                        <span>0.0087 ETH</span>
                                    </div>
                                    -->
                                    
                                </div>
                                <div class="col-sm-4 right-content">
                                    <div class="title">
                                        <h3>earned <em>{{ earned }} ETH</em></h3>
                                    </div>
                                </div>
                            </div>
                            <div class="bottom-content row">
                                <div class="col-sm-8 left-content">
                                    <div class="data-label">
                                        <h6>Staked Amount</h6>
                                    </div>
                                    <div class="data-value">
                                        <span data-bs-toggle="tooltip" data-bs-placement="top" 
                                            :title="stakedAmount">{{ stakedAmount }} ETH</span>
                                    </div>
                                </div>
                                <div class="col-sm-4 right-content">
                                    <div class="data-label">
                                        <h6>My Pending Amount</h6>
                                    </div>
                                    <div class="data-value">
                                        <span data-bs-toggle="tooltip" data-bs-placement="top" >{{ pendingAmount }} ETH</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="main-area">
                            <ul class="nav nav-tabs">
                                <li class="nav-item" id="stake-tab">
                                    <a href="javascript: void(0);" class="nav-link" @click="toggleStakeBox">Stake</a>
                                </li>
                                <li class="nav-item" id="withdraw-tab">
                                    <a href="javascript: void(0);" class="nav-link active">Withdraw</a>
                                </li>
                                <!--box
                                <li class="nav-item ms-auto me-0" id="claimbtn">
                                    <a href="javascript: void(0);" class="nav-link btn-link" @click="toggleClaimBox">Claim(1) >></a>
                                </li>
                                -->
                            </ul>
                            <div class="content">
                                <div class="gray-field-content mb-1">
                                    <!-- Amount Coin Field -->
                                    <div class="amount-coins-field">
                                        <div class="label-field">
                                        <label>Amount to </label>
                                        <div class="code">
                                            <span>Bal: <em>{{ userStore.balance }} ETH</em></span>
                                        </div>
                                        </div>
                                        <div class="field-group limit-cta amount-field simplecoin-field">
                                        <div class="input-field" >
                                            <input type="number" placeholder="Enter" v-model="inputUnstakeAmount" @blur="getUnstakeGasPrice(); getUnlockedCost()">
                                            <div class="cta">
                                            <span @click="putMaxUnstakeAmount()">Max</span>
                                            </div>
                                            <div class="coin-name">
                                                <img src="@/static/images/icons/eth-icon.svg" alt="icon">
                                                <span>ETH</span>
                                            </div>
                                        </div>
                                        </div>
                                    </div><!-- Amount Coin Field -->
                                    <div class="data-list">
                                        <div class="list-item">
                                            <div class="name-label">
                                                <span>Exchange Platform</span>
                                            </div>
                                            <div class="value">
                                                <span>Nucl</span>
                                            </div>
                                        </div>
                                        <div class="list-item">
                                            <div class="name-label">
                                                <span>Waiting Time</span>
                                            </div>
                                            <div class="value">
                                                <span>~ 1-4 day (s)</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="btn-content py-1 mt-1-half mb-1-half">
                                    <button class="btn w-100" @click="postUnstake()">Request Withdrawal</button>
                                </div>
                                <div class="statistics-block">
                                    
                                    <div class="data-list">
                                        <div class="list-item">
                                            <div class="name-label">
                                                <span>Max Unlock Cost</span>
                                                <img class="query-icon" data-bs-toggle="tooltip" data-bs-placement="top" 
                                                title="The final amount of claimable ETH can differ.For more info, please read FAQ" src="@/static/images/icons/query-icon.svg" alt="?" /> 
                                            </div>
                                            <div class="value blue-color">
                                                <span>{{ unlockedCost }} ETH</span>
                                            </div>
                                        </div>
                                        <div class="list-item">
                                            <div class="name-label">
                                                <span>Max Transaction Cost</span>
                                            </div>
                                            <div class="value">
                                                <span>{{ unstakeGasPrice }} ETH</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- claim
                <div id="claimCoinboxblock" class="stake-box-block box-item" v-else>
                    <div class="box-content">
                        <div class="header-area">
                            <div class="top-content row d-flex align-items-center">
                                <div class="col-sm-8 left-content">
                                    <div class="data-label">
                                        <h6>Available To Claim</h6> <div class="status-bubble"></div>
                                    </div>
                                    <div class="data-value">
                                        <span>Null</span>
                                    </div>
                                </div>
                                <div class="col-sm-4 right-content">
                                    <div class="data-label">
                                        <h6>My Pending Amount</h6>
                                    </div>
                                    <div class="data-value">
                                        <span data-bs-toggle="tooltip" data-bs-placement="top" >0.0087 stETH</span>
                                    </div>
                                </div>
                            </div>
                            <div class="bottom-content row">
                                <div class="col-sm-8 left-content">

                                    <div class="data-label">
                                        <h6>My requests</h6>
                                        <img class="query-icon white-icon" data-bs-toggle="tooltip" data-bs-placement="top" 
                                        title="The withdrawal request time depends on the mode, overall amount of stETH in queue and other factors. Mode: Turbo, Amount: 67283.3465 stETH, Waiting time: 1-4 day(s)" src="@/static/images/icons/query-icon.svg" alt="?" /> 
                                    </div>
                                    <div class="data-value">
                                        <div class="req-list">
                                            <div class="req-item">
                                                <img src="@/static/images/icons/green-squre-tik-icon.svg" alt="icon">
                                                <span>2</span>
                                            </div>
                                            <div class="req-item">
                                                <img src="@/static/images/icons/orange-timer-icon.svg" alt="icon">
                                                <span>1</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                               
                            </div>
                        </div>
                        <div class="main-area">
                            <div class="heading backto-walletdata d-flex align-items-center pt-0 pb-1-half" @click ="toggleWithdrawBoxFromClaim">
                                <div class="icon">
                                    <img src="@/static/images/icons/curved-backarrow-icon.svg" alt="<">
                                </div>
                                <h6>Claim My ETH</h6>
                            </div>
                            <div class="content">
                                <div class="claim-available-list">
                                    <div class="claim-available-item pending">
                                        <div class="checkbox-area">
                                            <div class="form-check">
                                                <input class="form-check-input" name="claimavailable" type="checkbox" value="" id="claim_1">
                                                <label class="form-check-label" for="claim_1">
                                                    80ETH
                                                </label>
                                            </div>
                                        </div>
                                        <div class="claim-status-cta">
                                            <div class="status-btn">
                                                <div class="btn brown-btn">
                                                    <span>Pending...</span>
                                                </div>
                                            </div>
                                            <div class="icon">
                                                <img src="/src/static/images/icons/share-small-icon.svg" alt="share">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="claim-available-item">
                                        <div class="checkbox-area">
                                            <div class="form-check">
                                                <input class="form-check-input" name="claimavailable" type="checkbox" value="" id="claim_2">
                                                <label class="form-check-label" for="claim_2">
                                                    5.0085 ETH
                                                </label>
                                            </div>
                                        </div>
                                        <div class="claim-status-cta">
                                            <div class="status-btn">
                                                <div class="btn green-btn">
                                                    <span>Ready to claim</span>
                                                </div>
                                            </div>
                                            <div class="icon">
                                                <img src="/src/static/images/icons/share-small-icon.svg" alt="share">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="claim-available-item">
                                        <div class="checkbox-area">
                                            <div class="form-check">
                                                <input class="form-check-input" name="claimavailable" type="checkbox" value="" id="claim_3">
                                                <label class="form-check-label" for="claim_3">
                                                    80 ETH
                                                </label>
                                            </div>
                                        </div>
                                        <div class="claim-status-cta">
                                            <div class="status-btn">
                                                <div class="btn green-btn">
                                                    <span>Ready to claim</span>
                                                </div>
                                            </div>
                                            <div class="icon">
                                                <img src="/src/static/images/icons/share-small-icon.svg" alt="share">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="btn-content py-1 mt-1-half mb-1-half">
                                    <button class="btn w-100">Claim 85.0085 ETH</button>
                                </div>
                                <div class="statistics-block">
                                    
                                    <div class="data-list">
                                        <div class="list-item">
                                            <div class="name-label">
                                                <span>Max Transaction Cost</span>
                                            </div>
                                            <div class="value blue-color">
                                                <span>$1.53</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            -->

            </div>
        </div>
      </div>
    </main>
</template>

<script>
import Web3 from 'web3'
import BigNumber from "bignumber.js";
import { Tooltip } from 'bootstrap';
import { watch } from 'vue';

import Header from '@/components/Header.vue';

import { useUserStore, useAlertStore, useTransactionModalStore } from '@/store/index.js'
import { initContractConnection } from '@/assets/js/web3.js'
import { PROVIDER_CONFIG } from "@/assets/js/config.js"
import { filterAddress, filterDecimal } from '@/assets/js/filters.js'
import { STATUS_NOT_LOGGED_IN, STATUS_LOGGED_IN, STATUS_DISCONNECTED, WALLETCONNECT, METAMASK, ETHEREUM, BNB} from '@/assets/js/constant.js'

import stakePoolAbi from '@/assets/abi/stakePool.json';


export default {
  components: {
    Header,
  },
  data() {
    return {
        showStakeBox: true,
        showWithdrawBox: false,
        showClaimBox: false,

        userStore: useUserStore(),
        alertStore: useAlertStore(),
        transactionModalStore: useTransactionModalStore(),

        inputStakeAmount: null,
        inputUnstakeAmount: null,

        earned: 0,
        stakedAmount: 0,
        stakeGasPrice: 0,
        unstakeGasPrice: 0,
        unlockedCost: 0,
        feeRate: 0,

        totalStake: 0,
        stakers: null,
        marketCap: null,

        pendingAmount: 0,
    }
    },
  mounted() {
    new Tooltip(document.body, {
      selector: "[data-bs-toggle='tooltip']",
    })

    this.getTotalStake()
    this.getFeeRate()
    this.getEarned()
    this.getUserStakeAmount()
    this.getPendingAmount()
    
  },
  methods:{
        putMaxStakeAmount() {
            this.inputStakeAmount = BigNumber(this.userStore.balance).minus(BigNumber(this.stakeGasPrice))
        },

        putMaxUnstakeAmount() {
            this.inputStakeAmount = BigNumber(this.userStore.stakedAmount).minus(BigNumber(this.unstakeGasPrice)).minus(BigNumber(unlockedCost))
        },

        getScanUrl() {
            return `${this.userStore.scanUrl}/address/${PROVIDER_CONFIG.stakePoolContractAddress}`
        },

        async getTotalStake() {
            
            watch([() => this.userStore.status, () => this.userStore.timestamp], async ([newStatus], [newUpdate]) => {
                console.log("getTotalStake", newStatus)
                switch (newStatus) {
                    
                    case STATUS_NOT_LOGGED_IN:
                        this.totalStake = "0"
                        break

                    case STATUS_LOGGED_IN:
                        const value = await this._getTotalStake();
                        this.totalStake = filterDecimal(this.userStore.web3Provider.utils.fromWei(value, 'ether'), 8).toString();
                        break
            }
            }, {immediate: true});
        },

        async _getTotalStake(){
            
            try {
                const contract = await initContractConnection(this.userStore.web3Provider, this.userStore.address, PROVIDER_CONFIG.stakePoolContractAddress, stakePoolAbi)
                const value = await contract.methods.totalStaked().call();
                return value;

            } catch(e) {
                console.error(e)
            };
        },

        async getPendingAmount() {
            watch([() => this.userStore.status, () => this.userStore.timestamp], async ([newStatus], [newUpdate]) => {
                console.log("getPendingAmount", newStatus)
                switch (newStatus) {
                    
                    case STATUS_NOT_LOGGED_IN:
                        this.pendingAmount = "0"
                        break

                    case STATUS_LOGGED_IN:
                        const value = await this._getPendingAmount();
                        this.pendingAmount = filterDecimal(this.userStore.web3Provider.utils.fromWei(value, 'ether'), 8).toString();
                        break
            }
            }, {immediate: true});
        },

        async _getPendingAmount(){
            try {
                const contract = await initContractConnection(this.userStore.web3Provider, this.userStore.address, PROVIDER_CONFIG.stakePoolContractAddress, stakePoolAbi)
                const value = await contract.methods.getPendingUnstakesOf(this.userStore.address).call();
                return value;

            } catch(e) {
                console.error(e)
                return 0
            };
        },

        async getUserStakeAmount() {
            
            watch([() => this.userStore.status, () => this.userStore.timestamp], async ([newStatus], [newUpdate]) => {
                console.log("getUserStakeAmount", newStatus)
                switch (newStatus) {
                    
                    case STATUS_NOT_LOGGED_IN:
                        this.stakedAmount = "0"
                        break

                    case STATUS_LOGGED_IN:
                        const value = await this._getUserStakeAmount();
                        this.stakedAmount = filterDecimal(this.userStore.web3Provider.utils.fromWei(value, 'ether'), 8);
                        break
            }
            }, {immediate: true});
        },

        async _getUserStakeAmount(){
            try {
                const contract = await initContractConnection(this.userStore.web3Provider, this.userStore.address, PROVIDER_CONFIG.stakePoolContractAddress, stakePoolAbi)
                const value = await contract.methods.getStakingAmount(this.userStore.address).call();
                return value;

            } catch(e) {
                console.error(e)
                return 0
            };
        },

        async getEarned() {
            watch([() => this.userStore.status, () => this.userStore.timestamp], async ([newStatus], [newUpdate]) => {
                console.log("getEarned", newStatus)
                switch (newStatus) {
                    
                    case STATUS_NOT_LOGGED_IN:
                        this.earned = "0"
                        break

                    case STATUS_LOGGED_IN:
                        const value = await this._getEarned();
                        this.earned = filterDecimal(this.userStore.web3Provider.utils.fromWei(value, 'ether'), 8);
                        break
            }
            }, {immediate: true});
        },

        async _getEarned(){

            try {
                
                const contract = await initContractConnection(this.userStore.web3Provider, this.userStore.address, PROVIDER_CONFIG.stakePoolContractAddress, stakePoolAbi)
                const value = await contract.methods.earned(this.userStore.address).call();
                console.log(this.userStore.address, PROVIDER_CONFIG.stakePoolContractAddress, value)
                return value;

            } catch(e) {
                console.error(e);
                return 0
            };
        },

        async getFeeRate() {
            watch([() => this.userStore.status, () => this.userStore.timestamp], async ([newStatus], [newUpdate]) => {
                console.log("getFeeRate", newStatus)
                switch (newStatus) {
                    
                    case STATUS_NOT_LOGGED_IN:
                        this.feeRate = "0"
                        break

                    case STATUS_LOGGED_IN:
                        const value = await this._getFeeRate();
                        this.feeRate = new BigNumber(value).div(1000000);
                        break
            }
            }, {immediate: true});
        },

        async _getFeeRate(){
            try {
                const contract = await initContractConnection(this.userStore.web3Provider, this.userStore.address, PROVIDER_CONFIG.stakePoolContractAddress, stakePoolAbi)
                const value = await contract.methods.feeRate().call();
                return value;

            } catch(e) {
                console.error(e)
                return 0
            };
        },

        async getStakeGasPrice() {
            
            switch (this.userStore.status) {
                
                case STATUS_NOT_LOGGED_IN:
                    this.stakeGasPrice = "0"
                    break

                case STATUS_LOGGED_IN:
                    const value = await this._getStakeGasPrice();
                    this.stakeGasPrice = this.userStore.web3Provider.utils.fromWei(value, 'ether');
                    break
            }
        },

        async _getStakeGasPrice(){
            try {
                const contract = await initContractConnection(this.userStore.web3Provider, this.userStore.address, PROVIDER_CONFIG.stakePoolContractAddress, stakePoolAbi)
                const stakeAmount = Web3.utils.toWei(this.inputStakeAmount, 'ether');

                const gasAmount = new BigNumber(await contract.methods.stake(stakeAmount).estimateGas({value: stakeAmount}))
                
                const gasPriceGwei = await this.userStore.web3Provider.eth.getGasPrice()
                const gasPriceWei = new BigNumber(Web3.utils.toWei(gasPriceGwei, 'gwei'))
                console.log(`gasAmount: ${gasAmount}, gasPrice: ${gasPriceGwei} Gwei, gasPrice: ${gasPriceWei} Wei`)
                const totalCost = gasAmount.multipliedBy(gasPriceWei);
                
                return totalCost

            } catch(e) {
                console.error(e)
                return 0
            };
        },

        async getUnstakeGasPrice() {
            
            switch (this.userStore.status) {
                
                case STATUS_NOT_LOGGED_IN:
                    this.unstakeGasPrice = "0"
                    break

                case STATUS_LOGGED_IN:
                    const value = await this._getUnstakeGasPrice();
                    this.unstakeGasPrice = this.userStore.web3Provider.utils.fromWei(value, 'ether').toString();
                    break
            }
        },

        async _getUnstakeGasPrice(){
            try {
                const contract = await initContractConnection(this.userStore.web3Provider, this.userStore.address, PROVIDER_CONFIG.stakePoolContractAddress, stakePoolAbi)

                const unstakeAmount = Web3.utils.toWei(this.inputUnstakeAmount, 'ether');
                console.log(`unstakeAmount: ${unstakeAmount}, address: ${this.userStore.address}`)
                const gasAmount = new BigNumber(await contract.methods.unstake(unstakeAmount, this.userStore.address).estimateGas())
                const gasPriceGwei = await this.userStore.web3Provider.eth.getGasPrice()
                const gasPriceWei = new BigNumber(Web3.utils.toWei(gasPriceGwei, 'gwei'))
                console.log(`gasAmount: ${gasAmount}, gasPrice: ${gasPriceGwei} Gwei, gasPrice: ${gasPriceWei} Wei`)
                const totalCost = gasAmount.multipliedBy(gasPriceWei);
                
                return totalCost

            } catch(e) {
                console.error(e)
                return 0
            };
        },

        async getUnlockedCost() {
            
            switch (this.userStore.status) {
                
                case STATUS_NOT_LOGGED_IN:
                    this.unlockedCost = "0"
                    break

                case STATUS_LOGGED_IN:
                    const value = await this._getUnlockedCost();
                    this.unlockedCost = this.userStore.web3Provider.utils.fromWei(value, 'ether').toString();
                    break
            }
        },

        async _getUnlockedCost(){
            try {
  
                const unstakeAmount = new BigNumber(Web3.utils.toWei(this.inputUnstakeAmount, 'ether'))
                const unstakeGasPrice = new BigNumber(Web3.utils.toWei(this.unstakeGasPrice, 'ether'))
                const feeRate = new BigNumber(this.feeRate).dividedBy(100);
                
                const fee = unstakeAmount.multipliedBy(feeRate);
                const totalCost = fee.plus(unstakeGasPrice);
                
                return totalCost

            } catch(e) {
                console.error(e)
                return 0
            };
        },

        async postStake(){
            try {
                this.transactionModalStore.showPendingModal()
                const contract = await initContractConnection(this.userStore.web3Provider, this.userStore.address, PROVIDER_CONFIG.stakePoolContractAddress, stakePoolAbi)
                const stakeAmount = Web3.utils.toWei(this.inputStakeAmount, 'ether');
                let txid;

                await contract.methods.stake(stakeAmount)
                    .send({value: stakeAmount})
                    .on('transactionHash', (hash) => {
                        console.log("transactionHash", hash)
                        this.alertStore.show('Transaction created', hash);
                        txid = hash;
                        
                    })
                    .on('receipt', (receipt) => {
                        this.transactionModalStore.showConfirmedModal(this.userStore.scanUrl, txid)
                        console.log('receipt', receipt);
                    })
                    .on('error', (error, receipt) => {
                        this.transactionModalStore.showFailedModal(this.userStore.scanUrl, txid)
                        console.log('error', error);
                    });


            } catch(e) {
                console.error(e)
            } 
            
        },

        async postUnstake(){
            try {
                this.transactionModalStore.showPendingModal()
                const contract = await initContractConnection(this.userStore.web3Provider, this.userStore.address, PROVIDER_CONFIG.stakePoolContractAddress, stakePoolAbi)
                const unstakeAmount = Web3.utils.toWei(this.inputUnstakeAmount, 'ether');
                let txid;

                await contract.methods.unstake(unstakeAmount, this.userStore.address)
                    .send()
                    .on('transactionHash', (hash) => {
                        console.log('transactionHash', hash);
                        this.alertStore.show('Transaction created', hash);
                        txid = hash;
                    })
                    .on('receipt', (receipt) => {
                        this.transactionModalStore.showConfirmedModal(this.userStore.scanUrl, txid)
                        console.log('receipt', receipt);
                    })
                    .on('error', (error, receipt) => {
                        this.transactionModalStore.showFailedModal(this.userStore.scanUrl, txid)
                        console.log('error', error);
                    });


            } catch(e) {
                console.error(e)
            };
        },

        async postClaim(){
            try {
                this.transactionModalStore.showPendingModal()
                const contract = await initContractConnection(this.userStore.web3Provider, this.userStore.address, PROVIDER_CONFIG.stakePoolContractAddress, stakePoolAbi)
                let txid;

                await contract.methods.claimRewards ()
                    .send()
                    .on('transactionHash', (hash) => {
                        console.log('transactionHash', hash);
                        
                        this.alertStore.show('Transaction created', hash);
                        txid = hash;
                    })
                    .on('receipt', (receipt) => {
                        this.transactionModalStore.showConfirmedModal(this.userStore.scanUrl, txid)
                        console.log('receipt', receipt);
                    })
                    .on('error', (error, receipt) => {
                        this.transactionModalStore.showFailedModal(this.userStore.scanUrl, txid)
                        console.log('error', error);
                    });


            } catch(e) {
                console.error(e)
            };
        },



        toggleStakeBox(){
            this.showWithdrawBox = false;
            this.showStakeBox = true;
        },
        toggleWithdrawBox() {
            this.showStakeBox = false;
            this.showWithdrawBox = true;
            this.showClaimBox = false;
        },

        toggleClaimBox() {
            this.showStakeBox = false;
            this.showWithdrawBox = false;
            this.showClaimBox = true;
        },
        toggleWithdrawBoxFromClaim() {
            this.showStakeBox = false;
            this.showWithdrawBox = true;
            this.showClaimBox = false;
        },
    }
};
</script>

<style lang="scss" scoped>
.staking-main-content{
    padding: 0.3rem 0.4rem;
    text-align: center;
    .title-description{
        font-size: 0.14rem;
    }
}
.stake-box-block{
    max-width: 4.9rem;
    margin: 0 auto;
    padding: 0.1rem 0;
    .box-content{
        background: var(--white-color);
        border-radius: 0.1rem;
        overflow: hidden;
        text-align: left;
    }
    .header-area{
        background-color: var(--blue-color);
        color: var(--white-color);
        padding: 0.2rem 0.2rem 0.25rem;
        .top-content{
            padding-bottom: 0.12rem;
        }
        .data-label{
            line-height: 1;
            h6{
                font-family: var(--inter-font);
                font-size: 0.12rem;
                margin-bottom: 0;
                display: inline-block;
                vertical-align: top;
            }
            .status-bubble{
                width: 0.09rem;
                height: 0.09rem;
                border-radius: 100%;
                display: inline-block;
                vertical-align: top;
                background: #2DD4BF;
                margin-top: 0.02rem;
                margin-left: 0.03rem;
            }
            .query-icon{
                margin-left: 0.04rem;
                margin-top: -0.03rem;
            }
        }
        .data-value{
            font-family: var(--cd-font);
            font-size: 0.2rem;
            font-weight: 500;
        }
        .req-list{
            display: flex;
            align-items: center;
            padding-top: 0.06rem;
            .req-item{
                display: flex;
                align-items: center;
                padding-right: 0.04rem;
                margin-right: 0.1rem;
                border-right: 0.01rem solid var(--white-color);
                line-height: 0.8;
                img{
                    width: 0.15rem;
                }
                span{
                    padding: 0 0.07rem;
                    display: inline-block;
                    vertical-align: top;
                    
                }
                &:last-of-type{
                    border-right: 0;
                }
            }
        }
        .title{
            h3{
                font-size: 0.2rem;
                margin-bottom: 0;
                em{
                    color: #2DD4BF;
                    padding-left: 0.04rem;
                }
            }
        }
        .right-content{
            padding-left: 0;
            padding-right: 0.05rem;
        }
    }
    .main-area{
        margin-top: -0.1rem;
        border-top-left-radius: 0.08rem;
        border-top-right-radius: 0.08rem;
        padding: 0.2rem;
        background: var(--white-color);
        font-size: 0.12rem;
        .backto-walletdata{
            cursor: pointer;
        }
        .gray-field-content{
            background: var(--body-bg);
            padding: 0.1rem 0.2rem;
            border-radius: 0.1rem;
            .label-field{
                padding-top: 0;
            }
        }
        .amount-coins-field{
            margin-bottom: 0;
        }
        .data-list{
            .list-item{
                padding: 0.05rem 0;
                display: flex;
                align-items: center;
                justify-content: space-between;
                color: rgba(0,0,0,0.6);
                img{
                    width: 0.16rem;
                    margin-right: 0.06rem;
                }
                .query-icon{
                    margin-left: 0.05rem;
                }
            }
        }
        .statistics-block{
            border: 0.02rem solid var(--body-bg);
            border-radius: 0.1rem;
            padding: 0.15rem 0.2rem 0.14rem;
            .title-area{
                padding: 0.07rem 0 0.05rem;
            }
        }
        .nav-tabs{
            border-bottom: 0;
            padding-bottom: 0.14rem;
            .nav-item{
                margin-right: 0.26rem;
            }
            .nav-link{
                border: none;
                padding: 0 0.01rem;
                color: var(--black-color);
                border-bottom: 0.025rem solid rgba(0,0,0,0);
                &.active{
                    border-bottom-color: var(--blue-color);
                    font-weight: 600;
                }
            }
            .btn-link{
                background: var(--blue-color);
                color: var(--white-color);
                padding: 0.06rem 0.08rem 0.04rem;
                border-radius: 0.05rem;
                line-height: 1;
                font-size: 0.1rem;
                
            }
        }
        .coin-name{
            width: 0.7rem;
            position: absolute;
            right: 0.05rem;
            top: 0.03rem;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 0.32rem;
            img{
                width: 0.18rem;
                margin-right: 0.05rem;
            }
        }
        .claim-available-list{
            padding-top: 0.06rem;
            .claim-available-item{
                padding: 0.1rem;
                border-radius: 0.1rem;
                background: var(--body-bg);
                display: flex;
                align-items: center;
                margin-bottom: 0.16rem;
                &.pending{
                    pointer-events: none;
                    .checkbox-area{
                        pointer-events: none;
                        input{
                            pointer-events: none;
                            opacity: 0.3;
                        }
                    }
                }
                .checkbox-area{
                    width: 50%;
                    padding: 0 0.1rem;
                    .form-check{
                        margin-bottom: 0;
                        padding-top:0.04rem;
                    }
                }
                .claim-status-cta{
                    padding: 0 0.1rem;
                    display: flex;
                    width: 50%;
                    align-items: center;
                    justify-content: flex-end;
                    .btn{
                        border-radius: 0.3rem;
                        margin-right: 0.12rem;
                        padding: 0.02rem 0.1rem;
                    }
                    .icon{
                        cursor: pointer;
                    }
                }
            }
        }
    }
}
.amount-coins-field{
    .simplecoin-field.field-group{
        .cta {
            right: 0.8rem;
        }
        input{
            padding-right: 1.4rem;
        }
    }
}

</style>
