# Ethereum Websocket

Since OKExChain uses Tendermint Core as it's consensus Engine and it's built with the Cosmos
SDK framework, it inherits the event format from them. However, in order to support the native Web3
compatibility for websockets of the [Ethereum's
PubSubAPI](https://geth.ethereum.org/docs/rpc/pubsub), OKExChain needs to cast the Tendermint
responses retreived into the Ethereum types.

You can start a connection with the Ethereum websocket using the `--wsport` flag when initializing
the REST server (default `8546`):

```bash
okexchaind start --rest.laddr "tcp://localhost:8545" --wsport 8546 --chain-id <chain_id>
```

Then, start a websocket subscription with [ws](https://github.com/hashrocket/ws), or something else websocket clients

```bash
# connect to websocet at port 8546 as defined above
ws ws://localhost:8546/

# subscribe to new Ethereum-formatted block Headers
> {"id": 1, "method": "eth_subscribe", "params": ["newHeads", {}]}
< {"jsonrpc":"2.0","result":"0x44e010cb2c3161e9c02207ff172166ef","id":1}
```
