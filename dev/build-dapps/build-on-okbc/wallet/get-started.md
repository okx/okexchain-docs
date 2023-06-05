# Get Started with Wallet

## What is a wallet?
A crypto wallet is a tool for storing and transferring cryptocurrencies and interacting with blockchain networks. There are three main types of wallets: software, hardware, and paper wallets. Based on their connection to the internet, wallets can also be classified as hot or cold.
A crypto wallet consists of public and private key pairs, which are used to sign, send, and receive transactions and track asset ownership. The wallet generates a public key from the private key, creating a public address in the form of letters and numbers. This address is used to receive cryptocurrency assets, and it can be shared with others. However, **the private key must be kept secret** to prevent asset loss.
To use OKB or other tokens on OKB Chain, you need to create a wallet that supports the chain and set up your  key management strategy.

## Supported Wallets
List of wallets supporting OKB Chain.

| NO.  | Wallet Name | Custody  | Website Link  | Platform  | Network  |
| :------------ | :-------------------------- | :------------ | :------------ | :------------ | :------------ |
| 1  | OKX Wallet  | non-custodial  | https://www.okx.com/web3  | Mobile, browser  | Multichain  |
| 2  | MetaMask  | non-custodial  | https://metamask.io/  | Mobile, browser  | EVM  |
| 3  | Keplr  | non-custodial  | https://www.keplr.app/  | Mobile, browser  | Cosmos  |

## Key Management Strategy
Here are some simple steps to integrate a client-side application with OKB Chain:

1. **Set up Web3**: [web3.js](https://web3js.readthedocs.io/ "web3.js") is a useful Javascript library that enables a client-side application to communicate with the blockchain. To establish this communication, we configure `web3.js` to use a developer-based wallet such as MetaMask. You can consult the [web3.js docs](https://web3js.readthedocs.io/en/v1.2.2/getting-started.html#adding-web3-js "web3.js docs") to learn how to add web3.js to your project.
2. **Set up an Account**: Once web3 is successfully installed, you can begin to send transactions that change the state of blockchain.
3. **Instantiate Contracts**: Once a web3 object is in place, we next instantiate our deployed contract, with which we interact.
4. **Call functions**: To fetch data from the contract, you can use functions available in the contract object.