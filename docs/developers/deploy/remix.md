# Remix
### Using Remix

Deploys a OIP20 smart contract with a message, and renders it in the front-end. You can interact with the smart contract easily!
This dapp implements a "Hello World" style application that echoes a message passed to the contract to the front end. This tutorial is intended to be followed using the online IDE available at [Remix IDE](https://remix.ethereum.org/).
### Setting up [Remix IDE](https://remix.ethereum.org/)
- Remix is an online IDE to develop smart contracts.
- You need to choose Solidity Compiler and Deploy and Run Transactions.

![avatar](../../img/remix-01.png)
- Go to File Explorers, And Create a new file, Name it MegaCoin.sol
- Copy/Paste the Smart contract below into the newly created file MegaCoin.sol

### The smart contract
- Create new contract OIP20Tokens.sol and copy contract code from the oip20 token template [here](https://github.com/okex/OIPs/blob/master/docs/final/OIP-20.md/)
- Modify “name”, “symbol”, “decimals” and “totalSupply” according to your requirements.
![avatar](../../img/remix-02.png)

The first line, `pragma solidity ^0.5.16` specifies that the source code is for a Solidity version greater than 0.5.16. [Pragmas](https://solidity.readthedocs.io/en/latest/layout-of-source-files.html#pragma) are common instructions for compilers about how to treat the source code (e.g., pragma once).

A contract in the sense of Solidity is a collection of code (its functions) and data (its state) that resides at a specific address on the Ethereum blockchain. Learn more about the [constructor](https://solidity.readthedocs.io/en/latest/contracts.html#constructor) and [memory](https://solidity.readthedocs.io/en/latest/introduction-to-smart-contracts.html#storage-memory-and-the-stack) in the docs.

### Compile Smart Contract
- Step1: Click button to switch to compile page
- Step2: Select “OIP20Tokens” contract
- Step3: Check “Auto compile” and “Enable optimization” checkboxes
- Step4: Click “ABI” to copy the contract abi and save it.
![avatar](../../img/remix-03.png)

Now, We have to deploy our smart contract on OKExChain Network. For that, we have to connect to web3 world, this can be done my many services like Metamask, Brave, Portis etc. We will be using Metamask. Please follow this [tutorial to setup a Metamask Account]().
- Open Metamask and select Custom RPC from the networks dropdown
- Go to setting page
![avatar](../../img/remix-04.png)

- Add a new network
![avatar](../../img/remix-05.png)
- Testnet * [RPC URLs](https://okexchain-docs.readthedocs.io/en/add-evm-doc/developers/blockchainDetail/rpc.html) * ChainID: okexchain-65 * Symbol: OKT * Block Explorer:
https://www.oklink.com/okexchain-test
- Mainnet * [RPC URLs](https://okexchain-docs.readthedocs.io/en/add-evm-doc/developers/blockchainDetail/rpc.html) * ChainID: okexchain-66 * Symbol: OKT * Block Explorer: 
https://www.oklink.com/
- Go ahead and click save
- Copy your address from Metamask
- Head over to [Faucet](https://www.okex.com/drawdex) and request test OKT
- Now, let's Deploy the Smart Contract on okexchain Testnet
- Select Injected Web3 in the Environment dropdown and your contract
![avatar](../../img/remix-06.png)
- Accept the Connection Request!
![avatar](../../img/remix-07.png)
- Once Metamask is connected to Remix, the ‘Deploy’ transaction would generate another metamask popup that requires transaction confirmation.
![avatar](../../img/remix-08.png)
Congratulations! You have successfully deployed a OIP20 Contract. Now you can interact with the Smart Contract. Check the deployment status here: https://www.oklink.com/okexchain-test


### Remix FAQ
#### Check “Enable optimization” to compile large size contracts
If contract creation initialization returns data with length of more than 24576 bytes, contract will be fail to created with "Contract code size over limit" error due to [EIP-170](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-170.md).
![avatar](../../img/remix-09.png)
Check the "Enable optimization" checkbox when compiling to solve this error of some large size contracts.
![avatar](../../img/remix-10.png)
