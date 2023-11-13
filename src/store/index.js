import { defineStore } from 'pinia'
import { STATUS_NOT_LOGGED_IN, ETHEREUM} from '@/assets/js/constant.js'

export const useUserStore = defineStore('user', {
    state: () => ({ 
      connector: null,
      status: STATUS_NOT_LOGGED_IN,
      chainId: null,
      address: "0x000000000000000000000000",
      balance: "0",
      currency: "ETH",
      web3Provider: null,
      timestamp: Date.now(),
    }),
    actions: {
      setConnector(option) {
        this.connector = option;
      },
      setStatus(option) {
        this.status = option;
      },
      setChainId(option) {
        this.chainId = option;
      },
      setAddress(option) {
        this.address = option;
      },
      setBalance(option) {
        this.balance = option;
      },
      setWeb3Provider(option) {
        this.web3Provider = option;
      },
      update() {
        this.timestamp = Date.now();
      },
    },
    persist: true
})


export const useAlertStore = defineStore('alert', {
  state: () => ({
    alerts: [] // 用于存储多个弹窗
  }),
  actions: {
    show(title, message) {
      console.log(title)
      this.alerts.push({ title, message, id: Date.now() });
    },
    hide(id) {
      this.alerts = this.alerts.filter(alert => alert.id !== id);

    }
  }
});