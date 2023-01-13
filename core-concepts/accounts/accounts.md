
# Accounts

This document describes the in-built accounts system of OKC. 

## Pre-requisite Readings

- [Cosmos SDK Accounts](https://docs.cosmos.network/v0.46/basics/accounts.html) 
- [Ethereum Accounts](https://ethereum.org/en/whitepaper/#ethereum-accounts) 

## OKC Accounts

OKC defines its own custom `Account` type that uses Ethereum's ECDSA secp256k1 curve for keys. This
satisfies the [EIP84](https://github.com/ethereum/EIPs/issues/84) for full [BIP44](https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki) paths.
The root HD path for OKC-based accounts is `m/44'/60'/0'/0`.


## Addresses and Public Keys

There are 3 main types of `Addresses`/`PubKeys` available by default on OKC:

- Addresses and Keys for **accounts**, which identify users (e.g. the sender of a `message`). They are derived using the [eth_secp256k1](https://cryptobook.nakov.com/digital-signatures/ecdsa-sign-verify-messages) curve.
- Addresses and Keys for **validator operators**, which identify the operators of validators. They are derived using the [eth_secp256k1](https://cryptobook.nakov.com/digital-signatures/ecdsa-sign-verify-messages) curve.
- Addresses and Keys for **consensus nodes**, which identify the validator nodes participating in consensus. They are derived using the [ed25519](https://cryptobook.nakov.com/digital-signatures/eddsa-and-ed25519) curve.

|                    | Address bech32 Prefix | Pubkey bech32 Prefix | Curve           | Address byte length | Pubkey byte length |
|--------------------|-----------------------|----------------------|-----------------|---------------------|--------------------|
| Accounts           | `ex`                 | `expub`             | `eth_secp256k1` | `20`                | `33` (compressed)  |
| Validator Operator | `exvaloper`          | `exvaloperpub`      | `eth_secp256k1` | `20`                | `33` (compressed)  |
| Consensus Nodes    | `exvalcons`          | `exvalconspub`      | `ed25519`       | `20`                | `32`               |

## Address formats for clients

`OKCAccount`s can be represented in both [Bech32](https://en.bitcoin.it/wiki/Bech32) and hex format for Ethereum's Web3 tooling compatibility.

The Bech32 format is the default format for Cosmos-SDK queries and transactions through CLI and REST
clients. The hex format on the other hand, is the Ethereum `common.Address` representation of a
Cosmos `sdk.AccAddress`.

- Address (Bech32): `ex1hcngft7gfkhn8z8fnlajzh7agyt0az0v6ztmme`
- Address ([EIP55](https://eips.ethereum.org/EIPS/eip-55) Hex): `0xBE2684Afc84daf3388E99FFB215FdD4116FE89EC`
- Compressed Public Key (Bech32): `expub17weu6qepqgantzvj79rywafrxmye524tpa8kp6akjct3nw7wel623lsnfwynqyfe75k`

You can query an account address using the OKC CLI or REST clients:

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

To retrieve the Ethereum hex address using Web3, use the JSON-RPC [`okc_accounts`](./json_rpc.md#eth_accounts) endpoint:

```bash
# query against a local node
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_accounts","params":[],"id":1}' -H "Content-Type: application/json" http://localhost:26664
```

## Next 

Learn about OKC [transactions](./transactions.md) 

# Two format address

## The relationship between ex and 0x address
There are two address formats in ex, one is the address at the prefix of ex, such as: `ex1hcngft7gfkhn8z8fnlajzh7agyt0az0v6ztmme`;Another address starts with 0x, such as: `0x8aF3B04bF0400b16911b5A12360122148056d562`.The addresses prefix with 0x and ex are from the same mnemonic, the balance under their address is the same, the same number of okt for the owner under the two addresses. After the mnemonic is imported into the metamask, the address starting with 0x can be recovered;Use exchaincli to view addresses starting with 0x and ex. You can view the address prefix with ex on the dex web page and mobile client.

## How to use
The address starting with ex can be used directly on the mobile client, web page or exchaincli for operations such as transfer, deposit, and voting.Addresses starting with 0x can only be used for transfer operations on metamasks at present.

`Note`: Using addresses prefix with ex can only transfer funds to addresses prefix with ex, and cannot be cross-transferred.

## Mutual conversion
The address at the prefix of 0x and the address at the prefix of ex come from the same mnemonic and can be converted to each other.Addresses starting with 0x are in Hex format, and ethereum currently uses addresses in this format.The address at the prefix of ex, the format specification comes from the btc protocol[BIP173（bech32）](https://github.com/bitcoin/bitcoin/pull/11167)，Currently btc and cosmos are using this format address.

The address of the two formats can be converted mutually, the conversion method: use[exchain-java-sdk](https://github.com/okx/exchain-java-sdk/blob/v0.18.0/src/main/java/com/okexchain/utils/crypto/AddressUtil.java)、[exchain-javascript-sdk](https://github.com/okx/exchain-javascript-sdk/blob/master/src/crypto/index.js)method convertAddressFromHexToBech32 and method convertAddressFromBech32ToHex to convert

