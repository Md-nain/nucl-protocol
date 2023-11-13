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
    ethRpcUrl: 'https://ethereum-goerli.publicnode.com	',
    bnbChainId: "0x61",
    bnbRpcUrl: 'https://bsc-testnet.blockpi.network/v1/rpc/public',
    stakePoolContractAddress: "0x24ba0B6cE496b9317Ef533C15B78f5266D1e9437",
    
    
}

export const PROVIDER_CONFIG = TEST_HOST.includes(location.host) ? TEST : PROD;


