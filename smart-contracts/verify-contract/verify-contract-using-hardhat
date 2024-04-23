# Verify contract using hardhat
## Verify your contract on OKLink
[OKLink](https://www.okx.com/explorer/oktc "OKLink") has created a plugin for developers working with OKC (presumably a blockchain or cryptocurrency project) that helps them verify their smart contracts more efficiently. This plugin integrates with a development tool called hardhat, and provides an example of how to use the "verify" command in hardhat to quickly verify your smart contracts. To use the plugin, you’ll need to install hardhat-etherscan and configure it appropriately.

## Usage Instructions
To verify your code on OKLink, you just need to modify one file (hardhat.config.js), following the same process and commands outlined in hardhat’s official documentation.

## Important notes:
1. If you want to verify your code on Etherscan, you’ll need to obtain an API key. However, for OKC verification, you don’t need to apply for a separate key - just use "OKLINK" as your key.
2. After you deploy your contract code, make sure to wait at least one minute before verifying it.

## Example
Step 1: Start by creating a hardhat project and using the Lock contract as an example. 
Step 2: Next, modify the hardhat.config.js file in your project directory with the following changes: 
OKC mainnet
```require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    okc: {
      url: "https://exchainrpc.okex.org",
      accounts:[process.env.PRIVKEY]
    }
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_KEY,
    customChains: [
      {
        network: "okc",
        chainId: 66,
        urls: {
          apiURL: "https://www.oklink.com/api/explorer/v1/contract/verify/async/api",
          browserURL: "https://www.okx.com/explorer/oktc/"
        }
      }
    ]
  }
};
```
OKC testnet
```require("@nomiclabs/hardhat-etherscan");
require('dotenv').config();
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    okcTest: {
      url: "https://exchaintestrpc.okex.org",
      accounts:[process.env.PRIVKEY]
    }
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_KEY,
    customChains: [
      {
        network: "okcTest",
        chainId: 65,
        urls: {
          apiURL: "https://www.oklink.com/api/explorer/v1/contract/verify/async/api/okctest",
          browserURL: "https://www.okx.com/explorer/oktc-test/"
        }
      }
    ]
  }
};
```
Replace "process.env.PRIVKEY" with your own deployment address’s private key, and set "process.env.ETHERSCAN_KEY" to "OKLINK" (which does not need verification at this time). 

Step 3: Compile your hardhat contract code and deploy it with this command(here is an example of the main network): 
```npx hardhat run scripts/deploy.js  --network okc  ```
[upl-image-preview url=https://forum.okt.club/assets/files/2023-03-20/1679306267-131350-image.png]

Step 4: Wait for two minutes and then verify the contract by running the following command and specifying the contract file you want to verify(here is an example of the main network): 
```npx hardhat verify  --contract contracts/Lock.sol:Lock <address> <unlock time> --network okc```
[upl-image-preview url=https://forum.okt.club/assets/files/2023-03-20/1679306358-853528-image.png]


Step 5: Check if the contract has been successfully verified by visiting https://www.oklink.com/oktc/address/0x2F7795A8417b4226B9627c0000461e644aD7C6d8.Ω
