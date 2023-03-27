# Deploy With Hardhat

In this tutorial, we explain step-by-step how to create, compile and deploy a simple smart contract on the OKB Chain Testnet using Hardhat.

## What is Hardhat
Hardhat is a development environment to compile, deploy, test, and debug your smart contract.

## Setting up the development environment
### Pre-requisites

- [Node.js v10+ LTS and npm](https://nodejs.org/en "Node.js v10+ LTS and npm") (comes with Node)
- [Git](https://git-scm.com/ "Git")

To install hardhat, you need to create an npm project by going to an empty folder, running `npm init`, and following its instructions. You can use another package manager, like yarn, but we recommend you use npm 7 or later, as it makes installing Hardhat plugins simpler.
Once your project is ready, you should run `npm install --save-dev hardhat`
Install hardhat toolbox `npm install @nomicfoundation/hardhat-toolbox`
To use your local installation of Hardhat, you need to use `npx` to run it (i.e. `npx hardhat`).

## Creating your contracts
To create the sample project, run `npx hardhat` in your project folder:
```
$ npx hardhat
888    888                      888 888               888
888    888                      888 888               888
888    888                      888 888               888
8888888888  8888b.  888d888 .d88888 88888b.   8888b.  888888
888    888     "88b 888P"  d88" 888 888 "88b     "88b 888
888    888 .d888888 888    888  888 888  888 .d888888 888
888    888 888  888 888    Y88b 888 888  888 888  888 Y88b.
888    888 "Y888888 888     "Y88888 888  888 "Y888888  "Y888

👷 Welcome to Hardhat v2.9.9 👷

? What do you want to do? …
❯ Create a JavaScript project
  Create a TypeScript project
  Create an empty hardhat.config.js
  Quit
```

## Compiling your contracts
Next, if you take a look at the `contracts/` folder, you'll see `Lock.sol`:
```
// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract Lock {
    uint public unlockTime;
    address payable public owner;

    event Withdrawal(uint amount, uint when);

    constructor(uint _unlockTime) payable {
        require(
            block.timestamp < _unlockTime,
            "Unlock time should be in the future"
        );

        unlockTime = _unlockTime;
        owner = payable(msg.sender);
    }

    function withdraw() public {
        // Uncomment this line, and the import of "hardhat/console.sol", to print a log in your terminal
        // console.log("Unlock time is %o and block timestamp is %o", unlockTime, block.timestamp);

        require(block.timestamp >= unlockTime, "You can't withdraw yet");
        require(msg.sender == owner, "You aren't the owner");

        emit Withdrawal(address(this).balance, block.timestamp);

        owner.transfer(address(this).balance);
    }
}
```
To compile it, simply run:`npx hardhat compile`

## Setting configuration file
In order to connect to the OKBC network, we need to configure the corresponding network.

To set up your config, you have to export an object from `hardhat.config.js`:
```
module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
    },
    OKBC: {
      url: "https://okbtestrpc.okx.com",
      accounts: [privateKey1, privateKey2, ...]
    }
  }
}
```
## Deploying your contracts
Next, to deploy the contract, we will use a Hardhat script.
Inside the `scripts/` folder you will find a file with the following code:
```
// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  const unlockTime = currentTimestampInSeconds + 60;

  const lockedAmount = hre.ethers.utils.parseEther("0.001");

  const Lock = await hre.ethers.getContractFactory("Lock");
  const lock = await Lock.deploy(unlockTime, { value: lockedAmount });

  await lock.deployed();

  console.log(
    `Lock with ${ethers.utils.formatEther(
      lockedAmount
    )}ETH and unlock timestamp ${unlockTime} deployed to ${lock.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
```
You can run it using `npx hardhat run`:
```
$ npx hardhat run scripts/deploy.js --network OKBC
Lock with 1 ETH deployed to: 0x5FbDB2315678afecb367f032d93F642f64180aa3
```
