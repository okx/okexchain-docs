# Bytecraft and Sylvia
## Bytecraft
### Introduction
[Bytecraft](https://github.com/okx/bytecraft) is a WASM smart contract development scaffold, similar to hardhat, the EVM development tool. It can help developers quickly create WASM contract development templates, speed up contract development, deployment and testing.
### Installation
#### Environment installation
Install the rust environment, [Node 16](https://nodejs.org/en/download) and Node Package Manager (npm).
> Note: Node 16 is required here. If the version is different, you can use n or npv to switch the Node version.
```
// Install the rust
rustup default stable

// Add support for WASM compilation
rustup target add wasm32-unknown-unknown

// Install the necessary dependent libraries to generate contracts.
cargo install cargo-run-script
```

#### Install   bytecraft
```
// Install  bytecraft
npm install -g @okexchain/bytecraft
```

#### Create a new project
```
// Create a new folder and open the terminal.
mkdir bytecraftTest

// Go to the specified directory
cd bytecraftTest

// Create a new project
bytecraft new my-wasm-dapp

// go to the specified directory
cd my-wasm-dapp
```
The contract directory is as follows:
```
my-wasm-dapp
├─ .gitignore
├─ README.md
├─ config.json // Configure network connections and contract deployment related
├─ contracts  // Smart contract directory
│  └─ my-wasm-dapp  // Smart contract template
│     ├─ .cargo
│     │  └─ config
│     ├─ Cargo.lock
│     ├─ Cargo.toml  //Configuration file for rust contract
│     ├─ examples
│     │  └─ schema.rs  // Used to generate schema directory
│     ├─ interfaces // interfaces directory
│     │  └─ cw1
│     │     ├─ Cargo.toml
│     │     └─ src
│     │        └─ lib.rs
│     └─ src   //  Contract code directory
│        ├─ contract.rs
│        ├─ cw1.rs
│        ├─ error.rs
│        ├─ lib.rs
│        ├─ multitest.rs
│        ├─ responses.rs
│        └─ whitelist.rs
├─ keys.js  // Private key saved file
├─ lib  // Pre-defined task and console related functions
│  └─ index.ts
├─ package-lock.json
├─ package.json
├─ refs.json  // Deployed smart contracts and related references
└─ tasks  //Pre-defined tasks
└─ template.ts
```

#### Compile contract

Similar to Solidity, Rust is a statically typed language and requires compilation to determine variable types.
```
USAGE
$ bytecraft contract:build [CONTRACT] [--config-path <value>]

FLAGS
--config-path=<value>  [default: ./config.json]

DESCRIPTION
Build wasm bytecode.

//example
$ bytecraft contract:build my-wasm-dapp
```
#### Optimize contract

Wasm contracts have optimization options. Because the wasm virtual machine supports uploading contract files up to 800K at most. If it exceeds this limit, it will fail. Bytecraft has optimization functions to help optimize the size of uploaded contract files.
> note：The optimization operation requires opening Docker. Essentially, the original wasm file is taken into Docker for optimized compilation.
```
USAGE
$ bytecraft contract:optimize [CONTRACT] [--config-path <value>]

FLAGS
--config-path=<value>  [default: ./config.json]

DESCRIPTION
Optimize wasm bytecode.

//example
$ bytecraft contract:optimize my-wasm-dapp
```
#### Upload contract

Wasm contracts need to upload the contract binary file before deployment, which consumes gas. After uploading the contract, a codeId will be generated. This Id is an accumulated id across the network. If there are contract functions with the same requirements, you can deploy and reuse directly according to the codeId.
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

//example
$ bytecraft contract:store my-wasm-dapp
```
#### Deploy contract
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

//for example
bytecraft contract:instantiate my-wasm-dapp
```
If a single contract is deployed, all operations (compilation, optimization, uploading and deployment) can be performed with one command.
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

//example
$ bytecraft deploy my-wasm-dapp --signer test --network testnet
```
#### Custom script deployment
The above deployment method is very convenient when using a single contract, but when encountering multiple contracts, it is still troublesome to upload and deploy at one time. Bytecraft has task functionality that can execute custom scripts.
```
// create task
USAGE
$ bytecraft task:new [TASK]

DESCRIPTION
create new task


//run predefined task
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

## Sylvia
### Introduction

[Sylvia](https://cosmwasm.github.io/sylvia-book/index.html) builds a contract development framework on this basis and encapsulates some functions and macros.  It can help contract developers quickly develop contracts.


The advantages of sylvia:
- Can perform a batch of complex operations, such as automatically converting variable definitions to snake case naming, serialization and deserialization, simplifying the user experience.
- Implements the dispatch function, omitting the definition of the entry function, automatically matching the function you need to call for you.
- Added interfaces to reduce redundant code references


### Installation
#### Build environment
```
//Add reference packages. If it fails, you can switch to git installation （add sylvia = {git = "https://github.com/CosmWasm/sylvia.git"} in cargo.toml）
$ cargo add sylvia@0.3.1

//Install the Sylvia dependencies
$ cargo add sylvia-derive@0.3.1

// Pull the dependent packages in the configuration file
$ cargo build
```
#### Functional introduction

- **Macro command overview**

| Macro command |  Description|
| --- | --- |
| `#[contract]` |Define contract|
| `#[msg(instantiate)]`|Define initialization function|
| `#[msg(exec)]`|Define executable function|
| `#[msg(query)]`|Define query function|
| `#[interface]`|Define contract interface|
| `#[error(_)]`|Define Custom error|
| `#[messages(cw1 as Cw1)]`|Reuse implemented contracts|
| `#[msg(migrate)]`|Migrate contract|

- **Example 1: Initialize contract**
```
take initializing the contract as an example

// Official contract initialization
pub fn instantiate(
_deps: DepsMut,
_env: Env,
_info: MessageInfo,
_msg: Empty,
)


// Using sylvia
#[contract]       //The first macro definition initializes the contract state.
impl AdminContract {
#[msg(instantiate)]     //The second macro definition generates a large number of template files about initializing contract message generation and sending.
pub fn instantiate(&self,
_ctx: (DepsMut, Env, MessageInfo)
) -> StdResult<Response> {
Ok(Response::new())
}
}
```

- **Example 2: Execute function**
```
Taking the transfer function of a 20 token contract as an example

// origin
#[cfg_attr(not(feature = "library"), entry_point)]
pub fn execute(
deps: DepsMut,
env: Env,
info: MessageInfo,
msg: ExecuteMsg,
) -> Result<Response, ContractError> {
match msg {
ExecuteMsg::Transfer { recipient, amount } => {
execute_transfer(deps, env, info, recipient, amount)
}
ExecuteMsg::Burn { amount } => execute_burn(deps, env, info, amount),
ExecuteMsg::Send {
contract,
amount,
msg,
} => execute_send(deps, env, info, contract, amount, msg),
ExecuteMsg::Mint { recipient, amount } => execute_mint(deps, env, info, recipient, amount),
}




// After importing the sylvia library, there is no entry function to match the selection. The function property is defined as an executable function directly using the macro #[msg(exec)]
#[msg(exec)]
    fn transfer(
        &self,
        ctx: ExecCtx,
        recipient: String,
        amount: Uint128,
    ) -> Result<Response, ContractError> {
        ensure!(
            amount != Uint128::zero(),
            ContractError::InvalidZeroAmount {}
        );

        let rcpt_addr = ctx.deps.api.addr_validate(&recipient)?;

        self.balances
            .update(ctx.deps.storage, &ctx.info.sender, |balance| {
                Ok::<_, StdError>(balance.unwrap_or_default().checked_sub(amount)?)
            })?;
        self.balances
            .update(ctx.deps.storage, &rcpt_addr, |balance| {
                Ok::<_, StdError>(balance.unwrap_or_default().checked_add(amount)?)
            })?;

        let res = Response::new()
            .add_attribute("action", "transfer")
            .add_attribute("from", ctx.info.sender)
            .add_attribute("to", recipient)
            .add_attribute("amount", amount);
        Ok(res)
    }
```


## bytecraft and sylvia combined example  
https://github.com/okx/wasm-sylvia-template

(A whitelist sample contract using the Sylvia programming framework and bytecraft’s compilation, deployment and task testing) 
