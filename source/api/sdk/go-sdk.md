# Go SDK

SDK [下载](https://github.com/okex/okchain-go-sdk)

## 账户功能

### 创建账户

```go
func CreateAccount(name, passWd string)(keys.Info, string, error)
```
传入参数：

| Name | Type   | Description |
| ---- | ------ | ----------- |
| name | string | 账户姓名    |
| passWd | string | 账户密码    |

打印结果：

```go
// 账户接口实现类
type localInfo struct {
	Name         string        `json:"name"`
	PubKey       crypto.PubKey `json:"pubkey"`
	PrivKeyArmor string        `json:"privkey.armor"`
}

// 助记词
string
```

### 导入助记词生成账户

```go
func CreateAccountWithMnemo(mnemo, name, passWd string)(keys.Info, string, error)
```
传入参数：

| Name | Type   | Description |
| ---- | ------ | ----------- |
| mnemo | string | 助记词   |
| name | string | 账户姓名    |
| passWd | string | 账户密码    |

返回结果：

```go
// 账户接口实现类
type localInfo struct {
	Name         string        `json:"name"`
	PubKey       crypto.PubKey `json:"pubkey"`
	PrivKeyArmor string        `json:"privkey.armor"`
}

// 助记词
string
```

### 导入私钥生成账户

```go
func CreateAccountWithPrivateKey(privateKey, name, passWd string) (keys.Info, error)
```
传入参数：

| Name | Type   | Description |
| ---- | ------ | ----------- |
| privateKey | string | 私钥  |
| name | string | 账户姓名    |
| passWd | string | 账户密码    |

返回结果：

```go
// 账户接口实现类
type localInfo struct {
	Name         string        `json:"name"`
	PubKey       crypto.PubKey `json:"pubkey"`
	PrivKeyArmor string        `json:"privkey.armor"`
}
```

### 生成新的助记词

```go
func GenerateMnemonic() (string, error)
```
传入参数：无

返回结果：

```go
// 助记词
string
```


## tx交易功能

### 转账

```go
func (cli *OKChainClient) Send(fromInfo keys.Info, passWd, toAddr, coinsStr, memo string, accNum, seqNum uint64) (resp types.TxResponse, err error) 
```

传入参数：

| Name | Type   | Description |
| ---- | ------ | ----------- |
| fromInfo | keys.Info | 转账方账户  |
| passWd | string | 转账方账户密码    |
| toAddr | string | 收款方地址    |
| coinsStr | string | 转账金额串    |
| memo | string | 备注信息    |
| accNum | uint64 | 转账方此时的AccountNumber    |
| seqNum | uint64 | 转账方此时的SequenceNumber    |

返回结果：

```go
// Tx回复信息
type TxResponse struct {
	Height    int64           `json:"height"`
	TxHash    string          `json:"txhash"`
	Code      uint32          `json:"code,omitempty"`
	Data      string          `json:"data,omitempty"`
	RawLog    string          `json:"raw_log,omitempty"`
	Logs      ABCIMessageLogs `json:"logs,omitempty"`
	Info      string          `json:"info,omitempty"`
	GasWanted int64           `json:"-"`
	GasUsed   int64           `json:"-"`
	Tags      StringTags      `json:"tags,omitempty"`
	Codespace string          `json:"codespace,omitempty"`
	Tx        Tx              `json:"tx,omitempty"`
	Timestamp string          `json:"timestamp,omitempty"`
}
```

### 挂单

```go
func (cli *OKChainClient) NewOrder(fromInfo keys.Info, passWd, product, side, price, quantity, memo string, accNum, seqNum uint64) (types.TxResponse, error)
```

传入参数：

| Name | Type   | Description |
| ---- | ------ | ----------- |
| fromInfo | keys.Info | 挂单方账户  |
| passWd | string | 挂单方账户密码    |
| product | string | 数字资产交易对名称    |
| side | string | "BUY"或"SELL"    |
| price | string | 挂单价格（精度不能大于一位小数）   |
| quantity | string | 挂单数量（精度不能大于两位小数）    |
| memo | string | 备注信息    |
| accNum | uint64 | 挂单方此时的AccountNumber    |
| seqNum | uint64 | 挂单方此时的SequenceNumber    |

返回结果：

```go
// Tx回复信息
type TxResponse struct {
	Height    int64           `json:"height"`
	TxHash    string          `json:"txhash"`
	Code      uint32          `json:"code,omitempty"`
	Data      string          `json:"data,omitempty"`
	RawLog    string          `json:"raw_log,omitempty"`
	Logs      ABCIMessageLogs `json:"logs,omitempty"`
	Info      string          `json:"info,omitempty"`
	GasWanted int64           `json:"-"`
	GasUsed   int64           `json:"-"`
	Tags      StringTags      `json:"tags,omitempty"`
	Codespace string          `json:"codespace,omitempty"`
	Tx        Tx              `json:"tx,omitempty"`
	Timestamp string          `json:"timestamp,omitempty"`
}
```

### 撤单

```go
func (cli *OKChainClient) CancelOrder(fromInfo keys.Info, passWd, orderID, memo string, accNum, seqNum uint64) (types.TxResponse, error) 
```

传入参数：

| Name | Type   | Description |
| ---- | ------ | ----------- |
| fromInfo | keys.Info | 撤单方账户  |
| passWd | string | 撤单方账户密码    |
| orderID | string | 订单ID  |
| memo | string | 备注信息    |
| accNum | uint64 | 撤单方此时的AccountNumber    |
| seqNum | uint64 | 撤单方此时的SequenceNumber    |

返回结果：

```go
// Tx回复信息
type TxResponse struct {
	Height    int64           `json:"height"`
	TxHash    string          `json:"txhash"`
	Code      uint32          `json:"code,omitempty"`
	Data      string          `json:"data,omitempty"`
	RawLog    string          `json:"raw_log,omitempty"`
	Logs      ABCIMessageLogs `json:"logs,omitempty"`
	Info      string          `json:"info,omitempty"`
	GasWanted int64           `json:"-"`
	GasUsed   int64           `json:"-"`
	Tags      StringTags      `json:"tags,omitempty"`
	Codespace string          `json:"codespace,omitempty"`
	Tx        Tx              `json:"tx,omitempty"`
	Timestamp string          `json:"timestamp,omitempty"`
}
```

## 信息查询

### 账户信息查询

```go
func (cli *OKChainClient) GetAccountInfoByAddr(addr string) (types.Account, error)
```

传入参数：

| Name | Type   | Description |
| ---- | ------ | ----------- |
| addr | string | 查询账户地址  |

返回结果：

```go
// 账户接口实现类
type BaseAccount struct {
	Address       AccAddress    `json:"address"`
	Coins         Coins         `json:"coins"`
	PubKey        crypto.PubKey `json:"public_key"`
	AccountNumber uint64        `json:"account_number"`
	Sequence      uint64        `json:"sequence"`
}
```

### 账户持有数字资产信息查询

```go
func (cli *OKChainClient) GetTokensInfoByAddr(addr string) (types.AccountTokensInfo, error)
```

传入参数：

| Name | Type   | Description |
| ---- | ------ | ----------- |
| addr | string | 查询账户地址  |

返回结果：

```go
// 返回持有数字资产信息
type AccountTokensInfo struct{
	Address    string    `json:"address"`
	Currencies CoinsInfo `json:"currencies"`
}
```

### 账户持有特定数字资产信息查询

```go
func (cli *OKChainClient) GetTokenInfoByAddr(addr, symbol string) (types.AccountTokensInfo, error)
```

传入参数：

| Name | Type   | Description |
| ---- | ------ | ----------- |
| addr | string | 查询账户地址  |
| symbol | string | 查询数字资产名称  |

返回结果：

```go
// 返回持有数字资产信息
type AccountTokensInfo struct{
	Address    string    `json:"address"`
	Currencies CoinsInfo `json:"currencies"`
}
```

### 链上所有数字资产信息查询

```go
func (cli *OKChainClient) GetTokensInfo() ([]types.Token, error)
```

传入参数：无

返回结果：

```go
// 返回数字资产信息切片
[]types.Token
```

### 链上特定数字资产信息查询

```go
func (cli *OKChainClient) GetTokenInfo(symbol string) (types.Token, error)
```

传入参数：

| Name | Type   | Description |
| ---- | ------ | ----------- |
| symbol | string | 查询数字资产名称  |

返回结果：

```go
// 返回数字资产信息
type Token struct {
	Desc           string     `json:"desc"`
	Symbol         string     `json:"symbol"`
	OriginalSymbol string     `json:"originalSymbol"`
	WholeName      string     `json:"wholeName"`
	TotalSupply    int64      `json:"totalSupply"`
	Owner          AccAddress `json:"owner"`
	Mintable       bool       `json:"mintable"`
}
```

### 链上所有数字资产交易对信息查询

```go
func (cli *OKChainClient) GetProductsInfo() ([]types.TokenPair, error)
```

传入参数：无

返回结果：

```go
// 返回数字资产交易对信息切片
[]types.TokenPair
```

### 交易深度信息查询

```go
func (cli *OKChainClient) GetDepthbookInfo(product string) (types.BookRes, error)
```

传入参数：

| Name | Type   | Description |
| ---- | ------ | ----------- |
| product | string | 查询数字资产交易对名称  |

返回结果：

```go
// 返回某数字资产交易对的交易深度信息
type BookRes struct {
	Asks []BookResItem `json:"asks"`
	Bids []BookResItem `json:"bids"`
}
```

### K线信息查询

```go
func (cli *OKChainClient) GetCandlesInfo(product string, granularity, size int) ([][]string, error)
```

传入参数：

| Name | Type   | Description |
| ---- | ------ | ----------- |
| product | string | 查询数字资产交易对名称  |
| granularity | int | 时间颗粒度，时间粒度，以秒为单位，如[60/180/300/900/1800/3600/7200/14400/21600/43200/86400/604800]  |
| size | int | 获取k线数据的数量，最多1000条  |

返回结果：

```go
// 返回某数字资产交易对的K线信息
[][]string
```

### 交易行情信息查询

```go
func (cli *OKChainClient) GetTickersInfo(count int) (types.Tickers, error)
```

传入参数：

| Name | Type   | Description |
| ---- | ------ | ----------- |
| count | int | 获取到交易行情条数（不输入，则默认值为100） |

返回结果：

```go
// 返回交易行情信息切片
type Tickers []Ticker
```

### 某数字资产交易对最近成交记录信息查询

```go
func (cli *OKChainClient) GetRecentTxRecord(product string, start, end, page, perPage int) ([]types.MatchResult, error)
```

传入参数：

| Name | Type   | Description |
| ---- | ------ | ----------- |
| product | string | 查询数字资产交易对名称  |
| start | int | 起始日期（时间戳，以秒为单位）  |
| end | int | 结束日期（时间戳，以秒为单位）  |
| page | int | 页号  |
| perPage | int | 每页条数（输入0，对应默认值为50；输入大于200，将以200为准）  |

返回结果：

```go
// 返回最近成交记录信息切片
[]types.MatchResult
```

### 某地址未成交订单信息查询

```go
func (cli *OKChainClient) GetOpenOrders(addr, product, side string, start, end, page, perPage int) ([]types.Order, error)
```

传入参数：

| Name | Type   | Description |
| ---- | ------ | ----------- |
| addr | string | 账户地址  |
| product | string | 查询数字资产交易对名称  |
| side | string | "BUY"或"SELL"  |
| start | int | 起始日期（时间戳，以秒为单位）  |
| end | int | 结束日期（时间戳，以秒为单位）  |
| page | int | 页号  |
| perPage | int | 每页条数（输入0，对应默认值为50；输入大于200，将以200为准）  |

返回结果：

```go
// 返回未成交订单信息切片
[]types.Order
```

### 某地址已成交订单信息查询

```go
func (cli *OKChainClient) GetClosedOrders(addr, product, side string, start, end, page, perPage int) ([]types.Order, error)
```

传入参数：

| Name | Type   | Description |
| ---- | ------ | ----------- |
| addr | string | 账户地址  |
| product | string | 查询数字资产交易对名称  |
| side | string | "BUY"或"SELL"  |
| start | int | 起始日期（时间戳，以秒为单位）  |
| end | int | 结束日期（时间戳，以秒为单位）  |
| page | int | 页号  |
| perPage | int | 每页条数（输入0，对应默认值为50；输入大于200，将以200为准）  |

返回结果：

```go
// 返回已成交订单信息切片
[]types.Order
```

### 某地址的成交明细信息查询

```go
func (cli *OKChainClient) GetDealsInfo(addr, product, side string, start, end, page, perPage int) ([]types.Deal, error)
```

传入参数：

| Name | Type   | Description |
| ---- | ------ | ----------- |
| addr | string | 账户地址  |
| product | string | 查询数字资产交易对名称  |
| side | string | "BUY"或"SELL"  |
| start | int | 起始日期（时间戳，以秒为单位）  |
| end | int | 结束日期（时间戳，以秒为单位）  |
| page | int | 页号  |
| perPage | int | 每页条数（输入0，对应默认值为50；输入大于200，将以200为准）  |

返回结果：

```go
// 返回成交明细信息切片
[]types.Deal
```

### 某地址的交易记录信息查询

```go
func (cli *OKChainClient) GetTransactionsInfo(addr string, type_, start, end, page, perPage int) ([]types.Transaction, error)
```

传入参数：

| Name | Type   | Description | 
| ---- | ------ | ----------- |
| addr | string | 账户地址  |
| type_ | int | 账单类型，0:所有类型, 1:Transfer, 2:NewOrder, 3:CancelOrder  |
| start | int | 起始日期（时间戳，以秒为单位）  |
| end | int | 结束日期（时间戳，以秒为单位）  |
| page | int | 页号  |
| perPage | int | 每页条数（输入0，对应默认值为50；输入大于200，将以200为准）  |

返回结果：

```go
// 返回交易记录信息切片
[]types.Transaction
```

## 节点信息查询

### 某高度区块信息查询

```go
func (cli *OKChainClient) QueryBlock(height *int64) (*ctypes.ResultBlock, error)
```

传入参数：

| Name | Type   | Description | 
| ---- | ------ | ----------- |
| height | *int64 | 区块高度（指针）  |

返回结果：

```go
// 返回区块信息
type ResultBlock struct {
	BlockMeta *types.BlockMeta `json:"block_meta"`
	Block     *types.Block     `json:"block"`
}
```

### 某交易查询

```go
func (cli *OKChainClient) QueryTx(txHash []byte, prove bool) (*ctypes.ResultTx, error)
```

传入参数：

| Name | Type   | Description | 
| ---- | ------ | ----------- |
| txHash | []byte | 待查询交易哈希，必须为hex解码后的字节切片  |
| prove | bool | 是否需要证明，默认为false  |

返回结果：

```go
// 返回交易的查询信息
type ResultTx struct {
	Hash     cmn.HexBytes           `json:"hash"`
	Height   int64                  `json:"height"`
	Index    uint32                 `json:"index"`
	TxResult abci.ResponseDeliverTx `json:"tx_result"`
	Tx       types.Tx               `json:"tx"`
	Proof    types.TxProof          `json:"proof,omitempty"`
}
```

### 当前所有Validator信息查询

```go
func (cli *OKChainClient) QueryCurrentValidators() (sdktypes.ResultValidatorsOutput, error)

```

传入参数：无

返回结果：

```go
// 返回当前所有validator的信息集合
type ResultValidatorsOutput struct {
	BlockHeight int64             `json:"block_height"`
	Validators  []ValidatorOutput `json:"validators"`
}
```

### 当前所有提案查询

```go
func (cli *OKChainClient) QueryProposals() (sdktypes.Proposals, error)
```

传入参数：无

返回结果：

```go
// 返回当前所有提案的集合
sdktypes.Proposals
```

### 根据提案ID查询提案

```go
func (cli *OKChainClient) QueryProposalByID(proposalID uint64) (sdktypes.Proposal, error)
```

传入参数：

| Name | Type   | Description | 
| ---- | ------ | ----------- |
| proposalID | uint64 | 提案ID  |

返回结果：

```go
// 返回提案信息（接口）
type Proposal interface {
	GetProposalID() uint64
	SetProposalID(uint64)

	GetTitle() string
	SetTitle(string)

	GetDescription() string
	SetDescription(string)

	GetProposalType() ProposalKind
	SetProposalType(ProposalKind)

	GetStatus() ProposalStatus
	SetStatus(ProposalStatus)

	GetFinalTallyResult() TallyResult
	SetFinalTallyResult(TallyResult)

	GetSubmitTime() time.Time
	SetSubmitTime(time.Time)

	GetDepositEndTime() time.Time
	SetDepositEndTime(time.Time)

	GetTotalDeposit() DecCoins
	SetTotalDeposit(DecCoins)

	GetVotingStartTime() time.Time
	SetVotingStartTime(time.Time)

	GetVotingEndTime() time.Time
	SetVotingEndTime(time.Time)

	String() string

	GetProtocolDefinition() ProtocolDefinition
	SetProtocolDefinition(ProtocolDefinition)
}
```
