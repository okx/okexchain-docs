# Introduction to OKB Chain (OKBC)
## Introduction to OKB Chain
OKB Chain (OKBC) is a Cosmos-based Ethereum sidechain that offers secured and user-friendly blockchain experience to all users. OKBC is a scaling solution that supports Cosmos and EVM compatible smart contracts and protocols, and offers fast-finality from Tendermint Core BFT consensus. 
## Key features & highlights
-  **Highly Scalable, Low Fees**  
100% EVM and Cosmos compatibility at a fraction of a cost, easy developer APIs for deployment
-  **Empowered by OKX** 
Seamless OKX product integrations, all-in-one web3 gateway, and access to 50 million users and $8B+ assets in OKX ecosystem
-  **Security** 
Offers a reliable smart contract auditing service to further the vision of building a trustless ecosystem
- **Portal to Web3**
Enter the world of Web3 via OKX Wallet, build with compact infrastructure modules to create innovative DApps
## Proof of Authority
PoA was proposed by Ethereum co-founder and former CTO Gavin Wood in 2017. Validators don’t stake coins.    
Instead, they must put their reputations on the line for the right to validate blocks. This is very different from the majority of blockchain protocols which usually do not require you to reveal your identity to take part.  
OKBC uses Proof of Authority (PoA) as its consensus mechanism for validating transactions and blocks through approved validators, that guarantee security, stability, and chain finality, and executes more transactions per second while requiring fewer computational resources.  
PoA provides a defense against 51% attacks and has improved efficiency and tolerance to certain levels of Byzantine players. Therefore, it is a strong choice for the fundamentals. Non-consecutive block approval by any validator is allowed under PoA, and the authority node carries the risk of serious damage. This incentivizes selected validators to uphold the transaction process to maintain a positive reputation. 
The consensus protocol of OKBC achieves the following goals:  
1. Short blocking time of 3 seconds on mainnet
2. Limited time for transaction finality confirmation of approximately 3 seconds
3. No inflation native token: OKB has a total supply of 300 million tokens, and the block reward is collected from transaction fees only
4. 100% compatible with Ethereum system
## Building on OKB Chain
If you are an Ethereum developer, you are already a OKBC developer. Simply switch to [Install OKBC](/dev/quick-start/build-on-okbc/install-okbc.html) and get started. All the tools you are familiar with on the Ethereum blockchain are supported on OKBC by default, such as Truffle and Remix.
You can deploy decentralized applications to either OKB Chain Testnet or the Mainnet. The OKB Chain Testnet connects with the Ethereum Goërli Testnet, which acts as its ParentChain. You can find all the network-related details in the [network documentation](https://github.com/maticnetwork/matic-docs/blob/master/docs/operate/network.md).
### Wallets
To interact with the OKB Chain, you need to have an Ethereum-based wallet because OKBC runs on Ethereum Virtual Machine (EVM). You can also access OKBC on Cosmos as well.
You can choose to setup OKX Wallet (recommended) or MetaMask Wallet for EVM usage, and Keplr Wallet for Cosmos ecosystem usage.
More wallet-related information and why you need one can be found in our [wallet guide](/dev/quick-start/wallet/getting-started/overview.html)
### Smart Contracts
OKB Chain supports various services you can utilise to test, compile, debug, and deploy decentralized applications. These include deployment using [Remix](https://github.com/maticnetwork/matic-docs/blob/master/docs/develop/remix.md) and [Truffle](https://github.com/maticnetwork/matic-docs/blob/master/docs/develop/truffle.md).
### Connecting to OKB Chain
You can add OKB Chain to MetaMask or directly use ethers.js, which allows you to connect to OKB Chain using [RPC](/dev/nodes/rpc-node/add-network-endpoints.html). In order to connect with the OKB Chain to read blockchain information, you can start with the following commands:
```
import { ethers } from "ethers";

//The RPC of OKBC
const OKBC_RPC = '';

const provider = new ethers.providers.JsonRpcProvider(OKBC_RPC);

async function main() {
  const latestBlock = await provider.getBlockNumber();
  console.log("The latest block number is", latestBlock);
}

main();
```
### Building a new DApp on OKB Chain?
It is essential to maintain user data privacy on blockchain and connecting users. With more and more Decentralized applications (DApps) being developed, they are proving to be a valuable asset in the blockchain ecosystem, as they solve problems like enabling two participants to execute transactions without requiring central authority, thanks to smart contracts.
If you're new to building DApps, the resources below will help you get started with the necessary tools for building, debugging, and deploying DApps on the OKB Chain.
- [Full Stack dApp: Tutorial Series](https://kauri.io/full-stack-dapp-tutorial-series/5b8e401ee727370001c942e3/c)
- [Web3.js](https://www.dappuniversity.com/articles/web3-js-intro)
- [Ethers.js](https://docs.ethers.io/v5/)
- [Remix](/dev/smart-contracts/deployment/deploy-with-remix.html)
- [Truffle](/dev/smart-contracts/deployment/deploy-with-truffle.html)
- [Metamask](/dev/quick-start/wallet/third-party/metamask.md.html)
### Already have a DApp?
If you're searching for a way to scale your existing DApp effectively, you are in luck because OKB Chain has got you covered. Here are some benefits of using OKB Chain:
- **Easy migration from Ethereum Virtual Machine (EVM)
 based chain**: As the ultimate Layer-2 scaling solution for Ethereum, OKB Chain makes it simple to move or deploy your DApps to the OKB Chain as long as it's EVM-compatible. You won't have to worry about the underlying architecture.
- **Faster transaction layer**: By deploying your DApp to the OKB Chain Mainnet, you can use OKB Chain as a faster transaction layer, enhancing your DApp's speed. Additionally, we can map your tokens. Join our technical discussions group on Telegram to learn more.
## Economy Model
### OKB burning mechnism
OKB has a total supply of 300 million.
On May 4, 2019, OKX initiated the OKB Buy-Back & Burn program where 30% of the spot market transaction fees are used to buy back OKB. Check the [OKB Buy-Back & Burn program](https://www.okx.com/support/hc/en-us/sections/360004542951-OKB-Buy-back-Burn) report to learn more.
As the Mainnet launches, burn OKB (ERC20) and release OKB on OKBC as native token will be carried out. For detailed timeline, process and operation, an announcement will be before Mainnet launches.
### OKB reward mechanism
On OKB Chain, PoA is the consensus mechanism that determines transaction finality through validators instead of miners. This eliminates any rewards or penalties for honest or dishonest behavior, leaving little room for manipulation by either miners or validators.
Validators receive transaction fees from every transaction on the chain as the reward of processing transactions in blocks.
## OKB Token
OKB is cryptocurrency that powers the OKB Chain ecosystem. You can trade OKB like any other cryptocurrency, and you also use OKB in a wide range of applications and uses cases.
Initially OKB is an ERC-20 token on Ethereum network, it can be bridged to OKB Chain at 1:1 ratio. The OKB is also the native coin of the OKB Chain.
### How to Buy OKB Tokens
In order to interact with the OKB Chain network, you will need to have some OKB tokens in your wallet to pay for all fees on OKB Chain.
- OKB tokens can be received through Testnet Faucet for usage on testnet
- Buy OKB from OKX, and transfer via OKB Chain to your wallets
## Roadmap
OKBC sets its goal to provide up-to-date infrastructure to support mass adoption of web3 applications and explore unforeseen innovations in blockchain development. Let's start with the fundamentals and take little but solid steps ahead to building OKBC together!
#### OKB Chain 1.0
- Ethereum sidechain
- Testnet in 2023 Q1

#### ZK Dex 1.0
A decentralized exchange based on ZK-rollup 
- StarkEx Technology
- On Ethereum
- Mainnet in 2023 Q2

#### OKB Chain 2.0
- ZK-rollup network on Ethereum
- Web2 developer-friendly tool kits:
  - Account abstraction
  - Web3 identity (DID)
- Testnet in 2023 Q4

#### ZK Dex 2.0
A decentralized exchange based on ZK-rollup 
- Full-fledged derivatives
- Special ZK-circuit
- Mainnet in 2023 Q2

It is just the beginning and OKB Chain is not stopping here. More details on roadmap will be announced soon!