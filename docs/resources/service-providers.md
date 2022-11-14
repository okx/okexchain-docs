# Service Providers

We define ‘service providers’ as entities providing services for end-users that involve some form of interaction within the OKC blockchain. More specifically, this document will be focused around the interactions with tokens.

This section does not concern wallet builders that want to provide Light-Client functionalities. Service providers are expected to act as trusted point of contact for all the OKC blockchain end-users.

## High-level description of the architecture

There are three main pieces to consider:

* **Full-nodes**: To interact with the blockchain network.
* **Rest Server**: This acts as a relayer for HTTP calls.
* **Rest API**: Define available endpoints for the Rest Server.

## Running a Full-Node

### Installation and configuration

We will describe the steps to run and interact with a full-node within the OKC network. For other SDK-based blockchain, the process should be similar.

First, you need to [install the software](../getting-start/install-oec.html).

Then, you can start [running a full-node(testnet)](../getting-start/join-oec-testnet.html).

### Command-Line interface

## Setting Up `exchaincli`

**Please check that you are always using the latest stable release of `exchaincli`.**

`exchaincli` is the tool that enables you to interact with the node that runs on the OKC network, whether you run it yourself or not. Let us set it up properly.

In order to set up `exchaincli`, use the following command:

```bash
exchaincli config <flag> <value>
```

It allows you to set a default value for each given flag.

First, set up the address of the full-node you want to connect to:

```bash
exchaincli config node <host>:<port

// example: exchaincli config node https://35.176.62.211:26657
```
The ip address is for reference only, please use `https://exchaintmrpc.okex.org` for actual access

If you run your own full-node, just use `tcp://localhost:26657` as the address.

Then, let us set the default value of the `--trust-node` flag:

```bash
exchaincli config trust-node false

// Set to true if you run a light-client node, false otherwise
```

Finally, let us set the `chain-id` of the blockchain we want to interact with:

```bash
exchaincli config chain-id exchain-65
```

Next you will find a few useful CLI commands to interact with the Full-Node.

#### Creating a key-pair

To generate a new key (default secp256k1 elliptic curve):

```bash
exchaincli keys add <your_key_name>
```

You will be asked to create a password (at least 8 characters) for this key-pair. This will return the information listed below:

* `NAME`: Name of your key
* `TYPE`: Type of your key, always `local`.
* `ADDRESS`: Your address. Used to receive funds.
* `PUBKEY`: Your public key. Useful for validators.
* `MNEMONIC`: 24-words phrase. **Save this mnemonic somewhere safe**. It is used to recover your private key in case you forget the password.

You can see all your available keys by typing:

```bash
exchaincli keys list
```

#### Checking your balance

After receiving tokens to your address, you can view your account’s balance by typing:

```bash
exchaincli query account <YOUR_ADDRESS>
```

*Note: When you query an account balance with zero tokens, you will get this error: No account with address <YOUR_ADDRESS> was found in the state. This is expected! We’re working on improving our error messages.

#### Sending coins via the CLI

Here is the command to send coins via the CLI:

```bash
exchaincli tx send <from_key_or_address> <to_address> <amount> \
    --chain-id=<name_of_testnet_chain> 
```

Parameters:
- `<from_key_or_address>`: Key name or address of sending account.
- `<to_address>`: Address of the recipient.
- `<amount>`: This parameter accepts the format `<value|coinName>`, such as 10faucetToken.

Flags:

- `--chain-id`: This flag allows you to specify the id of the chain. There will be different ids for different testnet chains and the main chain.

#### Help

If you need to do something else, the best command you can run is:

```bash
exchaincli 
```

It will display all the available commands. For each command, you can use the `--help` flag to get further information.

## Rest API

The Rest API documents gather all the available endpoints that you can use to interact with your full node. It can be found [here](https://documenter.getpostman.com/view/1112175/SzS5u6bE?version=latest).

To give more flexibility to developers, the OKC community has included the ability to generate unsigned transactions, [sign](https://documenter.getpostman.com/view/1112175/SzS5u6bE?version=latest#03709c4f-d620-4fef-a36a-f9cb97e909b8) and [broadcast](https://documenter.getpostman.com/view/1112175/SzS5u6bE?version=latest#03709c4f-d620-4fef-a36a-f9cb97e909b8) them with different API endpoints. This allows service providers to use their own signing mechanism for instance.

## OKC SDK Transaction Signing

OKC SDK transaction signing is a fairly simple process.

Every OKC transaction has a canonical JSON representation. The `exchaincli` and Stargate REST interfaces provide canonical JSON representations of transactions and their  “broadcast” functions will encode translations through amino (a protobuf-like encoder/decoder). 

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
