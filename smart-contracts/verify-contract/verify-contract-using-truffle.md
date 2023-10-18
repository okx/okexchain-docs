# Verify Contract using Truffle
## Verify Your Contract on OKLink
The recommended way to verify a smart contract is using plugin. It is easier to read, imports are maintained, licenses are maintained.

Verified using Truffle

## Truffle
Truffle has an OKLink plugin: [truffle-plugin-verify](https://github.com/rkalis/truffle-plugin-verify)

You need to deploy with Truffle to verify with the Truffle verify plugin.
- Install the plugin

```npm install -D truffle-plugin-verify```

- Configure the plugin in `truffle-config.js`
```
const HDWalletProvider = require("@truffle/hdwallet-provider");

// const infuraKey = "fj4jll3k.....";
//
const { mnemonic, OKLinkPIKEY} = require('./env.json');

module.exports = {

  plugins: [
    'truffle-plugin-verify'
  ],
  api_keys: {
    OKLink: OKLinkPIKEY
  },
  networks: {

    testnet: {
        provider: () => new HDWalletProvider(mnemonic, `https://exchaintestrpc.okex.org`),
        network_id: 66,
        timeoutBlocks: 200,
        confirmations: 5,
        production: true    // Treats this network as if it was a public net. (default: false)
    }
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
       version: "0.5.16",    // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      settings: {          // See the solidity docs for advice about optimization and evmVersion
       optimizer: {
         enabled: false,
         runs: 200
       },
       evmVersion: "byzantium"
      }
    },
  },
};
```
- Verify
```
truffle run verify KIP20Tokens@{contract-address} --network testnet
```
You should see the following output:
