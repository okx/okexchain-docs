# Deploy with remix
### Using remix

Deploys a KIP20 smart contract with a message, and renders it in the front-end. You can interact with the smart contract easily!
This DApp implements a "Hello World" style application that echoes a message passed to the contract to the front end. This tutorial is intended to be followed using the online IDE available at [remix IDE](https://remix.ethereum.org/).
### Setting up [remix IDE](https://remix.ethereum.org/)
- remix is an online IDE to develop smart contracts.
- You need to choose Solidity Compiler and Deploy and Run Transactions.

![avatar](../../img/remix-01.png)
- Go to file explorers, and create a new file, name it MegaCoin.sol
- Copy/Paste the smart contract below into the newly created file MegaCoin.sol

### The smart contract
- Create new contract KIP20Tokens.sol and copy contract code from the KIP20 token template [here](https://github.com/okx/KIPs/blob/master/docs/final/KIP-20.md/)
- Modify “name”, “symbol”, “decimals” and “totalSupply” according to your requirements.
![avatar](../../img/remix-02.png)

The first line, `pragma solidity ^0.5.16` specifies that the source code is for a Solidity version greater than 0.5.16. [Pragmas](https://solidity.readthedocs.io/en/latest/layout-of-source-files#pragma) are common instructions for compilers about how to treat the source code (e.g., pragma once).

A contract in the sense of Solidity is a collection of code (its functions) and data (its state) that resides at a specific address on the Ethereum blockchain. Learn more about the [constructor](https://solidity.readthedocs.io/en/latest/contracts#constructor) and [memory](https://solidity.readthedocs.io/en/latest/introduction-to-smart-contracts#storage-memory-and-the-stack) in the docs.

### Compile smart contract
- Step1: Click button to switch to compile page
- Step2: Select “KIP20Tokens” contract
- Step3: Check “Auto compile” and “Enable optimization” checkboxes
- Step4: Click “ABI” to copy the contract abi and save it.
![avatar](../../img/remix-03.png)

Now, We have to deploy our smart contract on OKTC Network. For that, we have to connect to Web3 world, this can be done my many services like Metamask, Brave, Portis etc. We will be using Metamask. Please follow this [tutorial to setup a Metamask Account]().
- Open Metamask and select Custom RPC from the networks dropdown
- Go to setting page
![avatar](../../img/remix-04.png)

- Add a new network
![avatar](../../img/remix-05.png)
- Mainnet * [RPC URLs](/dev/api/oktc-api/json-rpc-api) * ChainID: exchain-66 * Symbol: OKT * Block explorer: 
https://www.okx.com/explorer/
- Go ahead and click save
- Copy your address from Metamask
- Now, let’s deploy the smart contract on OKTC mainnet
- Select injected Web3 in the environment dropdown and your contract
![avatar](../../img/remix-06.png)
- Accept the connection request!
![avatar](../../img/remix-07.png)
- Once Metamask is connected to remix, the ‘Deploy’ transaction would generate another metamask popup that requires transaction confirmation.
![avatar](../../img/remix-08.png)
Congratulations! You have successfully deployed a KIP20 Contract. Now you can interact with the Smart Contract. Check the deployment status here: https://www.okx.com/explorer/oktc


### Remix FAQ
#### Check “Enable optimization” to compile large size contracts
If contract creation initialization returns data with length of more than 24576 bytes, contract will be fail to created with "Contract code size over limit" error due to [EIP-170](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-170.md).
![avatar](../../img/remix-09.png)
Check the "Enable optimization" checkbox when compiling to solve this error of some large size contracts.
![avatar](../../img/remix-10.png)
