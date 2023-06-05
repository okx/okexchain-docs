# Blocks

### Get latest blocks

Get the latest information on blocks

#### HTTP Request

`GET v1/blocks/latest`

> Request Example

```wiki
https://okbrpc.okbchain.org/v1/blocks/latest

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
      "chain_id": "okbchaintest-196",
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

| **Parameter**           | **Type** | **Description**                        |
| :---------------------- | :------- | :------------------------------------- |
| block_id                | Object   | Block id.                              |
| > parts                 | Object   | Parts of block.                        |
| >> total                | String   | Total parts.                           |
| >> hash                 | String   | Part hash.                             |
| > hash                  | String   | Block hash.                            |
| block                   | Object   | Block info.                            |
| > data                  | Object   | Data of block.                         |
| >> txs                  | String   | Txs of block.                          |
| > evidence              | Object   | Evidence of block.                     |
| >> evidence             | String   | Evidence of block.                     |
| > last_commit           | Object   | Last commit of consensus.              |
| >> round                | String   | Round of consensus.                    |
| >> block_id             | Object   | Block id.                              |
| >>> parts               | Object   | Parts of block.                        |
| >>>> total              | String   | Total parts.                           |
| >>>> hash               | String   | Part hash.                             |
| >>> hash                | String   | Block hash.                            |
| >> signatures           | Array    | Block signatures.                      |
| >>> signature           | String   | Block signature.                       |
| >>> validator_address   | String   | Validator address of signature.        |
| >>> block_id_flag       | String   | Block id flag.                         |
| >>> timestamp           | String   | Timestamp of signature.                |
| >> height               | String   | Block heigth.                          |
| > header                | Object   | Block header.                          |
| >> validators_hash      | String   | All validators hash.                   |
| >> chain_id             | String   | Chain id.                              |
| >> consensus_hash       | String   | Consensus info hash.                   |
| >> proposer_address     | String   | The proposer address of block.         |
| >> next_validators_hash | String   | All validators hash of next consensus. |
| >> version              | Object   | Blockchain version.                    |
| >>> app                 | String   | App version of Blockchain.             |
| >>> block               | String   | Block version of Blockchain.           |
| >> data_hash            | String   | Hash of block data.                    |
| >> last_results_hash    | String   | Hash of deliver last all txs result.   |
| >> last_block_id        | Object   | Last block id.                         |
| >>> parts               | Object   | Parts of block.                        |
| >>>> total              | String   | Total parts.                           |
| >>>> hash               | String   | Part hash.                             |
| >>> hash                | String   | Block hash.                            |
| >> evidence_hash        | String   | Evidence hash.                         |
| >> app_hash             | String   | App hash.                              |
| >> time                 | String   | Timestamp of generate block.           |
| >> height               | String   | Block height.                          |
| >> last_commit_hash     | String   | Last commit hash.                      |

### Get block info

Get information on by block height

#### HTTP Request

`GET v1/blocks/{height}`

> Request Example

```wiki
https://okbrpc.okbchain.org/v1/blocks/2322601
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
      "chain_id": "okbchaintest-196",
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

| **Parameter**           | **Type** | **Description**                        |
| :---------------------- | :------- | :------------------------------------- |
| block_id                | Object   | Block id.                              |
| > parts                 | Object   | Parts of block.                        |
| >> total                | String   | Total parts.                           |
| >> hash                 | String   | Part hash.                             |
| > hash                  | String   | Block hash.                            |
| block                   | Object   | Block info.                            |
| > data                  | Object   | Data of block.                         |
| >> txs                  | String   | Txs of block.                          |
| > evidence              | Object   | Evidence of block.                     |
| >> evidence             | String   | Evidence of block.                     |
| > last_commit           | Object   | Last commit of consensus.              |
| >> round                | String   | Round of consensus.                    |
| >> block_id             | Object   | Block id.                              |
| >>> parts               | Object   | Parts of block.                        |
| >>>> total              | String   | Total parts.                           |
| >>>> hash               | String   | Part hash.                             |
| >>> hash                | String   | Block hash.                            |
| >> signatures           | Array    | Block signatures.                      |
| >>> signature           | String   | Block signature.                       |
| >>> validator_address   | String   | Validator address of signature.        |
| >>> block_id_flag       | String   | Block id flag.                         |
| >>> timestamp           | String   | Timestamp of signature.                |
| >> height               | String   | Block heigth.                          |
| > header                | Object   | Block header.                          |
| >> validators_hash      | String   | All validators hash.                   |
| >> chain_id             | String   | Chain id.                              |
| >> consensus_hash       | String   | Consensus info hash.                   |
| >> proposer_address     | String   | The proposer address of block.         |
| >> next_validators_hash | String   | All validators hash of next consensus. |
| >> version              | Object   | Blockchain version.                    |
| >>> app                 | String   | App version of Blockchain.             |
| >>> block               | String   | Block version of Blockchain.           |
| >> data_hash            | String   | Hash of block data.                    |
| >> last_results_hash    | String   | Hash of deliver last all txs result.   |
| >> last_block_id        | Object   | Last block id.                         |
| >>> parts               | Object   | Parts of block.                        |
| >>>> total              | String   | Total parts.                           |
| >>>> hash               | String   | Part hash.                             |
| >>> hash                | String   | Block hash.                            |
| >> evidence_hash        | String   | Evidence hash.                         |
| >> app_hash             | String   | App hash.                              |
| >> time                 | String   | Timestamp of generate block.           |
| >> height               | String   | Block height.                          |
| >> last_commit_hash     | String   | Last commit hash.                      |

### Get Tx Info

Get Tx information by Tx hash

#### HTTP Request

`GET v1/txs/{hash}`

> Request Example

```wiki
https://okbrpc.okbchain.org/v1/txs/0x9C19D09361F01296EE5FB910634C08C8329414A90965317605B34C209DB19624
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

| **Parameter**    | **Type** | **Description**         |
| :--------------- | :------- | :---------------------- |
| gasPrice         | String   | Gas price of tx.        |
| hash             | String   | Tx hash.                |
| value            | String   | Transfer amount value.  |
| to               | String   | Receiver of tx.         |
| from             | String   | Sender of tx.           |
| gas              | String   | Pricing value.          |
| blockNumber      | String   | Block number of the tx. |
| v                | String   | V of tx signature.      |
| s                | String   | S of tx signature.      |
| r                | String   | R of tx signature.      |
| input            | String   | Input data of tx.       |
| nonce            | String   | Nonce value.            |
| transactionIndex | String   | Tx index in block.      |
| blockHash        | String   | Block hash.             |

### Get latest validatorsets

Get the latest validator set

#### HTTP Request

`GET v1/validatorsets/latest`

> Request Example

```wiki
https://okbrpc.okbchain.org/v1/validatorsets/latest
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

| **Parameter**       | **Type** | **Description**                 |
| :------------------ | :------- | :------------------------------ |
| block_height        | String   | Block height.                   |
| validators          | Array    | Validators.                     |
| > address           | String   | Address of validator.           |
| > proposer_priority | String   | Proposer priority of validator. |
| > pub_key           | String   | Pub key of validator.           |
| > voting_power      | String   | Voting power of validator.      |

### Get validatorsets

Get the latest validator set

#### HTTP Request

`GET v1/validatorsets/{height}`

> Request Example

```wiki
https://okbrpc.okbchain.org/v1/validatorsets/2697221
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

| **Parameter**       | **Type** | **Description**                 |
| :------------------ | :------- | :------------------------------ |
| block_height        | String   | Block height.                   |
| validators          | Array    | Validators.                     |
| > address           | String   | Address of validator.           |
| > proposer_priority | String   | Proposer priority of validator. |
| > pub_key           | String   | Pub key of validator.           |
| > voting_power      | String   | Voting power of validator.      |

### Get node Info

Get Information about the connected node

#### HTTP Request

`GET v1/node_info`

> Request Example

```wiki
https://okbrpc.okbchain.org/v1/node_info
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
		"network": "okbchaintest-196",
		"version": "0.33.9",
		"channels": "4020212223303800",
		"moniker": "2061",
		"other": {
			"tx_index": "on",
			"rpc_address": "tcp://0.0.0.0:26657"
		}
	},
	"application_version": {
		"name": "okbchain",
		"server_name": "okbchaind",
		"client_name": "okbchaincli",
		"version": "v0.18.6",
		"commit": "2ccd81b14f146a5afd3a52aa9f890cf88988f2a5",
		"build_tags": "netgo",
		"go": "go version go1.20.0 linux/amd64",
		"build_deps": ["github.com/99designs/keyring@v1.1.6", "github.com/ChainSafe/go-schnorrkel@v0.0.0-20200405005733-88cbf1b4c40d", "github.com/Comcast/pulsar-client-go@v0.1.1", "github.com/VictoriaMetrics/fastcache@v1.5.7", "github.com/Workiva/go-datastructures@v1.0.52", "github.com/aliyun/alibaba-cloud-sdk-go@v1.61.18", "github.com/aliyun/aliyun-oss-go-sdk@v2.1.6+incompatible", "github.com/aristanetworks/goarista@v0.0.0-20200331225509-2cc472e8fbd6", "github.com/bartekn/go-bip39@v0.0.0-20171116152956-a05967ea095d", "github.com/beorn7/perks@v1.0.1", "github.com/bgentry/speakeasy@v0.1.0", "github.com/btcsuite/btcd@v0.21.0-beta", "github.com/btcsuite/btcutil@v1.0.2", "github.com/buger/jsonparser@v0.0.0-20181115193947-bf1c66bbce23", "github.com/cespare/xxhash/v2@v2.1.1", "github.com/cosmos/cosmos-sdk@v0.39.2 =\u003e github.com/okex/cosmos-sdk@v0.39.2-exchain5", "github.com/cosmos/go-bip39@v0.0.0-20180819234021-555e2067c45d", "github.com/davecgh/go-spew@v1.1.1", "github.com/deckarep/golang-set@v1.7.1", "github.com/dvsekhvalnov/jose2go@v0.0.0-20200901110807-248326c1351b", "github.com/enigmampc/btcutil@v1.0.3-0.20200723161021-e2fb6adb2a25", "github.com/ethereum/go-ethereum@v1.9.25", "github.com/fsnotify/fsnotify@v1.4.9", "github.com/garyburd/redigo@v1.6.2", "github.com/go-errors/errors@v1.0.1", "github.com/go-kit/kit@v0.10.0", "github.com/go-logfmt/logfmt@v0.5.0", "github.com/go-redis/redis@v6.15.9+incompatible", "github.com/go-sql-driver/mysql@v1.5.0", "github.com/go-stack/stack@v1.8.0", "github.com/godbus/dbus@v0.0.0-20190726142602-4481cbc300e2", "github.com/gogo/protobuf@v1.3.1", "github.com/golang/protobuf@v1.4.2", "github.com/golang/snappy@v0.0.3-0.20201103224600-674baa8c7fc3", "github.com/google/btree@v1.0.0", "github.com/google/uuid@v1.1.1", "github.com/gorilla/handlers@v1.4.2", "github.com/gorilla/mux@v1.8.0", "github.com/gorilla/websocket@v1.4.2", "github.com/gsterjov/go-libsecret@v0.0.0-20161001094733-a6f4afe4910c", "github.com/gtank/merlin@v0.1.1", "github.com/gtank/ristretto255@v0.1.2", "github.com/hashicorp/golang-lru@v0.5.5-0.20210104140557-80c98217689d", "github.com/hashicorp/hcl@v1.0.0", "github.com/holiman/uint256@v1.1.1", "github.com/jinzhu/gorm@v1.9.16", "github.com/jinzhu/inflection@v1.0.0", "github.com/jmespath/go-jmespath@v0.0.0-20180206201540-c2b33e8439af", "github.com/json-iterator/go@v1.1.9", "github.com/lestrrat/go-file-rotatelogs@v0.0.0-20180223000712-d3151e2a480f", "github.com/lestrrat/go-strftime@v0.0.0-20180220042222-ba3bf9c1d042", "github.com/libp2p/go-buffer-pool@v0.0.2", "github.com/magiconair/properties@v1.8.1", "github.com/mattn/go-isatty@v0.0.12", "github.com/mattn/go-runewidth@v0.0.4", "github.com/mattn/go-sqlite3@v1.14.0", "github.com/matttproud/golang_protobuf_extensions@v1.0.1", "github.com/mimoo/StrobeGo@v0.0.0-20181016162300-f8f6d4d2b643", "github.com/minio/highwayhash@v1.0.0", "github.com/mitchellh/go-homedir@v1.1.0", "github.com/mitchellh/mapstructure@v1.1.2", "github.com/modern-go/concurrent@v0.0.0-20180306012644-bacd9c7ef1dd", "github.com/modern-go/reflect2@v1.0.1", "github.com/mtibben/percent@v0.2.1", "github.com/nacos-group/nacos-sdk-go@v1.0.0", "github.com/olekukonko/tablewriter@v0.0.2-0.20190409134802-7e037d187b0c", "github.com/pborman/uuid@v1.2.0", "github.com/pelletier/go-toml@v1.6.0", "github.com/pkg/errors@v0.9.1", "github.com/pmezard/go-difflib@v1.0.0", "github.com/prometheus/client_golang@v1.5.1", "github.com/prometheus/client_model@v0.2.0", "github.com/prometheus/common@v0.9.1", "github.com/prometheus/procfs@v0.0.10", "github.com/prometheus/tsdb@v0.9.1", "github.com/rakyll/statik@v0.1.6", "github.com/rcrowley/go-metrics@v0.0.0-20200313005456-10cdbea86bc0", "github.com/rjeczalik/notify@v0.9.2", "github.com/rs/cors@v1.7.0", "github.com/segmentio/kafka-go@v0.2.2", "github.com/shirou/gopsutil@v2.20.9+incompatible", "github.com/shopspring/decimal@v1.2.0", "github.com/spf13/afero@v1.2.2", "github.com/spf13/cast@v1.3.0", "github.com/spf13/cobra@v1.1.1", "github.com/spf13/jwalterweatherman@v1.1.0", "github.com/spf13/pflag@v1.0.5", "github.com/spf13/viper@v1.7.1", "github.com/status-im/keycard-go@v0.0.0-20190424133014-d95853db0f48", "github.com/steakknife/bloomfilter@v0.0.0-20180922174646-6819c0d2a570", "github.com/steakknife/hamming@v0.0.0-20180906055917-c99c65617cd3", "github.com/stretchr/testify@v1.7.0", "github.com/subosito/gotenv@v1.2.0", "github.com/syndtr/goleveldb@v1.0.1-0.20200815110645-5c35d600f0ca", "github.com/tendermint/btcd@v0.1.1", "github.com/tendermint/crypto@v0.0.0-20191022145703-50d29ede1e15", "github.com/tendermint/go-amino@v0.15.1", "github.com/tendermint/iavl@v0.14.1 =\u003e github.com/okex/iavl@v0.14.3-exchain", "github.com/tendermint/tendermint@v0.33.9 =\u003e github.com/okex/tendermint@v0.33.9-exchain4", "github.com/tendermint/tm-db@v0.5.2", "github.com/toolkits/concurrent@v0.0.0-20150624120057-a4371d70e3e3", "github.com/tyler-smith/go-bip39@v1.0.1-0.20181017060643-dbb3b84ba2ef", "github.com/willf/bitset@v1.1.11", "go.uber.org/atomic@v1.6.0", "go.uber.org/multierr@v1.5.0", "go.uber.org/zap@v1.15.0", "golang.org/x/crypto@v0.0.0-20200709230013-948cd5f35899", "golang.org/x/net@v0.0.0-20201010224723-4f7140c49acb", "golang.org/x/sys@v0.0.0-20201018230417-eeed37f84f13", "golang.org/x/text@v0.3.3", "golang.org/x/time@v0.0.0-20191024005414-555d28b269f0", "google.golang.org/genproto@v0.0.0-20200526211855-cb27e3aa2013", "google.golang.org/grpc@v1.30.0", "google.golang.org/protobuf@v1.25.0", "gopkg.in/ini.v1@v1.51.0", "gopkg.in/yaml.v2@v2.3.0", "gopkg.in/yaml.v3@v3.0.0-20200313102051-9f266ea9e77c"],
		"cosmos_sdk": "v0.39.2",
		"tendermint": "v0.33.9"
	}
}
```

#### Response Parameters

| **Parameter**       | **Type** | **Description**      |
| :------------------ | :------- | :------------------- |
| application_version | Object   | Application version. |
| > server_name       | String   | Server name.         |
| > name              | String   | App name.            |
| > commit            | String   | Commit hash of git.  |
| > go                | String   | Golang version.      |
| > cosmos_sdk        | String   | Cosmos sdk.          |
| > build_deps        | Array    | Build deps of go.    |
| > tendermint        | String   | Tendermint version.  |
| > client_name       | String   | Client name of cli.  |
| > version           | String   | App version.         |
| > build_tags        | String   | Build tags of go.    |
| node_info           | Object   | Node info.           |
| > protocol_version  | Object   | Protocol version.    |
| >> app              | String   | App version.         |
| >> block            | String   | Block version.       |
| >> p2p              | String   | P2P version.         |
| > other             | Object   |                      |
| >> tx_index         | String   | Tx index.            |
| >> rpc_address      | String   | RPC address.         |
| > channels          | String   | IBC channels.        |
| > listen_addr       | String   | Listen addr of node. |
| > id                | String   | ID of node.          |
| > moniker           | String   | Moniker of node.     |
| > version           | String   | Version of node.     |
| > network           | String   | Network id of chain. |

### Check node syncing

GET if the node is currently syning with other nodes

#### HTTP Request

`GET v1/syncing`

> Request Example

```wiki
https://okbrpc.okbchain.org/v1/syncing
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

| **Parameter** | **Type** | **Description**                 |
| :------------ | :------- | :------------------------------ |
| syncing       | Bool     | Is node syncing, true or false. |