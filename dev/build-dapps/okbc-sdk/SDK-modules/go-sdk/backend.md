# Backend
All order functions are defined in the package `backend` under path `okbchain-go-sdk/module/backend`. They can be invoked by the way like:

```go
import "github.com/okx/okbchain-go-sdk"

config, _ := gosdk.NewClientConfig(rpcURL, chainID, gosdk.BroadcastBlock, "0.02okb", 200000, "")
cli := gosdk.NewClient(config)
_, _ = cli.Backend().QueryCandles("usdk_okb", 60, 10)
```

## 1. Query

### 1.1 Get the candles data of a specific product

```go
func (bc backendClient) QueryCandles(product string, granularity, size int) (candles [][]string, err error)
```

**Parameters**:

|  Name   | Type  |Mark|
|  ----  | ----  |----|
| product  | string |the name of target token pair|
| granularity  | int | seconds in unit, [60/180/300/900/1800/3600/7200/14400/21600/43200/86400/604800]|
| size  | int |the limited number of items, 1000 at most|

**Results**

```go
// candles data
[][]string
```

### 1.2 Get all tickers' data

```go
func (bc backendClient) QueryTickers(product string, count ...int) (tickers []types.Ticker, err error) 
```

**Parameters**:

|  Name   | Type  |Mark|
|  ----  | ----  |----|
| product  | string |the name of target token pair|
| count  | int |ticker count (default 10)|

**Results**

```go
// ticker slice
type Ticker struct {
    Symbol           string
    Product          string
    Timestamp        int64
    Open             float64
    Close            float64
    High             float64
    Low              float64
    Price            float64
    Volume           float64
    Change           float64
    ChangePercentage string
}
```

### 1.3 Get the specific product's record of recent transactions

```go
func (bc backendClient) QueryRecentTxRecord(product string, start, end, page, perPage int) (record []types.MatchResult, err error) 
```

**Parameters**:

|  Name   | Type  |Mark|
|  ----  | ----  |----|
| product  | string |the name of target token pair|
| start  | int |filter txs by start timestamp|
| end  | int |filter txs by end timestamp|
| page  | int |page number|
| perPage  | int | item's number per page|

**Results**

```go
// MatchResult slice
type MatchResult struct {
    Timestamp   int64
    BlockHeight int64
    Product     string
    Price       float64
    Quantity    float64
}
```

### 1.4 Get the open orders of a specific account

```go
func (bc backendClient) QueryOpenOrders(addrStr, product, side string, start, end, page, perPage int) (orders []types.Order,err error)
```

**Parameters**:

|  Name   | Type  |Mark|
|  ----  | ----  |----|
| addrStr  | string |target account address in bech32|
| product  | string |the name of target token pair|
| side  | string |"BUY" or "SELL"|
| start  | int |filter txs by start timestamp|
| end  | int |filter txs by end timestamp|
| page  | int |page number|
| perPage  | int | item's number per page|

**Results**

```go
// Order slice
type Order struct {
    TxHash         string
    OrderID        string
    Sender         string
    Product        string
    Side           string
    Price          string
    Quantity       string
    Status         int64
    FilledAvgPrice string
    RemainQuantity string
    Timestamp      int64
}
```

### 1.5 Get the closed orders of a specific account

```go
func (bc backendClient) QueryClosedOrders(addrStr, product, side string, start, end, page, perPage int) (orders []types.Order,err error)
```

**Parameters**:

|  Name   | Type  |Mark|
|  ----  | ----  |----|
| addrStr  | string |target account address in bech32|
| product  | string |the name of target token pair|
| side  | string |"BUY" or "SELL"|
| start  | int |filter txs by start timestamp|
| end  | int |filter txs by end timestamp|
| page  | int |page number|
| perPage  | int | item's number per page|

**Results**

```go
// Order slice
type Order struct {
    TxHash         string
    OrderID        string
    Sender         string
    Product        string
    Side           string
    Price          string
    Quantity       string
    Status         int64
    FilledAvgPrice string
    RemainQuantity string
    Timestamp      int64
}
```

### 1.6 Get the deals info of a specific account

```go
func (bc backendClient) QueryDeals(addrStr, product, side string, start, end, page, perPage int) (deals []types.Deal, err error)
```

**Parameters**:

|  Name   | Type  |Mark|
|  ----  | ----  |----|
| addrStr  | string |target account address in bech32|
| product  | string |the name of target token pair|
| side  | string |"BUY" or "SELL"|
| start  | int |filter txs by start timestamp|
| end  | int |filter txs by end timestamp|
| page  | int |page number|
| perPage  | int | item's number per page|

**Results**

```go
// Deal slice
type Deal struct {
    Timestamp   int64
    BlockHeight int64
    OrderID     string
    Sender      string
    Product     string
    Side        string
    Price       float64
    Quantity    float64
    Fee         string
    FeeReceiver string
}
```

### 1.7 Get the transactions of a specific account

```go
func (bc backendClient) QueryTransactions(addrStr string, typeCode, start, end, page, perPage int) (transactions []types.Transaction, err error)
```

**Parameters**:

|  Name   | Type  |Mark|
|  ----  | ----  |----|
| addrStr  | string |target account address in bech32|
| typeCode  | string |filter txs by txType, 1:Transfer 2:NewOrder 3:CancelOrder|
| side  | string |"BUY" or "SELL"|
| start  | int |filter txs by start timestamp|
| end  | int |filter txs by end timestamp|
| page  | int |page number|
| perPage  | int | item's number per page|

**Results**

```go
// Transaction slice
type Transaction struct {
    TxHash    string
    Type      int64
    Address   string
    Symbol    string
    Side      int64
    Quantity  string
    Fee       string
    Timestamp int64
}
```