# Websocket API

Since OKBC uses Tendermint Core as it's consensus Engine and it's built with the Cosmos
SDK framework, it inherits the event format from them. However, in order to support the native Web3
compatibility for websockets of the [Ethereum's
PubSubAPI](https://geth.ethereum.org/docs/rpc/pubsub), OKBC needs to cast the Tendermint
responses retreived into the Ethereum types.

You can start a connection with the Ethereum websocket using the `--wsport` flag when initializing
the REST server (default `8546`):

```bash
okbchaind start --rest.laddr "tcp://localhost:8545" --wsport 8546 --chain-id <chain_id>
```
Then, start a websocket subscription with [ws](https://github.com/hashrocket/ws), or something else websocket clients

```bash
# connect to websocet at port 8546 as defined above
ws ws://localhost:8443/

# subscribe to new Ethereum-formatted block Headers
> {"id": 1, "method": "eth_subscribe", "params": ["newHeads"]}
< {"jsonrpc":"2.0","result":"0x65eca2989ce064d141862c8b7138c1e","id":1}
```
## Mainnet and Testnet Websocket URL
```shell
# Mainnet Websocket URL (Available after mainnet launch)
wss://okbws.okx.org:8443
wss://okbws.okbchain.org:8443

## Testnet Websocket URL
wss://okbtestws.okx.org:8443
wss://okbtestws.okbchain.org:8443
```


## Create subscription

Subscriptions are created with a regular RPC call with `eth_subscribe` as method and the
subscription name as first parameter. If successful it returns the subscription id.

### Parameters

1. subscription name
2. optional arguments

### Example

    >> {"id": 1, "method": "eth_subscribe", "params": ["newHeads"]}
    << {"id": 1, "jsonrpc": "2.0", "result": "0x65eca2989ce064d141862c8b7138c1e"}

## Cancel subscription

Subscriptions are cancelled with a regular RPC call with `eth_unsubscribe` as method and
the subscription id as first parameter. It returns a bool indicating if the subscription
was cancelled successful.

### Parameters
1. subscription id

### Example

    >> {"id": 1, "method": "eth_unsubscribe", "params": ["0x65eca2989ce064d141862c8b7138c1e"]}
    << {"jsonrpc":"2.0","id":1,"result":true}

## Supported Subscriptions

### newHeads

Fires a notification each time a new header is appended to the chain, including chain reorganizations.

#### Parameters

none

#### Example

    >> {"id": 1, "method": "eth_subscribe", "params": ["newHeads"]}
    << {"jsonrpc":"2.0","id":1,"result":"0x8d8da2cf77034710fc9db27b84096ff4"}

    << {
             "jsonrpc":"2.0",
             "method":"eth_subscription",
             "params":{
                 "subscription":"0x8d8da2cf77034710fc9db27b84096ff4",
                 "result":{
                     "parentHash":"0x6b5370fc46258fc75873ab349e20938503420ac85972f099ef44d161f649bb24",
                     "sha3Uncles":"0x0000000000000000000000000000000000000000000000000000000000000000",
                     "miner":"0xcb0c1b8373c74ba220fa146af3683f9bddbd002a",
                     "stateRoot":"0x7fef85048a21ae64debb7dd6be4ebbdf352316dc733b7de1382a09bef48dfc20",
                     "transactionsRoot":"0x030a84248f747f323902c642c97c7717aef4488343dbb4e6160d71e7a1d3a8bc",
                     "receiptsRoot":"0x0000000000000000000000000000000000000000000000000000000000000000",
                     "logsBloom":"0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
                     "difficulty":null,
                     "number":"0x17d0fd",
                     "gasLimit":"0x0",
                     "gasUsed":"0x0",
                     "timestamp":"0x605ab548",
                     "extraData":"0x",
                     "mixHash":"0x0000000000000000000000000000000000000000000000000000000000000000",
                     "nonce":"0x0000000000000000",
                     "hash":"0x364651987194d173cb5866f278185578bc6198f3119b378ac1040940ac2a605c"
                 }
             }
        }

### logs

Returns logs that are included in new imported blocks and match the given filter criteria.

In case of a chain reorganization previous sent logs that are on the old chain will be resend with the `removed` property set to true. Logs from transactions that ended up in the new chain are emitted. Therefore a subscription can emit logs for the same transaction multiple times.

#### Parameters

1. `object` with the following (optional) fields
    - **address**, either an address or an array of addresses. Only logs that are created from these addresses are returned (optional)
    - **topics**, only logs which match the specified topics (optional)


#### Example

    >> {"jsonrpc":"2.0","method":"eth_subscribe","params":["logs",{"address":["0xe922ff7b02672bb59a64b90864fc5e511ad4d5fa"],"topics":[["0xd78ad95fa46c994b6551d0da85fc275fe613ce37657fb8d5e3d130840159d822"]]}],"id":0}
    << {"jsonrpc":"2.0","id":1,"result":"0x9a65e76405f5a0a0ada9715f8366ec18"}

    << {
             "jsonrpc":"2.0",
             "method":"eth_subscription",
             "params":{
                 "subscription":"0x9a65e76405f5a0a0ada9715f8366ec18",
                 "result":{
                     "address":"0xe922ff7b02672bb59a64b90864fc5e511ad4d5fa",
                     "topics":[
                         "0xd78ad95fa46c994b6551d0da85fc275fe613ce37657fb8d5e3d130840159d822",
                         "0x0000000000000000000000002ca0e1278b9d7a967967d3c707b81c72fc180caf",
                         "0x0000000000000000000000002b5cf24aebce90f0b8f80bc42603157b27cfbf47"
                     ],
                     "data":"0x00000000000000000000000000000000000000000000000000000000000003e80000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000136f8",
                     "blockNumber":"0x17a0d4",
                     "transactionHash":"0x83d2cc8694853f45bc4b903ec1a0e612d3e080321bb6bb18ab97291c26f5bd99",
                     "transactionIndex":"0x0",
                     "blockHash":"0x21217e1c121c6e444fca3c35ab80193cd414719729016dea11edbffa9e78a794",
                     "logIndex":"0x3",
                     "removed":false
                 }
             }
        }

### newPendingTransactions

Returns the hash for all transactions that are added to the pending state and are signed with a key that is available in the node.

When a transaction that was previously part of the canonical chain isn't part of the new canonical chain after a reogranization its again emitted.

#### Parameters

none

#### Example

    >> {"id": 1, "method": "eth_subscribe", "params": ["newPendingTransactions"]}
    << {"jsonrpc":"2.0","id":2,"result":"0x27a643e2fe1980f81a9c10deadeb3d0e"}
    << {
            "jsonrpc":"2.0",
            "method":"eth_subscription",
            "params":{
                "subscription":"0x27a643e2fe1980f81a9c10deadeb3d0e",
                "result":"0x0fd95e97732c5f5ee03e2504c5d83d26fcc2721830dc8fb2671f090670b58469"
            }
       }

### syncing

Indicates when the node starts or stops synchronizing. The result can either be a boolean
indicating that the synchronization has started (true), finished (false) or an object with
various progress indicators.

#### Parameters

none

#### Example

    >> {"id": 1, "method": "eth_subscribe", "params": ["syncing"]}
    << {"jsonrpc":"2.0","id":1,"result":"0xbf810a9285793bfb639d15cf0be32e94"}

    << {
          "jsonrpc":"2.0",
          "method":"eth_subscription",
          "params":{
              "subscription":"0xbf810a9285793bfb639d15cf0be32e94",
              "result":{
                  "currentBlock":"0x179fb7",
                  "highestBlock":"0x0",
                  "startingBlock":"0x111e1b"
              }
          }
       }
