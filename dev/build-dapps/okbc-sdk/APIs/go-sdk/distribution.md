# Distribution
All distribution functions are defined in the package `distribution` under path `okbchain-go-sdk/module/distribution`. They can be invoked by the way like:

```go
import "github.com/okx/okbchain-go-sdk"

config, _ := gosdk.NewClientConfig(rpcURL, chainID, gosdk.BroadcastBlock, "0.02okb", 200000, "")
cli := gosdk.NewClient(config)
_, _ = cli.Distribution().WithdrawRewards(info, defaultPassWd, valAddrStr, memo, accountNumber, sequence)
```

## 1. Transaction

### 1.1 Change the withdraw address of validator to receive rewards

```go
func (dc distrClient) SetWithdrawAddr(fromInfo keys.Info, passWd, withdrawAddrStr, memo string, accNum, seqNum uint64) (resp sdk.TxResponse, err error) 
```

**Parameters**:

|  Name   | Type  |Mark|
|  ----  | ----  |----|
| fromInfo  | keys.Info |sender's key info|
| passWd  | string |sender's password|
| memo  | string |memo to note|
| accNum  | uint64 |account number of sender's account on chain|
| seqNum  | uint64 |sequence number of sender's account on chain|
| withdrawAddrStr  | string | account address in bech32 to receive the rewards of validator|

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

### 1.2 Withdraw the rewards of validator by the owner

```go
func (dc distrClient) WithdrawRewards(fromInfo keys.Info, passWd, valAddrStr, memo string, accNum, seqNum uint64) (resp sdk.TxResponse, err error)
```

**Parameters**:

|  Name   | Type  |Mark|
|  ----  | ----  |----|
| fromInfo  | keys.Info |sender's key info|
| passWd  | string |sender's password|
| memo  | string |memo to note|
| accNum  | uint64 |account number of sender's account on chain|
| seqNum  | uint64 |sequence number of sender's account on chain|
| valAddrStr  | string | target validator's address in bech32|

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