# Overview
This document explains how to use OKBC JSON-RPC APIs.
>Mainnet will be available after it is launched. Please try Testnet at the moment.

## Testnet
- chain-id: 0xC3
- 195 in decimal
- https://okbtestrpc.okbchain.org/

## Mainnet
- chain-id: 0xC4
- 196 in decimal
- https://okbrpc.okbchain.org/

## 3rd Party Provider
Currently there is no 3rd party provider for OKBC RPC. However, you can set up your RPC node based on our [hardware requirement](/dev/maintain/run-a-node/node-overview/hardware-requirement.html).

## Pre-requisite Readings
- [Ethereum JSON-RPC](https://eth.wiki/json-rpc/API "Ethereum JSON-RPC")

## Start HTTP JSON-RPC
We recommend you to start the HTTP JSON-RPC with curl.

    ## mainnetcurl -X POST --data '{"jsonrpc":"2.0","method":"eth_blockNumber","params":[],"id":1}' -H "Content-Type: application/json" https://okbrpc.okbchain.org/
        
    ## testnetcurl -X POST --data '{"jsonrpc":"2.0","method":"eth_blockNumber","params":[],"id":1}' -H "Content-Type: application/json" https://okbtestrpc.okbchain.org/

Moreover, you also can start the HTTP JSON-RPC with geth. For getting geth, you can [download](https://geth.ethereum.org/downloads "download") or build it with the [source](https://github.com/ethereum/go-ethereum "source")

    ## mainnet
    geth attach https://okbrpc.okbchain.org/
    ## testnet
    geth attach https://okbtestrpc.okbchain.org/
    
        
## JSON-RPC Methods

| Method                                                                            | Namespace | If supported by OKBC | Notes        |
|-----------------------------------------------------------------------------------|-----------|-------------|---------------------------|
| [`web3_clientVersion`](#web3-clientversion)                                       | Web3      | supported           | Get the web3 client version. |
| [`web3_sha3`](#web3-sha3)                                                         | Web3      | supported           | Returns Keccak-256 (not the standardized SHA3-256) of the given data. |
| [`net_version`](#net-version)                                                     | Net       | supported           | Returns the current network id. |
| `net_peerCount`                                                                   | Net       | not supported       | - |
| `net_listening`                                                                   | Net       | not supported       | - |
| [`eth_protocolVersion`](#eth-protocolversion)                                     | Eth       | supported           | Returns the current ethereum protocol version. |
| [`eth_syncing`](#eth-syncing)                                                     | Eth       | supported           | The sync status object may need to be different depending on the details of Tendermint's sync protocol. |
| [`eth_gasPrice`](#eth-gasprice)                                                   | Eth       | supported           | Returns the current gas price in OKB. |
| [`eth_accounts`](#eth-accounts)                                                   | Eth       | supported           | Returns array of all eth accounts. |
| [`eth_blockNumber`](#eth-blocknumber)                                             | Eth       | supported           | Returns the current block height. |
| [`eth_chainId`](#eth_chainId)                                                     | Eth       | supported           | Returns the chain's identifier in hex format. |
| [`eth_getBalance`](#eth-getbalance)                                               | Eth       | supported           | Returns the account balance for a given account address and Block Number. |
| [`eth_getStorageAt`](#eth-getstorageat)                                           | Eth       | supported           | Returns the storage address for a given account address. |
| [`eth_getTransactionCount`](#eth-gettransactioncount)                             | Eth       | supported           | Returns the total transaction for a given account address and Block Number. |
| [`eth_getBlockTransactionCountByNumber`](#eth-getblocktransactioncountbynumber)   | Eth       | supported           | Returns the total transaction count for a given block number. |
| [`eth_getBlockTransactionCountByHash`](#eth-getblocktransactioncountbyhash)       | Eth       | supported           | Returns the total transaction count for a given block hash. |
| [`eth_getCode`](#eth-getcode)                                                     | Eth       | supported           | Returns the code for a given account address and Block Number. |
| [`eth_sign`](#eth-sign)                                                           | Eth       | supported           | The sign method calculates an Ethereum specific signature. |
| [`eth_sendTransaction`](#eth-sendtransaction)                                     | Eth       | supported           | Sends transaction from given account to a given account. |
| [`eth_sendRawTransaction`](#eth-sendrawtransaction)                               | Eth       | supported           | Creates new message call transaction or a contract creation for signed transactions. |
| [`eth_call`](#eth-call)                                                           | Eth       | supported           | Executes a new message call immediately without creating a transaction on the block chain. |
| [`eth_estimateGas`](#eth-estimategas)                                             | Eth       | supported           | Returns an estimate value of the gas required to send the transaction. |
| [`eth_getBlockByNumber`](#eth-getblockbynumber)                                   | Eth       | supported           | Returns information about a block by block number. |
| [`eth_getBlockByHash`](#eth-getblockbyhash)                                       | Eth       | supported           | Returns the block info given the hash found in the command above and a bool. |
| [`eth_getTransactionByHash`](#eth-gettransactionbyhash)                           | Eth       | supported           | Returns transaction details given the ethereum tx something. |
| [`eth_getTransactionByBlockHashAndIndex`](#eth-gettransactionbyblockhashandindex) | Eth       | supported           | Returns transaction details given the block hash and the transaction index. |
| [`eth_getTransactionReceipt`](#eth-gettransactionreceipt)                         | Eth       | supported           | Returns the receipt of a transaction by transaction hash. |
| [`eth_newFilter`](#eth-newfilter)                                                 | Eth       | supported           | Create new filter using topics of some kind. |
| [`eth_newBlockFilter`](#eth-newblockfilter)                                       | Eth       | supported           | Creates a filter in the node, to notify when a new block arrives. |
| [`eth_newPendingTransactionFilter`](#eth-newpendingtransactionfilter)             | Eth       | supported           | Creates a filter in the node, to notify when new pending transactions arrive. |
| [`eth_uninstallFilter`](#eth-uninstallfilter)                                     | Eth       | supported           | Removes the filter with the given filter id. |
| [`eth_getFilterChanges`](#eth-getfilterchanges)                                   | Eth       | supported           | Polling method for a filter, which returns an array of logs which occurred since last poll. |
| [`eth_getLogs`](#eth-getlogs)                                                     | Eth       | supported           | Returns an array of all logs matching a given filter object. |
| [`eth_getFilterLogs`](#eth_getFilterLogs)                                         | Eth       | supported           | Returns an array of all logs matching filter with given id. |
| [`eth_getTransactionLogs`](#eth_getTransactionLogs)                               | Eth       | supported           | Returns the logs with given a transaction hash |
| [`eth_getTransactionbyBlockNumberAndIndex`](#eth-gettransactionbyblocknumberandindex) | Eth   | supported            | Return transaction details by block height and block index. |
| `eth_getWork`                                                                     | Eth       | not supported            | - |
| `eth_submitWork`                                                                  | Eth       | not supported            | - |
| `eth_submitHashrate`                                                              | Eth       | not supported            | - |
| `eth_getCompilers`                                                                | Eth       | not supported            | - |
| `eth_compileLLL`                                                                  | Eth       | not supported            | - |
| `eth_compileSolidity`                                                             | Eth       | not supported            | - |
| `eth_compileSerpent`                                                              | Eth       | not supported            | - |
| `eth_signTransaction`                                                             | Eth       | not supported            | - |
| `eth_mining`                                                                      | Eth       | not supported         | - |
| `eth_coinbase`                                                                    | Eth       | not supported         | - |
| `eth_hashrate`                                                                    | Eth       | not supported         | - |
| `eth_getUncleCountByBlockHash`                                                    | Eth       | not supported         | - |
| `eth_getUncleCountByBlockNumber`                                                  | Eth       | not supported         | - |
| `eth_getUncleByBlockHashAndIndex`                                                 | Eth       | not supported         | - |
| `eth_getUncleByBlockNumberAndIndex`                                               | Eth       | not supported         | - |
| [`eth_subscribe`](#eth-subscribe)                                                 | Websocket | supported           | Subscribe using JSON-RPC notifications. |
| [`eth_unsubscribe`](#eth-unsubscribe)                                             | Websocket | supported           | Unsubscribe from an event using the subscription id |
| [`personal_importRawKey`](#personal-importrawkey)                                 | Personal  | supported           | Imports the given unencrypted private key (hex string) into the key store, encrypting it with the passphrase. |
| [`personal_listAccounts`](#personal-listaccounts)                                 | Personal  | supported           | Returns a list of addresses for accounts this node manages. |
| [`personal_lockAccount`](#personal-lockaccount)                                   | Personal  | supported           | Removes the private key with given address from memory. |
| [`personal_newAccount`](#personal-newaccount)                                     | Personal  | supported           | Generates a new private key and stores it in the key store directory. |
| [`personal_unlockAccount`](#personal-unlockaccount)                               | Personal  | supported           | Decrypts the key with the given address from the key store. |
| [`personal_sendTransaction`](#personal-sendtransaction)                           | Personal  | supported           | Validate the given passphrase and submit transaction. |
| [`personal_sign`](#personal-sign)                                                 | Personal  | supported           | The sign method calculates an Ethereum specific signature. |
| [`personal_ecRecover`](#personal-ecrecover)                                       | Personal  | supported           | ecRecover returns the address associated with the private key that was used to calculate the signature in personal_sign. |
| `db_putString`                                                                    | DB        | not supported            | - |
| `db_getString`                                                                    | DB        | not supported            | - |
| `db_putHex`                                                                       | DB        | not supported            | - |
| `db_getHex`                                                                       | DB        | not supported            | - |
| `shh_post`                                                                        | SSH       | not supported            | - |
| `shh_version`                                                                     | SSH       | not supported            | - |
| `shh_newIdentity`                                                                 | SSH       | not supported            | - |
| `shh_hasIdentity`                                                                 | SSH       | not supported            | - |
| `shh_newGroup`                                                                    | SSH       | not supported            | - |
| `shh_addToGroup`                                                                  | SSH       | not supported            | - |
| `shh_newFilter`                                                                   | SSH       | not supported            | - |
| `shh_uninstallFilter`                                                             | SSH       | not supported            | - |
| `shh_getFilterChanges`                                                            | SSH       | not supported            | - |
| `shh_getMessages`                                                                 | SSH       | not supported            | - |
| `admin_addPeer`                                                                   | Admin     | not supported            | - |
| `admin_datadir`                                                                   | Admin     | not supported            | - |
| `admin_nodeInfo`                                                                  | Admin     | not supported            | - |
| `admin_peers`                                                                     | Admin     | not supported            | - |
| `admin_startRPC`                                                                  | Admin     | not supported            | - |
| `admin_startWS`                                                                   | Admin     | not supported            | - |
| `admin_stopRPC`                                                                   | Admin     | not supported            | - |
| `admin_stopWS`                                                                    | Admin     | not supported            | - |
| `clique_getSnapshot`                                                              | Clique    | not supported            | - |
| `clique_getSnapshotAtHash`                                                        | Clique    | not supported            | - |
| `clique_getSigners`                                                               | Clique    | not supported            | - |
| `clique_proposals`                                                                | Clique    | not supported            | - |
| `clique_propose`                                                                  | Clique    | not supported            | - |
| `clique_discard`                                                                  | Clique    | not supported            | - |
| `clique_status`                                                                   | Clique    | not supported            | - |
| `debug_backtraceAt`                                                               | Debug     | not supported            | - |
| `debug_blockProfile`                                                              | Debug     | not supported            | - |
| `debug_cpuProfile`                                                                | Debug     | not supported            | - |
| `debug_dumpBlock`                                                                 | Debug     | not supported            | - |
| `debug_gcStats`                                                                   | Debug     | not supported            | - |
| `debug_getBlockRlp`                                                               | Debug     | not supported            | - |
| `debug_goTrace`                                                                   | Debug     | not supported            | - |
| `debug_memStats`                                                                  | Debug     | not supported            | - |
| `debug_seedHash`                                                                  | Debug     | not supported            | - |
| `debug_setHead`                                                                   | Debug     | not supported            | - |
| `debug_setBlockProfileRate`                                                       | Debug     | not supported            | - |
| `debug_stacks`                                                                    | Debug     | not supported            | - |
| `debug_startCPUProfile`                                                           | Debug     | not supported            | - |
| `debug_startGoTrace`                                                              | Debug     | not supported            | - |
| `debug_stopCPUProfile`                                                            | Debug     | not supported            | - |
| `debug_stopGoTrace`                                                               | Debug     | not supported            | - |
| `debug_traceBlock`                                                                | Debug     | not supported            | - |
| `debug_traceBlockByNumber`                                                        | Debug     | not supported            | - |
| `debug_traceBlockByHash`                                                          | Debug     | not supported            | - |
| `debug_traceBlockFromFile`                                                        | Debug     | not supported            | - |
| `debug_standardTraceBlockToFile`                                                  | Debug     | not supported            | - |
| `debug_standardTraceBadBlockToFile`                                               | Debug     | not supported            | - |
| `debug_traceTransaction`                                                          | Debug     | not supported            | - |
| `debug_verbosity`                                                                 | Debug     | not supported            | - |
| `debug_vmodule`                                                                   | Debug     | not supported            | - |
| `debug_writeBlockProfile`                                                         | Debug     | not supported            | - |
| `debug_writeMemProfile`                                                           | Debug     | not supported            | - |
| `les_serverInfo`                                                                  | Les       | not supported            | - |
| `les_clientInfo`                                                                  | Les       | not supported            | - |
| `les_priorityClientInfo`                                                          | Les       | not supported            | - |
| `les_addBalance`                                                                  | Les       | not supported            | - |
| `les_setClientParams`                                                             | Les       | not supported            | - |
| `les_setDefaultParams`                                                            | Les       | not supported            | - |
| `les_latestCheckpoint`                                                            | Les       | not supported            | - |
| `les_getCheckpoint`                                                               | Les       | not supported            | - |
| `les_getCheckpointContractAddress`                                                | Les       | not supported            | - |
| `miner_getHashrate`                                                               | Miner     | not supported            | - |
| `miner_setExtra`                                                                  | Miner     | not supported            | - |
| `miner_setGasPrice`                                                               | Miner     | not supported            | - |
| `miner_start`                                                                     | Miner     | not supported            | - |
| `miner_stop`                                                                      | Miner     | not supported            | - |
| `miner_setEtherbase`                                                              | Miner     | not supported            | - |
| [`txpool_content`](#txpool_content)                                               | TXPool    | supported            | Returns a list of the exact details of all the transactions currently pending for inclusion in the next block(s), as well as the ones that are being scheduled for future execution only. |
| [`txpool_inspect`](#txpool_inspect)                                               | TXPool    | supported            | Returns a list on text format to summarize all the transactions currently pending for inclusion in the next block(s), as well as the ones that are being scheduled for future execution only. |
| [`txpool_status`](#txpool_status)                                                 | TXPool    | supported            | Returns the number of transactions currently pending for inclusion in the next block(s), as well as the ones that are being scheduled for future execution only. |