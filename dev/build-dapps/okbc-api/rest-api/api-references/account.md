# Account

### Get balance
The API endpoints of Get Balance of all currencies for a single Address . By default, just show currencies partially, you can use parameter of `show=all` to see all; you can use the parameter of `symbol=btc` to see just one.

#### HTTP Request
`GET v1/accounts/{address}`

#### Request Example

1. https://okbrpc.okbchain.org/v1/accounts/ex1508d7eq592kg2lh9d46xvv3r4sm7gm8we5fakv
2. https://okbrpc.okbchain.org/v1/accounts/ex1508d7eq592kg2lh9d46xvv3r4sm7gm8we5fakv?show=partial
3. https://okbrpc.okbchain.org/v1/accounts/ex1508d7eq592kg2lh9d46xvv3r4sm7gm8we5fakv?show=all
4. https://okbrpc.okbchain.org/v1/accounts/ex1508d7eq592kg2lh9d46xvv3r4sm7gm8we5fakv?symbol=btc

#### Request Parameters

|Parameter|Type|Required|Description|
|:----|:----|:----|:----|
|address|String|Yes| |
|show|String|No|Type all: show all
Type partial: show part|
|symbol|String|No|for example btc|

#### Response Example
    {"code": 0,"msg": "","detail_msg": "","data": {"address": "ex1508d7eq592kg2lh9d46xvv3r4sm7gm8we5fakv","currencies": [{"symbol": "okb","available": "51123.350000000000000000","locked": "0"}]}}

#### Response Parameters

|Parameter|Type|Description|
|:----|:----|:----|
|address|String|Address of Account|
|currencies|String|Currencies list|
|> symbol|String|Currency symbol|
|> available|String|The amount you can use|
|> locked|String|The amount locked|

### Get accountNumber and sequence
The API endpoints of get user's account_number and sequence.

#### HTTP Request
`GET v1/auth/accounts/{address}`

#### Request Example

1. https://okbrpc.okbchain.org/v1/auth/accounts/ex1xkl5agjzqnjnptyat2dng2asmx8g5kll7evelk

#### Request Parameters

|Parameter|Type|Required|Description|
|:----|:----|:----|:----|
|address|String|Yes|Address of Account|

#### Response Example

    {"type": "okbchain/EthAccount","value": {"address": "ex1xkl5agjzqnjnptyat2dng2asmx8g5kll7evelk","eth_address": "0x35bf4EA24204E530AC9d5a9b342bB0D98e8a5bfF","coins": [{"denom": "okb","amount": "52741.300000000000000000"}],"public_key": "expub17weu6qepqw9q0u6snmd40a7d6jqc5ey4z0se30ev09jw44pnz29lf36p0euv26pqjvf","account_number": 49,"sequence": 15,"code_hash": "c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470"}}

#### Response Parameters

|Parameter|Type|Description|
|:----|:----|:----|
|address|String|Address of OKB Chain|
|eth_address|String|Address of Etherscan|
|public_key|String|Public key of account|
|account_number|String|Creation sequence number of the account|
|sequence|String|Nonce of account|
|code_hash|String|Hash of contract code|
|coins|Array|Coins|
|> denom|String|denom of coin|
|> amount|String|amount of coin|
