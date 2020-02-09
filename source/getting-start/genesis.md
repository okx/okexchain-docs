# genesis文件

## 创世块文件

Genesis文件是定义区块链初始状态的JSON文件。它可以被视为区块链的第一个区块的信息，即高度为0的区块的数据，下一个区块（高度为1）将引用Genesis文件作为其父块。

Genesis文件中定义的状态包含所有必要的初始信息，如初始测试币分配、"创世块"时间、默认参数等。下面是OKChain测试网genesis文件内容(有删减，详情请参考[创世块文件](https://github.com/okex/okchain-binaries/blob/master/genesis.json))，如下：
```sh
{
      "genesis_time": "2019-03-13T23:00:00Z",
      "chain_id": "okchain",
      "consensus_params": {
        "block": {
          "max_bytes": "22020096",
          "max_gas": "-1",
          "time_iota_ms": "1000"
        },
        "evidence": {
          "max_age": "100000"
        },
        "validator": {
          "pub_key_types": [
            "ed25519"
          ]
        }
      },
      "app_hash": "",
      "app_state": {   
        }
      }
# ...
```
我们来详细了解一下这些信息。

## "创世块"时间及链ID

genesis.json文件第一个字段定义了genesis_time, 是一个UTC时间戳，代表区块链的开始时间，此刻，创世验证者们应当已经在线并开始参与共识，当超过2/3的创世验证者（2/3按照验证者权益的权重计算）在线时，区块链网络开始正常工作，共识出块。

注：创世验证者表示OKchain网络最开始参与的验证者
从genesis文件中得知：
```sh
"genesis_time": "2019-03-13T23:00:00Z"
```

chain_id是链的唯一标识符，用来区分相同软件版本启动的不同链，其中OKChain测试网络的chain_id，如下：
```sh
"chain_id": "okchain",
```

