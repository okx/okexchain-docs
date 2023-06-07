# Client APIs
For detailed `client` APIs, please refer to [JS SDK API - Client](https://github.com/okx/okbchain-javascript-sdk/blob/main/docs/okbchain-jssdk-doc-client.md "JS SDK API - Client")
Kind: static class of `client`
#### 1. new exports.OKBChainClient(url, config)

|Param|Type|Description|
|:----|:----|:----|
|url|string| |
|config|Object|{ chainId: "okbchain-196" (mainnet, default) / "okbchaintest-195" (testnet) relativePath: "v1" (mainnet / testnet) isMainnet: true (mainnet) / false (other, default) signer: external signer object, Object / null (default) }|

#### 2. OKBChainClient.setMode(mode)
- Set the mode when sending transaction
- Kind: instance method of `OKBChainClient`

|Param|Type|Description|
|:----|:----|:----|
|mode|string|block|

#### 3. OKBChainClient.setChainId(id)
- Set the `chainId` when sending transaction
- Kind: instance method of `OKBChainClient`

|Param|Type|
|:----|:----|
|id|string|

#### 4. OKBChainClient.setAddress(address)
- Set the address
- Kind: instance method of `OKBChainClient`

|Param|Type|
|:----|:----|
|address|string|

#### 5. OKBChainClient.setAccountInfo(privateKey) 
- Kind: instance method of `OKBChainClient`

|Param|Type|
|:----|:----|
|privateKey|string|

#### 6. OKBChainClient.sendSendTransaction(to, amount, denom, memo, sequenceNumber) 
- Send `SendTransaction`.
- Kind: instance method of `OKBChainClient`
- Returns: `Object` - response

|Param|Type|Default|Description|
|:----|:----|:----|:----|
|to|String| |To Address|
|amount|Number| |Coin Quantity|
|denom|String| |Coin Name|
|memo|String| | |
|sequenceNumber|Number| | | |

#### 7. OKBChainClient.sendCancelOrderTransaction(orderId, memo, sequenceNumber) 
- Send `CancelOrderTransaction`.
- Kind: instance method of `OKBChainClient`
- Returns: `Object` - response

|Param|Type|Default|
|:----|:----|:----|
|orderId|String| |
|memo|String| |
|sequenceNumber|Number| | |

#### 8. OKBChainClient.sendPlaceOrderTransaction(product, side, price, quantity, memo, sequence)
- Send `PlaceOrderTransaction`.
- Kind: instance method of `OKBChainClient`
- Returns: `Object` - response

|Param|Type|Default|
|:----|:----|:----|
|product|String| |
|side|String| |
|price|Number| |
|quantity|Number| |
|memo|Number| |
|sequence|Number| | |

#### 9. OKBChainClient.buildTransaction(msg, signMsg, memo, fee, sequenceNumber) 
- Build Transaction for sending to okbchain.
- Kind: instance method of `OKBChainClient`
- Returns: `Transaction` - Transaction object

|Param|Type|Default|
|:----|:----|:----|
|msg|Object| |
|signMsg|Object| |
|memo|String| |
|fee|String| |
|sequenceNumber|Number| | |

#### 10. OKBChainClient.sendTransaction(tx, mode) 
- Send transaction to OKBChain.
- Kind: instance method of `OKBChainClient`
- Returns: `Object` - response (success or fail)

|Param|Type|Description|
|:----|:----|:----|
|tx|signedTx|signed Transaction object|
|mode|Boolean|use synchronous mode, optional|

#### 11. OKBChainClient.getAccount(address) 
- Get account
- Kind: instance method of `OKBChainClient`
- Returns: `Object` - result

|Param|Type|
|:----|:----|
|address|String|

#### 12. OKBChainClient.getBalance(address)
- Get balances from OKBChain
- Kind: instance method of `OKBChainClient`
- Returns: `Object` - result

|Param|Type|
|:----|:----|
|address|String|

#### 13. OKBChainClient.getBalanceFromAccountInfo(accountInfo)
- Get balances from `accountInfo` Object
- Kind: instance method of `OKBChainClient`
- Returns: `Object` - result

|Param|Type|Description|
|:----|:----|:----|
|accountInfo|Object|optional address|
#### 14. OKBChainClient.getSequenceNumber(address)
- Get `SequenceNumber` from OKBChain
- Kind: instance method of `OKBChainClient`
- Returns: `Number` - sequenceNumber

|Param|Type|
|:----|:----|
|address|string|
#### 15. OKBChainClient.getSequenceNumberFromAccountInfo(accountInfo)
- Get `SequenceNumber` from `accountInfo` Object
- Kind: instance method of `OKBChainClient`
- Returns: `Number` - sequenceNumber

|Param|Type|
|:----|:----|
|accountInfo|string|

#### 16. OKBChainClient.getAccountNumberFromAccountInfo(accountInfo)get accountNumber from accountInfo Object
- Kind: instance method of `OKBChainClient`
- Returns: `Number` - accountNumber

|Param|Type|
|:----|:----|
|accountInfo|string|
#### 17. OKBChainClient.sendTokenIssueTransaction(symbol, whole_name, total_supply, mintable, description, memo, sequenceNumber)
- Send `TokenIssueTransaction`.
- Kind: instance method of `OKBChainClient`
- Returns: `Object` - response

|Param|Type|Default|
|:----|:----|:----|
|symbol|String|
|whole_name|String|
|total_supply|String|
|mintable|Boolean|FALSE
|description|String|
|memo|String|
|sequenceNumber|Number|

#### 18. OKBChainClient.sendTokenBurnTransaction(token, amount, memo, sequenceNumber) 
- Send `TokenBurnTransaction`.
- Kind: instance method of `OKBChainClient`
- Returns: `Object` - response

|Param|Type|Default|
|:----|:----|:----|
|token|String|
|amount|String|
|memo|String|
|sequenceNumber|Number|
#### 19. OKBChainClient.sendTokenMintTransaction(token, amount, memo, sequenceNumber)
- Send `TokenMintTransaction`.
- Kind: instance method of `OKBChainClient`
- Returns: `Object` - response

|Param|Type|Default|
|:----|:----|:----|
|token|String|
|amount|String|
|memo|String|
|sequenceNumber|Number|

#### 20. OKBChainClient.sendRegisterDexOperatorTransaction(website, handling_fee_address, memo, sequenceNumber)
- Send `RegisterDexOperatorTransaction`.
- Kind: instance method of `OKBChainClient`
- Returns: `Object` - response

|Param|Type|Default|
|:----|:----|:----|
|website|String|
|handling_fee_address|String|
|memo|String|
|sequenceNumber|Number|
#### 21. OKBChainClient.sendListTokenPairTransaction(base_asset, quote_asset, init_price, memo, sequenceNumber)
- Send `ListTokenPairTransaction`.
- Kind: instance method of `OKBChainClient`
- Returns: `Object` - response

|Param|Type|Default|
|:----|:----|:----|
|base_asset|String|
|quote_asset|String|
|init_price|String|
|memo|String|
|sequenceNumber|Number|

#### 22. OKBChainClient.sendAddProductDepositTransaction(amount, product, memo, sequenceNumber)
- Send `AddProductDepositTransaction`.
- Kind: instance method of `OKBChainClient`
- Returns: `Object` - response

|Param|Type|Default|
|:----|:----|:----|
|amount|String|
|product|String|
|memo|String|
|sequenceNumber|Number|
#### 23. OKBChainClient.sendWithdrawProductDepositTransaction(amount, product, memo, sequenceNumber)
- Send `WithdrawProductDepositTransaction`.
- Kind: instance method of `OKBChainClient`
- Returns: `Object` - response

|Param|Type|Default|
|:----|:----|:----|
|amount|String|
|product|String|
|memo|String|
|sequenceNumber|Number|
#### 24. OKBChainClient.sendAddLiquidityTransaction(min_liquidity, max_base_amount, base_token, quote_amount, quote_token, deadline, memo, sequenceNumber)
- Send `AddLiquidityTransaction`.
- Kind: instance method of `OKBChainClient`
- Returns: `Object` - response

|Param|Type|Default|
|:----|:----|:----|
|min_liquidity|Number|
|max_base_amount|Number|
|base_token|String|
|quote_amount|Number|
|quote_token|String|
|deadline|String|
|memo|String|
|sequenceNumber|Number|
#### 25. OKBChainClient.sendRemoveLiquidityTransaction(liquidity, min_base_amount, base_token, min_quote_amount, quote_token, deadline, memo, sequenceNumber) 
- Send `RemoveLiquidityTransaction`.
- Kind: instance method of `OKBChainClient`
- Returns: `Object` - response

|Param|Type|Default|
|:----|:----|:----|
|liquidity|Number|
|min_base_amount|Number|
|base_token|String|
|min_quote_amount|Number|
|quote_token|String|
|deadline|String|
|memo|String|
|sequenceNumber|Number|
#### 26. OKBChainClient.sendCreateExchangeTransaction(Token0Name, Token1Name, memo, sequenceNumber)
- Send `CreateExchangeTransaction`.
- Kind: instance method of `OKBChainClient`
- Returns: `Object` - response

|Param|Type|Default|
|:----|:----|:----|
|Token0Name|String|
|Token1Name|String|
|memo|String|
|sequenceNumber|Number|
#### 27. OKBChainClient.sendSwapTokenTransaction(sold_token_amount, sold_token, min_bought_token_amount, bought_token, deadline, recipient, memo, sequenceNumber)
- Send `SwapTokenTransaction`.
- Kind: instance method of `OKBChainClient`
- Returns: `Object` - response

|Param|Type|Default|
|:----|:----|:----|
|sold_token_amount|Number|
|sold_token|String|
|min_bought_token_amount|Number|
|bought_token|String|
|deadline|String|
|recipient|String|
|memo|String|
|sequenceNumber|Number|
#### 28. OKBChainClient.sendFarmCreatePoolTransaction(pool_name, min_lock_denom, min_lock_amount, yield_symbol, memo, sequenceNumber)
- Send `FarmCreatePoolTransaction`.
- Kind: instance method of `OKBChainClient`
- Returns: `Object` - response

|Param|Type|Default|
|:----|:----|:----|
|pool_name|String|
|min_lock_denom|String|
|min_lock_amount|Number|
|yield_symbol|String|
|memo|String|
|sequenceNumber|Number|
#### 29. OKBChainClient.sendFarmDestroyPoolTransaction(pool_name, memo, sequenceNumber) 
- Send `FarmDestroyPoolTransaction`.
- Kind: instance method of `OKBChainClient`
- Returns: `Object` - response

|Param|Type|Default|
|:----|:----|:----|
|pool_name|String|
|memo|String|
|sequenceNumber|Number|
#### 30. OKBChainClient.sendFarmProvideTransaction(pool_name, provide_denom, provide_amount, yielded_per_block, start_height, memo, sequenceNumber)
- Send `FarmProvideTransaction`.
- Kind: instance method of `OKBChainClient`
- Returns: `Object` - response

|Param|Type|Default|
|:----|:----|:----|
|pool_name|String|
|provide_denom|start_height|
|provide_amount|Number|
|yielded_per_block|Number|
|start_height|String|
|memo|String|
|sequenceNumber|Number|
#### 31. OKBChainClient.sendFarmLockTransaction(pool_name, lock_denom, lock_amount, memo, sequenceNumber)
- Send `FarmLockTransaction`.
- Kind: instance method of `OKBChainClient`
- Returns: `Object` - response

|Param|Type|Default|
|:----|:----|:----|
|pool_name|String|
|lock_denom|String|
|String|String|
|memo|String|
|sequenceNumber|Number|
#### 32. OKBChainClient.sendFarmUnLockTransaction(pool_name, unlock_denom, unlock_amount, memo, sequenceNumber)
-  Send `FarmUnLockTransaction`.
- Kind: instance method of `OKBChainClient`
- Returns: `Object` - response

|Param|Type|Default|
|:----|:----|:----|
|pool_name|String|
|unlock_denom|String|
|unlock_amount|unlock_amount|
|memo|String|
|sequenceNumber|Number|

#### 33. OKBChainClient.sendFarmClaimTransaction(pool_name, memo, sequenceNumber) 
- Send `FarmClaimTransaction`.
- Kind: instance method of `OKBChainClient`
- Returns: `Object` - response

|Param|Type|Default|
|:----|:----|:----|
|pool_name|String|
|memo|String|
|sequenceNumber|Number|
#### 34. OKBChainClient.ibcTransfer(receiver, token, memo, sourceChannel, revisionNumber, revisionHeight, isPrivatekeyOldAddress)
- `ibcTransfer`
- Kind: instance method of `OKBChainClient`
- Returns: `Object` - response

|Param|Type|Default|Remark|
|:----|:----|:----|:----|
|receiver|String||
|Token|String||
|sourceChannel|String||
|revisionNumber|String||The target chain-id, like "okbchain-196", typing "100"
|revisionHeight|String||Timeout Height
|isPrivatekeyOldAddress|String|0|
|memo|String||