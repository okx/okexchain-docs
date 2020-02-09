# token

## 属性
Token属性

|      Name      |      Type       |            Description             |
| :------------: | :-------------: | :--------------------------------: |
|     Symbol     |     string      |    token的唯一标识，比如bcoin-y60    |
| OriginalSymbol |     string      | 用户输入的token的原始标识，比如bcoin |
|      Desc      |     string      |     token的描述，限制256个字节     |
|   WholeName    |     string      |            token的全称             |
|  TotalSupply   |      int64      |          token发行的总量           |
|     Owner      | string(address) |           token的所有者            |
|    Mintable    |      Bool       |       表明token是否可以增发        |


去中心化交易所支持发行新的token的功能，命令行如下:

```bash
okchaincli tx token [command]
```

## 发行Token：

#### 参数说明：

  |        Name        |  Type  |                       **Description**                        |
  | :----------------: | :----: | :----------------------------------------------------------: |
  |       symbol       | string | symbol是数字资产的标识，限制为6个字母数字字符，不区分大小写，但是第一个字符不能是数字，例如“bcoin”。因为系统会自动添加3个随机字符，例如“bcoin-gf6”。 |
  |        desc        | string |           对数字资产的描述，长度有限制，上限256个字符            |
  |  total-supply(-n)  |  int   |                         数字资产的发行总量                         |
  |   whole-name(-w)   | string |                           数字资产的全称                           |
  |      mintable      | string |                      表示数字资产是否可以增发                      |
  |        from        | string |                          数字资产的所有者                          |
  | broadcast-mode(-b) | string |               交易广播模式(sync\|async\|block)               |

#### 示例：

发行新的Token
```bash
okchaincli tx token issue [flags]
```

#### 成功返回：

```
okchaincli tx token issue --from alice --symbol bcoin -n 200000 -w 'bcoin' --desc 'blockchain coin' -b block --mintable  
# example  
{
  "height": "340949",
  "txhash": 	"02978378301B38883C5CA9E17997B5CC5701DED817BA8B516851B1F706BD2544",
  "raw_log": "[{"msg_index":"0","success":true,"log":""}]",
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
      "value": "20000.00000000 okt"
    },
    {
      "key": "action",
      "value": "issue"
    },
    {
      "key": "symbol",
      "value": "bcoin-254"
    }
  ]
}
```
## 增发Token：

#### 参数说明：

  |  Name  |  Type  |    **Description**    |
  | :----: | :----: | :-------------------: |
  | amount |  int   |      增发的数量       |
  | symbol | string | 要增发的token的symbol |
  |  from  | string |      数字资产的所有者       |

#### 示例：

已经发行的Token增发一定的数量，只有发行Token时指定了mintable参数的Token才可以增发
```bash
okchaincli tx token mint [flags]
```

#### 成功返回：

```
okchaincli tx token mint --amount 10000000 --symbol okt --from alice -b block
# 示例输出
{
  "height": "341001",
  "txhash": "D890F0A3140797410179270BFF5353B15AAF0C14847715319DA64499754BECF6",
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
       "value": "2000.00000000 okt"
     },
     {
       "key": "action",
       "value": "mint"
     }
   ]
}
```

## 销毁Token：

#### 参数说明：

 |  Name  |  Type  |        Description         |
 | :----: | :----: | :------------------------: |
 | amount | string | 销毁的数字资产的数量，支持小数 |
 | symbol | string |   要销毁的token的symbol    |
 |  from  | string |         数字资产的所有者         |

#### 示例：

已经发行的Token销毁一定的数量
```bash
okchaincli tx token burn [flags]
```

#### 成功返回：

```
okchaincli tx token burn --from alice --symbol okt --amount 100.0 -b block
  # 示例输出
{
  "height": "341036",
  "txhash": "DB72C94B7D42EAEEE0AC129488DC637B270B9E389FFA5FD483DE927DB92D928F",
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
      "value": "10.00000000 okt"
    },
    {
      "key": "action",
      "value": "burn"
    }
  ]
}
```

## 冻结Token：

#### 参数说明：

  |  Name  |  Type  |       Description        |
  | :----: | :----: | :----------------------: |
  | amount | string | 冻结数字资产的数量，支持小数 |
  | symbol | string |  要冻结的token的symbol   |
  |  from  | string |        数字资产的所有者        |

#### 示例：

用户冻结自己账号里面的Token
```bash
okchaincli tx token freeze [flags]
```

#### 成功返回：

```
okchaincli tx token freeze --from alice --symbol okt --amount 0.1 -b block
  # 示例输出
{
  "height": "341062",
  "txhash": "1760D4D004FBA262AF77502C7DAA080D86CDFFD1335D924431530BE0D2207597",
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
      "value": "0.10000000 okt"
    },
    {
      "key": "action",
      "value": "freeze"
    }
  ]
}
```

## 解冻Token：

#### 参数说明：

  |  Name  |  Type  |       Description        |
  | :----: | :----: | :----------------------: |
  | amount | string | 解冻数字资产的数量，支持小数 |
  | symbol | string |  要解冻的token的symbol   |
  |  from  | string |        数字资产的所有者        |

#### 示例：

解冻账号里面冻结的Token
```bash
okchaincli tx token unfreeze [flags]
```
#### 成功返回：

```
  okchaincli tx token unfreeze --from alice --symbol okt --amount 0.1 -b block
  
  # 示例输出
  {
    "height": "341129",
    "txhash": "BDABBFE9262A5ED46F38920434717EC90BF883620A30460FAC9E959D425E7176",
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
        "value": "0.10000000 okt"
      },
      {
        "key": "action",
        "value": "unfreeze"
      }
    ]
  }
```

## 查询Token信息：

#### 示例：

查询Token的信息
```bash
  okchaincli query token info <symbol>
```

#### 成功返回：

```
  # 示例输出
  {
    "desc": "blockchain coin",
    "symbol": "bcoin-254",
    "originalSymbol": "bcoin",
    "wholeName": "bcoin",
    "totalSupply": "200000",
    "owner": "okchain10q0rk5qnyag7wfvvt7rtphlw589m7frsmyq4ya",
    "mintable": true
  }
```

## 给多个人转多种Token：

#### 示例：

同时给多个人和转多种Token，也可以通过--transfers-file指定转账的文件，当指定--transfers-file时，忽略--transfers参数
```bash
okchaincli tx token multi-send [flags]
```

#### 成功返回：

```
  okchaincli tx token multi-send --from alice --transfers '[{"to":"okchain106205vgqv4fnn0yqcq7y7j936pv4kznv99yw85","amount":"1okt,2btc-254"}]' -b block
  
  # 示例输出
  {
    "height": "341487",
    "txhash": "1FA997F9557156A36AC8E3E2B5932888973796ABD0FB6FCEB3581B3BDF495D6B",
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
        "value": "0.02000000 okt"
      },
      {
        "key": "action",
        "value": "multi-send"
      }
    ]
  }
```


## 转移Token的所有权：

我们支持将Token的所有者转移给另外一个人。为了保证转移Token所有权时的安全性，必须通过多签才可以进行Token所有权的转移，具体分成以下四步：

### 原owner(from)生成未签名的tx：

#### 示例：

```bash
okchaincli tx token chown [flags]
```

#### 成功返回：

```
# from alice to jack
okchaincli tx token chown --from okchain1pck0wndww84wtppc0vz9mcuvv7j5lcg00yf3gp --to okchain1x045ccxnwpurav2d5e25k25383qpmsr73293w0 --symbol okt > unsignedTx.json

# unsignedTx.json
{
	"type": "auth/StdTx",
	"value": {
		"msg": [{
			"type": "token/Chown",
			"value": {
				"from_address": "okchain1pck0wndww84wtppc0vz9mcuvv7j5lcg00yf3gp",
				"to_address": "okchain1x045ccxnwpurav2d5e25k25383qpmsr73293w0",
				"symbol": "okt",
				"to_signature": {
					"pub_key": null,
					"signature": null
				}
			}
		}],
		"signatures": null,
		"memo": ""
	}
}
```

### 转移的owner(to)来签名：

#### 示例：

```bash
okchaincli tx token multisigns unsignedTx.json
```

#### 成功返回：

```
okchaincli tx token multisigns unsignedTx.json --from jack > signedTx1.json -y

# signedTx1.json
{
	"type": "auth/StdTx",
	"value": {
		"msg": [{
			"type": "token/Chown",
			"value": {
				"from_address": "okchain1pck0wndww84wtppc0vz9mcuvv7j5lcg00yf3gp",
				"to_address": "okchain1x045ccxnwpurav2d5e25k25383qpmsr73293w0",
				"symbol": "okt",
				"to_signature": {
					"pub_key": {
						"type": "tendermint/PubKeySecp256k1",
						"value": "A6zP2A10dBxpR6oNKD8Q+j285lJ63PEecFyK19mcYodh"
					},
					"signature": "lfL+i1YRtddruRpd2PloI7Ss1CYTyu5bBz4AmBm9eVYEvmghUqNrkERm12fetiGh1ux1R/WiXijeomjFQHNkrQ=="
				}
			}
		}],
		"signatures": null,
		"memo": ""
	}
}
```

### 原owner(from)签名：

#### 示例：

```bash
okchaincli tx sign [flags]
```

#### 成功返回：

```
okchaincli tx sign --from alice signedTx1.json > signedTx.json -y

# signedTx.json
{
  "type": "auth/StdTx",
  "value": {
    "msg": [
      {
        "type": "token/Chown",
        "value": {
          "from_address": "okchain1pck0wndww84wtppc0vz9mcuvv7j5lcg00yf3gp",
          "to_address": "okchain1x045ccxnwpurav2d5e25k25383qpmsr73293w0",
          "symbol": "okt",
          "to_signature": {
            "pub_key": {
              "type": "tendermint/PubKeySecp256k1",
              "value": "A6zP2A10dBxpR6oNKD8Q+j285lJ63PEecFyK19mcYodh"
            },
            "signature": "lfL+i1YRtddruRpd2PloI7Ss1CYTyu5bBz4AmBm9eVYEvmghUqNrkERm12fetiGh1ux1R/WiXijeomjFQHNkrQ=="
          }
        }
      }
    ],
    "signatures": [
      {
        "pub_key": {
          "type": "tendermint/PubKeySecp256k1",
          "value": "A/EpsisD1SuP2aMjErP/RmCiPgFbMQcd2ADUM4dCmYvk"
        },
        "signature": "5G3e8VjKulShcgbp3gL4Wfk3QhFVRyQ/YgVdCsokJTplAT58P5jfkkn0Qjwuv3kKNIOYC8k1n4jhauqM0WCZWQ=="
      }
    ],
    "memo": ""
  }
}
```

### 广播多签后的tx：

#### 示例：

```bash
okchaincli tx broadcast signedTx.json
```

#### 成功返回：

```
okchaincli tx broadcast signedTx.json -b block -y

# 示例
{
  "height": "136",
  "txhash": "C59A61BE30A15D57702C32C2C2DBBEA740B372135E89831205C51B2880CBA0B9",
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
      "value": "10.00000000 okt"
    },
    {
      "key": "action",
      "value": "transfer"
    }
  ]
}
```

必须由原owner(from)和转移后的owner(to)共同签名才可以成功转移Token的所有权。
