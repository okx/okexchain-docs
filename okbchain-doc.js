/*
 * @Author: Karen.Wong
 * @Date: 2023-06-08 16:00:19
 * @LastEditTime: 2023-06-08 16:00:19
 * @Description:
 */

module.exports = [
    {
        title: 'Build',
        basePath: ['dev/build-dapps'],
        children: [
            {
                title: 'Build on OKBC',
                path: ['dev/build-dapps/build-on-okbc'],                
                children: [
                    'dev/build-dapps/build-on-okbc/welcome/introduction-to-okbc',
                    {
                        title: 'Get Started',
                        path: ['dev/build-dapps/build-on-okbc/get-started'],
                        descriptionList: ['Install the okbchaind and okbchaincli entrypoints', 'Guide to setup a network of OKBC nodes', 'Set up and start a new OKBC node', 'RPC network setup and details'],
                        children: [
                            'dev/build-dapps/build-on-okbc/get-started/install-okbc',
                            'dev/build-dapps/build-on-okbc/get-started/deploy-your-okbc-localnet',
                            'dev/build-dapps/build-on-okbc/get-started/join-public-testnet',
                            'dev/build-dapps/build-on-okbc/welcome/rpc-network'
                        ]
                    },
                    {
                        title: 'Wallet',
                        path: ['dev/build-dapps/build-on-okbc/wallet'],
                        descriptionList: ['Introduction to wallets', 'Using MetaMask on OKBC', 'Using OKX Web3 Wallet on OKBC'],
                        children: [
                            'dev/build-dapps/build-on-okbc/wallet/get-started',
                            {
                            title: 'Metamask',
                            path: ['dev/build-dapps/build-on-okbc/wallet/metamask'],
                            descriptionList: ['Introduction to MetaMask', 'How to add OKBC network to MetaMask', 'How to configure custom tokens on MetaMask', 'How to create and import accounts on MetaMask', 'How to set up MetaMask using global API'],
                            chidren: [
                                'dev/build-dapps/build-on-okbc/wallet/metamask/overview',
                                'dev/build-dapps/build-on-okbc/wallet/metamask/add-okbc-to-metamask',
                                'dev/build-dapps/build-on-okbc/wallet/metamask/configure-custom-tokens',
                                'dev/build-dapps/build-on-okbc/wallet/metamask/create-and-import-accounts',
                                'dev/build-dapps/build-on-okbc/wallet/metamask/set-up-metamask-for-okbc'
                            ]
                        },
                        {
                            title: 'OKX Web3 Wallet',
                            path: ['dev/build-dapps/build-on-okbc/wallet/okx-web3-wallet'],
                            descriptionList: ['Guide to use OKX Web3 Wallet'],
                            chidren: [
                                'dev/build-dapps/build-on-okbc/wallet/okx-web3-wallet/web3-wallet-101'
                            ]
                        }
                        ]
                    },
                    {   
                        title: 'Smart Contracts',
                        path: ['dev/build-dapps/build-on-okbc/smart-contracts'],
                        descriptionList: ['Deploy smart contracts on OKBC', 'Verify smart contracts on OKBC'],
                        children: [
                            {
                            title: 'Deploy Contracts',
                            path: ['dev/build-dapps/build-on-okbc/smart-contracts/deploy-contracts'],
                            descriptionList: ['Deploy contract using Remix','Deploy contract using Truffle', 'Deploy contract using Hardhat'],
                            children: [
                                'dev/build-dapps/build-on-okbc/smart-contracts/deploy-contracts/using-remix',
                                'dev/build-dapps/build-on-okbc/smart-contracts/deploy-contracts/using-truffle',
                                'dev/build-dapps/build-on-okbc/smart-contracts/deploy-contracts/using-hardhat',
                            ]
                        },
                        {
                            title: 'Verify Contracts',
                            children: [
                            'dev/build-dapps/build-on-okbc/smart-contracts/verify-contracts'
                            ]
                            }
                        ]
                    },
                        {
                        title: 'Assets',
                        path: ['dev/build-dapps/build-on-okbc/assets'],
                        descriptionList: ['A standard interface for OIP-20', 'A standard interface for OIP-721', 'A standard interface for OIP-1155', 'A standard interface for OIP-165'],
                        children: [
                            'dev/build-dapps/build-on-okbc/assets/oip20',
                            'dev/build-dapps/build-on-okbc/assets/oip721',
                            'dev/build-dapps/build-on-okbc/assets/oip1155',
                            'dev/build-dapps/build-on-okbc/assets/oip165',
                        ]
                    },
                    {
                        title: 'Bridge',
                        path: ['dev/build-dapps/build-on-okbc/bridge'],
                        descriptionList: ['Essential IBC operation knowledge and operation guides'],
                        children: [
                            {
                            title: 'IBC',
                            path: ['dev/build-dapps/build-on-okbc/bridge/ibc'],
                            descriptionList: ['Introduction to IBC', 'Set up cross-chain operation with IBC CLI'],
                            children: [
                            'dev/build-dapps/build-on-okbc/bridge/ibc-overview',
                            'dev/build-dapps/build-on-okbc/bridge/okbc-ibc-cli-guide',
                            ]
                        }
                        ]
                    },
                    {
                        title: 'Resources',
                        path: ['dev/build-dapps/build-on-okbc/resources'],
                        descriptionList: ['Useful links for OKBC resources'],
                        children: [
                            'dev/build-dapps/build-on-okbc/resouces/okbchain-quick-access',
                        ]   
                    }
                ]
            },
            {
                title: 'Build with Wasm',
                path: ['dev/build-dapps/build-with-wasm'],
                children: [
                    {
                        title: 'Get Started',
                        path: ['dev/build-dapps/build-with-wasm/get-started'],
                        descriptionList: ['Introduction to Wasm architecture and smart contracts', 'Guide to deploy Wasm smart contracts'],
                        children: [
                            'dev/build-dapps/build-with-wasm/get-started/wasm-overview',
                            'dev/build-dapps/build-with-wasm/get-started/okbc-wasm-instruction-manual'
                        ]
                    },
                    {
                        title: 'Developer Guides',
                        path: ['dev/build-dapps/build-with-wasm/developer-guides'],
                        descriptionList: ['Exchange of ERC20 tokens and  CW20 tokens', 'Guide to use CosmWasmJS to interact with smart contracts', 'Guide to deploy smart contracts with ByteCraft'],
                        children: [
                            'dev/build-dapps/build-with-wasm/developer-guides/vmbridge',
                            'dev/build-dapps/build-with-wasm/developer-guides/connect-to-okbc-with-cosmwasmjs',
                            'dev/build-dapps/build-with-wasm/developer-guides/deploy-with-bytecraft'
                        ]
                    }
                ]
            },
            {
                title: 'OKBC SDK',
                path: ['dev/build-dapps/okbc-sdk'],
                children: [
                        'dev/build-dapps/okbc-sdk/get-started',
                        {
                        title: 'SDK Modules',
                        path: ['dev/build-dapps/okbc-sdk/SDK-modules'],
                        descriptionList: ['Guide to use Go SDK', 'Guide to use Java SDK', 'Guide to use JavaScript SDK'],
                        children: [
                            {
                            title: 'Go SDK',
                            path: ['dev/build-dapps/okbc-sdk/SDK-modules/go-sdk'],
                            descriptionList: ['Initiate Client with Go SDK', 'Use Utils functions', 'Use Auth functions', 'Use Token functions', 'Use Staking functions', 'Use Distribution functions', 'Use Slashing functions', 'Use Backend functions', 'Use Government functions', 'Use Tendermint functions'],
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
                            ]
                        },
                        {
                            title: 'Java SDK',
                            path: ['dev/build-dapps/okbc-sdk/SDK-modules/java-sdk'],
                            descriptionList: ['Package utils methods', 'Package crypto methods', 'Package msg methods'],
                            children: [
                                'dev/build-dapps/okbc-sdk/apis/java-sdk/package-utils',
                                'dev/build-dapps/okbc-sdk/apis/java-sdk/package-crypto',
                                'dev/build-dapps/okbc-sdk/apis/java-sdk/package-msg'
                            ]
                        },
                        {
                            title: 'JavaScript SDK',
                            path: ['dev/build-dapps/okbc-sdk/SDK-modules/javascript-sdk'],
                            descriptionList: ['Initiate Client with JavaScript SDK', 'PClient API functions', 'Crypto API functions'],
                            children: [
                                'dev/build-dapps/okbc-sdk/apis/javascript-sdk/client-setup',
                                'dev/build-dapps/okbc-sdk/apis/javascript-sdk/client-apis',
                                'dev/build-dapps/okbc-sdk/apis/javascript-sdk/crypto'
                            ]
                        }
                        ]
                    }
                ]
            },
            {
                title: 'OKBC API',
                path: ['dev/build-dapps/okbc-api'],
                children: [
                    'dev/build-dapps/okbc-sdk/api-architecture',
                    {
                        title: 'REST API',
                        path: ['dev/build-dapps/okbc-api/rest-api'],
                        descriptionList: ['REST API overview', 'REST API references'],
                        children: [
                            'dev/build-dapps/okbc-api/rest-api/overview',
                            {
                            title: 'API References',
                            path: ['dev/build-dapps/okbc-api/rest-api/api-references'],
                            descriptionList: ['Use Account functions', 'Use Blocks functions', 'Use Staking functions', 'Use Distribution functions', 'Use Wasm functions', 'Use Gov functions'],
                            children: [
                                'dev/build-dapps/okbc-api/rest-api/api-references/account',
                                'dev/build-dapps/okbc-api/rest-api/api-references/blocks',
                                'dev/build-dapps/okbc-api/rest-api/api-references/staking',
                                'dev/build-dapps/okbc-api/rest-api/api-references/distribution',
                                'dev/build-dapps/okbc-api/rest-api/api-references/wasm',
                                'dev/build-dapps/okbc-api/rest-api/api-references/gov'
                            ]
                        }
                        ]
                    },
                    {
                        title: 'JSON-RPC API',
                        path: ['dev/build-dapps/okbc-api/json-rpc-api'],
                        descriptionList: ['JSON-RPC API overview', 'JSON-RPC API references'],
                        children: [
                            'dev/build-dapps/okbc-api/json-rpc-api/overview',
                            {
                            title: 'API References',
                            path: ['dev/build-dapps/okbc-api/json-rpc-api/api-references'],
                            descriptionList: ['Use Web3 functions', 'Use Net functions', 'Use Staking functions', 'Use Websocket functions', 'Use Personal functions'],
                            children: [
                                'dev/build-dapps/okbc-api/json-rpc-api/api-references/web3',
                                'dev/build-dapps/okbc-api/json-rpc-api/api-references/net',
                                'dev/build-dapps/okbc-api/json-rpc-api/api-references/eth',
                                'dev/build-dapps/okbc-api/json-rpc-api/api-references/websocket',
                                'dev/build-dapps/okbc-api/json-rpc-api/api-references/personal'
                            ]
                        }
                        ]
                    },
                    {
                        title: 'Websocket API',
                        path: ['dev/build-dapps/okbc-api/websocket-api'],
                        descriptionList: ['Websocket API overview', 'Websocket API references'],
                        children: [
                            'dev/build-dapps/okbc-api/websocket-api/overview',
                            {
                            title: 'API References',
                            path: ['dev/build-dapps/okbc-api/websocket-api/api-references'],
                            descriptionList: ['Use Create Subscription with RPC call', 'Use Cancel Subscription with RPC call', 'Use Supported Subscription functions'],
                            children: [
                                'dev/build-dapps/okbc-api/websocket-api/api-references/create-subscription',
                                'dev/build-dapps/okbc-api/websocket-api/api-references/cancel-subscription',
                                'dev/build-dapps/okbc-api/websocket-api/api-references/supported-subscriptions'
                            ]
                        }
                        ]
                    }
                ]
                }
            ]
        },
        {
        title: 'Maintain',
        children: [
            {
                title: 'Run a Node',
                path: ['dev/maintain/run-a-node'],
                children: [
                    {
                        title: 'Node Overview',
                        path: ['dev/maintain/run-a-node/node-client'],
                        descriptionList: ['Introduction to OKBC Nodes', 'OKBC nodes hardware requirement'],
                        children: [
                            'dev/maintain/run-a-node/node-overview/types-of-nodes',
                            'dev/maintain/run-a-node/node-overview/hardware-requirement',
                        ]
                    },
                    {
                        title: 'RPC Node',
                        path: ['dev/maintain/run-a-node/rpc-node'],
                        descriptionList: ['Guides to add network endpoints', 'Sync with OKBC using node data snapshots','Sync with testnet node', 'Guide to upgrade okbchaind full node'],
                        children: [
                            'dev/maintain/run-a-node/rpc-node/add-network-endpoints',
                            'dev/maintain/run-a-node/rpc-node/node-data-snapshot',
                            'dev/maintain/run-a-node/rpc-node/run-a-testnet-node',
                            'dev/maintain/run-a-node/rpc-node/upgrade-your-node',
                        ]
                    },
                    {
                        title: 'Node Client',
                        path: ['dev/maintain/run-a-node/node-client'],
                        descriptionList: ['Interact with OKBC network nodes', ,'Introduction to service providers to OKBC', 'Guide to use supervision tool'],
                        children: [
                            'dev/maintain/run-a-node/node-client/okb-chain-client',
                            'dev/maintain/run-a-node/node-client/service-providers',
                            'dev/maintain/run-a-node/node-client/supervision-tool',
                        ]
                    },
                    {
                        title: 'FAQs',
                        path: ['dev/maintain/run-a-node/faq'],
                        children: [
                        'dev/maintain/run-a-node/faq'
                        ]
                    }
                ]
           }
        ]
    },
    {
        title: 'Protocols',
        children: [
            {
                title: 'OKBC Network',
                path: ['dev/protocols/okbc-network'],
                children: [
                    {
                        title: 'Core Concepts',
                        path: ['dev/protocols/okbc-network/core-concepts'],
                        descriptionList: ['Introduction to OKBC consensus architecture', 'In-built OKBC account systems', 'Differences between Gas and Fees in Ethereum and OKBC', 'Introduction to routing, transaction formats, and signatures'],
                        children: [
                            'dev/protocols/okbc-network/core-concepts/consensus-overview',
                            'dev/protocols/okbc-network/core-concepts/accounts',
                            'dev/protocols/okbc-network/core-concepts/gas-and-fees',
                            'dev/protocols/okbc-network/core-concepts/transactions',
                        ]
                    }
                ]            
            }
        ]
    }
]
