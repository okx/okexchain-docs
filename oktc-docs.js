/*
 * @Author: xiaojun.liu
 * @Date: 2022-11-11 16:32:30
 * @LastEditTime: 2023-02-13 17:35:11
 * @Description:
 */

module.exports = [
  {
    title: "Quick Start",
    children: [
      {
        title: "INTRODUCTION",
        collapsable: false,
        children: [
          "dev/quick-start/overview",
          "dev/quick-start/install-oktc",
          "dev/quick-start/deploy-you-own-oktc-testnet",
          "dev/quick-start/join-oktc-testnet",
          "dev/quick-start/join-oktc-mainnet",
        ],
      },
      {
        title: "WALLET",
        collapsable: false,
        children: [
          "dev/quick-start/wallet/metamask/quick-start",
          "dev/quick-start/wallet/OKX-wallet",
        ],
      },
    ],
  },
  {
    title: "Core Concepts",
    children: [
      {
        title: "BASIC CONCEPTS",
        collapsable: false,
        children: ["dev/core-concepts/basic-concepts/general-concepts"],
      },
      {
        title: "GOVERNANCE",
        collapsable: false,
        children: [
          // 'dev/core-concepts/on-chain-governance/overview',
          "dev/core-concepts/on-chain-governance/gov",
          // 'dev/core-concepts/on-chain-governance/parameter',
          // 'dev/core-concepts/on-chain-governance/text',
          // 'dev/core-concepts/on-chain-governance/upgrade'
        ],
      },
      {
        title: "GAS & FEES",
        collapsable: false,
        children: ["dev/core-concepts/gas-and-fees/gas"],
      },
      {
        title: "TRANSACTIONS",
        collapsable: false,
        children: ["dev/core-concepts/transactions/transactions"],
      },
      {
        title: "ACCOUNTS",
        collapsable: false,
        children: ["dev/core-concepts/accounts/accounts"],
      },
      {
        title: "OKTC CONSENSUS",
        collapsable: false,
        children: ["dev/core-concepts/oktc-consensus/oktc-consensus"],
      },
      {
        title: "STAKING REWARDS ALGORITHM",
        collapsable: false,
        children: [
          "dev/core-concepts/staking-rewards-algorithm/distr",
          "dev/core-concepts/staking-rewards-algorithm/delegators-staking-cli",
          "dev/core-concepts/staking-rewards-algorithm/sending-stakingtx-using-evmtx",
        ],
      },
      {
        title: "VALIDATOR",
        collapsable: false,
        children: [
          "dev/core-concepts/validator/validators-overview",
          "dev/core-concepts/validator/validators-guide-cli",
          "dev/core-concepts/validator/validators-faq",
        ],
      },
      {
        title: "DELEGATOR",
        collapsable: false,
        children: [
          "dev/core-concepts/delegator/delegators-overview",
          "dev/core-concepts/delegator/delegators-guide-cli",
          "dev/core-concepts/delegator/delegators-faq",
        ],
      },
    ],
  },
  {
    title: "Nodes",
    children: [
      {
        title: "TECHNICAL REQUIREMENT",
        collapsable: false,
        children: [
          "dev/nodes/node-requirement/node-requirement",
          "dev/nodes/node-requirement/upgrade-node",
          "dev/nodes/node-requirement/install-faq",
        ],
      },
      {
        title: "OPERATION",
        collapsable: false,
        children: [
          "dev/nodes/operation/how-to-start-mainnet-node",
          "dev/nodes/operation/how-to-join-the-public-testnet",
        ],
      },
      {
        title: "NODE CLIENT",
        collapsable: false,
        children: [
          "dev/nodes/node-client/exchaincli",
          "dev/nodes/node-client/service-providers",
          "dev/nodes/node-client/monitor",
        ],
      },
    ],
  },
  {
    title: "Building Modules",
    children: [
      {
        title: "IBC MODULE",
        collapsable: false,
        children: [
          "dev/building-modules/ibc-module/ibc",
          "dev/building-modules/ibc-module/ibc-cli",
        ],
      },
      {
        title: "WASM MODULE",
        collapsable: false,
        children: [
          "dev/building-modules/wasm-module/overview",
          "dev/building-modules/wasm-module/instruction-manual",
          "dev/building-modules/wasm-module/vmbridge",
          "dev/building-modules/wasm-module/cosmwasmjs",
          "dev/building-modules/wasm-module/wasmknife",
        ],
      },
      {
        title: "GAS BACK MODULE",
        collapsable: false,
        children: [
          "dev/building-modules/gas-back-module/developer-dividend-project",
          "dev/building-modules/gas-back-module/developer-dividend-project-operation-guide",
        ],
      },
    ],
  },
  {
    title: "API",
    children: [
      {
        title: "OKTC API",
        collapsable: false,
        children: [
          "dev/api/oktc-api/http",
          "dev/api/oktc-api/json-rpc-api",
          "dev/api/oktc-api/websocket",
        ],
      },
      {
        title: "OKTC SWAP API",
        collapsable: false,
        children: [
          "dev/api/oktc-swap-api/api-overview",
          "dev/api/oktc-swap-api/entities",
          "dev/api/oktc-swap-api/queries",
        ],
      },
      {
        title: "OKTC SWAP CONTRACT",
        collapsable: false,
        children: [
          "dev/api/oktc-swap-contract/overview",
          "dev/api/oktc-swap-contract/factory",
          "dev/api/oktc-swap-contract/router",
        ],
      },
      {
        title: "OKTC ORACLE API",
        collapsable: false,
        children: ["dev/api/oktc-oracle-api/oracle"],
      },
    ],
  },
  {
    title: "SDK",
    children: [
      {
        title: "SDK MODULES",
        collapsable: false,
        children: ["dev/sdk/go-sdk", "dev/sdk/java-sdk", "dev/sdk/js-sdk"],
      },
    ],
  },
  {
    title: "Smart Contract",
    children: [
      {
        title: "DEPLOYMENT",
        collapsable: false,
        children: [
          "dev/smart-contracts/deployment/remix",
          "dev/smart-contracts/deployment/truffle",
        ],
      },
      {
        title: "CONTRACT VERIFICATION",
        collapsable: false,
        children: [
          "dev/smart-contracts/verify-contract/verify-contract",
          "dev/smart-contracts/verify-proxy-contract/verify-proxy-contract",
        ],
      },
      {
        title: "KIP STANDARD",
        collapsable: false,
        children: ["dev/smart-contracts/kip-standard/KIP20/introduction"],
      },
      {
        title: "CONTRACT DEVELOPMENT FAQ ",
        collapsable: false,
        children: [
          "dev/smart-contracts/contract-development-faq/Contract-Development-FAQ",
        ],
      },
    ],
  },
  {
    title: "Developer Services",
    children: [
      {
        title: "GAS BACK",
        collapsable: false,
        children: [
          "dev/developer-services/gas-back/how-to-get-gas-back-on-oktc",
        ],
      },
    ],
  },
  {
    title: "OKTC Solutions",
    children: [
      {
        title: "OKTC LIQUID STAKING",
        collapsable: false,
        children: ["dev/oktc-solutions/oktc-liquid-staking/liquid-staking"],
      },
      {
        title: "OKTC SWAP",
        collapsable: false,
        children: ["dev/oktc-solutions/oktc-swap/OKTC-swap"],
      },
      {
        title: "OKTC BRIDGE",
        collapsable: false,
        children: ["dev/oktc-solutions/oktc-bridge/OKTC-Bridge"],
      },
      {
        title: "OKTC MULTISIG",
        collapsable: false,
        children: ["dev/oktc-solutions/oktc-multisig/OKTC-Multisig"],
      },
      {
        title: "OKTC VRF",
        collapsable: false,
        children: [
          {
            title: "Introduction to OKTC VRF",
            collapsable: false,
            children: [
              "dev/oktc-solutions/oktc-vrf/Introduction-to-OKTC-VRF/OKTC-VRF",
            ],
          },
          {
            title: "Subscription Method",
            collapsable: false,
            children: [
              "dev/oktc-solutions/oktc-vrf/Subscription-Method/SubScription",
              "dev/oktc-solutions/oktc-vrf/Subscription-Method/Get-a-Random-Number/Get-a-Random-Number",
              "dev/oktc-solutions/oktc-vrf/Subscription-Method/Subscription-Manager-UI/Subscription-Manager-UI",
              "dev/oktc-solutions/oktc-vrf/Subscription-Method/Supported-Networks/Supported-Networks",
            ],
          },
          {
            title: "Direct Funding Method",
            collapsable: false,
            children: [
              "dev/oktc-solutions/oktc-vrf/Direct-Funding-Method/Direct-Funding-Method",
              "dev/oktc-solutions/oktc-vrf/Direct-Funding-Method/Get-a-Random-Number/Get-a-Random-Number",
              "dev/oktc-solutions/oktc-vrf/Direct-Funding-Method/Supproted-Networks/Supproted-Networks",
            ],
          },
          {
            title: "Security Considerations",
            collapsable: false,
            children: [
              "dev/oktc-solutions/oktc-vrf/Security-Considerations/Security-Considerations",
            ],
          },
          {
            title: "Best Practices",
            collapsable: false,
            children: [
              "dev/oktc-solutions/oktc-vrf/Best-Practices/Best-Practices",
            ],
          },
        ],
      },
    ],
  },
  {
    title: "Resources",
    children: [
      {
        title: "REFERENCES",
        collapsable: false,
        children: [
          "dev/resources/genesis-file/genesis",
          "dev/resources/official-kip20-tokens/kip20",
          "dev/resources/oktc-snapshot/snapshot",
          "dev/resources/useful-references/evm-integration-guide",
          "dev/resources/useful-references/link",
        ],
      },
    ],
  },
];
