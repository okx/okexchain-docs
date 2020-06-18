<!--
order: 2
-->

# Install OKChain

This guide will explain how to install the `okchaind` and `okchaincli` entrypoints
onto your system. With these installed on a server, you can participate in the
testnet as either a [Full Node](./join-okchain-mainnet.html) or a
[Validator](../validators/validators-guide-cli.html).

## Install Go

Install `go` by following the [official docs](https://golang.org/doc/install).
Remember to set your `$PATH` environment variable, for example:

```bash
mkdir -p $HOME/go/bin
echo "export PATH=$PATH:$(go env GOPATH)/bin" >> ~/.bash_profile
echo "export GOPATH=$HOME/go" >> ~/.bash_profile
echo "export GOBIN=$GOPATH/bin" >> ~/.bash_profile
echo "export PATH=$PATH:$GOBIN" >> ~/.bash_profile
source ~/.bash_profile
```
Under Windows, you may set environment variables(`HOME` or `GO111MODULE`) through the "Environment Variables" 
button on the "Advanced" tab of the "System" control panel. Some versions of Windows 
provide this control panel through the "Advanced System Settings" option inside the 
"System" control panel.

> _NOTE_: **Go 1.12+** is required for the OKChain.


## Install the binaries

Next, let's install the latest version of OKChain. Make sure you `git checkout` the
correct [released version](https://github.com/okex/okchain/releases).

```bash
git clone -b <latest-release-tag> https://github.com/okex/okchain
export GO111MODULE=on
cd okchain && make install
```
Under Windows, you can execute the below commands on PowerShell to set the environment variable `GO111MODULE`.
```shell script
# Enable the go modules feature
$env:GO111MODULE="on"
```

If this command fails due to the following error message, you might have already set `LDFLAGS` prior to running this step.

```
# github.com/okex/okchain/cmd/okchaind
flag provided but not defined: -L
usage: link [options] main.o
...
make: *** [install] Error 2
```

Unset this environment variable and try again.

```
LDFLAGS="" make install
```

> _NOTE_: If you still have issues at this step, please check that you have the latest stable version of GO installed.

That will install the `okchaind` and `okchaincli` binaries. Verify that everything is OK:

```bash
$ okchaind version --long
$ okchaincli version --long
```

`okchaincli` for instance should output something similar to:

```shell
name: okchain
server_name: okchaind
client_name: okchaincli
version: v0.10.0
commit: 20a720f38c6c60540a739351e485779a098ee413
build_tags: netgo
go: go version go1.14.2 darwin/amd64
cosmos_sdk: v0.37.9
tendermint: v0.32.10
```

### Setting Up `okchaincli`
It allows you to set a default value for each given flag, use the following command:

```bash
okchaincli config <flag> <value>
```

First, set up the address of the full-node you want to connect to:

```bash
okchaincli config node <host>:<port

// example: okchaincli config node https://77.87.106.33:26657
```

If you run your own full-node, just use `tcp://localhost:26657` as the address. 

Then, let us set the default value of the `--trust-node` flag:

```bash
okchaincli config trust-node false

// Set to true if you run a light-client node, false otherwise
```

Finally, let us set the `chain-id` of the blockchain we want to interact with:

```bash
okchaincli config chain-id okchain
```

### Build Tags

Build tags indicate special features that have been enabled in the binary.

| Build Tag | Description                                     |
| --------- | ----------------------------------------------- |
| netgo     | Name resolution will use pure Go code           |
| ledger    | Ledger devices are supported (hardware wallets) |

### Install binary distribution via snap (Linux only)

**Do not use snap at this time to install the binaries for production until we have a reproducible binary system.**

## Developer Workflow

To test any changes made in the Cosmos-SDK or Tendermint, a `replace` clause needs to be added to `go.mod` providing the correct import path.

- Make appropriate changes
- Add `replace github.com/cosmos/cosmos-sdk => /path/to/clone/cosmos-sdk` to `go.mod`
- Run `make install` or `make build`
- Test changes

## Next

Now you can [join the mainnet](./join-okchain-mainnet.html), [the public testnet](./join-okchain-testnet.html) or [create you own testnet](./deploy-you-own-okchain-testnet.html)
