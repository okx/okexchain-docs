<!--
order: 6
-->

# Deploy Your Own OKExChain Testnet

This document describes 2 ways to setup a network of `okexchain` nodes, each serving a different usecase:

1. Single-node, local, manual testnet
2. Multi-node, local, automated testnet

Supporting code can be found in the [networks directory](https://github.com/okex/okexchain/tree/master/networks) and additionally the `local` sub-directories.

## Available Docker images

In case you need to use or deploy okexchain as a container you could skip the `build` steps and use the official images, \$TAG stands for the version you are interested in:

* `docker run -it -v ~/.exchaind:/root/.exchaind okexchain/node:$TAG exchaind init mynode`
* `docker run -it -p 26657:26657 -p 26656:26656 -v ~/.exchaind:/root/.exchaind okexchain/node:$TAG exchaind start`
* ...
* `docker run -it -v ~/.exchaind:/root/.exchaind okexchain/node:$TAG exchaincli version`

The same images can be used to build your own docker-compose stack.

## Single-node, Local, Manual Testnet

This guide helps you create a single validator node that runs a network locally for testing and other development related uses.

### Requirements

- [Install okexchain](./install-okexchain.html)
- [Install `jq`](https://stedolan.github.io/jq/download/) (optional)

### Create Genesis File and Start the Network

```bash
# You can run all of these commands from your home directory
cd $HOME

# Initialize the genesis.json file that will help you to bootstrap the network
exchaind init <your_custom_moniker> --chain-id testchain-1

# Create a key to hold your validator account
exchaincli keys add validator

# Add that key into the genesis.app_state.accounts array in the genesis file
# NOTE: this command lets you set the number of coins. Make sure this account has some coins
# with the genesis.app_state.staking.params.bond_denom denom, the default is staking
exchaind add-genesis-account $(exchaincli keys show validator -a) 1000000000tokt

# Generate the transaction that creates your validator
exchaind gentx --name validator

# Add the generated bonding transaction to the genesis file
exchaind collect-gentxs

# Now its safe to start `exchaind`
exchaind start --chain-id testchain-1
```

This setup puts all the data for `exchaind` in `~/.exchaind`. You can examine the genesis file you created at `~/.exchaind/config/genesis.json`. With this configuration `exchaincli` is also ready to use and has an account with tokens (both staking and custom).

## Multi-node, Local, Automated Testnet

From the [networks/local directory](https://github.com/okex/okexchain/tree/master/networks/local):

### Requirements

- [Install okexchain](./install-okexchain.html)
- [Install docker](https://docs.docker.com/engine/installation/)
- [Install docker-compose](https://docs.docker.com/compose/install/)

### Build

Build the `exchaind` binary (linux) and the `okexchain/node` docker image required for running the `localnet` commands. This binary will be mounted into the container and can be updated rebuilding the image, so you only need to build the image once.

```bash
# Clone the okexchain repo
git clone https://github.com/okex/okexchain.git

# Work from the SDK repo
cd okexchain

# Build okexchain/node image
make build-docker-okexchainnode
```

### Run Your Testnet

To start a 4 node testnet run:

```
make localnet-start
```

This command creates a 4-node network using the exchaindnode image.
The ports for each node are found in this table:

| Node ID     | P2P Port | RPC Port |
| ----------- | -------- | -------- |
| `okexchainnode0` | `26656`  | `26657`  |
| `okexchainnode1` | `26659`  | `26660`  |
| `okexchainnode2` | `26661`  | `26662`  |
| `okexchainnode3` | `26663`  | `26664`  |

### Configuration

The `make localnet-start` creates files for a 4-node testnet in `./build` by
calling the `exchaind testnet` command. This outputs a handful of files in the
`./build` directory:

```bash
$ tree -L 3 build/
build/
├── gentxs
│   ├── node0.json
│   ├── node1.json
│   ├── node2.json
│   └── node3.json
├── node0
│   ├── exchaincli
│   │   ├── key_seed.json
│   │   └── keyring-test-okexchain
│   └── exchaind
│       ├── config
│       └── data
├── node1
│   ├── exchaincli
│   │   ├── key_seed.json
│   │   └── keyring-test-okexchain
│   └── exchaind
│       ├── config
│       └── data
├── node2
│   ├── exchaincli
│   │   ├── key_seed.json
│   │   └── keyring-test-okexchain
│   └── exchaind
│       ├── config
│       └── data
└── node3
    ├── exchaincli
    │   ├── key_seed.json
    │   └── keyring-test-okexchain
    └── exchaind
        ├── config
        └── data
```

Each `./build/nodeN` directory is mounted to the `/exchaind` directory in each container.

### Logging

Logs are saved under each `./build/nodeN/exchaind/exchaind.log`. You can also watch logs
directly via Docker, for example:

```
docker logs -f exchaindnode0
```

### Keys & Accounts

To interact with `exchaincli` and start querying state or creating txs, you use the
`exchaincli` directory of any given node as your `home`, for example:

```shell
exchaincli keys list --home ./build/node0/exchaincli
```

Now that accounts exists, you may create new accounts and send those accounts
funds!

> _NOTE_: Each node's seed is located at `./build/nodeN/exchaincli/key_seed.json` and can be restored to the CLI using the `exchaincli keys add --restore` command

### Special Binaries

If you have multiple binaries with different names, you can specify which one to run with the BINARY environment variable. The path of the binary is relative to the attached volume. For example:

```
# Run with custom binary
BINARY=okchainfoo make localnet-start
```
