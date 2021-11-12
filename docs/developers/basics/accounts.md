
# Accounts

This document describes the in-built accounts system of OEC. 

## Pre-requisite Readings

- [Cosmos SDK Accounts](https://docs.cosmos.network/master/basics/accounts.html) 
- [Ethereum Accounts](https://ethereum.org/en/whitepaper/#ethereum-accounts) 

## OEC Accounts

OEC defines its own custom `Account` type that uses Ethereum's ECDSA secp256k1 curve for keys. This
satisfies the [EIP84](https://github.com/ethereum/EIPs/issues/84) for full [BIP44](https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki) paths.
The root HD path for OEC-based accounts is `m/44'/60'/0'/0`.


## Addresses and Public Keys

There are 3 main types of `Addresses`/`PubKeys` available by default on OEC:

- Addresses and Keys for **accounts**, which identify users (e.g. the sender of a `message`). They are derived using the [eth_secp256k1](https://cryptobook.nakov.com/digital-signatures/ecdsa-sign-verify-messages) curve.
- Addresses and Keys for **validator operators**, which identify the operators of validators. They are derived using the [eth_secp256k1](https://cryptobook.nakov.com/digital-signatures/ecdsa-sign-verify-messages) curve.
- Addresses and Keys for **consensus nodes**, which identify the validator nodes participating in consensus. They are derived using the [ed25519](https://cryptobook.nakov.com/digital-signatures/eddsa-and-ed25519) curve.

|                    | Address bech32 Prefix | Pubkey bech32 Prefix | Curve           | Address byte length | Pubkey byte length |
|--------------------|-----------------------|----------------------|-----------------|---------------------|--------------------|
| Accounts           | `ex`                 | `expub`             | `eth_secp256k1` | `20`                | `33` (compressed)  |
| Validator Operator | `exvaloper`          | `exvaloperpub`      | `eth_secp256k1` | `20`                | `33` (compressed)  |
| Consensus Nodes    | `exvalcons`          | `exvalconspub`      | `ed25519`       | `20`                | `32`               |

## Address formats for clients

`OECAccount`s can be represented in both [Bech32](https://en.bitcoin.it/wiki/Bech32) and hex format for Ethereum's Web3 tooling compatibility.

The Bech32 format is the default format for Cosmos-SDK queries and transactions through CLI and REST
clients. The hex format on the other hand, is the Ethereum `common.Address` representation of a
Cosmos `sdk.AccAddress`.

- Address (Bech32): `ex1hcngft7gfkhn8z8fnlajzh7agyt0az0v6ztmme`
- Address ([EIP55](https://eips.ethereum.org/EIPS/eip-55) Hex): `0xBE2684Afc84daf3388E99FFB215FdD4116FE89EC`
- Compressed Public Key (Bech32): `expub17weu6qepqgantzvj79rywafrxmye524tpa8kp6akjct3nw7wel623lsnfwynqyfe75k`

You can query an account address using the OEC CLI or REST clients:

```bash
# NOTE: the --output (-o) flag will define the output format in JSON or YAML (text)
exchaincli q auth account $(exchaincli keys show <MYKEY> -a) -o text
|
  address: ex1hcngft7gfkhn8z8fnlajzh7agyt0az0v6ztmme
  eth_address: 0xBE2684Afc84daf3388E99FFB215FdD4116FE89EC
  coins:
  - denom: okt
    amount: "10000000"
  public_key: expub17weu6qepqgantzvj79rywafrxmye524tpa8kp6akjct3nw7wel623lsnfwynqyfe75k
  account_number: 0
  sequence: 1
  code_hash: c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470
```

``` bash
# GET /auth/accounts/{address}
curl -X GET "<NODE_IP>/auth/accounts/ex1hcngft7gfkhn8z8fnlajzh7agyt0az0v6ztmme" -H "accept: application/json"
```

::: tip
The Cosmos SDK Keyring output (i.e `exchaincli keys`) only supports addresses and public keys in Bech32 format.
:::

To retrieve the Ethereum hex address using Web3, use the JSON-RPC [`oec_accounts`](./json_rpc.md#eth_accounts) endpoint:

```bash
# query against a local node
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_accounts","params":[],"id":1}' -H "Content-Type: application/json" http://localhost:26664
```

## Next 

Learn about OEC [transactions](./transactions.md) 
