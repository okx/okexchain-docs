# Join the Public Testnet 

**You need to [install okbc](/dev/build-dapps/build-on-okbc/get-started/install-okbc.html) before you go further**

## Supported Platforms

We support running a full node on `Mac OS X`, `Windows` and `Linux`.

## Minimum System Requirements

The hardware must meet certain requirements to run `okbchaind`.

For node requirement details, please visit [Node Requirement](dev/maintain/run-a-node/node-overview/hardware-requirement.html)

## Setting Up a New Node

These instructions are for setting up a brand new full node from scratch.

First, initialize the node and create the necessary config files:

```bash
okbchaind init <your_custom_moniker> --chain-id okbchaintest-195
```

> _NOTE_:
Monikers can contain only ASCII characters. Using Unicode characters will render your node unreachable.


You can edit this `moniker` later, in the `~/.okbchaind/config/config.toml` file:

```toml
# A custom human readable name for this node
moniker = "<your_custom_moniker>"
```

You can edit the `~/.okbchaind/config/okbchaind.toml` file in order to enable the anti spam mechanism and reject incoming transactions with less than the minimum gas prices:

```
# This is a TOML config file.
# For more information, see https://github.com/toml-lang/toml

##### main base config options #####

# The minimum gas prices a validator is willing to accept for processing a
# transaction. A transaction's fees must meet the minimum of any denomination
# specified in this config (Our recommended quantity is  10^-9 okb).

minimum-gas-prices = ""
```

Your full node has been initialized! 

## Genesis & Seeds

### Copy the Genesis File

Fetch the [testnet's `genesis.json`](https://raw.githubusercontent.com/okx/okexchain-docs/okbchain-docs/resources/genesis-file/testnet/genesis.json) file into `okbchaind`'s config directory.

To verify the correctness of the configuration run:

```bash
okbchaind start --chain-id okbchaintest-195
```

### Add Seed Nodes

Your node needs to know how to find peers. You'll need to add healthy seed nodes to `$HOME/.okbchaind/config/config.toml`.

You can add `seeds` in the `~/.okbchaind/config/config.toml` file:

```toml
# Comma separated list of seed nodes to connect to
seeds = "f0721bd46ff3a9f9186cfe208c344d11ff918cd6@35.72.48.121:26656"
```

or add the seed node by flag when start node
```
--p2p.seeds=f0721bd46ff3a9f9186cfe208c344d11ff918cd6@35.72.48.121:26656
```

For more information on seeds and peers, you can [read this](https://docs.tendermint.com/master/spec/p2p/peer.html).

## Starting a New Node

Start the full node with this command:

```bash
okbchaind start --chain-id okbchaintest-195
```

Check that everything is running smoothly:

```bash
okbchaincli status
```

## JSON-RPC Endpoint
[RPC URL](/dev/api/okbc-api/json-rpc-api.html)

## Upgrading Your Node

These instructions are for full nodes that have ran on previous versions of and would like to upgrade to the latest testnet.


### Software Upgrade

Now it is time to upgrade the software:

```bash
git clone https://github.com/okx/okbchain.git
cd okbchain
git fetch --all && git checkout dev
make install
# start your node with the new version
okbchaind start --chain-id okbchaintest-195
```

> _NOTE_: If you have issues at this step, please check that you have the latest stable version of GO installed.

Note we use `dev` here since it contains the latest stable release.
See the [OKBC release page](https://github.com/okx/okbchain/releases) for details on each release.

Your full node has been cleanly upgraded!

# Join the Public Testnet With Docker
## Run OKBC testnet fullnode with docker

### 1. Download the docker image

```
docker pull okbchain/fullnode-testnet:latest
```

### 2. Set the data directory


Download the testnet snapshot from [here](dev/maintain/run-a-node/rpc-node/node-data-snapshots.html), and unzip it into a data directory ${DATA_DIR}.


### 3. Run docker container
```
docker run -d --name okbchain-testnet-fullnode -v ${DATA_DIR}:/root/.okbchaind/data/ -p 8545:8545 okbchain/fullnode-testnet:latest
```
`Notice: ${DATA_DIR} has to be an absolute path`


### 4. View the running log
```
docker logs --tail 100 -f okbchain-testnet-fullnode
```

### 5. Stop and restart the fullnode
- Stop
```
docker stop okbchain-testnet-fullnode
```
- Restart
```
docker start okbchain-testnet-fullnode
```

### 6. RPC
When docker gets to the latest block, local RPC can be used：`http://localhost:8545`
