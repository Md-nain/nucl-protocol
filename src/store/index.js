import { defineStore } from 'pinia'
import { STATUS_NOT_LOGGED_IN, ETHEREUM} from '@/assets/js/constant.js'

export const useUserStore = defineStore('user', {
    state: () => ({ 
        connector: null,
        status: STATUS_NOT_LOGGED_IN,
        chainId: null,
        scanUrl: null,
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
      setScanUrl(option) {
        this.scanUrl = option;
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

export const useTransactionModalStore = defineStore('transactionModal', {
    state: () => ({
        isTransactionPending: false,
        isTransactionConfirmed: false,
        isTransactionFailed: false,
        txid: '',
        scanUrl: ''
    }),

    actions: {
        // 显示"进行中"的模态框
        showPendingModal() {
            this.isTransactionPending = true;
            this.isTransactionConfirmed = false;
            this.isTransactionFailed = false;
        },
        // 显示"已确认"的模态框
        showConfirmedModal(scanUrl, txid) {
            this.isTransactionPending = false;
            this.isTransactionConfirmed = true;
            this.isTransactionFailed = false;
            this.scanUrl = scanUrl;
            this.txid = txid;
        },
        // 显示"失败"的模态框
        showFailedModal(scanUrl, txid) {
            this.isTransactionPending = false;
            this.isTransactionConfirmed = false;
            this.isTransactionFailed = true;
            this.scanUrl = scanUrl;
            this.txid = txid;
        },
        // 关闭所有模态框
        closeAllModals() {
            this.isTransactionPending = false;
            this.isTransactionConfirmed = false;
            this.isTransactionFailed = false;
        }
    }
});