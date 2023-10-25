<template>
    <div class="main-sidebar" :class="{ 'collapsed': isCollapsed }">
        <div class="sidebar-content">
            <div class="sidebar-logo">
                <a href="javascript:void(0)">
                    <img class="expand-logo" src="@/static/images/logo.svg" alt="">
                    <img class="collapsed-logo" src="@/static/images/sidebar-logo-icon.svg" alt="icon">
                </a>
            </div>
            <div class="sidebar-navigation">
                <ul>
                    <li>
                        <router-link to="/">
                            <div class="icon">
                                <img src="@/static/images/icons/myprofile-icon.svg" alt="icon">
                            </div>
                            <span>My Profile</span>
                        </router-link>
                    </li>
                    <li :class="{ 'active': isSubmenuActive() }">
                        <a href="javascript:void(0);" @click="toggleSubMenu">
                            <div class="icon">
                                <img src="@/static/images/icons/automated-icon.svg" alt="icon">
                            </div>
                            <span>Automated Strategies</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="lower-content">
                <div class="icon-cta">
                    <router-link to="/settings">
                        <div class="icon">
                            <img src="@/static/images/icons/settings-icon.svg" alt="icon">
                        </div>
                        <span>
                            Settings
                        </span>
                    </router-link>
                </div>
                <div class="bottom">
                    <div class="triggerer">
                        <img class="collapse-sidebar" @click="toggleSidebar" src="@/static/images/icons/collapse-sidebar-icon.svg" alt="icon">
                        <img class="expand-sidebar" @click="toggleSidebar" src="@/static/images/icons/expand-sidebar-icon.svg" alt="icon">
                    </div>
                    <div class="social-icons">
                        <a href="javascript:void(0);" target="_blank">
                            <img src="@/static/images/icons/telegram-icon.svg" alt="icon">
                        </a>
                        <a href="javascript:void(0);" target="_blank">
                            <img src="@/static/images/icons/twitter-icon.svg" alt="icon">
                        </a>
                        <a href="javascript:void(0);" target="_blank">
                            <img src="@/static/images/icons/discord-icon.svg" alt="icon">
                        </a>
                    </div>
                </div>
            </div>
            <div class="sidebar-submenu" v-show="showSubMenu">
                <div class="submenu-content">
                    <div class="close" @click="closeSubMenu">
                        <img src="@/static/images/icons/cross-icon.svg" alt="x">
                    </div>
                    <div class="title-area">
                        <span>Automated Strategies</span>
                    </div>
                    <div class="navigation-content">
                        <ul>
                            <li>
                                <router-link to="/stETHETHRecursiveStaking">
                                    <div class="icon">
                                        <img src="@/static/images/icons/sub-nav-icon.svg" alt="icon">
                                    </div>
                                    <span>Leveraged stETH-ETH Arbitrage</span>
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/stETHETHRecursiveStakingpage2">
                                    <div class="icon">
                                        <img src="@/static/images/icons/sub-nav-icon.svg" alt="icon">
                                    </div>
                                    <span>Leveraged stETH-ETH Arbitrage</span>
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/stETHETHRecursiveStakingpage3">
                                    <div class="icon">
                                        <img src="@/static/images/icons/sub-nav-icon.svg" alt="icon">
                                    </div>
                                    <span>Leveraged stETH-ETH Arbitrage</span>
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Sidebar',
    data() {
        return {
            isCollapsed: false,
            showSubMenu: false,
        };
    },
    mounted() {},
    methods: {
        toggleSidebar() {
            this.isCollapsed = !this.isCollapsed;
            const appElement = document.querySelector('html'); // You can use 'body' or an ID selector if needed
            appElement.classList.toggle('sidebar-collapsed', this.isCollapsed);
        },
        toggleSubMenu() {
            this.showSubMenu = !this.showSubMenu;
        },
        closeSubMenu() {
            this.showSubMenu = false;
        },
        isSubmenuActive() {
            // Check if the current route matches any of the submenu items
            const currentRoute = this.$route.path;
            return (
                currentRoute === '/stETHETHRecursiveStaking' ||
                currentRoute === '/stETHETHRecursiveStakingpage2' ||
                currentRoute === '/staking'
            );
        },
    },
};
</script>

<style lang="scss" scoped>
.main-sidebar{
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    background: var(--blue-color);
    color: var(--white-color);
    width: 2rem;
    padding: 0.1rem 0.15rem;
    z-index: 1;
    .sidebar-logo{
        padding: 0.18rem 0.08rem 0.15rem; 
        margin-bottom: 0.13rem;
        a{
            width: 1rem;
            display: inline-block;
        }
        img{
            width: 100%;
        }
        .collapsed-logo{
            display: none;
        }
    }

    .sidebar-navigation{
        padding: 0.2rem 0;
        li{
            font-size: 0.14rem;
            line-height: 1.2;
            text-align: left;
            list-style: none;
            margin-bottom: 0.14rem;
            .icon{
                width: 0.2rem;
                height: 0.2rem;
                img{
                    filter: brightness(0) invert(1);
                    width: 100%;
                }
            }
            a{
                display: flex;
                align-items: center;
                color: var(--white-color);
                padding: 0.07rem 0.12rem;
                text-decoration: none;
                border-radius: 0.1rem;
                font-weight: 700;
                min-height: 0.48rem;
            }
            span{
                padding-left: 0.08rem;
                transition: all 0.3s ease 0s;
            }
            &:hover{
                span{
                    transform: translateX(0.02rem);
                }
            }
            a.router-link-active{

                background-color: var(--white-color);
                background-image: url('@/static/images/active-state-bg.png');
                color: var(--black-color);
                background-size: cover;
                background-position: center;
                .icon{
                    img{
                        filter: brightness(0);
                    }
                }
            }
            &.active{
                a{
                    background-color: var(--white-color);
                    background-image: url('@/static/images/active-state-bg.png');
                    color: var(--black-color);
                    background-size: cover;
                    background-position: center;
                    .icon{
                        img{
                            filter: brightness(0);
                        }
                    }
                }
            }
            
            
        }
    }
    .sidebar-content{
        height: 100%;
        display: flex;
        flex-direction: column;
    }
    .lower-content{
        margin-top: auto;
        .bottom{
            border-top: 0.01rem solid var(--white-color);
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            padding: 0.2rem 0;
            justify-content: space-between;
        }
        .triggerer{
            width: 0.4rem;
            display: flex;
            align-items: center;
            padding: 0.06rem 0;
        }
        .expand-sidebar{
            display: none;
            transition: all 0.3s ease 0;
        }
        .social-icons{
            display: flex;
            opacity: 1;
            margin-left: 0.2rem;
            a{
                margin: 0.05rem 0.08rem;
                width: 0.2rem;
                display: inline-block;
                vertical-align: top;
                transition: all 0.3s ease 0s;
                img{
                    width: 100%;
                }
                &:hover{
                    transform: translateY(-0.02rem);
                }
            }
        }
    }
    .icon-cta{
        margin-bottom: 0.05rem;
        .icon{
            width: 0.2rem;
            height: 0.2rem;
            img{
                filter: brightness(0) invert(1);
                max-width: 100%;
            }
        }
        a{
            display: flex;
            align-items: center;
            color: var(--white-color);
            padding: 0.07rem 0.12rem;
            text-decoration: none;
            border-radius: 0.1rem;
            font-weight: 700;
            min-height: 0.48rem;
            font-size: 0.14rem;
            line-height: 1.2;
            text-align: left;
            &.router-link-active{

                background-color: var(--white-color);
                background-image: url('@/static/images/active-state-bg.png');
                color: var(--black-color);
                background-size: cover;
                background-position: center;
                .icon{
                    img{
                        filter: brightness(0);
                    }
                }
            }
            span{
                padding-left: 0.08rem;
                transition: all 0.3s ease 0s;
            }
            &:hover{
                span{
                    transform: translateX(0.02rem);
                }
            }
        }
       
    }

    
    &.collapsed{
        width: 0.64rem;
        padding: 0.1rem 0.1rem;
        .sidebar-logo{
            margin-bottom: 0.115rem;
            a{
                width: auto;
            }
        }
        .expand-logo{
            display: none;
        }
        .collapsed-logo{
            display: block;
            width: 0.2rem;
        }
        .sidebar-content{
            li{
                span{
                    display: none;
                }
            }
            .icon-cta{
                span{
                    display: none;
                }
            }
        }
        .social-icons{
            display: none;
            opacity: 0;
        }
        .expand-sidebar{
            display: block;
            margin: 0 auto;
        }
        .collapse-sidebar{
            display: none;
        }
    }

    .sidebar-submenu {
        position: fixed;
        left: 2rem;
        background: var(--white-color);
        height: calc(100% - 0.7rem);
        top: 0.7rem;
        z-index: 9;
        border-top-right-radius: 0.3rem;
        padding: 0.2rem 0.1rem;
        text-align: left;
        color: var(--black-color);
        width: 2rem;
        font-size: 0.12rem;
        border: 2px solid rgba(232, 234, 237, 1);
        .submenu-content{
            .title-area{
                padding: 0.1rem 0.5rem 0.1rem 0.1rem;
                font-weight: 500;
                font-size: 0.14rem;
            }
            .close{
                position: absolute;
                right: 0.24rem;
                top: 0.4rem;
                width: 0.13rem;
                cursor: pointer;
                img{
                    width: 100%;
                }
            }
        }
        .navigation-content{
            padding-top: 0.03rem;
            ul{
                list-style: none;
                padding: 0;
            }
            li{
                a{
                    color: rgba(0,0,0,0.6);
                    display: flex;
                    align-items: center;
                    flex-wrap: wrap;
                    text-decoration: none;
                    padding: 0.1rem;
                    border-radius: 0.25rem;
                    line-height: 1.2;
                }
                .icon{
                    width: 0.18rem;
                    img{
                        width: 100%;
                    }
                }
                span{
                    width: calc(100% - 0.18rem);
                    display: inline-block;
                    vertical-align: top;
                    padding-left : 0.05rem;
                }
                &:hover, &:active{
                    a{
                       background: rgba(242, 244, 246, 1);
                    }
                }
                &.active,&:active,&:hover{
                    background-color: var(--light-gray);
                }

            }
        }   
    }
}
.sidebar-collapsed{
    .sidebar-submenu{
        left: 0.64rem;
    }
}

.main-sidebar {
    transition: width 0s;
}

.sidebar-navigation li {
    transition: all 0.3s;
}
</style>

