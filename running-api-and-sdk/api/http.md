# Rest API

Rest api methords for okc.

```wiki
# Mainnet
https://exchainrpc.okex.org/okexchain/v1/auth/accounts/0x11941B5f5A1BD39bc3Da48f3815C877800bb73c1

# Testnet
https://exchaintestrpc.okex.org/okexchain-test/v1/auth/accounts/0x9536354AE32852A7E7C4BFe7415b104016d5Fb04
```

Rate Limit: 6 requests per second.

Query with the history info with `height` param, default 0  lastest block, the node may deletes historical information, suggested query the latest in 10 blocks

```wiki
# query account info on block height 1111
https://exchainrpc.okex.org/okexchain/v1/auth/accounts/0x11941B5f5A1BD39bc3Da48f3815C877800bb73c1?height=1111

# query delegator info on block height 1111
https://exchainrpc.okex.org/okexchain/v1/staking/delegators/0x11941B5f5A1BD39bc3Da48f3815C877800bb73c1?height=1111

# query delegator info on lastest block
https://exchainrpc.okex.org/okexchain/v1/staking/delegators/0x11941B5f5A1BD39bc3Da48f3815C877800bb73c1
https://exchainrpc.okex.org/okexchain/v1/staking/delegators/0x11941B5f5A1BD39bc3Da48f3815C877800bb73c1?height=0
```



## Account

### Get balance

The API endpoints of Get Balance of all currencies for a single Address .
By default, just show currencies partially, you can use parameter of `show=all` to see all; you can use the parameter of `symbol=btc` to see just one.

#### HTTP Request

`GET okexchain/v1/accounts/{address}`

> Request Example

```wiki
https://exchainrpc.okex.org/okexchain/v1/accounts/ex1508d7eq592kg2lh9d46xvv3r4sm7gm8we5fakv
https://exchainrpc.okex.org/okexchain/v1/accounts/ex1508d7eq592kg2lh9d46xvv3r4sm7gm8we5fakv?show=partial
https://exchainrpc.okex.org/okexchain/v1/accounts/ex1508d7eq592kg2lh9d46xvv3r4sm7gm8we5fakv?show=all
https://exchainrpc.okex.org/okexchain/v1/accounts/ex1508d7eq592kg2lh9d46xvv3r4sm7gm8we5fakv?symbol=btc

```

#### Request Parameters

| **Parameter** | **Type** | **Required** | **Description**                                           |
| :------------ | :------- | :----------- | :-------------------------------------------------------- |
| address       | String   | Yes          |                                                           |
| show          | String   | No           | Type: <br> `all`: show all <br> `partial`: show part <br> |
| symbol        | String   | No           | for example `btc`                                         |

> Example Response

```json
{
	"code": 0,
	"msg": "",
	"detail_msg": "",
	"data": {
		"address": "ex1508d7eq592kg2lh9d46xvv3r4sm7gm8we5fakv",
		"currencies": [{
			"symbol": "okt",
			"available": "51123.350000000000000000",
			"locked": "0"
		}]
	}
}
```

#### Response Parameters

| **Parameter** | **Type** | **Description**    |
| :------------ | :------- | :----------------- |
| address       | String   | Address of Account |
| currencies    | String   | Currencies list    |
| > symbol      | String   | Currency symbol    |
| > available   | String   | The amount can use |
| > locked      | String   | The amount locked  |

### Get accountNumber and sequence

The API endpoints of get user's account_number and sequence.

#### HTTP Request

`GET okexchain/v1/auth/accounts/{address}`

> Request Example

```wiki
https://exchainrpc.okex.org/okexchain/v1/auth/accounts/ex1xkl5agjzqnjnptyat2dng2asmx8g5kll7evelk
```

#### Request Parameters

| **Parameter** | **Type** | **Required** | **Description**    |
| :------------ | :------- | :----------- | :----------------- |
| address       | String   | Yes          | Address of Account |

> Example Response

```json
{
	"type": "okexchain/EthAccount",
	"value": {
		"address": "ex1xkl5agjzqnjnptyat2dng2asmx8g5kll7evelk",
		"eth_address": "0x35bf4EA24204E530AC9d5a9b342bB0D98e8a5bfF",
		"coins": [{
			"denom": "okt",
			"amount": "52741.300000000000000000"
		}],
		"public_key": "expub17weu6qepqw9q0u6snmd40a7d6jqc5ey4z0se30ev09jw44pnz29lf36p0euv26pqjvf",
		"account_number": 49,
		"sequence": 15,
		"code_hash": "c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470"
	}
}
```

#### Response Parameters

| **Parameter**  | **Type** | **Description**                         |
| :------------- | :------- | :-------------------------------------- |
| address        | String   | Address of OKExChain                    |
| eth_address    | String   | Address of Etherscan                    |
| public_key     | String   | Public key of account                   |
| account_number | String   | Creation sequence number of the account |
| sequence       | String   | Nonce of account                        |
| code_hash      | String   | Hash of contract code                   |
| coins          | Array    | Coins                                   |
| > denom        | String   |                                         |
| > amount       | String   |                                         |

## Blocks

### Get latest blocks

Get the latest information on blocks

#### HTTP Request

`GET okexchain/v1/blocks/latest`

> Request Example

```wiki
https://exchainrpc.okex.org/okexchain/v1/blocks/latest

```

#### Request Parameters

None

> Example Response

```json
{
  "block_id": {
    "hash": "318A4D6BCBBF646BFB85803D4A4DFBB30BFBC42DC424D4B26ADE34C43E6FA135",
    "parts": {
      "total": "1",
      "hash": "E9FCD3B437149AFE48986DB4D990F9413C0D29F29E066CD753D949FAF86C746E"
    }
  },
  "block": {
    "header": {
      "version": {
        "block": "10",
        "app": "0"
      },
      "chain_id": "exchain-66",
      "height": "2603621",
      "time": "2021-05-07T08:01:26.35548598Z",
      "last_block_id": {
        "hash": "7FE82A494E32E54CB1BAB23B9742101B26347B5AA08C08F4F146C8B1E3FE7635",
        "parts": {
          "total": "1",
          "hash": "4DD2803A3C906A1D8CCD9F05B09C46EE91A0F4C19E49EB60F36E4D49D1DDB639"
        }
      },
      "last_commit_hash": "0464FACC42944898C4B58AF4B9AACB5640889AD1CC2BB9F4667A12400513C679",
      "data_hash": "16AA2C550F7B7734F1BD0453DC5641C31AFD6DC12D59A4657D745792D1A2C0F5",
      "validators_hash": "FFAA79D077B93BBE1568A2773B7770D261D749A3D1F1DF7FB5DCF08EFE29521D",
      "next_validators_hash": "FFAA79D077B93BBE1568A2773B7770D261D749A3D1F1DF7FB5DCF08EFE29521D",
      "consensus_hash": "048091BC7DDC283F77BFBF91D73C44DA58C3DF8A9CBC867405D8B7F3DAADA22F",
      "app_hash": "EB98972779BE109B820676CCAFBE26D1AE191B4895D5D3B60385A133F708611B",
      "last_results_hash": "",
      "evidence_hash": "",
      "proposer_address": "C12BA4719F0F124D44CD1C820F7A7DE5AA2724EF"
    },
    "data": {
      "txs": [
        "mwolpr5UCpQKCJ4WEgoxMDAwMDAwMDAwGODsDSIUMbgg2ke0662B9lP98ylS0bwbxGkqATAyxAjIFSi4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYJTzvAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADP2X7cAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABnByaWNlcwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANCVEMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYJTzRAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADP8z/ggAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABnByaWNlcwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANCVEMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABguzqbTA0FJlOQczVDQz4kCirKtcW+789YroCK2MVd0KNxcJuTnNaWnfV4287csYS36Q3NZ0kdV0QzBDjf31wK1wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGCt0M/dRE+bEKGIiydvN/Q1NKWMOuCK98/4ZG6wc91hjttMyfgBLC8+OboF9XdBf2805VoD6UauSIxrpkAQO8QJAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABs6AjI3QkwyNzY1NDA5OTU1MzQ4NzcxMTkxMzU1MDQxNTE1NDQwNTYyNTg4OTc3MDM2NTU3ODM3NzczMTc3NTA3MDI5MTc5MDczNDE1MzI4NTI5Sk0zNTQwMzY5Mzg5OTU3NDY0MDQ0MzQxNDk0MTk1NjgzMDc1MTE2OTY2ODE0MDk3NTI0NDY0NzQ0MzM0NzQ5MzM4MjE1MjU3OTI4MjMyOA=="
      ]
    },
    "evidence": {
      "evidence": null
    },
    "last_commit": {
      "height": "2603620",
      "round": "0",
      "block_id": {
        "hash": "7FE82A494E32E54CB1BAB23B9742101B26347B5AA08C08F4F146C8B1E3FE7635",
        "parts": {
          "total": "1",
          "hash": "4DD2803A3C906A1D8CCD9F05B09C46EE91A0F4C19E49EB60F36E4D49D1DDB639"
        }
      },
      "signatures": [
        {
          "block_id_flag": 2,
          "validator_address": "0FE9CF2FFAC38F7BCC50818B9B431FF9934C9597",
          "timestamp": "2021-05-07T08:01:26.482302807Z",
          "signature": "Hs9xfPWcGvUMTtaEBFDdbPxrjqlQf0FPvC+syFkFKaXowfkI3rLxRBJTRRUrjtVpN83mK3Uge4IfDc/trrjjCQ=="
        },
        {
          "block_id_flag": 2,
          "validator_address": "1C2BB905E9B6F7D6B8625077CD955C0F1A3BA026",
          "timestamp": "2021-05-07T08:01:26.32079867Z",
          "signature": "nC99f5Kkprn/zZAk+jlU2Vgqo/foHb+PP2eorRZQQuVKhNIQV+hF+3g5EKMaNgYGlGw1ufaYss9r4IGZq9ETDA=="
        },
        {
          "block_id_flag": 2,
          "validator_address": "206BC60D6024CCFE4062CE1D358C5BA18CDCA284",
          "timestamp": "2021-05-07T08:01:26.350357993Z",
          "signature": "WWdf79WVBVwCZWY7owpSGfDqnPOX40v15kFQyUSK5I2OeOXvFEY3O1uwhrWAnHXTPWsf7eNdBMCgafNTAwnNCA=="
        },
        {
          "block_id_flag": 2,
          "validator_address": "2DA545954A696F8F09AEF25AEDE2B0DDE1A67B60",
          "timestamp": "2021-05-07T08:01:26.350464826Z",
          "signature": "aaLobtLpl/NwKm+vxT5SCcDTguApIO294TX8vNSVWTnxJ61Qx+IbkhMNF8kPcyHuF2+deoMjLhBQZ2vAhLFuBA=="
        },
        {
          "block_id_flag": 2,
          "validator_address": "32409E2BBF7F551EC182769BD142B2F262B261F0",
          "timestamp": "2021-05-07T08:01:26.357054729Z",
          "signature": "wk2+WYIMQ5kQTUfHC6KV0pdeK91P7ZWqvgGhoVBKlKRd6R8/MBSOfrnS+mhSVRyCGDBla2Vubcgk9gQD1MNiCg=="
        },
        {
          "block_id_flag": 2,
          "validator_address": "33FAA80AA17F6412E8594ED447BAD09454A557AC",
          "timestamp": "2021-05-07T08:01:26.35548598Z",
          "signature": "Ma0UNpyyKs89ZakVNa7ZYNyIAVfdmirYCocyaU36K1i/HHNrNNc4ikdLvNzJSA9YGOcKU7NvguW9ZIRZphg8Cg=="
        },
        {
          "block_id_flag": 2,
          "validator_address": "456D70DDD05B7AF40369FABFFDFACC2135AA5232",
          "timestamp": "2021-05-07T08:01:26.354770468Z",
          "signature": "cNWX9Z3/lYgy455QfH6Os+M8IWPXp4a+3X4o92Bhc9Il8mi0/a9cX9kL5fNQDh2Tg4GrDr9mM1nUmIezPl9CCQ=="
        },
        {
          "block_id_flag": 2,
          "validator_address": "5304C540AD76FD12BF228C30DC889AD2F80A65FC",
          "timestamp": "2021-05-07T08:01:26.442362032Z",
          "signature": "6CRIdv7yp52/iWH+/WmLmY+h+Pg1JsrvEHCzHtuDX03O+50bQDns+fn1RpswdvrnKCghrRQzjmzfvyANATueBw=="
        },
        {
          "block_id_flag": 2,
          "validator_address": "697C3DBA5A7E7326B560E496D6F7B9924A26ED1B",
          "timestamp": "2021-05-07T08:01:26.383749463Z",
          "signature": "DHV4ndTjz1zTwCgm6aZArZugg01AHgeyhx4LU6u//boMpBM92WAP6Urh1vewZqHypm9GQHKMUhOGLHycZA9YBw=="
        },
        {
          "block_id_flag": 2,
          "validator_address": "6BE29CEF63D91013E5DE84064BAC7B2DE2B8B949",
          "timestamp": "2021-05-07T08:01:26.379679477Z",
          "signature": "Z24TLSMlC7ONPhWDzCNEeiwsbfzB7IClfe1lpmyeTt0+MFMvIZdKIfVYSPaBylfSXW8NSAyDRKoXofRJQqKtBw=="
        },
        {
          "block_id_flag": 2,
          "validator_address": "7AE14A0113E95291CB37E5773A699A01D5071C1D",
          "timestamp": "2021-05-07T08:01:26.353737588Z",
          "signature": "EbwqvKVO49a8wLySrTIeckRLWSV4WLEPvM/nOfUKIdQOK/t9cGf7r2xBbchR67EKimLzg47GOtrMYPXXrTYzBA=="
        },
        {
          "block_id_flag": 2,
          "validator_address": "B08F1E9CD9BDAD3EB8AEEC37E0662ABCC70BFB3E",
          "timestamp": "2021-05-07T08:01:26.376131036Z",
          "signature": "Ei+ju2r1sk+7HyOMlgY0gLBKWsheepdzamZtud5BrlsCPmDuT8TpDToN5U0W1LamLerGE+0QhqDtC0dSOdFLCw=="
        },
        {
          "block_id_flag": 2,
          "validator_address": "B527086523C2B0B093BECFE42D45729B6775F56D",
          "timestamp": "2021-05-07T08:01:26.344440065Z",
          "signature": "P1l6GhSDpiYrnmrGgqDKbt95hPBm5sMq+p1A3tdEx31EOU+To9vk+f4BMZfJw/eXbPH2OuvqbPtWizFhfM/mDA=="
        },
        {
          "block_id_flag": 2,
          "validator_address": "B8586789B5681169A6CDC670775AC83FF560AA2F",
          "timestamp": "2021-05-07T08:01:26.380683036Z",
          "signature": "U/X4zMSBchYNikSnsX1297kWMp5hnI1jBaw4fxNLCv8tLjNFQqhunlQ65eypl1qlFGaAAhTzghZgq9vbLOQ7Bw=="
        },
        {
          "block_id_flag": 2,
          "validator_address": "C12BA4719F0F124D44CD1C820F7A7DE5AA2724EF",
          "timestamp": "2021-05-07T08:01:26.383968357Z",
          "signature": "0vDSh0IaRBRfGluifumJpAbbW90SKVaM8gFN8pu7/eb0NL7U3n1YPpPxrBiL5jpOhvy/VZyuIVjjcSEH/F6cDA=="
        },
        {
          "block_id_flag": 2,
          "validator_address": "C1D32DDFC3C0C06F44BEE90593D5ED7539D5BA12",
          "timestamp": "2021-05-07T08:01:26.354564603Z",
          "signature": "CCexLtzVEtujUQVcjjOC8uN+AOAQvmgvA/cKLmcFIvDyRJUgwTy1cFRZVA38S/adcB6DE70xaV8YG/mwxeETDw=="
        },
        {
          "block_id_flag": 2,
          "validator_address": "C624AEA0BAF4BB7D65B204B6D50D26D0D0AF5DA0",
          "timestamp": "2021-05-07T08:01:26.345453216Z",
          "signature": "1IsSxY4D1epNXoP1GTZ9dxkuq9MhQBdA/nLVSN+XjhffDHxquJwMuklRPJC9L59v99y3EUEbDtQzq3eGgJ9gAA=="
        },
        {
          "block_id_flag": 2,
          "validator_address": "D67B9BA8B93D16A80B3F228D9DDCEFBEC0463D10",
          "timestamp": "2021-05-07T08:01:26.373584005Z",
          "signature": "1cWu3c5WhU7qmvmQLa928MPTRTphEYIyVtDJ46KpnBDUOLwyg1cuNMJzx7V5+YrCNbiZdVqjXp1hcsZPYPzqCQ=="
        },
        {
          "block_id_flag": 2,
          "validator_address": "D7958E043A8FCFF9405F043E1F8EFFB9C1147F60",
          "timestamp": "2021-05-07T08:01:26.354144567Z",
          "signature": "dtW1xcZbfNdXyd2xhI2VNoOaJgjnGxTcovlZN9SMzHc+9HrneFo87b5cGjxxiOeil/EQDxykw2E60M2Lm056Dw=="
        },
        {
          "block_id_flag": 2,
          "validator_address": "E3F8C6177337DC894631E702D8154BBEC9A931D5",
          "timestamp": "2021-05-07T08:01:26.354528064Z",
          "signature": "r5jcMKtINAQrMFMWBz2Z6c7DlKnjLfMQ4Ao4IzLsCoe+FSw72kUchlmXIibDohw5XrZItdlRk8TRug4e1+aHAg=="
        },
        {
          "block_id_flag": 2,
          "validator_address": "E42368D36DEB5E5D6682858E730E63014B1CA2C5",
          "timestamp": "2021-05-07T08:01:26.389600911Z",
          "signature": "cJfHaM+u8ubzhW+ixtyqekBUBjQM5ObEX9/QiymGNJ66Tbf/PQGV6vdt5NDlCs7XtP94THOT/gP643ttY6x8Dg=="
        }
      ]
    }
  }
}
```

#### Response Parameters

| **Parameter**           | **Type** | **Description** |
| :---------------------- | :------- | :-------------- |
| block_id                | Object   |                 |
| > parts                 | Object   |                 |
| >> total                | String   |                 |
| >> hash                 | String   |                 |
| > hash                  | String   |                 |
| block                   | Object   |                 |
| > data                  | Object   |                 |
| >> txs                  | String   |                 |
| > evidence              | Object   |                 |
| >> evidence             | String   |                 |
| > last_commit           | Object   |                 |
| >> round                | String   |                 |
| >> block_id             | Object   |                 |
| >>> parts               | Object   |                 |
| >>>> total              | String   |                 |
| >>>> hash               | String   |                 |
| >>> hash                | String   |                 |
| >> signatures           | Array    |                 |
| >>> signature           | String   |                 |
| >>> validator_address   | String   |                 |
| >>> block_id_flag       | String   |                 |
| >>> timestamp           | String   |                 |
| >> height               | String   |                 |
| > header                | Object   |                 |
| >> validators_hash      | String   |                 |
| >> chain_id             | String   |                 |
| >> consensus_hash       | String   |                 |
| >> proposer_address     | String   |                 |
| >> next_validators_hash | String   |                 |
| >> version              | Object   |                 |
| >>> app                 | String   |                 |
| >>> block               | String   |                 |
| >> data_hash            | String   |                 |
| >> last_results_hash    | String   |                 |
| >> last_block_id        | Object   |                 |
| >>> parts               | Object   |                 |
| >>>> total              | String   |                 |
| >>>> hash               | String   |                 |
| >>> hash                | String   |                 |
| >> evidence_hash        | String   |                 |
| >> app_hash             | String   |                 |
| >> time                 | String   |                 |
| >> height               | String   |                 |
| >> last_commit_hash     | String   |                 |

### Get block info

Get information on by block height

#### HTTP Request

`GET okexchain/v1/blocks/{height}`

> Request Example

```wiki
https://exchainrpc.okex.org/okexchain/v1/blocks/2322601
```

#### Request Parameters

None

> Example Response

```json
{
  "block_id": {
    "hash": "AEF267A96586B10F8911B4B13934C31887DBEF03757A44B538C88DB87A5EEE83",
    "parts": {
      "total": "1",
      "hash": "9A119B06F376BB6080FE80516130FEA25498EB59A60A04E7CE4CA09AE5A1DA32"
    }
  },
  "block": {
    "header": {
      "version": {
        "block": "10",
        "app": "0"
      },
      "chain_id": "exchain-66",
      "height": "2322601",
      "time": "2021-01-15T12:00:00Z",
      "last_block_id": {
        "hash": "",
        "parts": {
          "total": "0",
          "hash": ""
        }
      },
      "last_commit_hash": "",
      "data_hash": "",
      "validators_hash": "106BA08C88D75667552A7726EDD3ABF65A3B183935D9BACB40128939EC2B3E30",
      "next_validators_hash": "106BA08C88D75667552A7726EDD3ABF65A3B183935D9BACB40128939EC2B3E30",
      "consensus_hash": "048091BC7DDC283F77BFBF91D73C44DA58C3DF8A9CBC867405D8B7F3DAADA22F",
      "app_hash": "",
      "last_results_hash": "",
      "evidence_hash": "",
      "proposer_address": "32409E2BBF7F551EC182769BD142B2F262B261F0"
    },
    "data": {
      "txs": null
    },
    "evidence": {
      "evidence": null
    },
    "last_commit": {
      "height": "0",
      "round": "0",
      "block_id": {
        "hash": "",
        "parts": {
          "total": "0",
          "hash": ""
        }
      },
      "signatures": null
    }
  }
}
```

#### Response Parameters

| **Parameter**           | **Type** | **Description** |
| :---------------------- | :------- | :-------------- |
| block_id                | Object   |                 |
| > parts                 | Object   |                 |
| >> total                | String   |                 |
| >> hash                 | String   |                 |
| > hash                  | String   |                 |
| block                   | Object   |                 |
| > data                  | Object   |                 |
| >> txs                  | String   |                 |
| > evidence              | Object   |                 |
| >> evidence             | String   |                 |
| > last_commit           | Object   |                 |
| >> round                | String   |                 |
| >> block_id             | Object   |                 |
| >>> parts               | Object   |                 |
| >>>> total              | String   |                 |
| >>>> hash               | String   |                 |
| >>> hash                | String   |                 |
| >> signatures           | String   |                 |
| >> height               | String   |                 |
| > header                | Object   |                 |
| >> validators_hash      | String   |                 |
| >> chain_id             | String   |                 |
| >> consensus_hash       | String   |                 |
| >> proposer_address     | String   |                 |
| >> next_validators_hash | String   |                 |
| >> version              | Object   |                 |
| >>> app                 | String   |                 |
| >>> block               | String   |                 |
| >> data_hash            | String   |                 |
| >> last_results_hash    | String   |                 |
| >> last_block_id        | Object   |                 |
| >>> parts               | Object   |                 |
| >>>> total              | String   |                 |
| >>>> hash               | String   |                 |
| >>> hash                | String   |                 |
| >> evidence_hash        | String   |                 |
| >> app_hash             | String   |                 |
| >> time                 | String   |                 |
| >> height               | String   |                 |
| >> last_commit_hash     | String   |                 |

### Get Tx Info

Get Tx information by Tx hash

#### HTTP Request

`GET okexchain/v1/txs/{hash}`

> Request Example

```wiki
https://exchainrpc.okex.org/okexchain/v1/txs/0x9C19D09361F01296EE5FB910634C08C8329414A90965317605B34C209DB19624
```

#### Request Parameters

None

> Example Response

```json
{
	"blockHash": "0x35b8a059fbb641b8515a6eab65112a8d95f851bad598543a55a13885e9a0d552",
	"blockNumber": "0x29237d",
	"from": "0xd830c50dbfa92b296c55ef30ad3b0c6f7f344aec",
	"gas": "0x3f962",
	"gasPrice": "0x47868c00",
	"hash": "0x9c19d09361f01296ee5fb910634c08c8329414a90965317605b34c209db19624",
	"input": "0x95d1383800000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000220000000000000000000000000000000000000000000000000000000000000000e000000000000000000000000ef71ca2ee68f45b9ad6f72fbdb33d707b872315c0000000000000000000000009b99c3ce751aa292320033f93a1376902d4ba58b000000000000000000000000fa520efc34c81bfc1e3dd48b7fe9ff326049f986000000000000000000000000abc732f6f69a519f6d508434481376b6221eb7d500000000000000000000000021cde7e32a6caf4742d00d44b07279e7596d26b900000000000000000000000059d226bb0a4d74274d4354ebb6a0e1a1aa5175b60000000000000000000000008c340697d2e320311d30db03782151b28f4cf7820000000000000000000000008f8526dbfd6e38e3d8307702ca8469bae6c56c1500000000000000000000000054e4622dc504176b3bb432dccaf504569699a7ff000000000000000000000000df54b6c6195ea4d948d03bfd818d365cf175cfc20000000000000000000000003f8969be2fc0770dcc174968e4b4ff146e0acdaf0000000000000000000000002218e0d5e0173769f5b4939a3ae423f7e5e4eab7000000000000000000000000dcac52e001f5bd413aa6ea83956438f29098166b000000000000000000000000c946daf81b08146b1c7a8da2a851ddf2b3eaaf85000000000000000000000000000000000000000000000000000000000000000e0000000000000000000000000000000000000000000000d4d1fd514b4e09b5980000000000000000000000000000000000000000000000027e3278e43ab97acc00000000000000000000000000000000000000000000001367ef8f9a9a65c000000000000000000000000000000000000000000000000001fb0f13e2cad5c2cc0000000000000000000000000000000000000000000000000de12b6b96230598000000000000000000000000000000000000000000000001fcee4e62571ff00000000000000000000000000000000000000000000000000000001f608082219800000000000000000000000000000000000000000000000b0188ce742a7ce000000000000000000000000000000000000000000000000bb10d919ef93659e000000000000000000000000000000000000000000000000001db86902bf335159800000000000000000000000000000000000000000000000782da20c8f733d598000000000000000000000000000000000000000000000000c2aa9ac67b9922cc0000000000000000000000000000000000000000000000000ddfabfeb40c40a80000000000000000000000000000000000000000000000000dde6fde043272cc",
	"nonce": "0x13dc",
	"to": "0x21a276b169f51a0725dbc708c09ea7e1c4d94488",
	"transactionIndex": "0x0",
	"value": "0x0",
	"v": "0xa7",
	"r": "0x4b383ec9a9198f019ca33a53b2192865201a5ef366ae02ffd26e510f85458b08",
	"s": "0x1aea872d825dceb3f6ca8fcccfac500dc0644d67eb803281ca27c26f8242c304"
}
```

#### Response Parameters

| **Parameter**    | **Type** | **Description** |
| :--------------- | :------- | :-------------- |
| gasPrice         | String   |                 |
| hash             | String   |                 |
| value            | String   |                 |
| to               | String   |                 |
| from             | String   |                 |
| gas              | String   |                 |
| blockNumber      | String   |                 |
| v                | String   |                 |
| s                | String   |                 |
| r                | String   |                 |
| input            | String   |                 |
| nonce            | String   |                 |
| transactionIndex | String   |                 |
| blockHash        | String   |                 |

### Get latest validatorsets

Get the latest validator set

#### HTTP Request

`GET okexchain/v1/validatorsets/latest`

> Request Example

```wiki
https://exchainrpc.okex.org/okexchain/v1/validatorsets/latest
```

#### Request Parameters

None

> Example Response

```json
{
	"block_height": "3323070",
	"validators": [{
		"address": "exvalcons1pl5u7tl6cw8hhnzssx9ekscllxf5e9vhu73l6w",
		"pub_key": "exvalconspub1zcjduepqu6473zvyzy3zwhmdhd38z7cdkw7wf50hdztngrndhxgr8xrqhrrq0m3nhf",
		"proposer_priority": "-57762372464786",
		"voting_power": "9023435617112"
	}, {
		"address": "exvalcons1rs4mjp0fkmmadwrz2pmum92upudrhgpx2cwjrk",
		"pub_key": "exvalconspub1zcjduepqllecydfvumn0swfx7mvyjtxepnsaqwm6qu4n0294st82qrc4zd8qtmeftd",
		"proposer_priority": "16694606781697",
		"voting_power": "9019397216795"
	}, {
		"address": "exvalcons1yp4uvrtqynx0usrzecwntrzm5xxdeg5ycgw6zq",
		"pub_key": "exvalconspub1zcjduepqgczr87k588khjz87z0fagqyqz4ua6alevq2hcfdldv5wmx4293xsuhhmk3",
		"proposer_priority": "26311446727052",
		"voting_power": "9035970427713"
	}, {
		"address": "exvalcons19kj5t922d9hc7zdw7fdwmc4smhs6v7mqxv09ny",
		"pub_key": "exvalconspub1zcjduepqk93rdqd8lkknq7rhr5pfnzj7px0knpqw85jycsqdj7xvc950q5vqdqu4rx",
		"proposer_priority": "6594921836654",
		"voting_power": "9040433129887"
	}, {
		"address": "exvalcons1xfqfu2al0a23asvzw6dazs4j7f3tyc0stgxe7w",
		"pub_key": "exvalconspub1zcjduepqgw849shr86xu0zqgfur0wqsws3xer5ckfy0k5ga969wxqfmllz0q39yrch",
		"proposer_priority": "-10037501532742",
		"voting_power": "9039088117292"
	}, {
		"address": "exvalcons1x0a2sz4p0ajp96zefm2y0wksj32224avzy2g4z",
		"pub_key": "exvalconspub1zcjduepqp7ul8pfremls80jvqdnqe3cy56avzgj25jjqz0luz3cjzlp8a3ssur08mt",
		"proposer_priority": "-86691862550180",
		"voting_power": "1899440874312"
	}, {
		"address": "exvalcons1g4khphwstda0gqmfl2llm7kvyy66553jn5x7jq",
		"pub_key": "exvalconspub1zcjduepqv6anlah0pedc6wpdmphlhnzh85yxalpwgwf9zk6enjxh5pg0swfs9e5nj3",
		"proposer_priority": "75054887912278",
		"voting_power": "9024728174216"
	}, {
		"address": "exvalcons12vzv2s9dwm7390ez3scdezy66tuq5e0ussvzsn",
		"pub_key": "exvalconspub1zcjduepqk7wrtvrx0wwm8a3jyvfth2gl37g7ldal8sn0ydvjv2vxawyflw4s49xuv2",
		"proposer_priority": "31599784388253",
		"voting_power": "1740951196392"
	}, {
		"address": "exvalcons1d97rmwj60eejddtqujtddaaejf9zdmgmuglxef",
		"pub_key": "exvalconspub1zcjduepqqfwzk69r2nt7xcqjzmjvwuxaelevsdjftgqk8wafmdqr9ac9gd0ssukkrn",
		"proposer_priority": "105085597421655",
		"voting_power": "9037541576976"
	}, {
		"address": "exvalcons1d03femmrmygp8ew7ssryhtrm9h3t3w2fc9mkdd",
		"pub_key": "exvalconspub1zcjduepqrtlw4twnhr5ckjzuzh3t0wkfvzqv67mnk4pkz645gaqclevzn7lqaf37v9",
		"proposer_priority": "-62384223420978",
		"voting_power": "9035716254611"
	}, {
		"address": "exvalcons10ts55qgna9ffrjehu4mn56v6q82sw8qaxzdlap",
		"pub_key": "exvalconspub1zcjduepq2qcpnzz98rtn5afqqlymdmd2ywkyt3pqwyduskdyayt248znu2rq7dmrmx",
		"proposer_priority": "-52991264712726",
		"voting_power": "1861350512766"
	}, {
		"address": "exvalcons1kz83a8xehkknaw9wasm7qe32hnrsh7e78xmaz7",
		"pub_key": "exvalconspub1zcjduepqw2ey0qhr9tq6m5nvrsu00ww4gtwa56gm4w49rksfgpngsgqz9rwsvq4s86",
		"proposer_priority": "15117501667285",
		"voting_power": "9017198148877"
	}, {
		"address": "exvalcons1k5nssefrc2ctpya7eljz63tjndnhtatd9ytk3p",
		"pub_key": "exvalconspub1zcjduepqy5067ef9j9rlk6keue8pejycu6vlr85q5a9x4kkpwa0wg56ngp4q6h0cr7",
		"proposer_priority": "51601623656330",
		"voting_power": "9033670263983"
	}, {
		"address": "exvalcons1hpvx0zd4dqgknfkdcec8wkkg8l6kp230fx7sds",
		"pub_key": "exvalconspub1zcjduepqks93pmhg3aqak0unyx28vgwhnh9vhtapddm75uax4ls2z2frfunsd9mnrx",
		"proposer_priority": "-53636230495574",
		"voting_power": "9022111028969"
	}, {
		"address": "exvalcons1cy46guvlpufy63xdrjpq77nauk4zwf80e62pvy",
		"pub_key": "exvalconspub1zcjduepqg97q5h96s3tqnsyhs4ls94zyx7t6xkd6hrg9cmzzm0fvclstghvq3qlc6j",
		"proposer_priority": "-54693560914389",
		"voting_power": "9031739052368"
	}, {
		"address": "exvalcons1c8fjmh7rcrqx7397ayze840dw5uatwsj8ly48h",
		"pub_key": "exvalconspub1zcjduepqyzlcq82epx9sm3udg322xsurg2fuad9gdf4f87zclm6yap2qrppsu8lmdq",
		"proposer_priority": "68112765077107",
		"voting_power": "9026049970407"
	}, {
		"address": "exvalcons1ccj2ag967jah6edjqjmd2rfx6rg27hdqg9xdsz",
		"pub_key": "exvalconspub1zcjduepqkx07ggrk37tu3jcks0rsx04ztpwxdk6ykffs39t3dpn38nqfqxtq7ahgzz",
		"proposer_priority": "604157602850",
		"voting_power": "9031295646549"
	}, {
		"address": "exvalcons16eaeh29e85t2szely2xemh80hmqyv0gsxnggy8",
		"pub_key": "exvalconspub1zcjduepqm608y3qu6vkrahlralhy0km4gz0299nqk2uutftg00svr73q7e5ssytssw",
		"proposer_priority": "7012325625380",
		"voting_power": "9027483430214"
	}, {
		"address": "exvalcons1672cupp63l8ljszlqslplrhlh8q3glmqvq5sd0",
		"pub_key": "exvalconspub1zcjduepq4p7mgjsyszl74agwv4swpl23klvtl0gn7vmfy3cz36yh87qusuesek95hn",
		"proposer_priority": "29447753636571",
		"voting_power": "9015886244593"
	}, {
		"address": "exvalcons1u0uvv9mnxlwgj333uupds92thmy6jvw4c78d8v",
		"pub_key": "exvalconspub1zcjduepqpmdpu2gwxe5x3hpcl66ehek4fjdqa23aunsj8gs3ug94yvrx8adsa8tqhk",
		"proposer_priority": "550426775773",
		"voting_power": "9028804932486"
	}, {
		"address": "exvalcons1us3k35mdad096e5zsk88xrnrq993egk90f6k5r",
		"pub_key": "exvalconspub1zcjduepqnlmt2qhdn2hghculh34gxukx4gac7q7pl24knglc0lqpsrrph6ps6e7pwh",
		"proposer_priority": "-55590783017492",
		"voting_power": "9020781309467"
	}]
}
```

#### Response Parameters

| **Parameter**       | **Type** | **Description** |
| :------------------ | :------- | :-------------- |
| block_height        | String   |                 |
| validators          | Array    |                 |
| > address           | String   |                 |
| > proposer_priority | String   |                 |
| > pub_key           | String   |                 |
| > voting_power      | String   |                 |

### Get validatorsets

Get the latest validator set

#### HTTP Request

`GET okexchain/v1/validatorsets/{height}`

> Request Example

```wiki
https://exchainrpc.okex.org/okexchain/v1/validatorsets/2697221
```

#### Request Parameters

None

> Example Response

```json
{
  "block_height": "2697221",
  "validators": [
    {
      "address": "exvalcons1pl5u7tl6cw8hhnzssx9ekscllxf5e9vhu73l6w",
      "pub_key": "exvalconspub1zcjduepqu6473zvyzy3zwhmdhd38z7cdkw7wf50hdztngrndhxgr8xrqhrrq0m3nhf",
      "proposer_priority": "47638082485597",
      "voting_power": "8928485820324"
    },
    {
      "address": "exvalcons1rs4mjp0fkmmadwrz2pmum92upudrhgpx2cwjrk",
      "pub_key": "exvalconspub1zcjduepqllecydfvumn0swfx7mvyjtxepnsaqwm6qu4n0294st82qrc4zd8qtmeftd",
      "proposer_priority": "-11717811164568",
      "voting_power": "8924447091464"
    },
    {
      "address": "exvalcons1yp4uvrtqynx0usrzecwntrzm5xxdeg5ycgw6zq",
      "pub_key": "exvalconspub1zcjduepqgczr87k588khjz87z0fagqyqz4ua6alevq2hcfdldv5wmx4293xsuhhmk3",
      "proposer_priority": "-66887003646092",
      "voting_power": "8941020162109"
    },
    {
      "address": "exvalcons19kj5t922d9hc7zdw7fdwmc4smhs6v7mqxv09ny",
      "pub_key": "exvalconspub1zcjduepqk93rdqd8lkknq7rhr5pfnzj7px0knpqw85jycsqdj7xvc950q5vqdqu4rx",
      "proposer_priority": "-53429103469247",
      "voting_power": "8945483192825"
    },
    {
      "address": "exvalcons1xfqfu2al0a23asvzw6dazs4j7f3tyc0stgxe7w",
      "pub_key": "exvalconspub1zcjduepqgw849shr86xu0zqgfur0wqsws3xer5ckfy0k5ga969wxqfmllz0q39yrch",
      "proposer_priority": "-59773971759003",
      "voting_power": "8944137851687"
    },
    {
      "address": "exvalcons1x0a2sz4p0ajp96zefm2y0wksj32224avzy2g4z",
      "pub_key": "exvalconspub1zcjduepqp7ul8pfremls80jvqdnqe3cy56avzgj25jjqz0luz3cjzlp8a3ssur08mt",
      "proposer_priority": "-27281552372722",
      "voting_power": "1816470879930"
    },
    {
      "address": "exvalcons1g4khphwstda0gqmfl2llm7kvyy66553jn5x7jq",
      "pub_key": "exvalconspub1zcjduepqv6anlah0pedc6wpdmphlhnzh85yxalpwgwf9zk6enjxh5pg0swfs9e5nj3",
      "proposer_priority": "34328204085167",
      "voting_power": "8929778377427"
    },
    {
      "address": "exvalcons12vzv2s9dwm7390ez3scdezy66tuq5e0ussvzsn",
      "pub_key": "exvalconspub1zcjduepqk7wrtvrx0wwm8a3jyvfth2gl37g7ldal8sn0ydvjv2vxawyflw4s49xuv2",
      "proposer_priority": "-47582304935826",
      "voting_power": "1580739072371"
    },
    {
      "address": "exvalcons1d97rmwj60eejddtqujtddaaejf9zdmgmuglxef",
      "pub_key": "exvalconspub1zcjduepqqfwzk69r2nt7xcqjzmjvwuxaelevsdjftgqk8wafmdqr9ac9gd0ssukkrn",
      "proposer_priority": "24286871104272",
      "voting_power": "8942591311372"
    },
    {
      "address": "exvalcons1d03femmrmygp8ew7ssryhtrm9h3t3w2fc9mkdd",
      "pub_key": "exvalconspub1zcjduepqrtlw4twnhr5ckjzuzh3t0wkfvzqv67mnk4pkz645gaqclevzn7lqaf37v9",
      "proposer_priority": "4209895378605",
      "voting_power": "8940766457823"
    },
    {
      "address": "exvalcons10ts55qgna9ffrjehu4mn56v6q82sw8qaxzdlap",
      "pub_key": "exvalconspub1zcjduepq2qcpnzz98rtn5afqqlymdmd2ywkyt3pqwyduskdyayt248znu2rq7dmrmx",
      "proposer_priority": "-98906929598155",
      "voting_power": "1651296571160"
    },
    {
      "address": "exvalcons1kz83a8xehkknaw9wasm7qe32hnrsh7e78xmaz7",
      "pub_key": "exvalconspub1zcjduepqw2ey0qhr9tq6m5nvrsu00ww4gtwa56gm4w49rksfgpngsgqz9rwsvq4s86",
      "proposer_priority": "33136674257290",
      "voting_power": "8922248352089"
    },
    {
      "address": "exvalcons1k5nssefrc2ctpya7eljz63tjndnhtatd9ytk3p",
      "pub_key": "exvalconspub1zcjduepqy5067ef9j9rlk6keue8pejycu6vlr85q5a9x4kkpwa0wg56ngp4q6h0cr7",
      "proposer_priority": "67158700502611",
      "voting_power": "8938720467195"
    },
    {
      "address": "exvalcons1hpvx0zd4dqgknfkdcec8wkkg8l6kp230fx7sds",
      "pub_key": "exvalconspub1zcjduepqks93pmhg3aqak0unyx28vgwhnh9vhtapddm75uax4ls2z2frfunsd9mnrx",
      "proposer_priority": "48959031615518",
      "voting_power": "8927161232181"
    },
    {
      "address": "exvalcons1cy46guvlpufy63xdrjpq77nauk4zwf80e62pvy",
      "pub_key": "exvalconspub1zcjduepqg97q5h96s3tqnsyhs4ls94zyx7t6xkd6hrg9cmzzm0fvclstghvq3qlc6j",
      "proposer_priority": "6970694512149",
      "voting_power": "8936789255579"
    },
    {
      "address": "exvalcons1c8fjmh7rcrqx7397ayze840dw5uatwsj8ly48h",
      "pub_key": "exvalconspub1zcjduepqyzlcq82epx9sm3udg322xsurg2fuad9gdf4f87zclm6yap2qrppsu8lmdq",
      "proposer_priority": "31805356122365",
      "voting_power": "8931100101565"
    },
    {
      "address": "exvalcons1ccj2ag967jah6edjqjmd2rfx6rg27hdqg9xdsz",
      "pub_key": "exvalconspub1zcjduepqkx07ggrk37tu3jcks0rsx04ztpwxdk6ykffs39t3dpn38nqfqxtq7ahgzz",
      "proposer_priority": "6690328744154",
      "voting_power": "8936345849761"
    },
    {
      "address": "exvalcons16eaeh29e85t2szely2xemh80hmqyv0gsxnggy8",
      "pub_key": "exvalconspub1zcjduepqm608y3qu6vkrahlralhy0km4gz0299nqk2uutftg00svr73q7e5ssytssw",
      "proposer_priority": "-94450872539121",
      "voting_power": "8932533633426"
    },
    {
      "address": "exvalcons1672cupp63l8ljszlqslplrhlh8q3glmqvq5sd0",
      "pub_key": "exvalconspub1zcjduepq4p7mgjsyszl74agwv4swpl23klvtl0gn7vmfy3cz36yh87qusuesek95hn",
      "proposer_priority": "37677632023734",
      "voting_power": "8920932531050"
    },
    {
      "address": "exvalcons1u0uvv9mnxlwgj333uupds92thmy6jvw4c78d8v",
      "pub_key": "exvalconspub1zcjduepqpmdpu2gwxe5x3hpcl66ehek4fjdqa23aunsj8gs3ug94yvrx8adsa8tqhk",
      "proposer_priority": "68803590178606",
      "voting_power": "8933855135698"
    },
    {
      "address": "exvalcons1us3k35mdad096e5zsk88xrnrq993egk90f6k5r",
      "pub_key": "exvalconspub1zcjduepqnlmt2qhdn2hghculh34gxukx4gac7q7pl24knglc0lqpsrrph6ps6e7pwh",
      "proposer_priority": "48364488474677",
      "voting_power": "8925831512679"
    }
  ]
}
```

#### Response Parameters

| **Parameter**       | **Type** | **Description** |
| :------------------ | :------- | :-------------- |
| block_height        | String   |                 |
| validators          | Array    |                 |
| > address           | String   |                 |
| > proposer_priority | String   |                 |
| > pub_key           | String   |                 |
| > voting_power      | String   |                 |

### Get node Info

Get Information about the connected node

#### HTTP Request

`GET okexchain/v1/node_info`

> Request Example

```wiki
https://exchainrpc.okex.org/okexchain/v1/node_info
```

#### Request Parameters

None

> Example Response

```json
{
	"node_info": {
		"protocol_version": {
			"p2p": "7",
			"block": "10",
			"app": "0"
		},
		"id": "4466b04f1cf2b55bc8e4225eef72b487a37e3c4f",
		"listen_addr": "tcp://10.1.19.206:20256",
		"network": "exchain-66",
		"version": "0.33.9",
		"channels": "4020212223303800",
		"moniker": "2061",
		"other": {
			"tx_index": "on",
			"rpc_address": "tcp://0.0.0.0:26657"
		}
	},
	"application_version": {
		"name": "exchain",
		"server_name": "exchaind",
		"client_name": "exchaincli",
		"version": "v0.18.6",
		"commit": "2ccd81b14f146a5afd3a52aa9f890cf88988f2a5",
		"build_tags": "netgo",
		"go": "go version go1.16.4 linux/amd64",
		"build_deps": ["github.com/99designs/keyring@v1.1.6", "github.com/ChainSafe/go-schnorrkel@v0.0.0-20200405005733-88cbf1b4c40d", "github.com/Comcast/pulsar-client-go@v0.1.1", "github.com/VictoriaMetrics/fastcache@v1.5.7", "github.com/Workiva/go-datastructures@v1.0.52", "github.com/aliyun/alibaba-cloud-sdk-go@v1.61.18", "github.com/aliyun/aliyun-oss-go-sdk@v2.1.6+incompatible", "github.com/aristanetworks/goarista@v0.0.0-20200331225509-2cc472e8fbd6", "github.com/bartekn/go-bip39@v0.0.0-20171116152956-a05967ea095d", "github.com/beorn7/perks@v1.0.1", "github.com/bgentry/speakeasy@v0.1.0", "github.com/btcsuite/btcd@v0.21.0-beta", "github.com/btcsuite/btcutil@v1.0.2", "github.com/buger/jsonparser@v0.0.0-20181115193947-bf1c66bbce23", "github.com/cespare/xxhash/v2@v2.1.1", "github.com/cosmos/cosmos-sdk@v0.39.2 =\u003e github.com/okex/cosmos-sdk@v0.39.2-exchain5", "github.com/cosmos/go-bip39@v0.0.0-20180819234021-555e2067c45d", "github.com/davecgh/go-spew@v1.1.1", "github.com/deckarep/golang-set@v1.7.1", "github.com/dvsekhvalnov/jose2go@v0.0.0-20200901110807-248326c1351b", "github.com/enigmampc/btcutil@v1.0.3-0.20200723161021-e2fb6adb2a25", "github.com/ethereum/go-ethereum@v1.9.25", "github.com/fsnotify/fsnotify@v1.4.9", "github.com/garyburd/redigo@v1.6.2", "github.com/go-errors/errors@v1.0.1", "github.com/go-kit/kit@v0.10.0", "github.com/go-logfmt/logfmt@v0.5.0", "github.com/go-redis/redis@v6.15.9+incompatible", "github.com/go-sql-driver/mysql@v1.5.0", "github.com/go-stack/stack@v1.8.0", "github.com/godbus/dbus@v0.0.0-20190726142602-4481cbc300e2", "github.com/gogo/protobuf@v1.3.1", "github.com/golang/protobuf@v1.4.2", "github.com/golang/snappy@v0.0.3-0.20201103224600-674baa8c7fc3", "github.com/google/btree@v1.0.0", "github.com/google/uuid@v1.1.1", "github.com/gorilla/handlers@v1.4.2", "github.com/gorilla/mux@v1.8.0", "github.com/gorilla/websocket@v1.4.2", "github.com/gsterjov/go-libsecret@v0.0.0-20161001094733-a6f4afe4910c", "github.com/gtank/merlin@v0.1.1", "github.com/gtank/ristretto255@v0.1.2", "github.com/hashicorp/golang-lru@v0.5.5-0.20210104140557-80c98217689d", "github.com/hashicorp/hcl@v1.0.0", "github.com/holiman/uint256@v1.1.1", "github.com/jinzhu/gorm@v1.9.16", "github.com/jinzhu/inflection@v1.0.0", "github.com/jmespath/go-jmespath@v0.0.0-20180206201540-c2b33e8439af", "github.com/json-iterator/go@v1.1.9", "github.com/lestrrat/go-file-rotatelogs@v0.0.0-20180223000712-d3151e2a480f", "github.com/lestrrat/go-strftime@v0.0.0-20180220042222-ba3bf9c1d042", "github.com/libp2p/go-buffer-pool@v0.0.2", "github.com/magiconair/properties@v1.8.1", "github.com/mattn/go-isatty@v0.0.12", "github.com/mattn/go-runewidth@v0.0.4", "github.com/mattn/go-sqlite3@v1.14.0", "github.com/matttproud/golang_protobuf_extensions@v1.0.1", "github.com/mimoo/StrobeGo@v0.0.0-20181016162300-f8f6d4d2b643", "github.com/minio/highwayhash@v1.0.0", "github.com/mitchellh/go-homedir@v1.1.0", "github.com/mitchellh/mapstructure@v1.1.2", "github.com/modern-go/concurrent@v0.0.0-20180306012644-bacd9c7ef1dd", "github.com/modern-go/reflect2@v1.0.1", "github.com/mtibben/percent@v0.2.1", "github.com/nacos-group/nacos-sdk-go@v1.0.0", "github.com/olekukonko/tablewriter@v0.0.2-0.20190409134802-7e037d187b0c", "github.com/pborman/uuid@v1.2.0", "github.com/pelletier/go-toml@v1.6.0", "github.com/pkg/errors@v0.9.1", "github.com/pmezard/go-difflib@v1.0.0", "github.com/prometheus/client_golang@v1.5.1", "github.com/prometheus/client_model@v0.2.0", "github.com/prometheus/common@v0.9.1", "github.com/prometheus/procfs@v0.0.10", "github.com/prometheus/tsdb@v0.9.1", "github.com/rakyll/statik@v0.1.6", "github.com/rcrowley/go-metrics@v0.0.0-20200313005456-10cdbea86bc0", "github.com/rjeczalik/notify@v0.9.2", "github.com/rs/cors@v1.7.0", "github.com/segmentio/kafka-go@v0.2.2", "github.com/shirou/gopsutil@v2.20.9+incompatible", "github.com/shopspring/decimal@v1.2.0", "github.com/spf13/afero@v1.2.2", "github.com/spf13/cast@v1.3.0", "github.com/spf13/cobra@v1.1.1", "github.com/spf13/jwalterweatherman@v1.1.0", "github.com/spf13/pflag@v1.0.5", "github.com/spf13/viper@v1.7.1", "github.com/status-im/keycard-go@v0.0.0-20190424133014-d95853db0f48", "github.com/steakknife/bloomfilter@v0.0.0-20180922174646-6819c0d2a570", "github.com/steakknife/hamming@v0.0.0-20180906055917-c99c65617cd3", "github.com/stretchr/testify@v1.7.0", "github.com/subosito/gotenv@v1.2.0", "github.com/syndtr/goleveldb@v1.0.1-0.20200815110645-5c35d600f0ca", "github.com/tendermint/btcd@v0.1.1", "github.com/tendermint/crypto@v0.0.0-20191022145703-50d29ede1e15", "github.com/tendermint/go-amino@v0.15.1", "github.com/tendermint/iavl@v0.14.1 =\u003e github.com/okex/iavl@v0.14.3-exchain", "github.com/tendermint/tendermint@v0.33.9 =\u003e github.com/okex/tendermint@v0.33.9-exchain4", "github.com/tendermint/tm-db@v0.5.2", "github.com/toolkits/concurrent@v0.0.0-20150624120057-a4371d70e3e3", "github.com/tyler-smith/go-bip39@v1.0.1-0.20181017060643-dbb3b84ba2ef", "github.com/willf/bitset@v1.1.11", "go.uber.org/atomic@v1.6.0", "go.uber.org/multierr@v1.5.0", "go.uber.org/zap@v1.15.0", "golang.org/x/crypto@v0.0.0-20200709230013-948cd5f35899", "golang.org/x/net@v0.0.0-20201010224723-4f7140c49acb", "golang.org/x/sys@v0.0.0-20201018230417-eeed37f84f13", "golang.org/x/text@v0.3.3", "golang.org/x/time@v0.0.0-20191024005414-555d28b269f0", "google.golang.org/genproto@v0.0.0-20200526211855-cb27e3aa2013", "google.golang.org/grpc@v1.30.0", "google.golang.org/protobuf@v1.25.0", "gopkg.in/ini.v1@v1.51.0", "gopkg.in/yaml.v2@v2.3.0", "gopkg.in/yaml.v3@v3.0.0-20200313102051-9f266ea9e77c"],
		"cosmos_sdk": "v0.39.2",
		"tendermint": "v0.33.9"
	}
}
```

#### Response Parameters

| **Parameter**       | **Type** | **Description** |
| :------------------ | :------- | :-------------- |
| application_version | Object   |                 |
| > server_name       | String   |                 |
| > name              | String   |                 |
| > commit            | String   |                 |
| > go                | String   |                 |
| > cosmos_sdk        | String   |                 |
| > build_deps        | Array    |                 |
| > tendermint        | String   |                 |
| > client_name       | String   |                 |
| > version           | String   |                 |
| > build_tags        | String   |                 |
| node_info           | Object   |                 |
| > protocol_version  | Object   |                 |
| >> app              | String   |                 |
| >> block            | String   |                 |
| >> p2p              | String   |                 |
| > other             | Object   |                 |
| >> tx_index         | String   |                 |
| >> rpc_address      | String   |                 |
| > channels          | String   |                 |
| > listen_addr       | String   |                 |
| > id                | String   |                 |
| > moniker           | String   |                 |
| > version           | String   |                 |
| > network           | String   |                 |

### Check node syncing

GET if the node is currently syning with other nodes

#### HTTP Request

`GET okexchain/v1/syncing`

> Request Example

```wiki
https://exchainrpc.okex.org/okexchain/v1/syncing
```

#### Request Parameters

None

> Example Response

```json
{
  "syncing": false
}
```

#### Response Parameters

| **Parameter** | **Type** | **Description** |
| :------------ | :------- | :-------------- |
| syncing       | Object   |                 |

## Staking

### Get staking parameters

Query the current staking parameters information

#### HTTP Request

`GET okexchain/v1/staking/parameters`

> Request Example

```wiki
https://exchainrpc.okex.org/okexchain/v1/staking/parameters
```

#### Request Parameters

None

> Example Response

```json
{
  "unbonding_time": "1209600000000000",
  "max_bonded_validators": 21,
  "epoch": 252,
  "max_validators_to_add_shares": 30,
  "min_delegation": "0.000100000000000000",
  "min_self_delegation": "10000.000000000000000000"
}
```

#### Response Parameters

| **Parameter**                | **Type** | **Description**                             |
| :--------------------------- | :------- | :------------------------------------------ |
| unbonding_time               | String   | Unbinding time of okt                       |
| max_bonded_validators        | Int      | Max producting block validators nums        |
| epoch                        | Int      | Epoch of change producting block validators |
| max_validators_to_add_shares | Int      | Max validators to add shares                |
| min_delegation               | String   | Min delegation                              |
| min_self_delegation          | String   | Min self delegation of creating validator   |

### Get delegator Info

Query information of a delegator

#### HTTP Request

`GET okexchain/v1/staking/delegators/{delegatorAddr}`

> Request Example

```wiki
https://exchainrpc.okex.org/okexchain/v1/staking/delegators/ex17se79kf0c9t5sw0yg0jjdm6et79sy8aradphtg
```

#### Request Parameters

None

> Example Response

```json
{
  "delegator_address": "ex17se79kf0c9t5sw0yg0jjdm6et79sy8aradphtg",
  "validator_address": [
    "exvaloper19e6edpu97d6w2t5dlp7lph2fkdja0lvlj8ngk0",
    "exvaloper18v23ln9ycrtg0mrwsm004sh4tdknudtdapcfcq",
    "exvaloper1ucmx6vvtrwam9pg20fnwmy9z80uhchyxqn67wq",
    "exvaloper1tat4lam8wjqmeax9mv4s584vu2mp7c0cgvlajl",
    "exvaloper1rz7frqz9ky52qqjwlpawfe5hz6plcrmmpha0px",
    "exvaloper1w3ptfgekjgdvwkqmdepdeyvuxqmcplfszlz3jm",
    "exvaloper104y8sy0r6fke4a9qr8u05j6v5y68gkh4v3ud9t",
    "exvaloper1qva0ejf0t943x6rt824gwmvtjgec9cjrut5wn8"
  ],
  "shares": "72053.451006669074462727",
  "tokens": "0.024951000000000000",
  "is_proxy": false,
  "total_delegated_tokens": "0.000000000000000000",
  "proxy_address": ""
}
```

#### Response Parameters

| **Parameter**          | **Type** | **Description**                             |
| :--------------------- | :------- | :------------------------------------------ |
| is_proxy               | String   | Proxy or not                                |
| tokens                 | String   | Delegation of okt                           |
| proxy_address          | String   | The proxy's address                         |
| validator_address      | Array    | Validator address                           |
| total_delegated_tokens | String   | Total delegated tokens for it's proxy users |
| delegator_address      | String   | Delegator address                           |
| shares                 | String   | Shares,  voting rights from okt             |

### Get unbonding token of delegator

Query the unbonding token information of the specified delegator

#### HTTP Request

`GET okexchain/v1/staking/delegators/{address}/unbonding_delegations`

> Request Example

```wiki
https://exchainrpc.okex.org/okexchain/v1/staking/delegators/ex17se79kf0c9t5sw0yg0jjdm6et79sy8aradphtg/unbonding_delegations
```

#### Request Parameters

None

> Example Response

```json
{
  "delegator_address": "ex10q0rk5qnyag7wfvvt7rtphlw589m7frs3hvqmf",
  "quantity": "1.02400000",
  "completion_time": "2020-05-25T09:44:55.736074648Z"
}

```

#### Response Parameters

| **Parameter**     | **Type** | **Description**           |
| :---------------- | :------- | :------------------------ |
| delegator_address | String   | Delegator address         |
| quantity          | String   | Unbonding okt             |
| completion_time   | String   | Completion time of unbond |

### Get validators

Query information on all validators

#### HTTP Request

`GET okexchain/v1/staking/validators?status=all`

> Request Example

```wiki
https://exchainrpc.okex.org/okexchain/v1/staking/validators?status=all
```

#### Request Parameters

None

> Example Response

```json
[
  {
    "operator_address": "exvaloper1q9nct2gska2yutx24starv6s63xz022fdwdgzv",
    "consensus_pubkey": "exvalconspub1zcjduepqks93pmhg3aqak0unyx28vgwhnh9vhtapddm75uax4ls2z2frfunsd9mnrx",
    "jailed": false,
    "status": 2,
    "tokens": "0",
    "delegator_shares": "66193233954117.096196430937242815",
    "description": {
      "moniker": "Collector",
      "identity": "",
      "website": "",
      "details": ""
    },
    "unbonding_height": "0",
    "unbonding_time": "2021-02-17T01:49:59.985069599Z",
    "commission": {
      "commission_rates": {
        "rate": "0.200000000000000000",
        "max_rate": "1.000000000000000000",
        "max_change_rate": "0.000000000000000000"
      },
      "update_time": "2022-12-16T09:53:12.200554194Z"
    },
    "min_self_delegation": "10000.000000000000000000"
  }
]
```

#### Response Parameters

| **Parameter**                               | **Type** | **Description**                                    |
| :------------------------------------------ | :------- | :------------------------------------------------- |
| operator_address                            | String   | Operator address of validator                      |
| consensus_pubkey                            | String   | Consensus pubkey of validator                      |
| jailed                                      | bool     | Jailed or not                                      |
| status                                      | Int      | 0,Unbonded;1,Unbonding;2Bonded                     |
| tokens                                      | String   | Tokens                                             |
| delegator_shares                            | String   | Shares for the delegators who voting the validator |
| description                                 | Obj      |                                                    |
| description.moniker                         | String   | Moniker                                            |
| description.identity                        | String   | Identity                                           |
| description.website                         | String   | Website                                            |
| description.details                         | String   | Details                                            |
| unbonding_height                            | String   | Unbonding height                                   |
| unbonding_time                              | String   | Unbonding time                                     |
| commission                                  |          |                                                    |
| commission.commission_rates                 |          |                                                    |
| commission.commission_rates.rate            | String   | Commission rate of validator                       |
| commission.commission_rates.max_rate        | String   | Max commission rate                                |
| commission.commission_rates.max_change_rate | String   | Max change rate                                    |
| commission.update_time                      | String   | Last update time                                   |
| min_self_delegation                         | String   | Min self delegation for creating validator         |

### Get validator info

Query information from a validator

#### HTTP Request

`GET okexchain/v1/staking/validators/{validatorAddr}`

> Request Example

```wiki
https://exchainrpc.okex.org/okexchain/v1/staking/validators/exvaloper1q9nct2gska2yutx24starv6s63xz022fdwdgzv
```

#### Request Parameters

None

> Example Response

```json
{
  "operator_address": "exvaloper1q9nct2gska2yutx24starv6s63xz022fdwdgzv",
  "consensus_pubkey": "exvalconspub1zcjduepqks93pmhg3aqak0unyx28vgwhnh9vhtapddm75uax4ls2z2frfunsd9mnrx",
  "jailed": false,
  "status": 2,
  "tokens": "0",
  "delegator_shares": "66193233954117.096196430937242815",
  "description": {
    "moniker": "Collector",
    "identity": "",
    "website": "",
    "details": ""
  },
  "unbonding_height": "0",
  "unbonding_time": "2021-02-17T01:49:59.985069599Z",
  "commission": {
    "commission_rates": {
      "rate": "0.200000000000000000",
      "max_rate": "1.000000000000000000",
      "max_change_rate": "0.000000000000000000"
    },
    "update_time": "2022-12-16T09:53:12.200554194Z"
  },
  "min_self_delegation": "10000.000000000000000000"
}
```

#### Response Parameters

See the response of Get validators api

### Get votingInfo of validator

Query all voting shares on a validator

#### HTTP Request

`GET okexchain/v1/staking/validators/{address}/shares
`

> Request Example

```wiki
https://exchainrpc.okex.org/okexchain/v1/staking/validators/exvaloper1q9nct2gska2yutx24starv6s63xz022fdwdgzv/shares
```

#### Request Parameters

None

> Example Response

```json
[
  {
    "voter_address": "ex12mek8h0mjs9m4hrh5q4zyhx04pqltyrnrtarud",
    "votes": "1424779953353.73000000"
  },
  {
    "voter_address": "ex12mek8h0mjs9m4hrh5q4zyhx04pqltyrnrtarud",
    "votes": "1424779953353.73000000"
  },
  {
    "voter_address": "ex12mek8h0mjs9m4hrh5q4zyhx04pqltyrnrtarud",
    "votes": "1424779953353.73000000"
  }
]

```

#### Response Parameters

| **Parameter** | **Type** | **Description**             |
| :------------ | :------- | :-------------------------- |
| voter_address | String   | Voter address of delegators |
| votes         | String   | Shares of voting            |

### Get validator address

Query corresponding account_address through operator_address

#### HTTP Request

`GET okexchain/v1/v1/staking/address/{operator_addr}/account_address`

> Request Example

```wiki
https://exchainrpc.okex.org/okexchain/v1/staking/address/exvaloper1q9nct2gska2yutx24starv6s63xz022fdwdgzv/account_address
```

#### Request Parameters

None

> Example Response

```json
"ex1q9nct2gska2yutx24starv6s63xz022fmf8vxk"
```

#### Response Parameters

| **Parameter** | **Type** | **Description** |
| :------------ | :------- | :-------------- |
| address       | String   |                 |

### Get relationship of proxy delegator

Query the proxy relationship on a proxy delegator

#### HTTP Request

`GET okexchain/v1/staking/delegators/{address}/proxy
`

> Request Example

```wiki
https://exchainrpc.okex.org/okexchain/v1/staking/delegators/ex1pt7xrmxul7sx54ml44lvv403r06clrdk0s8rxy/proxy
```

#### Request Parameters

None

> Example Response

```json
[
    "ex1s0vrf96rrsknl64jj65lhf89ltwj7lksr7m3r9"
]
```

#### Response Parameters

| **Parameter** | **Type** | **Description** |
| :------------ | :------- | :-------------- |
|               | String   | Proxy address   |

### Get staking pool

Query current staking pool assets

#### HTTP Request

`GET okexchain/v1/staking/pool`

> Request Example

```wiki
https://exchainrpc.okex.org/okexchain/v1/staking/pool
```

#### Request Parameters

None

> Example Response

```json
{
  "not_bonded_tokens": "46658.862345999999959778",
  "bonded_tokens": "4561558.000338499999741215"
}
```

#### Response Parameters

| **Parameter**     | **Type** | **Description**                   |
| :---------------- | :------- | :-------------------------------- |
| not_bonded_tokens | String   | Not bonded tokens of staking pool |
| bonded_tokens     | String   | Bonded tokens of staking pool     |

### Get operator address

Query corresponding operator_address through validator_address

#### HTTP Request

`GET okexchain/v1/v1/staking/address/{operator_addr}/validator_address`

> Request Example

```wiki
https://exchainrpc.okex.org/okexchain/v1/staking/address/B8586789B5681169A6CDC670775AC83FF560AA2F/validator_address
```

#### Request Parameters

None

> Example Response

```json
"exvaloper1q9nct2gska2yutx24starv6s63xz022fdwdgzv"
```

#### Response Parameters

| **Parameter** | **Type** | **Description**   |
| :------------ | :------- | :---------------- |
| address       | String   | validator address |

### Get operator and validator pairs

Query information on all validators

#### HTTP Request

`GET okexchain/v1/staking/address`

> Request Example

```wiki
https://exchainrpc.okex.org/okexchain/v1/staking/address
```

#### Request Parameters

None

> Example Response

```json
[{
		"operator_address": "exvaloper1q9nct2gska2yutx24starv6s63xz022fdwdgzv",
		"validator_address": "B8586789B5681169A6CDC670775AC83FF560AA2F"
	},
	{
		"operator_address": "exvaloper1qva0ejf0t943x6rt824gwmvtjgec9cjrut5wn8",
		"validator_address": "C1D32DDFC3C0C06F44BEE90593D5ED7539D5BA12"
	},
	{
		"operator_address": "exvaloper1pc864zshkvsgc724k5jffcjsrmhz63m6gwrrhh",
		"validator_address": "49023DF452630B38D1F638273BF40F72D7A91EB9"
	},
	{
		"operator_address": "exvaloper1zza3jrylyecrtuh0p9ts2xauzsefuvwa4l9fsx",
		"validator_address": "E3F8C6177337DC894631E702D8154BBEC9A931D5"
	},
	{
		"operator_address": "exvaloper1zxthrcdcecfe5ss4tal0tq30hzel2lks6psuhm",
		"validator_address": "E42368D36DEB5E5D6682858E730E63014B1CA2C5"
	},
	{
		"operator_address": "exvaloper1rz7frqz9ky52qqjwlpawfe5hz6plcrmmpha0px",
		"validator_address": "9B2CAB86E170002ABAFA11AD029CF87678CAAD95"
	},
	{
		"operator_address": "exvaloper1rr253al2mtdgfcjwh7j3778g5gru3elyumxj8m",
		"validator_address": "D2B872B9EC08B28C91831BD01B013196987C6204"
	},
	{
		"operator_address": "exvaloper1rv8tjxp8d8ucuak8c7svewwugzfdjwf9arju5j",
		"validator_address": "6DA0DDD71603F4874FFFB2C3808CD0B5F7320167"
	},
	{
		"operator_address": "exvaloper1rmrx7wp60almzvghx2820aamjfd4kgwlcx542p",
		"validator_address": "EE694A82C1828483F46348A0EB5862DE1DD10DA6"
	},
	{
		"operator_address": "exvaloper1ygcvtcqxl82xvzrq25dymam434k3nnc8kwvrkm",
		"validator_address": "6BE29CEF63D91013E5DE84064BAC7B2DE2B8B949"
	},
	{
		"operator_address": "exvaloper19wln93k3faq7vkqzlc9gljr3ey5fljt93jfxsy",
		"validator_address": "456D70DDD05B7AF40369FABFFDFACC2135AA5232"
	},
	{
		"operator_address": "exvaloper195ez67wmhprwrru34gvttyd8ttpl7edx3px8ua",
		"validator_address": "0FE9CF2FFAC38F7BCC50818B9B431FF9934C9597"
	},
	{
		"operator_address": "exvaloper19e6edpu97d6w2t5dlp7lph2fkdja0lvlj8ngk0",
		"validator_address": "D7958E043A8FCFF9405F043E1F8EFFB9C1147F60"
	},
	{
		"operator_address": "exvaloper1xkl5agjzqnjnptyat2dng2asmx8g5kllg7xamv",
		"validator_address": "2DA545954A696F8F09AEF25AEDE2B0DDE1A67B60"
	},
	{
		"operator_address": "exvaloper1xaxvu9wxr8szym3aqdesvqq968y2tf53l8fyak",
		"validator_address": "3A2794CC9C60BC3DE6812C1665FADEE8E6D1E0D6"
	},
	{
		"operator_address": "exvaloper188dhgmaq8cka2yczzjfzsw0nely6y8uap4u5kg",
		"validator_address": "33FAA80AA17F6412E8594ED447BAD09454A557AC"
	},
	{
		"operator_address": "exvaloper18v23ln9ycrtg0mrwsm004sh4tdknudtdapcfcq",
		"validator_address": "E1A887691AFEE37AF64FCEE9CE80B35178A8C8E2"
	},
	{
		"operator_address": "exvaloper18w9mggs2s5t8ve0zr0ctjcyq7faft3qp8dlj75",
		"validator_address": "6CDB634FDDB970BBC4E10DF0F29274DB2D298DF3"
	},
	{
		"operator_address": "exvaloper18au05qx485u2qcw2gvqsrfh29evq77lm9u2jwr",
		"validator_address": "B08F1E9CD9BDAD3EB8AEEC37E0662ABCC70BFB3E"
	},
	{
		"operator_address": "exvaloper1g3a6vtau2k93n4tqgqnrggeu3qa4x20rgs4x4s",
		"validator_address": "26A3A71528117598DA8CAECE3B5CB4D41264D648"
	},
	{
		"operator_address": "exvaloper1fymxn4gazxzjdfvwvr0ccnrnjpwmj0r9vw3t2y",
		"validator_address": "32409E2BBF7F551EC182769BD142B2F262B261F0"
	},
	{
		"operator_address": "exvaloper1fwvre7w2na66fq3k2wjy30rzp07c4fl99v3hsw",
		"validator_address": "09A02E61153A22BDB19B69C79357E9596C0FA406"
	},
	{
		"operator_address": "exvaloper1fj2wlj8lwy4hd8ngfzntku0r38wxz2wt96awnp",
		"validator_address": "6FED194F7C8BE04ACD4E76271E8C4C3780F86869"
	},
	{
		"operator_address": "exvaloper1tzxmqa6dqlpeq2s34c8f6n4amuuwj8gnx8vr9q",
		"validator_address": "B7B08047944713E21B62A24115607DCBC0D61EF3"
	},
	{
		"operator_address": "exvaloper1tkwxgcpvptua0q0h5tn0at58ufnjdue7xp9jh4",
		"validator_address": "206BC60D6024CCFE4062CE1D358C5BA18CDCA284"
	},
	{
		"operator_address": "exvaloper1tat4lam8wjqmeax9mv4s584vu2mp7c0cgvlajl",
		"validator_address": "5F45AD27AF7C5718BF36678BAC9FBBD0623C264F"
	},
	{
		"operator_address": "exvaloper1vsjcts3ga8dgf6nj2q7vmlrnu5en4cneaskg9w",
		"validator_address": "5304C540AD76FD12BF228C30DC889AD2F80A65FC"
	},
	{
		"operator_address": "exvaloper1v5pvu4rkzc5axd6f7ngxa39je6d0lyujky5tng",
		"validator_address": "E303C3040B2374405D29EEB3B6E659BA4BCE2E2A"
	},
	{
		"operator_address": "exvaloper1v4kagglr3vq82vqywqd8quhsuarkm4kf2nz85r",
		"validator_address": "4E40AC623F479A4FA783703A2338F10821C574E3"
	},
	{
		"operator_address": "exvaloper1vlzgq74y6hm9crhkkhdjy77uvyqa0zdupstsqj",
		"validator_address": "7AE14A0113E95291CB37E5773A699A01D5071C1D"
	},
	{
		"operator_address": "exvaloper1w3ptfgekjgdvwkqmdepdeyvuxqmcplfszlz3jm",
		"validator_address": "718EABE12152C41E0F0DA01259F994C49BF3088C"
	},
	{
		"operator_address": "exvaloper1w5zu7xxzfdx729elg2lu4rnltjsvzpdg3dhpaf",
		"validator_address": "D129F169D41E5168F287BE7E174FC8ADA795C990"
	},
	{
		"operator_address": "exvaloper104y8sy0r6fke4a9qr8u05j6v5y68gkh4v3ud9t",
		"validator_address": "83E68B475E906B3F1A0ED07C537ACE9DE4EEBFB7"
	},
	{
		"operator_address": "exvaloper1079vd72hpvlhnt7yjdya50egxkdr4dtureduuf",
		"validator_address": "2538B193B3BD9BB7FF22DD693B0CDC94979F8189"
	},
	{
		"operator_address": "exvaloper1s6nfs7mlj7ewsskkrmekqhpq2w234fcz5uq4m5",
		"validator_address": "1C2BB905E9B6F7D6B8625077CD955C0F1A3BA026"
	},
	{
		"operator_address": "exvaloper1su2ks3x0xnh6hpgg7s8rv6kgd5set0d022l24z",
		"validator_address": "E64D13E00C08548CD4444869B018EA90A2DF742D"
	},
	{
		"operator_address": "exvaloper13mayrjzsrp976y0ae0qw8sjan3qg2xfdeq8vmh",
		"validator_address": "9F200A2080BABAD093746F6FAB1E28CDF7F5C669"
	},
	{
		"operator_address": "exvaloper1ja9xngm4zh0t442mse73ll30p7dczd49s88n2x",
		"validator_address": "C624AEA0BAF4BB7D65B204B6D50D26D0D0AF5DA0"
	},
	{
		"operator_address": "exvaloper1nx6grwxsanpwfghzu40e4ng5xqktuj2rh498pe",
		"validator_address": "B696038C26C2A7C554F1FFDA3130A2A3F1E1A152"
	},
	{
		"operator_address": "exvaloper1ncdghxtp58y0gq4tem0nex3ln0hxsjefq9x2w4",
		"validator_address": "9F8B5FFEB4DD54D4FF40E4C952AA4F8E0BD426D3"
	},
	{
		"operator_address": "exvaloper1508d7eq592kg2lh9d46xvv3r4sm7gm8w0nrejk",
		"validator_address": "C12BA4719F0F124D44CD1C820F7A7DE5AA2724EF"
	},
	{
		"operator_address": "exvaloper14zgafe7cynlpuhpfpqpxu2gntzhq6ttedqru6j",
		"validator_address": "4CFF323073C5796C57D963F837ACF4A5AC617032"
	},
	{
		"operator_address": "exvaloper14kpvn0zr75594rlrl66lw953mlkrq6qz5ctupj",
		"validator_address": "5F3E052B1788D34A84878B603FDB0DF11DF2BC9E"
	},
	{
		"operator_address": "exvaloper1k84d9rfaz6v92sazaclj24uyvx79wnl8kvckks",
		"validator_address": "8EF0AC196873BB6471F32176B095A459C1277A18"
	},
	{
		"operator_address": "exvaloper1ka92ujcwh6hyyeu4tymzy3dedgxplt4dtsr7xh",
		"validator_address": "D67B9BA8B93D16A80B3F228D9DDCEFBEC0463D10"
	},
	{
		"operator_address": "exvaloper1klcqq056hndfch7yew6fkl6tyrdr07qxv60g90",
		"validator_address": "714BEBEDC3A93CB6EFD71E6E041F41707C77B176"
	},
	{
		"operator_address": "exvaloper1hw0y28hgzadpmjwa68sfukdp69pc68cnxxgml0",
		"validator_address": "154D3DA927BF936369A76C4F5F7672183B842700"
	},
	{
		"operator_address": "exvaloper1h59keaqu7jap3cs6fqw0usggapl9q2x5v4w7rx",
		"validator_address": "EDB8AFEC84C4FCC034143CF86B89C53960FF2706"
	},
	{
		"operator_address": "exvaloper1c34s7lc7ec8gs9xrtxeh0j2wjaam25c3g06xp3",
		"validator_address": "B527086523C2B0B093BECFE42D45729B6775F56D"
	},
	{
		"operator_address": "exvaloper1evazeyntpfr62avj65dwd6mcw9wvh24kc3x84s",
		"validator_address": "621C90FCD8CD2C01A8664FAD003F4CBC400E5DA8"
	},
	{
		"operator_address": "exvaloper1m569cfenudxemegcf4mmykhugnslhdv0xhvcj6",
		"validator_address": "697C3DBA5A7E7326B560E496D6F7B9924A26ED1B"
	},
	{
		"operator_address": "exvaloper1mlmwvdprn8dj6g45vdxkjsjgu4ntu9j7dnjky2",
		"validator_address": "CF60F5722ECD528917287E85BDAC92446B21A08E"
	},
	{
		"operator_address": "exvaloper1ucmx6vvtrwam9pg20fnwmy9z80uhchyxqn67wq",
		"validator_address": "693E03F50442F845AF1EDD43C51F4246F6B3F88B"
	},
	{
		"operator_address": "exvaloper1a9893mfvk9x80x209jhpvl0hm24djxqhr3jwuf",
		"validator_address": "3D3468F41B262F1119C28009DAF0D202881AFADE"
	}
]
```

#### Response Parameters

| **Parameter**     | **Type** | **Description**               |
| :---------------- | :------- | :---------------------------- |
| operator_address  | String   | Operator address of validator |
| validator_address | String   | Validator address             |

## Distribution

### Query distribution params

Query distribution params onchain

#### HTTP Request

`GET okexchain/v1/distribution/parameters`

> Request Example

```wiki
https://exchainrpc.okex.org/okexchain/v1/distribution/parameters
```

#### Request Parameters

None

> Example Response

```json
{
    "community_tax": "0.020000000000000000",
    "withdraw_addr_enabled": true,
    "distribution_type": 1,
    "withdraw_reward_enabled": true,
    "reward_truncate_precision": "0"
}
```

#### Response Parameters

| **Parameter**             | **Type** | **Description**                                              |
| :------------------------ | :------- | :----------------------------------------------------------- |
| community_tax             | String   | Community tax                                                |
| withdraw_addr_enabled     | bool     | Enable using withdraw address                                |
| distribution_type         | int      | Distribution model,0 offchain; 1 onchain                     |
| withdraw_reward_enabled   | bool     | Enable withdrawing reward                                    |
| reward_truncate_precision | String   | Dividend precision truncated. 0 means to keep 0 decimal points, such as 1.2345 truncated dividend is 1; 2 means to keep two decimal points. For example, the dividend after 1.2345 truncated is 1.23 |

### Get delegator rewards

Query rewards from all validators

#### HTTP Request

`GET okexchain/v1/distribution/delegators/{delegatorAddr}/rewards`

> Request Example

```wiki
https://exchainrpc.okex.org/okexchain/v1/distribution/delegators/ex17se79kf0c9t5sw0yg0jjdm6et79sy8aradphtg/rewards
```

#### Request Parameters

None

> Example Response

```json
{
    "rewards": [
        {
            "validator_address": "exvaloper1q6ls3h64gkxq0r73u2eqwwr7d5mp583fm325zu",
            "reward": [
                {
                    "denom": "okt",
                    "amount": "2.081385971734814468"
                }
            ]
        },
        {
            "validator_address": "exvaloper1pt7xrmxul7sx54ml44lvv403r06clrdkehd8z7",
            "reward": [
                {
                    "denom": "okt",
                    "amount": "2.081385971734814468"
                }
            ]
        },
        {
            "validator_address": "exvaloper1gd6avvrg0jp5wxpfyfa4c84fygtl6cn9dage6d",
            "reward": [
                {
                    "denom": "okt",
                    "amount": "2.081385971734814468"
                }
            ]
        },
        {
            "validator_address": "exvaloper1ve4mwgq9967gk338yptsg2fheur4ke322gzynt",
            "reward": [
                {
                    "denom": "okt",
                    "amount": "2.081385971734814468"
                }
            ]
        }
    ],
    "total": [
        {
            "denom": "okt",
            "amount": "8.325543886939257872"
        }
    ]
}
```

#### Response Parameters

| **Parameter**     | **Type** | **Description**               |
| :---------------- | :------- | :---------------------------- |
| rewards           | Array    | Reward array                  |
| validator_address | String   | Validator address             |
| reward            | String   | Reward from validator address |
| total             | Array    | Collection of all rewards     |

### Get delegator rewards from a validator

Query delegator rewards from a particular validator

#### HTTP Request

`GET okexchain/v1/distribution/delegators/{delegatorAddr}/rewards/{validatorAddr}`

> Request Example

```wiki
https://exchainrpc.okex.org/okexchain/v1/distribution/delegators/ex17se79kf0c9t5sw0yg0jjdm6et79sy8aradphtg/rewards/exvaloper1q9nct2gska2yutx24starv6s63xz022fdwdgzv
```

#### Request Parameters

None

> Example Response

```json
[
    {
        "denom": "okt",
        "amount": "2.694422051593216614"
    }
]
```

#### Response Parameters

| **Parameter** | **Type** | **Description** |
| :------------ | :------- | :-------------- |
| denom         | String   | okt             |
| amount        | String   | Amount          |

### Get validator commission

Query distribution validator commission

#### HTTP Request

`GET okexchain/v1/distribution/validators/{validatorAddr}/validator_commission`

> Request Example

```wiki
https://exchainrpc.okex.org/okexchain/v1/distribution/validators/exvaloper1q9nct2gska2yutx24starv6s63xz022fdwdgzv/validator_commission
```

#### Request Parameters

None

> Example Response

```json
[
    {
        "denom": "okt",
        "amount": "2.038175975947119947"
    }
]
```

#### Response Parameters

| **Parameter** | **Type** | **Description**                |
| :------------ | :------- | :----------------------------- |
| denom         | String   | okt                            |
| amount        | String   | Amount of validator commission |

### Get outstanding for a validator

Query distribution outstanding (un-withdrawn) rewards for a validator and all their delegations

#### HTTP Request

`GET okexchain/v1/distribution/validators/{{validatorAddr}}/outstanding_rewards`

> Request Example

```wiki
https://exchainrpc.okex.org/okexchain/v1/distribution/validators/exvaloper1q9nct2gska2yutx24starv6s63xz022fdwdgzv/outstanding_rewards
```

#### Request Parameters

None

> Example Response

```json
[
    {
        "denom": "okt",
        "amount": "3.150937542414329105"
    }
]
```

#### Response Parameters

| **Parameter** | **Type** | **Description** |
| :------------ | :------- | :-------------- |
| denom         | String   |                 |
| amount        | String   |                 |

### Get withdraw address

Query delegator's withdraw address

#### HTTP Request

`GET okexchain/v1/distribution/delegators/{{delegatorAddr}}/withdraw_address`

> Request Example

```wiki
https://exchainrpc.okex.org/okexchain/v1/distribution/delegators/ex17se79kf0c9t5sw0yg0jjdm6et79sy8aradphtg/withdraw_address
```

#### Request Parameters

None

> Example Response

```json
"ex1h0j8x0v9hs4eq6ppgamemfyu4vuvp2sl0q9p3v"
```

#### Response Parameters

| **Parameter** | **Type** | **Description**  |
| :------------ | :------- | :--------------- |
| String        | String   | Withdraw address |

### Get amount in community pool

Query the amount of coins in the community pool

#### HTTP Request

`GET okexchain/v1/distribution/community_pool`

> Request Example

```wiki
https://exchainrpc.okex.org/okexchain/v1/distribution/community_pool
```

#### Request Parameters

None

> Example Response

```json
[
    {
        "denom": "okt",
        "amount": "2.471826444531520986"
    }
]
```

#### Response Parameters

| **Parameter** | **Type** | **Description**          |
| :------------ | :------- | :----------------------- |
| denom         | String   | okt                      |
| amount        | String   | Amount of community pool |

## Wasm

### Query all codes

Query all contract codes

#### HTTP Request

`GET okexchain/v1/wasm/code`

> Request Example

```wiki
https://exchainrpc.okex.org/okexchain/v1/wasm/code?page=1&count_total=true&reverse=true&limit=2
```

#### Request Parameters

| **Parameter**                                           | **Type** | **Required** | **Description**                                              |
| :------------------------------------------------------ | :------- | :----------- | :----------------------------------------------------------- |
| page                                                    | Uint64   | No           |                                                              |
| page_key                                                | String   | No           | `page_key` is a value returned in `PageResponse.next_key` to begin querying the next page most efficiently. Only one of `offset` or `page_key` should be set. |
| offset                                                  | Uint64   | No           | `offset` is a numeric offset that can be used when `page_key` is unavailable. It is less efficient than using key. Only one of `offset` or `page_key` should be set. |
| limit                                                   | Uint64   | No           | `limit` is the total number of results to be returned in the result page. If left empty it will default to a value to be set by each app. |
| count_total                                             | Bool     | No           | `count_total` is set to true to indicate that the result set should include a count of the total number of items available for pagination in UIs. `count_total` is only respected when `offset` is used. It is ignored when `page_key` is set. |
| reverse                                                 | Bool     | No           | `reverse` is set to true if results are to be returned in the descending order. |
| **Once page is set, page_key or offset cannot be set.** |          |              |                                                              |

> Example Response

```json
{
  "code_infos": [
    {
      "id": "2",
      "creator": "ex1h0j8x0v9hs4eq6ppgamemfyu4vuvp2sl0q9p3v",
      "data_hash": "DCE5CE229B1FE766ABD20AA0F0126D3FA9CB63F9C18C78192E14BAE51634304E",
      "instantiate_permission": {
        "permission": "Everybody"
      }
    },
    {
      "id": "1",
      "creator": "ex1h0j8x0v9hs4eq6ppgamemfyu4vuvp2sl0q9p3v",
      "data_hash": "13A1FC994CC6D1C81B746EE0C0FF6F90043875E0BF1D9BE6B7D779FC978DC2A5",
      "instantiate_permission": {
        "permission": "Everybody"
      }
    }
  ],
  "pagination": {
    "next_key": "AAAAAAAAAAM=",
    "total": "5"
  }
}

```

#### Response Parameters

| **Parameter**                               | **Type**     | **Description**             |
| :------------------------------------------ | :----------- | :-------------------------- |
| code_infos                                  | Array Object | the array code info         |
| code_info.id                                | Int64        | code id                     |
| code_info.creator                           | String       | the creator of code         |
| code_info.data_hash                         | String       | the hash of code            |
| code_info.instantiate_permission            | Object       | the permission of code      |
| code_info.instantiate_permission.permission | String       | permission type             |
| pagination                                  | Object       | page response	parameters |
| pagination.next_key                         | String       | the next page start key     |
| pagination.total                            | String       | it's a number format        |

### Get contract code

Get contract code by codeID

#### HTTP Request

`GET okexchain/v1/wasm/code/{codeID}`

> Request Example

```wiki
https://exchainrpc.okex.org/okexchain/v1/wasm/code/1
```

#### Request Parameters

| **Parameter** | **Type** | **Required** | **Description** |
| :------------ | :------- | :----------- | :-------------- |
| codeID        | String   | Yes          |                 |

> Example Response

```json
{
  "id": 1,
  "creator": "ex1h0j8x0v9hs4eq6ppgamemfyu4vuvp2sl0q9p3v",
  "data_hash": "13A1FC994CC6D1C81B746EE0C0FF6F90043875E0BF1D9BE6B7D779FC978DC2A5",
  "instantiate_permission": {
    "permission": "Everybody"
  },
  "data": "contract bytescode"
}
```

#### Response Parameters

| **Parameter**                     | **Type** | **Description**        |
| :-------------------------------- | :------- | :--------------------- |
| id                                | Int64    | code id                |
| creator                           | String   | the creator of code    |
| data_hash                         | String   | the hash of code       |
| instantiate_permission            | Object   | the permission of code |
| instantiate_permission.permission | String   | permission type        |
| data                              | String   | code data              |

### Query contract information

Query contract information by contract address

#### HTTP Request

`GET okexchain/v1/wasm/contract/{contractAddr}`

> Request Example

```wiki
https://exchainrpc.okex.org/okexchain/v1/wasm/contract/ex14hj2tavq8fpesdwxxcu44rty3hh90vhujrvcmstl4zr3txmfvw9s6fqu27
```

#### Request Parameters

| **Parameter** | **Type** | **Required** | **Description** |
| :------------ | :------- | :----------- | :-------------- |
| contractAddr  | String   | Yes          |                 |

> Example Response

```json
{
  "address": "ex14hj2tavq8fpesdwxxcu44rty3hh90vhujrvcmstl4zr3txmfvw9s6fqu27",
  "code_id": 2,
  "creator": "ex1h0j8x0v9hs4eq6ppgamemfyu4vuvp2sl0q9p3v",
  "label": "local0.1.0"
}
```

#### Response Parameters

| **Parameter** | **Type** | **Description**          |
| :------------ | :------- | :----------------------- |
| address       | String   | contract address         |
| code_id       | int64    | code id                  |
| creator       | String   | the creator of  contract |
| label         | String   | contract label           |

### Query all corresponding contracts of specified codeid

Query all corresponding contracts of specified codeid

#### HTTP Request

`GET okexchain/v1/wasm/code/{codeID}/contracts`

> Request Example

```wiki
https://exchainrpc.okex.org/okexchain/v1/wasm/code/3/contracts?page=1&count_total=true&reverse=true&limit=1
```

#### Request Parameters

| **Parameter**                                           | **Type** | **Required** | **Description**                                              |
| :------------------------------------------------------ | :------- | :----------- | :----------------------------------------------------------- |
| codeID                                                  | String   | Yes          |                                                              |
| page                                                    | Uint64   | No           |                                                              |
| page_key                                                | String   | No           | `page_key` is a value returned in `PageResponse.next_key` to begin querying the next page most efficiently. Only one of `offset` or `page_key` should be set. |
| offset                                                  | Uint64   | No           | `offset` is a numeric offset that can be used when `page_key` is unavailable. It is less efficient than using key. Only one of `offset` or `page_key` should be set. |
| limit                                                   | Uint64   | No           | `limit` is the total number of results to be returned in the result page. If left empty it will default to a value to be set by each app. |
| count_total                                             | Bool     | No           | `count_total` is set to true to indicate that the result set should include a count of the total number of items available for pagination in UIs. `count_total` is only respected when `offset` is used. It is ignored when `page_key` is set. |
| reverse                                                 | Bool     | No           | `reverse` is set to true if results are to be returned in the descending order. |
| **Once page is set, page_key or offset cannot be set.** |          |              |                                                              |

> Example Response

```json
{
  "contracts": [
    "ex1qg5ega6dykkxc307y25pecuufrjkxkaggkkxh7nad0vhyhtuhw3s4zjvwg"
  ],
  "pagination": {
    "total": "1"
  }
}
```

#### Response Parameters

| **Parameter**       | **Type** | **Description**             |
| :------------------ | :------- | :-------------------------- |
| contracts           | Array    | contract Address Array      |
| pagination          | Object   | page response	parameters |
| pagination.next_key | String   | the next page start key     |
| pagination.total    | String   | it's a number format        |

###  Query contract history information

Query contract history information

#### HTTP Request

`GET okexchain/v1/wasm/contract/{contractAddr}/history`

> Request Example

```wiki
https://exchainrpc.okex.org/okexchain/v1/wasm/contract/ex1ufs3tlq4umljk0qfe8k5ya0x6hpavn897u2cnf9k0en9jr7qarqqy2pl6c/history?page=1&count_total=true&reverse=true&limit=2
```

#### Request Parameters

| **Parameter**                                           | **Type** | **Required** | **Description**                                              |
| :------------------------------------------------------ | :------- | :----------- | :----------------------------------------------------------- |
| contractAddr                                            | String   | Yes          |                                                              |
| page                                                    | Uint64   | No           |                                                              |
| page_key                                                | String   | No           | `page_key` is a value returned in `PageResponse.next_key` to begin querying the next page most efficiently. Only one of `offset` or `page_key` should be set. |
| offset                                                  | Uint64   | No           | `offset` is a numeric offset that can be used when `page_key` is unavailable. It is less efficient than using key. Only one of `offset` or `page_key` should be set. |
| limit                                                   | Uint64   | No           | `limit` is the total number of results to be returned in the result page. If left empty it will default to a value to be set by each app. |
| count_total                                             | Bool     | No           | `count_total` is set to true to indicate that the result set should include a count of the total number of items available for pagination in UIs. `count_total` is only respected when `offset` is used. It is ignored when `page_key` is set. |
| reverse                                                 | Bool     | No           | `reverse` is set to true if results are to be returned in the descending order. |
| **Once page is set, page_key or offset cannot be set.** |          |              |                                                              |

> Example Response

```json
{
  "entries": [
    {
      "operation": 1,
      "code_id": "5",
      "msg": {
        "decimals": 10,
        "initial_balances": [
          {
            "address": "ex1h0j8x0v9hs4eq6ppgamemfyu4vuvp2sl0q9p3v",
            "amount": "100000000"
          }
        ],
        "name": "my test token",
        "symbol": "MTT"
      }
    }
  ],
  "pagination": {
    "total": "1"
  }
}
```

#### Response Parameters

| **Parameter**                       | **Type**     | **Description**              |
| :---------------------------------- | :----------- | :--------------------------- |
| entries                             | Array Object | the history info of contract |
| entry.operation                     | Int64        | contract operate type        |
| entry.code_id                       | String       | code id                      |
| entry.msg                           | Object       |                              |
| entry.msg.decimals                  | Int64        |                              |
| entry.msg.initial_balances          | Array Object |                              |
| entries.msg.initial_balance.address | String       |                              |
| entries.msg.initial_balance.address | String       |                              |
| entries.msg.name                    | String       | contract name                |
| entries.msg.symbol                  | String       | contract symbol              |
| pagination                          | Object       | page response	parameters  |
| pagination.next_key                 | String       | the next page start key      |
| pagination.total                    | String       | it's a number format         |

### Query contract data through key

Query contract data by key

#### HTTP Request

`GET okexchain/v1/wasm/contract/{contractAddr}/raw/{key}?encoding=hex`

> Request Example

```wiki
https://exchainrpc.okex.org/okexchain/v1/wasm/contract/ex1qg5ega6dykkxc307y25pecuufrjkxkaggkkxh7nad0vhyhtuhw3s4zjvwg/raw/0006636F6E666967636F6E7374616E7473?encoding=hex
```

#### Request Parameters

| **Parameter** | **Type** | **Required** | **Description**                   |
| :------------ | :------- | :----------- | :-------------------------------- |
| contractAddr  | String   | Yes          | contract address required         |
| key           | String   | Yes          | queried key value required        |
| encoding      | string   | Yes          | Must use hex because `key` is hex |

> Example Response

Response is Base64

```shell
"eyJuYW1lIjoibXkgdGVzdCB0b2tlbiIsInN5bWJvbCI6Ik1UVCIsImRlY2ltYWxzIjoxMH0="
# base64Code represent{"name":"my test token","symbol":"MTT","decimals":10}
```

#### Response Parameters

None

### Smart query of contract data

Smart query of contract data

#### HTTP Request

`GET okexchain/v1/wasm/contract/{contractAddr}/smart/{query}?encoding=base64`

> Request Example

```wiki
https://exchainrpc.okex.org/okexchain/v1/wasm/contract/ex1qg5ega6dykkxc307y25pecuufrjkxkaggkkxh7nad0vhyhtuhw3s4zjvwg/smart/eyJiYWxhbmNlIjp7ImFkZHJlc3MiOiJleDFoMGo4eDB2OWhzNGVxNnBwZ2FtZW1meXU0dnV2cDJzbDBxOXAzdiJ9fQ==?encoding=base64
```

#### Request Parameters

| **Parameter** | **Type** | **Required** | **Description**                   |
| :------------ | :------- | :----------- | :-------------------------------- |
| contractAddr  | String   | Yes          | contract address required         |
| query         | String   | Yes          | request data required base64 code |
| encoding      | string   | Yes          | Must use base64                   |

> Example Response

```shell
{"smart":"eyJiYWxhbmNlIjoiOTk5OTk5MDAifQ=="} 
# eyJiYWxhbmNlIjoiOTk5OTk5MDAifQ== represent {"balance":"99999900"}
```

#### Response Parameters

| **Parameter** | **Type** | **Description** |
| :------------ | :------- | :-------------- |
| smart         | string   | Base64 Code     |

### Query contract status

Query contract all state data

#### HTTP Request

`GET okexchain/v1/wasm/contract/{contractAddr}/state`

> Request Example

```wiki
https://exchainrpc.okex.org/okexchain/v1/wasm/contract/ex1ufs3tlq4umljk0qfe8k5ya0x6hpavn897u2cnf9k0en9jr7qarqqy2pl6c/state?page=1&count_total=true&reverse=true&limit=2
```

coderID

#### Request Parameters

| **Parameter** | **Type** | **Required** | **Description**                                              |
| :------------ | :------- | :----------- | :----------------------------------------------------------- |
| contractAddr  | String   | Yes          |                                                              |
| page          | Uint64   | No           |                                                              |
| page_key      | String   | No           | `page_key` is a value returned in `PageResponse.next_key` to begin querying the next page most efficiently. Only one of `offset` or `page_key` should be set. |
| offset        | Uint64   | No           | `offset` is a numeric offset that can be used when `page_key` is unavailable. It is less efficient than using key. Only one of `offset` or `page_key` should be set. |
| limit         | Uint64   | No           | `limit` is the total number of results to be returned in the result page. If left empty it will default to a value to be set by each app. |
| count_total   | Bool     | No           | `count_total` is set to true to indicate that the result set should include a count of the total number of items available for pagination in UIs. `count_total` is only respected when `offset` is used. It is ignored when `page_key` is set. |
| reverse       | Bool     | No           | `reverse` is set to true if results are to be returned in the descending order. |

**Once page is set, page_key or offset cannot be set.** 

> Example Response

```json
{
  "models": [
    {
      "key": "0006636F6E666967746F74616C5F737570706C79",
      "value": "AAAAAAAAAAAAAAAABfXhAA=="
    },
    {
      "key": "0006636F6E666967636F6E7374616E7473",
      "value": "eyJuYW1lIjoibXkgdGVzdCB0b2tlbiIsInN5bWJvbCI6Ik1UVCIsImRlY2ltYWxzIjoxMH0="
    }
  ],
  "pagination": {
    "next_key": "AAhiYWxhbmNlc2V4MWV1dHl1cXFhc2UzZXl2d2U5MmNhdzhkY3g1bHk4czU0NHEzaG1x",
    "total": "4"
  }
}
```

#### Response Parameters

| **Parameter**       | **Type**     | **Description**            |
| :------------------ | :----------- | :------------------------- |
| models              | Array Object |                            |
| model.key           | String       | data key which is hex code |
| model.value         | String       | data value which is base64 |
| pagination          | Object       | page response parameters   |
| pagination.next_key | String       | the next page start key    |
| pagination.total    | String       | it's a number format       |

## Gov

### Get govParameters

Get gov parameters by type, `deposit / voting / tallying`

#### HTTP Request

`GET okexchain/v1/gov/parameters/{ParamsType}`

> Request Example

```wiki
https://exchainrpc.okex.org/okexchain/v1/gov/parameters/deposit
```

#### Request Parameters

None

> Example Response

```json
{
  "min_deposit": [
    {
      "denom": "okt",
      "amount": "10.000000000000000000"
    }
  ],
  "max_deposit_period": "86400000000000"
}
```

#### Response Parameters

| **Parameter**      | **Type** | **Description**                 |
| :----------------- | :------- | :------------------------------ |
| min_deposit        | Array    | Min deposit, okt                |
| > amount           | String   |                                 |
| > denom            | String   |                                 |
| max_deposit_period | String   | Max deposit period for proposal |

> Request Example

```wiki
https://exchainrpc.okex.org/okexchain/v1/gov/parameters/voting
```

#### Request Parameters

None

> Example Response

```json
{
  "voting_period": "259200000000000"
}
```

#### Response Parameters

| **Parameter** | **Type** | **Description**               |
| :------------ | :------- | :---------------------------- |
| voting_period | String   | Voting period of the proposal |

> Request Example

```wiki
https://exchainrpc.okex.org/okexchain/v1/gov/parameters/tallying
```

#### Request Parameters

None

> Example Response

```json
{
  "quorum": "0.334000000000000000",
  "threshold": "0.500000000000000000",
  "veto": "0.334000000000000000",
  "yes_in_vote_period": "0.667000000000000000"
}
```

#### Response Parameters

| **Parameter**      | **Type** | **Description**         |
| :----------------- | :------- | :---------------------- |
| quorum             | String   | Quorum of voting        |
| threshold          | String   | Threshold of voting     |
| veto               | String   | Veto                    |
| yes_in_vote_period | String   | Yes in period of voting |

### Get proposals

Get the all proposals

#### HTTP Request

`GET okexchain/v1/gov/proposals`

> Request Example

```wiki
https://exchainrpc.okex.org/okexchain/v1/gov/proposals

```

#### Request Parameters

None

> Example Response

```json
[{
 	"content": {
 		"type": "okexchain/params/ParameterChangeProposal",
 		"value": {
 			"ParameterChangeProposal": {
 				"title": "open farm",
 				"description": "open farm",
 				"changes": [{
 					"subspace": "farm",
 					"key": "YieldNativeToken",
 					"value": "true"
 				}]
 			},
 			"height": "600"
 		}
 	},
 	"id": "1",
 	"proposal_status": "Passed",
 	"final_tally_result": {
 		"total_power": "484267077339.546817829366687657",
 		"total_voted_power": "352194238067.852231148630318296",
 		"yes": "352194238067.852231148630318296",
 		"abstain": "0.000000000000000000",
 		"no": "0.000000000000000000",
 		"no_with_veto": "0.000000000000000000"
 	},
 	"submit_time": "2021-01-15T12:10:20.683558322Z",
 	"deposit_end_time": "2021-01-15T12:10:20.683558322Z",
 	"total_deposit": [{
 		"denom": "okt",
 		"amount": "100.000000000000000000"
 	}],
 	"voting_start_time": "2021-01-15T12:10:20.683558322Z",
 	"voting_end_time": "2021-01-15T13:00:21.369507718Z"
 }]
```

#### Response Parameters

| **Parameter**              | **Type** | **Description** |
| :------------------------- | :------- | :-------------- |
| content                    | Object   |                 |
| > type                     | String   |                 |
| > value                    | Object   |                 |
| >> ParameterChangeProposal | Object   |                 |
| >>> changes                | Array    |                 |
| >>>> subspace              | String   |                 |
| >>>> value                 | String   |                 |
| >>>> key                   | String   |                 |
| >>> description            | String   |                 |
| >>> title                  | String   |                 |
| >> height                  | String   |                 |
| voting_start_time          | String   |                 |
| id                         | String   |                 |
| deposit_end_time           | String   |                 |
| submit_time                | String   |                 |
| total_deposit              | Array    |                 |
| > amount                   | String   |                 |
| > denom                    | String   |                 |
| final_tally_result         | Object   |                 |
| > total_voted_power        | String   |                 |
| > no                       | String   |                 |
| > no_with_veto             | String   |                 |
| > total_power              | String   |                 |
| > yes                      | String   |                 |
| > abstain                  | String   |                 |
| proposal_status            | String   |                 |
| voting_end_time            | String   |                 |

### Get proposer by proposalId

Get proposer by ID

#### HTTP Request

`GET okexchain/v1/gov/proposals/{ProposalID}/proposer`

> Request Example

```wiki
https://exchainrpc.okex.org/okexchain/v1/gov/proposals/17/proposer
```

#### Request Parameters

None

> Example Response

```json
{
  "proposal_id": "17",
  "proposer": "ex18au05qx485u2qcw2gvqsrfh29evq77lmnmqk2e"
}
```

#### Response Parameters

| **Parameter** | **Type** | **Description**  |
| :------------ | :------- | :--------------- |
| proposal_id   | String   | Proposal id      |
| proposer      | String   | Proposer address |

### Get tally by proposalId

Get proposer by ID

#### HTTP Request

`GET okexchain/v1/gov/proposals/{ProposalID}/tally`

> Request Example

```wiki
https://exchainrpc.okex.org/okexchain/v1/gov/proposals/17/tally
```

#### Request Parameters

None

> Example Response

```json
{
  "total_power": "165837653241301.605382606344753055",
  "total_voted_power": "116130784063951.268597087599105663",
  "yes": "116130784063951.268597087599105663",
  "abstain": "0.000000000000000000",
  "no": "0.000000000000000000",
  "no_with_veto": "0.000000000000000000"
}
```

#### Response Parameters

| **Parameter**     | **Type** | **Description**             |
| :---------------- | :------- | :-------------------------- |
| total_power       | String   | Total power                 |
| total_voted_power | String   | Total voted power           |
| yes               | String   | Voted power of yes          |
| abstain           | String   | Voted power of abstain      |
| no                | String   | Voted power of no           |
| no_with_veto      | String   | Voted power of no with veto |

### Get votes by proposalId

Get votes by proposalId

#### HTTP Request

`GET okexchain/v1/gov/proposals/{ProposalID}/votes`

> Request Example

```wiki
https://exchainrpc.okex.org/okexchain/v1/gov/proposals/17/votes
```

#### Request Parameters

None

> Example Response

```json
[
  {
    "proposal_id": "17",
    "voter": "ex18au05qx485u2qcw2gvqsrfh29evq77lmnmqk2e",
    "option": "Yes"
  },
  {
    "proposal_id": "17",
    "voter": "ex1s6nfs7mlj7ewsskkrmekqhpq2w234fczzm23lw",
    "option": "Yes"
  },
  {
    "proposal_id": "17",
    "voter": "ex1zxthrcdcecfe5ss4tal0tq30hzel2lksvx6cnp",
    "option": "Yes"
  },
  {
    "proposal_id": "17",
    "voter": "ex1q9nct2gska2yutx24starv6s63xz022fmf8vxk",
    "option": "Yes"
  },
  {
    "proposal_id": "17",
    "voter": "ex195ez67wmhprwrru34gvttyd8ttpl7edx8xvrc8",
    "option": "Yes"
  },
  {
    "proposal_id": "17",
    "voter": "ex19wln93k3faq7vkqzlc9gljr3ey5fljt984rz57",
    "option": "Yes"
  },
  {
    "proposal_id": "17",
    "voter": "ex1qva0ejf0t943x6rt824gwmvtjgec9cjr2v72ha",
    "option": "Yes"
  },
  {
    "proposal_id": "17",
    "voter": "ex1ka92ujcwh6hyyeu4tymzy3dedgxplt4dahf6zd",
    "option": "Yes"
  },
  {
    "proposal_id": "17",
    "voter": "ex1zza3jrylyecrtuh0p9ts2xauzsefuvwarc0d5u",
    "option": "Yes"
  },
  {
    "proposal_id": "17",
    "voter": "ex1ygcvtcqxl82xvzrq25dymam434k3nnc8qfx8jp",
    "option": "Yes"
  },
  {
    "proposal_id": "17",
    "voter": "ex1ja9xngm4zh0t442mse73ll30p7dczd49xqdhwu",
    "option": "Yes"
  },
  {
    "proposal_id": "17",
    "voter": "ex1c34s7lc7ec8gs9xrtxeh0j2wjaam25c37gsz9t",
    "option": "Yes"
  },
  {
    "proposal_id": "17",
    "voter": "ex1m569cfenudxemegcf4mmykhugnslhdv0ssxukq",
    "option": "Yes"
  }
]
```

#### Response Parameters

| **Parameter** | **Type** | **Description**                    |
| :------------ | :------- | :--------------------------------- |
| proposal_id   | String   | Proposal id                        |
| voter         | String   | Voter of address                   |
| option        | String   | Option, Yes, Abstain,No,NoWithVeto |
