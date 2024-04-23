# ByteCraft
A Wasm development environment for seamless smart contract development.

---

ByteCraft allows you to:

- Scaffold a template smart contract app development.
- Dramatically simplify the development and deployment process.

## Bytecraft initial setup

### Install docker

For building and optimizing WASM smart contracts, we recommend to install docker on your personal computer. 

we can download docker desktop from [here](https://www.docker.com/), then following official install guideline to install it.

### Setup Rust

While WASM smart contracts can be written in any programming language, **it is strongly recommended that you utilize Rust**, as it is the only language for which mature libraries and tooling exist for CosmWasm. To complete this tutorial, install the latest version of Rust by following the instructions <a href="https://www.rust-lang.org/tools/install" target="_blank">here</a>. Once Rust is installed on your computer, do the following:

1. Set the default release channel used to update Rust to stable.

```sh
rustup default stable
```

2. Add wasm as the compilation target.

```sh
rustup target add wasm32-unknown-unknown
```

3. Install the necessary dependencies for generating contracts.

```sh
cargo install cargo-run-script
```

### Install Node JS and NPM

To run ByteCraft, you will need to install version 16 of Node.js and download Node Package Manager (npm). It is recommend that you install [Node.js v16 (LTS)](https://nodejs.org/en/download/). If you download the LTS version of Node.js v16, npm will be automatically installed along with your download.

### Install ts-codegen

To interactive with contract, we can use `ts-codegen` to generate contract client.

```shell
npm install -g @cosmwasm/ts-codegen
```

### Install Bytecraft

Now that you have completed the initial setup, you can install bytecraft using the procedure described below.

Install the bytecraft package globally.

```sh
npm install -g @okexchain/bytecraft
```

### Install cosmwasm-check
It allows checking if the Wasm binary is a proper smart contract that’s ready to be uploaded to the blockchain.
```sh
cargo install cosmwasm-check
```

## Use Bytecraft with OKTC Testnet


### Getting Started

Now that you have installed bytecraft,  generate your first smart contract using the procedure described below.

1. Generate your smart contract templates with `bytecraft new` command.

```sh
bytecraft new mydapp
```

2. After the project is generated and all necessary Node dependencies are installed, navigate to the new `mydapp` directory to interact with your app.

```sh
cd mydapp
```

### Project Structure

The `bytecraft new` command generates a project that contains a template smart contract, which is named after the specified app name, `mydapp`. Other supporting files are generated to provide further functionality. You may view the project structure below.

```
.
├── contracts              # the smart contract directory
│   ├── mydapp             # template smart contract
│   └── ...
├── lib                    # predefined task and console functions
├── tasks                  # predefined tasks
├── keys.js        				# keys for signing transactions
├── config.json    				# config for connections and contract deployments
└── refs.json      				# deployed code and contract references
```

### Deployment Contract

The `bytecraft deploy` command does the following:

- Builds, optimizes, and stores the wasm code on the blockchain.
- Instantiates the contract.

As you can see the `config.json` file in the project, There predefined  networks for you:

```json
{
  "_global": {
    "_base": {
      "instantiation": {
        "instantiateMsg": {
          "admins": [
            "0x7aB9aC66DdA0D1b8F22275262DAcACb10185CA3A"
          ],
          "mutable": true
        }
      }
    },
    "contracts": {
      "mydapp": {
        "instantiation": {
          "instantiateMsg": {
            "admins": [
              "0x7aB9aC66DdA0D1b8F22275262DAcACb10185CA3A"
            ],
            "mutable": true
          }
        }
      }
    }
  },
  "oktc-mainnet": {
    "_connection": {
      "chainID": "exchain-66",
      "URL": "https://exchaintmrpc.okex.org"
    },
    "_base": {
      "instantiation": {
        "instantiateMsg": {
          "admins": [
            "0x7aB9aC66DdA0D1b8F22275262DAcACb10185CA3A"
          ],
          "mutable": true
        }
      }
    },
    "contracts": {
      "mydapp": {
        "instantiation": {
          "instantiateMsg": {
            "admins": [
              "0x7aB9aC66DdA0D1b8F22275262DAcACb10185CA3A"
            ],
            "mutable": true
          }
        }
      }
    }
  },
  "oktc-testnet": {
    "_connection": {
      "chainID": "exchain-65",
      "URL": "https://exchaintesttmrpc.okex.org"
    },
    "_base": {
      "instantiation": {
        "instantiateMsg": {
          "admins": [
            "0x7aB9aC66DdA0D1b8F22275262DAcACb10185CA3A"
          ],
          "mutable": true
        }
      }
    },
    "contracts": {
      "mydapp": {
        "instantiation": {
          "instantiateMsg": {
            "admins": [
              "0x7aB9aC66DdA0D1b8F22275262DAcACb10185CA3A"
            ],
            "mutable": true
          }
        }
      }
    }
  },
  "oktc-localnet": {
    "_connection": {
      "chainID": "exchain-67",
      "URL": "http://localhost:26657"
    },
    "_base": {
      "instantiation": {
        "instantiateMsg": {
          "admins": [
            "0x7aB9aC66DdA0D1b8F22275262DAcACb10185CA3A"
          ],
          "mutable": true
        }
      }
    },
    "contracts": {
      "mydapp": {
        "instantiation": {
          "instantiateMsg": {
            "admins": [
              "0x7aB9aC66DdA0D1b8F22275262DAcACb10185CA3A"
            ],
            "mutable": true
          }
        }
      }
    }
  },
  "okbc-testnet": {
    "_connection": {
      "chainID": "okbchaintest-195",
      "URL": "https://okbtesttmrpc.okbchain.org"
    },
    "_base": {
      "instantiation": {
        "instantiateMsg": {
          "admins": [
            "0x7aB9aC66DdA0D1b8F22275262DAcACb10185CA3A"
          ],
          "mutable": true
        }
      }
    },
    "contracts": {
      "mydapp": {
        "instantiation": {
          "instantiateMsg": {
            "admins": [
              "0x7aB9aC66DdA0D1b8F22275262DAcACb10185CA3A"
            ],
            "mutable": true
          }
        }
      }
    }
  },
  "okbc-localnet": {
    "_connection": {
      "chainID": "okbchain-67",
      "URL": "http://localhost:26657"
    },
    "_base": {
      "instantiation": {
        "instantiateMsg": {
          "admins": [
            "0x7aB9aC66DdA0D1b8F22275262DAcACb10185CA3A"
          ],
          "mutable": true
        }
      }
    },
    "contracts": {
      "mydapp": {
        "instantiation": {
          "instantiateMsg": {
            "admins": [
              "0x7aB9aC66DdA0D1b8F22275262DAcACb10185CA3A"
            ],
            "mutable": true
          }
        }
      }
    }
  }
}

```

also  there predefined instantiateMsg for mydapp contract.

To deploy your new mydapp smart contract on OKTC testnet, run the following command in the terminal with extral flag `--network testnet`.

```sh
 bytecraft deploy mydapp --signer test --network oktc-testnet
```

In this case, `test`, as our signer. The signer account will be responsible for paying the gas fee associated with deploying the contract to the exchain blockchain and will be assigned as the owner of the project.

The network is specified with `testnet`. your  contract will be deployed to OKTC `testnet`

### Deploying on OKTC Testnet

You should  add a personal account to the `keys.js` file by adding the account name as well as its corresponding private key. You can then use that account as the signer specifying the account name after the `--signer` flag in the `bytecraft deploy` command.

<sub>**Warning:** _Utilizing a personal account for deployment requires the use of a private key or mnemonic. These are private keys that are generated upon the creation of your personal wallet. Saving or utilizing these keys on your personal computer may expose them to malicious actors who could gain access to your personal wallet if they are able to obtain them. You can create a wallet solely for testing purposes to eliminate risk. Alternatively, you can store your private keys as secret environment variables which you can then reference utilizing `process.env.SECRET_VAR` in `keys.json`. Use your private key or mnemonic at your own discretion._</sub>

```js
// can use `process.env.SECRET_MNEMONIC` or `process.env.SECRET_PRIV_KEY`
// to populate secret in CI environment instead of hardcoding

module.exports = {
  test: {
    mnemonic:
      "abstract milk alien mosquito consider swarm write outside detail faith peanut feel",
  },
  alice: {
    privateKey: "43792143508f053a8b82dd83e1d56c82dc04cd0fcc86220175ef591911fa65c1",
  },
};
```

Prior to deploying your contract, ensure that your signer wallet contains the funds needed to pay for associated transaction fees.

You can retrieve the wallet address associated with the `alice` account by executing the `bytecraft console` command in your terminal while in your project directory.

```sh
bytecraft console 

bytecraft > wallets.test.address
'0x7aB9aC66DdA0D1b8F22275262DAcACb10185CA3A'
```

Then, exit the bytecraft console and deploy the `mydapp` smart contract to testnet with the `test` account as the signer.

```sh
bytecraft deploy mydapp --signer test --network oktc-testnet
```

After deployment, the `refs.json` file will be updated in the project directory. These files contain references to all contracts inside of your project which have been stored on any exchain network. This information is utilized by bytecraft’s utility functions. An example of `refs.json` can be found below:

```json
{
  "localnet": {
    "counter": {
      "codeId": "1",
      "contractAddresses": {
        "default": "0xC95c37310b4376Bd70158e34004467715af31a29"
      }
    }
  },
  "testnet": {
    "mydapp": {
      "codeId": "18160",
      "contractAddresses": {
        "default": "0x7384cd0a90Ff50368a917779B1824d7738Ad90e5"
      }
    }
  }
}
```

### Run Contract Functions with Bytecraft

Once you have successfully deployed your project, you can interact with the deployed contract and the underlying blockchain by utilizing functions defined in the `lib/index.js` file. You may also create your own abstractions in this file for querying or executing transactions. 

You can call the functions defined in `lib/index.js` inside of the `bytecraft console`. An example using the template counter smart contract is shown below.

```sh
bytecraft console --signer test --network oktc-testnet
bytecraft > lib.freeze()
#output
{
  logs: [ { msg_index: 0, log: '', events: [Array] } ],
  height: 789,
  transactionHash: '204F26178715664FE3B3E3660961D0A5C3517C4710258005F65D189EE68CE87E',
  gasWanted: 281616,
  gasUsed: 152504
}
```

### Creating Tasks

You can utilize the functions available inside of the `lib/index.ts` file to create tasks. Tasks are utilized in order to automate the execution of sequential functions or commands. An example task is provided for you in the `tasks/template.ts` file in your project directory.

```js
// tasks/template.ts

import { Env, task } from "@okexchain/bytecraft";

task(async (env:Env) => {
  await env.client.execute(env.client.refs.mydapp.contractAddresses.default, env.defaultWallet, {
    freeze: {},
  });
  console.log("freeze done!")
});


```

To run the example task shown above, which is located in the `tasks/example-with-lib.js` file, run the following command in the terminal.

```sh
bytecraft task:run template --signer test --network oktc-testnet
```

In order to create a new task, run the following command replacing `<task-name>` with the desired name for your new task.

```sh
bytecraft task:new <task-name>
```

### Scripting deployments

It is possible to deploy and instantiate contracts from tasks. This can be useful for multi-contract, or multi-stage deployments. 

```js
const { task } = require("@okexchain/bytecraft");

task(async ({ defaultWallet, client, deploy }) => {
    // First deploy the mydapp smart contract.
    await deploy.storeCode('mydapp', defaultWallet);
    const accounts = await defaultWallet.getAccounts()
    
  
    let initMsg = {"admins":[accounts[0].address],"mutable":true}
    
    const counterAddress = await deploy.instantiate(
        // Contract name
        'mydapp',
        // Signer
        defaultWallet,
        {
            // Contract admin
            admin: accounts[0].address,
            init: initMsg,
        },
    );

    // Now deploy a CW20 with the counter contract set as the minter in instantiation
    await deploy.storeCode('cw20-base', defaultWallet);
    const cw20Address = await deploy.instantiate(
        // Contract name
        'cw20-base',
        // Signer
        defaultWallet,
        {
            // Contract admin
            admin: accounts[0].address,
            init: {
                name: "counter",
                symbol: "CTR",
                decimals: 6,
                initial_balances: [],
                mint: {
                    minter: counterAddress,
                },
            },
        },
    );

    await client.execute(counterAddress, defaultWallet, {
        update_token: { token: cw20Address },
    });

    console.log(`CW20 Address: ${cw20Address}`);
});
```

It is possible to tell ByteCraft to use a custom deploy task instead of the default deploy process. To do this, add the following to the section in `config.json`:

```json
"contracts": {
  "mydapp": {
    "deployTask": "deploy_counter"
  }
}
```

Now instead of running `bytecraft task:run deploy_counter --signer test --network oktc-testnet` you can run `bytecraft deploy mydapp --signer test --network testnet`.

## Use Bytecraft with OKTC Mainnet

### Getting Started

Now that you have installed bytecraft,  generate your first smart contract using the procedure described below.

1. Generate your smart contract templates with `bytecraft new` command.

```
bytecraft new mydapp
```

1. After the project is generated and all necessary Node dependencies are installed, navigate to the new `mydapp` directory to interact with your app.

```
cd mydapp
```

### Project Structure

The `bytecraft new` command generates a project that contains a template smart contract, which is named after the specified app name, `mydapp`. Other supporting files are generated to provide further functionality. You may view the project structure below.

```
.
├── contracts              # the smart contract directory
│   ├── mydapp      # template smart contract
│   └── ...
├── lib                    # predefined task and console functions
├── tasks                  # predefined tasks
├── keys.js               # keys for signing transactions
├── config.json           # config for connections and contract deployments
└── refs.json             # deployed code and contract references
```

### Deployment Contract

The `bytecraft deploy` command does the following:

- Builds, optimizes, and stores the wasm code on the blockchain.
- Instantiates the contract.

As you can see the `config.json` file in the project, There predefined networks for you:

```
{
  "_global": {
    "_base": {
      "instantiation": {
        "instantiateMsg": {
          "admins": [
            "0x7aB9aC66DdA0D1b8F22275262DAcACb10185CA3A"
          ],
          "mutable": true
        }
      }
    },
    "contracts": {
      "mydapp": {
        "instantiation": {
          "instantiateMsg": {
            "admins": [
              "0x7aB9aC66DdA0D1b8F22275262DAcACb10185CA3A"
            ],
            "mutable": true
          }
        }
      }
    }
  },
  "oktc-mainnet": {
    "_connection": {
      "chainID": "exchain-66",
      "URL": "https://exchaintmrpc.okex.org"
    },
    "_base": {
      "instantiation": {
        "instantiateMsg": {
          "admins": [
            "0x7aB9aC66DdA0D1b8F22275262DAcACb10185CA3A"
          ],
          "mutable": true
        }
      }
    },
    "contracts": {
      "mydapp": {
        "instantiation": {
          "instantiateMsg": {
            "admins": [
              "0x7aB9aC66DdA0D1b8F22275262DAcACb10185CA3A"
            ],
            "mutable": true
          }
        }
      }
    }
  },
  "oktc-testnet": {
    "_connection": {
      "chainID": "exchain-65",
      "URL": "https://exchaintesttmrpc.okex.org"
    },
    "_base": {
      "instantiation": {
        "instantiateMsg": {
          "admins": [
            "0x7aB9aC66DdA0D1b8F22275262DAcACb10185CA3A"
          ],
          "mutable": true
        }
      }
    },
    "contracts": {
      "mydapp": {
        "instantiation": {
          "instantiateMsg": {
            "admins": [
              "0x7aB9aC66DdA0D1b8F22275262DAcACb10185CA3A"
            ],
            "mutable": true
          }
        }
      }
    }
  },
  "oktc-localnet": {
    "_connection": {
      "chainID": "exchain-67",
      "URL": "http://localhost:26657"
    },
    "_base": {
      "instantiation": {
        "instantiateMsg": {
          "admins": [
            "0x7aB9aC66DdA0D1b8F22275262DAcACb10185CA3A"
          ],
          "mutable": true
        }
      }
    },
    "contracts": {
      "mydapp": {
        "instantiation": {
          "instantiateMsg": {
            "admins": [
              "0x7aB9aC66DdA0D1b8F22275262DAcACb10185CA3A"
            ],
            "mutable": true
          }
        }
      }
    }
  },
  "okbc-testnet": {
    "_connection": {
      "chainID": "okbchaintest-195",
      "URL": "https://okbtesttmrpc.okbchain.org"
    },
    "_base": {
      "instantiation": {
        "instantiateMsg": {
          "admins": [
            "0x7aB9aC66DdA0D1b8F22275262DAcACb10185CA3A"
          ],
          "mutable": true
        }
      }
    },
    "contracts": {
      "mydapp": {
        "instantiation": {
          "instantiateMsg": {
            "admins": [
              "0x7aB9aC66DdA0D1b8F22275262DAcACb10185CA3A"
            ],
            "mutable": true
          }
        }
      }
    }
  },
  "okbc-localnet": {
    "_connection": {
      "chainID": "okbchain-67",
      "URL": "http://localhost:26657"
    },
    "_base": {
      "instantiation": {
        "instantiateMsg": {
          "admins": [
            "0x7aB9aC66DdA0D1b8F22275262DAcACb10185CA3A"
          ],
          "mutable": true
        }
      }
    },
    "contracts": {
      "mydapp": {
        "instantiation": {
          "instantiateMsg": {
            "admins": [
              "0x7aB9aC66DdA0D1b8F22275262DAcACb10185CA3A"
            ],
            "mutable": true
          }
        }
      }
    }
  }
}
```

To deploy your new my-wasm-dapp smart contract on OKTC mainnet, run the following command in the terminal with extral flag `--network mainnet`.

```
 bytecraft deploy mydapp --signer test --network oktc-mainnet
```

In this case, `test`, as our signer. The signer account will be responsible for paying the gas fee associated with deploying the contract to the exchain blockchain and will be assigned as the owner of the project.

The network is specified with `mainnet`. your  contract will be deployed to OKTC `mainnet`

### Deploying on OKTC Mainnet

You should  add a personal account to the `keys.js` file by adding the account name as well as its corresponding private key. You can then use that account as the signer specifying the account name after the `--signer` flag in the `bytecraft deploy` command.

**Warning:** *Utilizing a personal account for deployment requires the use of a private key or mnemonic. These are private keys that are generated upon the creation of your personal wallet. Saving or utilizing these keys on your personal computer may expose them to malicious actors who could gain access to your personal wallet if they are able to obtain them. You can create a wallet solely for testing purposes to eliminate risk. Alternatively, you can store your private keys as secret environment variables which you can then reference utilizing `process.env.SECRET_VAR` in `keys.json`. Use your private key or mnemonic at your own discretion.*

```
// can use `process.env.SECRET_MNEMONIC` or `process.env.SECRET_PRIV_KEY`
// to populate secret in CI environment instead of hardcoding

module.exports = {
  test: {
    mnemonic:
      "abstract milk alien mosquito consider swarm write outside detail faith peanut feel",
  },
  alice: {
    privateKey: "43792143508f053a8b82dd83e1d56c82dc04cd0fcc86220175ef591911fa65c1",
  },
};
```

Prior to deploying your contract, ensure that your signer wallet contains the funds needed to pay for associated transaction fees.

You can retrieve the wallet address associated with the `alice` account by executing the `bytecraft console` command in your terminal while in your project directory.

```
bytecraft console 

bytecraft > wallets.test.address
'0x7aB9aC66DdA0D1b8F22275262DAcACb10185CA3A'
```

Then, exit the bytecraft console and deploy the `mydapp` smart contract to testnet with the `test` account as the signer.

```
bytecraft deploy mydapp --signer test --network oktc-mainnet
```

After deployment, the `refs.json` file will be updated in the project directory. These files contain references to all contracts inside of your project which have been stored on any exchain network. This information is utilized by bytecraft’s utility functions. An example of `refs.json` can be found below:

```
{
  "localnet": {
    "counter": {
      "codeId": "1",
      "contractAddresses": {
        "default": "0xC95c37310b4376Bd70158e34004467715af31a29"
      }
    }
  },
  "testnet": {
    "mydapp": {
      "codeId": "18160",
      "contractAddresses": {
        "default": "0x7384cd0a90Ff50368a917779B1824d7738Ad90e5"
      }
    }
  }
}
```

### Run Contract Functions with Bytecraft

Once you have successfully deployed your project, you can interact with the deployed contract and the underlying blockchain by utilizing functions defined in the `lib/index.js` file. You may also create your own abstractions in this file for querying or executing transactions. 

You can call the functions defined in `lib/index.js` inside of the `bytecraft console`. An example using the template counter smart contract is shown below.

```
bytecraft console --signer test --network oktc-mainnet
bytecraft > lib.freeze()
#output
{
  logs: [ { msg_index: 0, log: '', events: [Array] } ],
  height: 789,
  transactionHash: '204F26178715664FE3B3E3660961D0A5C3517C4710258005F65D189EE68CE87E',
  gasWanted: 281616,
  gasUsed: 152504
}
```

### Creating Tasks

You can utilize the functions available inside of the `lib/index.ts` file to create tasks. Tasks are utilized in order to automate the execution of sequential functions or commands. An example task is provided for you in the `tasks/example-with-lib.ts` file in your project directory.

```
// tasks/template.ts

import { Env, task } from "@okexchain/bytecraft";

task(async (env:Env) => {
  await env.client.execute(env.client.refs.mydapp.contractAddresses.default, env.defaultWallet, {
    freeze: {},
  });
  console.log("freeze done!")
});


```

To run the example task shown above, which is located in the `tasks/example-with-lib.js` file, run the following command in the terminal.

```
bytecraft task:run template --signer test --network oktc-mainnet
```

In order to create a new task, run the following command replacing `<task-name>` with the desired name for your new task.

```
bytecraft task:new <task-name>
```

### Scripting deployments

It is possible to deploy and instantiate contracts from tasks. This can be useful for multi-contract, or multi-stage deployments. 

```
const { task } = require("@okexchain/bytecraft");

task(async ({ defaultWallet, client, deploy }) => {
    // First deploy the mydapp smart contract.
    await deploy.storeCode('mydapp', defaultWallet);
    const accounts = await defaultWallet.getAccounts()
    
  
    let initMsg = {"admins":[accounts[0].address],"mutable":true}
    
    const counterAddress = await deploy.instantiate(
        // Contract name
        'mydapp',
        // Signer
        defaultWallet,
        {
            // Contract admin
            admin: accounts[0].address,
            init: initMsg,
        },
    );

    // Now deploy a CW20 with the counter contract set as the minter in instantiation
    await deploy.storeCode('cw20-base', defaultWallet);
    const cw20Address = await deploy.instantiate(
        // Contract name
        'cw20-base',
        // Signer
        defaultWallet,
        {
            // Contract admin
            admin: accounts[0].address,
            init: {
                name: "counter",
                symbol: "CTR",
                decimals: 6,
                initial_balances: [],
                mint: {
                    minter: counterAddress,
                },
            },
        },
    );

    await client.execute(counterAddress, defaultWallet, {
        update_token: { token: cw20Address },
    });

    console.log(`CW20 Address: ${cw20Address}`);
});
```

It is possible to tell ByteCraft to use a custom deploy task instead of the default deploy process. To do this, add the following to the section in `config.json`:

```
"contracts": {
  "mydapp": {
    "deployTask": "deploy_counter"
  }
}
```

Now instead of running `bytecraft task:run deploy_counter --signer test --network oktc-mainnet` you can run `bytecraft deploy mydapp --signer test --network mainnet`.

## ByteCraft console

Bytecraft console provide a javascript repl environment, you can interact with the deployed contract and the underlying blockchain by utilizing functions defined in the `lib/index.js` file. You may also create your own abstractions in this file for querying or executing transactions. 

You can call the functions defined in `lib/index.js` inside of the `bytecraft console`. An example using the template counter smart contract is shown below.

```sh
bytecraft console --signer test --network oktc-testnet
bytecraft > lib.freeze()
#output
{
  logs: [ { msg_index: 0, log: '', events: [Array] } ],
  height: 789,
  transactionHash: '204F26178715664FE3B3E3660961D0A5C3517C4710258005F65D189EE68CE87E',
  gasWanted: 281616,
  gasUsed: 152504
}
```

You may also specify which network you would like to interact with by utilizing the `--network` flag with the `bytecraft console` command.

```
bytecraft console --network NETWORK
```


## ByteCraft Commands

Here are details about bytecarft commands you can read when you are confused about using it

| command                                                      | description                                                  |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| [bytecraft console](#bytecraft-console)                      | Start a repl console that provides context and convenient utilities to interact with the blockchain and your contracts. |
| [bytecraft contract:build](#bytecraft-contractbuild-contract) | Build wasm bytecode.                                         |
| [bytecraft contract:generateClient](#bytecraft-contractgenerateclient-contract) | Generate a Chain TypeScript client.                          |
| [bytecraft contract:instantiate](#bytecraft-contractinstantiate-contract) | Instantiate the contract.                                    |
| [bytecraft contract:migrate](#bytecraft-contractmigrate-contract) | Migrate the contract.                                        |
| [bytecraft contract:new](#bytecraft-contractnew-name)        | Generate new contract.                                       |
| [bytecraft contract:optimize](#bytecraft-contractoptimize-contract) | Optimize wasm bytecode.                                      |
| [bytecraft contract:store](#bytecraft-contractstore-contract) | Store code on chain.                                         |
| [bytecraft contract:updateAdmin](#bytecraft-contractupdateadmin-contract-admin) | Update the admin of a contract.                              |
| [bytecraft deploy](#bytecraft-deploy-contract)               | Build wasm bytecode, store code on chain and instantiate.    |
| [bytecraft help](#bytecraft-help-command)                    | Display help for bytecraft                                   |
| [bytecraft new](#bytecraft-new-name)                         | Create new dapp from template.                               |
| [bytecraft task:new](#bytecraft-tasknew-task)                | Create new task                                              |
| [bytecraft task:run](#bytecraft-taskrun-task)                | Run predefined task                                          |
| [bytecraft test](#bytecraft-test-contract-name)              | Runs unit tests for a contract directory.                    |
| [bytecraft test:coverage](#bytecraft-testcoverage-contract-name) | Runs unit tests for a contract directory with coverage       |
| [bytecraft wallet](#bytecraft-walletnew)                     | Generate a new wallet to use for signing contracts           |

<!-- commands -->

### `bytecraft console`

Start a repl console that provides context and convenient utilities to interact with the blockchain and your contracts.

```
USAGE
  $ bytecraft console [--signer <value>] [--network <value>] [--config-path <value>] [--refs-path <value>]
    [--keys-path <value>]

FLAGS
  --config-path=<value>  [default: ./config.json]
  --keys-path=<value>    [default: ./keys.js]
  --network=<value>      [default: localnet] network to deploy to from config.json
  --refs-path=<value>    [default: ./refs.json]
  --signer=<value>       [default: test]

DESCRIPTION
  Start a repl console that provides context and convenient utilities to interact with the blockchain and your
  contracts.
```

### `bytecraft contract:build CONTRACT`

Build wasm bytecode.

```
USAGE
  $ bytecraft contract:build [CONTRACT] [--config-path <value>]

FLAGS
  --config-path=<value>  [default: ./config.json]

DESCRIPTION
  Build wasm bytecode.
```

### `bytecraft contract:generateClient CONTRACT`

Generate a Chain TypeScript client.

```
USAGE
  $ bytecraft contract:generateClient [CONTRACT] [--lib-path <value>] [--build-schema]

FLAGS
  --build-schema
  --lib-path=<value>  [default: lib] location to place the generated client

DESCRIPTION
  Generate a Chain TypeScript client.
```

### `bytecraft contract:instantiate CONTRACT`

Instantiate the contract.

```
USAGE
  $ bytecraft contract:instantiate [CONTRACT] [--signer <value>] [--network <value>] [--instance-id <value>] [--code-id
    <value>] [--config-path <value>] [--refs-path <value>] [--keys-path <value>]

FLAGS
  --code-id=<value>      specific codeId to instantiate
  --config-path=<value>  [default: ./config.json]
  --instance-id=<value>  [default: default]
  --keys-path=<value>    [default: ./keys.js]
  --network=<value>      [default: localnet] network to deploy to from config.json
  --refs-path=<value>    [default: ./refs.json]
  --signer=<value>       [default: test]

DESCRIPTION
  Instantiate the contract.
```

### `bytecraft contract:migrate CONTRACT`

Migrate the contract.

```
USAGE
  $ bytecraft contract:migrate [CONTRACT] [--signer <value>] [--no-rebuild] [--network <value>] [--config-path
    <value>] [--refs-path <value>] [--keys-path <value>] [--instance-id <value>]

FLAGS
  --config-path=<value>  [default: config.json]
  --instance-id=<value>  [default: default]
  --keys-path=<value>    [default: keys.js]
  --network=<value>      [default: localnet]
  --no-rebuild           deploy the wasm bytecode as is.
  --refs-path=<value>    [default: refs.json]
  --signer=<value>       [default: test]

DESCRIPTION
  Migrate the contract.
```

### `bytecraft contract:new NAME`

Generate new contract.

```
USAGE
  $ bytecraft contract:new [NAME] [--path <value>] [--version <value>] [--authors <value>]

FLAGS
  --authors=<value>  [default: OKX okc <core@okg.com>]
  --path=<value>     [default: contracts] path to keep the contracts
  --version=<value>  [default: 1.0]

DESCRIPTION
  Generate new contract.

EXAMPLES
  $ bytecraft code:new awesome_contract

  $ bytecraft code:new awesome_contract --path path/to/dapp

  $ bytecraft code:new awesome_contract --path path/to/dapp --authors "ExampleAuthor<example@email.domain>"
```

### `bytecraft contract:optimize CONTRACT`

Optimize wasm bytecode.

```
USAGE
  $ bytecraft contract:optimize [CONTRACT] [--config-path <value>]

FLAGS
  --config-path=<value>  [default: ./config.json]

DESCRIPTION
  Optimize wasm bytecode.
```

### `bytecraft contract:store CONTRACT`

Store code on chain.

```
USAGE
  $ bytecraft contract:store [CONTRACT] [--signer <value>] [--network <value>] [--no-rebuild] [--config-path
    <value>] [--refs-path <value>] [--keys-path <value>]

FLAGS
  --config-path=<value>  [default: ./config.json]
  --keys-path=<value>    [default: ./keys.js]
  --network=<value>      [default: localnet] network to deploy to from config.json
  --no-rebuild           deploy the wasm bytecode as is.
  --refs-path=<value>    [default: ./refs.json]
  --signer=<value>       [default: test]

DESCRIPTION
  Store code on chain.
```

### `bytecraft contract:updateAdmin CONTRACT ADMIN`

Update the admin of a contract.

```
USAGE
  $ bytecraft contract:updateAdmin [CONTRACT] [ADMIN] [--signer <value>] [--network <value>] [--config-path <value>]
    [--refs-path <value>] [--keys-path <value>] [--instance-id <value>]

FLAGS
  --config-path=<value>  [default: config.json]
  --instance-id=<value>  [default: default]
  --keys-path=<value>    [default: keys.js]
  --network=<value>      [default: localnet] network to deploy to from config.json
  --refs-path=<value>    [default: refs.json]
  --signer=<value>       [default: test]

DESCRIPTION
  Update the admin of a contract.
```

### `bytecraft deploy CONTRACT`

Build wasm bytecode, store code on chain and instantiate.

```
USAGE
  $ bytecraft deploy [CONTRACT] [--signer <value>] [--network <value>] [--no-rebuild] [--instance-id
    <value>] [--admin-address <value>] [--config-path <value>] [--refs-path <value>] [--keys-path <value>]

FLAGS
  --admin-address=<value>  set custom address as contract admin to allow migration.
  --config-path=<value>    [default: ./config.json]
  --instance-id=<value>    [default: default] enable management of multiple instances of the same contract
  --keys-path=<value>      [default: ./keys.js]
  --network=<value>        [default: localnet] network to deploy to from config.json
  --no-rebuild             deploy the wasm bytecode as is.
  --refs-path=<value>      [default: ./refs.json]
  --signer=<value>         [default: test]

DESCRIPTION
  Build wasm bytecode, store code on chain and instantiate.
```

### `bytecraft help [COMMAND]`

Display help for bytecraft

```
USAGE
  $ bytecraft help [COMMAND] [--all]

ARGUMENTS
  COMMAND  command to show help for

FLAGS
  --all  see all commands in CLI

DESCRIPTION
  display help for bytecraft
```

### `bytecraft new NAME`

Create new DApp from template.

```
USAGE
  $ bytecraft new [NAME] [--path <value>] [--version <value>] [--authors <value>]

FLAGS
  --authors=<value>  [default: OKC <okc@okg.com>]
  --path=<value>     [default: .] Path to create the workspace
  --version=<value>  [default: 1.0]

DESCRIPTION
  Create new DApp from template.

EXAMPLES
  $ bytecraft new awesome-dapp

  $ bytecraft new awesome-dapp --path path/to/dapp

  $ bytecraft new awesome-dapp --path path/to/dapp --authors "ExampleAuthor<example@email.domain>"
```

### `bytecraft task:new [TASK]`

Create new task

```
USAGE
  $ bytecraft task:new [TASK]

DESCRIPTION
  create new task
```

### `bytecraft task:run [TASK]`

Run predefined task

```
USAGE
  $ bytecraft task:run [TASK] [--signer <value>] [--network <value>] [--config-path <value>] [--refs-path
    <value>] [--keys-path <value>]

FLAGS
  --config-path=<value>  [default: config.json]
  --keys-path=<value>    [default: keys.js]
  --network=<value>      [default: localnet]
  --refs-path=<value>    [default: refs.json]
  --signer=<value>       [default: test]

DESCRIPTION
  run predefined task
```

### `bytecraft test CONTRACT-NAME`

Runs unit tests for a contract directory.

```
USAGE
  $ bytecraft test [CONTRACT-NAME] [--no-fail-fast]

FLAGS
  --no-fail-fast  Run all tests regardless of failure.

DESCRIPTION
  Runs unit tests for a contract directory.

EXAMPLES
  $ bytecraft test counter

  $ bytecraft test counter --no-fail-fast
```

### `bytecraft test:coverage [CONTRACT-NAME]`

Runs unit tests for a contract directory with coverage.

```
USAGE
  $ bytecraft test:coverage [CONTRACT-NAME]

DESCRIPTION
  Runs unit tests for a contract directory.

EXAMPLES
  $ bytecraft test:coverage

  $ bytecraft test:coverage counter
```

### `bytecraft wallet:new`

Generate a new wallet to use for signing contracts

```
USAGE
  $ bytecraft wallet:new [--outfile <value>]

FLAGS
  --outfile=<value>  absolute path to store the mnemonic key to. If omitted, output to stdout

DESCRIPTION
  Generate a new wallet to use for signing contracts
```

<!-- commandsstop -->
