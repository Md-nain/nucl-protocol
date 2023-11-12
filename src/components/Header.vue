<template>
    <header id="main-header" class="header">
        <div class="header-main-content d-flex justify-content-between align-items-center flex-wrap">
            <div class="page-title">
                <span>{{ pageTitle }}</span>
            </div>
            <div class="main-navigation">
                <div class="navbar navbar-expand-md py-0">
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#mynavbar"
                        aria-controls="mynavbar"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        @click="toggleNavbar"
                        :class="{ 'collapsed': !isNavbarOpen }" 
                    >
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="mynavbar" :class="{ 'show': isNavbarOpen }">
                        <button type="button" class="btn-close d-block d-md-none" @click="closeNavbar"></button>
                        <div class="navbar-logo mb-1 d-block d-md-none">
                            <img src="../static/images/logo.svg" width="140" height="48" alt="logo">
                        </div>
                        <ul class="navbar-nav me-auto">
                            <li class="nav-item external-btn">
                                <router-link to="/staking" class="nav-link">
                                    Staking <img src="@/static/images/icons/external-btn-icon.svg" alt="icon">
                                </router-link>
                            </li>
                            <li class="nav-item external-btn">
                                <a href="javascript:void(0);" class="nav-link" target="_blank">
                                    Strategy Vaults <img src="@/static/images/icons/external-btn-icon.svg" alt="icon">
                                </a>
                            </li>

                            <li class="nav-item new-item" v-if="showNewListItem">
                                <a href="javascript:void(0);" class="nav-link d-flex">
                                    <div class="icon">
                                        <img src="@/static/images/icons/fire-icon.svg" alt="icon">
                                    </div>
                                    <div class="text">
                                        <em>Gas Balance</em>
                                        <span>{{ userBalance() }}</span>
                                    </div>
                                </a>
                            </li>
                            <li class="nav-item new-item dropdown customized-variant-dropdown" v-if="showNewListItem">
                                <button class="btn btn-secondary dropdown-toggle" type="button" @click="toggleDropdown" :class="{ 'show': isOpen }">
                                    <span>
                                      {{ userAddress() }}
                                    </span>
                                </button>
                                <div class="dropdown-menu" v-if="isOpen" :class="{ 'show': isOpen }">
                                    <!-- Block -->
                                    <div class="block">
                                        <div class="heading-cta">
                                            <div class="heading">
                                                <h6>Smart Wallet</h6>
                                            </div>
                                            <div class="cta">
                                                <span><img src="@/static/images/icons/dropdown-cta-plus.svg" alt="+"></span>
                                            </div>
                                        </div>
                                        <div class="code-cta"  >
                                            <div class="code" >
                                                <div class="sno">
                                                    <em>#1</em>
                                                </div>
                                                <span>{{ userAddress() }}</span>
                                            </div>
                                            <div class="icon">
                                            <img src="/src/static/images/icons/copy-icon.svg" alt="copy">
                                            </div>
                                            <div class="icon share-icon">
                                            <img src="/src/static/images/icons/share-small-icon.svg" alt="share">
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Block -->
                                    <div class="block pb-1-half">
                                        <div class="heading-cta">
                                            <div class="heading">
                                                <h6>Authority</h6>
                                            </div>
                                        </div>
                                        <div class="code-cta">
                                            <div class="code">
                                                <div class="wallet-logo">
                                                    <img src="@/static/images/icons/metamask-logo.svg" alt="logo">
                                                </div>
                                                <span>{{ userAddress() }}</span>
                                            </div>
                                            <div class="icon">
                                                <img src="@/static/images/icons/copy-icon.svg" alt="copy">
                                            </div>
                                            <div class="icon share-icon">
                                            <img src="@/static/images/icons/share-small-icon.svg" alt="share">
                                            </div>
                                        </div>
                                    </div>
                                    <!-- btn -->
                                    <div class="btn-content">
                                        <button class="btn white-bg-bordered-btn w-100" @click="disconnect()"><img src="@/static/images/icons/disconnect-icon.svg" /> Disconnect </button>
                                    </div>
                                </div>
                            </li>

                            <li class="nav-item dropdown coin-logos-dropdown">
                                <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="headerCoinDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img src="@/static/images/icons/eth-icon.svg" alt="icon">
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="headerCoinDropdown">
                                    <li><a class="dropdown-item" href="#" @click="switchChain(ethereum)"> <img src="@/static/images/icons/eth-icon.svg" alt="icon" > Ethereum</a></li>
                                    <li><a class="dropdown-item" href="#" @click="switchChain(bnb)"> <img src="@/static/images/icons/bnb-icon.svg" alt="icon" > BNB</a></li>
                                </ul>
                            </li>
                            
                            <li class="nav-item" v-if="showConnectSignIn">
                                <a href="javascript:void(0);" class="nav-link  btn" data-bs-toggle="modal" data-bs-target="#connect-modal">
                                    Connect/Sign In
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <!-- Connect Modal -->
    <div class="modal fade" id="connect-modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Connect / Sign In</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <!-- SIGNIN OPTIONS -->
                    <div  v-if="!showLoader" class="connected-signin-options">
                        <div class="option-item">
                            <div class="item-content">
                                <span @click="initConnection(metamask)">Metamask</span>
                                <div class="icon">
                                    <img src="@/static/images/icons/metamask-logo.svg" alt="logo">
                                </div>
                            </div>
                        </div>
                        <div class="option-item">
                            <div class="item-content">
                                <span @click="initConnection(walletconnect)">WalletConnect</span>
                                <div class="icon">
                                    <img src="@/static/images/icons/walletconnect-logo.svg" alt="logo">
                                </div>
                            </div>
                        </div>
                    </div><!-- Sign in options -->
                    
                    <div v-if="showLoader" class="loader">
                        <div class="spinner text-center">
                            <div class="icon">
                                <img src="@/static/images/icons/spinner-icon.svg" alt="icon">
                            </div>
                            <div class="caption">
                                <span>{{ initializationText }}</span>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div><!-- Conntect Modal -->
  </template>
  
  <script>
  import Web3 from 'web3'

  import { watch } from 'vue'
  import { useUserStore } from '@/store/index.js'
  import { initWeb3Connention, metamaskSwitchNetwork } from '@/assets/js/web3.js'
  import { filterAddress, filterDecimal } from '@/assets/js/filters.js'
  
  import { STATUS_NOT_LOGGED_IN, STATUS_LOGGING, STATUS_LOGGED_IN, STATUS_DISCONNECTED, WALLETCONNECT, METAMASK, ETHEREUM, BNB} from '@/assets/js/constant.js'
  import { PROVIDER_CONFIG } from "@/assets/js/config.js"




  export default {
    name: 'Header',
    props: ['pageTitle'],


    
    data() {
      return {
        metamask: METAMASK,
        walletconnect: WALLETCONNECT,
        ethereum: ETHEREUM,
        bnb: BNB,
        userStore: useUserStore(),
        isNavbarOpen: false,
        showLoader: false,
        initializationText: '',
        showConnectSignIn: true,
        showNewListItem: false,
        isOpen: false,
      };
    },
    mounted() {
        this.watchLoginStatus();
        this.getBalance()
        
    },

    methods: {

        async switchChain(option){
            const connector = this.userStore.connector
            switch (connector) {
                case METAMASK:
                    switch (option) {
                        case ETHEREUM:
                            await metamaskSwitchNetwork(PROVIDER_CONFIG.ethChainId, PROVIDER_CONFIG.ethRpcUrl)
                                .then(() => {
                                    this.userStore.setChainId(PROVIDER_CONFIG.ethChainId)
                                })
                                .catch((err) => {
                                    console.error(err);
                                });
                            break;
                    }

                    break;

                case WALLETCONNECT:
                    break;
            }
            console.log(option)
            
        },

        async watchLoginStatus() {

            watch(() => this.userStore.status, (newLoginStatus) => {

                switch (newLoginStatus) {
                    case STATUS_LOGGED_IN:
                        this.afterLogin();
                        
                        break
                    default:
                        this.isConnention();
                }
            }, {immediate: true});
        },

        userAddress() {
            return filterAddress(this.userStore.address); // 或者是任何默认值
        },

        userBalance() {
            return filterDecimal(this.userStore.balance); // 或者是任何默认值
        },


        afterLogin() {
            const closeButton = document.querySelector('.modal-header .btn-close');
            closeButton.click()
            
            this.isOpen = false
            this.showLoader = false;
            this.initializationText = '';
    
            this.showConnectSignIn = false;
            this.showNewListItem = true;
            console.log('Successfully connected to the website');
            
        },

        async isConnention() {
            
                
            switch (this.userStore.connector){
                case METAMASK:
                    this.userStore.setWeb3Provider(new Web3(window.ethereum));
                    const provider = this.userStore.web3Provider
                    const currentChainId = Web3.utils.toHex(await provider.eth.getChainId())
                    try {
                        const accounts = await provider.eth.getAccounts();
                        if (accounts.length > 0) {
                            this.userStore.setAddress(accounts[0])
                            this.userStore.setChainId(currentChainId)
                            console.log('Connected account:', accounts[0]);
                            this.userStore.setStatus(STATUS_LOGGED_IN)
                            window.ethereum.on('accountsChanged', (accounts) => {
                                if (accounts.length === 0) {
                                    this.userStore.setStatus(STATUS_DISCONNECTED)
                                    console.log('Disconnection now.');
                                } else {
                                    console.log('Switched account:', accounts[0]);
                                    this.userStore.setAddress(accounts[0])
                                    this.userStore.setChainId(currentChainId)
                                    this.userStore.setStatus(STATUS_LOGGED_IN)
                                }
                            });

                            switch (currentChainId) {
                                case PROVIDER_CONFIG.ethChainId:
                                    this.userStore.setChainId(currentChainId)
                                    console.log('Connected chain:', currentChainId);
                                    break

                                case PROVIDER_CONFIG.bnbChainID:
                                    this.userStore.setChainId(currentChainId)
                                    console.log('Connected chain:', currentChainId);
                                    break

                                default:
                                    await this.switchChain(ETHEREUM)
                                    break 
                            }

                            window.ethereum.on('chainChanged', async (chainId) => {
                                
                                switch (chainId) {

                                    case PROVIDER_CONFIG.ethChainId:
                                        this.userStore.setChainId(chainId)
                                        console.log('Chain changed to:', chainId);
                                        break

                                    case PROVIDER_CONFIG.bnbChainID:
                                        this.userStore.setChainId(chainId)
                                        console.log('Chain changed to:', chainId);
                                        break

                                    default:
                                        await this.switchChain(ETHEREUM)
                                        break
                                }
                            });
                        }

                    } catch (error) {
                        console.error('Error checking if wallet is connected:', error);
                    }
                    break;
                
                case WALLETCONNECT:
                    break

            }
        },
            
        
    
        async initConnection(option) {

            this.userStore.setStatus(STATUS_NOT_LOGGED_IN);
            
            this.showLoader = true
            this.initializationText = `Initializing...`
            // Simulate the initialization process (you can use a timer or API calls here)
            console.log(option)
            switch (option) {
                case METAMASK:
                    await initWeb3Connention(option)
                        .then((provider) => {
                            // 连接成功后，使用返回的web3实例来设置Web3提供者
                            this.userStore.setConnector(METAMASK);
                            this.userStore.setWeb3Provider(provider);
                            // 其他成功连接后的逻辑
                            this.userStore.setStatus(STATUS_LOGGING)
                        })
                        .catch((err) => {
                            // 错误处理
                            if (err.code === 4001) {
                            // 用户拒绝连接
                            console.log('Please connect to MetaMask.');
                            } else {
                            // 其他错误
                            console.error(err);
                            }
                        });
                        break;

                case WALLETCONNECT:
                    break;
            }
        
        },

        async _getBalance() {
            const provider = this.userStore.web3Provider
            const balance = await provider.utils.fromWei(await provider.eth.getBalance(this.userStore.address), 'ether');
            return balance
        },

        async getBalance() {
            watch(() => this.userStore.status, async (newStatus) => {
                console.log(newStatus)
                switch (newStatus) {
                    case STATUS_LOGGED_IN:
                        const balance = await this._getBalance();
                        this.userStore.setBalance(balance)
                        break
            }
            }, {immediate: true});
        },
        
        toggleNavbar() {
            this.isNavbarOpen = !this.isNavbarOpen;
        },

        closeNavbar() {
            this.isNavbarOpen = false;
        },

        toggleDropdown() {
            this.isOpen = !this.isOpen;
        },

      


  
    },
  };
  </script>
  <style lang="scss" scoped>
    header{
        padding: 0.13rem 0 0.12rem;
        top: 0;
        left: 0;
        height: 0.68rem;
        z-index: 99;
        transition: all 0.5s ease 0s;
        background: var(--white-color);
        &.fixed-header{
            background: rgba(255,255,255,0.9);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
        }
        @media(max-width: 767px){
            padding: 20px 0;
        }
        .header-main-content{
            padding: 0 0.4rem;
        }
        .page-title{
            font-size: 0.24rem;
            font-weight: 500;
            font-family: var(--cd-font);
        }
        .main-navigation{
            font-family: var(--inter-font);
            font-weight: 500;
            .nav-item{
                margin-left: 0.15rem;
                &.new-item{
                border-radius: 0.08rem;
                background: rgba(83, 92, 255, 0.1);
                align-items: center;
                display: flex;
                .nav-link{
                    color: var(--black-color);
                    font-size: 0.13rem;
                    padding: 0.02rem 0.12rem 0.02rem 0.10rem;
                    line-height: 1.24;
                    align-items: center;
                    .icon{
                        width: 0.18rem;
                        img{
                            width: 100%;
                        }
                    }
                    .text{
                        padding-left: 0.06rem;
                        padding-right: 0.04rem;
                    }
                    em{
                        display: block;
                        color: var(--blue-color);
                    }
                }
                }
            }
            .nav-link{
                padding: 0.08rem 0.12rem;
                font-size: 0.16rem;
                color: var(--blue-color);
                text-decoration: none;
                @media(max-width: 1199px){
                    font-size: 0.18rem;
                }
                @media(max-width: 767px){
                    font-size: 16px;
                    font-weight: 400;
                    padding: 7px;
                }
            }
            @media(max-width: 767px){
                .nav-item.btn-link.active{
                    .nav-link{
                        color: var(--blue-color);
                    }
                }
            }
        }
        .btn{
            border-radius: 0.08rem; 
            --bs-btn-font-size: 0.16rem;
            font-weight: 600;
        }
        .navbar-toggler{
            width: 0.35rem;
            height: 0.35rem;
            padding: 0;
            border: none;
            span{
                width: 0.35rem;
                height: 0.35rem;
                vertical-align: top;
                background-image: url('../static/images/icons/toggle-icon-active.png');
                background-size: 0.22rem;
                opacity: 1;
            }
            &:focus{
                box-shadow: none;
                opacity: 1;
            }
            &.collapsed{
                span{
                    background-image: url('../static/images/icons/toggle-icon.png');
                }
            }
            @media(max-width: 480px){
                span{
                    background-size: 17px;
                }
            }
        }
        .navbar-collapse,.navbar-collapse.collapsing{
            @media(max-width: 767px){
                left: -102%;
                height: 100vh;
                position: fixed;
                background: linear-gradient(130deg,#fff,#d8fdf8);
                padding: 30px 20px;
                top: 0;
                width: 280px;
                display: block;
                transition: all 0.4s ease 0s;
                box-shadow: 0 0 3px rgba(0,0,0,0.1);
            }
            &.show{
                left: 1px;
            }
        }
        .btn-close{
            position: absolute;
            right: 7px;
            top: 7px;
            width: 30px;
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 1;
            background-size: 13px;
            &:focus{
                box-shadow: none;
            }
        }
        .navbar-logo{
            padding-left: 7px;
            padding-right: 7px;
            img{
                width: 90px;
            }
        }
        .customized-variant-dropdown{
            .dropdown-toggle{
                background: rgba(83, 92, 255, 0);
                border: 0;
                color: var(--black-color) !important;
                font-weight: 500;
                font-size: 0.14rem;
            }
            .dropdown-menu{
                right: 0;
                top: 128%;
                width: 2.75rem;
                padding: 0.18rem ;
                border: 1px solid rgba(228, 228, 228, 1);
                > .block{
                    padding-bottom: 0.2rem;
                }
            }
            
            .heading-cta{
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin-bottom : 0.06rem;
                .heading{
                    padding-right: 0.1rem;
                    h6{
                        font-size: 0.12rem;
                        color: rgba(0,0,0,0.6);
                        margin: 0;
                        font-family: var(--inter-font);
                    }
                }
                .cta{
                    cursor: pointer;
                    span{
                        background: rgba(238, 239, 255, 1);
                        padding: 0.02rem 0.03rem;
                        min-width: 0.5rem;
                        display: inline-block;
                        border-radius: 0.06rem;
                        text-align: center;
                        font-weight: 300;
                        line-height: 1;
                    }
                    img{
                        width: 0.14rem;
                    }
                }
            }
            .code-cta {
                font-size: 0.12rem;
                display: flex;
                align-items: center;
                padding: 0.1rem 0;
                .sno,.wallet-logo{
                    width: 0.18rem;
                    img{
                        width: 98%;
                    }
                }
                .code {
                    padding-right: 0.03rem;
                    word-break: break-all;
                    width: calc(100% - 0.45rem);
                    display: flex;
                    align-items: center;
                    > span{
                        padding-left:0.06rem;
                        width: calc(100% - 0.18rem);
                        display: block;
                    }
                }
                .icon{
                    width: 0.23rem;
                    cursor: pointer;
                    img{
                        width: 100%;
                    }
                    &.share-icon{
                        width: 0.19rem; 
                    }
                }
            }
            .btn-content{
                padding-top: 0.05rem;
            }
        }
    }
    .modal{
        .loader{
            background-color: var(--gray-SecVariant-color);
            padding-bottom: 0.3rem;
            padding-top: 0.05rem;
            border-radius: 0.1rem;
            .icon{
                width: 1rem;
                margin: 0 auto;
                img{
                    width: 100%;
                }
            }
            .caption{
            font-size: 0.12rem;
            }
        }
    }
  </style>
  