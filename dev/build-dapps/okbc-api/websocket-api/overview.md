# Overview
This document explains how to use OKBC Websocket APIs.

Since OKBC uses Tendermint Core as it's consensus Engine and it's built with the Cosmos SDK framework, it inherits the event format from them. However, in order to support the native Web3 compatibility for websockets of [Ethereum's PubSubAPI](https://geth.ethereum.org/docs/rpc/pubsub "Ethereum's PubSubAPI"), OKBC needs to cast the Tendermint responses retrieved into the Ethereum types.

You can start a connection with the Ethereum websocket using the `--wsport flag` when initializing the REST server (default `8546`):

    okbchaind start --rest.laddr "tcp://localhost:8545" --wsport 8546 --chain-id <chain_id>
    
Then, start a websocket subscription with [ws](https://github.com/hashrocket/ws "ws"), or something else websocket clients.

    # connect to websocet at port 8546 as defined above
    ws ws://localhost:8443/
    
    # subscribe to new Ethereum-formatted block Headers> {"id": 1, "method": "eth_subscribe", "params": ["newHeads"]}< {"jsonrpc":"2.0","result":"0x65eca2989ce064d141862c8b7138c1e","id":1}

## Mainnet and Testnet Websocket URL

    # Mainnet Websocket URL
    wss://okbws.okex.org:8443
    
    ## Testnet Websocket URL
    wss://okbtestws.okex.org:8443
    