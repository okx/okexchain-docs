[TOC]
## websocket一期-订阅数据格式
##订阅说明

**1、地址：**

线上：<font color = red>（待完善）</font>



**2、格式**

请求格式：

```

{"op": "<value>", "args": ["<value1>","<value2>"]}

```

其中op的取值为1—subscribe订阅； 2-- unsubscribe 取消订阅 ；3--login 登录

args: 取值为频道名，可以定义一个或者多个频道

成功响应格式:

```json
  {"event": "<value>","channel":"<value>"}
  {"table":"channel","data":"[{"<value1>","<value2>"}]"}
```

其中spot/depth 频道为了区分是首次全量和后续的增量，返回格式将会是

```
{"table":"channel", "action":"partial"（全量）,"data":"[{"<value1>","<value2>"}]"}
{"table":"channel", "action":"update"（增量）,"data":"[{"<value1>","<value2>"}]"}
```

失败响应格式:

```json
{"event":"error","message":"<error_message>","errorCode":"<errorCode>"}
```



**3、订阅**

channel为此业务下每个具体的名称，如果channel的名字不能以一个字母区分将会以 " _ " 进行连接

例：`"spot/ticker:ACOIN-USDT"or "spot/margin_account:ACOIN-USDT"`

示例：

send:

```
{"op": "subscribe", "args": ["spot/ticker:BCOIN-USDT","spot/candle60s:BCOIN-USDT"]}
```

response:

```
 {"event":"subscribe","channel":"spot/ticker:BCOIN-USDT"}

 {"event":"subscribe","channel":"spot/candle60s:BCOIN-USDT"}

 {"table":"spot/ticker","data":[{"instrument_id":"BCOIN-USDT","last":"8.8","best_bid":"3","best_ask":"8.1","open_24h":"5.1","high_24h":"8.8","low_24h":"3",
 "base_volume_24h":"13.77340909","quote_volume_24h":"78.49886361","timestamp":"2018-12-20T03:13:41.664Z"}]}

 {"table":"spot/candle60s","data":[{"candle":["2018-12-20T06:18:00.000Z","8.8","8.8","8.8","8.8","0"],"instrument_id":"BCOIN-USDT"}]}
```



**4、取消订阅**

例如：

请求：

```
{"op": "unsubscribe", "args": ["spot/ticker:ACOIN-USDT", "spot/candle60s:ACOIN-USDT"]}
```

返回：

```
{"event":"unsubscribe","channel":"spot/ticker:ACOIN-USDT"}
{"event":"unsubscribe","channel":"spot/candle60s:ACOIN-USDT"}
```



**5、登录**

登录订阅格式：
```
{"op":"dex_login","args":["token"]
```
响应：
```
{"event":"dex_login","success":"true"}
```
例：
```
{"op":"login","args":["token"]}
```
token是`<s, token_id, t1, t2, pub>`，认证过程以及详细流程如图所示。

- 认证过程

![](../img/authentication.png)

- 详细流程：

![](../img/detail.png)


**6、校验机制**

此功能可以帮助用户校验深度数据的准确性

每次推送depth频道的深度数据都有时间戳，且有checksum 校验（即checksum值）。 用户订阅depth 频道首次会接收到200档深度，后续推送的都是增量数据。checksum值为：每次增量更新合并后此200档深度的前25档bids和asks组成的字符串的crc32值， 用户可以拿自己的checksum的值和订阅的checksum值进行比较，如果不匹配可以重新订阅。

深度合并规则说明： 首次发送200档深度数据，后续每次发送增量的数据，拿增量去遍历200档中的ask和bids的price ,如果发现有相同价格 则看数量，数量为0删除此深度，数量有变化则替换此数据； 无相同价格则按照顺序排序。

计算说明: checksum的值为有符号整型(32位)

checksum的字符串都是以冒号连接的ask和bid中的price和数量，例如：

**例子1：bid和ask成对档的情况下，要校验的字符串为：bid:ask:bid:ask:…**

```
"data": [{
        "instrument_id": "ACOIN-USDT",
        "asks": [["3366.8", "9", 10],[ "3368","8",3]],
        "bids": [["3366.1", "7", 0],[ "3366","6",3 ]],
        "timestamp": "2018-12-04T09:38:36.300Z",
        "checksum": -1881014294
    }]
```

该例子对应的checksum字符串为：**3366.1:7:3366.8:9:3366:6:3368:8**

**例子2：bid和ask不成对档的情况 ，要校验的字符串为：bid:ask:ask:ask:…**

```
"data": [{
        "instrument_id": "ACOIN-USDT",
        "asks": [["3366.8", "9", 10],[ "3368","8",3],[ "3372","8",3 ]],
        "bids": [["3366.1", "7", 0]],
        "timestamp": "2018-12-04T09:38:36.300Z",
        "checksum": 831078360
    }]
```

此例子对应的checksum String 将会是 **3366.1:7:3366.8:9:3368:8:3372:8**

**depth 频道用户收到推送数据为：**

首次200档

```
{
    "table": "spot/depth",
    "action": "partial",
    "data": [{
        "instrument_id": "BCOIN-USDT",
        "asks": [
            ["8.8", "96.99999966", 1],
            ["9", "39", 3],
            ["9.5", "100", 1],
            ["12", "12", 1],
            ["95", "0.42973686", 3],
            ["11111", "1003.99999795", 1]
        ],
        "bids": [
            ["5", "7", 4],
            ["3", "5", 3],
            ["2.5", "100", 2],
            ["1.5", "100", 1],
            ["1.1", "100", 1],
            ["1", "1004.9998", 1]
        ],
        "timestamp": "2018-12-18T07:27:13.655Z",
        "checksum": 468410539
    }]
}
```

增量：

```
{
    "table": "spot/depth",
    "action": "update",
    "data": [{
        "instrument_id": "ACOIN-USDT",
        "asks": [],
        "bids": [
            ["3983", "789", 0]
        ],
        "timestamp": "2018-12-04T09:38:36.300Z",
        "checksum": -1200119424
    }]
}
```

##频道说明
### 公开频道

- dex_spot/ticker
- **<font color="red">dex_spot/all_tickers_3s (已支持)</font>**
- dex_spot/candle60s // 1分钟
- dex_spot/candle180s // 3分钟
- dex_spot/candle300s // 5分钟
- dex_spot/candle900s // 15分钟
- dex_spot/candle1800s // 30分钟
- dex_spot/candle3600s  // 1小时
- dex_spot/candle7200s // 2小时
- dex_spot/candle14400s // 4小时
- dex_spot/candle21600s // 6小时
- dex_spot/candle43200s // 12小时
- dex_spot/candle86400s // 1天
- dex_spot/candle604800s // 1周
- **<font color= #9f0050>dex_spot/matches // 交易信息</font>**
- dex_spot/optimized_depth // 深度数据，首次200档，后续增量
- dex_spot/account // 用户账户信息，按数字资产订阅（二期改为私有频道）
- dex_spot/order //用户未成交订单（二期改为私有频道）

### 私有频道

- dex_spot/account // 用户账户信息，按数字资产订阅（二期改为私有频道）
- dex_spot/order // 用户未成交订单 （二期改为私有频道）

### 详细说明
#### 1、用户数字资产账户频道（数字资产Symbol）

TODO：直接开发登录态

######send示例
```
{"op": "subscribe", "args": ["dex_spot/account:mycoin"]}
{"op": "subscribe", "args": ["dex_spot/account:bcoin-190628"]}
```

其中dex_spot/account为频道名，`okt`和`usd-190628`为数字资产名称

######返回示例

```
{
    "table":"dex_spot/account",
    "data":[
        {
            "symbol": "okt",
            "available": "100.00000000",
            "freeze": "0",
            "locked": "1.00000000"
        }
    ]
}

{
    "table":"dex_spot/account",
    "data":[
        {
            "symbol": "acoin-190628",
            "available": "100.00000000",
            "freeze": "0",
            "locked": "1.00000000"
        }
    ]
}
```

#### 2、用户未成交订单频道（数字资产交易对Product）

获取用户交易数据，无需登录

######send示例

```
{"op": "subscribe", "args": ["dex_spot/order:*"]}
```

其中`dex_spot/order`为频道名。*指所有数字资产交易对。

######返回示例

```
{
    "table":"dex_spot/order",
    "data":[
        {
            "txHash": "E3B0C44298FC1C149AFBF4C8996FB92427AE41E4649B934CA495991B7852B855",
            "orderId": "ID0000000003-1",
            "sender": "okchain1me20p6j8tddxsgezfg3ceezsaq35jea9r2mc00",
            "product": "mycoin_okt",
            "side": "BUY",
            "price": "0.10000000",
            "quantity": "1.00000000",
            "status": 0, //(0-5) -> (Open, Filled, Cancelled, Expired, PartialFilledCancelled, PartialFilledExpired)
            "filledAvgPrice": "0.00000000",
            "remainQuantity": "1.00000000",
            "timestamp": -62135596800
        }
    ]
}
```



#### 3、行情ticker频道（数字资产交易对Product）

######send示例

```
{"op": "subscribe", "args": ["dex_spot/ticker:acoin-190628_okt"]}
```

其中`dex_spot/ticker`为频道名，`ETH-USDT` 为Product

######返回示例

```
{
    "table":"dex_spot/ticker",
    "data":[
        {
            "close":"397.2",
            "price":"396.93",
            "high":"405.35",
            "low":"392.73",
            "volume":"119769",
            "product":"BCOIN-USD-190628",
            "symbol":"BCOIN-USD-190628",
            "timestamp":"2019-05-08T02:26:09.409Z"
        }
    ]
}
```

#### 4、全量ticker频道（所有数字资产交易对Products）

客户端订阅方式

######send示例

```
{"op":"subscribe","args":"dex_spot/all_ticker_3s"}
```

######返回示例

```
前端计算涨跌幅
{
    "table":"dex_spot/all_ticker_3s",
    "data":[
      {
            "id":"ACOIN-USDT", # id就是数字资产交易对名
            "p": "13.0000", # price相当于close收盘价
            "o": "13.8366", # 最近24小时open
            "l": "12.7930", # 最近24小时low
            "h": "14.3994", # 最近24小时high
            "v": "3184726.3100" # 最近24小时volume
      },
      {
            "id":"BCOIN-USDT",
            "p": "14.0000",
            "o": "13.8366",
            "l": "17.7930",
            "h": "11.3994", 
            "v": "1134746.3100"
} ] }
```

#### 5、K线

######send示例

```
{"op": "subscribe", "args": ["dex_spot/candle60s:acoin-190628_okt"]}
```

其中`dex_spot/candle60s`为频道名，`ACOIN-USDT` 为product

######返回示例

```JSON
{
    "table":"dex_spot/candle60s",
    "data":[
        {
            "candle":[
                "2019-04-16T10:49:00.000Z",
                "162.03",
                "162.04",
                "161.96",
                "161.98",
                "336.452694"
            ],
            "instrument_id":"acoin-190628_okt" 
        }
    ]
}
```

#### 6、深度频道（数字资产交易对Product）

首次返回200档，后续为增量

######send示例

```
{"op": "subscribe", "args": ["dex_spot/optimized_depth:acoin-190628_okt"]}
```

其中`dex_spot/optimized_depth`为频道名，`acoin-190628_okt` 为instrument_id

######返回示例

首次200档：
```JSON
{
    "table":"dex_spot/optimized_depth",
    "action":"partial",
    "data":[
        {
            "instrument_id":"acoin-190628_okt",
            "asks":[
                [
                    "162.5",
                    "14.29884",
                    2
                ],
                [
                    "162.51",
                    "2.084362",
                    1
                ],
               ...

                [
                    "168.51",
                    "7.760755",
                    2
                ],
                [
                    "168.57",
                    "0.02",
                    1
                ]
            ],
            "bids":[
                [
                    "162.49",
                    "1.556106",
                    3
                ],
                [
                    "162.47",
                    "0.00913",
                    1
                ],
               ...

                [
                    "155.15",
                    "70",
                    1
                ],
                [
                    "155.13",
                    "3",
                    1
                ]
            ],
            "timestamp":"2019-04-16T10:17:28.507Z",
            "checksum":1141851215
        }
    ]
}
```
增量：
```JSON
{
    "table":"dex_spot/optimized_depth",
    "action":"update",
    "data":[
        {
            "instrument_id":"BCOIN-USDT",
            "asks":[
                [
                    "162.5",
                    "0",
                    0
                ],
                [
                    "162.61",
                    "1.209",
                    2
                ],
                [
                    "168.69",
                    "0.006",
                    1
                ],
                [
                    "168.73",
                    "0.002082",
                    1
                ]
            ],
            "bids":[
                [
                    "162.49",
                    "1.512544",
                    2
                ],
                [
                    "162.47",
                    "0.05333",
                    2
                ],
                [
                    "162.46",
                    "14.608508",
                    3
                ],
                [
                    "162.43",
                    "10.61874",
                    3
                ],
                [
                    "162.41",
                    "27.303906",
                    2
                ],
                [
                    "162.4",
                    "14.762929",
                    6
                ],
                [
                    "162.39",
                    "11.045909",
                    1
                ],
                [
                    "162.36",
                    "19.230907",
                    8
                ],
                [
                    "162.31",
                    "3.927598",
                    4
                ],
                [
                    "162.3",
                    "5.353085",
                    5
                ],
                [
                    "162.29",
                    "6.569261",
                    12
                ],
                [
                    "162.25",
                    "8.308575",
                    3
                ]
            ],
            "timestamp":"2019-04-16T10:17:29.045Z",
            "checksum":227291232
        }
    ]
}

```

#### 7、最新成交matches频道（数字资产交易对Product）

######send示例

```
{"op": "subscribe", "args": ["dex_spot/matches:{ADDRESS}:acoin-190628_okt"]}
```

其中`dex_spot/matches`为频道名，`BCOIN-USDT`为Product

######返回示例

```JSON
{
    "table":"dex_spot/matches",
    "data":[
        {
            "timestamp": 1559790137,
            "blockHeight": 386355,
            "product": "acoin-564_okt",
            "price": 3,
            "volume": 0.25
        }] 
} 
```

### 其他频道

- dex_spot/depth
- dex_spot/instruments

## 错误码

error message 格式：

```
{“event”:”error”,” message”:” “,”error_code”:”“}
```

### 错误码示例

| 错误描述                               |                                                 | Code  |
| :------------------------------------- | :---------------------------------------------- | :---- |
| Url path 无效                          | Url path error                                  | 30000 |
| “OK_ACCESS_KEY”不能为空                | OK_ACCESS_KEY cannot be blank                   | 30001 |
| “OK_ACCESS_SIGN”不能为空               | OK_ACCESS_SIGN cannot be blank                  | 30002 |
| “OK_ACCESS_PASSPHRASE”不能为空         | OK_ACCESS_PASSPHRASE cannot be blank            | 30004 |
| 无效的OK_ACCESS_TIMESTAMP              | Invalid OK_ACCESS_TIMESTAMP                     | 30005 |
| 无效的OK_ACCESS_KEY                    | Invalid OK_ACCESS_KEY                           | 30006 |
| 请求时间戳过期                         | Timestamp request expired                       | 30008 |
| 无效的sign                             | Invalid sign                                    | 30013 |
| 用户请求频率过快，超过该接口允许的限额 | Requested too frequent; endpoint limit exceeded | 30026 |
| 不合法的请求                           | Login failure                                   | 30027 |
| 不合法的请求                           | Unrecognized request                            | 30039 |
| 频道不存在                             | {0} Channel : {1} doesn't exist                 | 30040 |
| 用户需要登录                           | User not logged in / User must be logged in     | 30041 |
| 重复登录                               | Already logged in                               | 30042 |
| 内部系统错误                           | Internal system error                           | 30043 |
