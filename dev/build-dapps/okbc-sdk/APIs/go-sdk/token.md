# Token
All token functions are defined in the package `token` under path `okbchain-go-sdk/module/token`. They can be invoked by the way like:

```go
import "github.com/okx/okbchain-go-sdk"

config, _ := gosdk.NewClientConfig(rpcURL, chainID, gosdk.BroadcastBlock, "0.02okb", 200000, "")
cli := gosdk.NewClient(config)
_, _ = cli.Token().Issue(info, defaultPassWd, "usdk", "usdk", "1000000000", "stable coins", memo, true, accountNumber, sequence)
```

## 1. Query

### 1.1 Get token info with a specific symbol, or the owner address

```go
func (tc tokenClient) QueryTokenInfo(ownerAddr, symbol string) (tokens []types.TokenResp, err error)
```

**Parameters**

|  Name   | Type  |Mark|
|  ----  | ----  |----|
| ownerAddr  | string |owner address in bech32|
| symbol  | string |symbol of token|

**Results**

```go
// TokenResp slice
type TokenResp struct {
    Description         string
    Symbol              string
    OriginalSymbol      string
    WholeName           string
    OriginalTotalSupply sdk.Dec
    Type                int
    Owner               sdk.AccAddress
    Mintable            bool
    TotalSupply         sdk.Dec
}
```

## 2. Transaction

### 2.1 Transfer coins to other receiver

```go
func (tc tokenClient) Send(fromInfo keys.Info, passWd, toAddrStr, coinsStr, memo string, accNum, seqNum uint64)
```

**Parameters**

|  Name   | Type  |Mark|
|  ----  | ----  |----|
| fromInfo  | keys.Info |sender's key info|
| passWd  | string |sender's password|
| memo  | string |memo to note|
| accNum  | uint64 |account number of sender's account on chain|
| seqNum  | uint64 |sequence number of sender's account on chain|
| toAddrStr  | string |receiver's account address in bech32|
| coinsStr  | string |transfer amount, e.g. "1024.1024okb" |

**Results**

```go
// Transaction response containing relevant tx data and metadata
type TxResponse struct {
    Height    int64
    TxHash    string
    Codespace string
    Code      uint32
    Data      string
    RawLog    string
    Logs      ABCIMessageLogs
    Info      string
    GasWanted int64
    GasUsed   int64
    Tx        Tx
    Timestamp string
}
```

### 2.2 Multi-send coins to several receivers

```go
func (tc tokenClient) MultiSend(fromInfo keys.Info, passWd string, transfers []types.TransferUnit, memo string, accNum, seqNum uint64) (resp sdk.TxResponse, err error) 
```

**Parameters**

|  Name   | Type  |Mark|
|  ----  | ----  |----|
| fromInfo  | keys.Info |sender's key info|
| passWd  | string |sender's password|
| memo  | string |memo to note|
| accNum  | uint64 |account number of sender's account on chain|
| seqNum  | uint64 |sequence number of sender's account on chain|
| transfers  | []types.TransferUnit |set of data struct containing the receivers and transfer amount. A build function is shown on 1.2.1|

**Results**

```go
// Transaction response containing relevant tx data and metadata
type TxResponse struct {
    Height    int64
    TxHash    string
    Codespace string
    Code      uint32
    Data      string
    RawLog    string
    Logs      ABCIMessageLogs
    Info      string
    GasWanted int64
    GasUsed   int64
    Tx        Tx
    Timestamp string
}
```

### 2.3 Issue a kind of token

```go
func (tc tokenClient) Issue(fromInfo keys.Info, passWd, orgSymbol, wholeName, totalSupply, tokenDesc, memo string, mintable bool, accNum, seqNum uint64) (resp sdk.TxResponse, err error)
```

**Parameters**

|  Name   | Type  |Mark|
|  ----  | ----  |----|
| fromInfo  | keys.Info |sender's key info|
| passWd  | string |sender's password|
| memo  | string |memo to note|
| accNum  | uint64 |account number of sender's account on chain|
| seqNum  | uint64 |sequence number of sender's account on chain|
| orgSymbol  | string |symbol of the new token|
| wholeName  | string | whole name of the new token|
| totalSupply  | string | total supply of the new token|
| tokenDesc  | string | description of the token|
| mintable  | bool |  whether the token can be minted|

**Results**

```go
// Transaction response containing relevant tx data and metadata
type TxResponse struct {
    Height    int64
    TxHash    string
    Codespace string
    Code      uint32
    Data      string
    RawLog    string
    Logs      ABCIMessageLogs
    Info      string
    GasWanted int64
    GasUsed   int64
    Tx        Tx
    Timestamp string
}
```

### 2.4 Increase the total supply of a kind of token by its owner

```go
func (tc tokenClient) Mint(fromInfo keys.Info, passWd, coinsStr, memo string, accNum, seqNum uint64) (resp sdk.TxResponse, err error)
```

**Parameters**

|  Name   | Type  |Mark|
|  ----  | ----  |----|
| fromInfo  | keys.Info |sender's key info|
| passWd  | string |sender's password|
| memo  | string |memo to note|
| accNum  | uint64 |account number of sender's account on chain|
| seqNum  | uint64 |sequence number of sender's account on chain|
| coinsStr  | string | amount to mint, e.g. "1024.1024okb" |

**Results**

```go
// Transaction response containing relevant tx data and metadata
type TxResponse struct {
    Height    int64
    TxHash    string
    Codespace string
    Code      uint32
    Data      string
    RawLog    string
    Logs      ABCIMessageLogs
    Info      string
    GasWanted int64
    GasUsed   int64
    Tx        Tx
    Timestamp string
}
```

### 2.5 Decrease the total supply of a kind of token by burning a specific amount of that from the owner

```go
func (tc tokenClient) Burn(fromInfo keys.Info, passWd, coinsStr, memo string, accNum, seqNum uint64) (resp sdk.TxResponse, err error)
```

**Parameters:

|  Name   | Type  |Mark|
|  ----  | ----  |----|
| fromInfo  | keys.Info |sender's key info|
| passWd  | string |sender's password|
| memo  | string |memo to note|
| accNum  | uint64 |account number of sender's account on chain|
| seqNum  | uint64 |sequence number of sender's account on chain|
| coinsStr  | string | amount to burn, e.g. "1024.1024okb" |

**Results**

```go
// Transaction response containing relevant tx data and metadata
type TxResponse struct {
    Height    int64
    TxHash    string
    Codespace string
    Code      uint32
    Data      string
    RawLog    string
    Logs      ABCIMessageLogs
    Info      string
    GasWanted int64
    GasUsed   int64
    Tx        Tx
    Timestamp string
}
```

### 2.6 Modify the info of a specific token by its owner

```go
func (tc tokenClient) Edit(fromInfo keys.Info, passWd, symbol, description, wholeName, memo string, isDescEdit, isWholeNameEdit bool, accNum, seqNum uint64) (resp sdk.TxResponse, err error)
```

**Parameters**

|  Name   | Type  |Mark|
|  ----  | ----  |----|
| fromInfo  | keys.Info |sender's key info|
| passWd  | string |sender's password|
| memo  | string |memo to note|
| accNum  | uint64 |account number of sender's account on chain|
| seqNum  | uint64 |sequence number of sender's account on chain|
| symbol  | string | symbol of the token to modify |
| description  | string | new description to change |
| wholeName  | string | new whole name to change |
| isDescEdit  | bool | whether to modify the token description by this transaction |
| isWholeNameEdit  | bool | whether to modify the token whole name by this transaction |

**Results**

```go
// Transaction response containing relevant tx data and metadata
type TxResponse struct {
    Height    int64
    TxHash    string
    Codespace string
    Code      uint32
    Data      string
    RawLog    string
    Logs      ABCIMessageLogs
    Info      string
    GasWanted int64
    GasUsed   int64
    Tx        Tx
    Timestamp string
}
```
