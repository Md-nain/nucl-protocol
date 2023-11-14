const TEST_HOST = [
    'localhost:3000',
    'nucl.salusec.us',
    'test.com'
]

const PROD = {
    ethChainId: "0x1",
    ethRpcUrl: 'https://mainnet.infura.io/v3',
    bnbChainId: "0x38",
    bnbRpcUrl: 'https://bsc-dataseed1.binance.org/',
    stakePoolContractAddress: "0x59aeC4b02Befaa7b7587D6A5Af650e2116cccb7E",
}

const TEST = {
    ethChainId: "0x5",
    ethRpcUrl: 'wss://ethereum-goerli.publicnode.com',
    ethScanUrl: 'https://goerli.etherscan.io',
    bnbChainId: "0x61",
    bnbRpcUrl: 'wss://bsc-testnet.publicnode.com',
    bscScanUrl: 'https://testnet.bscscan.com',
    
    stakePoolContractAddress: "0x7dafa4c156a0894711ea8c6bb9c8e199d365b8dd",
}

export const PROVIDER_CONFIG = TEST_HOST.includes(location.host) ? TEST : PROD;


