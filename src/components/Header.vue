<template>
    <header id="main-header" :class="['header', { 'fixed-header': fixedHeader }]">
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
                                <a href="javascript:void(0);" class="nav-link" target="_blank">
                                    Staking <img src="@/static/images/icons/external-btn-icon.svg" alt="icon">
                                </a>
                            </li>
                            <li class="nav-item external-btn">
                                <a href="javascript:void(0);" class="nav-link" target="_blank">
                                    Strategy Vaults <img src="@/static/images/icons/external-btn-icon.svg" alt="icon">
                                </a>
                            </li>
                            <li class="nav-item dropdown coin-logos-dropdown">
                                <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="headerCoinDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img src="@/static/images/icons/eth-icon.svg" alt="icon">
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="headerCoinDropdown">
                                    <li><a class="dropdown-item" href="#"> <img src="@/static/images/icons/eth-icon.svg" alt="icon"> Ethereum</a></li>
                                    <li><a class="dropdown-item" href="#"> <img src="@/static/images/icons/bnb-icon.svg" alt="icon"> BNB</a></li>
                                </ul>
                            </li>
                            <li class="nav-item">
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
                                <span @click="initiateConnection('Metamask')">Metamask</span>
                                <div class="icon">
                                    <img src="@/static/images/icons/metamask-logo.svg" alt="logo">
                                </div>
                            </div>
                        </div>
                        <div class="option-item">
                            <div class="item-content">
                                <span @click="initiateConnection('WalletConnect')">WalletConnect</span>
                                <div class="icon">
                                    <img src="@/static/images/icons/walletconnect-logo.svg" alt="logo">
                                </div>
                            </div>
                        </div>
                    </div><!-- Sign in options -->
                    <!-- Loader with initialization text -->
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
  export default {
    name: 'Header',
    props: ['pageTitle'],
    data() {
      return {
        fixedHeader: false,
        isNavbarOpen: false,
        showLoader: false,
        initializationText: '',
      };
    },
    mounted() {
      window.addEventListener('scroll', this.setFixedHeader);
    },
    methods: {
      setFixedHeader() {
        this.fixedHeader = window.pageYOffset > 10;
      },
      toggleNavbar() {
        this.isNavbarOpen = !this.isNavbarOpen;
      },
      closeNavbar() {
        this.isNavbarOpen = false;
      },
  
      initiateConnection(option) {
        this.showLoader = true;
        this.initializationText = `Initializing...`;
        // Simulate the initialization process (you can use a timer or API calls here)
        setTimeout(() => {
          // Once the initialization is complete, hide the loader and show the actual content
          this.showLoader = false;
          this.initializationText = '';
  
          // You can now perform the actual connection process
          // Update the UI accordingly
        }, 2000); // Replace 2000 with the actual time it takes to initialize
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
              }
              .nav-link{
                  padding: 0.08rem 0.12rem;
                  font-size: 0.16rem;
                  color: var(--blue-color);
                  
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
      }
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
  </style>
  