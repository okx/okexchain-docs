/*
 * @Author: xiaojun.liu
 * @Date: 2023-03-23 12:40:21
 * @LastEditTime: 2023-03-23 12:40:21
 * @Description:
 */

module.exports = [
    {
        title: 'Build',
        children: [
            {
                title: 'Build on OKBC',
                children: [
                    {
                        title: 'Welcome to OKB Chain (OKBC)',
                        children: [
                            'dev/build/build-on-okbc/welcome/introduction-to-okbc',
                            'dev/build/build-on-okbc/welcome/rpc-network'
                        ],
                        title: 'Get Started',
                        children: [
                            'dev/build/build-on-okbc/get-started/install-okbc',
                            'dev/build/build-on-okbc/get-started/deploy-your-okbc-localnet',
                            'dev/build/build-on-okbc/get-started/join-public-testnet'
                        ],
                        title: 'Wallet',
                        children: [
                            'dev/build/build-on-okbc/wallet/get-started',
                            title: 'Metamask',
                            chidren: [
                                'dev/build/build-on-okbc/wallet/metamask/overview',
                                'dev/build/build-on-okbc/wallet/metamask/add-okbc-to-metamask',
                                'dev/build/build-on-okbc/wallet/metamask/configure-custom-tokens',
                                'dev/build/build-on-okbc/wallet/metamask/create-and-import-accounts',
                                'dev/build/build-on-okbc/wallet/metamask/set-up-metamask-for-okbc'
                            ],
                            title: 'okx-web3-wallet',
                            chidren: [
                                'dev/build/build-on-okbc/wallet/okx-web3-wallet/web3-wallet-101'
                            ]
                        ],
                        title: 'Smart Contracts',
                        children: [
                            title: 'Deploy Contracts',
                            children: [
                                'dev/build/build-on-okbc/smart-contracts/deploy-contracts/using-remix',
                                'dev/build/build-on-okbc/smart-contracts/deploy-contracts/using-truffle',
                                'dev/build/build-on-okbc/smart-contracts/deploy-contracts/using-hardhat',
                            ],
                            'dev/build/build-on-okbc/smart-contracts/verify-contracts',
                        ],
                        title: 'Assets',
                        children: [
                            'dev/build/build-on-okbc/assets/oip20',
                            'dev/build/build-on-okbc/assets/oip721',
                            'dev/build/build-on-okbc/assets/oip1155',
                            'dev/build/build-on-okbc/assets/oip165',
                        ],
                        title: 'Bridge',
                        children: [
                            title: 'IBC',
                            children: [
                            'dev/build/build-on-okbc/bridge/ibc-overview',
                            'dev/build/build-on-okbc/bridge/okbc-ibc-cli-guide',
                            ]
                        ],
                        title: 'Bridge',
                        children: [
                            'dev/build/build-on-okbc/resouces/okbchain-quick-access',
                        ]   
                    }
                ]
                }
            ],
        title: 'Maintain',
        children: [
            {
                title: 'Run a Node',
                children: [
                    {
                        title: 'Node Overview',
                        children: [
                            'dev/maintain/run-a-node/node-overview/types-of-nodes',
                            'dev/maintain/run-a-node/node-overview/hardware-requirement',
                        ],
                        title: 'RPC Node',
                        children: [
                            'dev/maintain/run-a-node/rpc-node/add-network-endpoints',
                            'dev/maintain/run-a-node/rpc-node/node-data-snapshot',
                            'dev/maintain/run-a-node/rpc-node/run-a-testnet-node',
                            'dev/maintain/run-a-node/rpc-node/upgrade-your-node',
                        ],
                        title: 'Node Client',
                        children: [
                            'dev/maintain/run-a-node/node-client/okb-chain-client',
                            'dev/maintain/run-a-node/node-client/service-providers',
                            'dev/maintain/run-a-node/node-client/supervision-tool',
                        ],
                        'dev/maintain/run-a-node/faq'
                    }

                ]
            }
        ],
        title: 'Protocols',
        children: [
            {
                title: 'OKBC Network',
                children: [
                    {
                        title: 'Core Concepts',
                        children: [
                            'dev/protocols/okbc-network/core-concepts/consensus-overview',
                            'dev/protocols/okbc-network/core-concepts/accounts',
                            'dev/protocols/okbc-network/core-concepts/gas-and-fees',
                            'dev/protocols/okbc-network/core-concepts/transactions',
                        ],
                    }
                ]            
            }
        ]
    }
]
