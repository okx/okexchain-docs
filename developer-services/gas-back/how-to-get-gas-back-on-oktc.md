# Get Gas Back on OKTC

## 1. Introduction
The Gas Back feature allows contract deployers on OKTC to proportionally distribute their contract's handling fees to other users. After the user deploys a contract on OKTC and registers the contract, they can proceed to receive a handling fee distribution rate (Gas Back rate) according to the system, which will act as a handling fee for any user that calls this contract. Users can directly register this contract by sending an EVM transaction. 

## 2. How to use

|  Contract name   | Contract role  | Contract address  |
|  ----  | ----  | ----  |
| GasBackMSGHelper proxy  | Generates a Msg according to the corresponding parameters inputted, acts as the parameters of SystemContract invoke interface | Mainnet: 0x0DD08B74c111D148751f38f02ab0C3408ead7d18 <br> Testnet: 0x9e472f77e2A5C8f09B237273960c776ddE1D98C1 |
| SystemContract  | Offers a public invoke interface; after the user assembles the data, they can use this interface to initiate a staking transaction | Mainnet: 0xd6bce454316b8ddFb76bB7bb1B57B8942B09Acd5 <br> Testnet: 0x727d14EfC4FB5281A18A6d62BCf486a1cF4d2210 |
| GasBackMSGHelper  | Code implementation  | Mainnet: 0xC38246a34aC8241eB56C84B7356aDC6Dde737f99 <br> Testnet: 0xC9306D5963D7e1f02D04Aa78cd5A34b0D27583b3  |
| ProxyAdmin  | Responsible for managing the proxy's admin contract  | Mainnet: 0xe9196e65a0b6705777fbe829dfa94ec8b9f2ba48 <br> Testnet: 0xcc904644d73fa4aff34fda7433a8f3154c812769  |

### Operating process:
1. According to the specific action that the user would like to perform, they should select the corresponding method from the proxy contract in StakingMSGHelper to generate the parameters
2. Use the parameters generated from step 1, call SystemContract's invoke method, generate an EVM formatted transaction
3. Sign and broadcast the assembled EVM transaction on the chain
4. After completion, users can check their results on the [browser](https://www.okx.com/explorer/oktc) or their wallet

## 3. Sample code
The codes use the OKTC staking method as in the examples below, including multi-language version demos; all developers only need to change their private key, address, and parameters to their own: 
  - [Js version](https://github.com/okex/solidity-sample/tree/main/js/gasBack.js)
  - [Go version](https://github.com/okex/solidity-sample/tree/main/go/exchain-gasback)
  - [JAVA version](https://github.com/okex/solidity-sample/tree/main/java/exchain-web3-sample/src/main/java/com/exchain/web3/util/gasback)

## 4. Interface list

|  Interface   | Details  | Parameter details | This Msg functions as the corresponding command line of SystemContract's invoke interface parameters |
|  ----  | ----  | ----  | ----  |
|  genRegisterMsg()   | Register the contract, enjoy a share of the contract handling fee  | _contract: the contract that needs to be registered <br> _withdrawerAddress: contract handling fee recipient's address <br> _nonces: nonce that user uses during deploying of contract | exchaincli tx feesplit register |
|  genUpdateMsg()   | Update contract handling fee recipient's address  | _contract: address of the registered contract <br> _withdrawerAddress: Updated contract handling recipient's address  | exchaincli tx feesplit update |
|  genCancelMsg()   | Cancel handling fee distribution  | _contract: address of the registered contract | exchaincli tx feesplit cancel |