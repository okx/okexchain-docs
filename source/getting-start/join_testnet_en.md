
# Join the OKChain Testnet

The [launce repo](http://gitlab.okcoin-inc.com/dex/launch) collects the genesis and configuration files for the OKChain testnet. 

```
WARNING
You need to install okchain before you go further
```

## 1. Setting Up a New Node
These instructions are for setting up a brand new full node from scratch.

First, initialize the node and create the necessary config files:
```
okchaind init <your_custom_moniker>
```
Note

Monikers can contain only ASCII characters. Using Unicode characters will render your node unreachable.
You can edit this moniker later, in the ~/.okchaind/config/config.toml file:

```bash
# A custom human readable name for this node
moniker = "<your_custom_moniker>"
```
You can edit the ~/.okchaind/config/okchaind.toml file in order to enable the anti spam mechanism and reject incoming transactions with less than the minimum gas prices:
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


## 2. Genesis 

### [What is the Genesis](genesis_en.md)

### Download the genesis file:
[genesis](https://github.com/okex/okchain-binaries/blob/master/genesis.json)

```
$ shasum -a 256 genesis.json
f2ae29a36f5872571f8130197433ace6b163f56608eb116c8bb51449252ca363  -
```
Fetch the testnet's genesis.json file into okchaind's config directory.
```
mkdir -p $HOME/.okchaind/config
curl https://raw.githubusercontent.com/cosmos/launch/master/genesis.json > $HOME/.okchaind/config/genesis.json
```

## 3. Seed nodes
There are public data seed nodes that joins the OKChain network. They usually provide RPC calls. Please check the Node RPC Reference.
You can also run a full node by yourself, so that you will have a local server to send RPC requests and read Chain information off.
```
35b9658ca14dd4908b37f327870cbd5007ee06f1@116.203.146.149:26656
c24f496b951148697f8a24fd749786075c128f00@35.203.176.214:26656
```


Your node needs to know how to find peers. You'll need to add healthy seed nodes to $HOME/.okchaind/config/config.toml. 

The launch repo contains links to some seed nodes.

If those seeds aren't working, you can find more seeds and persistent peers on the OKChain explorer (a list can be found on the launch page).

For more information on seeds and peers, you can read [this]()


## 4. Start your node to join the testnet
```
okchaind start
```

#### Enable backend module
If you want to get extra info from your full node, you should enable backend module.
```
okchaind start --backend.enable_backend=1 --backend.orm_engine.engine_type=sqlite3 --backend.orm_engine.connect_str=$db_filepath
```


## 5. Or join the testnet by a docker image
