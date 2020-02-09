# Msg

## gov

### Text提案
```json
{
  "height": "19",
  "txhash": "B16BA566705580DFA3DF0613AC7C20CD56954104CCE9D1D6D5DD0C7A8ED168C1",
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
      "value": "okchain15mmqtpk6kvxw3dlkkwkuwzwcdkc4akjwh0t6g8"
    },
    {
      "key": "proposal-id",
      "value": "2"
    },
    {
      "key": "voting-period-start",
      "value": "2019-08-05 07:22:11.813885 +0000 UTC"
    }
  ],
  "tx": {
    "type": "auth/StdTx",
    "value": {
      "msg": [
        {
          "type": "okchain/gov/MsgSubmitTextProposal",
          "value": {
            "MsgSubmitProposal": {
              "title": "test",
              "description": "test",
              "proposal_type": "Text",
              "proposer": "okchain15mmqtpk6kvxw3dlkkwkuwzwcdkc4akjwh0t6g8",
              "initial_deposit": [
                {
                  "denom": "okt",
                  "amount": "100.00000000"
                }
              ]
            }
          }
        }
      ],
      "signatures": [
        {
          "pub_key": {
            "type": "tendermint/PubKeySecp256k1",
            "value": "A3jE+rzcQ+fhaMeR/jLv0k5QArBfcPc5JU5dZ8iBbz+G"
          },
          "signature": "JbluFUkDTZRq7w6hjeGEGuqRJ6qC3EQzPhOZeDVOEvsXZXRKZqBW5hrrM/TNoKhlxrQuo6O7/n1lTKn5k2FJUw=="
        }
      ],
      "memo": ""
    }
  },
  "timestamp": "2019-08-05T07:22:11Z"
}
```

### 参数修改提案
```json
{
  "height": "276",
  "txhash": "2E6E955050C9457E2280C71AB051456F61A70F0082466439FA18557264EE64E8",
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
      "value": "okchain15mmqtpk6kvxw3dlkkwkuwzwcdkc4akjwh0t6g8"
    },
    {
      "key": "proposal-id",
      "value": "3"
    },
    {
      "key": "param",
      "value": "[{\"subspace\":\"gov\",\"key\":\"DexListVotingPeriod\",\"value\":\"8m\"}]"
    },
    {
      "key": "voting-period-start",
      "value": "2019-08-05 07:28:20.18003 +0000 UTC"
    }
  ],
  "tx": {
    "type": "auth/StdTx",
    "value": {
      "msg": [
        {
          "type": "okchain/gov/MsgSubmitParamChangeProposal",
          "value": {
            "MsgSubmitProposal": {
              "title": "Change gov/MinDeposit",
              "description": "",
              "proposal_type": "ParameterChange",
              "proposer": "okchain15mmqtpk6kvxw3dlkkwkuwzwcdkc4akjwh0t6g8",
              "initial_deposit": [
                {
                  "denom": "okt",
                  "amount": "100.00000000"
                }
              ]
            },
            "params": [
              {
                "subspace": "gov",
                "key": "DexListVotingPeriod",
                "value": "8m"
              }
            ],
            "height": "290"
          }
        }
      ],
      "signatures": [
        {
          "pub_key": {
            "type": "tendermint/PubKeySecp256k1",
            "value": "A3jE+rzcQ+fhaMeR/jLv0k5QArBfcPc5JU5dZ8iBbz+G"
          },
          "signature": "s8IvLIbuq1QIGHyJ++I0D9owOMA9Wi7pspydjmAoxN0XLJZDWINTDQv3AT3mgZg4IHWwdr8W4TgCwpG+SJfN9g=="
        }
      ],
      "memo": ""
    }
  },
  "timestamp": "2019-08-05T07:28:20Z"
}
```

### 数字资产交易对申请提案
```json
{
  "height": "1436",
  "txhash": "DEA9F43C51AA0A6FC5E49AE8831B10FD6C05FF3DC644C6650926190B018C29E3",
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
      "value": "okchain15mmqtpk6kvxw3dlkkwkuwzwcdkc4akjwh0t6g8"
    },
    {
      "key": "proposal-id",
      "value": "4"
    },
    {
      "key": "voting-period-start",
      "value": "4"
    }
  ],
  "tx": {
    "type": "auth/StdTx",
    "value": {
      "msg": [
        {
          "type": "okchain/gov/MsgDexListSubmitProposal",
          "value": {
            "MsgSubmitProposal": {
              "title": "list bcoin-65c/okt",
              "description": "",
              "proposal_type": "DexList",
              "proposer": "okchain15mmqtpk6kvxw3dlkkwkuwzwcdkc4akjwh0t6g8",
              "initial_deposit": [
                {
                  "denom": "okt",
                  "amount": "20000.00000000"
                }
              ]
            },
            "list_asset": "bcoin-a4e",
            "quote_asset": "okt",
            "init_price": "0.10000000",
            "block_height": "1700",
            "max_price_digit": "4",
            "max_size_digit": "4",
            "min_trade_size": "0.001"
          }
        }
      ],
      "signatures": [
        {
          "pub_key": {
            "type": "tendermint/PubKeySecp256k1",
            "value": "A3jE+rzcQ+fhaMeR/jLv0k5QArBfcPc5JU5dZ8iBbz+G"
          },
          "signature": "msCUSO2DCNBBI6/4agXwQQRMfrSlxMja9V2D0Ji/LHp0xXJnm7LVogXNkZ0z3fIsg5iWYM5nsRBKZtg4wZjBSg=="
        }
      ],
      "memo": ""
    }
  },
  "timestamp": "2019-08-05T07:57:08Z"
}
```
### App升级提案
```json
{
  "height": "1861",
  "txhash": "CCDAA8AE7ED4993266041925AFDC27B3B51A042288E44ADE9C45CD0D81991A4B",
  "data": "0106",
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
      "value": "okchain15mmqtpk6kvxw3dlkkwkuwzwcdkc4akjwh0t6g8"
    },
    {
      "key": "proposal-id",
      "value": "6"
    },
    {
      "key": "voting-period-start",
      "value": "6"
    }
  ],
  "tx": {
    "type": "auth/StdTx",
    "value": {
      "msg": [
        {
          "type": "okchain/gov/MsgSubmitAppUpgradeProposal",
          "value": {
            "MsgSubmitProposal": {
              "title": "app upgrade",
              "description": "app upgrade, version 1",
              "proposal_type": "AppUpgrade",
              "proposer": "okchain15mmqtpk6kvxw3dlkkwkuwzwcdkc4akjwh0t6g8",
              "initial_deposit": [
                {
                  "denom": "okt",
                  "amount": "100.00000000"
                }
              ]
            },
            "version": "1",
            "software": "http://newappdownloadingurl",
            "switch_height": "2000",
            "threshold": "0.80000000"
          }
        }
      ],
      "signatures": [
        {
          "pub_key": {
            "type": "tendermint/PubKeySecp256k1",
            "value": "A3jE+rzcQ+fhaMeR/jLv0k5QArBfcPc5JU5dZ8iBbz+G"
          },
          "signature": "3rAR/RiYsid3MpaVSuaEy18ici+AVbjyQmDxVtHK+IAusODiMy/D2C0PiQjhC4s+LqUz6DJduLVS3YPHHah33A=="
        }
      ],
      "memo": ""
    }
  },
  "timestamp": "2019-08-05T08:07:35Z"
}
```
### deposit
```json
{
  "height": "1557",
  "txhash": "F1652355A5EC228A089F1BA4A3F603AA6531E797EECA4D6F45DBEB4506087315",
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
      "value": "okchain15mmqtpk6kvxw3dlkkwkuwzwcdkc4akjwh0t6g8"
    },
    {
      "key": "proposal-id",
      "value": "5"
    }
  ],
  "tx": {
    "type": "auth/StdTx",
    "value": {
      "msg": [
        {
          "type": "okchain/gov/MsgDeposit",
          "value": {
            "proposal_id": "5",
            "depositor": "okchain15mmqtpk6kvxw3dlkkwkuwzwcdkc4akjwh0t6g8",
            "amount": [
              {
                "denom": "okt",
                "amount": "60.00000000"
              }
            ]
          }
        }
      ],
      "signatures": [
        {
          "pub_key": {
            "type": "tendermint/PubKeySecp256k1",
            "value": "A3jE+rzcQ+fhaMeR/jLv0k5QArBfcPc5JU5dZ8iBbz+G"
          },
          "signature": "UkhS3BMzmGBfypOTiHRFgXh89pLWFNhhoYK2zP9o1rN8ptP+yqVWQjReaz8PowfSjZtpQeMlwkItiJF2DRefzw=="
        }
      ],
      "memo": ""
    }
  },
  "timestamp": "2019-08-05T08:00:06Z"
}
```
### vote
```json
{
  "height": "1660",
  "txhash": "D7982A1845C2462D941B97C86657EBFE7BCC2313B295A62D80F785E4676181B7",
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
      "value": "okchain15mmqtpk6kvxw3dlkkwkuwzwcdkc4akjwh0t6g8"
    },
    {
      "key": "proposal-id",
      "value": "2"
    },
    {
      "key": "proposal-status",
      "value": "VotingPeriod"
    }
  ],
  "tx": {
    "type": "auth/StdTx",
    "value": {
      "msg": [
        {
          "type": "okchain/gov/MsgVote",
          "value": {
            "proposal_id": "2",
            "voter": "okchain15mmqtpk6kvxw3dlkkwkuwzwcdkc4akjwh0t6g8",
            "option": "Yes"
          }
        }
      ],
      "signatures": [
        {
          "pub_key": {
            "type": "tendermint/PubKeySecp256k1",
            "value": "A3jE+rzcQ+fhaMeR/jLv0k5QArBfcPc5JU5dZ8iBbz+G"
          },
          "signature": "qsc0wBnNfyY+UZcXAh+Ng6vpW4EJmPyh/6vHvsLBCQUz902n+r/h7GaLnRCnTZKWtgbo3pAyWDXAyL2plZjNlQ=="
        }
      ],
      "memo": ""
    }
  },
  "timestamp": "2019-08-05T08:02:41Z"
}
```
### 数字资产交易对激活
```json
{
  "height": "2259",
  "txhash": "FA341FF7DDFA89E725C752DF8143B4E5358E4D151E2835D0559F738A34F09BE6",
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
      "value": "bcoin-a4e"
    },
    {
      "key": "quote-asset",
      "value": "okt"
    },
    {
      "key": "init-price",
      "value": "0.10000000"
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
  ],
  "tx": {
    "type": "auth/StdTx",
    "value": {
      "msg": [
        {
          "type": "okchain/gov/DexList",
          "value": {
            "owner": "okchain15mmqtpk6kvxw3dlkkwkuwzwcdkc4akjwh0t6g8",
            "proposal-id": "7"
          }
        }
      ],
      "signatures": [
        {
          "pub_key": {
            "type": "tendermint/PubKeySecp256k1",
            "value": "A3jE+rzcQ+fhaMeR/jLv0k5QArBfcPc5JU5dZ8iBbz+G"
          },
          "signature": "++ETjawQgQoKhVbFI9ojHI5D1F5fwgbPHwpHBpVji+0yL2JbjhMzWDwkyaOIxtRWxkBLAV/c4xi5PhM/mdQ6DA=="
        }
      ],
      "memo": ""
    }
  },
  "timestamp": "2019-08-05T08:17:19Z"
}
```

## staking

### 创建验证人
```json
 {
 "height": "70",
 "txhash": "5ABF0917DF172E95D36BB812C1ECCC5CB215FF691161692DC82483E97BA5544B",
 "logs": [
  {
   "msg_index": "0",
   "success": true,
   "log": ""
  }
 ],
 "gas_wanted": "999999990000",
 "gas_used": "107969",
 "tags": [
  {
   "key": "fee",
   "value": "0.01250000okt"
  },
  {
   "key": "action",
   "value": "create_validator"
  },
  {
   "key": "destination-validator",
   "value": "okchainvaloper1w5hwfjwqf3f4yd5ar73wfracjvul3vzrkx0cdm"
  },
  {
   "key": "moniker",
   "value": "first"
  }
 ],
 "tx": {
  "type": "auth/StdTx",
  "value": {
   "msg": [
    {
     "type": "cosmos-sdk/MsgCreateValidator",
     "value": {
      "description": {
       "moniker": "first",
       "identity": "",
       "website": "",
       "details": ""
      },
      "commission": {
       "rate": "0.10000000",
       "max_rate": "0.20000000",
       "max_change_rate": "0.01000000"
      },
      "min_self_delegation": "100000000",
      "delegator_address": "okchain1w5hwfjwqf3f4yd5ar73wfracjvul3vzr2c7aca",
      "validator_address": "okchainvaloper1w5hwfjwqf3f4yd5ar73wfracjvul3vzrkx0cdm",
      "pubkey": "okchainvalconspub1zcjduepqfmxmy98g7mykgm9x2qlhxveyce5wk6003hzqjdluec8zee3ursuqndasuk",
      "value": {
       "denom": "okt",
       "amount": "20.00000000"
      }
     }
    }
   ],
   "fee": {
    "amount": null,
    "gas": "999999990000"
   },
   "signatures": [
    {
     "pub_key": {
      "type": "tendermint/PubKeySecp256k1",
      "value": "ApZDlTGaxhF3iLfbDDPbU/0xB2Qhyn4eBYw7g6jFWOap"
     },
     "signature": "+7dBi4Ek/obyrnx6574MeyVWrJTf9FNTNhYSwn1p3WN1CEKpTRHxrYRIp6mWCChDzdI22Qo2dmsjRGGk7jlifw=="
    }
   ],
   "memo": ""
  }
 }
}
```
### 编辑验证人信息
```json
 {
 "height": "280",
 "txhash": "2BCD313FD578598054FD642CC29794B60B1809FE031967C1DFA1712923973490",
 "logs": [
  {
   "msg_index": "0",
   "success": true,
   "log": ""
  }
 ],
 "gas_wanted": "999999990000",
 "gas_used": "32661",
 "tags": [
  {
   "key": "fee",
   "value": "0.01250000okt"
  },
  {
   "key": "action",
   "value": "edit_validator"
  },
  {
   "key": "destination-validator",
   "value": "okchainvaloper1w5hwfjwqf3f4yd5ar73wfracjvul3vzrkx0cdm"
  },
  {
   "key": "moniker",
   "value": "second"
  }
 ],
 "tx": {
  "type": "auth/StdTx",
  "value": {
   "msg": [
    {
     "type": "cosmos-sdk/MsgEditValidator",
     "value": {
      "Description": {
       "moniker": "second",
       "identity": "[do-not-modify]",
       "website": "[do-not-modify]",
       "details": "[do-not-modify]"
      },
      "address": "okchainvaloper1w5hwfjwqf3f4yd5ar73wfracjvul3vzrkx0cdm",
      "commission_rate": null,
      "min_self_delegation": null
     }
    }
   ],
   "fee": {
    "amount": null,
    "gas": "999999990000"
   },
   "signatures": [
    {
     "pub_key": {
      "type": "tendermint/PubKeySecp256k1",
      "value": "ApZDlTGaxhF3iLfbDDPbU/0xB2Qhyn4eBYw7g6jFWOap"
     },
     "signature": "NK/UQXud0XyCW39aW42eD5rqS8Xr3Err8ajhDaIhCJp3QNnfgYqccLN/TC73gh0+NLAZGxMod2Zmv/t6PzAtzg=="
    }
   ],
   "memo": ""
  }
 }
}
```
### 委托人委托
```json
 {
 "height": "449",
 "txhash": "06CC9BC7E3E5ACE8B4FD21D54B9E7BFE756348B6F2DD8ED9293AC87BC4B9623A",
 "logs": [
  {
   "msg_index": "0",
   "success": true,
   "log": ""
  }
 ],
 "gas_wanted": "999999990000",
 "gas_used": "80291",
 "tags": [
  {
   "key": "fee",
   "value": "0.01250000okt"
  },
  {
   "key": "action",
   "value": "delegate"
  },
  {
   "key": "delegator",
   "value": "okchain12k59uvedtwfd84ws80relawuz53tp8wp6tsmup"
  }
 ],
 "tx": {
  "type": "auth/StdTx",
  "value": {
   "msg": [
    {
     "type": "cosmos-sdk/MsgDelegate",
     "value": {
      "delegator_address": "okchain12k59uvedtwfd84ws80relawuz53tp8wp6tsmup",
      "validator_address": "okchainvaloper1w5hwfjwqf3f4yd5ar73wfracjvul3vzrkx0cdm",
      "value": {
       "denom": "okt",
       "amount": "1.00000000"
      }
     }
    }
   ],
   "fee": {
    "amount": null,
    "gas": "999999990000"
   },
   "signatures": [
    {
     "pub_key": {
      "type": "tendermint/PubKeySecp256k1",
      "value": "A5FU0g0AW7mTEX8O48PKDu6R8CyjMLeo98tbnRYRibN4"
     },
     "signature": "qtcym1bmvK+QseqO2vREd+XtTSEjcsoYrTN6Yd+H3cd/h98BqTW7EtjstZaN8KD+L6BQuzH5Z6NUFrZYGaySMA=="
    }
   ],
   "memo": ""
  }
 }
}
```
### 委托人解除委托
```json
 {
 "height": "491",
 "txhash": "2EC3452185FEE87FFFF943B31FA348D9202C7CF13A1E6702E35DC8C5B90A97F5",
 "data": "CwiAkrjDmP7///8B",
 "logs": [
  {
   "msg_index": "0",
   "success": true,
   "log": ""
  }
 ],
 "gas_wanted": "999999990000",
 "gas_used": "61971",
 "tags": [
  {
   "key": "fee",
   "value": "0.01250000okt"
  },
  {
   "key": "action",
   "value": "begin_unbonding"
  },
  {
   "key": "delegator",
   "value": "okchain12k59uvedtwfd84ws80relawuz53tp8wp6tsmup"
  },
  {
   "key": "source-validator",
   "value": "okchainvaloper1w5hwfjwqf3f4yd5ar73wfracjvul3vzrkx0cdm"
  }
 ],
 "tx": {
  "type": "auth/StdTx",
  "value": {
   "msg": [
    {
     "type": "cosmos-sdk/MsgUndelegate",
     "value": {
      "delegator_address": "okchain12k59uvedtwfd84ws80relawuz53tp8wp6tsmup",
      "validator_address": "okchainvaloper1w5hwfjwqf3f4yd5ar73wfracjvul3vzrkx0cdm",
      "shares_amount": "1.00000000"
     }
    }
   ],
   "fee": {
    "amount": null,
    "gas": "999999990000"
   },
   "signatures": [
    {
     "pub_key": {
      "type": "tendermint/PubKeySecp256k1",
      "value": "A5FU0g0AW7mTEX8O48PKDu6R8CyjMLeo98tbnRYRibN4"
     },
     "signature": "TvKAhpzcdpzQhEwsv7YYjJLSUW0AdBMpgaPFPTSkjbZcQsF+8VzhL7T0lU+rylHrsHiEF88as85a/9cso4wy8w=="
    }
   ],
   "memo": ""
  }
 }
}
```
### 委托人更改委托
```json
{
	"height": "42757",
	"txhash": "1E6793106785268D1565B1D117C27C33834AB8C299F101878067C0379A0C1BAA",
	"data": "Cwj6pPTmBRD3nphk",
	"logs": [{
		"msg_index": "0",
		"success": true,
		"log": ""
	}],
	"gas_wanted": "999999990000",
	"gas_used": "73209",
	"tags": [{
		"key": "fee",
		"value": "0.01250000okt"
	}, {
		"key": "action",
		"value": "begin_redelegate"
	}, {
		"key": "delegator",
		"value": "okchain12yty23dd7nar5l68dcc73qc7qj4reyv6yzm5mr"
	}, {
		"key": "source-validator",
		"value": "okchainvaloper1apclacks9k2ewcvytyhzrflfhuk7md75x64qsz"
	}, {
		"key": "destination-validator",
		"value": "okchainvaloper19tt06a38dvz7g4eqpu2k6kkpe4vkym4gkmr3pm"
	}],
	"tx": {
		"type": "auth/StdTx",
		"value": {
			"msg": [{
				"type": "cosmos-sdk/MsgBeginRedelegate",
				"value": {
					"delegator_address": "okchain12yty23dd7nar5l68dcc73qc7qj4reyv6yzm5mr",
					"validator_src_address": "okchainvaloper1apclacks9k2ewcvytyhzrflfhuk7md75x64qsz",
					"validator_dst_address": "okchainvaloper19tt06a38dvz7g4eqpu2k6kkpe4vkym4gkmr3pm",
					"shares_amount": "5.00000000"
				}
			}],
			"fee": {
				"amount": null,
				"gas": "999999990000"
			},
			"signatures": [{
				"pub_key": {
					"type": "tendermint/PubKeySecp256k1",
					"value": "AiCg3X9M23EfIdU1RCsO7pDd5P26hDzeX+BmQfNKtDeB"
				},
				"signature": "OYtiiquAQe3GSU/wTRCJ5mPL4O8NxUvCG70n0vzhQ+sY3L/6xRY0BXTf7oWzv9jPA0Azsxd5NxowszvdCZKUEw=="
			}],
			"memo": ""
		}
	}
}
```
## token
### issue
```json
{
  "height": "5517",
  "txhash": "ECE81F7A6D9C5D829B56A4789859E949E6DE15ECCBDF3B0CEE4FAF478C363895",
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
      "value": "20000.00000000 okt"
    },
    {
      "key": "action",
      "value": "issue"
    },
    {
      "key": "symbol",
      "value": "bcoin-389"
    }
  ],
  "tx": {
    "type": "auth/StdTx",
    "value": {
      "msg": [
        {
          "type": "token/TokenIssue",
          "value": {
            "Desc": "",
            "Symbol": "",
            "OriginalSymbol": "bcoin",
            "WholeName": "bcoin",
            "TotalSupply": "200000",
            "Owner": "okchain1axvxvrvmjd0fe7rlxxety5dkz42ju962smzfmt",
            "Mintable": false
          }
        }
      ],
      "signatures": [
        {
          "pub_key": {
            "type": "tendermint/PubKeySecp256k1",
            "value": "A7KFGfnH7AUL+C4ALWq40tt8C0rflhlVRG7O055jFL/9"
          },
          "signature": "7Ce1KsZcOQ3Xj//owT+nzdRilecC+2JxfFi+Ux6AR1V0duqhWvCgwLXef7JJxGT76jIIvCtIDUBGUaMRNF3y0g=="
        }
      ],
      "memo": ""
    }
  },
  "timestamp": "2019-08-06T10:45:42Z"
}

```
### burn
```json
{
  "height": "6061",
  "txhash": "F69A540200AB049A09EE1911ECA68CEE7A47DCDFF1F8D0E8314056E2D1BCBBDB",
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
  ],
  "tx": {
    "type": "auth/StdTx",
    "value": {
      "msg": [
        {
          "type": "token/TokenBurn",
          "value": {
            "Symbol": "okt",
            "Amount": "100",
            "Owner": "okchain10q0rk5qnyag7wfvvt7rtphlw589m7frsmyq4ya"
          }
        }
      ],
      "signatures": [
        {
          "pub_key": {
            "type": "tendermint/PubKeySecp256k1",
            "value": "AgYaL1tZ7ekqvweQhKojG8sDHUfN23qJWviAsTDIWvYU"
          },
          "signature": "ZbE3dXjBKQyZRkjeMEUbxOfRIVn3JKTEpeR3Yafje/luKFWNlLwIDLJ/fUieMRIMzi+9IQAAvHiUdwZQeDGBzg=="
        }
      ],
      "memo": ""
    }
  },
  "timestamp": "2019-08-06T10:54:53Z"
}

```
### freeze
```json
{
  "height": "5625",
  "txhash": "8A0210B60CDE9335468712EC1A764132A4F988D8E1FCDD91FCF113B4C172A489",
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
  ],
  "tx": {
    "type": "auth/StdTx",
    "value": {
      "msg": [
        {
          "type": "token/TokenFreeze",
          "value": {
            "Symbol": "okt",
            "Amount": "0.1",
            "Owner": "okchain1axvxvrvmjd0fe7rlxxety5dkz42ju962smzfmt"
          }
        }
      ],
      "signatures": [
        {
          "pub_key": {
            "type": "tendermint/PubKeySecp256k1",
            "value": "A7KFGfnH7AUL+C4ALWq40tt8C0rflhlVRG7O055jFL/9"
          },
          "signature": "oDqvHMIz20xkJdblKWC91/ai4od35sKVzZpL6ctx6sMuTjtt51iheuiMyQX6mftaBhWDw9TEjKkFAFnh/umS8Q=="
        }
      ],
      "memo": ""
    }
  },
  "timestamp": "2019-08-06T10:47:31Z"
}

```
### unfreeze
```json
{
  "height": "5662",
  "txhash": "76513437D1AFC2F45EBDA757A1D8EE9B8D9C9B06C8615340173FDB47C0CD39EE",
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
  ],
  "tx": {
    "type": "auth/StdTx",
    "value": {
      "msg": [
        {
          "type": "token/TokenUnfreeze",
          "value": {
            "Symbol": "okt",
            "Amount": "0.1",
            "Owner": "okchain1axvxvrvmjd0fe7rlxxety5dkz42ju962smzfmt"
          }
        }
      ],
      "signatures": [
        {
          "pub_key": {
            "type": "tendermint/PubKeySecp256k1",
            "value": "A7KFGfnH7AUL+C4ALWq40tt8C0rflhlVRG7O055jFL/9"
          },
          "signature": "rI8qRpV4BarwGhu4b5Iumn134LkHmipQA0aLtql88Fk33x8lob8fpjzoge8wGYpGi0jQltWcvupecui0uhOkuA=="
        }
      ],
      "memo": ""
    }
  },
  "timestamp": "2019-08-06T10:48:09Z"
}

```
### mint
```json
{
  "height": "6255",
  "txhash": "AB1E3E7DDFEE78E517FFDBC37AEF5379F487358269E960FC09708E03545436CB",
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
  ],
  "tx": {
    "type": "auth/StdTx",
    "value": {
      "msg": [
        {
          "type": "token/TokenMint",
          "value": {
            "Symbol": "okt",
            "Amount": "100",
            "Owner": "okchain10q0rk5qnyag7wfvvt7rtphlw589m7frsmyq4ya"
          }
        }
      ],
      "signatures": [
        {
          "pub_key": {
            "type": "tendermint/PubKeySecp256k1",
            "value": "AgYaL1tZ7ekqvweQhKojG8sDHUfN23qJWviAsTDIWvYU"
          },
          "signature": "+VMFwnMA5CfsYkUoq+vq8UBScy+GBljAZ5BEf4tDK60ZnbHcPjUR75GArVV1licQnYK/EUIT58pXOjY6GxzQJA=="
        }
      ],
      "memo": ""
    }
  },
  "timestamp": "2019-08-06T10:58:10Z"
}

```
### multi-send
```json
{
  "height": "6442",
  "txhash": "6DD667F440650313F4C6FF2675980B11480C25733AD8B3D9DD83E6F5A2ED56DB",
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
  ],
  "tx": {
    "type": "auth/StdTx",
    "value": {
      "msg": [
        {
          "type": "token/MultiSend",
          "value": {
            "From": "okchain1axvxvrvmjd0fe7rlxxety5dkz42ju962smzfmt",
            "Transfers": [
              {
                "to": "okchain192gpmr2dcvjjfk487jztdhskp5lpashq4qqdtt",
                "coins": [
                  {
                    "denom": "okt",
                    "amount": "1.00000000"
                  },
                  {
                    "denom": "acoin",
                    "amount": "2.00000000"
                  }
                ]
              }
            ]
          }
        }
      ],
      "signatures": [
        {
          "pub_key": {
            "type": "tendermint/PubKeySecp256k1",
            "value": "A7KFGfnH7AUL+C4ALWq40tt8C0rflhlVRG7O055jFL/9"
          },
          "signature": "0rMP9E9SZbbZI4GBN3WV2fWi0myuUmXkBNSBxJY1JE5uy2Nx9MoGiujFD4t8B5D2K1eHMOSgY089rvkUfvg+2w=="
        }
      ],
      "memo": ""
    }
  },
  "timestamp": "2019-08-06T11:01:20Z"
}

```
### send
```json
{
  "height": "6491",
  "txhash": "BE6B640AF668EB5A198368C398F78B28E090B83865678158813BB50D58C88E22",
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
            "from_address": "okchain10q0rk5qnyag7wfvvt7rtphlw589m7frsmyq4ya",
            "to_address": "okchain1wdj97u093asvg4lkztsy3dc6t2c04c7tysv6ex",
            "amount": [
              {
                "denom": "okt",
                "amount": "0.01000000"
              }
            ]
          }
        }
      ],
      "signatures": [
        {
          "pub_key": {
            "type": "tendermint/PubKeySecp256k1",
            "value": "AgYaL1tZ7ekqvweQhKojG8sDHUfN23qJWviAsTDIWvYU"
          },
          "signature": "H6XqaxbAskEZCPKlBTm9DEQCGBwOm2Bgi9/CkrM6mCAMB4zNuNZxhCHX4+JUe8YuAK8ZXcPsVyIYofgC5p64bQ=="
        }
      ],
      "memo": ""
    }
  },
  "timestamp": "2019-08-06T11:02:10Z"
}

```
### transfer-ownership
```json
{
  "height": "6563",
  "txhash": "529351750337CCA0076377AB9CF0688610EB31633925B180D33D3383B8EAA78E",
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
  ],
  "tx": {
    "type": "auth/StdTx",
    "value": {
      "msg": [
        {
          "type": "token/TransferOwnership",
          "value": {
            "from_address": "okchain10q0rk5qnyag7wfvvt7rtphlw589m7frsmyq4ya",
            "to_address": "okchain1wdj97u093asvg4lkztsy3dc6t2c04c7tysv6ex",
            "symbol": "okt",
            "to_signature": {
              "pub_key": {
                "type": "tendermint/PubKeySecp256k1",
                "value": "Aod6zE+m0ImxP+nocLFhsqRT9YWSv43pcgHgDPVA3jGJ"
              },
              "signature": "Qz88yvVLJ2CKUGPzRDm3n14jVkOZwDvpIp3yBl0c/FNdBCmQtrV/HSDSkG1QHD8LOEVDEWuM3bv2KW9utGfYRw=="
            }
          }
        }
      ],
      "signatures": [
        {
          "pub_key": {
            "type": "tendermint/PubKeySecp256k1",
            "value": "AgYaL1tZ7ekqvweQhKojG8sDHUfN23qJWviAsTDIWvYU"
          },
          "signature": "jE72oWk9zejgypuERfVKcM6CY3RTlOLaETNPo1pZKsVZw8bi92dUslCSQuyt//J1QqpJ2PbhIlnL5twtxB1Z+Q=="
        }
      ],
      "memo": ""
    }
  },
  "timestamp": "2019-08-06T11:03:23Z"
}

```
## distribution
### 修改自己的分红取款地址
```json
{
 "height": "160",
 "txhash": "FA92AD2A363B337E63237B042A4B4B263FFF08A5C07EEE48290D4B08076BCF1C",
 "logs": [
  {
   "msg_index": "0",
   "success": true,
   "log": ""
  }
 ],
 "gas_wanted": "999999990000",
 "gas_used": "27837",
 "tags": [
  {
   "key": "fee",
   "value": "0.01250000okt"
  },
  {
   "key": "action",
   "value": "set_withdraw_address"
  }
 ],
 "tx": {
  "type": "auth/StdTx",
  "value": {
   "msg": [
    {
     "type": "cosmos-sdk/MsgModifyWithdrawAddress",
     "value": {
      "delegator_address": "okchain1mah73jf4k4ceyygxajs4r323yxtdc9jpneak0z",
      "withdraw_address": "okchain1mah73jf4k4ceyygxajs4r323yxtdc9jpneak0z"
     }
    }
   ],
   "fee": {
    "amount": null,
    "gas": "999999990000"
   },
   "signatures": [
    {
     "pub_key": {
      "type": "tendermint/PubKeySecp256k1",
      "value": "AqVgDkx1b/c+mGhdN27D3omP4lmlQ56/O7BVNrCm8mv+"
     },
     "signature": "1R/FqYPj18vDBA5DmpnbPnM3Ram16nmAW71qL+h9DLUSP2N5FwlaQ+hYa5s6tKYmmkCbHxIFNDCn1hfDEPP5JA=="
    }
   ],
   "memo": ""
  }
 }
}
```
## order

### 下单
```json
{
  "height": "4",
  "txhash": "5B5EABFA59B17A7B5A62C9F225DEEEF486343173CB91DCDDFC81E827FFDE0789",
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
      "value": "0"
    },
    {
      "key": "orderId",
      "value": "ID0000000004-1"
    }
  ],
  "tx": {
    "type": "auth/StdTx",
    "value": {
      "msg": [
        {
          "type": "order/new",
          "value": {
            "Sender": "okchain10q0rk5qnyag7wfvvt7rtphlw589m7frsmyq4ya",
            "Product": "xxb_okt",
            "Side": "BUY",
            "Price": "10.00000000",
            "Quantity": "800.00000000"
          }
        }
      ],
      "signatures": [
        {
          "pub_key": {
            "type": "tendermint/PubKeySecp256k1",
            "value": "AgYaL1tZ7ekqvweQhKojG8sDHUfN23qJWviAsTDIWvYU"
          },
          "signature": "LFEoEZ0xF3Eth4heSPVUyVTqYx02b89n7zTtehF2gglTbfY4UqPG3rDhn3ESWpAaeb7/ZMnwxRqlixIvLiWkxg=="
        }
      ],
      "memo": ""
    }
  },
  "timestamp": "2019-10-14T03:26:12Z"
}
```

### 撤单
```json
{
  "height": "244",
  "txhash": "C08F790B8AEFB588F4CADD6C63E49F2DDAF98E8A1F10C78B849396A36329982F",
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
      "value": "0.00200000 okt"
    },
    {
      "key": "action",
      "value": "cancel"
    },
    {
      "key": "orderId",
      "value": "ID0000000185-1"
    }
  ],
  "tx": {
    "type": "auth/StdTx",
    "value": {
      "msg": [
        {
          "type": "order/cancel",
          "value": {
            "Sender": "okchain1wdj97u093asvg4lkztsy3dc6t2c04c7tysv6ex",
            "OrderId": "ID0000000185-1"
          }
        }
      ],
      "signatures": [
        {
          "pub_key": {
            "type": "tendermint/PubKeySecp256k1",
            "value": "Aod6zE+m0ImxP+nocLFhsqRT9YWSv43pcgHgDPVA3jGJ"
          },
          "signature": "+WAt20gxdeqmXDITLScF3huAh/RhyqeFxCR5xVOrMWA77jWJu+FQZWn8J9DuWKciHTJgaHIxd/SyRebKkcu5TA=="
        }
      ],
      "memo": ""
    }
  },
  "timestamp": "2019-08-06T09:16:30Z"
}

```
  
  
  
