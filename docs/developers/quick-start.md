# Quick Start for Testnet
## Metamask
- [What's the Metamask](https://metamask.io/index.html)
- [Guide for Metamask](https://docs.metamask.io/guide/)

### 1. Config Metamask for OEC Testnet

- NetWork Name: OEC Testnet
- RPC URL: 
    - https://exchaintestrpc.okex.org
- Chain ID: 65
- Currency Symbol: OKT
- Block Explorer URL: https://www.oklink.com/oec-test/

![avatar](../img/metamask-01-en.png)

### 2. Create a new account or import an existing account
![avatar](../img/metamask-01-2.png)

### 3. Get testnet token
- [Discord Faucet1](https://discord.gg/B5nMs6qK5F)
- [Discord Faucet2](https://discord.gg/UsvashbQ4E)

___
## Blockchain Browser
[OEC Testnet Browser](https://www.oklink.com/oec-test)
___

## Remix
Set up a Remix OEC Testnet development environment.    
Remix is an in-browser IDE for Solidity smart contracts. In this guide, we will learn how to deploy a contract to a running OEC Testnet through Remix and interact with it.   
### 1. Connect OEC account to Remix
Go to [Remix](http://remix.ethereum.org/). There are some contracts in the File Explorer. Select any of these contracts. In this example, we use `Storage.sol`. On the left-most bar, select the Solidity Compiler and compile the contract.


![avatar](../img/metamask-02.png)

Next, select the `Deploy and Run` option. Select `injected web3` as the environment. This will open a metamask popup for you to confirm connecting your Metamask to Remix. Hit confirm.

You should see your account show up in the left-hand panel.

![avatar](../img/metamask-03.png)


### 2. Deploy and Interact
Now that your account is connected, you are able to deploy the contract. Press the Deploy button. A metamask pop-up will appear asking you to confirm. Confirm the transaction   

Once the contract has been successfully deployed, you will see it show up in the Deployed Contracts section in the left-hand side, as well as a green check in the Remix console showing the transaction details.   

![avatar](../img/metamask-04.png)


Now, you are able to interact with the contract through Remix. For Storage.sol, input 1000 and click `store`. This will open a Metamask pop-up asking you to confirm. Confirm the transaction. Then, click `retrieve` to get the number, which should be 1000.

![avatar](../img/metamask-05.png)



