# OKC wasm instruction manual
This manual will mainly discuss how to use CLI commands on OKC for all actions regarding wasm smart contracts.
## What is wasm smart contract?
Wasm smart contracts are smart contracts that operated on wasm virtual machine. More advanced than EVM, wasm virtual machine possesses the following advantages:
1. Faster speed, lower gas consumption
2. Supports more complex contracts
3. Supports Rust, Go, C/C++ and other popular programming languages for developing contracts
4. Cosmos IBC Can seamlessly connect with Cosmos IBC
> Currently speaking, Rust is the main programming language used for developing wasm contracts
## Environment configuration
### Install essential tools
   In this section, we will discuss how to set up our machine and install the prerequisites for developing, deploying and interacting with smart contracts on OKC chain.
#### Install OKC
   Make sure you have the OKC application installed, [installation instructions](https://okc-docs.readthedocs.io/en/latest/getting-start/install-oec.html).
#### Install Rust
   Install Rust environment (Linux or MacOS), [installation instructions](https://rustup.rs/).
   After installing Rust, you need to confirm your machine has wasm32 target
```Bash
rustup default stable
cargo version
# If this is lower than 1.55.0+, update
rustup update stable

rustup target list --installed
rustup target add wasm32-unknown-unknown
```   

#### Install command line tool
```Bash
#This article only shows an example of the ubuntu environment, centos installs it by itself
apt install jq curl
```

### Configure network
You can choose to test on mainnet, testnet or local testnet.
#### Mainnet
Mainnet does not need to set up nodes; you can directly access RPC node services provided by OKC for developing OKC wasm contracts. If you need to build your own test network node, please refer to [mainnnet node set up](https://okc-docs.readthedocs.io/en/latest/getting-start/join-oec-mainnet.html).

Configure your exchaincli
```Bash
exchaincli config chain-id exchain-65
exchaincli config trust-node true
# If you are building your own node, please refer to the following commands
# exchaincli config node <host>:<port>
exchaincli config node https://exchaintmrpc.okex.org
```
#### Testnet
Testnet does not need to set up nodes; you can directly access RPC node services provided by OKC for developing OKC wasm contracts. If you need to build your own test network node, please refer to [testnet node set up](https://okc-docs.readthedocs.io/en/latest/getting-start/join-oec-testnet.html).

Configure your exchaincli
```Bash 
exchaincli config chain-id exchain-66
exchaincli config trust-node true

# If you are building your own node, please refer to the following commands
# exchaincli config node <host>:<port>
exchaincli config node https://exchaintesttmrpc.okex.org
```
#### Local testnet
Download the OKC source code and set up the OKC local testnet through the script we provide.

```Bash
git clone https://github.com/okex/exchain.git
cd exchain/dev
sh start.sh
```
With start.sh, there is no need to configure `exchaincli`

**Note: the following actions are all done with the local testnet, if you would like to use mainnet/testnet, please modify `--from` flag.**
### Set up IDE
We need a decent IDE in order to use Rust for developing smart contracts. We strongly recommend using the following development environments; along with the Rust plugin, they provide users with a beginner friendly program language learning environment.

Use the standard IDE and Rust plugin for developing OKC wasm contracts

| IDE | Plugin | Description |
| :-----| :------------------- | :----: |
| [VSCode](https://code.visualstudio.com/download) | [RLS for VSCode](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust) | Recommended to use |
| [IntelliJ IDEA community version](https://www.jetbrains.com/idea/download/) | [IntelliJ Rust](https://intellij-rust.github.io/) | Recommended to use if you're an IntelliJ product user


## Deploying CW20 taught by hand
[CW20's](https://github.com/CosmWasm/cw-plus/tree/main/packages/cw20) contract standard is similar to that of ERC20, and [cw20-base](https://github.com/CosmWasm/cw-plus/tree/main/contracts/cw20-base) is a basic implementation of the CW20 standard. Next, we will take the cw20-base contract as an example to introduce the entire process of smart contracts on OKCWasm from compilation to deployment and interaction. Content is applicable to all learners, regardless of experience with Rust and Go. The goal of this section is to provide easy to understand instructions and a first-hand experience for first-time users with the following step-by-step guide.
- **Compile contract**: demonstrate how to download and compile wasm bytecode file from smart contract code.
- **Optimize compilation**: demonstrate how to optimize a wasm bytecode file to the most suitable size.
- **Upload contract code**: demonstrate how to upload compiled contract code (wasm file) to blockchain.
- **Initialize contract**: demonstrate how to initialize a contract according to its contract code.
- **Call contract**: demonstrate how to deploy contract to testnet, instantiate and execute smart contract functions.
- **Query contract**: demonstrate how to query contract's internal state.  


  You may have already noticed some areas of smart contract compilation we have yet to mention in this section. This section has been deliberately tailored to make it as easy to understand as possible, avoiding the risk of falling victim to the hardships of smart contract development. If you want to learn more about OKCWasm contract code development, you can refer to [CosmWasm](https://docs.cosmwasm.com/docs/1.0/getting-started/intro) document, because OKCWasm is developed based on CosmWasm.

### Contract compliation
1. Pull cw20-base contract code offered by the official directory
```Bash
# You are now in 'exchain/dev' derectory
git clone https://github.com/CosmWasm/cw-plus.git
cd cw-plus/contracts/cw20-base
```
2. Compile contract bytecode and schema file (schema is similar to Ethereum's abi)
```Bash
# compile to wasm code
RUSTFLAGS="-C link-arg=-s" cargo wasm
# output is cw-plus/target/wasm32-unknown-unknown/release/cw20_base.wasm

# compile the schema, it shows all APIs and paramters of the code
cargo schema
# output is cw-plus/contracts/cw20-base/schema/cw20-base.json
```
The final deployment and interaction of the contract only requires `cw20_base.wasm` and `cw20-base.json`.  
> If the size of the wasm file compiled by your own contract through the above operations is too large, it will consume a high amount of gas when uploading the contract code. So in order to reduce gas costs, you need to use the optimized compiler (hyperlink in subsection below) wasm file.

### Optimized compiler (optional)
To keep gas costs down, the binary size should be as small as possible. This will lower deployment costs and lower the cost per interaction. You can use [rust-optimizer](https://github.com/CosmWasm/rust-optimizer) to optimize the production code. Generate repeatable builds of OKCWasm smart contracts. This means that a third party can verify that the contract is actually the declared code.

**Note: You need to install [Docker](https://www.docker.com/) before you can use rust-optimizer.**

Navigate to the project root directory and run the following commands:
```Bash
docker run --rm -v "$(pwd)":/code \
--mount type=volume,source="$(basename "$(pwd)")_cache",target=/code/target \
--mount type=volume,source=registry_cache,target=/usr/local/cargo/registry \
cosmwasm/rust-optimizer:0.12.6
```
After compilation optimization is complete, the optimized wasm file will be outputted to ./artifacts/cw20-base.wasm
### Upload contract code
```Bash
# upload the wasm code to OKC and you will get a code id.

exchaincli tx wasm store ./cw-plus/target/wasm32-unknown-unknown/release/cw20_base.wasm --from captain --fees 0.001okt --gas 3000000 -b block -y
```
You can query tx by hash to get the transaction receipt. The code id is `1` in the transaction receipt.

```Bash
{
  "height": "37",
  "txhash": "4E1363924850071645B4828BC8EA0928EC5E189AEF5D49401E49BB63A59276C3",
  "data": "0802",
  "raw_log": "[{\"msg_index\":0,\"log\":\"\",\"events\":[{\"type\":\"message\",\"attributes\":[{\"key\":\"action\",\"value\":\"store-code\"},{\"key\":\"module\",\"value\":\"wasm\"},{\"key\":\"sender\",\"value\":\"ex1h0j8x0v9hs4eq6ppgamemfyu4vuvp2sl0q9p3v\"}]},{\"type\":\"store_code\",\"attributes\":[{\"key\":\"code_id\",\"value\":\"2\"}]}]}]",
  "logs": [
    {
      "msg_index": 0,
      "log": "",
      "events": [
        {
          "type": "message",
          "attributes": [
            {
              "key": "action",
              "value": "store-code"
            },
            {
              "key": "module",
              "value": "wasm"
            },
            {
              "key": "sender",
              "value": "ex1h0j8x0v9hs4eq6ppgamemfyu4vuvp2sl0q9p3v"
            }
          ]
        },
        {
          "type": "store_code",
          "attributes": [
            {
              "key": "code_id",
              "value": "1"
            }
          ]
        }
      ]
    }
  ],
  "gas_wanted": "3000000",
  "gas_used": "2040918"
}
```
### Initialize contract
After uploading the contract code, it only saves the code on the blockchain without actually initializing a specific contract. Developers can use the code previously uploaded to the chain and the corresponding initialization parameters to initialize a wasm smart contract and get a contract address.
```Bash
# Instantiate a contract with the uploaded code. We can use the code we upload in previous step.
# e.g.
#    code_id=1
#    instantiate_message='{"decimals":10,"initial_balances":[{"address":"ex1h0j8x0v9hs4eq6ppgamemfyu4vuvp2sl0q9p3v","amount":"100000000"}],"name":"my test token", "symbol":"mtt"}'
#    --label=test (label can be any human readable string)
#    --admin=ex1h0j8x0v9hs4eq6ppgamemfyu4vuvp2sl0q9p3v (usually same as from)
#    --from=ex1h0j8x0v9hs4eq6ppgamemfyu4vuvp2sl0q9p3v
#    --fees=0.001okt
#    --gas=3000000

exchaincli tx wasm instantiate 1 '{"decimals":10,"initial_balances":[{"address":"ex1h0j8x0v9hs4eq6ppgamemfyu4vuvp2sl0q9p3v","amount":"100000000"}],"name":"my test token", "symbol":"mtt"}' --label test --admin ex1h0j8x0v9hs4eq6ppgamemfyu4vuvp2sl0q9p3v --from ex1h0j8x0v9hs4eq6ppgamemfyu4vuvp2sl0q9p3v --fees 0.001okt --gas 3000000 -b block -y
```
What is instantiate message? It is the parameters in JSON type to be used to instantiate the contract. And we can find the schema in `cw20-base.json`.
```Bash 
"instantiate": {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "InstantiateMsg",
  "type": "object",
  "required": [
    "decimals",
    "initial_balances",
    "name",
    "symbol"
  ],
  "properties": {
    "decimals": {
      "type": "integer",
      "format": "uint8",
      "minimum": 0.0
    },
    "initial_balances": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/Cw20Coin"
      }
    },
    "name": {
      "type": "string"
    },
    "symbol": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "definitions": {
    "Binary": {
      "description": "Binary is a wrapper around Vec<u8> to add base64 de/serialization with serde. It also adds some helper methods to help encode inline.\n\nThis is only needed as serde-json-{core,wasm} has a horrible encoding for Vec<u8>",
      "type": "string"
    },
    "Cw20Coin": {
      "type": "object",
      "required": [
        "address",
        "amount"
      ],
      "properties": {
        "address": {
          "type": "string"
        },
        "amount": {
          "$ref": "#/definitions/Uint128"
        }
      },
      "additionalProperties": false
    },
    "Uint128": {
      "description": "A thin wrapper around u128 that is using strings for JSON encoding/decoding, such that the full u128 range can be used for clients that convert JSON numbers to floats, like JavaScript and jq.\n\n# Examples\n\nUse `from` to create instances of this and `u128` to get the value out:\n\n``` # use cosmwasm_std::Uint128; let a = Uint128::from(123u128); assert_eq!(a.u128(), 123);\n\nlet b = Uint128::from(42u64); assert_eq!(b.u128(), 42);\n\nlet c = Uint128::from(70u32); assert_eq!(c.u128(), 70); ```",
      "type": "string"
    }
  }
}
```
The instantiate message has 4 fields:

| Field | Type |  
| :-----| ----: | 
| decimals | integer | 
| initial_balances | Cw20Coin | 
| name | string | 
| symbol | string | 

So instantiate message can be:
```JSON
{"decimals":10,"initial_balances":[{"address":"ex1h0j8x0v9hs4eq6ppgamemfyu4vuvp2sl0q9p3v","amount":"100000000"}],"name":"my test token", "symbol":"mtt"}
``` 

The contract address is `ex14hj2tavq8fpesdwxxcu44rty3hh90vhujrvcmstl4zr3txmfvw9s6fqu27` in transaction receipt.
```JSON

{
  "height": "1543",
  "txhash": "8DECDF535C78880DCA9FFEF625D8B53425DBD70C6E33AD8282B4CDB63882D46E",
  "data": "0A3D65783134686A32746176713866706573647778786375343472747933686839307668756A7276636D73746C347A723374786D6676773973366671753237",
  "raw_log": "[{\"msg_index\":0,\"log\":\"\",\"events\":[{\"type\":\"instantiate\",\"attributes\":[{\"key\":\"_contract_address\",\"value\":\"ex14hj2tavq8fpesdwxxcu44rty3hh90vhujrvcmstl4zr3txmfvw9s6fqu27\"},{\"key\":\"code_id\",\"value\":\"1\"}]},{\"type\":\"message\",\"attributes\":[{\"key\":\"action\",\"value\":\"instantiate\"},{\"key\":\"module\",\"value\":\"wasm\"},{\"key\":\"sender\",\"value\":\"ex1h0j8x0v9hs4eq6ppgamemfyu4vuvp2sl0q9p3v\"}]}]}]",
  "logs": [
    {
      "msg_index": 0,
      "log": "",
      "events": [
        {
          "type": "instantiate",
          "attributes": [
            {
              "key": "_contract_address",
              "value": "ex14hj2tavq8fpesdwxxcu44rty3hh90vhujrvcmstl4zr3txmfvw9s6fqu27"
            },
            {
              "key": "code_id",
              "value": "1"
            }
          ]
        },
        {
          "type": "message",
          "attributes": [
            {
              "key": "action",
              "value": "instantiate"
            },
            {
              "key": "module",
              "value": "wasm"
            },
            {
              "key": "sender",
              "value": "ex1h0j8x0v9hs4eq6ppgamemfyu4vuvp2sl0q9p3v"
            }
          ]
        }
      ]
    }
  ],
  "gas_wanted": "200000",
  "gas_used": "173636"
}
```

### Call contract
After contract initialization is complete, all users can make a call on this contract.
```Bash
# Call the contract with execute message defined in schema json.
# e.g.
#    contract_address=ex1eyfccmjm6732k7wp4p6gdjwhxjwsvje44j0hfx8nkgrm8fs7vqfsfxfyxv
#    execute_message='{"transfer":{"amount":"100","recipient":"ex190227rqaps5nplhg2tg8hww7slvvquzy0qa0l0"}}'
#    --admin=ex1h0j8x0v9hs4eq6ppgamemfyu4vuvp2sl0q9p3v (usually same as from)
#    --from=ex1h0j8x0v9hs4eq6ppgamemfyu4vuvp2sl0q9p3v
#    --fees=0.001okt
#    --gas=3000000

exchaincli tx wasm execute ex14hj2tavq8fpesdwxxcu44rty3hh90vhujrvcmstl4zr3txmfvw9s6fqu27 '{"transfer":{"amount":"100","recipient":"ex190227rqaps5nplhg2tg8hww7slvvquzy0qa0l0"}}' --from captain --fees 0.001okt --gas 3000000 -b block -y
```
There are many methods defined in the cw20-base contract, and each method has a corresponding execute message. Therefore, only the transfer method is used as an example to introduce the contract call.

execute message schema of `transfer` method  in  `cw20-base.json`:
```JSON
{
  "description": "Transfer is a base message to move tokens to another account without triggering actions",
  "type": "object",
  "required": [
    "transfer"
  ],
  "properties": {
    "transfer": {
      "type": "object",
      "required": [
        "amount",
        "recipient"
      ],
      "properties": {
        "amount": {
          "$ref": "#/definitions/Uint128"
        },
        "recipient": {
          "type": "string"
        }
      },
      "additionalProperties": false
    }
  },
  "additionalProperties": false
}
```
One of the `execute` messages is `transfer` message, and transfer message can be:
```JSON
{"transfer":{"amount":"100","recipient":"ex190227rqaps5nplhg2tg8hww7slvvquzy0qa0l0"}}
```
It means send 100 cw20 token to `ex190227rqaps5nplhg2tg8hww7slvvquzy0qa0l0` address.

### Query contract
The contract state usually changes after the contract is called, so it is also possible to verify that the contract logic is correct with this method.
```Bash
# query state of the contract
# e.g. query balance of the given address in cw20 contract
#    contract_address=ex14hj2tavq8fpesdwxxcu44rty3hh90vhujrvcmstl4zr3txmfvw9s6fqu27
#    query_message='{"balance":{"address":"ex190227rqaps5nplhg2tg8hww7slvvquzy0qa0l0"}}'

exchaincli query wasm contract-state smart ex14hj2tavq8fpesdwxxcu44rty3hh90vhujrvcmstl4zr3txmfvw9s6fqu27 '{"balance":{"address":"ex190227rqaps5nplhg2tg8hww7slvvquzy0qa0l0"}}'
```
There are many contract query interfaces defined in cw20-base, each method has a corresponding query_message, so only the balance query is used as an example to introduce the contract query.

query message schema of `balance` query  in  `cw20-base.json`:
```JSON
{
  "description": "Returns the current balance of the given address, 0 if unset.",
  "type": "object",
  "required": [
    "balance"
  ],
  "properties": {
    "balance": {
      "type": "object",
      "required": [
        "address"
      ],
      "properties": {
        "address": {
          "type": "string"
        }
      },
      "additionalProperties": false
    }
  },
  "additionalProperties": false
}
```
So the query message can be:
```str
'{"balance":{"address":"ex190227rqaps5nplhg2tg8hww7slvvquzy0qa0l0"}}'
```
The cw20 balance of `ex190227rqaps5nplhg2tg8hww7slvvquzy0qa0l0` is expected to be 100 since we transferred 100 cw20 token to ex190227rqaps5nplhg2tg8hww7slvvquzy0qa0l0. And the query response will be:

```JSON
{"data":{"balance":"100"}}
```

## Wasm contract upgrade
Supporting contract upgrades is a unique feature of wasm contracts. Developers can call the Migrate method to upgrade contracts. For example, the developer uploads two sets of wasm codes, and the code IDs are divided into 1 and 2. The developer initializes a contract a based on code 1, and the developer can upgrade the underlying code of contract a to code 2, and the contract address remains unchanged. After the upgrade, users can use the calling interface and parameters defined in the schema file of code 2 to call the contract.
```Bash
# migrate contract to new code id, <instantiate_message> is the instantiate message of the new code defined in json schema
# e.g.
#    <contractAddr>=ex1eyfccmjm6732k7wp4p6gdjwhxjwsvje44j0hfx8nkgrm8fs7vqfsfxfyxv
#    <new_code_id>=2
#    <instantiate_message>="" (refer to the schema file of the new code)
#    <from_address_or_name>=ex1h0j8x0v9hs4eq6ppgamemfyu4vuvp2sl0q9p3v
#    <fees>=0.01okt
#    <gas>=3000000

exchaincli tx wasm migrate <contractAddr> <new_code_id> <instantiate_message> --from <from_address_or_name> --fees <fees> --gas <gas> -b block -y
```
## Ownership management for wasm smart contracts
### 1. Who can upload the wasm code?
   It is controlled by the wasm contract deployment whitelist, which can be updated through proposals, and only addresses in the whitelist can upload the wasm code.
### 2. Who can initialize a contract?
   Ownership can usually be specified when uploading a contract, and there are 3 kinds of ownership that can be specified.
1. Anyone can use this code to initialize the contract, which defaults to this owner when no explicit owner is specified
```Bash
exchaincli tx wasm store <path_to_wasm_file> --instantiate-everybody=true --from <from_address_or_name> --fees <fees> --gas <gas> -b block -y
```
2. A specific address can initialize the contract with this code. For example, only `ex1h0j8x0v9hs4eq6ppgamemfyu4vuvp2sl0q9p3vcan` can initialize
```Bash
exchaincli tx wasm store <path_to_wasm_file> --instantiate-only-address=ex1h0j8x0v9hs4eq6ppgamemfyu4vuvp2sl0q9p3v --from <from_address_or_name> --fees <fees> --gas <gas> -b block -y
```
3. No one can use this code to initialize contracts
```Bash
exchaincli tx wasm store <path_to_wasm_file> --instantiate-nobody=true --from <from_address_or_name> --fees <fees> --gas <gas> -b block -y
```
### 3. Who can upgrade a contract?
   When the developer initializes the contract, he/she can usually specify an admin address, which is usually the from address of the initialized contract. Only the admin account can upgrade the contract.
```Bash
# migrate contract to new code id, <instantiate_message> is the instantiate message of the new code defined in json schema
# e.g.
#    <contractAddr>=ex1eyfccmjm6732k7wp4p6gdjwhxjwsvje44j0hfx8nkgrm8fs7vqfsfxfyxv
#    <new_code_id>=2
#    <instantiate_message>="{}"
#    <fees>=0.01okt
#    <gas>=3000000

exchaincli tx wasm migrate <contractAddr> <new_code_id> <instantiate_message> --from <from_address_or_name> --fees <fees> --gas <gas> -b block -y
```
The admin account can be transferred, but only the admin account can initiate this action. After the transfer, the old admin account will lose the admin rights, and the new admin account will gain all the admin rights.
```Bash
# transfer admin to a new address
# e.g.
#    <contractAddr>=ex1eyfccmjm6732k7wp4p6gdjwhxjwsvje44j0hfx8nkgrm8fs7vqfsfxfyxv
#    <new_admin_address>=ex190227rqaps5nplhg2tg8hww7slvvquzy0qa0l0
#    <admin_address>=ex1h0j8x0v9hs4eq6ppgamemfyu4vuvp2sl0q9p3v
#    <fees>=0.01okt
#    <gas>=3000000

exchaincli tx wasm set-contract-admin <contractAddr> <new_admin_address> --from <admin_address> --fees <fees> --gas <gas> -b block -y
```
The admin account can clear the admin account, after which no account can upgrade the contract
```Bash
# clear admin of the contract
# e.g.
#    <contractAddr>=ex1eyfccmjm6732k7wp4p6gdjwhxjwsvje44j0hfx8nkgrm8fs7vqfsfxfyxv
#    <admin_address>=ex1h0j8x0v9hs4eq6ppgamemfyu4vuvp2sl0q9p3v
#    <fees>=0.01okt
#    <gas>=3000000

exchaincli tx wasm clear-contract-admin <contractAddr> --from <admin_address> --fees <fees> --gas <gas> -b block -y
```
In addition, OKC also provides a proposal function, and validators can upgrade contracts and clear the admin account of a specific contract through proposals and voting.

### 4.Who can call a contract?
Generally speaking, anyone can initiate a call to any contract, but the contract upgrade may cause the interface to change and cause the old contract interface to render invalid, so the old interface will no longer be able to be called.
   
Or when there is a loophole in the contract, the validator can add a specific interface of a specific contract to the blacklist through proposals and voting, and subsequent calls to the contract interface will render invalid.
   
## Pin Codes
   The underlying principle of pin operation is to load wasm code into memory. The validator can pin the specified wasm code through the proposal and the specified code ID. Subsequent contract initialization and contract invocation based on the wasm code will significantly reduce gas consumption and achieve faster execution speed. Unpin is the inverse operation of pin. 

## Wasm smart contract developer operational repertoire
### Transaction related actions
#### 1. Upload a wasm binary
```Bash
# upload the wasm code to OKC and you will get a code id.
# e.g.
#    <path_to_wasm_file>=./cw-plus/target/wasm32-unknown-unknown/release/cw20_base.wasm
#    <from_address_or_name>=ex1h0j8x0v9hs4eq6ppgamemfyu4vuvp2sl0q9p3v
#    <fees>=0.01okt
#    <gas>=3000000

exchaincli tx wasm store <path_to_wasm_file> --from <from_address_or_name> --fees <fees> --gas <gas> -b block -y
```
#### 2. Instantiate a wasm contract
```Bash
# Instantiate a contract with the uploaded code. We can use the code we upload in previous step.
# e.g.
#    <code_id>=1
#    <instantiate_message>
#    <label>=test (label can be any human readable string)
#    <admin_address>=ex1h0j8x0v9hs4eq6ppgamemfyu4vuvp2sl0q9p3v (usually same as <from_address_or_name>)
#    <from_address_or_name>=ex1h0j8x0v9hs4eq6ppgamemfyu4vuvp2sl0q9p3v
#    <fees>=0.01okt
#    <gas>=3000000

exchaincli tx wasm instantiate <code_id> <instantiate_message> --label <label> --admin <admin_address> --from <from_address_or_name> --fees <fees> --gas <gas> -b block -y
```
#### 3. Execute a command on a wasm contract
```Bash
# Call the contract with execute message defined in schema json.
# e.g.
#    <contract_address>=ex1eyfccmjm6732k7wp4p6gdjwhxjwsvje44j0hfx8nkgrm8fs7vqfsfxfyxv
#    <execute_message>=?
#    <admin_address>=ex1h0j8x0v9hs4eq6ppgamemfyu4vuvp2sl0q9p3v (usually same as <from_address_or_name>)
#    <from_address_or_name>=ex1h0j8x0v9hs4eq6ppgamemfyu4vuvp2sl0q9p3v
#    <fees>=0.01okt
#    <gas>=3000000

exchaincli tx wasm execute <contract_address> <execute_message> --from <from_address_or_name> --fees <fees> --gas <gas> -b block -y
```
#### 4. Migrate a wasm contract to a new code version
```Bash
# migrate contract to new code id, <instantiate_message> is the instantiate message of the new code defined in json schema
# e.g.
#    <contractAddr>=ex1eyfccmjm6732k7wp4p6gdjwhxjwsvje44j0hfx8nkgrm8fs7vqfsfxfyxv
#    <new_code_id>=2
#    <instantiate_message>="" (refer to the schema file)
#    <from_address_or_name>=ex1h0j8x0v9hs4eq6ppgamemfyu4vuvp2sl0q9p3v
#    <fees>=0.01okt
#    <gas>=3000000

exchaincli tx wasm migrate <contractAddr> <new_code_id> <instantiate_message> --from <from_address_or_name> --fees <fees> --gas <gas> -b block -y
```
#### 5. Set new admin for a contract
```Bash
# transfer admin to a new address
# e.g.
#    <contractAddr>=ex1eyfccmjm6732k7wp4p6gdjwhxjwsvje44j0hfx8nkgrm8fs7vqfsfxfyxv
#    <new_admin_address>=ex190227rqaps5nplhg2tg8hww7slvvquzy0qa0l0
#    <admin_address>=ex1h0j8x0v9hs4eq6ppgamemfyu4vuvp2sl0q9p3v
#    <fees>=0.01okt
#    <gas>=3000000

exchaincli tx wasm set-contract-admin <contractAddr> <new_admin_address> --from <admin_address> --fees <fees> --gas <gas> -b block -y
```
#### 6. Clear admin for a contract to prevent further migrations
```Bash
# clear admin of the contract
# e.g.
#    <contractAddr>=ex1eyfccmjm6732k7wp4p6gdjwhxjwsvje44j0hfx8nkgrm8fs7vqfsfxfyxv
#    <admin_address>=ex1h0j8x0v9hs4eq6ppgamemfyu4vuvp2sl0q9p3v
#    <fees>=0.01okt
#    <gas>=3000000

exchaincli tx wasm clear-contract-admin <contractAddr> --from <admin_address> --fees <fees> --gas <gas> -b block -y
```
### Query related actions
#### 1. Query all code information on the chain, including code_id, uploader address, code_hash and contract initialization authority
```Bash
exchaincli query wasm list-code
```
#### 2. Query all contracts corresponding to a given code id (a single wasm code can initialize multiple contracts)
```Bash
# e.g.
#    <code_id>=1

exchaincli query wasm list-contract-by-code <code_id>
```
#### 3. Download wasm code to local
```Bash
# Download wasm bytecode and save to file
# e.g.
#    <code_id>=1
#    <filename>=test.wasm

exchaincli query wasm code <code_id> <filename>
```
#### 4. Query code information, including code_id, uploader address, code_hash and contract initialization authority
```Bash
# e.g.
#    <code_id>=1

exchaincli query wasm code-info <code_info>
```
#### 5. Query contract information, including the code id, code uploader address, admin account and other information respective to the contract
```Bash
# e.g.
#    <contract_address>=ex14hj2tavq8fpesdwxxcu44rty3hh90vhujrvcmstl4zr3txmfvw9s6fqu27

exchaincli query wasm contract <contract_address>
```
#### 6. Query the history of contract actions, including contract initialization actions and contract upgrade actions
```Bash
# e.g.
#    <contract_address>=ex14hj2tavq8fpesdwxxcu44rty3hh90vhujrvcmstl4zr3txmfvw9s6fqu27

exchaincli query wasm contract-history <contract_address>
```
#### 7. Query contract status
- List all status information of this contract
```Bash
# e.g.
#    <contract_address>=ex14hj2tavq8fpesdwxxcu44rty3hh90vhujrvcmstl4zr3txmfvw9s6fqu27

exchaincli query wasm contract-state all <contract_address>
```
- Specify query parameters to query the status of the contract
```Bash
# e.g.
#    <contract_address>=ex14hj2tavq8fpesdwxxcu44rty3hh90vhujrvcmstl4zr3txmfvw9s6fqu27
#    <query_message>='{"balance":{"address":"ex190227rqaps5nplhg2tg8hww7slvvquzy0qa0l0"}}'
# you should refer to the schema file for query message

exchaincli query wasm contract-state smart <contract_address> <query_message>
```

#### 8. List all pinned codes
```Bash
exchaincli query wasm pinned
```
#### 9. Query version number of wasmvm
```Bash
  exchaincli query wasm libwasmvm-version
```

## FAQ
If there were any issues regarding any of the actions mentioned above that you were not able to solve, you can contact our technical support (technical support hyperlink here).
