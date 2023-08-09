# Governance
All governance functions are defined in the package `governance` under path `okbchain-go-sdk/module/governance`. They can be invoked by the way like:

```go
import "github.com/okx/okbchain-go-sdk"

config, _ := gosdk.NewClientConfig(rpcURL, chainID, gosdk.BroadcastBlock, "0.02okb", 200000, "")
cli := gosdk.NewClient(config)
_, _ = cli.Governance().SubmitTextProposal(info, defaultPassWd, "text_proposal.json", memo, accAccountNumber, accSequenceNumber)
```

## 1. Query

### 1.1 Get all proposals

```go
func (gc govClient) QueryProposals(depositorAddrStr, voterAddrStr, status string, numLimit uint64) (proposals []types.Proposal, err error)
```

**Parameters**:

|  Name   | Type  |Mark|
|  ----  | ----  |----|
| depositorAddrStr  | string |filter by proposals deposited on by depositor. defaults to all proposals by ""|
| voterAddrStr  | string |filter by proposals voted on by voted. defaults to all proposals by ""|
| status  | string |filter by proposals' status: DepositPeriod/VotingPeriod/Passed/Rejected. defaults to all proposals by ""|
| numLimit  | uint64 |limit to latest [numLimit] proposals. defaults to all proposals by 0|

**Results**

```go
// Proposal slice
type Proposal struct {
    Content          
    ProposalID       uint64
    Status           ProposalStatus
    FinalTallyResult TallyResult
    SubmitTime       time.Time
    DepositEndTime   time.Time
    TotalDeposit     sdk.SysCoins
    VotingStartTime  time.Time
    VotingEndTime    time.Time
}
```

## 2. Transaction

### 2.1 Submit the text proposal

```go
func (gc govClient) SubmitTextProposal(fromInfo keys.Info, passWd, proposalPath, memo string, accNum, seqNum uint64) (resp sdk.TxResponse, err error)
```

**Parameters**:

|  Name   | Type  |Mark|
|  ----  | ----  |----|
| fromInfo  | keys.Info |sender's key info|
| passWd  | string |sender's password|
| memo  | string |memo to note|
| accNum  | uint64 |account number of sender's account on chain|
| seqNum  | uint64 |sequence number of sender's account on chain|
| proposalPath  | string | the path pf proposal file|

text proposal file template:
```json
{
  "title": "text proposal",
  "description": "description of text proposal",
  "proposalType": "Text",
  "deposit": "100okb"
}
```

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

### 2.2 Submit the proposal to change the params

```go
func (gc govClient) SubmitParamsChangeProposal(fromInfo keys.Info, passWd, proposalPath, memo string, accNum, seqNum uint64) (resp sdk.TxResponse, err error) 
```

**Parameters**:

|  Name   | Type  |Mark|
|  ----  | ----  |----|
| fromInfo  | keys.Info |sender's key info|
| passWd  | string |sender's password|
| memo  | string |memo to note|
| accNum  | uint64 |account number of sender's account on chain|
| seqNum  | uint64 |sequence number of sender's account on chain|
| proposalPath  | string | the path pf proposal file|

text proposal file template:
```json
{
  "title": "Param Change Proposal",
  "description": "param change proposal description",
  "changes": [
    {
      "subspace": "staking",
      "key": "MaxValsToAddShares",
      "value": 5
    }
  ],
  "deposit": [
    {
      "denom": "okb",
      "amount": "100"
    }
  ],
  "height": "16910"
}
```

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

### 2.3 Submit the proposal to delist a token pair from dex

```go
func (gc govClient) SubmitDelistProposal(fromInfo keys.Info, passWd, proposalPath, memo string, accNum, seqNum uint64) (resp sdk.TxResponse, err error)
```

**Parameters**:

|  Name   | Type  |Mark|
|  ----  | ----  |----|
| fromInfo  | keys.Info |sender's key info|
| passWd  | string |sender's password|
| memo  | string |memo to note|
| accNum  | uint64 |account number of sender's account on chain|
| seqNum  | uint64 |sequence number of sender's account on chain|
| proposalPath  | string | the path pf proposal file|

text proposal file template:
```json
{
  "title": "Delist Proposal",
  "description": "delist proposal description",
  "base_asset": "btc",
  "quote_asset": "okb",
  "deposit": [
    {
      "denom": "okb",
      "amount": "100"
    }
  ]
}
```

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

### 2.4 Submit the proposal to spend the tokens from the community pool

```go
func (gc govClient) SubmitCommunityPoolSpendProposal(fromInfo keys.Info, passWd, proposalPath, memo string, accNum, seqNum uint64) (resp sdk.TxResponse, err error)
```

**Parameters**:

|  Name   | Type  |Mark|
|  ----  | ----  |----|
| fromInfo  | keys.Info |sender's key info|
| passWd  | string |sender's password|
| memo  | string |memo to note|
| accNum  | uint64 |account number of sender's account on chain|
| seqNum  | uint64 |sequence number of sender's account on chain|
| proposalPath  | string | the path pf proposal file|

text proposal file template:
```json
{
  "title": "Community Pool Spend Proposal",
  "description": "community pool spend description",
  "recipient": "ex1hcngft7gfkhn8z8fnlajzh7agyt0az0v6ztmme",
  "amount": [
    {
      "denom": "okb",
      "amount": "10.24"
    }
  ],
  "deposit": [
    {
      "denom": "okb",
      "amount": "100"
    }
  ]
}
```

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

### 2.5 Submit the proposal to manage the white list member

```go
func (gc govClient) SubmitManageWhiteListProposal(fromInfo keys.Info, passWd, proposalPath, memo string, accNum, seqNum uint64) (resp sdk.TxResponse, err error) 
```

**Parameters**:

|  Name   | Type  |Mark|
|  ----  | ----  |----|
| fromInfo  | keys.Info |sender's key info|
| passWd  | string |sender's password|
| memo  | string |memo to note|
| accNum  | uint64 |account number of sender's account on chain|
| seqNum  | uint64 |sequence number of sender's account on chain|
| proposalPath  | string | the path pf proposal file|

text proposal file template:
```json
{
  "title": "Manage White List Proposal",
  "description": "manage white list description",
  "pool_name": "pool1",
  "is_added": true,
  "deposit": [
    {
      "denom": "okb",
      "amount": "100"
    }
  ]
}
```

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

### 2.6 Increase the deposit amount on a specific proposal

```go
func (gc govClient) Deposit(fromInfo keys.Info, passWd, depositCoinsStr, memo string, proposalID, accNum, seqNum uint64) (resp sdk.TxResponse, err error) 
```

**Parameters**:

|  Name   | Type  |Mark|
|  ----  | ----  |----|
| fromInfo  | keys.Info |sender's key info|
| passWd  | string |sender's password|
| memo  | string |memo to note|
| accNum  | uint64 |account number of sender's account on chain|
| seqNum  | uint64 |sequence number of sender's account on chain|
| depositCoinsStr  | string | amount to deposit to the proposal|
| proposalID  | uint64 | target proposal ID|

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

### 2.7 Vote for an active proposal

```go
func (gc govClient) Vote(fromInfo keys.Info, passWd, voteOption, memo string, proposalID, accNum, seqNum uint64) (resp sdk.TxResponse, err error) 
```

**Parameters**:

|  Name   | Type  |Mark|
|  ----  | ----  |----|
| fromInfo  | keys.Info |sender's key info|
| passWd  | string |sender's password|
| memo  | string |memo to note|
| accNum  | uint64 |account number of sender's account on chain|
| seqNum  | uint64 |sequence number of sender's account on chain|
| voteOption  | string | option to vote: yes/no/no_with_veto/abstain|
| proposalID  | uint64 | target proposal ID|

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