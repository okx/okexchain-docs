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

### Install Bytecraft

Now that you have completed the initial setup, you can install bytecraft using the procedure described below.

Install the bytecraft package globally.

```sh
npm install -g @okexchain/bytecraft
```

## Use Bytecraft with OKTC testnet


### Getting Started

Now that you have installed bytecraft,  generate your first smart contract using the procedure described below.

1. Generate your smart contract templates with `bytecraft new` command.

```sh
bytecraft new my-wasm-dapp
```

2. After the project is generated and all necessary Node dependencies are installed, navigate to the new `my-wasm-dapp` directory to interact with your app.

```sh
cd my-wasm-dapp
```

### Project Structure

The `bytecraft new` command generates a project that contains a template smart contract, which is named after the specified app name, `my-wasm-dapp`. Other supporting files are generated to provide further functionality. You may view the project structure below.

```
.
├── contracts              # the smart contract directory
│   ├── my-wasm-dapp      # template smart contract
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

As you can see the `config.json` file in the project, There predefined three networks for you:

```json
{
  "_global": {
    "_base": {
      "instantiation": {
        "instantiateMsg": {
          "count": 0
        }
      }
    }
  },
  "mainnet": {
    "_connection": {
      "chainID": "exchain-66",
      "URL": "https://exchaintmrpc.okex.org"
    }
  },
  "testnet": {
    "_connection": {
      "chainID": "exchain-65",
      "URL": "https://exchaintesttmrpc.okex.org"
    }
  },
  "localnet": {
    "_connection": {
      "chainID": "exchain-67",
      "URL": "http://localhost:26657"
    }
  }
}

```

To deploy your new my-wasm-dapp smart contract on OKTC testnet, run the following command in the terminal with extral flag `--network testnet`.

```sh
 bytecraft deploy my-wasm-dapp --signer test --network testnet
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

bytecraft > wallets.alice.address
'ex1g0xzwvmm7mwxck5fw9y8pygq98gep9lx6m2l6e'
```

Then, exit the bytecraft console and deploy the `my-wasm-dapp` smart contract to testnet with the `test` account as the signer.

```sh
bytecraft deploy my-wasm-dapp --signer test --network testnet
```

After deployment, the `refs.json` file will be updated in the project directory. These files contain references to all contracts inside of your project which have been stored on any exchain network. This information is utilized by bytecraft's utility functions. An example of `refs.json` can be found below:

```json
{
  "localnet": {
    "counter": {
      "codeId": "1",
      "contractAddresses": {
        "default": "ex10qt8wg0n7z740ssvf3urmvgtjhxpyp74hxqvqt7z226gykuus7equ3f4hk"
      }
    }
  },
  "testnet": {
    "my-wasm-dapp": {
      "codeId": "18160",
      "contractAddresses": {
        "default": "ex1wr6vc3g4caz9aclgjacxewr0pjlre9wl2uhq73rp8mawwmqaczsq6p3y6f"
      }
    }
  }
}
```

### Run Contract Functions with Bytecraft

Once you have successfully deployed your project, you can interact with the deployed contract and the underlying blockchain by utilizing functions defined in the `lib/index.js` file. You may also create your own abstractions in this file for querying or executing transactions. 

You can call the functions defined in `lib/index.js` inside of the `bytecraft console`. An example using the template counter smart contract is shown below.

```sh
bytecraft console --signer test --network testnet
bytecraft > await lib.getCount()
{ count: 0 }
bytecraft > await lib.increment()
bytecraft > await lib.getCount()
{ count: 1 }
```

### Creating Tasks

You can utilize the functions available inside of the `lib/index.js` file to create tasks. Tasks are utilized in order to automate the execution of sequential functions or commands. An example task is provided for you in the `tasks/example-with-lib.js` file in your project directory.

```js
// tasks/example-with-lib.js

import { Env, task } from "@okexchain/bytecraft";
import Lib from '../lib';

task(async (env: Env) => {
  const lib = new Lib(env);
  console.log("count 1 = ", await lib.getCount());
  
  await lib.increment();
  console.log("count 2 = ", await lib.getCount());
});

```

To run the example task shown above, which is located in the `tasks/example-with-lib.js` file, run the following command in the terminal.

```sh
bytecraft task:run example-with-lib --signer test --network testnet
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
    // First deploy the counter smart contract.
    await deploy.storeCode('mydapp', defaultWallet);
    const accounts = await defaultWallet.getAccounts()
    const counterAddress = await deploy.instantiate(
        // Contract name
        'mydapp',
        // Signer
        defaultWallet,
        {
            // Contract admin
            admin: accounts[0].address,
            init: {count: 1},
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

It is possible to tell ByteCraft to use a custom deploy task instead of the default deploy process. To do this, add the following to the `_global` section in `config.json`:

```json
"contracts": {
  "counter": {
    "deployTask": "deploy_counter"
  }
}
```

Now instead of running `bytecraft task:run deploy_counter --signer test --network testnet` you can run `bytecraft deploy counter --signer test --network testnet`.

## Use Bytecraft with OKTC mainnet

### Getting Started

Now that you have installed bytecraft,  generate your first smart contract using the procedure described below.

1. Generate your smart contract templates with `bytecraft new` command.

```
bytecraft new my-wasm-dapp
```

1. After the project is generated and all necessary Node dependencies are installed, navigate to the new `my-wasm-dapp` directory to interact with your app.

```
cd my-wasm-dapp
```

### Project Structure

The `bytecraft new` command generates a project that contains a template smart contract, which is named after the specified app name, `my-wasm-dapp`. Other supporting files are generated to provide further functionality. You may view the project structure below.

```
.
├── contracts              # the smart contract directory
│   ├── my-wasm-dapp      # template smart contract
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

As you can see the `config.json` file in the project, There predefined three networks for you:

```
{
  "_global": {
    "_base": {
      "instantiation": {
        "instantiateMsg": {
          "count": 0
        }
      }
    }
  },
  "mainnet": {
    "_connection": {
      "chainID": "exchain-66",
      "URL": "https://exchaintmrpc.okex.org"
    }
  },
  "testnet": {
    "_connection": {
      "chainID": "exchain-65",
      "URL": "https://exchaintesttmrpc.okex.org"
    }
  },
  "localnet": {
    "_connection": {
      "chainID": "exchain-67",
      "URL": "http://localhost:26657"
    }
  }
}

```

To deploy your new my-wasm-dapp smart contract on OKTC mainnet, run the following command in the terminal with extral flag `--network mainnet`.

```
 bytecraft deploy my-wasm-dapp --signer test --network mainnet
```

In this case, `test`, as our signer. The signer account will be responsible for paying the gas fee associated with deploying the contract to the exchain blockchain and will be assigned as the owner of the project.

The network is specified with `mainnet`. your  contract will be deployed to OKTC `mainnet`

### Deploying on OKTC Testnet

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

bytecraft > wallets.alice.address
'ex1g0xzwvmm7mwxck5fw9y8pygq98gep9lx6m2l6e'
```

Then, exit the bytecraft console and deploy the `my-wasm-dapp` smart contract to testnet with the `test` account as the signer.

```
bytecraft deploy my-wasm-dapp --signer test --network mainnet
```

After deployment, the `refs.json` file will be updated in the project directory. These files contain references to all contracts inside of your project which have been stored on any exchain network. This information is utilized by bytecraft's utility functions. An example of `refs.json` can be found below:

```
{
  "localnet": {
    "counter": {
      "codeId": "1",
      "contractAddresses": {
        "default": "ex10qt8wg0n7z740ssvf3urmvgtjhxpyp74hxqvqt7z226gykuus7equ3f4hk"
      }
    }
  },
  "testnet": {
    "my-wasm-dapp": {
      "codeId": "18160",
      "contractAddresses": {
        "default": "ex1wr6vc3g4caz9aclgjacxewr0pjlre9wl2uhq73rp8mawwmqaczsq6p3y6f"
      }
    }
  }
}
```

### Run Contract Functions with Bytecraft

Once you have successfully deployed your project, you can interact with the deployed contract and the underlying blockchain by utilizing functions defined in the `lib/index.js` file. You may also create your own abstractions in this file for querying or executing transactions. 

You can call the functions defined in `lib/index.js` inside of the `bytecraft console`. An example using the template counter smart contract is shown below.

```
bytecraft console --signer test --network mainnet
bytecraft > await lib.getCount()
{ count: 0 }
bytecraft > await lib.increment()
bytecraft > await lib.getCount()
{ count: 1 }
```

### Creating Tasks

You can utilize the functions available inside of the `lib/index.js` file to create tasks. Tasks are utilized in order to automate the execution of sequential functions or commands. An example task is provided for you in the `tasks/example-with-lib.js` file in your project directory.

```
// tasks/example-with-lib.js

import { Env, task } from "@okexchain/bytecraft";
import Lib from '../lib';

task(async (env: Env) => {
  const lib = new Lib(env);
  console.log("count 1 = ", await lib.getCount());
  
  await lib.increment();
  console.log("count 2 = ", await lib.getCount());
});

```

To run the example task shown above, which is located in the `tasks/example-with-lib.js` file, run the following command in the terminal.

```
bytecraft task:run example-with-lib --signer test --network mainnet
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
    // First deploy the counter smart contract.
    await deploy.storeCode('mydapp', defaultWallet);
    const accounts = await defaultWallet.getAccounts()
    const counterAddress = await deploy.instantiate(
        // Contract name
        'mydapp',
        // Signer
        defaultWallet,
        {
            // Contract admin
            admin: accounts[0].address,
            init: {count: 1},
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

It is possible to tell ByteCraft to use a custom deploy task instead of the default deploy process. To do this, add the following to the `_global` section in `config.json`:

```
"contracts": {
  "counter": {
    "deployTask": "deploy_counter"
  }
}
```

Now instead of running `bytecraft task:run deploy_counter --signer test --network mainnet` you can run `bytecraft deploy counter --signer test --network mainnet`.

## Migrating CosmWasm Contracts

On OKTC, it is possible to initialize a contract as migratable. This functionality allows the administrator to upload a new version of the contract and then send a migrate message to move to the new code. Contracts that have been deployed before implementing the following changes will not be able to be migrated and implemented changes will only be realized when redeploying the contract.

### Adding MigrateMsg to the Contract

In order for a contract to be migratable, it must be able to handle a `MigrateMsg` transaction.

To implement support for `MigrateMsg`, add the message to the `msg.rs` file. To do so, navigate to `msg.rs` and place the following code just above the `InstantiateMsg` struct.

```rust
#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]
pub struct MigrateMsg {}
```

With `MigrateMsg` defined, update the `contract.rs` file. First, update the import from `crate::msg` to include `MigrateMsg`.

```rust
use crate::msg::{CountResponse, ExecuteMsg, InstantiateMsg, QueryMsg, MigrateMsg};
```

Next, add the following method above `instantiate`.

```rust
#[cfg_attr(not(feature = "library"), entry_point)]
pub fn migrate(_deps: DepsMut, _env: Env, _msg: MigrateMsg) -> StdResult<Response> {
    Ok(Response::default())
}
```

### Migrating the Contract

Adding the MigrateMsg to the smart contract allows the contract's administrator to migrate the contract in the future.  When we deploy our contract, the wallet address of the signer will be automatically designated as the contract administrator.  In the following command, the contract is deployed with the preconfigured Localnet `test` wallet as the signer and administrator of our counter contract. 

```sh
bytecraft deploy counter --signer test
```

If you decide to make changes to the deployed contract, you can migrate to the updated code by executing the following command.

```sh
bytecraft contract:migrate counter --signer test
```

If you would like to specify the address of the desired administrator for your smart contract, you may utilize the `--admin-address` flag in the deploy command followed by the wallet address of the desired administrator.

```sh
bytecraft deploy counter --signer test --admin-address <insert-admin-wallet-address>
```

## ByteCraft console

Bytecraft console provide a javascript repl environment, you can interact with the deployed contract and the underlying blockchain by utilizing functions defined in the `lib/index.js` file. You may also create your own abstractions in this file for querying or executing transactions. 

You can call the functions defined in `lib/index.js` inside of the `bytecraft console`. An example using the template counter smart contract is shown below.

```sh
bytecraft console --signer test --network testnet
bytecraft > await lib.getCount()
{ count: 0 }
bytecraft > await lib.increment()
bytecraft > await lib.getCount()
{ count: 1 }
```

You may also specify which network you would like to interact with by utilizing the `--network` flag with the `bytecraft console` command.

```
bytecraft console --network NETWORK
```


## ByteCraft Commands

Here are details about bytecarft commands you can read when you are confused about using it

<!-- commands -->

* [`bytecraft console`](#bytecraft-console)
* [`bytecraft contract:build CONTRACT`](#bytecraft-contractbuild-contract)
* [`bytecraft contract:generateClient CONTRACT`](#bytecraft-contractgenerateclient-contract)
* [`bytecraft contract:instantiate CONTRACT`](#bytecraft-contractinstantiate-contract)
* [`bytecraft contract:migrate CONTRACT`](#bytecraft-contractmigrate-contract)
* [`bytecraft contract:new NAME`](#bytecraft-contractnew-name)
* [`bytecraft contract:optimize CONTRACT`](#bytecraft-contractoptimize-contract)
* [`bytecraft contract:store CONTRACT`](#bytecraft-contractstore-contract)
* [`bytecraft contract:updateAdmin CONTRACT ADMIN`](#bytecraft-contractupdateadmin-contract-admin)
* [`bytecraft deploy CONTRACT`](#bytecraft-deploy-contract)
* [`bytecraft help [COMMAND]`](#bytecraft-help-command)
* [`bytecraft new NAME`](#bytecraft-new-name)
* [`bytecraft task:new [TASK]`](#bytecraft-tasknew-task)
* [`bytecraft task:run [TASK]`](#bytecraft-taskrun-task)
* [`bytecraft test CONTRACT-NAME`](#bytecraft-test-contract-name)
* [`bytecraft test:coverage [CONTRACT-NAME]`](#bytecraft-testcoverage-contract-name)
* [`bytecraft wallet:new`](#bytecraft-walletnew)

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

_See code: [src/commands/console.ts](https://github.com/okx/bytecraft/blob/v0.1.7/src/commands/console.ts)_

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

_See code: [src/commands/contract/build.ts](https://github.com/okx/bytecraft/blob/v0.1.7/src/commands/contract/build.ts)_

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

_See code: [src/commands/contract/generateClient.ts](https://github.com/okx/bytecraft/blob/v0.1.7/src/commands/contract/generateClient.ts)_

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

_See code: [src/commands/contract/instantiate.ts](https://github.com/okx/bytecraft/blob/v0.1.7/src/commands/contract/instantiate.ts)_

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

_See code: [src/commands/contract/migrate.ts](https://github.com/okx/bytecraft/blob/v0.1.7/src/commands/contract/migrate.ts)_

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

_See code: [src/commands/contract/new.ts](https://github.com/okx/bytecraft/blob/v0.1.7/src/commands/contract/new.ts)_

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

_See code: [src/commands/contract/optimize.ts](https://github.com/okx/bytecraft/blob/v0.1.7/src/commands/contract/optimize.ts)_

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

_See code: [src/commands/contract/store.ts](https://github.com/okx/bytecraft/blob/v0.1.7/src/commands/contract/store.ts)_

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

_See code: [src/commands/contract/updateAdmin.ts](https://github.com/okx/bytecraft/blob/v0.1.7/src/commands/contract/updateAdmin.ts)_

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

_See code: [src/commands/deploy.ts](https://github.com/okx/bytecraft/blob/v0.1.7/src/commands/deploy.ts)_

### `bytecraft help [COMMAND]`

display help for bytecraft

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

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.18/src/commands/help.ts)_

### `bytecraft new NAME`

Create new dapp from template.

```
USAGE
  $ bytecraft new [NAME] [--path <value>] [--version <value>] [--authors <value>]

FLAGS
  --authors=<value>  [default: OKC <okc@okg.com>]
  --path=<value>     [default: .] Path to create the workspace
  --version=<value>  [default: 1.0]

DESCRIPTION
  Create new dapp from template.

EXAMPLES
  $ bytecraft new awesome-dapp

  $ bytecraft new awesome-dapp --path path/to/dapp

  $ bytecraft new awesome-dapp --path path/to/dapp --authors "ExampleAuthor<example@email.domain>"
```

_See code: [src/commands/new.ts](https://github.com/okx/bytecraft/blob/v0.1.7/src/commands/new.ts)_

### `bytecraft task:new [TASK]`

create new task

```
USAGE
  $ bytecraft task:new [TASK]

DESCRIPTION
  create new task
```

_See code: [src/commands/task/new.ts](https://github.com/okx/bytecraft/blob/v0.1.7/src/commands/task/new.ts)_

### `bytecraft task:run [TASK]`

run predefined task

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

_See code: [src/commands/task/run.ts](https://github.com/okx/bytecraft/blob/v0.1.7/src/commands/task/run.ts)_

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

_See code: [src/commands/test.ts](https://github.com/okx/bytecraft/blob/v0.1.7/src/commands/test.ts)_

### `bytecraft test:coverage [CONTRACT-NAME]`

Runs unit tests for a contract directory.

```
USAGE
  $ bytecraft test:coverage [CONTRACT-NAME]

DESCRIPTION
  Runs unit tests for a contract directory.

EXAMPLES
  $ bytecraft test:coverage

  $ bytecraft test:coverage counter
```

_See code: [src/commands/test/coverage.ts](https://github.com/okx/bytecraft/blob/v0.1.7/src/commands/test/coverage.ts)_

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

_See code: [src/commands/wallet/new.ts](https://github.com/okx/bytecraft/blob/v0.1.7/src/commands/wallet/new.ts)_
<!-- commandsstop -->
