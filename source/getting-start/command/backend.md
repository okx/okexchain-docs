
# backend

backend模块支持未成交订单、已成交订单历史、交易列表、手续费明细、撮合结果、K线数据、Ticker数据查询等功能，命令行如下:

```bash
okchaincli backend
```

二级子命令主要包含以下几个功能

## 用户订单列表：

#### 示例：

```bash
okchaincli backend orders [open/closed] [addr] [flags]


Flags:
      --end int          end timestamp. if start and end is set to 0, it means ignoring time condition.
  -h, --help             help for orders
      --hideNoFill       hide orders that have no fills
      --node string      <host>:<port> to tendermint rpc interface for this chain (default "tcp://localhost:26657")
      --page int         page num (default 1)
      --perPage int      items per page (default 50)
  -p, --product string   filter orders by product
      --side string      filter deals by side, support SELL|BUY, default for empty string means all
      --start int        start timestamp. if start and end is set to 0, it means ignoring time condition.

Global Flags:
      --chain-id string   Chain ID of tendermint node
  -e, --encoding string   Binary encoding (hex|b64|bcoin) (default "hex")
      --home string       directory for config and data (default "/Users/dwil/.okchaincli")
  -o, --output string     Output format (text|json) (default "text")
      --passwd string     Pass word of sender (default "12345678")
      --trace             print out full stack trace on errors

```

#### 成功返回：

```
# example
okchaincli backend orders open $(okchaincli keys show bob -a)
# example return
{
	"code": 0,
	"msg": "",
	"detailMsg": "",
	"data": {
		"data": [{
			"txHash": "7E71C87B9687D21CA0E4FE2044D28019949B5FFFB5CE9464A247CC95F463DC69",
			"orderId": "ID0000000011-1",
			"sender": "okchain15uj03h8c2dluhfr9d9ele68v36cl3whjhgq2ch",
			"product": "mycoin_okt",
			"side": "SELL",
			"price": "11.10000000",
			"quantity": "1.00000000",
			"status": 0,
			"filledAvgPrice": "0.00000000",
			"remainQuantity": "1.00000000",
			"timestamp": 1563890879
		}],
		"paramPage": {
			"page": 1,
			"perPage": 50,
			"total": 1
		}
	}
}
```

## 交易列表：

#### 示例：

```bash
okchaincli backend deals [flags]

Flags:
      --address string   filter deals by address
      --end int          filter deals by < end timestamp
  -h, --help             help for deals
      --node string      <host>:<port> to tendermint rpc interface for this chain (default "tcp://localhost:26657")
      --page int         page num (default 1)
      --perPage int      items per page (default 50)
      --product string   filter deals by product
      --side string      filter deals by side, support SELL|BUY|ALL, default for empty string means all
      --start int        filter deals by >= start timestamp

Global Flags:
      --chain-id string   Chain ID of tendermint node
  -e, --encoding string   Binary encoding (hex|b64|bcoin) (default "hex")
      --home string       directory for config and data (default "/Users/dwil/.okchaincli")
  -o, --output string     Output format (text|json) (default "text")
      --passwd string     Pass word of sender (default "12345678")
      --trace             print out full stack trace on errors

```

#### 成功返回：

```
# example
okchaincli backend deals --address=$(okchaincli keys show bob -a)
# example return
{
	"code": 0,
	"msg": "",
	"detailMsg": "",
	"data": {
		"data": [{
			"timestamp": 1563890996,
			"blockHeight": 127,
			"orderId": "ID0000000105-1",
			"sender": "okchain15uj03h8c2dluhfr9d9ele68v36cl3whjhgq2ch",
			"product": "mycoin_okt",
			"side": "SELL",
			"price": 4,
			"volume": 1,
			"fee": "0.00160000okt"
		}],
		"paramPage": {
			"page": 1,
			"perPage": 50,
			"total": 1
		}
	}
}
```

## 用户手续费明细：

#### 示例：

```bash
okchaincli backend fees [addr] [flags]

Flags:
  -h, --help          help for fees
      --node string   <host>:<port> to tendermint rpc interface for this chain (default "tcp://localhost:26657")
      --page int      page num (default 1)
      --perPage int   items per page (default 50)

Global Flags:
      --chain-id string   Chain ID of tendermint node
  -e, --encoding string   Binary encoding (hex|b64|bcoin) (default "hex")
      --home string       directory for config and data (default "/Users/dwil/.okchaincli")
  -o, --output string     Output format (text|json) (default "text")
      --passwd string     Pass word of sender (default "12345678")
      --trace             print out full stack trace on errors

```

#### 成功返回：

```
# example
okchaincli backend fees $(okchaincli keys show bob -a)
# example return
{
	"code": 0,
	"msg": "",
	"detailMsg": "",
	"data": {
		"data": [{
			"address": "okchain15uj03h8c2dluhfr9d9ele68v36cl3whjhgq2ch",
			"fee": "0.00160000okt",
			"feeType": "deal",
			"timestamp": 1563890996
		}, {
			"address": "okchain15uj03h8c2dluhfr9d9ele68v36cl3whjhgq2ch",
			"fee": "0.01250000okt",
			"feeType": "transfer",
			"timestamp": 1563890942
		}],
		"paramPage": {
			"page": 1,
			"perPage": 50,
			"total": 2
		}
	}
}
```

## 获得撮合结果列表：

#### 示例：

```bash
okchaincli backend matches [flags]

Flags:
      --end int          filter deals by < end timestamp
  -h, --help             help for matches
      --node string      <host>:<port> to tendermint rpc interface for this chain (default "tcp://localhost:26657")
      --page int         page num (default 1)
      --perPage int      items per page (default 50)
      --product string   filter deals by product
      --start int        filter deals by >= start timestamp

Global Flags:
      --chain-id string   Chain ID of tendermint node
  -e, --encoding string   Binary encoding (hex|b64|bcoin) (default "hex")
      --home string       directory for config and data (default "/Users/dwil/.okchaincli")
  -o, --output string     Output format (text|json) (default "text")
      --passwd string     Pass word of sender (default "12345678")
      --trace             print out full stack trace on errors


```

#### 成功返回：

```
# example
okchaincli backend matches
# example return
{
	"code": 0,
	"msg": "",
	"detailMsg": "",
	"data": {
		"data": [{
			"timestamp": 1563890996,
			"blockHeight": 127,
			"product": "mycoin_okt",
			"price": 4,
			"volume": 1
		}],
		"paramPage": {
			"page": 1,
			"perPage": 50,
			"total": 1
		}
	}
}
```

## 获得用户地址的历史交易列表：

#### 示例：

```bash
okchaincli backend txs [addr] [flags]

Flags:
      --end int       filter txs by end timestamp
  -h, --help          help for txs
      --node string   <host>:<port> to tendermint rpc interface for this chain (default "tcp://localhost:26657")
      --page int      page num (default 1)
      --perPage int   items per page (default 50)
      --start int     filter txs by start timestamp
      --type int      filter txs by txType

Global Flags:
      --chain-id string   Chain ID of tendermint node
  -e, --encoding string   Binary encoding (hex|b64|bcoin) (default "hex")
      --home string       directory for config and data (default "/Users/dwil/.okchaincli")
  -o, --output string     Output format (text|json) (default "text")
      --passwd string     Pass word of sender (default "12345678")
      --trace             print out full stack trace on errors

```

#### 成功返回：

```
# example
okchaincli backend txs $(okchaincli keys show bob -a)
# example return
{
	"code": 0,
	"msg": "",
	"detailMsg": "",
	"data": {
		"data": [{
			"txHash": "550101C97C83028F228542755F76A806D00D6635C64E5762EF6FD1667A900D81",
			"type": 2,
			"address": "okchain15uj03h8c2dluhfr9d9ele68v36cl3whjhgq2ch",
			"symbol": "mycoin_okt",
			"side": 2,
			"quantity": "1.00000000",
			"fee": "0.00000000okt",
			"timestamp": 1563890974
		}, {
			"txHash": "B287E99E1938FD2C4A6D31F6EBD928920572B4A9385FB4D1C630436985046112",
			"type": 1,
			"address": "okchain15uj03h8c2dluhfr9d9ele68v36cl3whjhgq2ch",
			"symbol": "okt",
			"side": 3,
			"quantity": "10000.00000000",
			"fee": "0.01250000okt",
			"timestamp": 1563890942
		}, {
			"txHash": "7E71C87B9687D21CA0E4FE2044D28019949B5FFFB5CE9464A247CC95F463DC69",
			"type": 2,
			"address": "okchain15uj03h8c2dluhfr9d9ele68v36cl3whjhgq2ch",
			"symbol": "mycoin_okt",
			"side": 2,
			"quantity": "1.00000000",
			"fee": "0.00000000okt",
			"timestamp": 1563890879
		}],
		"paramPage": {
			"page": 1,
			"perPage": 50,
			"total": 3
		}
	}
}
```

## 获取特定高度区块中的tx hash：

#### 示例：

```bash
okchaincli backend block_tx_hashes [height] [flags]

Flags:
  -h, --help          help for block-tx-hashes
      --node string   <host>:<port> to tendermint rpc interface for this chain (default "tcp://localhost:26657")

Global Flags:
      --chain-id string   Chain ID of tendermint node
  -e, --encoding string   Binary encoding (hex|b64|bcoin) (default "hex")
      --home string       directory for config and data (default "/Users/dwil/.okchaincli")
  -o, --output string     Output format (text|json) (default "text")
      --passwd string     Pass word of sender (default "12345678")
      --trace             print out full stack trace on errors

```

#### 成功返回：

```
# example
okchaincli backend block-tx-hashes 105
# example return
["550101C97C83028F228542755F76A806D00D6635C64E5762EF6FD1667A900D81"]

```

## 查询k线信息：

#### 示例：

```bash
okchaincli backend klines [flags]

Flags:
  -g, --granularity int   [60/180/300/900/1800/3600/7200/14400/21600/43200/86400/604800], second in unit (default 60)
  -h, --help              help for klines
      --node string       <host>:<port> to tendermint rpc interface for this chain (default "tcp://localhost:26657")
  -p, --product string    product of coin pairs (default "okt_xxx")
  -s, --size int          at most 1000 (default 1)

Global Flags:
      --chain-id string   Chain ID of tendermint node
  -e, --encoding string   Binary encoding (hex|b64|bcoin) (default "hex")
      --home string       directory for config and data (default "/Users/dwil/.okchaincli")
  -o, --output string     Output format (text|json) (default "text")
      --passwd string     Pass word of sender (default "12345678")
      --trace             print out full stack trace on errors

```

#### 成功返回：

```
# example
okchaincli backend klines -p mycoin_okt 

# example return
{
  "code": 0,
  "data": [
    [
      "2019-07-23T14:50:00.000Z",
      "11.0000",
      "11.0000",
      "11.0000",
      "11.0000",
      "0.00000000"
    ]
  ],
  "detailMsg": "",
  "msg": ""
}

```

## 查询行情：

#### 示例：

```bash
okchaincli backend tickers [flags]

Flags:
  -c, --count int        ticker count (default 10)
  -h, --help             help for tickers
      --node string      <host>:<port> to tendermint rpc interface for this chain (default "tcp://localhost:26657")
  -p, --product string   product of coin pairs (default "mycoin_okt")
  -s, --sort             true or false (default true)

Global Flags:
      --chain-id string   Chain ID of tendermint node
  -e, --encoding string   Binary encoding (hex|b64|bcoin) (default "hex")
      --home string       directory for config and data (default "/Users/dwil/.okchaincli")
  -o, --output string     Output format (text|json) (default "text")
      --passwd string     Pass word of sender (default "12345678")
      --trace             print out full stack trace on errors

```

#### 成功返回：

```
# example
okchaincli backend tickers -p mycoin_okt

# example return
{
  "code": 0,
  "data": [
    {
      "symbol": "mycoin_okt",
      "product": "mycoin_okt",
      "timestamp": 1563893602,
      "open": 4,
      "close": 11,
      "high": 11,
      "low": 4,
      "price": 11,
      "volume": 4,
      "change": 7,
      "changePercentage": "175.00%"
    }
  ],
  "detailMsg": "",
  "msg": ""
}
```
