<!--
order: 4
-->

# Join the Public Testnet 

::: tip Current Testnet
See the [testnet repo](https://github.com/okex/testnets) for
information on the latest testnet, including the correct version
of OKChain to use and details about the genesis file.
:::

::: warning
**You need to [install okchain](./install-okchain.html) before you go further**
:::

## Supported Platforms

We support running a full node on `Mac OS X`, `Windows` and `Linux`.

## Minimum System Requirements

The hardware must meet certain requirements to run `okchiand`.

 * Desktop or laptop hardware running recent versions of Mac OS X, Windows, or Linux.
 * 500 GB of free disk space, accessible at a minimum read/write speed of 100 MB/s.
 * 4 cores of CPU and 8 gigabytes of memory (RAM).
 * A broadband Internet connection with upload/download speeds of at least 1 megabyte per second

## Setting Up a New Node

These instructions are for setting up a brand new full node from scratch.

First, initialize the node and create the necessary config files:

```bash
okchaind init <your_custom_moniker>
```

::: warning Note
Monikers can contain only ASCII characters. Using Unicode characters will render your node unreachable.
:::

You can edit this `moniker` later, in the `~/.okchaind/config/config.toml` file:

```toml
# A custom human readable name for this node
moniker = "<your_custom_moniker>"
```

You can edit the `~/.okchaind/config/okchaind.toml` file in order to enable the anti spam mechanism and reject incoming transactions with less than the minimum gas prices:

```
# This is a TOML config file.
# For more information, see https://github.com/toml-lang/toml

##### main base config options #####

# The minimum gas prices a validator is willing to accept for processing a
# transaction. A transaction's fees must meet the minimum of any denomination
# specified in this config (e.g. 10uatom).

minimum-gas-prices = ""
```

Your full node has been initialized! 

## Genesis & Seeds

### Copy the Genesis File

Fetch the testnet's `genesis.json` file into `okchaind`'s config directory.

Note we use the `latest` directory in the [testnets repo](https://github.com/okex/testnets) which contains details for the testnet like the latest version and the genesis file. 

To verify the correctness of the configuration run:

```bash
okchaind start
```

### Add Seed Nodes

Your node needs to know how to find peers. You'll need to add healthy seed nodes to `$HOME/.okchaind/config/config.toml`. The [testnets repo](https://github.com/okex/testnets) contains links to some seed nodes.

For more information on seeds and peers, you can [read this](https://docs.tendermint.com/master/spec/p2p/peer.html).

## Starting a New Node

Start the full node with this command:

```bash
okchaind start
```

Check that everything is running smoothly:

```bash
okchaincli status
```

See the [testnet repo](https://github.com/okex/testnets) for information on testnets, including the correct version of the OKChain to use and details about the genesis file.

## Upgrading Your Node

These instructions are for full nodes that have ran on previous versions of and would like to upgrade to the latest testnet.

### Reset Data

First, remove the outdated files and reset the data.

```bash
rm $HOME/.okchaind/config/addrbook.json $HOME/.okchaind/config/genesis.json
okchaind unsafe-reset-all
```

Your node is now in a pristine state while keeping the original `priv_validator.json` and `config.toml`. If you had any sentry nodes or full nodes setup before,
your node will still try to connect to them, but may fail if they haven't also
been upgraded.

::: danger Warning
Make sure that every node has a unique `priv_validator.json`. Do not copy the `priv_validator.json` from an old node to multiple new nodes. Running two nodes with the same `priv_validator.json` will cause you to double sign.
:::

### Software Upgrade

Now it is time to upgrade the software:

```bash
git clone https://github.com/okex/okchain.git
cd okchain
git fetch --all && git checkout master
make install
```

::: tip
_NOTE_: If you have issues at this step, please check that you have the latest stable version of GO installed.
:::

Note we use `master` here since it contains the latest stable release.
See the [testnet repo](https://github.com/okex/testnets) for details on which version is needed for which testnet, and the [OKChain release page](https://github.com/okex/okchain/releases) for details on each release.

Your full node has been cleanly upgraded!

### Upgrade to Validator Node

You now have an active full node. What's the next step? You can upgrade your full node to become a OKChain Validator. The top 100 validators have the ability to propose new blocks to the OKChain. Continue onto [the Validator Setup](../validators/validators-guide-cli.md).
