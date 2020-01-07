<!---
order: 2
--->

# 命令行工具

## 介绍

`okchaintool`是用于简单调试的工具。

接受十六进制和base64格式，并提供可读的响应。

通常，我们在日志中将字节编码为十六进制，但在JSON中将字节编码为base64。

## 用法

### okchaintool pubkey
公钥不同格式转换，下面两个命令得到相同的结果:
```bash
okchaintool pubkey TZTQnfqOsi89SeoXVnIw+tnFJnr4X8qVC0U8AsEmFk4=
okchaintool pubkey 4D94D09DFA8EB22F3D49EA17567230FAD9C5267AF85FCA950B453C02C126164E
  ```
返回
```bash
Address: AB848E791827483D950C85F9CFC77D901FEE1E73
Hex: 4D94D09DFA8EB22F3D49EA17567230FAD9C5267AF85FCA950B453C02C126164E
JSON (base64): {"type":"tendermint/PubKeyEd25519","value":"TZTQnfqOsi89SeoXVnIw+tnFJnr4X8qVC0U8AsEmFk4="}
Bech32 Acc: okchainpub1zcjduepqfk2dp80636ez702fagt4vu3sltvu2fn6lp0u49gtg57q9sfxze8qekanju
Bech32 Validator Operator: okchainvaloperpub1zcjduepqfk2dp80636ez702fagt4vu3sltvu2fn6lp0u49gtg57q9sfxze8qzrmxpe
Bech32 Validator Consensus: okchainvalconspub1zcjduepqfk2dp80636ez702fagt4vu3sltvu2fn6lp0u49gtg57q9sfxze8q0fuqw3
```

### okchaintool tx

传入hex/base64编码的tx返回完整的JSON

```bash
okchaintool tx <hex or base64 transaction>
okchaintool tx tQEoKBapCkPJ7iE/ChR4HjtQEydR5yWMX4aw3+6hy78kcBIUYekVgLqZUXYQ32AIYki+ocuP4wMaEQoDb2tiEgoxMDAwMDAwMDAwEmoKJuta6YchAgYaL1tZ7ekqvweQhKojG8sDHUfN23qJWviAsTDIWvYUEkDuA/WIXaA1hccZUzn/DNgytttVfUR8wXxberfB0ZKMoQ2rtR1p/le4wl066D1SRR9xuTs0iBeVxzwgoEFdfbeW
```

返回

```json
{
  "type": "cosmos-sdk/StdTx",
  "value": {
    "msg": [
      {
        "type": "token/Send",
        "value": {
          "from_address": "okchain10q0rk5qnyag7wfvvt7rtphlw589m7frsmyq4ya",
          "to_address": "okchain1v853tq96n9ghvyxlvqyxyj97589clccr33yr7a",
          "amount": [
            {
              "denom": "okt",
              "amount": "10.00000000"
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
        "signature": "7gP1iF2gNYXHGVM5/wzYMrbbVX1EfMF8W3q3wdGSjKENq7Udaf5XuMJdOug9UkUfcbk7NIgXlcc8IKBBXX23lg=="
      }
    ],
    "memo": ""
  }
}
```

### okchaintool addr
okchain账户地址格式转换
```bash
okchaintool addr okchain1v853tq96n9ghvyxlvqyxyj97589clccr33yr7a
  ```

返回

```bash
Address: [97 233 21 128 186 153 81 118 16 223 96 8 98 72 190 161 203 143 227 3]
Address (hex): 61E91580BA99517610DF60086248BEA1CB8FE303
Bech32 Acc: okchain1v853tq96n9ghvyxlvqyxyj97589clccr33yr7a
Bech32 Val: okchainvaloper1v853tq96n9ghvyxlvqyxyj97589clccrd04xtm
```

### okchaintool raw-bytes

将原始字节输出(如[10 21 13 255])转化为hex编码

```bash
okchaintool raw-bytes <raw-bytes>
okchaintool raw-bytes "[10 21 13 255]"
```
返回
```bash
0A150DFF
```


### okchaintool hack

用于当前 `okchaind` 状态
```bash
 okchaintool hack $HOME/.okchaind` 
 ```

返回

```bash
I[2019-12-18|18:18:23.281][8016] Protocol V0: LoadContext
D[2019-12-18|18:18:23.282][8016] &{EnableBackend:false EnableMktCompute:false LogSQL:false CleanUpsKeptDays:map[kline_m1:120 kline_m3:120 kline_m5:120] CleanUpsTime:00:00:00 OrmEngine:{EngineType:sqlite3 ConnectStr:/Users/hanxueyang/.okchaind/data/sqlite3/backend.sqlite3}}
I[2019-12-18|18:18:23.282][8016] launch app with version: 0
ID CommitID{[]:0}
LastBlockHeight 0
```
