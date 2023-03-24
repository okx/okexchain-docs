/*
 * @Author: xiaojun.liu
 * @Date: 2023-03-23 12:40:21
 * @LastEditTime: 2023-03-23 12:40:21
 * @Description:
 */

module.exports = [
    {
        title: 'Quick Start',
        children: [
            {
                title: 'INTRODUCTION',
                collapsable: false,
                children: [
                    'dev/quick-start/introduction/introduction-to-okbchain',
                ],
            },
            {
                title: 'BUILD ON OKBC',
                collapsable: false,
                children: [
                    'dev/quick-start/build-on-okbc/install-okbc',
                    'dev/quick-start/build-on-okbc/deploy-your-own-okbc-testnet',
                    'dev/quick-start/build-on-okbc/join-public-testnet',
                ],
            },
        ],
    },
    {
            title: 'WALLET',
            children: [
            {
                title: 'GETTING STARTED',
                collapsable: false,
                children: [
                    'dev/wallet/getting-started/overview',
                ],
            },
            {
                title: 'THIRD-PARTY APPS',
                collapsable: false,
                children: [
                    'dev/wallet/third-party-apps/MetaMask',
                ],
            },
        ],
     },
    {
        title: 'Core Concepts',
        children: [
            {
                title: 'CONSENSUS',
                collapsable: false,
                children: [
                    'dev/core-concepts/consensus/consensus-overview'
                ]
            },
            {
                title: 'GAS & FEES',
                collapsable: false,
                children: [
                    'dev/core-concepts/gas-and-fees/gas-and-fee'
                ]
            },
            {
                title: 'TRANSACTIONS',
                collapsable: false,
                children: [
                    'dev/core-concepts/transactions/transactions'
                ],
            },
            {
                title: 'ACCOUNTS',
                collapsable: false,
                children: [
                    'dev/core-concepts/accounts/accounts'
                ],
            },
        ]
    },
    {
        title: 'Nodes',
        children: [
            {
                title: 'OKB CHAIN NODES',
                collapsable: false,
                children: [
                    'dev/nodes/okbchain-nodes/node-overview',
                    'dev/nodes/okbchain-nodes/hardware-requirement',
                ]
            },
            {
                title: 'RPC NODE',
                collapsable: false,
                children: [
                    'dev/nodes/rpc-node/add-network-endpoints',
                    'dev/nodes/rpc-node/node-data-snapshots',
                    'dev/nodes/rpc-node/run-a-testnet-node',
                    'dev/nodes/rpc-node/upgrade-your-node'
                ]
            },
            {
                title: 'TROUBLESHOOTING',
                collapsable: false,
                children: [
                    'dev/nodes/troubleshooting/install-faq',
                ]
            },
            {
                title: 'NODE CLIENT',
                collapsable: false,
                children: [
                    'dev/nodes/node-client/okbchain-client',
                    'dev/nodes/node-client/service-providers',
                    'dev/nodes/node-client/supervision-tool',

                ]
            },
        ]
    },
    {
        title: 'Building Modules',
        children: [
            {
                title: 'IBC MODULE',
                collapsable: false,
                children: [
                    'dev/building-modules/ibc-module/ibc-overview',
                    'dev/building-modules/ibc-module/okbc-ibc-cli-guide'
                ]
            },
            {
                title: 'WASM MODULE',
                collapsable: false,
                children: [
                    'dev/building-modules/wasm-module/wasm-overview',
                    'dev/building-modules/wasm-module/okbc-wasm-instruction-manual',
                    'dev/building-modules/wasm-module/vmbridge',
                    'dev/building-modules/wasm-module/cosmwasmjs',
                    'dev/building-modules/wasm-module/wasmknife'
                ]
            },
        ]
    },
    {
        title: 'API',
        children: [
            {
                title: 'OKBC API',
                collapsable: false,
                children: [
                    'dev/api/okbc-api/rest-api',
                    'dev/api/okbc-api/json-rpc-api',
                    'dev/api/okbc-api/websocket-api'
                ]
            },
        ]
    },
    {
        title: 'SDK',
        children: [
            {
                title: 'SDK MODULES',
                collapsable: false,
                children: [
                    'dev/sdk/sdk-modules/go-sdk',
                    'dev/sdk/sdk-modules/java-sdk',
                    'dev/sdk/sdk-modules/js-sdk'
                ]
            }
        ]

    },
    {
        title: 'Smart Contract',
        children: [
            {
                title: 'DEPLOYMENT',
                collapsable: false,
                children: [
                    'dev/smart-contracts/deployment/deployment-with-remix',
                    'dev/smart-contracts/deployment/deployment-with-truffle',
                    'dev/smart-contracts/deployment/deployment-with-hardhat'
                ]
            },
            {
                title: 'CONTRACT VERIFICATION',
                collapsable: false,
                children: [
                    'dev/smart-contracts/contract-verification/verify-contract',
                    'dev/smart-contracts/contract-verification/verify-proxy-contract'
                ]
            },
        ]
    },
    {
        title: 'Resources',
        children: [
            {
                title: 'REFERENCES',
                collapsable: false,
                children: [
                    'dev/resources/references/okbchain-quick-access',
                ]
            }
        ]
    }
];
