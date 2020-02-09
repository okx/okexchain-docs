
# HTTP API
The OKChain HTTP API provides access to an OKChain Chain node deployment and market data services.

## 账户（Accounts）
### 获取account地址信息

http接口：
```http
GET okchain/v1/accounts/{address}
```

接口参数：

|Name|Type|Required|Description|
|:---:|:---:|:---:|:---:|
|address|String|true|账户地址|

Response:

```
    {
      "code": 0,
      "msg": "",
      "detailMsg": "",
      "data": {
        "address": "okchain1gaszdnrmghask7kz8n2tdxq0wk2a69z9336mjh",
        "currencies": [
          {
            "symbol": "okt",
            "available": "10000000.00000000",
            "freeze": "0",
            "locked": "0"
          }
        ]
      }
    }
    
```

### 获取用户所有数字资产信息

http接口:

```http
GET  okchain/v1/accounts/{address}?show=all
```

接口参数：

|Name|Type|Required|Description|
|:---:|:---:|:---:|:---|
|address|String|	true|	账户地址|
|show|String|false|是否显示所有数字资产，all或者partial,默认为partial|

Response:

```json
{
	"code": 0,
	"data": {
		"address": "okchain10q0rk5qnyag7wfvvt7rtphlw589m7frsmyq4ya",
		"currencies": [{
			"symbol": "acoin",
			"available": "10000000.00000000",
			"freeze": "0",
			"locked": "0"
		  }, {
            "symbol": "bcoin",
			"available": "10000000.00000000",
			"freeze": "0",
			"locked": "0"
        }]
	},
	"detailMsg": "",
	"msg": ""
}
```



### 获取用户单个数字资产信息

http接口:

```http
GET okchain/v1/accounts/{address}?symbol="bcoin"
```

接口参数：

|Name|Type|Required|Description|
|:---:|:---:|:---:|:---:|
|address|String|	true|	账户地址|
|symbol|	String|	true|	数字资产|

Response:

```json
{
	"code": 0,
	"data": {
		"address": "okchain10q0rk5qnyag7wfvvt7rtphlw589m7frsmyq4ya",
		"currencies": [{
			"symbol": "acoin",
			"available": "10000000.00000000",
			"freeze": "0",
			"locked": "0"
		}, {
      "symbol": "bcoin",
			"available": "10000000.00000000",
			"freeze": "0",
			"locked": "0"
    }]
	},
	"detailMsg": "",
	"msg": ""
}
```
## 行情（Markets）
### 获取所有数字资产的信息

http接口:

```http
GET okchain/v1/tokens
```

接口参数：无

Response:

```json
{
	"code": 0,
	"data": [{
    "desc": "bcoin",
		"symbol": "bcoin",
		"orginalSymbol": "bcoin",
    "wholeName": "bcoin",
		"totalSupply": "210000000",
		"owner": "okchain1kyh26rw89f8a4ym4p49g5z59mcj0xs4j045e39",
		"mintable": true
	}],
	"detailMsg": "",
	"msg": ""
}
```

### 获取单个数字资产的信息

http接口:

```http
GET okchain/v1/token/{symbol}
```

接口参数：

|Name|Type|Required|Description|
|:---:|:---:|:---:|:---:|
|symbol|	String|	true|	数字资产名称|

Response:

```json
{
	"code": 0,
	"msg": "",
	"detailMsg": "",
	"data": {
		"desc": "",
		"symbol": "bcoin-805",
		"originalSymbol": "bcoin",
		"wholeName": "bcoin",
		"totalSupply": "200000",
		"owner": "okchain10q0rk5qnyag7wfvvt7rtphlw589m7frsmyq4ya",
		"mintable": false
	}
}
```

### 获取所有数字资产交易对的信息

http接口: 

```http
GET okchain/v1/products
```

接口参数：无


Response:

```json
{
	"code": 0,
	"msg": "",
	"detailMsg": "",
	"data": [{
		"baseAssetSymbol": "acoin",
		"quoteAssetSymbol": "okt",
		"price": "10.00000000",
		"maxPriceDigit": "1",
		"maxSizeDigit": "2",
		"minTradeSize": "0.10000000",
		"tokenPairId": "0"
	}]
}
```
### 获取交易深度信息

http接口: 
```http
GET okchain/v1/order/depthbook
```

接口参数：

|Name|Type|Required|Description|
|:---:|:---:|:---:|:---:|
|product|String|    true| 数字资产对信息eg:btc_okt |
|size|Number|false|档位（maxSize:200）,第一版固定为200|


Response:

```Response

{
	"code": 0,
	"data": {
	    "asks": [{
	        #卖方深度  排序：asc
            "price": "string", #价格
            "quantity": "string" #数量
        }],
        "bids": [{
            #买方深度 排序：desc
            "price": "string",#价格
            "quantity": "string"#数量
        }]
    },
    "msg": "string"
}

```

### 获取交易K线信息

http接口: 
```http
GET okchain/v1/candles/{product}?granularity=21600&size=1000
```

接口参数：

|Name |Type |Required|Example|Description|
|:---:|:---:|:------:|:--- : |:-------:|
|product|String|     true|bcoin_okt|数字资产交易对名称|
|granularity|int|false|180<br>60|时间颗粒度，时间粒度，以秒为单位，默认值60. 如[60/180/300/900/1800/3600/7200/14400/21600/43200/86400/604800]<br>对应{1min,3min,5min,15min,30min,1hour,2hour,4hour,6hour,12hour,1day,1week}|
|size|int|false|100|获取k线数据的数量，最多1000条.默认值100|

Response:

```Response

{
    "code": 0,#0:成功，其他：失败
    "data": [[
        "2018-07-12T04:00:00.000Z",#创建时间
        "6343.3587"#开盘价
        "6345.0453",#最高价
        "6142.2336",#最低价
        "6186.8354",#收盘价
        "8429.75582698",#成交量
    ]],
    "detailMsg": "string",
    "msg": "string"
}

```

### 获取所有的交易行情信息

http接口: 
```http
GET okchain/v1/tickers
```

接口参数：

|Name|Type|Required|Description|
|:---:|:---:|:---:|:---:|
|count|int|false|获取条数,默认值100|

Response:

```Response

{
    "code": 0,
    "data": [{
        "close": "29.777",#24小时 close
        "high": "55.44", #最高成交价
        "low": "22.22", #最低成交价
        "open": "55.44",#24小时 open
        "price": "29.777",#最新成交价
        "product": "bcoin-2ac_okt",#数字资产交易对
        "symbol": "bcoin-2ac_okt",
        "timestamp": "2019-07-25T09:49:04.954Z",#时间戳
        "volume": "266.64",#成交量
    }],
    "detailMsg": "",
    "msg": ""
}

```

### 获取某数字资产交易对最近成交记录

http接口: 
```http
GET okchain/v1/matches
```

接口参数：

|Name|Type|Required|Description|
|:---:|:---:|:---:|:---|
|product|String|    true|    数字资产交易对|
|start|    int|    false|起始日期（时间戳，以秒为单位）|
|end|    int    |false    |结束日期（时间戳，以秒为单位）|
|page    |int    |false    |页号|
|perPage|    int    |false    |每页条数|

Response:

```

{
  "code": 0,
  "msg": "",
  "detailMsg": "",
  "data": {
    "data": [
        {
          "timestamp": 1559790137,
          "blockHeight": 386355,
          "product": "acoin-564_okt",
          "price": 3,
          "volume": 0.25
        },
        {
          "timestamp": 1559789554,
          "blockHeight": 386159,
          "product": "acoin-564_okt",
          "price": 1.9999,
          "volume": 2.9999
        },
        {
          "timestamp": 1559788804,
          "blockHeight": 385931,
          "product": "acoin-564_okt",
          "price": 1,
          "volume": 1
        }
    ],
    "paramPage": {
        "page": 1,
        "perPage": 50,
        "total": 3
    }
  }
}

```

## 交易（Trades）
### 下单（在base中）

http接口： 
```http
POST okchain/v1/txs
```

post发送内容：

```

{
    "tx": {
        "msg": [{
            "type": "order/new",
            "value": {
                "BatchNumber": "0",//后端测试用，可忽略，将来会去掉
                "Sender": "okchain1t2cvfv58764q4wdly7qjx5d2z89lewvwq2448n",//发送者address
                "Product": "mycoin_okt",//数字资产交易对
                "Side": "BUY",
                "Price": "1",//价格
                "Quantity": "0.1"//数量
            }
        }],
        "signatures": [{
            "pub_key": {
                "type": "tendermint/PubKeySecp256k1",
                "value": "AsfvubxdC51g5kpHh3ibtjEsm0INdvrpOgrzw/BcGExK"
            },
            "signature": "xce6VKVxf5nmOumEqVK2n8QiZG3mBi9P+SGTvDCHLAZxP9p8/zS/+VhVzWGI7tppW2uGNz/iToubTvHTd4y9KA=="
        }],
        "memo": "jin tian ye yao jia you ya"
    },
    "mode": "block"
}

```

签名内容：（拿私钥对以下信息签名生成上面的signature）

```

{
    "account_number": "0",
    "chain_id": "okchain",
    "memo": "jin tian ye yao jia you ya",
    "msgs": [{
	     "BatchNumber": "0",
	     "Price": "1",
	     "Product": "mycoin_okt",
	     "Quantity": "0.1",
	     "Sender": "okchain1t2cvfv58764q4wdly7qjx5d2z89lewvwq2448n",
	     "Side": "BUY"
    }],
    "sequence": “4”
}

```

Response:

```Response

{
    "height": "97",
    "txhash": "E270C8DB83C1C1E03C090656BB96A8539B94A19F4C6F6D1A1E10428C6BA0CA8B",
    "logs": [{
        "msg_index": "0",
        "success": true,
        "log": ""
    }],
    "gas_wanted": "200000",
    "gas_used": "55151",
    "tags": [{
        "key": "action",
        "value": "new"
        }, {
            "key": "orderId",
            "value": "ID0000000097-1"
        }, {
            "key": "batch_number",//可忽略
            "value": "1"
        }
    }]
}

```

### 撤单 （在base中）

http接口： 
```http
POST okchain/v1/txs
```

post发送内容：

```

{
    "tx": {
        "msg": [{
            "type": "order/cancel",
            "value": {
                "Sender": "cosmos1ln5zguv3pccm59e4dmdtjxuw24a0cv7p4v8cl8",
                "OrderId": "ID0000000006-0000"
            }
        }],
        "signatures": [{
            "pub_key": {
                "type": "tendermint/PubKeySecp256k1",
                "value": "AtXflms2umhaIZ4MX4pVFr23y3im37LXz+yvUNnDirtJ"//公钥
            },
            "signature": "/bPROoTE3yBBT9tLb6MzDIdHQHUeRvASRteoJ2aDW00/xEkUqS0zzWxf6GF87Fu1f3uNXle5b0rYOxqbi5IeuA=="
        }],
        "memo": ""//备注
    },
    "mode": "block"//sync模式在checkTx后返回,async模式立即返回,block模式在打包入块之后返回
}

```

签名内容：

```

{
    "account_number": "0",//account在blockchain上面的序号
    "chain_id": "okchain",
    "memo": "",
    "msgs": [{
        "OrderId": "ID0000000006-0000",
        "Sender": "cosmos1ln5zguv3pccm59e4dmdtjxuw24a0cv7p4v8cl8"
    }],
    "sequence": "13"//该account发送transaction的序号
}

```

Response:

```

{
    "height": "99",//block height
    "txhash": "DD7B4552433912580431F58BBABADF93F50C511B9F7BDC711CFD81B6DD65364B",//transaction hash
    "logs": [{
        "msg_index": "0",
        "success": true,
        "log": ""
    }],
    "gas_wanted": "200000", // gas使用上限
    "gas_used": "91073", // gas消耗值
    "tags": [{
        "key": "action",
        "value": "cancel"
        }, {
            "key": "orderId",
            "value": "ID0000000097-1"
        }
    }]
}

```

### 转账（在base中）

http接口： 
```http
POST okchain/v1/txs
```

post发送内容：

```

{
    "tx": {
        "msg": [{
            "type": "cosmos-sdk/MsgSend",
            "value": {
                "from_address": "cosmos1jckxfddx3w8m288srv4m4ueyxpas2fuc3wclru",
                "to_address": "cosmos1c97ekk5a5907a0wkd6wxy903sytnytr4mjfgze",
                "amount": [{
                    "denom": "okt",
                    "amount": "1000000000000000000"
                }]
            }
        }],
        "signatures": [{
            "pub_key": {
                "type": "tendermint/PubKeySecp256k1",
                "value": "Ar2qgMNVp0DHOuO3TRBHtirkEwV5LXign7kJomL6WeX2"
            },
            "signature": "wy4e2eQfJ0oew6Dta0SAV7qAmsc6YUDwYUqiIj1htdFVREGQz0inVNOS4YEuhLbFlV9ZvHMASCOf1hzqnhsB5w=="
        }],
        "memo": ""
    },
    "mode": "block"
}

```

签名内容：（拿私钥对以下信息签名生成上面的signature）

```Response

{
    "account_number": "0",
    "chain_id": "okchain",
    "memo": "",
    "msgs": [{
        "type": "cosmos-sdk/MsgSend",
        "value": {
            "amount": [{
                "amount": "1000000000000000000",
                "denom": "okt"
            }],
            "from_address": "cosmos1jckxfddx3w8m288srv4m4ueyxpas2fuc3wclru",
            "to_address": "cosmos1c97ekk5a5907a0wkd6wxy903sytnytr4mjfgze"
        }
    }],
    "sequence": "13"
}

```

Response:

```Response

{
    "height": "96",
    "txhash": "24EEA9C89959509F945792DD0AFD8A2064444CA3E863E2B7C6D78ED646FF8AAF",
    "logs": [
        {
            "msg_index": "0",
            "success": true,
            "log": ""
        }
    ],
    "gas_wanted": "200000",
    "gas_used": "39218",
    "tags": [{
        "key": "action",
        "value": "send"
        }, {
            "key": "sender",
            "value": "okchain1t2cvfv58764q4wdly7qjx5d2z89lewvwq2448n"
        }, {
            "key": "recipient",
            "value": "okchain1ejwsk9wgwrcwgmee785vjf2a7su7erryhet8eh"   
    }]
}

```

### 未成交订单

http接口:
```http
GET okchain/v1/order/list/open？product=mycoin_okt&address=cosmos1hghms6dtm8quxegrkcnw4wnzj5e5sc4am0gxyr&start=1556541851&end=1556541851&page=0&perPage=50
```

接口参数：

|Name|Type|Required|Description|
|:---:|:---:|:---:|:---|
|product    |String|    false|    数字资产交易对|
|address|    String|    true|    地址|
|start    |int|    false|    开始时间戳|
|end    |int|    false|    结束时间戳|
|side|string|false|BUY/SELL|
|page    |int|    false|    第几页|
|perPage    |int|    false|    每页多少行|

Response:

参数：获取全部数字资产交易对的委托单时不传product参数

Response:

```Response

{
    "code": "0",
    "msg": "",
    "detailMsg": "",
    "data": {
        "data":[
            {
                "TxHash":"2144D0F85B67D9508066004400BF8044010ED5FC4B43417F9A44CDC3EBAD9765",
                "OrderId": "O0000000008-0000",
                "Sender": "cosmos1hghms6dtm8quxegrkcnw4wnzj5e5sc4am0gxyr",
                "Product": "mycoin_okt",
                "Side": "BUY",
                "Price": "10.000000000000000000",
                "Quantity": "1.100000000000000000",
                "Status": "0",  //(0-5) -> (Open, Filled, Cancelled, Expired,
                // PartialFilledCancelled, PartialFilledExpired)
                "FilledAvgPrice": "10.000000000000000000",
                "RemainQuantity": "0.100000000000000000",
                "Timestamp": "1553842734"
            },
        ],
        "paramPage": {
            "total": "3",
            "page": 1,
            "perPage": 50,
        }
    }
}

```

### 历史订单
http接口:

```http
GET okchain/v1/order/list/closed
```

接口参数：address, product, start, end, page, perPage。全部数字资产交易对时不传product参数

|Name|Type|Required|Description|
|:---:|:---:|:---:|:---|
|product    |String|    false|    数字资产交易对|
|address|    String|    true|    地址|
|side|String|false|没有该字段则都要"BULL","SELL"|
|hideNoFill|int|false|关于完全撤销或者完全过期订单 0:不隐藏 1:隐藏|
|start    |int|    false|    开始时间戳|
|end    |int|    false|    结束时间戳|
|page    |int|    false|    第几页|
|perPage    |int|    false|    每页多少行|

Response:

```Response

{
    "code": "0",
    "msg": "",
    "detailMsg": "",
    "data": {
        "data":[
            {
                "TxHash": "2144D0F85B67D9508066004400BF8044010ED5FC4B43417F9A44CDC3EBAD9765",
                "OrderId": "O0000000008-0000",
                "Sender": "cosmos1hghms6dtm8quxegrkcnw4wnzj5e5sc4am0gxyr",
                "Product": "mycoin_okt",
                "Side": "BUY",
                "Price": "10.000000000000000000",
                "Quantity": "1.100000000000000000",
                "Status": "0",  //(0-5) -> (Open, Filled, Cancelled, Expired,
                 // PartialFilledCancelled, PartialFilledExpired)
                "FilledAvgPrice": "10.000000000000000000",
                "RemainQuantity": "0.100000000000000000",
                "Timestamp": "1553842734"
            },
        ],
    "paramPage": {
        "total": "3",
        "page": 1,
        "perPage": 50,
    }
}

```

### 链上交易历史
http接口:
```http
GET okchain/v1/block_tx_hashes/{blockHeight}
```

参数：blockHeight 块高 int类型

response: txHash列表，string类型
```
    [
        "hash1",
        "hash2",
        ...
    ]

```

### 费用历史
http接口：
```http
GET okchain/v1/fees
```

接口参数：

|Name|Type|Required|Description|
|:---:|:---:|:---:|:---:|
|address    |String|    true|    账户地址|
|page|    int|    false|    页号|
|perPage|int|false|每页条数|

Response:

```Response
{
    "code": 0,
    "msg": "",
    "detailMsg": "",
    "data": {
        "data": [
            {
                "address": "okchain1lzekrp7dezrs940m7c0nnhjvyhlzppnaf6vjsy",
                "fee": "0.01250000okt",
                "feeType": "transfer",  // 手续费类型：transfer/new/cancel/expire/deal
                "timestamp": 1558407348
            }
        ],
    "paramPage": {
    "page": 1,
    "perPage": 50,
    "total": 1
        }
    }
}

```


## 账单（Deals）
### 获取成交明细

http接口: 
```http
GET okchain/v1/deals
```

接口参数：

|Name|Type|Required|Description|
|:---:|:---:|:---:|:---|
|address|String|	true|	账户地址|
|product|String|	false|	数字资产交易对|
|side|String|false|没有该字段则都要 "BUY", "SELL"|
|start|	int|	false|起始日期（时间戳，以秒为单位）|
|end|	int	|false	|结束日期（时间戳，以秒为单位）|
|page	|int	|false	|页号|
|perPage|	int	|false	|每页条数|

Response:

```Response

{
    "code": 0,
    "msg": "",
    "detailMsg": "",
    "data": {
        "data": [
            {
                "timestamp": 1558407585,
                "blockHeight": 463,
                "orderId": "ID0000000463-1",
                "sender": "okchain15wv9q08rv0f8dg08scv2ps45hs6v8qx37466qj",
                "product": "mycoin_okt",
                "side": "SELL",
                "price": 10,
                "volume": 1,
                "fee": "0.00400000okt"
            },
            {
                "timestamp": 1558407585,
                "blockHeight": 463,
                "orderId": "ID0000000010-1",
                "sender": "okchain1lzekrp7dezrs940m7c0nnhjvyhlzppnaf6vjsy",
                "product": "mycoin_okt",
                "side": "BUY",
                "price": 10,
                "volume": 1,
                "fee": "0.00400000okt"
            }
        ],
        "paramPage": {
            "page": 1,
            "perPage": 50,
            "total": 2
        }
    }
}

```

### 获取交易记录

http接口: 
```http
GET okchain/v1/transactions
```

接口参数：

|Name|Type|Required|Description|
|:---:|:---:|:---:|:---|
|address|    string|    true|    user address|
|type|int|false|账单类型，1:Transfer, 2:NewOrder, 3:CancelOrder|
|start    |int|    false| 起始日期 |
|end    |int|    false|    结束日期|
|page    |int|    false|    页号|
|perPage    |int|    false|    每页条数|

Response:

```Response

{
    "code": 0,
    "msg": "",
    "detailMsg": "",
    "data": {
        "data": [
            {
                "txHash":"3BEE2A0FDDD5EB077236879E139DC565580139F61ED6E391B2557D4A8F74BE83",
                "type": 1,  // 1:Transfer, 2:NewOrder, 3:CancelOrder
                "address": "okchain1lzekrp7dezrs940m7c0nnhjvyhlzppnaf6vjsy",
                "symbol": "okt",
                "side": 3,  // 1:buy, 2:sell, 3:from, 4:to
                "quantity": "1.00000000",
                "fee": "0.01250000okt",
                "timestamp": 1558407348
            },
        ],
        "paramPage": {
            "page": 1,
            "perPage": 50,
            "total": 10
        }
    }
}

```
## 区块（Blocks）

### 获取最新区块

http接口：
```http
GET okchain/v1/blocks/latest
```

接口参数：无

Response:

```
    {
      "block_meta": {
        "block_id": {
          "hash": "BF623CD9248E2721C12F757A9AAD505DACAD6166903AB0D4E7A6669B4E02BA84",
          "parts": {
            "total": "1",
            "hash": "368C05B48E428C71FCB0C5E2962BD1DC9C0BEC96759D5733C0F141FA7EA7C1A1"
          }
        },
        "header": {
          "version": {
            "block": "10",
            "app": "0"
          },
          "chain_id": "okchain",
          "height": "433",
          "time": "2019-07-23T06:57:30.775579Z",
          "num_txs": "0",
          "total_txs": "18",
          "last_block_id": {
            "hash": "0DBD77228438CA65F11DD675428E4B7DC9904AC11A9C9AB5D8182C1A250F0AF1",
            "parts": {
              "total": "1",
              "hash": "9222C8B073CA130AB057467DD63E45E556DA2314F2EC7CA7B0ACDC738170CCD5"
            }
          },
          "last_commit_hash": "761C584E0EF03D7812AB16B2A9DE27BB5E6DA954BC19F32D303A634ADE84DB6E",
          "data_hash": "",
          "validators_hash": "DEFD0C2394B21CF2DD2A49054E968C8754AB0CD20F31804028FA499A40358B19",
          "next_validators_hash": "DEFD0C2394B21CF2DD2A49054E968C8754AB0CD20F31804028FA499A40358B19",
          "consensus_hash": "048091BC7DDC283F77BFBF91D73C44DA58C3DF8A9CBC867405D8B7F3DAADA22F",
          "app_hash": "F8F901256CA9F12C253BB6E79144473BF41476A1BB49CA202A788D19CBD65683",
          "last_results_hash": "",
          "evidence_hash": "",
          "proposer_address": "D4640375843B281A9656B3B755D0B227ACDE13D9"
        }
      },
      "block": {
        "header": {
          "version": {
            "block": "10",
            "app": "0"
          },
          "chain_id": "okchain",
          "height": "433",
          "time": "2019-07-23T06:57:30.775579Z",
          "num_txs": "0",
          "total_txs": "18",
          "last_block_id": {
            "hash": "0DBD77228438CA65F11DD675428E4B7DC9904AC11A9C9AB5D8182C1A250F0AF1",
            "parts": {
              "total": "1",
              "hash": "9222C8B073CA130AB057467DD63E45E556DA2314F2EC7CA7B0ACDC738170CCD5"
            }
          },
          "last_commit_hash": "761C584E0EF03D7812AB16B2A9DE27BB5E6DA954BC19F32D303A634ADE84DB6E",
          "data_hash": "",
          "validators_hash": "DEFD0C2394B21CF2DD2A49054E968C8754AB0CD20F31804028FA499A40358B19",
          "next_validators_hash": "DEFD0C2394B21CF2DD2A49054E968C8754AB0CD20F31804028FA499A40358B19",
          "consensus_hash": "048091BC7DDC283F77BFBF91D73C44DA58C3DF8A9CBC867405D8B7F3DAADA22F",
          "app_hash": "F8F901256CA9F12C253BB6E79144473BF41476A1BB49CA202A788D19CBD65683",
          "last_results_hash": "",
          "evidence_hash": "",
          "proposer_address": "D4640375843B281A9656B3B755D0B227ACDE13D9"
        },
        "data": {
          "txs": null
        },
        "evidence": {
          "evidence": null
        },
        "last_commit": {
          "block_id": {
            "hash": "0DBD77228438CA65F11DD675428E4B7DC9904AC11A9C9AB5D8182C1A250F0AF1",
            "parts": {
              "total": "1",
              "hash": "9222C8B073CA130AB057467DD63E45E556DA2314F2EC7CA7B0ACDC738170CCD5"
            }
          },
          "precommits": [
            {
              "type": 2,
              "height": "432",
              "round": "0",
              "block_id": {
                "hash": "0DBD77228438CA65F11DD675428E4B7DC9904AC11A9C9AB5D8182C1A250F0AF1",
                "parts": {
                  "total": "1",
                  "hash": "9222C8B073CA130AB057467DD63E45E556DA2314F2EC7CA7B0ACDC738170CCD5"
                }
              },
              "timestamp": "2019-07-23T06:57:30.775579Z",
              "validator_address": "6B6B879EEC588AC6D6C0A925DF40142558D92EF9",
              "validator_index": "0",
              "signature": "ZQWxt3dKDp7Rl6WuHJDcUr4HPrvDFf1pIUk7L/+f5hP5koL2NNM5GwjgzMzXfUXDfY6FvswXccut9150j/V2Dw=="
            },
            {
              "type": 2,
              "height": "432",
              "round": "0",
              "block_id": {
                "hash": "0DBD77228438CA65F11DD675428E4B7DC9904AC11A9C9AB5D8182C1A250F0AF1",
                "parts": {
                  "total": "1",
                  "hash": "9222C8B073CA130AB057467DD63E45E556DA2314F2EC7CA7B0ACDC738170CCD5"
                }
              },
              "timestamp": "2019-07-23T06:57:30.775579Z",
              "validator_address": "77E268D7F58CA2A9C81E27481DA5F8947E99E67A",
              "validator_index": "1",
              "signature": "lVo31wzOjdbW2LuMwoktxSoEXvfqdYp19uGqVfaLfRdlJIOcCFUXIFm8sM98qLLdZaILuQCfGzycpTUCiOhvBA=="
            },
            {
              "type": 2,
              "height": "432",
              "round": "0",
              "block_id": {
                "hash": "0DBD77228438CA65F11DD675428E4B7DC9904AC11A9C9AB5D8182C1A250F0AF1",
                "parts": {
                  "total": "1",
                  "hash": "9222C8B073CA130AB057467DD63E45E556DA2314F2EC7CA7B0ACDC738170CCD5"
                }
              },
              "timestamp": "2019-07-23T06:57:30.877204Z",
              "validator_address": "B576DAE9CEC142CD0E932F5821253B3DAE19B7B2",
              "validator_index": "2",
              "signature": "cAlEne+vWKBjDLwc9hcUYPRHRQvkWHbW8kCEHSBxdkYJJQq/c8Th1lqLRKGGGbM5ZHe6GjMWLyo88HpjmoVaDg=="
            },
            {
              "type": 2,
              "height": "432",
              "round": "0",
              "block_id": {
                "hash": "0DBD77228438CA65F11DD675428E4B7DC9904AC11A9C9AB5D8182C1A250F0AF1",
                "parts": {
                  "total": "1",
                  "hash": "9222C8B073CA130AB057467DD63E45E556DA2314F2EC7CA7B0ACDC738170CCD5"
                }
              },
              "timestamp": "2019-07-23T06:57:30.570501Z",
              "validator_address": "D4640375843B281A9656B3B755D0B227ACDE13D9",
              "validator_index": "3",
              "signature": "/R7mSWoj3qP1YlGMrHtmyxla4gjrWqnx0W57Bpy7knxR6jdFDIK8aWCiCKBm7T76FekvK/3wMg/FYuWB31GHBA=="
            }
          ]
        }
      }
    }
    
```

### 获取区块高度

http接口：
```http
GET okchain/v1/blocks/{height}
```

接口参数：

|Name|Type|Required|Description|
|---|---|---|---|
|height|    number|true|    Block height|

Response:

```
   {
     "block_meta": {
       "block_id": {
         "hash": "AE7D7FC321447A7F63031E28FD55CD9FF885EE73C38C62F63706C2ED3623ECFF",
         "parts": {
           "total": "1",
           "hash": "0E3BE14D6711CEEC468D44D1DB6FF702E92ACA521E8121698DD8BD521F07794F"
         }
       },
       "header": {
         "version": {
           "block": "10",
           "app": "0"
         },
         "chain_id": "okchain",
         "height": "1",
         "time": "2019-07-23T06:42:15.957762Z",
         "num_txs": "0",
         "total_txs": "0",
         "last_block_id": {
           "hash": "",
           "parts": {
             "total": "0",
             "hash": ""
           }
         },
         "last_commit_hash": "",
         "data_hash": "",
         "validators_hash": "DEFD0C2394B21CF2DD2A49054E968C8754AB0CD20F31804028FA499A40358B19",
         "next_validators_hash": "DEFD0C2394B21CF2DD2A49054E968C8754AB0CD20F31804028FA499A40358B19",
         "consensus_hash": "048091BC7DDC283F77BFBF91D73C44DA58C3DF8A9CBC867405D8B7F3DAADA22F",
         "app_hash": "",
         "last_results_hash": "",
         "evidence_hash": "",
         "proposer_address": "6B6B879EEC588AC6D6C0A925DF40142558D92EF9"
       }
     },
     "block": {
       "header": {
         "version": {
           "block": "10",
           "app": "0"
         },
         "chain_id": "okchain",
         "height": "1",
         "time": "2019-07-23T06:42:15.957762Z",
         "num_txs": "0",
         "total_txs": "0",
         "last_block_id": {
           "hash": "",
           "parts": {
             "total": "0",
             "hash": ""
           }
         },
         "last_commit_hash": "",
         "data_hash": "",
         "validators_hash": "DEFD0C2394B21CF2DD2A49054E968C8754AB0CD20F31804028FA499A40358B19",
         "next_validators_hash": "DEFD0C2394B21CF2DD2A49054E968C8754AB0CD20F31804028FA499A40358B19",
         "consensus_hash": "048091BC7DDC283F77BFBF91D73C44DA58C3DF8A9CBC867405D8B7F3DAADA22F",
         "app_hash": "",
         "last_results_hash": "",
         "evidence_hash": "",
         "proposer_address": "6B6B879EEC588AC6D6C0A925DF40142558D92EF9"
       },
       "data": {
         "txs": null
       },
       "evidence": {
         "evidence": null
       },
       "last_commit": {
         "block_id": {
           "hash": "",
           "parts": {
             "total": "0",
             "hash": ""
           }
         },
         "precommits": null
       }
     }
   }
```

### 根据Tx哈希值获取Tx

http接口：
```http
GET okchain/v1/txs/{hash}
```

接口参数：

|Name|Type|Required|Description|
|:---:|:---:|:---:|:---:|
|hash|    string|true|    Tx hash|

Response:

```
    {
      "height": "468",
      "txhash": "0020A8D7EB798F223319DB636109DC00D258F2756B52F494A92BCABB14BC8BCC",
      "raw_log": "[{\"msg_index\":\"0\",\"success\":true,\"log\":\"\"}]",
      "logs": [
        {
          "msg_index": "0",
          "success": true,
          "log": ""
        }
      ],
      "tags": [
        {
          "key": "fee",
          "value": "0.01250000 okt"
        },
        {
          "key": "action",
          "value": "send"
        }
      ],
      "tx": {
        "type": "auth/StdTx",
        "value": {
          "msg": [
            {
              "type": "token/Send",
              "value": {
                "from_address": "okchain1gaszdnrmghask7kz8n2tdxq0wk2a69z9336mjh",
                "to_address": "okchain1g7c3nvac7mjgn2m9mqllgat8wwd3aptdqket5k",
                "amount": [
                  {
                    "denom": "okt",
                    "amount": "10000.00000000"
                  }
                ]
              }
            }
          ],
          "signatures": [
            {
              "pub_key": {
                "type": "tendermint/PubKeySecp256k1",
                "value": "AnHEWKSC/pE4VIX8rbUpQFIRA88BNv/wC7e7mHAJ0+7I"
              },
              "signature": "SawuipMAXPkE/JFAv0SnS9rcsCbw1EIS8ZZo3qoW7QoPLa+60jPmvQhoRJaa3o+1b1/HnoBvIsn9On8UyKRv1A=="
            }
          ],
          "memo": ""
        }
      },
      "timestamp": "2019-07-23T06:58:22Z"
    }
    
```

## 抵押(Staking)

### 获取所有validators

http接口：
```http
GET okchain/v1/staking/validators
```

接口参数：无

Response:

```
   [
     {
       "operator_address": "okchainvaloper13q7gl0jvk79qz7fgcty3qc49g8h2prnaa4v8m4",
       "consensus_pubkey": {
         "type": "tendermint/PubKeyEd25519",
         "value": "eLwaM5se0V3xjSf1VSPNafbxo8duuPIKc/O2P4P/BQI="
       },
       "jailed": false,
       "status": 2,
       "tokens": "1.00000000",
       "delegator_shares": "1.00000000",
       "description": {
         "moniker": "node1",
         "identity": "",
         "website": "",
         "details": ""
       },
       "unbonding_height": "0",
       "unbonding_time": "1970-01-01T00:00:00Z",
       "commission": {
         "rate": "0.00000000",
         "max_rate": "0.00000000",
         "max_change_rate": "0.00000000",
         "update_time": "2019-07-23T06:42:15.957762Z"
       },
       "min_self_delegation": "1.00000000"
     },
     {
       "operator_address": "okchainvaloper1n0az59a0xt263ngeqndxqcuhx2d4yyd0mayyzc",
       "consensus_pubkey": {
         "type": "tendermint/PubKeyEd25519",
         "value": "UwQZC3vQ7mZJ0zgAh5+OiXxn4MLddjTuRsOcFoitGDE="
       },
       "jailed": false,
       "status": 2,
       "tokens": "1.00000000",
       "delegator_shares": "1.00000000",
       "description": {
         "moniker": "node0",
         "identity": "",
         "website": "",
         "details": ""
       },
       "unbonding_height": "0",
       "unbonding_time": "1970-01-01T00:00:00Z",
       "commission": {
         "rate": "0.00000000",
         "max_rate": "0.00000000",
         "max_change_rate": "0.00000000",
         "update_time": "2019-07-23T06:42:15.957762Z"
       },
       "min_self_delegation": "1.00000000"
     },
   ]
   
```

### 列举全部operator_address-validator_address地址对

http接口：
```http
GET okchain/v1/staking/address
```

接口参数：无

Response:

```
   [
     {
       "operator_address": "okchainvaloper13q7gl0jvk79qz7fgcty3qc49g8h2prnaa4v8m4",
       "validator_address": "6B6B879EEC588AC6D6C0A925DF40142558D92EF9"
     },
     {
       "operator_address": "okchainvaloper1n0az59a0xt263ngeqndxqcuhx2d4yyd0mayyzc",
       "validator_address": "77E268D7F58CA2A9C81E27481DA5F8947E99E67A"
     },
   ]
   
```

### 通过operator_address查询对应account_address

http接口：
```http
GET okchain/v1/staking/address/{OperatorAddr}/account_address 
```

接口参数：

|Name|Type|Required|Description|
|:---:|:---:|:---:|:---:|
|OperatorAddr|    string|true|   operator_address|


Response:

```
"okchain13q7gl0jvk79qz7fgcty3qc49g8h2prnaptazwn"
```

### 通过validator_address查询对应operator_address

http接口：
```http
GET okchain/v1/staking/address/{ValidatorAddr}/validator_address
```

接口参数：

|Name|Type|Required|Description|
|:---:|:---:|:---:|:---:|
|ValidatorAddr|    string|true|   validator_address|


Response:

```
"okchainvaloper1uujtlcc9u6w8gh0quzhtml4llu8pj02v87plt0"
```
