# Tendermint
All tendermint functions are defined in the package `tendermint` under path `okbchain-go-sdk/module/tendermint`. They can be invoked by the way like:

```go
import "github.com/okx/okbchain-go-sdk"

config, _ := gosdk.NewClientConfig(rpcURL, chainID, gosdk.BroadcastBlock, "0.02okb", 200000, "")
cli := gosdk.NewClient(config)
_, _ = cli.Tendermint().QueryBlock(1024)
```

## 1. Query

### 1.1 Get the block info of a specific height

```go
func (tc tendermintClient) QueryBlock(height int64) (pBlock *types.Block, err error) 
```

**Parameters**:

|  Name   | Type  |Mark|
|  ----  | ----  |----|
| height  | int64 |target block height. get the latest block with height 0 input|

**Results**

```go
// block info
type Block struct {
    mtx        sync.Mutex
    Header
    Data
    Evidence   EvidenceData
    LastCommit *Commit
}
```

### 1.2 Get the abci result of the block on a specific height

```go
func (tc tendermintClient) QueryBlockResults(height int64) (pBlockResults *types.ResultBlockResults, err error)
```

**Parameters**:

|  Name   | Type  |Mark|
|  ----  | ----  |----|
| height  | int64 |target block height. get the latest block with height 0 input|

**Results**

```go
// abci result info of block
type ResultBlockResults struct {
    Height                int64
    TxsResults            []*abci.ResponseDeliverTx
    BeginBlockEvents      []abci.Event
    EndBlockEvents        []abci.Event
    ValidatorUpdates      []abci.ValidatorUpdate
    ConsensusParamUpdates *abci.ConsensusParams
}
```

### 1.3 Get the commit info of the block on a specific height

```go
func (tc tendermintClient) QueryCommitResult(height int64) (pCommitResult *types.ResultCommit, err error)
```

**Parameters**:

|  Name   | Type  |Mark|
|  ----  | ----  |----|
| height  | int64 |target block height. get the latest block with height 0 input|

**Results**

```go
// commit info of block
type ResultCommit struct {
    types.SignedHeader
    CanonicalCommit    bool
}

// types.SignedHeader - field in ResultCommit
type SignedHeader struct {
    *Header
    Commit *Commit
}
```

### 1.4 Get the validators info on a specific height

```go
func (tc tendermintClient) QueryValidatorsResult(height int64) (pValsResult *types.ResultValidators, err error) 
```

**Parameters**:

|  Name   | Type  |Mark|
|  ----  | ----  |----|
| height  | int64 |target block height. get the latest block with height 0 input|

**Results**

```go
// validators info
type ResultValidators struct {
    BlockHeight int64
    Validators  []*types.Validator
    Count       int
    Total       int
}
```

### 1.5 Get the detail info of a tx with its tx hash

```go
func (tc tendermintClient) QueryTxResult(hashHexStr string, prove bool) (pResultTx *types.ResultTx, err error) 
```

**Parameters**:

|  Name   | Type  |Mark|
|  ----  | ----  |----|
| hashHexStr  | string |tx hash in hex string|
| prove  | bool |whether to verify proofs for responses|

**Results**

```go
// tx result
type ResultTx struct {
    Hash     bytes.HexBytes
    Height   int64
    Index    uint32
    TxResult abci.ResponseDeliverTx
    Tx       types.Tx
    Proof    types.TxProof
}
```

### 1.6 Get txs result by a group of specific searching string

```go
func (tc tendermintClient) QueryTxsByEvents(eventsStr string, page, limit int) (pResultTxSearch *types.ResultTxSearch, err error)
```

**Parameters**:

|  Name   | Type  |Mark|
|  ----  | ----  |----|
| eventsStr  | string |list of transaction events in the form of {eventType}.{eventAttribute}={value}|
| page  | int |a specific page of paginated results|
| limit  | int |number of transactions results per page returned|

**Results**

```go
// Result of searching for txs
type ResultTxSearch struct {
    Txs        []*ResultTx
    TotalCount int
}

// ResultTx - field in ResultTxSearch
type ResultTx struct {
    Hash     bytes.HexBytes
    Height   int64
    Index    uint32
    TxResult abci.ResponseDeliverTx
    Tx       types.Tx
    Proof    types.TxProof
}
```