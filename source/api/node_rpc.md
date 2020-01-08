# Node RPC

RPC端点可以通过HTTP或websokets与节点进行交互。

## 连接

用户可以在自己本地运行一个节点，然后通过该节点与OKChain进行交互。

## 协议

支持下面列出的协议：

- URI over HTTP
- JSONRPC over HTTP
- JSONRPC over websockets

RPC是基于Tendermint中自带的RPC库构建的。具体细节可以参见Tendermint中自带的文档说明和测试文件。入口地址：https://github.com/tendermint/tendermint/tree/master/rpc/lib

## 参数

输入的参数推荐使用字节数组或字符串。

### URI/HTTP

```shell
curl 'http://localhost:26659/okchain/v1/tokens'
```

返回结果：

```json
{
    "code": 0, 
    "msg": "", 
    "detailMsg": "", 
    "data": [
        {
            "desc": "super coin of the COINLESS WORLD", 
            "symbol": "gyc-8f0", 
            "originalSymbol": "gyc", 
            "wholeName": "gycoin", 
            "totalSupply": "100000000", 
            "owner": "okchain1k232hksp266udmcf88s96t6vrjla62j7esy7wv", 
            "mintable": true
        }, 
        {
            "desc": "OKT", 
            "symbol": "okt", 
            "originalSymbol": "okt", 
            "wholeName": "ok group coin", 
            "totalSupply": "1000000000", 
            "owner": "okchain1ez6dnyru9076e5n8nkhcalasql4c9ul5yqd8qa", 
            "mintable": true
        }
    ]
}
```

### JSONRPC/HTTP

JSONRPC请求可以通过HTTP发送到根RPC端点。

### JSONRPC/WEBSOCKET

JSONRPC也可以通过websocket。通过gosdk可以进行该请求访问，返回对应查询的结构体。

返回结果：

```shell
// []token.Token (golang)
[{"desc":"super coin of the COINLESS WORLD","symbol":"gyc-8f0","originalSymbol":"gyc","wholeName":"gycoin","totalSupply":100000000,"owner":"okchain1k232hksp266udmcf88s96t6vrjla62j7esy7wv","mintable":true} {"desc":"OKT","symbol":"okt","originalSymbol":"okt","wholeName":"ok group coin","totalSupply":1000000000,"owner":"okchain1ez6dnyru9076e5n8nkhcalasql4c9ul5yqd8qa","mintable":true}]
```

## RPC端点的请求列表

```shell
获取已连接的节点信息
/okchain/v1/node_info	
获取节点的同步状态
/okchain/v1/syncing
获取最近的区块信息
/okchain/v1/blocks/latest
获取某高度的区块信息
/okchain/v1/blocks/{height}
获取最近的验证者集合信息
/okchain/v1/validatorsets/latest
获取某一高度的验证者集合信息
/okchain/v1/validatorsets/{height}
```

### 获取已连接的节点信息

```shell
curl 'http://localhost:26659/okchain/v1/node_info'
```

返回结果：

```json
{
    "protocol_version": {
        "p2p": "7", 
        "block": "10", 
        "app": "0"
    }, 
    "id": "3baf7d390e5135e99ba98d203c8aea83f72594eb", 
    "listen_addr": "tcp://0.0.0.0:26656", 
    "network": "okchain", 
    "version": "0.31.5", 
    "channels": "4020212223303800", 
    "moniker": "okerdeMacBook-Pro.local", 
    "other": {
        "tx_index": "on", 
        "rpc_address": "tcp://0.0.0.0:26657"
    }
}
```

#### 4.2 获取节点的同步状态

```shell
curl 'http://localhost:26659/okchain/v1/syncing'
```

返回结果：

```shell
false
```

### 获取最近的区块信息

```shell
curl 'http://localhost:26659/okchain/v1/blocks/latest'
```

返回结果：

```json
{
    "block_meta": {
        "block_id": {
            "hash": "0AA8FD3C00D6A0AB5DE6AD647DCB4999B30AC7BE78BC0C57EF4D077963C4350B", 
            "parts": {
                "total": "1", 
                "hash": "3DEF94DFB86F9D007A30C403360FB0592EC731D24CA469159C9147887C517E75"
            }
        }, 
        "header": {
            "version": {
                "block": "10", 
                "app": "0"
            }, 
            "chain_id": "okchain", 
            "height": "817487", 
            "time": "2019-07-24T04:50:04.30857Z", 
            "num_txs": "0", 
            "total_txs": "56", 
            "last_block_id": {
                "hash": "B1460C1B880AFAC4B587D5ACD7FA6957C926C91A1AACB6FD13EC7D3BD6046637", 
                "parts": {
                    "total": "1", 
                    "hash": "2263406B947E7DE48CF70A33DB1A6547F1CD731F59E2AF10C2B4F35659E51935"
                }
            }, 
            "last_commit_hash": "5C08FBBEE8F84B2AC521BC0BA75A05679100E95D1D9A4535629EC8B4C9F73AB1", 
            "data_hash": "", 
            "validators_hash": "FD82E55E4C644C6E11A0EFA52D94D836A2D87A1A6CD22597F7B51E085292F25A", 
            "next_validators_hash": "FD82E55E4C644C6E11A0EFA52D94D836A2D87A1A6CD22597F7B51E085292F25A", 
            "consensus_hash": "048091BC7DDC283F77BFBF91D73C44DA58C3DF8A9CBC867405D8B7F3DAADA22F", 
            "app_hash": "C44E65499D3F11A5A260DF5BB5F42A7249E9798B0F0790C6A77FE6D973B6C705", 
            "last_results_hash": "", 
            "evidence_hash": "", 
            "proposer_address": "F962D5715747BCC99C1D776EC95F110239DFAACE"
        }
    }, 
    "block": {
        "header": {
            "version": {
                "block": "10", 
                "app": "0"
            }, 
            "chain_id": "okchain", 
            "height": "817487", 
            "time": "2019-07-24T04:50:04.30857Z", 
            "num_txs": "0", 
            "total_txs": "56", 
            "last_block_id": {
                "hash": "B1460C1B880AFAC4B587D5ACD7FA6957C926C91A1AACB6FD13EC7D3BD6046637", 
                "parts": {
                    "total": "1", 
                    "hash": "2263406B947E7DE48CF70A33DB1A6547F1CD731F59E2AF10C2B4F35659E51935"
                }
            }, 
            "last_commit_hash": "5C08FBBEE8F84B2AC521BC0BA75A05679100E95D1D9A4535629EC8B4C9F73AB1", 
            "data_hash": "", 
            "validators_hash": "FD82E55E4C644C6E11A0EFA52D94D836A2D87A1A6CD22597F7B51E085292F25A", 
            "next_validators_hash": "FD82E55E4C644C6E11A0EFA52D94D836A2D87A1A6CD22597F7B51E085292F25A", 
            "consensus_hash": "048091BC7DDC283F77BFBF91D73C44DA58C3DF8A9CBC867405D8B7F3DAADA22F", 
            "app_hash": "C44E65499D3F11A5A260DF5BB5F42A7249E9798B0F0790C6A77FE6D973B6C705", 
            "last_results_hash": "", 
            "evidence_hash": "", 
            "proposer_address": "F962D5715747BCC99C1D776EC95F110239DFAACE"
        }, 
        "data": {
            "txs": null
        }, 
        "evidence": {
            "evidence": null
        }, 
        "last_commit": {
            "block_id": {
                "hash": "B1460C1B880AFAC4B587D5ACD7FA6957C926C91A1AACB6FD13EC7D3BD6046637", 
                "parts": {
                    "total": "1", 
                    "hash": "2263406B947E7DE48CF70A33DB1A6547F1CD731F59E2AF10C2B4F35659E51935"
                }
            }, 
            "precommits": [
                {
                    "type": 2, 
                    "height": "817486", 
                    "round": "0", 
                    "block_id": {
                        "hash": "B1460C1B880AFAC4B587D5ACD7FA6957C926C91A1AACB6FD13EC7D3BD6046637", 
                        "parts": {
                            "total": "1", 
                            "hash": "2263406B947E7DE48CF70A33DB1A6547F1CD731F59E2AF10C2B4F35659E51935"
                        }
                    }, 
                    "timestamp": "2019-07-24T04:50:04.30857Z", 
                    "validator_address": "F962D5715747BCC99C1D776EC95F110239DFAACE", 
                    "validator_index": "0", 
                    "signature": "u7v+nsYlT+AfNBoL0KMYRxZ95p18HXAr1z3dcd8V/9ujUjsV651ChNMdCtaznZlt21JI3jF/ZjwaLkT1N2rPAQ=="
                }
            ]
        }
    }
}
```

### 获取某高度的区块信息

```shell
curl 'http://localhost:26659/okchain/v1/blocks/1'
```

返回结果：

```json
{
    "block_meta": {
        "block_id": {
            "hash": "FEFD8FC152259B593BBB10F373596D8FE99FBD9A312787A8FC7F006F18FFEE31", 
            "parts": {
                "total": "1", 
                "hash": "17213B987785B6BE3DB8BA77F757BA83524C3123AEFB88BAC96C10A0F14FF48A"
            }
        }, 
        "header": {
            "version": {
                "block": "10", 
                "app": "0"
            }, 
            "chain_id": "okchain", 
            "height": "1", 
            "time": "2019-07-11T07:14:56.069027Z", 
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
            "validators_hash": "FD82E55E4C644C6E11A0EFA52D94D836A2D87A1A6CD22597F7B51E085292F25A", 
            "next_validators_hash": "FD82E55E4C644C6E11A0EFA52D94D836A2D87A1A6CD22597F7B51E085292F25A", 
            "consensus_hash": "048091BC7DDC283F77BFBF91D73C44DA58C3DF8A9CBC867405D8B7F3DAADA22F", 
            "app_hash": "", 
            "last_results_hash": "", 
            "evidence_hash": "", 
            "proposer_address": "F962D5715747BCC99C1D776EC95F110239DFAACE"
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
            "time": "2019-07-11T07:14:56.069027Z", 
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
            "validators_hash": "FD82E55E4C644C6E11A0EFA52D94D836A2D87A1A6CD22597F7B51E085292F25A", 
            "next_validators_hash": "FD82E55E4C644C6E11A0EFA52D94D836A2D87A1A6CD22597F7B51E085292F25A", 
            "consensus_hash": "048091BC7DDC283F77BFBF91D73C44DA58C3DF8A9CBC867405D8B7F3DAADA22F", 
            "app_hash": "", 
            "last_results_hash": "", 
            "evidence_hash": "", 
            "proposer_address": "F962D5715747BCC99C1D776EC95F110239DFAACE"
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

### 获取最近的验证者集合信息

```shell
curl 'http://localhost:26659/okchain/v1/validatorsets/latest'
```

返回结果：

```json
{
    "block_height": "817697", 
    "validators": [
        {
            "address": "okchainvalcons1l93d2u2hg77vn8qawahvjhc3qgual2kw6xyasr", 
            "pub_key": "okchainvalconspub1zcjduepq2rvev9v5mkraaktt67gtk58hj8z3msgt8jwuc7wp4sv9lvh67egs0stsqj", 
            "proposer_priority": "0", 
            "voting_power": "10"
        }
    ]
}
```

### 获取某一高度的验证者集合信息

```shell
curl 'http://localhost:26659/okchain/v1/validatorsets/1'
```

返回结果：

```json
{
    "block_height": "1", 
    "validators": [
        {
            "address": "okchainvalcons1l93d2u2hg77vn8qawahvjhc3qgual2kw6xyasr", 
            "pub_key": "okchainvalconspub1zcjduepq2rvev9v5mkraaktt67gtk58hj8z3msgt8jwuc7wp4sv9lvh67egs0stsqj", 
            "proposer_priority": "0", 
            "voting_power": "10"
        }
    ]
}
```

## 适用于开发者的APIs

### ABCI信息查询

返回结构：

```go
type ResponseInfo struct {
	Data                 string   `protobuf:"bytes,1,opt,name=data,proto3" json:"data,omitempty"`
	Version              string   `protobuf:"bytes,2,opt,name=version,proto3" json:"version,omitempty"`
	AppVersion           uint64   `protobuf:"varint,3,opt,name=app_version,json=appVersion,proto3" json:"app_version,omitempty"`
	LastBlockHeight      int64    `protobuf:"varint,4,opt,name=last_block_height,json=lastBlockHeight,proto3" json:"last_block_height,omitempty"`
	LastBlockAppHash     []byte   `protobuf:"bytes,5,opt,name=last_block_app_hash,json=lastBlockAppHash,proto3" json:"last_block_app_hash,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}
```

例子：

```go
func RpcQueryABCIInfo() (abci.ResponseInfo, error) {
	rpcClient := rpcclient.NewHTTP("http://localhost:26657", "/websocket")
	info, err := rpcClient.ABCIInfo()
	if err != nil {
		return abci.ResponseInfo{}, err
	}
	return info.Response, nil
}
```

返回对象经过json编码后如下：

```json
{
    "data": "okchain", 
    "last_block_height": 822028, 
    "last_block_app_hash": "6zBnkWpS4e9VXUoS4a3SUAUL0D2z1nybmIeHEP2jybU="
}
```

### 共识状态查询

返回结构：

```go
[]byte // json字符串
```

例子：

```go
func RPCQueryConsenusState() ([]byte, error) {
	rpcClient := rpcclient.NewHTTP("http://localhost:26657", "/websocket")
	info, err := rpcClient.ConsensusState()
	if err != nil {
		return nil, err
	}
	return info.RoundState, nil
}
```

返回对象即是json字符串：

```json
{
    "height/round/step": "819197/0/1", 
    "start_time": "2019-07-24T05:19:43.92668Z", 
    "proposal_block_hash": "", 
    "locked_block_hash": "", 
    "valid_block_hash": "", 
    "height_vote_set": [
        {
            "round": "0", 
            "prevotes": [
                "nil-Vote"
            ], 
            "prevotes_bit_array": "BA{1:_} 0/10 = 0.00", 
            "precommits": [
                "nil-Vote"
            ], 
            "precommits_bit_array": "BA{1:_} 0/10 = 0.00"
        }
    ]
}
```

### 转储共识状态查询

返回结构：

```go
[]byte // json字符串
```

例子：

```go
func RPCQueryDumpConsenusState() ([]byte, error) {
	rpcClient := rpcclient.NewHTTP("http://localhost:26657", "/websocket")
	info, err := rpcClient.DumpConsensusState()
	if err != nil {
		return nil, err
	}
	return info.RoundState, nil
}
```

返回对象即是json字符串：

```json
{
    "height": "819397", 
    "round": "0", 
    "step": 1, 
    "start_time": "2019-07-24T05:23:11.499341Z", 
    "commit_time": "2019-07-24T05:23:10.499341Z", 
    "validators": {
        "validators": [
            {
                "address": "F962D5715747BCC99C1D776EC95F110239DFAACE", 
                "pub_key": {
                    "type": "tendermint/PubKeyEd25519", 
                    "value": "UNmWFZTdh97Za9eQu1D3kcUdwQs8ncx5wawYX7L69lE="
                }, 
                "voting_power": "10", 
                "proposer_priority": "0"
            }
        ], 
        "proposer": {
            "address": "F962D5715747BCC99C1D776EC95F110239DFAACE", 
            "pub_key": {
                "type": "tendermint/PubKeyEd25519", 
                "value": "UNmWFZTdh97Za9eQu1D3kcUdwQs8ncx5wawYX7L69lE="
            }, 
            "voting_power": "10", 
            "proposer_priority": "0"
        }
    }, 
    "proposal": null, 
    "proposal_block": null, 
    "proposal_block_parts": null, 
    "locked_round": "-1", 
    "locked_block": null, 
    "locked_block_parts": null, 
    "valid_round": "-1", 
    "valid_block": null, 
    "valid_block_parts": null, 
    "votes": [
        {
            "round": "0", 
            "prevotes": [
                "nil-Vote"
            ], 
            "prevotes_bit_array": "BA{1:_} 0/10 = 0.00", 
            "precommits": [
                "nil-Vote"
            ], 
            "precommits_bit_array": "BA{1:_} 0/10 = 0.00"
        }
    ], 
    "commit_round": "-1", 
    "last_commit": {
        "votes": [
            "Vote{0:F962D5715747 819396/00/2(Precommit) F88C4A9FC7E7 9F947B18EC78 @ 2019-07-24T05:23:10.491166Z}"
        ], 
        "votes_bit_array": "BA{1:x} 10/10 = 1.00", 
        "peer_maj_23s": { }
    }, 
    "last_validators": {
        "validators": [
            {
                "address": "F962D5715747BCC99C1D776EC95F110239DFAACE", 
                "pub_key": {
                    "type": "tendermint/PubKeyEd25519", 
                    "value": "UNmWFZTdh97Za9eQu1D3kcUdwQs8ncx5wawYX7L69lE="
                }, 
                "voting_power": "10", 
                "proposer_priority": "0"
            }
        ], 
        "proposer": {
            "address": "F962D5715747BCC99C1D776EC95F110239DFAACE", 
            "pub_key": {
                "type": "tendermint/PubKeyEd25519", 
                "value": "UNmWFZTdh97Za9eQu1D3kcUdwQs8ncx5wawYX7L69lE="
            }, 
            "voting_power": "10", 
            "proposer_priority": "0"
        }
    }, 
    "triggered_timeout_precommit": false
}
```

### 网络信息查询

返回结构：

```go
type ResultNetInfo struct {
	Listening bool     `json:"listening"`
	Listeners []string `json:"listeners"`
	NPeers    int      `json:"n_peers"`
	Peers     []Peer   `json:"peers"`
}
```

例子：

```go
func RPCQueryNetInfo() (*ctypes.ResultNetInfo, error) {
	rpcClient := rpcclient.NewHTTP("http://localhost:26657", "/websocket")
	info, err := rpcClient.NetInfo()
	if err != nil {
		return nil, err
	}
	return info, nil
}
```

返回对象经过json编码后如下：

```json
{
    "listening": true, 
    "listeners": [
        "Listener(@)"
    ], 
    "n_peers": 0, 
    "peers": null
}
```

### 创世文件查询

返回结构：

```go
type GenesisDoc struct {
	GenesisTime     time.Time          `json:"genesis_time"`
	ChainID         string             `json:"chain_id"`
	ConsensusParams *ConsensusParams   `json:"consensus_params,omitempty"`
	Validators      []GenesisValidator `json:"validators,omitempty"`
	AppHash         cmn.HexBytes       `json:"app_hash"`
	AppState        json.RawMessage    `json:"app_state,omitempty"`
}
```

例子：

```go
func RPCQueryGenesusFile() (*types.GenesisDoc, error) {
	rpcClient := rpcclient.NewHTTP("http://localhost:26657", "/websocket")
	info, err := rpcClient.Genesis()
	if err != nil {
		return nil, err
	}
	return info.Genesis, nil
}
```

返回对象经过json编码后如下：

```json
{
    "genesis_time": "2019-07-11T07:14:56.069027Z", 
    "chain_id": "okchain", 
    "consensus_params": {
        "block": {
            "max_bytes": 22020096, 
            "max_gas": -1, 
            "time_iota_ms": 1000
        }, 
        "evidence": {
            "max_age": 100000
        }, 
        "validator": {
            "pub_key_types": [
                "ed25519"
            ]
        }
    }, 
    "validators": [
        {
            "address": "F962D5715747BCC99C1D776EC95F110239DFAACE", 
            "pub_key": [
                80, 
                217, 
                150, 
                21, 
                148, 
                221, 
                135, 
                222, 
                217, 
                107, 
                215, 
                144, 
                187, 
                80, 
                247, 
                145, 
                197, 
                29, 
                193, 
                11, 
                60, 
                157, 
                204, 
                121, 
                193, 
                172, 
                24, 
                95, 
                178, 
                250, 
                246, 
                81
            ], 
            "power": 10, 
            "name": ""
        }
    ], 
    "app_hash": "", 
    "app_state": {
        "auth": {
            "collected_fees": null, 
            "params": {
                "max_memo_characters": "256", 
                "tx_sig_limit": "7", 
                "tx_size_cost_per_byte": "10", 
                "sig_verify_cost_ed25519": "590", 
                "sig_verify_cost_secp256k1": "1000"
            }
        }, 
        "bank": {
            "send_enabled": true
        }, 
        "accounts": [
            {
                "address": "okchain1ez6dnyru9076e5n8nkhcalasql4c9ul5yqd8qa", 
                "coins": [
                    {
                        "denom": "acoin", 
                        "amount": "10000000.00000000"
                    }, 
                    {
                        "denom": "bcoin", 
                        "amount": "10000000.00000000"
                    }, 
                    {
                        "denom": "ccoin", 
                        "amount": "10000000.00000000"
                    }, 
                    {
                        "denom": "dcoin", 
                        "amount": "10000000.00000000"
                    }, 
                    {
                        "denom": "ecoin", 
                        "amount": "10000000.00000000"
                    }, 
                    {
                        "denom": "fcoin", 
                        "amount": "10000000.00000000"
                    }, 
                    {
                        "denom": "gcoin", 
                        "amount": "10000000.00000000"
                    }, 
                    {
                        "denom": "hcoin", 
                        "amount": "10000000.00000000"
                    }, 
                    {
                        "denom": "okt", 
                        "amount": "10000000.00000000"
                    }, 
                    {
                        "denom": "icoin", 
                        "amount": "10000000.00000000"
                    }, 
                    {
                        "denom": "jcoin", 
                        "amount": "10000000.00000000"
                    }, 
                    {
                        "denom": "kcoin", 
                        "amount": "10000000.00000000"
                    }
                ], 
                "sequence_number": "0", 
                "account_number": "0", 
                "original_vesting": null, 
                "delegated_free": null, 
                "delegated_vesting": null, 
                "start_time": "0", 
                "end_time": "0"
            }, 
            {
                "address": "okchain1dfcj3k6vg6euz2t8qwxly0k4753z5pw06h7rtj", 
                "coins": [
                    {
                        "denom": "acoin", 
                        "amount": "10000000.00000000"
                    }, 
                    {
                        "denom": "bcoin", 
                        "amount": "10000000.00000000"
                    }, 
                    {
                        "denom": "ccoin", 
                        "amount": "10000000.00000000"
                    }, 
                    {
                        "denom": "dcoin", 
                        "amount": "10000000.00000000"
                    }, 
                    {
                        "denom": "ecoin", 
                        "amount": "10000000.00000000"
                    }, 
                    {
                        "denom": "fcoin", 
                        "amount": "10000000.00000000"
                    }, 
                    {
                        "denom": "gcoin", 
                        "amount": "10000000.00000000"
                    }, 
                    {
                        "denom": "hcoin", 
                        "amount": "10000000.00000000"
                    }, 
                    {
                        "denom": "okt", 
                        "amount": "10000000.00000000"
                    }, 
                    {
                        "denom": "icoin", 
                        "amount": "10000000.00000000"
                    }, 
                    {
                        "denom": "jcoin", 
                        "amount": "10000000.00000000"
                    }, 
                    {
                        "denom": "kcoin", 
                        "amount": "10000000.00000000"
                    }
                ], 
                "sequence_number": "0", 
                "account_number": "0", 
                "original_vesting": null, 
                "delegated_free": null, 
                "delegated_vesting": null, 
                "start_time": "0", 
                "end_time": "0"
            }, 
            {
                "address": "okchain1v853tq96n9ghvyxlvqyxyj97589clccr33yr7a", 
                "coins": [
                    {
                        "denom": "acoin", 
                        "amount": "10000000.00000000"
                    }, 
                    {
                        "denom": "bcoin", 
                        "amount": "10000000.00000000"
                    }, 
                    {
                        "denom": "ccoin", 
                        "amount": "10000000.00000000"
                    }, 
                    {
                        "denom": "dcoin", 
                        "amount": "10000000.00000000"
                    }, 
                    {
                        "denom": "ecoin", 
                        "amount": "10000000.00000000"
                    }, 
                    {
                        "denom": "fcoin", 
                        "amount": "10000000.00000000"
                    }, 
                    {
                        "denom": "gcoin", 
                        "amount": "10000000.00000000"
                    }, 
                    {
                        "denom": "hcoin", 
                        "amount": "10000000.00000000"
                    }, 
                    {
                        "denom": "okt", 
                        "amount": "10000000.00000000"
                    }, 
                    {
                        "denom": "icoin", 
                        "amount": "10000000.00000000"
                    }, 
                    {
                        "denom": "jcoin", 
                        "amount": "10000000.00000000"
                    }, 
                    {
                        "denom": "kcoin", 
                        "amount": "10000000.00000000"
                    }
                ], 
                "sequence_number": "0", 
                "account_number": "0", 
                "original_vesting": null, 
                "delegated_free": null, 
                "delegated_vesting": null, 
                "start_time": "0", 
                "end_time": "0"
            }, 
            {
                "address": "okchain10q0rk5qnyag7wfvvt7rtphlw589m7frsmyq4ya", 
                "coins": [
                    {
                        "denom": "acoin", 
                        "amount": "10000000.00000000"
                    }, 
                    {
                        "denom": "bcoin", 
                        "amount": "10000000.00000000"
                    }, 
                    {
                        "denom": "ccoin", 
                        "amount": "10000000.00000000"
                    }, 
                    {
                        "denom": "dcoin", 
                        "amount": "10000000.00000000"
                    }, 
                    {
                        "denom": "ecoin", 
                        "amount": "10000000.00000000"
                    }, 
                    {
                        "denom": "fcoin", 
                        "amount": "10000000.00000000"
                    }, 
                    {
                        "denom": "gcoin", 
                        "amount": "10000000.00000000"
                    }, 
                    {
                        "denom": "hcoin", 
                        "amount": "10000000.00000000"
                    }, 
                    {
                        "denom": "okt", 
                        "amount": "10000000.00000000"
                    }, 
                    {
                        "denom": "icoin", 
                        "amount": "10000000.00000000"
                    }, 
                    {
                        "denom": "jcoin", 
                        "amount": "10000000.00000000"
                    }, 
                    {
                        "denom": "kcoin", 
                        "amount": "10000000.00000000"
                    }
                ], 
                "sequence_number": "0", 
                "account_number": "0", 
                "original_vesting": null, 
                "delegated_free": null, 
                "delegated_vesting": null, 
                "start_time": "0", 
                "end_time": "0"
            }
        ], 
        "distr": {
            "fee_pool": {
                "community_pool": null
            }, 
            "community_tax": "0.02000000", 
            "base_proposer_reward": "0.01000000", 
            "bonus_proposer_reward": "0.04000000", 
            "withdraw_addr_enabled": true, 
            "delegator_withdraw_infos": null, 
            "previous_proposer": "", 
            "outstanding_rewards": null, 
            "validator_accumulated_commissions": null, 
            "validator_historical_rewards": null, 
            "validator_current_rewards": null, 
            "delegator_starting_infos": null, 
            "validator_slash_events": null
        }, 
        "staking": {
            "pool": {
                "not_bonded_tokens": "0", 
                "bonded_tokens": "0"
            }, 
            "params": {
                "unbonding_time": "518400000000000", 
                "max_validators": 21, 
                "max_entries": 7, 
                "bond_denom": "okt"
            }, 
            "last_total_power": "0", 
            "last_validator_powers": null, 
            "validators": null, 
            "delegations": null, 
            "unbonding_delegations": null, 
            "redelegations": null, 
            "exported": false
        }, 
        "slashing": {
            "params": {
                "max_evidence_age": "120000000000", 
                "signed_blocks_window": "100", 
                "min_signed_per_window": "0.50000000", 
                "downtime_jail_duration": "600000000000", 
                "slash_fraction_double_sign": "0.05000000", 
                "slash_fraction_downtime": "0.01000000"
            }, 
            "signing_infos": { }, 
            "missed_blocks": { }
        }, 
        "gov": {
            "starting_proposal_id": "1", 
            "proposals": null, 
            "params": {
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
        }, 
        "mint": {
            "minter": {
                "inflation": "0.13000000", 
                "annual_provisions": "0.00000000"
            }, 
            "params": {
                "mint_denom": "okt", 
                "inflation_rate_change": "0.13000000", 
                "inflation_max": "0.20000000", 
                "inflation_min": "0.07000000", 
                "goal_bonded": "0.67000000", 
                "blocks_per_year": "6311520"
            }
        }, 
        "gentxs": null, 
        "order": {
            "params": {
                "order_expire_blocks": "86400", 
                "max_deals_per_block": "2000", 
                "new_order": "0.00000000", 
                "cancel": "0.01000000", 
                "cancel_native": "0.00200000", 
                "expire": "0.01000000", 
                "expire_native": "0.00200000", 
                "trade_fee_rate": "0.00100000", 
                "trade_fee_rate_native": "0.00040000"
            }
        }, 
        "token": {
            "params": {
                "list_asset": "100000.00000000", 
                "issue_asset": "20000.00000000", 
                "mint_asset": "2000.00000000", 
                "burn_asset": "100.00000000", 
                "transfer": "0.01250000", 
                "freeze_asset": "0.10000000", 
                "unfreeze_asset": "0.10000000", 
                "list_period": "86400000000000", 
                "list_proposal_min_deposit": "20000.00000000"
            }, 
            "info": [
                {
                    "desc": "OKT", 
                    "symbol": "okt", 
                    "originalSymbol": "okt", 
                    "wholeName": "ok group coin", 
                    "totalSupply": "1000000000", 
                    "owner": "", 
                    "mintable": true
                }
            ]
        }
    }
}
```

### 节点健康情况查询

返回结构：

```go
type ResultHealth struct{} // empty struct.
```

例子：

```go
func RPCQueryHealthInfo() (*ctypes.ResultHealth, error) {
	rpcClient := rpcclient.NewHTTP("http://localhost:26657", "/websocket")
	info, err := rpcClient.Health()
	if err != nil {
		return nil, err
	}
	return info, nil
}
```

返回对象经过json编码后如下：

```json
{}
```

### 未确认交易数量查询

返回结构：

```go
type ResultUnconfirmedTxs struct {
	Count      int        `json:"n_txs"`
	Total      int        `json:"total"`
	TotalBytes int64      `json:"total_bytes"`
	Txs        []types.Tx `json:"txs"`
}
```

例子：

```go
func RPCQueryUnconfirmedTxsNum(limit int) (*ctypes.ResultUnconfirmedTxs, error) {
	rpcClient := rpcclient.NewHTTP("http://localhost:26657", "/websocket")
	info, err := rpcClient.UnconfirmedTxs(limit)
	if err != nil {
		return nil, err
	}
	return info, nil
}
```

返回对象经过json编码后如下：

```json
{
    "n_txs": 0, 
    "total": 0, 
    "total_bytes": 0, 
    "txs": null
}
```

### 节点状态查询

返回结构：

```go
type ResultStatus struct {
	NodeInfo      p2p.DefaultNodeInfo `json:"node_info"`
	SyncInfo      SyncInfo            `json:"sync_info"`
	ValidatorInfo ValidatorInfo       `json:"validator_info"`
}

// DefaultNodeInfo is the basic node information exchanged
// between two peers during the Tendermint P2P handshake.
type DefaultNodeInfo struct {
	ProtocolVersion ProtocolVersion `json:"protocol_version"`

	// Authenticate
	// TODO: replace with NetAddress
	ID_        ID     `json:"id"`          // authenticated identifier
	ListenAddr string `json:"listen_addr"` // accepting incoming

	// Check compatibility.
	// Channels are HexBytes so easier to read as JSON
	Network  string       `json:"network"`  // network/chain ID
	Version  string       `json:"version"`  // major.minor.revision
	Channels cmn.HexBytes `json:"channels"` // channels this node knows about

	// ASCIIText fields
	Moniker string               `json:"moniker"` // arbitrary moniker
	Other   DefaultNodeInfoOther `json:"other"`   // other application specific data
}
// Info about the node's syncing state
type SyncInfo struct {
	LatestBlockHash   cmn.HexBytes `json:"latest_block_hash"`
	LatestAppHash     cmn.HexBytes `json:"latest_app_hash"`
	LatestBlockHeight int64        `json:"latest_block_height"`
	LatestBlockTime   time.Time    `json:"latest_block_time"`
	CatchingUp        bool         `json:"catching_up"`
}
// Info about the node's validator
type ValidatorInfo struct {
	Address     cmn.HexBytes  `json:"address"`
	PubKey      crypto.PubKey `json:"pub_key"`
	VotingPower int64         `json:"voting_power"`
}
```

例子：

```go
func RPCQueryStateInfo() (*ctypes.ResultStatus, error) {
	rpcClient := rpcclient.NewHTTP("http://localhost:26657", "/websocket")
	info, err := rpcClient.Status()
	if err != nil {
		return nil, err
	}
	return info, nil
}
```

返回对象经过json编码后如下：

```json
{
    "node_info": {
        "protocol_version": {
            "p2p": 7, 
            "block": 10, 
            "app": 0
        }, 
        "id": "3baf7d390e5135e99ba98d203c8aea83f72594eb", 
        "listen_addr": "tcp://0.0.0.0:26656", 
        "network": "okchain", 
        "version": "0.31.5", 
        "channels": "4020212223303800", 
        "moniker": "okerdeMacBook-Pro.local", 
        "other": {
            "tx_index": "on", 
            "rpc_address": "tcp://0.0.0.0:26657"
        }
    }, 
    "sync_info": {
        "latest_block_hash": "1E1AFED72CD7E893A3344103C7701259BCCC25EABF55CAC8F5BFA0D04D329C24", 
        "latest_app_hash": "1BA26194781B25B4694A2A494F21E571F7F1008D539B72A5ECA23D34BEC1F2B6", 
        "latest_block_height": 822834, 
        "latest_block_time": "2019-07-24T06:33:47.123201Z", 
        "catching_up": false
    }, 
    "validator_info": {
        "address": "F962D5715747BCC99C1D776EC95F110239DFAACE", 
        "pub_key": [
            80, 
            217, 
            150, 
            21, 
            148, 
            221, 
            135, 
            222, 
            217, 
            107, 
            215, 
            144, 
            187, 
            80, 
            247, 
            145, 
            197, 
            29, 
            193, 
            11, 
            60, 
            157, 
            204, 
            121, 
            193, 
            172, 
            24, 
            95, 
            178, 
            250, 
            246, 
            81
        ], 
        "voting_power": 10
    }
}
```

### ABCI查询

有效查询路径：

- `/store/acc/key`
- `/custom/token/tokenpair`
- `/custom/order/depthbook`

返回结构：

```go
type ResponseQuery struct {
	Code uint32 `protobuf:"varint,1,opt,name=code,proto3" json:"code,omitempty"`
	// bytes data = 2; // use "value" instead.
	Log                  string        `protobuf:"bytes,3,opt,name=log,proto3" json:"log,omitempty"`
	Info                 string        `protobuf:"bytes,4,opt,name=info,proto3" json:"info,omitempty"`
	Index                int64         `protobuf:"varint,5,opt,name=index,proto3" json:"index,omitempty"`
	Key                  []byte        `protobuf:"bytes,6,opt,name=key,proto3" json:"key,omitempty"`
	Value                []byte        `protobuf:"bytes,7,opt,name=value,proto3" json:"value,omitempty"`
	Proof                *merkle.Proof `protobuf:"bytes,8,opt,name=proof" json:"proof,omitempty"`
	Height               int64         `protobuf:"varint,9,opt,name=height,proto3" json:"height,omitempty"`
	Codespace            string        `protobuf:"bytes,10,opt,name=codespace,proto3" json:"codespace,omitempty"`
	XXX_NoUnkeyedLiteral struct{}      `json:"-"`
	XXX_unrecognized     []byte        `json:"-"`
	XXX_sizecache        int32         `json:"-"`
}
```

例子：以查询公链中所有的数字资产交易对的信息为例——`/custom/token/tokenpair`

```go
func RPCQueryABCITokenpair() (abci.ResponseQuery, error) {
	rpcClient := rpcclient.NewHTTP("http://localhost:26657", "/websocket")
	info, err := rpcClient.ABCIQuery("/custom/token/tokenpair",nil)
	if err != nil {
		return abci.ResponseQuery{}, err
	}
	return info.Response, nil
}
```

返回对象经过json编码后如下：

```json
{
    "value": "WwogIHsKICAgICJiYXNlQXNzZXRTeW1ib2wiOiAieHhiIiwKICAgICJxdW90ZUFzc2V0U3ltYm9sIjogIm9rYiIsCiAgICAicHJpY2UiOiAiMTAuMDAwMDAwMDAiLAogICAgIm1heFByaWNlRGlnaXQiOiAiMSIsCiAgICAibWF4U2l6ZURpZ2l0IjogIjIiLAogICAgIm1pblRyYWRlU2l6ZSI6ICIwLjEwMDAwMDAwIiwKICAgICJ0b2tlblBhaXJJZCI6ICIwIgogIH0KXQ=="
}
```

注：这个返回对象是经过amino编码的。如果需要提取其内部成员信息，请进行amino解码操作。

### 区块查询

返回结构：

```go
// Single block (with meta)
type ResultBlock struct {
	BlockMeta *types.BlockMeta `json:"block_meta"`
	Block     *types.Block     `json:"block"`
}

// BlockMeta contains meta information about a block - namely, it's ID and Header.
type BlockMeta struct {
	BlockID BlockID `json:"block_id"` // the block hash and partsethash
	Header  Header  `json:"header"`   // The block's Header
}
// Block defines the atomic unit of a Tendermint blockchain.
type Block struct {
	mtx        sync.Mutex
	Header     `json:"header"`
	Data       `json:"data"`
	Evidence   EvidenceData `json:"evidence"`
	LastCommit *Commit      `json:"last_commit"`
}
```

例子：传入rpcClient.Block方法的高度参数的类型需为*int64

```go
func RPCQueryBlock() (*ctypes.ResultBlock, error) {
	rpcClient := rpcclient.NewHTTP("http://localhost:26657", "/websocket")
	var height int64 = 1
	info, err := rpcClient.Block(&height)
	if err != nil {
		return nil, err
	}
	return info, nil
}
```

返回对象经过json编码后如下：

```json
{
    "block_meta": {
        "block_id": {
            "hash": "FEFD8FC152259B593BBB10F373596D8FE99FBD9A312787A8FC7F006F18FFEE31", 
            "parts": {
                "total": 1, 
                "hash": "17213B987785B6BE3DB8BA77F757BA83524C3123AEFB88BAC96C10A0F14FF48A"
            }
        }, 
        "header": {
            "version": {
                "block": 10, 
                "app": 0
            }, 
            "chain_id": "okchain", 
            "height": 1, 
            "time": "2019-07-11T07:14:56.069027Z", 
            "num_txs": 0, 
            "total_txs": 0, 
            "last_block_id": {
                "hash": "", 
                "parts": {
                    "total": 0, 
                    "hash": ""
                }
            }, 
            "last_commit_hash": "", 
            "data_hash": "", 
            "validators_hash": "FD82E55E4C644C6E11A0EFA52D94D836A2D87A1A6CD22597F7B51E085292F25A", 
            "next_validators_hash": "FD82E55E4C644C6E11A0EFA52D94D836A2D87A1A6CD22597F7B51E085292F25A", 
            "consensus_hash": "048091BC7DDC283F77BFBF91D73C44DA58C3DF8A9CBC867405D8B7F3DAADA22F", 
            "app_hash": "", 
            "last_results_hash": "", 
            "evidence_hash": "", 
            "proposer_address": "F962D5715747BCC99C1D776EC95F110239DFAACE"
        }
    }, 
    "block": {
        "header": {
            "version": {
                "block": 10, 
                "app": 0
            }, 
            "chain_id": "okchain", 
            "height": 1, 
            "time": "2019-07-11T07:14:56.069027Z", 
            "num_txs": 0, 
            "total_txs": 0, 
            "last_block_id": {
                "hash": "", 
                "parts": {
                    "total": 0, 
                    "hash": ""
                }
            }, 
            "last_commit_hash": "", 
            "data_hash": "", 
            "validators_hash": "FD82E55E4C644C6E11A0EFA52D94D836A2D87A1A6CD22597F7B51E085292F25A", 
            "next_validators_hash": "FD82E55E4C644C6E11A0EFA52D94D836A2D87A1A6CD22597F7B51E085292F25A", 
            "consensus_hash": "048091BC7DDC283F77BFBF91D73C44DA58C3DF8A9CBC867405D8B7F3DAADA22F", 
            "app_hash": "", 
            "last_results_hash": "", 
            "evidence_hash": "", 
            "proposer_address": "F962D5715747BCC99C1D776EC95F110239DFAACE"
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
                    "total": 0, 
                    "hash": ""
                }
            }, 
            "precommits": null
        }
    }
}
```

### 区块结果查询

返回结构：

```go
// ABCI results from a block
type ResultBlockResults struct {
	Height  int64                `json:"height"`
	Results *state.ABCIResponses `json:"results"`
}

// ABCIResponses retains the responses
// of the various ABCI calls during block processing.
// It is persisted to disk for each height before calling Commit.
type ABCIResponses struct {
	DeliverTx  []*abci.ResponseDeliverTx
	EndBlock   *abci.ResponseEndBlock
	BeginBlock *abci.ResponseBeginBlock
}
type ResponseDeliverTx struct {
	Code                 uint32          `protobuf:"varint,1,opt,name=code,proto3" json:"code,omitempty"`
	Data                 []byte          `protobuf:"bytes,2,opt,name=data,proto3" json:"data,omitempty"`
	Log                  string          `protobuf:"bytes,3,opt,name=log,proto3" json:"log,omitempty"`
	Info                 string          `protobuf:"bytes,4,opt,name=info,proto3" json:"info,omitempty"`
	GasWanted            int64           `protobuf:"varint,5,opt,name=gas_wanted,json=gasWanted,proto3" json:"gas_wanted,omitempty"`
	GasUsed              int64           `protobuf:"varint,6,opt,name=gas_used,json=gasUsed,proto3" json:"gas_used,omitempty"`
	Tags                 []common.KVPair `protobuf:"bytes,7,rep,name=tags" json:"tags,omitempty"`
	Codespace            string          `protobuf:"bytes,8,opt,name=codespace,proto3" json:"codespace,omitempty"`
	XXX_NoUnkeyedLiteral struct{}        `json:"-"`
	XXX_unrecognized     []byte          `json:"-"`
	XXX_sizecache        int32           `json:"-"`
}
type ResponseEndBlock struct {
	ValidatorUpdates      []ValidatorUpdate `protobuf:"bytes,1,rep,name=validator_updates,json=validatorUpdates" json:"validator_updates"`
	ConsensusParamUpdates *ConsensusParams  `protobuf:"bytes,2,opt,name=consensus_param_updates,json=consensusParamUpdates" json:"consensus_param_updates,omitempty"`
	Tags                  []common.KVPair   `protobuf:"bytes,3,rep,name=tags" json:"tags,omitempty"`
	XXX_NoUnkeyedLiteral  struct{}          `json:"-"`
	XXX_unrecognized      []byte            `json:"-"`
	XXX_sizecache         int32             `json:"-"`
}
type ResponseBeginBlock struct {
	Tags                 []common.KVPair `protobuf:"bytes,1,rep,name=tags" json:"tags,omitempty"`
	XXX_NoUnkeyedLiteral struct{}        `json:"-"`
	XXX_unrecognized     []byte          `json:"-"`
	XXX_sizecache        int32           `json:"-"`
}
```

例子：传入rpcClient.BlockResults方法的高度参数的类型需为*int64。如果高度参数为nil，将返回最近的区块信息。

```go

func RPCQueryBlockResults() (*ctypes.ResultBlockResults, error) {
	rpcClient := rpcclient.NewHTTP("http://localhost:26657", "/websocket")

	var height int64 = 1
	info, err := rpcClient.BlockResults(&height)
	if err != nil {
		return nil, err
	}
	return info, nil
}
```

返回对象经过json编码后如下：

```json
{
    "height": 1, 
    "results": {
        "DeliverTx": null, 
        "EndBlock": {
            "validator_updates": null, 
            "tags": [
                {
                    "key": "YXBwX3ZlcnNpb24=", 
                    "value": "MA=="
                }
            ]
        }, 
        "BeginBlock": { }
    }
}
```

### 区块链信息查询

返回结构：

```go
// List of blocks
type ResultBlockchainInfo struct {
	LastHeight int64              `json:"last_height"`
	BlockMetas []*types.BlockMeta `json:"block_metas"`
}

// BlockMeta contains meta information about a block - namely, it's ID and Header.
type BlockMeta struct {
	BlockID BlockID `json:"block_id"` // the block hash and partsethash
	Header  Header  `json:"header"`   // The block's Header
}
// BlockID defines the unique ID of a block as its Hash and its PartSetHeader
type BlockID struct {
	Hash        cmn.HexBytes  `json:"hash"`
	PartsHeader PartSetHeader `json:"parts"`
}
/ Header defines the structure of a Tendermint block header.
// NOTE: changes to the Header should be duplicated in:
// - header.Hash()
// - abci.Header
// - /docs/spec/blockchain/blockchain.md
type Header struct {
	// basic block info
	Version  version.Consensus `json:"version"`
	ChainID  string            `json:"chain_id"`
	Height   int64             `json:"height"`
	Time     time.Time         `json:"time"`
	NumTxs   int64             `json:"num_txs"`
	TotalTxs int64             `json:"total_txs"`
	// prev block info
	LastBlockID BlockID `json:"last_block_id"`
	// hashes of block data
	LastCommitHash cmn.HexBytes `json:"last_commit_hash"` // commit from validators from the last block
	DataHash       cmn.HexBytes `json:"data_hash"`        // transactions
	// hashes from the app output from the prev block
	ValidatorsHash     cmn.HexBytes `json:"validators_hash"`      // validators for the current block
	NextValidatorsHash cmn.HexBytes `json:"next_validators_hash"` // validators for the next block
	ConsensusHash      cmn.HexBytes `json:"consensus_hash"`       // consensus params for current block
	AppHash            cmn.HexBytes `json:"app_hash"`             // state after txs from the previous block
	LastResultsHash    cmn.HexBytes `json:"last_results_hash"`    // root hash of all results from the txs from the previous block
	// consensus info
	EvidenceHash    cmn.HexBytes `json:"evidence_hash"`    // evidence included in the block
	ProposerAddress Address      `json:"proposer_address"` // original proposer of the block
}
```

例子：minHeight,maxHeight为查询高度的上下阈值，类型须为int64。

```go
func RPCQueryBlockchainInfo() (*ctypes.ResultBlockchainInfo, error) {
	rpcClient := rpcclient.NewHTTP("http://localhost:26657", "/websocket")
	var minHeight,maxHeight int64 = 1,4
	info, err := rpcClient.BlockchainInfo(minHeight,maxHeight)
	if err != nil {
		return nil, err
	}
	return info, nil
}
```

返回对象经过json编码后如下：

```json
{
    "last_height": 825403, 
    "block_metas": [
        {
            "block_id": {
                "hash": "3E8031C0CA6FB2A67581B73E24D86F94CCF344A4E48F695262A7A667EC583CDE", 
                "parts": {
                    "total": 1, 
                    "hash": "76E8A205DC86D552D283028A4D53ED90BB018E583AC2A30E1B57CB2BAF038880"
                }
            }, 
            "header": {
                "version": {
                    "block": 10, 
                    "app": 0
                }, 
                "chain_id": "okchain", 
                "height": 4, 
                "time": "2019-07-11T07:14:59.804844Z", 
                "num_txs": 0, 
                "total_txs": 0, 
                "last_block_id": {
                    "hash": "DD20872776FF8D25509ACC72580779EEF4F276C3B65890B8BACEB2FDA107C54F", 
                    "parts": {
                        "total": 1, 
                        "hash": "FB2E5E9185AC769475E34B1A17C4D306AAC7546355016521541DF5FE64DCBCAE"
                    }
                }, 
                "last_commit_hash": "56108EF39DE6FAF247CE1687810C712E81945B11B3C2E1853BFE0D636BF25F3B", 
                "data_hash": "", 
                "validators_hash": "FD82E55E4C644C6E11A0EFA52D94D836A2D87A1A6CD22597F7B51E085292F25A", 
                "next_validators_hash": "FD82E55E4C644C6E11A0EFA52D94D836A2D87A1A6CD22597F7B51E085292F25A", 
                "consensus_hash": "048091BC7DDC283F77BFBF91D73C44DA58C3DF8A9CBC867405D8B7F3DAADA22F", 
                "app_hash": "EDAA0FD3A7603A3C97552A2515BA69970EE162043C139EA503AE01C20574B8FE", 
                "last_results_hash": "", 
                "evidence_hash": "", 
                "proposer_address": "F962D5715747BCC99C1D776EC95F110239DFAACE"
            }
        }, 
        {
            "block_id": {
                "hash": "DD20872776FF8D25509ACC72580779EEF4F276C3B65890B8BACEB2FDA107C54F", 
                "parts": {
                    "total": 1, 
                    "hash": "FB2E5E9185AC769475E34B1A17C4D306AAC7546355016521541DF5FE64DCBCAE"
                }
            }, 
            "header": {
                "version": {
                    "block": 10, 
                    "app": 0
                }, 
                "chain_id": "okchain", 
                "height": 3, 
                "time": "2019-07-11T07:14:58.729771Z", 
                "num_txs": 0, 
                "total_txs": 0, 
                "last_block_id": {
                    "hash": "FB415FC616B6D594E7CB4747AB31C9DE870D5EA84469B7F82A66A7DD4B718962", 
                    "parts": {
                        "total": 1, 
                        "hash": "5542632012BB26642CDAFB5D947037830DDD50A4FBA88FC4627018BFD853CE5E"
                    }
                }, 
                "last_commit_hash": "4F6E2197353938323E6BC90FFF9D1146449775866CB04ED400AF3A2C9E2BC07C", 
                "data_hash": "", 
                "validators_hash": "FD82E55E4C644C6E11A0EFA52D94D836A2D87A1A6CD22597F7B51E085292F25A", 
                "next_validators_hash": "FD82E55E4C644C6E11A0EFA52D94D836A2D87A1A6CD22597F7B51E085292F25A", 
                "consensus_hash": "048091BC7DDC283F77BFBF91D73C44DA58C3DF8A9CBC867405D8B7F3DAADA22F", 
                "app_hash": "D138252A92B949FD8FD21A8B54F99A14EA0B17C9F9353070365C7A2D341AEE5F", 
                "last_results_hash": "", 
                "evidence_hash": "", 
                "proposer_address": "F962D5715747BCC99C1D776EC95F110239DFAACE"
            }
        }, 
        {
            "block_id": {
                "hash": "FB415FC616B6D594E7CB4747AB31C9DE870D5EA84469B7F82A66A7DD4B718962", 
                "parts": {
                    "total": 1, 
                    "hash": "5542632012BB26642CDAFB5D947037830DDD50A4FBA88FC4627018BFD853CE5E"
                }
            }, 
            "header": {
                "version": {
                    "block": 10, 
                    "app": 0
                }, 
                "chain_id": "okchain", 
                "height": 2, 
                "time": "2019-07-11T07:14:57.658193Z", 
                "num_txs": 0, 
                "total_txs": 0, 
                "last_block_id": {
                    "hash": "FEFD8FC152259B593BBB10F373596D8FE99FBD9A312787A8FC7F006F18FFEE31", 
                    "parts": {
                        "total": 1, 
                        "hash": "17213B987785B6BE3DB8BA77F757BA83524C3123AEFB88BAC96C10A0F14FF48A"
                    }
                }, 
                "last_commit_hash": "6570E20C8B81FF87CE2F5DB8726313DF59B792B68281FB46D0BE39E1172017AF", 
                "data_hash": "", 
                "validators_hash": "FD82E55E4C644C6E11A0EFA52D94D836A2D87A1A6CD22597F7B51E085292F25A", 
                "next_validators_hash": "FD82E55E4C644C6E11A0EFA52D94D836A2D87A1A6CD22597F7B51E085292F25A", 
                "consensus_hash": "048091BC7DDC283F77BFBF91D73C44DA58C3DF8A9CBC867405D8B7F3DAADA22F", 
                "app_hash": "77EC23460F6C94749F871B34F66E40535598AE45642A04A015EBDE53D7DCFE22", 
                "last_results_hash": "", 
                "evidence_hash": "", 
                "proposer_address": "F962D5715747BCC99C1D776EC95F110239DFAACE"
            }
        }, 
        {
            "block_id": {
                "hash": "FEFD8FC152259B593BBB10F373596D8FE99FBD9A312787A8FC7F006F18FFEE31", 
                "parts": {
                    "total": 1, 
                    "hash": "17213B987785B6BE3DB8BA77F757BA83524C3123AEFB88BAC96C10A0F14FF48A"
                }
            }, 
            "header": {
                "version": {
                    "block": 10, 
                    "app": 0
                }, 
                "chain_id": "okchain", 
                "height": 1, 
                "time": "2019-07-11T07:14:56.069027Z", 
                "num_txs": 0, 
                "total_txs": 0, 
                "last_block_id": {
                    "hash": "", 
                    "parts": {
                        "total": 0, 
                        "hash": ""
                    }
                }, 
                "last_commit_hash": "", 
                "data_hash": "", 
                "validators_hash": "FD82E55E4C644C6E11A0EFA52D94D836A2D87A1A6CD22597F7B51E085292F25A", 
                "next_validators_hash": "FD82E55E4C644C6E11A0EFA52D94D836A2D87A1A6CD22597F7B51E085292F25A", 
                "consensus_hash": "048091BC7DDC283F77BFBF91D73C44DA58C3DF8A9CBC867405D8B7F3DAADA22F", 
                "app_hash": "", 
                "last_results_hash": "", 
                "evidence_hash": "", 
                "proposer_address": "F962D5715747BCC99C1D776EC95F110239DFAACE"
            }
        }
    ]
}
```

### 提交查询

返回结构：

```go
// Commit and Header
type ResultCommit struct {
	types.SignedHeader `json:"signed_header"`
	CanonicalCommit    bool `json:"canonical"`
}

// SignedHeader is a header along with the commits that prove it.
// It is the basis of the lite client.
type SignedHeader struct {
	*Header `json:"header"`
	Commit  *Commit `json:"commit"`
}
```

例子：传入rpcClient.Commit方法的高度参数的类型需为*int64

```go
func RPCQueryCommit() (*ctypes.ResultCommit, error) {
	rpcClient := rpcclient.NewHTTP("http://localhost:26657", "/websocket")
	var height int64 = 10
	info, err := rpcClient.Commit(&height)
	if err != nil {
		return nil, err
	}
	return info, nil
}
```

返回对象经过json编码后如下：

```json
{
    "signed_header": {
        "header": {
            "version": {
                "block": 10, 
                "app": 0
            }, 
            "chain_id": "okchain", 
            "height": 10, 
            "time": "2019-07-11T07:15:06.418041Z", 
            "num_txs": 0, 
            "total_txs": 0, 
            "last_block_id": {
                "hash": "A6BCBBF5C9F6141C6AF5C74DBAF7C6E3A5CFDE2CEC7973A84F0E1A8DB769B3F6", 
                "parts": {
                    "total": 1, 
                    "hash": "4EED269CFF67F9F018CD63512CC7A598AE54AD9642E04E70EE39B5673CDF113E"
                }
            }, 
            "last_commit_hash": "B4308FD9A4AE45CF0265C288CD672E99E725ED3BA958471ACD167F24FB9B671E", 
            "data_hash": "", 
            "validators_hash": "FD82E55E4C644C6E11A0EFA52D94D836A2D87A1A6CD22597F7B51E085292F25A", 
            "next_validators_hash": "FD82E55E4C644C6E11A0EFA52D94D836A2D87A1A6CD22597F7B51E085292F25A", 
            "consensus_hash": "048091BC7DDC283F77BFBF91D73C44DA58C3DF8A9CBC867405D8B7F3DAADA22F", 
            "app_hash": "7813B3F3D69D701A7466D354B480E90ABB9344E74AA120BAF3513B2E5DC8FBF3", 
            "last_results_hash": "", 
            "evidence_hash": "", 
            "proposer_address": "F962D5715747BCC99C1D776EC95F110239DFAACE"
        }, 
        "commit": {
            "block_id": {
                "hash": "D657051F35E48BA58F40AB86CFA2A88EC3439E4EF3BC871DCBB3109332FCFAFD", 
                "parts": {
                    "total": 1, 
                    "hash": "098DE8D5DBC4A0D18E30AE1BEACBB0E5EE119DADC2D2978C5165DDA4E16A0196"
                }
            }, 
            "precommits": [
                {
                    "type": 2, 
                    "height": 10, 
                    "round": 0, 
                    "block_id": {
                        "hash": "D657051F35E48BA58F40AB86CFA2A88EC3439E4EF3BC871DCBB3109332FCFAFD", 
                        "parts": {
                            "total": 1, 
                            "hash": "098DE8D5DBC4A0D18E30AE1BEACBB0E5EE119DADC2D2978C5165DDA4E16A0196"
                        }
                    }, 
                    "timestamp": "2019-07-11T07:15:07.532987Z", 
                    "validator_address": "F962D5715747BCC99C1D776EC95F110239DFAACE", 
                    "validator_index": 0, 
                    "signature": "V452hh65fMqRRJcHH+lbKGxGAKTYg8yeslWAlkMpZGvSSXb3cWhH4UwuWMKGi10zbF28JJKz+fwirHinHkodDA=="
                }
            ]
        }
    }, 
    "canonical": true
}
```

### 交易查询

返回结构：

```go
// Result of querying for a tx
type ResultTx struct {
	Hash     cmn.HexBytes           `json:"hash"`
	Height   int64                  `json:"height"`
	Index    uint32                 `json:"index"`
	TxResult abci.ResponseDeliverTx `json:"tx_result"`
	Tx       types.Tx               `json:"tx"`
	Proof    types.TxProof          `json:"proof,omitempty"`
}
```

例子：传入rpcClient.Tx方法的参数txHash必须为hex解码后的字节切片，prove为布尔类型，默认为false。

```go
func RPCQueryTx() (*ctypes.ResultTx, error) {
	rpcClient := rpcclient.NewHTTP("http://localhost:26657", "/websocket")
	prove := true
	txHash, err := hex.DecodeString("30B37C25111FB34B1187DD1930BF930AD142D25E5E7F70EEC059323EF7E4422A")
	if err != nil {
		return nil, err
	}
	info, err := rpcClient.Tx(txHash, prove)
	if err != nil {
		return nil, err
	}
	return info, nil
}
```

返回对象经过json编码后如下：

```json
{
    "hash": "30B37C25111FB34B1187DD1930BF930AD142D25E5E7F70EEC059323EF7E4422A", 
    "height": 755553, 
    "index": 0, 
    "tx_result": {
        "log": "[{\"msg_index\":\"0\",\"success\":true,\"log\":\"\"}]", 
        "gasUsed": "40935", 
        "tags": [
            {
                "key": "ZmVl", 
                "value": "MA=="
            }, 
            {
                "key": "b3JkZXJJZA==", 
                "value": "SUQwMDAwNzU1NTUzLTE="
            }, 
            {
                "key": "YmF0Y2hOdW1iZXI=", 
                "value": "MQ=="
            }
        ]
    }, 
    "tx": "0QHwYl3uCj7GHZiTChQvqTZvbQV7A60cZ8w3vAS+221V/hIHeHhiX29rYhoDQlVZIgkxMTAwMDAwMDAqCTEyMzAwMDAwMBJqCibrWumHIQPfQB98ATsUVyG+G7hCkcU6Rsw9v8W3GflCfltNgAePGRJA2g9lmd68G+japEJ5WJbRBG88mJv54bUPwqnrTWbZYBk6qgkmmYmcp2fjJYKBh/gPyxihtAgN0C08J8VU3q0VOBofSSBsb3ZlIHUgc28gSSBwbGFjZSBhIG5ldyBvcmRlcg==", 
    "proof": {
        "RootHash": "24DF87A35035B223BD115C43AB9078E47A74E4E200CD4DBF4FD255C46FA96D61", 
        "Data": "0QHwYl3uCj7GHZiTChQvqTZvbQV7A60cZ8w3vAS+221V/hIHeHhiX29rYhoDQlVZIgkxMTAwMDAwMDAqCTEyMzAwMDAwMBJqCibrWumHIQPfQB98ATsUVyG+G7hCkcU6Rsw9v8W3GflCfltNgAePGRJA2g9lmd68G+japEJ5WJbRBG88mJv54bUPwqnrTWbZYBk6qgkmmYmcp2fjJYKBh/gPyxihtAgN0C08J8VU3q0VOBofSSBsb3ZlIHUgc28gSSBwbGFjZSBhIG5ldyBvcmRlcg==", 
        "Proof": {
            "total": 1, 
            "index": 0, 
            "leaf_hash": "JN+Ho1A1siO9EVxDq5B45Hp05OIAzU2/T9JVxG+pbWE=", 
            "aunts": null
        }
    }
}
```

注：该返回结果中有许多信息是经过amino编码的。如果需要提取其内部信息，需要人工进行amino解码。

### 某一高度上的所有交易查询

返回结构：

```go
// Result of searching for txs
type ResultTxSearch struct {
	Txs        []*ResultTx `json:"txs"`
	TotalCount int         `json:"total_count"`
}

// Result of querying for a tx
type ResultTx struct {
	Hash     cmn.HexBytes           `json:"hash"`
	Height   int64                  `json:"height"`
	Index    uint32                 `json:"index"`
	TxResult abci.ResponseDeliverTx `json:"tx_result"`
	Tx       types.Tx               `json:"tx"`
	Proof    types.TxProof          `json:"proof,omitempty"`
}
```

例子：传入rpcClient.TxSearch方法的参数query是表示要查询高度的字符串，prove为布尔类型，默认为false。page和perPage默认为1和30。

```go
func RPCQueryTxOnHeight() (*ctypes.ResultTxSearch, error) {
	rpcClient := rpcclient.NewHTTP("http://localhost:26657", "/websocket")
	prove := true
	info, err := rpcClient.TxSearch("tx.height=755553", prove, 1, 30)
	if err != nil {
		return nil, err
	}
	return info, nil
}
```

返回对象经过json编码后如下：

```json
{
    "txs": [
        {
            "hash": "30B37C25111FB34B1187DD1930BF930AD142D25E5E7F70EEC059323EF7E4422A", 
            "height": 755553, 
            "index": 0, 
            "tx_result": {
                "log": "[{\"msg_index\":\"0\",\"success\":true,\"log\":\"\"}]", 
                "gasUsed": "40935", 
                "tags": [
                    {
                        "key": "ZmVl", 
                        "value": "MA=="
                    }, 
                    {
                        "key": "b3JkZXJJZA==", 
                        "value": "SUQwMDAwNzU1NTUzLTE="
                    }, 
                    {
                        "key": "YmF0Y2hOdW1iZXI=", 
                        "value": "MQ=="
                    }
                ]
            }, 
            "tx": "0QHwYl3uCj7GHZiTChQvqTZvbQV7A60cZ8w3vAS+221V/hIHeHhiX29rYhoDQlVZIgkxMTAwMDAwMDAqCTEyMzAwMDAwMBJqCibrWumHIQPfQB98ATsUVyG+G7hCkcU6Rsw9v8W3GflCfltNgAePGRJA2g9lmd68G+japEJ5WJbRBG88mJv54bUPwqnrTWbZYBk6qgkmmYmcp2fjJYKBh/gPyxihtAgN0C08J8VU3q0VOBofSSBsb3ZlIHUgc28gSSBwbGFjZSBhIG5ldyBvcmRlcg==", 
            "proof": {
                "RootHash": "24DF87A35035B223BD115C43AB9078E47A74E4E200CD4DBF4FD255C46FA96D61", 
                "Data": "0QHwYl3uCj7GHZiTChQvqTZvbQV7A60cZ8w3vAS+221V/hIHeHhiX29rYhoDQlVZIgkxMTAwMDAwMDAqCTEyMzAwMDAwMBJqCibrWumHIQPfQB98ATsUVyG+G7hCkcU6Rsw9v8W3GflCfltNgAePGRJA2g9lmd68G+japEJ5WJbRBG88mJv54bUPwqnrTWbZYBk6qgkmmYmcp2fjJYKBh/gPyxihtAgN0C08J8VU3q0VOBofSSBsb3ZlIHUgc28gSSBwbGFjZSBhIG5ldyBvcmRlcg==", 
                "Proof": {
                    "total": 1, 
                    "index": 0, 
                    "leaf_hash": "JN+Ho1A1siO9EVxDq5B45Hp05OIAzU2/T9JVxG+pbWE=", 
                    "aunts": null
                }
            }
        }
    ], 
    "total_count": 1
}
```

注：该返回结果中有许多信息是经过amino编码的。如果需要提取其内部信息，需要人工进行amino解码。

