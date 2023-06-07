# Staking
All staking functions are defined in the package `staking` under path `okbchain-go-sdk/module/staking`. They can be invoked by the way like:

```go
import "github.com/okx/okbchain-go-sdk"

config, _ := gosdk.NewClientConfig(rpcURL, chainID, gosdk.BroadcastBlock, "0.02okb", 200000, "")
cli := gosdk.NewClient(config)
_, _ = cli.Staking().Deposit(info, defaultPassWd, depositAmount, memo, accountNumber, sequence)
```

## 1. Query

### 1.1 Get all the validators info

```go
func (sc stakingClient) QueryValidators() (vals []types.Validator, err error) 
```

**Results**

```go
// Validator slice
type Validator struct {
    OperatorAddress         sdk.ValAddress
    ConsPubKey              crypto.PubKey
    Jailed                  bool
    Status                  sdk.BondStatus
    Tokens                  sdk.Int
    DelegatorShares         sdk.Dec
    Description             Description
    UnbondingHeight         int64
    UnbondingCompletionTime time.Time
    Commission              Commission
    MinSelfDelegation       sdk.Dec
}
```

### 1.2 Get the info of a specific validator

```go
func (sc stakingClient) QueryValidator(valAddrStr string) (val types.Validator, err error)
```

**Parameters**

|  Name   | Type  |Mark|
|  ----  | ----  |----|
| valAddrStr  | string |validator address in bech32|

**Results**

```go
// Validator
type Validator struct {
    OperatorAddress         sdk.ValAddress
    ConsPubKey              crypto.PubKey
    Jailed                  bool
    Status                  sdk.BondStatus
    Tokens                  sdk.Int
    DelegatorShares         sdk.Dec
    Description             Description
    UnbondingHeight         int64
    UnbondingCompletionTime time.Time
    Commission              Commission
    MinSelfDelegation       sdk.Dec
}
```

### 1.3 Get the detail info of a delegator

```go
func (sc stakingClient) QueryDelegator(delAddrStr string) (delResp types.DelegatorResponse, err error) 
```

**Parameters**

|  Name   | Type  |Mark|
|  ----  | ----  |----|
| delAddrStr  | string |delegator address in bech32|

**Results**

```go
// DelegatorResponse
type DelegatorResponse struct {
    DelegatorAddress     sdk.AccAddress
    ValidatorAddresses   []sdk.ValAddress
    Shares               sdk.Dec
    Tokens               sdk.Dec
    UnbondedTokens       sdk.Dec
    CompletionTime       time.Time
    IsProxy              bool
    TotalDelegatedTokens sdk.Dec
    ProxyAddress         sdk.AccAddress
}
```

## 2. Transaction

### 2.1 Create a new validator

```go
func (sc stakingClient) CreateValidator(fromInfo keys.Info, passWd, pubkeyStr, moniker, identity, website, details, memo string, accNum, seqNum uint64) (resp sdk.TxResponse, err error)
```

**Parameters**

|  Name   | Type  |Mark|
|  ----  | ----  |----|
| fromInfo  | keys.Info |sender's key info|
| passWd  | string |sender's password|
| memo  | string |memo to note|
| accNum  | uint64 |account number of sender's account on chain|
| seqNum  | uint64 |sequence number of sender's account on chain|
| pubkeyStr  | string |bech32 encoded pubkey of the validator|
| moniker  | string |validator's name|
| identity  | string |validator's identity|
| website  | string |validator's website |
| details  | string | validator's details |

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

### 2.2 Edit the description on a validator by the owner

```go
func (sc stakingClient) EditValidator(fromInfo keys.Info, passWd, moniker, identity, website, details, memo string, accNum, seqNum uint64) (resp sdk.TxResponse, err error)
```

**Parameters**

|  Name   | Type  |Mark|
|  ----  | ----  |----|
| fromInfo  | keys.Info |sender's key info|
| passWd  | string |sender's password|
| memo  | string |memo to note|
| accNum  | uint64 |account number of sender's account on chain|
| seqNum  | uint64 |sequence number of sender's account on chain|
| moniker  | string |validator's new name to change|
| identity  | string |validator's new identity to change|
| website  | string |validator's new website to change |
| details  | string | validator's new details to change |

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

### 2.3 Deregister the validator and withdraw the min-self-delegation

```go
func (sc stakingClient) DestroyValidator(fromInfo keys.Info, passWd string, memo string, accNum, seqNum uint64) (resp sdk.TxResponse, err error)
```

**Parameters**

|  Name   | Type  |Mark|
|  ----  | ----  |----|
| fromInfo  | keys.Info |sender's key info|
| passWd  | string |sender's password|
| memo  | string |memo to note|
| accNum  | uint64 |account number of sender's account on chain|
| seqNum  | uint64 |sequence number of sender's account on chain|

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

### 2.4 Deposit an amount of okb to delegator account

```go
func (sc stakingClient) Deposit(fromInfo keys.Info, passWd, coinsStr, memo string, accNum, seqNum uint64) (resp sdk.TxResponse, err error)
```

**Parameters**

|  Name   | Type  |Mark|
|  ----  | ----  |----|
| fromInfo  | keys.Info |sender's key info|
| passWd  | string |sender's password|
| memo  | string |memo to note|
| accNum  | uint64 |account number of sender's account on chain|
| seqNum  | uint64 |sequence number of sender's account on chain|
| coinsStr  | string |amount to deposit, e.g. "1024.1024okb"|

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

### 2.5 Withdraw an amount of okb and the corresponding shares from all validators

```go
func (sc stakingClient) Withdraw(fromInfo keys.Info, passWd, coinsStr, memo string, accNum, seqNum uint64) (resp sdk.TxResponse, err error)
```

**Parameters**

|  Name   | Type  |Mark|
|  ----  | ----  |----|
| fromInfo  | keys.Info |sender's key info|
| passWd  | string |sender's password|
| memo  | string |memo to note|
| accNum  | uint64 |account number of sender's account on chain|
| seqNum  | uint64 |sequence number of sender's account on chain|
| coinsStr  | string |amount to withdraw, e.g. "1024.1024okb"|

**Result**

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

#### 4.2.6 Add shares to some specific validators

```go
func (sc stakingClient) AddShares(fromInfo keys.Info, passWd string, valAddrsStr []string, memo string, accNum, seqNum uint64) (resp sdk.TxResponse, err error)
```

**Parameters**

|  Name   | Type  |Mark|
|  ----  | ----  |----|
| fromInfo  | keys.Info |sender's key info|
| passWd  | string |sender's password|
| memo  | string |memo to note|
| accNum  | uint64 |account number of sender's account on chain|
| seqNum  | uint64 |sequence number of sender's account on chain|
| valAddrsStr  | []string |set of target validators' addresses in bech32|

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

### 2.7 Register the identity of proxy

```go
func (sc stakingClient) RegisterProxy(fromInfo keys.Info, passWd, memo string, accNum, seqNum uint64) (resp sdk.TxResponse, err error) 
```

**Parameters**

|  Name   | Type  |Mark|
|  ----  | ----  |----|
| fromInfo  | keys.Info |sender's key info|
| passWd  | string |sender's password|
| memo  | string |memo to note|
| accNum  | uint64 |account number of sender's account on chain|
| seqNum  | uint64 |sequence number of sender's account on chain|

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

### 2.8 Deregister the identity of proxy

```go
func (sc stakingClient) UnregisterProxy(fromInfo keys.Info, passWd, memo string, accNum, seqNum uint64) (resp sdk.TxResponse, err error)
```

**Parameters**

|  Name   | Type  |Mark|
|  ----  | ----  |----|
| fromInfo  | keys.Info |sender's key info|
| passWd  | string |sender's password|
| memo  | string |memo to note|
| accNum  | uint64 |account number of sender's account on chain|
| seqNum  | uint64 |sequence number of sender's account on chain|

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

### 2.9 Bind the staking tokens to a proxy

```go
func (sc stakingClient) BindProxy(fromInfo keys.Info, passWd, proxyAddrStr, memo string, accNum, seqNum uint64) (resp sdk.TxResponse, err error)
```

**Parameters**

|  Name   | Type  |Mark|
|  ----  | ----  |----|
| fromInfo  | keys.Info |sender's key info|
| passWd  | string |sender's password|
| memo  | string |memo to note|
| accNum  | uint64 |account number of sender's account on chain|
| seqNum  | uint64 |sequence number of sender's account on chain|
| proxyAddrStr  | string |proxy's address in bech32|

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

### 2.10 Unbind the staking tokens from a proxy

```go
func (sc stakingClient) UnbindProxy(fromInfo keys.Info, passWd, memo string, accNum, seqNum uint64) (resp sdk.TxResponse, err error)
```

**Parameters**

|  Name   | Type  |Mark|
|  ----  | ----  |----|
| fromInfo  | keys.Info |sender's key info|
| passWd  | string |sender's password|
| memo  | string |memo to note|
| accNum  | uint64 |account number of sender's account on chain|
| seqNum  | uint64 |sequence number of sender's account on chain|

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