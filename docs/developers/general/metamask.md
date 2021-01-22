# Metamask
Connect your Metamask wallet with OKExChain on a testnet mode.
### Adding a custom Network for OKExChain
Open the Metamask extension on your browser, you may have to log in to your Metamask account if you are not already. Then click the top right circle and go to Settings > Networks. Press the Add Network button and fill the form as shown below with your application ChainID.
* Config your Metamask with following data   


NetWork Name: OKExChain

RPC URL: http://13.230.73.12:8545

Chain ID: 2

Currency Symbol:OKT


![avatar](../../img/metamask-01.jpg)


-------------------------------------------------------------
-------------------------------------------------------------
## Remix
Set up a Remix OKExChain testnet development environment.    
Remix is an in-browser IDE for Solidity smart contracts. In this guide, we will learn how to deploy a contract to a running OKExChain test network through Remix and interact with it.   
### 1. Connect OKExChain account to Remix
Go to [Remix](http://remix.ethereum.org/). There are some contracts in the File Explorer. Select any of these contracts. In this example, we use `Storage.sol`. On the left-most bar, select the Solidity Compiler and compile the contract.


![avatar](../../img/metamask-02.png)

Next, select the `Deploy and Run` option. Select `injected web3` as the environment. This will open a metamask popup for you to confirm connecting your Metamask to Remix. Hit confirm.

You should see your account show up in the left-hand panel.

![avatar](../../img/metamask-03.png)


### 2. Deploy and Interact
Now that your account is connected, you are able to deploy the contract. Press the Deploy button. A metamask pop-up will appear asking you to confirm. Confirm the transaction   

Once the contract has been successfully deployed, you will see it show up in the Deployed Contracts section in the left-hand side, as well as a green check in the Remix console showing the transaction details.   

![avatar](../../img/metamask-04.png)


Now, you are able to interact with the contract through Remix. For Storage.sol, input 1000 and click `store`. This will open a Metamask pop-up asking you to confirm. Confirm the transaction. Then, click `retrieve` to get the number, which should be 1000.

![avatar](../../img/metamask-05.png)


-------------------------------------------------------------
-------------------------------------------------------------
## Claim test tokens
We will send 1000 tokt to the following address in AM 11:00（UTC/GMT+08:00）everyday, you can transfer some tokens into your own address to test
* Address:      `0x03975c070801D6110EBD8301a0F159f89FB7a4C0`
* Private Key:  `BB1C835AB9770454318D8F19079AA1498EFE3B57654E8084134ADB7854969D93`
