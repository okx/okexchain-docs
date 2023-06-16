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

```bash
# Enter the okbchain's dev folder 
# Run ./start.sh script, in this script, we will help you to 
# 1. Add an encrypted private key
# okbchaincli keys add --recover captain -m "here is mnemonic xx xx xx xx xx xx xx xx xx" -y
# 2. Set moniker and chain-id for Ethermint (Moniker can be anything, chain-id must be an integer)
# okbchaind init $MONIKER --chain-id $CHAINID --home $HOME_SERVER
# 3. Allocate genesis accounts (cosmos formatted addresses)
# okbchaind add-genesis-account $(okbchaincli keys show $KEY -a) 100000000okb --home $HOME_SERVER
# 4. Sign genesis transaction that creates your validator
# okbchaind gentx --name $KEY --keyring-backend test --home $HOME_SERVER
# 5. Add the generated bonding transaction to the genesis file
# okbchaind collect-gentxs --home $HOME_SERVER
# 6. Run okbchaind localnet
# nohup okbchaind --home $HOME_SERVER --chain-id $CHAINID --rest.laddr "tcp://localhost:8545" > okb.txt 2>&1 &
# All the above operations are included in start.sh. So we only need to execute start.sh 

./start.sh
```

This setup puts all the data for `okbchaind` in `_cache_evm` folder. And you can find the localnet's log in `okb.txt`.

```
# Check the logs
tail -f okb.txt
```

## Multi-node, Automated Localnet

This guide helps you create 4 validator nodes and 1 rpc node runs a network locally for testing and other development related uses.

### Start Multi-node Localnet

```
# Enter the okbchain's dev/testnet folder 
# Run ./run4v1r.sh. The script will run 4 validator nodes and 1 rpc node.
# If the nodes do not run successfully, please check the `okb.profile` and set the `OKCHAIN_TOP` to correct location.

./run4v1r.sh
```
You can show validators through the following command

```
okbchaincli query staking validators | grep moniker
```

This setup puts all the data  in `cache` folder. 
```
$ tree -L 3 cache/
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

You can find logs in cache folder.

```
# Check val0's logs
tail -f ./cache/val0.log
```
