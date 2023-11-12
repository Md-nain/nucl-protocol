import Web3 from "web3";

import { PROVIDER_CONFIG } from "./config.js"

import { InjectedConnector } from '@web3-react/injected-connector'
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'

import { WALLETCONNECT, METAMASK } from '@/assets/js/constant.js'


const metamaskConnector = new InjectedConnector({
  supportedChainIds: [PROVIDER_CONFIG.ethChainId, PROVIDER_CONFIG.bnbChainId]
})

const walletconnectConnector = new WalletConnectConnector({
  rpc: { [PROVIDER_CONFIG.ethChainId]: PROVIDER_CONFIG.ethRpcUrl , [PROVIDER_CONFIG.bnbChainId]: PROVIDER_CONFIG.bnbRpcUrl }, // 这里应提供你自己的Infura ID或者其他RPC URL
  bridge: 'https://bridge.walletconnect.org',
  qrcode: true
})

export async function initWeb3Connention(type) {
    let provider;
    switch (type) {
        case METAMASK:
            provider = await metamaskConnector.getProvider();
            if (!provider) {
                throw new Error('Failed to get MetaMask provider');
            }
          
            await provider.request({ method: 'eth_requestAccounts' });

            break;

        case WALLETCONNECT:
          await activate(walletconnectConnector);
          provider = await walletconnectConnector.getProvider();
          if (!provider) {
            throw new Error('Failed to get WalletConnect provider');
          }

          break;
        }
    

    const web3 = new Web3(provider);
    return web3;
}

export async function metamaskSwitchNetwork(chainId, rpcUrl) {
    try {
    // 尝试切换到指定网络
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: chainId }], // chainId 必须是十六进制字符串
      });
    } catch (switchError) {
    // 如果用户尚未添加该网络，我们可以引导他们添加该网络
        switch (switchError.code) {
          case 4902:
              try {
                  await window.ethereum.request({
                      method: 'wallet_addEthereumChain',
                      params: [
                          { 
                              chainId: chainId,
                              rpcUrl: rpcUrl
                          },
                      ],
                  });
              } catch (addError) {
                  throw new Error('Please add the chain.');
              }
              
              break


          default:
            throw switchError;
        }
    }
}

export async function initContractConnection(provider, account, contractAddress, abi) {
    const contract = await new provider.eth.Contract(abi, contractAddress);
    contract.options.from = account;
    return contract;
}