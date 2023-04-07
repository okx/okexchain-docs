# CosmWasmJS
This article focuses on how to use CosmoWasmJS for connectiong to OKTC nodes and interacting with smart contracts. CosmWasmJS is an SDK that facilitates contract development for DApp developers. Combined with CosmJS, you can easily and conveniently develop OKTCWasm smart contracts.
> CosmWasmJS + CosmJS is equivalent to ETH's web3.js.

| Project | Description | 
| :-----| :----| 
| ComWasmJs | A JS SDK for smart contract interactions provided by CosmWasm. ComWasmJs is developed based on ComJs. | 
| ComJs | The JS SDK that Cosmos SDK provides to interact with nodes. | 

**Note: If you want a more detailed explanation of CosmWasmJS and wasm smart contract interactions, please refer to [CosmWasmJS](https://cosmwasm.github.io/CosmWasmJS/)**

## Preconditions
Need to install [Node](https://nodejs.org/en/download/) while using CosmoWasmJS
## Choice of network
You can choose between mainnet, testnet or local testnet.
> Cosmwasm on mainnet is coming soon. Use testnet instead for now.
### Mainnet
There is no need to build nodes on the main network, and the development of OKTCWasm contracts can directly access the RPC node services provided by OKTC. If you need to build your own testnet node, please refer to [mainnet node set up](/dev/quick-start/join-oktc-mainnet.html).

Below is the URL of the mainnet RPC node
> const rpcEndpoint = "https://exchaintmrpc.okex.org"
### Testnet

There is no need to build nodes on testnet, and the development of OKTCWasm contracts can directly access the RPC node services provided by OKTC. If you need to build your own testnet node, please refer to [testnet node set up](/dev/quick-start/join-oktc-testnet.html).

Below is the URL of the testnet RPC node
> const rpcEndpoint = "https://exchaintesttmrpc.okex.org"
### Local testnet
Download the OKTC source code and set up the OKTC local testnet through the script we provide

```shell
git clone https://github.com/okx/exchain.git
cd exchain/dev
sh ./wasm-test.sh 
```

Below is the URL of the testnet RPC node

> const rpcEndpoint = "https://localhost:26657"

## Install Node.js
https://nodejs.org/en/download/
## Create project
**Note: everything in this subsection uses local testnet**

Create project directory
```shell
# use an empty directory
mkdir cosmwasmjs && cd cosmwasmjs
```
Install the dependencies
```shell
# install the dependencies
npm install cosmwasm
npm install @cosmjs/crypto
```
Create a code file
```shell
# create an emtpy file to write code
touch client.mjs
```

## Compile JS code
**Note: everything in this subsection uses local testnet**

Copy the following codes into `client.mjs`
```javascript
import { SigningCosmWasmClient, Secp256k1HdWallet, coin, parseCoins } from "cosmwasm";
import { stringToPath } from "@cosmjs/crypto";

// This is your rpc endpoint
// If you choice mainnet ,please use "https://exchaintmrpc.okex.org"
// If you choice testnet ,please use "https://exchaintesttmrpc.okex.org"
const rpcEndpoint = "http://localhost:26657";

// Using mnemonic
// You must change mnemonic if you use your mnemonic
const mnemonic = "palace cube bitter light woman side pave cereal donor bronze twice work";

async function main() {
// Create a wallet
const path = stringToPath("m/44'/118'/0'/0/0");
const wallet = await Secp256k1HdWallet.fromMnemonic(mnemonic, {hdPaths:[path], "prefix":"ex"});
const accs = await wallet.getAccounts();

    // Create Wasm Client
    const client = await SigningCosmWasmClient.connectWithSigner(
        rpcEndpoint,
        wallet,
    );
    const balance = await client.getBalance(accs[0].address,'okt')
    console.log("------------------------------------------------------------------------------------")
    console.log("SigningCosmWasmClient CONNECTION Success")
    console.log("account:",accs[0].address);
    console.log("balance:",balance);
    
    // Query Wasm all code 
    const codes = await client.getCodes();
    console.log("------------------------------------------------------------------------------------")
    console.log("Query all Wasm code:")
    console.log(codes);
}

main();
```

## Run code
**Note: everything in this subsection uses local testnet**

Next, run code
```shell
node client.mjs
```

## Contract interaction interface
The above only shows how to connect OKTC nodes through CosmWasmJS, the actions for querying account balances and all wasm contract code operations. If you want to conduct other smart contract actions, you can refer to the interfaces in the table below for uploading contract codes, deploying contracts and interacting with contracts.

**Notes**
> CosmWasmClient : this client is only used for querying
> 
> SigningCosmWasmClient : this client is used for sending transactions

| Order | Sdk interface name | Description | OKTC support | Host Client| Remarks |
| :-----| :---- | :---- | :---| :---- | :---------- |
| 1 | getChainId | Query chain ID | Y | CosmWasmClient |  |
| 2 | getHeight | Query height | Y |CosmWasmClient  |  |
| 3 | getAccount | Query account | Y |CosmWasmClient  |  |
| 4 | getSequence | Query account sequence number | Y |CosmWasmClient  |  |
| 5 | getBlock | Query block | Y |CosmWasmClient  |  |
| 6 | getBalance | Query balance | Y |CosmWasmClient  |  |
| 7 | getTx | Query transaction | Y |CosmWasmClient  |  |
| 8 | searchTx |Search transaction by tag | Y |CosmWasmClient  |  |
| 9 | disconnect | Disconnect | Y |CosmWasmClient  |  |
| 10 | broadcastTx | Broadcast transaction | Y |CosmWasmClient  |  |
| 11 | getCodes | Query all contract codes of wasm | Y |CosmWasmClient  |  |
| 12 | getCodeDetails | Query contract code information | Y |CosmWasmClient  |  |
| 13 | getContracts | Query all contracts with codeId | Y |CosmWasmClient  |  |
| 14 | getContract | Query contract | Y |CosmWasmClient  |  |
| 15 | getContractCodeHistory | Query contract upgrade situation | Y |CosmWasmClient  |  |
| 16 | queryContractRaw | Query raw format contract status data with key| Y |CosmWasmClient  |  |
| 17 | queryContractSmart |Query contract status data | Y |CosmWasmClient  |  |
| 18 | connectWithSigner | Create client and connect to node | Y |SigningCosmWasmClient  |  |
| 19 | offline | Create offline client| Y |SigningCosmWasmClient  |  |
| 20 | upload | Upload contract code| Y |SigningCosmWasmClient  |  |
| 21 | instantiate | Deploy contract| Y |SigningCosmWasmClient  |  |
| 22 | updateAdmin | Update contract admin account| Y |SigningCosmWasmClient  |  |
| 23 | clearAdmin | Clear contract admin account| Y |SigningCosmWasmClient  |  |
| 24 | migrate | Upgrade contract| Y |SigningCosmWasmClient  |  |
| 25 | execute | Call contract| Y |SigningCosmWasmClient  |  |
| 26 | sendTokens | Send transaction| Y |SigningCosmWasmClient  |  |
| 27 | delegateTokens | -| N |SigningCosmWasmClient  | OKTC does not support wasm call staking |
| 28 | undelegateTokens | -| N |SigningCosmWasmClient  | OKTC does not support wasm call staking |
| 29 | withdrawRewards | -| N |SigningCosmWasmClient  | OKTC does not support wasm call staking |
| 30 | signAndBroadcast | Sign and broadcast transaction| Y |SigningCosmWasmClient  |  |
| 31 | sign | Sign  transaction| Y |SigningCosmWasmClient  |  |

## Example
We provide a Webpack [demo](https://github.com/okx/comswasmjs-client) example. You can follow this example to interact with OKTC through your browser and Keplr wallet using CosmWasmJS and Webpack.
And we also provide another [demo](https://github.com/okx/comswasmjs-demo) example. You can create evm compatible address with oks.js. 
