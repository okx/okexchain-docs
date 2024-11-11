# Service providers

We define ‘service providers’ as entities providing services for end-users that involve some form of interaction within the OKTC blockchain. More specifically, this document will be focused around the interactions with tokens.

This section does not concern wallet builders that want to provide Light-Client functionalities. Service providers are expected to act as trusted point of contact for all the OKTC blockchain end-users.

## High-level description of the architecture

There are three main pieces to consider:

* **Full-nodes**: To interact with the blockchain network.
* **Rest Server**: This acts as a relayer for HTTP calls.
* **Rest API**: Define available endpoints for the Rest Server.

## Running a full-node

### Installation and configuration

We will describe the steps to run and interact with a full-node within the OKTC network. For other SDK-based blockchain, the process should be similar.

First, you need to [install the software](/dev/quick-start/install-oktc).

Then, you can start [running a full-node(mainnet)](/dev/nodes/operation/how-to-start-mainnet-node).

## Rest API

The Rest API documents gather all the available endpoints that you can use to interact with your full node. It can be found [here](https://exchainrpc.okex.org/docs/en/#overview).

To give more flexibility to developers, the OKTC community has included the ability to generate unsigned transactions, [sign](https://exchainrpc.okex.org/docs/en/#overview) and [broadcast](https://exchainrpc.okex.org/docs/en/#overview) them with different API endpoints. This allows service providers to use their own signing mechanism for instance.

## OKTC SDK Transaction Signing

OKTC SDK transaction signing is a fairly simple process.

Every OKTC transaction has a canonical JSON representation. The `exchaincli` and Stargate REST interfaces provide canonical JSON representations of transactions and their  “broadcast” functions will encode translations through amino (a protobuf-like encoder/decoder). 

Things to know when signing messages:

The format is as follows

```json
{
  "account_number": XXX,
  "chain_id": XXX,
  "fee": XXX,
  "sequence": XXX,
  "memo": XXX,
  "msgs": XXX
}
```

The signer must supply `"chain_id"`, `"account number"` and `"sequence number"`.

The `"fee"`, `"msgs"` and `"memo"` fields will be supplied by the transactioncomposer interface.

The `"account_number"` and `"sequence"` fields can be queried directly from the blockchain or cached locally. Getting these numbers wrong, along with the chainID, is a common cause of invalid signature error. You can load the mempool of a full node or validator with a sequence of uncommitted transactions with incrementing sequence numbers and it will mostly do the correct thing.

Before signing, all keys are lexicographically sorted and all white space is removed from the JSON output.

The signature encoding is the 64-byte concatenation of ECDSArands (i.e. r || s), where s is lexicographically less than its inverse in order to prevent malleability. This is like Ethereum, but without the extra byte for PubKey recovery, since Tendermint assumes the PubKey is always provided anyway.

Signatures and public key examples in a signed transaction:

``` json
{
  "type": "auth/StdTx",
  "value": {
    "msg": [...],
    "signatures": [
      {
        "pub_key": {
          "type": "tendermint/PubKeySecp256k1",
          "value": XXX
        },
        "signature": XXX
      }
    ],
  }
}
```

Once signatures are properly generated, and inserted into the JSON , then the generated transaction can be broadcasted to the network through client command.
