# Deploy Your Own OKBC Localnet

This document describes 2 ways to setup a network of `okbc` nodes

1. Single-node, automated localnet
2. Multi-node, automated localnet

## Requirements

- [Install okbc](/dev/quick-start/build-on-okbc/install-okbc.html)
- [Install `jq`](https://stedolan.github.io/jq/download/) (optional)

## Single-node, Automated Localnet

This guide helps you create a single validator node that runs a network locally for testing and other development related uses.

### Start Single-node Localnet

1. Open a terminal or command prompt and navigate to the okbchain dev folder.
2. Run the following command to start the single-node localnet:

```bash
./start.sh
```

This script will perform the following operations:

* Add an encrypted private key using the `okbchaincli keys add` command. You need to provide a mnemonic for key recovery.
* Initialize `okbchaind` with a moniker and chain ID using the `okbchaind init` command.
* Allocate genesis accounts using the `okbchaind add-genesis-account` command.
* Sign the genesis transaction to create your validator using the `okbchaind gentx` command.
* Add the generated bonding transaction to the genesis file using the `okbchaind collect-gentxs` command.
* Finally, it starts the `okbchaind` localnet.

The data for okbchaind will be stored in the `_cache_evm` folder, and you can check the localnet's log in the okb.txt file.

To monitor the logs, you can use the following command:

```bash
tail -f okb.txt
```

Please note that you need to execute the start.sh script in the okbchain dev folder to set up the single-node localnet.

## Multi-node, Automated Localnet

This guide helps you create 4 validator nodes and 1 rpc node runs a network locally for testing and other development related uses.

### Start Multi-node Localnet

To set up a multi-node, automated localnet for okbc, you can follow the steps outlined below:

1. Open a terminal or command prompt and navigate to the okbchain dev/testnet folder.
2. Run the following command to start the multi-node localnet:

```
./run4v1r.sh
```
This script will start 4 validator nodes and 1 RPC node for the localnet.

If the nodes do not run successfully, please check the `okb.profile` file and ensure that the `OKCHAIN_TOP` variable is set to the correct location.

The data for the localnet will be stored in the cache folder, which will have the following structure:

```
cache/
├── gentxs
│   ├── node0-0.json
│   ├── node1-0.json
│   ├── node2-0.json
│   └── node3-0.json
├── node0
│   ├── okbchaincli
│   │   ├── key_seed.json
│   │   └── keyring-test-okbchain
│   └── okbchaind
│       ├── config
│       └── data
├── node1
│   ├── okbchaincli
│   │   ├── key_seed.json
│   │   └── keyring-test-okbchain
│   └── okbchaind
│       ├── config
│       └── data
├── node2
│   ├── okbchaincli
│   │   ├── key_seed.json
│   │   └── keyring-test-okbchain
│   └── okbchaind
│       ├── config
│       └── data
├── node3
│   ├── okbchaincli
│   │   ├── key_seed.json
│   │   └── keyring-test-okbchain
│   └── okbchaind
│       ├── config
│       └── data
├── node4
│   └── okbchaind
│       ├── config
│       └── data
├── val0.log
├── val1.log
├── val2.log
├── val3.log
└── val4.log
```

You can find logs for each node in the cache folder, named val0.log, val1.log, etc.

To monitor the logs, you can use the following command:
```
tail -f ./cache/val0.log
```
To show the validators in the localnet, you can use the following command:

```
okbchaincli query staking validators | grep moniker
```

Please note that you need to execute the run4v1r.sh script in the okbchain dev/testnet folder to set up the multi-node localnet.
