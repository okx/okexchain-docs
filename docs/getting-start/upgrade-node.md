# Upgrade Your Node

This document describes the upgrade procedure of a `exchaind` full-node to a new version.

## Software Upgrade

First, stop your instance of `exchaind`. Next, upgrade the software:

```bash
cd exchain
git fetch --all && git checkout <new_version>
make install
```

> _NOTE_:
If you have issues at this step, please check that you have the latest stable version of GO installed.

See the [testnet repo](https://github.com/okx/testnets) for details on which version is needed for which public testnet, and the [OKC release page](https://github.com/okx/exchain/releases) for details on each release.

Your full node has been cleanly upgraded!

## Upgrade Genesis File

If the new version you are upgrading to has breaking changes, you will have to restart your chain. If it is not breaking, you can skip to [Restart](#restart)

To upgrade the genesis file, you can either fetch it from a trusted source or export it locally.

### Fetching from a Trusted Source

If you are joining a public testnet, fetch the genesis from the appropriate testnet in the [testnet repo](https://github.com/okx/testnets). Otherwise, fetch it from your trusted source.

Save the new genesis as `new_genesis.json`. Then replace the old `genesis.json` with `new_genesis.json`

```bash
cd $HOME/.exchaind/config
cp -f genesis.json new_genesis.json
mv new_genesis.json genesis.json
```

Then, go to the [reset data](#reset-data) section.

### Exporting State to a New Genesis Locally

If you were running a node in the previous version of the network and want to build your new genesis locally from a state of this previous network, use the following command:

```bash
cd $HOME/.exchaind/config
exchaind export --for-zero-height --height=<export-height> > new_genesis.json
```

The command above take a state at a certain height `<export-height>` and turns it into a new genesis file that can be used to start a new network.

Then, replace the old `genesis.json` with `new_genesis.json`.

```bash
cp -f genesis.json new_genesis.json
mv new_genesis.json genesis.json
```

## Reset Data

If the version <new_version> you are upgrading to is not breaking from the previous one, you should not reset the data. If it is not breaking, you can skip to [Restart](#restart)

If you are running a **validator node** on the mainnet, always be careful when doing `exchaind unsafe-reset-all`. You should never use this command if you are not switching `chain-id`.

Make sure that every node has a unique `priv_validator.json`. Do not copy the `priv_validator.json` from an old node to multiple new nodes. Running two nodes with the same `priv_validator.json` will cause you to get slashed due to double sign !


First, remove the outdated files and reset the data. **If you are running a validator node, make sure you understand what you are doing before resetting**.

```bash
exchaind unsafe-reset-all
```

Your node is now in a pristine state while keeping the original `priv_validator.json` and `config.toml`. If you had any sentry nodes or full nodes setup before, your node will still try to connect to them, but may fail if they haven't also been upgraded.

## Restart

To restart your node, just type:

```bash
exchaind start
```
