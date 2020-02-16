# gov

## Text提案命令：

#### 参数说明：  

| Name                | Description                                                           |
| :------             | :------                                                               |
| --title             | 提案的标题内容                                                        |
| --description       | 提案的描述内容（仅针对Text提案）                                      |
| --type              | 发起提案的类型（这里指定为Text）                                      |
| --deposit           | 发起提案时指定的初始抵押                                              |
| --from              | 指定要发送交易的账户名称                                                |
| --home              | 账户名称和okchaincli配置所在目录<br>如果为~/.okchaincli可以忽略该参数 |
| -b/--broadcast-mode | 指定交易广播方式（async、sync、block）                                |

#### 示例：

```bash
okchaincli tx gov submit-text-proposal --title="test" --description="test" --type=Text --deposit="80okt" --from alice --home ~/.okchaincli -b block
```

#### 成功返回：

```
{
  "height": "156",
  "txhash": "86EB4B2B756E28A4553413DFDB7C0C5DBE2A61C46AE35A1970AF227263BE33F4",
  "data": "0102",
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
      "key": "proposer",
      "value": "okchain10q0rk5qnyag7wfvvt7rtphlw589m7frsmyq4ya"
    },
    {
      "key": "proposal-id",
      "value": "2"
    }
  ]
}
```

## 参数修改提案命令：

#### 参数说明：

| Name                | Description                                                                                                                                                                                                                                                             |
| :------             | :------                                                                                                                                                                                                                                                                 |
| --title             | 提案的标题内容                                                                                                                                                                                                                                                          |
| --type              | 发起提案的类型（这里指定为ParameterChange）                                                                                                                                                                                                                             |
| --deposit           | 发起提案时指定的初始抵押                                                                                                                                                                                                                                                |
| --param             | 指定要修改的参数和值（gov/MinDeposit=1000okt<br>即将gov模块中的MinDeposit参数修改为1000okt。<br>各模块可修改参数参考[该链接](../../governance/parameter.html#id1) |
| --height            | 指定参数修改提案生效（即将要修改参数改为指定的值）时的块高，<br>指定高度需满足：大于当前块高并小于等于当前块高与[MaxBlockHeightPeriod](../../concepts/gov.html#id5)之和                                                                                                  |
| --from              | 指定要发送交易的账户名称                                                                                                                                                                                                                                                  |
| --home              | 账户名称和okchaincli配置所在目录<br>如果为~/.okchaincli可以忽略该参数                                                                                                                                                                                                   |
| -b/--broadcast-mode | 指定交易广播方式（async、sync、block）                                                                                                                                                                                                                                  |

#### 示例：

```bash
okchaincli tx gov submit-param-change-proposal --title="Change gov/MinDeposit" --type="ParameterChange" --deposit="60okt" --from alice --param='gov/MinDeposit=1000okt' --height=1000 -b block
```

#### 成功返回：

```
{
  "height": "723",
  "txhash": "D24E9B7467325D8F77EEB3F9D8A34F27C6D1C2BB2BCA752FB0E2112A6119F2FB",
  "data": "0103",
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
      "key": "proposer",
      "value": "okchain10q0rk5qnyag7wfvvt7rtphlw589m7frsmyq4ya"
    },
    {
      "key": "proposal-id",
      "value": "3"
    },
    {
      "key": "param",
      "value": "[{\"subspace\":\"gov\",\"key\":\"MinDeposit\",\"value\":\"1000okt\"}]"
    }
  ]
}
```

## 数字资产交易对申请提案命令：

#### 参数说明：

| Name                | Description                                                                                                                                                                                                    |
| :------             | :------                                                                                                                                                                                                        |
| --title             | 提案的标题内容                                                                                                                                                                                                 |
| --type              | 发起提案的类型（这里指定为DexList）                                                                                                                                                                    |
| --deposit           | 发起提案时指定的初始抵押                                                                                                                                                                                       |
| --listAsset         | 指定数字资产交易对（数字资产交易对申请之前需先发行该数字资产，发行参见[该链接](../../getting-start/command/token.html#id2)）                                                                                                                               |
| --quoteAsset        | 指定与listAsset构交易数字资产交易对的数字资产                                                                                                                                                               |
| --initPrice         | 是在数字资产交易对申请时指定的数字资产交易对初始价格，该价格作为初始交易的参考价格                                                                                                                                                     |
| --maxPriceDigit     | 挂单时价格指定的精度（<=8）<br>例如该值为4则挂单指定价格不能指定小数点后大于4位的小数                                                                                                                                   |
| --maxSizeDigit      | 挂单时数量指定的精度（<=8）<br>例如该值为4则挂单指定数量不能指定小数点后大于4位的小数                                                                                                                                   |
| --minTradeSize      | 挂单时指定的数量不能小于该值                                                                                                                                                                                   |
| --from              | 指定要发送交易的账户名称                                                                                                                                                                                         |
| --blockHeight       | 指定数字资产交易对申请提案生效块高（自动执行数字资产交易对激活的块高）<br>如果提案通过后通过[数字资产交易对激活命令](../../getting-start/command/gov.html#id12)数字资产交易对激活则无需指定该参数<br>指定高度需满足：小于等于当前块高与[MaxBlockHeight](../../concepts/gov.html#id5)之和<br>如果指定1000但提案通过时块高为1500则立即执行数字资产交易对激活 |
| --home              | 账户名称和okchaincli配置所在目录<br>如果为~/.okchaincli可以忽略该参数                                                                                                                                          |
| -b/--broadcast-mode | 指定交易广播方式（async、sync、block）                                                                                                                                                                         |

#### 示例：

```bash
okchaincli tx gov submit-dex-list-proposal --title="list bcoin-7a4/okt" --type=DexList --deposit="1000okt"   --listAsset="bcoin-7a4" --quoteAsset="okt"  --initPrice="2500.25" --maxPriceDigit=4 --maxSizeDigit=4 --minTradeSize="0.001" --from alice --home=~/.okchaincli -b block
```

#### 成功返回：

```
{
  "height": "1048",
  "txhash": "AE4A6F4AAA42FEA80450B5F46CBA2C343FF5D5C8251BBC10ADD958100362BD39",
  "data": "0104",
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
      "key": "proposer",
      "value": "okchain10q0rk5qnyag7wfvvt7rtphlw589m7frsmyq4ya"
    },
    {
      "key": "proposal-id",
      "value": "4"
    }
  ]
}
```

## 数字资产交易对激活命令：

#### 参数说明：

| Name                | Description                                                           |
| :------             | :------                                                               |
| --proposal          | 指定要激活的数字资产交易对申请提案的proposal id                                     |
| --from              | 指定要发送交易的账户名称                                                |
| --home              | 账户名称和okchaincli配置所在目录<br>如果为~/.okchaincli可以忽略该参数 |
| -b/--broadcast-mode | 指定交易广播方式（async、sync、block）                                |

#### 示例：

```bash
okchaincli tx gov dexlist --proposal=4 --from alice --home ~/.okchaincli -b block
```

#### 成功返回：

```
{
  "height": "1685",
  "txhash": "7B67F9C6EB50EA02369167C68DF7DAE094F389324636E484D021D8ABE7935F6E",
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
      "value": "100000.01250000 okt"
    },
    {
      "key": "action",
      "value": "dex-list"
    },
    {
      "key": "list-asset",
      "value": "bcoin-a69"
    },
    {
      "key": "quote-asset",
      "value": "okt"
    },
    {
      "key": "init-price",
      "value": "2500.25000000"
    },
    {
      "key": "max-price-digit",
      "value": "4"
    },
    {
      "key": "max-size-digit",
      "value": "4"
    },
    {
      "key": "min-trade-size",
      "value": "0.00100000"
    }
  ]
}
```

## 版本升级提案命令：

请参考[该链接](/governance/upgrade/)

## 提案抵押命令：

#### 示例：

通过指定要抵押的提案的proposal id来对提案进行抵押
```bash
okchaincli tx gov deposit 1 500okt --from alice --home ~/.okchaincli/ -b block
```

#### 成功返回：

```
{
  "height": "1328",
  "txhash": "FBFB981D1B5CD1C4FDE2A60D3EA1CB5C5F7E8DDF7AA54CCA325B8896E990C46A",
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
      "key": "depositor",
      "value": "okchain10q0rk5qnyag7wfvvt7rtphlw589m7frsmyq4ya"
    },
    {
      "key": "proposal-id",
      "value": "4"
    },
    {
      "key": "voting-period-start",
      "value": "4"
    }
  ]
}
```
##  提案投票命令：

#### 示例：

通过指定要投票的提案的proposal id来对提案进行投票(可投Yes、No、Abstain、NoWithVeto四种类型票)
```bash
okchaincli tx gov vote 2 Yes --from alice --home ~/.okchaincli/ -b block
```

#### 成功返回：

```
{
  "height": "1550",
  "txhash": "7E62A12E93FFBA280E814D4DE3627FD1015C8B711EBAB6A4C202232B338526F6",
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
      "key": "voter",
      "value": "okchain1svzxp4ts5le2s4zugx34ajt6shz2hg42p0e6tw"
    },
    {
      "key": "proposal-id",
      "value": "4"
    },
    {
      "key": "proposal-status",
      "value": "Passed"
    }
  ]
}
```

##  提案查询命令：

### 查询指定提案：

#### 示例：

根据提案的proposal id查询该提案
```bash
okchaincli query gov proposal 4 --home ~/.okchaincli/
```

#### 成功返回：

```
{
  "type": "gov/DexListProposal",
  "value": {
    "BasicProposal": {
      "proposal_id": "4",
      "title": "list bcoin-7a4/okt",
      "description": "",
      "proposal_type": "DexList",
      "proposal_status": "Passed",
      "tally_result": {
        "yes": "100000000",
        "abstain": "0",
        "no": "0",
        "no_with_veto": "0"
      },
      "submit_time": "2019-07-29T03:25:36.759218374Z",
      "deposit_end_time": "2019-07-30T03:25:36.759218374Z",
      "total_deposit": [
        {
          "denom": "okt",
          "amount": "21000.00000000"
        }
      ],
      "voting_start_time": "2019-07-29T03:31:43.90917706Z",
      "voting_end_time": "2019-08-01T03:31:43.90917706Z"
    },
    "proposer": "okchain10q0rk5qnyag7wfvvt7rtphlw589m7frsmyq4ya",
    "list_asset": "bcoin-a69",
    "quote_asset": "okt",
    "init_price": "2500.25000000",
    "block_height": "0",
    "max_price_digit": "4",
    "max_size_digit": "4",
    "min_trade_size": "0.001",
    "dex_list_start_time": "2019-07-29T03:36:57.647117542Z",
    "dex_list_end_time": "2019-07-30T03:36:57.647117542Z"
  }
}
```

### 查询所有提案：

#### 示例：

```bash
okchaincli query gov proposals --home ~/.okchaincli/
```

#### 成功返回：

```
[
  {
    "type": "gov/TextProposal",
    "value": {
      "BasicProposal": {
        "proposal_id": "1",
        "title": "test",
        "description": "test",
        "proposal_type": "Text",
        "proposal_status": "DepositPeriod",
        "tally_result": {
          "yes": "0",
          "abstain": "0",
          "no": "0",
          "no_with_veto": "0"
        },
        "submit_time": "2019-07-29T03:03:41.765548835Z",
        "deposit_end_time": "2019-07-30T03:03:41.765548835Z",
        "total_deposit": [
          {
            "denom": "okt",
            "amount": "80.00000000"
          }
        ],
        "voting_start_time": "0001-01-01T00:00:00Z",
        "voting_end_time": "0001-01-01T00:00:00Z"
      }
    }
  },
  {
    "type": "gov/TextProposal",
    "value": {
      "BasicProposal": {
        "proposal_id": "2",
        "title": "test",
        "description": "test",
        "proposal_type": "Text",
        "proposal_status": "DepositPeriod",
        "tally_result": {
          "yes": "0",
          "abstain": "0",
          "no": "0",
          "no_with_veto": "0"
        },
        "submit_time": "2019-07-29T03:05:59.446787436Z",
        "deposit_end_time": "2019-07-30T03:05:59.446787436Z",
        "total_deposit": [
          {
            "denom": "okt",
            "amount": "80.00000000"
          }
        ],
        "voting_start_time": "0001-01-01T00:00:00Z",
        "voting_end_time": "0001-01-01T00:00:00Z"
      }
    }
  },
  {
    "type": "gov/ParameterProposal",
    "value": {
      "BasicProposal": {
        "proposal_id": "3",
        "title": "Change gov/MinDeposit",
        "description": "",
        "proposal_type": "ParameterChange",
        "proposal_status": "DepositPeriod",
        "tally_result": {
          "yes": "0",
          "abstain": "0",
          "no": "0",
          "no_with_veto": "0"
        },
        "submit_time": "2019-07-29T03:18:21.761155019Z",
        "deposit_end_time": "2019-07-30T03:18:21.761155019Z",
        "total_deposit": [
          {
            "denom": "okt",
            "amount": "60.00000000"
          }
        ],
        "voting_start_time": "0001-01-01T00:00:00Z",
        "voting_end_time": "0001-01-01T00:00:00Z"
      },
      "params": [
        {
          "subspace": "gov",
          "key": "MinDeposit",
          "value": "1000okt"
        }
      ],
      "height": "1000"
    }
  }
]
```

### 查询治理模块参数：

#### 示例：

```bash
okchaincli query gov params --home ~/.okchaincli/
```

#### 成功返回：

```
{
  "max_deposit_period": "86400000000000",
  "min_deposit": [
    {
      "denom": "okt",
      "amount": "100.00000000"
    }
  ],
  "voting_period": "259200000000000",
  "dex_list_max_deposit_period": "86400000000000",
  "dex_list_min_deposit": [
    {
      "denom": "okt",
      "amount": "20000.00000000"
    }
  ],
  "dex_list_voting_period": "259200000000000",
  "dex_list_vote_fee": [
    {
      "denom": "okt",
      "amount": "0.00000000"
    }
  ],
  "dex_list_max_block_height": "10000",
  "dex_list_fee": [
    {
      "denom": "okt",
      "amount": "100000.00000000"
    }
  ],
  "dex_list_expire_time": "86400000000000",
  "quorum": "0.33400000",
  "threshold": "0.50000000",
  "veto": "0.33400000",
  "max_block_height_period": "100000",
  "max_tx_num_per_block": "2000"
}
```

#### 治理模块参数：

| Parameters              | Descriptions                                                                                               |
| :----                   | :----                                                                                                      |
| MaxDepositPeriod        | Text/参数修改/app升级提案抵押周期                                                                          |
| MinDeposit              | Text/参数修改/app升级提案抵押额度<br>提案抵押超过该值则提案进入Voting Period                               |
| VotingPeriod            | Text/参数修改/app升级提案投票周期                                                                          |
| DexListMaxDepositPeriod | 数字资产交易对申请提案提案抵押周期                                                                                       |
| DexListMinDeposit       | 数字资产交易对申请提案提案抵押额度                                                                                       |
| DexListVotingPeriod     | 数字资产交易对申请提案提案投票周期                                                                                       |
| DexListVoteFee          | 数字资产交易对申请提案投票手续费<br>对数字资产交易对申请提案投Yes/NoWithVeto的账户按照<br>DexListVoteFee*账户staking所占权重收取手续费 |
| DexListMaxBlockHeight   | 指定自动数字资产交易对激活的块高不超过当前块高与DexListMaxBlockHeight之和                                            |
| DexListFee              | 数字资产交易对激活所需费用                                                                                           |
| DexListExpireTime       | 数字资产交易对申请提案通过后到数字资产交易对激活的有效期                                                                           |
| Quorum                  | 全网参与投票的权重阈值，用于[投票统计](../../concepts/gov.html#id4)                                                                                     |
| Threshold               | 投Yes票在所有投非弃权票中的比重阈值，用于[投票统计](../../concepts/gov.html#id4)                                                                        |
| Veto                    | 投NoWithVeto票在所有投票中的比重阈值，用于[投票统计](../../concepts/gov.html#id4)                                                                       |
| MaxBlockHeightPeriod    | 参数修改提案指定自动生效的块高不超过当前块高与MaxBlockHeightPeriod之和                                     |
| MaxTxNumPerBlock        | 每个块中包含的最大交易数量                                                                                 |


