# IBC ERC20 Developer Guide

## 1. Overview
IBC ERC20 function is to associate the native token in Cosmos ecosystem with the erc20 token in OKTC ecosystem through Cosmos IBC cross-chain protocol to realize asset cross-chain conversion. It mainly includes two parts. 

a.  Cross-chaining the native token from Cosmos ecosystem to OKTC, becoming OKTC EVM erc20 token and participating in OKTC EVM ecosystem; at the same time, this OKTC erc20 token can be returned to Cosmos ecosystem chain via the IBC cross-chaining protocol in its original way, converting it into cosmos native token. 

b. The OKTC native EVM erc20 token is cross-chained to Cosmos ecosystem as a native token; at the same time, you can also return this cosmos native token to OKTC via the IBC cross-chain protocol in its original way and become an EVM erc20 token. 

Note the distinction between the above two cases. The token in one is the native token from other cosmos chains outside of OKTC; the token in two is the erc20 token that already exists on OKTC, not from the automatic deployment in one.

## 2. Cosmos Native token cross-chain to OKTC

### 2.1 How to determine the corresponding erc20 contract?
To transfer the native token from Cosmos ecosystem to OKTC as erc20 token through IBC, you need to deploy the corresponding ERC20 contract on OKTC. This ERC20 contract has two sources:

1. Automatic deployment within the OKTC chain

    OKTC has a [built-in IBC ERC20 contract ](https://github.com/okx/IBC-ERC20/tree/main/contracts) that implements the necessary interfaces required. If the OKTC erc20 module parameter `enable_auto_deployment=true` and the IBC comes across the chain with a cosmos native token, the contract is automatically deployed and the mapping of that ibc token (from the cosmos native token) to the contract address is maintained, converting the native token into an equal number of erc20 tokens to the target account.

2. Manual deployment by the project owner/user

    If the project owner has personalized functional requirements for the ERC20 contract, they can write their own contract code, deploy it to OKTC, and implement the mapping relationship between IBC token and ERC20 contract by initiating a TokenMappingProposal. 
    At this point, please make sure to refer to the [built-in contract](https://github.com/okx/IBC-ERC20/tree/main/contracts) and strictly implement the following in order to achieve this function accurately:
    - Method: `mint_by_okc_module`
    - Method: `send_to_ibc `
    - Event: `__OKCSendToIbc `

### 2.2 Must the cosmos native token across the chain to OKTC be converted to an erc20 token?
By default, the cosmos native token from IBC cross-chain to OKTC will remain as ibc token in OKTC, but denom will change to `ibc/xxxxx` as per IBC protocol rules.
OKTC will convert the IBC token to ERC20 token only in the following two cases:
1. OKTC turns on automatic contract deployment

    OKTC turns on auto-deployment via the erc20 module parameter enable_auto_deployment=true. 
2. OKTC chain has a mapping relationship between the corresponding ibc token and the ERC20 contract

    Enable it by initiating a TokenMappingProposal. 
Otherwise, the cosmos native token coming from IBC cross-chain will remain as ibc token in OKTC, i.e. ibc/xxxxx.

### 2.3 How does the erc20 token that comes across the chain return to the source chain and become a cosmos native token?
According to the above description, Cosmos native token has two states after cross-chaining to OKTC and requires different ways to transfer the token back to the source chain.

- OKTC ibc token
  The token can be transferred back to the source chain using the basic IBC operation. For example, the keplr wallet.
- OKTC erc20 token
  In this case, you need to call `send_to_ibc` of the corresponding erc20 contract, which simply provides the receiving account address and transfer amount of the source chain, and then the erc20 token will be returned to the source chain and become the original cosmos native token.

## 3. Native OKTC erc20 token cross-chain to Cosmos
### 3.1 The specification requirements of this function for erc20 contract
Support native OKTC erc20 token transfer out through IBC cross-chain, erc20 contract code must refer [here](https://github.com/okx/IBC-ERC20/blob/main/contracts/nativeERC20/INativeERC20.sol) to achieve the following.

- Method: `mint_by_okc_module`
- Method: `send_native20_to_ibc`
- Event: `__OKCSendNative20ToIbc`

### 3.2 Must propose token mapping in order to send erc20 across the chain via IBC

If you need to support IBC cross-chain transfer, in addition to the method and event mentioned above, you must also initiate a proposal to establish a mapping between the erc20 contract address and OKTC token, which will take effect after the vote. 
The operation example is as follows. 

```
exchaincli tx gov submit-proposal token-mapping okb 0x45dD91b0289E60D89Cec94dF0Aac3a2f539c514a --title="token-mapping" --description=" token-mapping" --deposit 1000okt --from=userA
```

- `okb` is the specified token name on OKTC, you can use any value that conforms to the coin name specification.
- `0x45dD91b0289E60D89Cec94dF0Aac3a2f539c514a` is the erc20 contract address. This can also be filled with `""` to indicate the deletion of an already existing token mapping relationship.
  
You can query the existing mappings on OKTC chain by `exchaincli query erc20 token-mapping`.

### 3.3 How to operate erc20 cross-chain
Once the erc20 contract and mapping are ready, you can start to operate the erc20 IBC cross-chain. 
Call the contract `send_native20_to_ibc` to specify the target link receiving account address, transfer quantity, IBC portID and IBC channelID. where the portID and channelID can be found here. 

### 3.4 How to return OKTC for erc20 transferred out across the chain
After the erc20 transfer out across the chain, it exists in the form of cosmos ibc token on the target chain (if the target chain does not do special processing). At this time, you can transfer the token back to OKTC by using the IBC transfer tool provided by the target chain, such as keplr wallet, cross-chain bridge, etc., and specify the corresponding channel and port (the channel and port corresponding to the transfer out). 
After OKTC receives the transferred token

- If the mapping relationship exists and the contract is normal, the token is converted to erc20 token.
- If the mapping relationship exists, but the contract is executed with errors, the IBC cross-chain fails.
- If the mapping relationship has been deleted, the token state is maintained in OKTC, and the corresponding token is the token used to register the mapping relationship. 
