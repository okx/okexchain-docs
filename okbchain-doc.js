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
                            'dev/build-dapps/build-on-okbc/welcome/introduction-to-okbc',
                            'dev/build-dapps/build-on-okbc/welcome/rpc-network'
                        ],
                        title: 'Get Started',
                        children: [
                            'dev/build-dapps/build-on-okbc/get-started/install-okbc',
                            'dev/build-dapps/build-on-okbc/get-started/deploy-your-okbc-localnet',
                            'dev/build-dapps/build-on-okbc/get-started/join-public-testnet'
                        ],
                        title: 'Wallet',
                        children: [
                            'dev/build-dapps/build-on-okbc/wallet/get-started',
                            title: 'Metamask',
                            chidren: [
                                'dev/build-dapps/build-on-okbc/wallet/metamask/overview',
                                'dev/build-dapps/build-on-okbc/wallet/metamask/add-okbc-to-metamask',
                                'dev/build-dapps/build-on-okbc/wallet/metamask/configure-custom-tokens',
                                'dev/build-dapps/build-on-okbc/wallet/metamask/create-and-import-accounts',
                                'dev/build-dapps/build-on-okbc/wallet/metamask/set-up-metamask-for-okbc'
                            ],
                            title: 'OKX Web3 Wallet',
                            chidren: [
                                'dev/build-dapps/build-on-okbc/wallet/okx-web3-wallet/web3-wallet-101'
                            ]
                        ],
                        title: 'Smart Contracts',
                        children: [
                            title: 'Deploy Contracts',
                            children: [
                                'dev/build-dapps/build-on-okbc/smart-contracts/deploy-contracts/using-remix',
                                'dev/build-dapps/build-on-okbc/smart-contracts/deploy-contracts/using-truffle',
                                'dev/build-dapps/build-on-okbc/smart-contracts/deploy-contracts/using-hardhat',
                            ],
                            'dev/build-dapps/build-on-okbc/smart-contracts/verify-contracts',
                        ],
                        title: 'Assets',
                        children: [
                            'dev/build-dapps/build-on-okbc/assets/oip20',
                            'dev/build-dapps/build-on-okbc/assets/oip721',
                            'dev/build-dapps/build-on-okbc/assets/oip1155',
                            'dev/build-dapps/build-on-okbc/assets/oip165',
                        ],
                        title: 'Bridge',
                        children: [
                            title: 'IBC',
                            children: [
                            'dev/build-dapps/build-on-okbc/bridge/ibc-overview',
                            'dev/build-dapps/build-on-okbc/bridge/okbc-ibc-cli-guide',
                            ]
                        ],
                        title: 'Resources',
                        children: [
                            'dev/build-dapps/build-on-okbc/resouces/okbchain-quick-access',
                        ]   
                    }
                ],
                title: 'Build with WASM',
                children: [
                    {
                        title: 'Get Started',
                        children: [
                            'dev/build-dapps/build-with-wasm/get-started/wasm-overview',
                            'dev/build-dapps/build-with-wasm/get-started/okbc-wasm-instruction-manual'
                        ],
                        title: 'Developer Guides',
                        children: [
                            'dev/build-dapps/build-with-wasm/developer-guides/vmbridge',
                            'dev/build-dapps/build-with-wasm/developer-guides/connect-to-okbc-with-cosmwasmjs',
                            'dev/build-dapps/build-with-wasm/developer-guides/deploy-with-bytecraft'
                        ]
                    }
                ],
                title: 'OKBC SDK',
                children: [
                        'dev/build-dapps/okbc-sdk/get-started',
                        'dev/build-dapps/okbc-sdk/api-architecture',
                        {
                        title: 'APIs',
                        children: [
                            title: 'Go SDK',
                            children: [
                                'dev/build-dapps/okbc-sdk/apis/go-sdk/client-setup',
                                'dev/build-dapps/okbc-sdk/apis/go-sdk/utils',
                                'dev/build-dapps/okbc-sdk/apis/go-sdk/auth',
                                'dev/build-dapps/okbc-sdk/apis/go-sdk/token',
                                'dev/build-dapps/okbc-sdk/apis/go-sdk/staking',
                                'dev/build-dapps/okbc-sdk/apis/go-sdk/distribution',
                                'dev/build-dapps/okbc-sdk/apis/go-sdk/slashing',
                                'dev/build-dapps/okbc-sdk/apis/go-sdk/backend',
                                'dev/build-dapps/okbc-sdk/apis/go-sdk/governance',
                                'dev/build-dapps/okbc-sdk/apis/go-sdk/tendermint',
                            ],
                            title: 'Java SDK',
                            children: [
                                'dev/build-dapps/okbc-sdk/apis/java-sdk/package-utils',
                                'dev/build-dapps/okbc-sdk/apis/java-sdk/package-crypto',
                                'dev/build-dapps/okbc-sdk/apis/java-sdk/package-msg'
                            ],
                            title: 'JavaScript SDK',
                            children: [
                                'dev/build-dapps/okbc-sdk/apis/javascript-sdk/client-setup',
                                'dev/build-dapps/okbc-sdk/apis/javascript-sdk/client-apis',
                                'dev/build-dapps/okbc-sdk/apis/javascript-sdk/crypto'
                            ]
                        ]
                    }
                ],
                title: 'OKBC API',
                children: [
                    {
                        title: 'Rest API',
                        children: [
                            'dev/build-dapps/okbc-api/rest-api/overview',
                            title: 'API References',
                            children: [
                                'dev/build-dapps/okbc-api/rest-api/api-references/account',
                                'dev/build-dapps/okbc-api/rest-api/api-references/blocks',
                                'dev/build-dapps/okbc-api/rest-api/api-references/staking',
                                'dev/build-dapps/okbc-api/rest-api/api-references/distribution',
                                'dev/build-dapps/okbc-api/rest-api/api-references/wasm',
                                'dev/build-dapps/okbc-api/rest-api/api-references/gov'
                            ]
                        ],
                        title: 'JSON-RPC API',
                        children: [
                            'dev/build-dapps/okbc-api/json-rpc-api/overview',
                            title: 'API References',
                            children: [
                                'dev/build-dapps/okbc-api/json-rpc-api/api-references/web3',
                                'dev/build-dapps/okbc-api/json-rpc-api/api-references/net',
                                'dev/build-dapps/okbc-api/json-rpc-api/api-references/eth',
                                'dev/build-dapps/okbc-api/json-rpc-api/api-references/websocket',
                                'dev/build-dapps/okbc-api/json-rpc-api/api-references/personal'
                            ]
                        ],
                        title: 'Websocket API',
                        children: [
                            'dev/build-dapps/okbc-api/websocket-api/overview',
                            title: 'API References',
                            children: [
                                'dev/build-dapps/okbc-api/websocket-api/api-references/create-subscription',
                                'dev/build-dapps/okbc-api/websocket-api/api-references/cancel-subscription',
                                'dev/build-dapps/okbc-api/websocket-api/api-references/supported-subscriptions'
                            ]
                        ]
                    }
                ],
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

                ],
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
