<template>
    <main>
      <Header pageTitle="Staking" />
      <div class="main-content">
        <div class="staking-main-content">
            <div class="main-title">
                <h2>Ether Staking</h2>
            </div>
            <div class="title-description">
                <p>Stake ETH and receive stETH while staking</p>
            </div>
            <div class="boxes-content-holder">
                <!-- Stake Box -->
                <div id="stakeboxblock" class="stake-box-block box-item" v-if="showStakeBox">
                    <div class="box-content">
                        <div class="header-area">
                            <div class="top-content row d-flex align-items-center">
                                <div class="col-sm-8 left-content">
                                    <div class="data-label">
                                        <h6>Available To Stake</h6> <div class="status-bubble"></div>
                                    </div>
                                    <div class="data-value">
                                        <span>0.0087 ETH</span>
                                    </div>
                                </div>
                                <div class="col-sm-4 right-content">
                                    <div class="title">
                                        <h3>Lido APY <em>3.6%</em></h3>
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
                                            title="0.0099999999999998 ETH">0.0099 stETH</span>
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
                                            <span>Bal: <em>80.25876391</em></span>
                                        </div>
                                        </div>
                                        <div class="field-group limit-cta amount-field simplecoin-field">
                                        <div class="input-field field-error">
                                            <input type="number" placeholder="Enter" >
                                            <div class="cta">
                                            <span>Max</span>
                                            </div>
                                            <div class="coin-name">
                                                <img src="@/static/images/icons/eth-icon.svg" alt="icon">
                                                <span>ETH</span>
                                            </div>
                                            <div class="error-msg">
                                                <span>ETH amount is required.</span>
                                            </div>
                                        </div>
                                        </div>
                                    </div><!-- Amount Coin Field -->
                                    <div class="data-list">
                                        <div class="list-item">
                                            <div class="name-label">
                                                <span>You Will Receive</span>
                                            </div>
                                            <div class="value">
                                                <span>80 stETH</span>
                                            </div>
                                        </div>
                                        <div class="list-item">
                                            <div class="name-label">
                                                <span>Exchange Rate</span>
                                            </div>
                                            <div class="value">
                                                <span>1 ETH = 1 stETH</span>
                                            </div>
                                        </div>
                                        <div class="list-item">
                                            <div class="name-label">
                                                <span>Max Transaction Cost</span>
                                            </div>
                                            <div class="value">
                                                <span>$1.55</span>
                                            </div>
                                        </div>
                                        <div class="list-item">
                                            <div class="name-label">
                                                <span>Reward Fee</span>
                                                <img class="query-icon" data-bs-toggle="tooltip" data-bs-placement="top" 
                                                title="Please note: this fee applies to staking rewards only, and is NOT taken from your staked amount." src="@/static/images/icons/query-icon.svg" alt="?" />  
                                            </div>
                                            <div class="value">
                                                <span>10%</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="btn-content py-1 mt-1-half mb-1-half">
                                    <button class="btn w-100">Submit</button>
                                </div>
                                <div class="statistics-block">
                                    <div class="title-area d-flex justify-content-between">
                                        <div class="title">
                                            <h6>Lido Statistics</h6>
                                        </div>
                                        <div class="link">
                                            <a href="#">View on Etherscan</a>
                                        </div>
                                    </div>
                                    <div class="data-list">
                                        <div class="list-item">
                                            <div class="name-label">
                                                <span>Annual Percentage Rate</span> 
                                                <img class="query-icon" data-bs-toggle="tooltip" data-bs-placement="top" 
                                                title="Moving average of APR for 7 days period." src="@/static/images/icons/query-icon.svg" alt="?" /> 
                                            </div>
                                            <div class="value blue-color">
                                                <span>3.6%</span>
                                            </div>
                                        </div>
                                        <div class="list-item">
                                            <div class="name-label">
                                                <span>Total Staked With Lido</span>
                                            </div>
                                            <div class="value">
                                                <span>8,815,898.385 ETH</span>
                                            </div>
                                        </div>
                                        <div class="list-item">
                                            <div class="name-label">
                                                <span>Stakers</span>
                                            </div>
                                            <div class="value">
                                                <span>272549</span>
                                            </div>
                                        </div>
                                        <div class="list-item">
                                            <div class="name-label">
                                                <span>stETH Market Cap</span>
                                            </div>
                                            <div class="value">
                                                <span>$14,459,757,188</span>
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
                                    <div class="data-label">
                                        <h6>Available To Stake</h6> <div class="status-bubble"></div>
                                    </div>
                                    <div class="data-value">
                                        <span>0.0087 ETH</span>
                                    </div>
                                </div>
                                <div class="col-sm-4 right-content">
                                    <div class="title">
                                        <h3>Lido APY <em>3.6%</em></h3>
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
                                            title="0.0099999999999998 ETH">0.0099 stETH</span>
                                    </div>
                                </div>
                                <div class="col-sm-4 right-content">
                                    <div class="data-label">
                                        <h6>My requests</h6>
                                        <img class="query-icon white-icon" data-bs-toggle="tooltip" data-bs-placement="top" 
                                        title="The withdrawal request time depends on the mode, overall amount of stETH in queue and other factors. Mode: Turbo, Amount: 67283.3465 stETH, Waiting time: 1-4 day(s)" src="@/static/images/icons/query-icon.svg" alt="?" /> 
                                    </div>
                                    <div class="data-value">
                                        <div class="req-list">
                                            <div class="req-item">
                                                <img src="@/static/images/icons/green-squre-tik-icon.svg" alt="icon">
                                                <span>1</span>
                                            </div>
                                            <div class="req-item">
                                                <img src="@/static/images/icons/orange-timer-icon.svg" alt="icon">
                                                <span>0</span>
                                            </div>
                                        </div>
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
                                <li class="nav-item ms-auto me-0" id="claimbtn">
                                    <a href="javascript: void(0);" class="nav-link btn-link" @click="toggleClaimBox">Claim(1) >></a>
                                </li>
                            </ul>
                            <div class="content">
                                <div class="gray-field-content mb-1">
                                    <!-- Amount Coin Field -->
                                    <div class="amount-coins-field">
                                        <div class="label-field">
                                        <label>Amount to </label>
                                        <div class="code">
                                            <span>Bal: <em>80.25876391</em></span>
                                        </div>
                                        </div>
                                        <div class="field-group limit-cta amount-field simplecoin-field">
                                        <div class="input-field">
                                            <input type="number" placeholder="Enter" >
                                            <div class="cta">
                                            <span>Max</span>
                                            </div>
                                            <div class="coin-name">
                                                <img src="@/static/images/icons/steth-icon.svg" alt="icon">
                                                <span>esETH</span>
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
                                                <span>Lido</span>
                                            </div>
                                        </div>
                                        <div class="list-item">
                                            <div class="name-label">
                                                <span>Lido Exchange Rate</span>
                                            </div>
                                            <div class="value">
                                                <span>1 ETH = 1 stETH</span>
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
                                <div class="gray-field-content">
                                    <div class="data-list">
                                        <div class="list-item">
                                            <div class="name-label">
                                                <img src="@/static/images/icons/liquidity-icon.svg" alt="icon">
                                                <span>You Will Receive</span>
                                            </div>
                                            <div class="value">
                                                <span><strong>80 ETH</strong></span>
                                                <img class="query-icon" data-bs-toggle="tooltip" data-bs-placement="top" 
                                                title="The final amount of claimable ETH can differ.For more info, please read FAQ" src="@/static/images/icons/query-icon.svg" alt="?" /> 
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="btn-content py-1 mt-1-half mb-1-half">
                                    <button class="btn w-100">Request Withdrawal</button>
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
                                                <span>Free</span>
                                            </div>
                                        </div>
                                        <div class="list-item">
                                            <div class="name-label">
                                                <span>Max Transaction Cost</span>
                                            </div>
                                            <div class="value">
                                                <span>$4.54</span>
                                            </div>
                                        </div>
                                        <div class="list-item">
                                            <div class="name-label">
                                                <span>Allowance</span>
                                            </div>
                                            <div class="value">
                                                <span>0.0 stETH</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div><!--box-->

                <!-- Box -->
                <div id="claimCoinboxblock" class="stake-box-block box-item" v-else>
                    <div class="box-content">
                        <div class="header-area">
                            <div class="top-content row d-flex align-items-center">
                                <div class="col-sm-8 left-content">
                                    <div class="data-label">
                                        <h6>Available To Claim</h6> <div class="status-bubble"></div>
                                    </div>
                                    <div class="data-value">
                                        <span>0.0087 ETH</span>
                                    </div>
                                </div>
                                <div class="col-sm-4 right-content">
                                    <div class="data-label">
                                        <h6>My Pending Amount</h6>
                                    </div>
                                    <div class="data-value">
                                        <span data-bs-toggle="tooltip" data-bs-placement="top" 
                                            title="0.0099999999999998 ETH">0.0087 stETH</span>
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
                </div><!--box-->

            </div>
        </div>
      </div>
    </main>
</template>

<script>
import Header from '@/components/Header.vue';
import { Tooltip } from 'bootstrap';
export default {
  components: {
    Header,
  },
  data() {
    return {
        showStakeBox: true,
        showWithdrawBox: false,
        showClaimBox: false,
    }
    },
  mounted() {
    new Tooltip(document.body, {
      selector: "[data-bs-toggle='tooltip']",
    })
  },
  methods:{
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
