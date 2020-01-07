This document explains how the genesis file of the OKChain testnet is structured. It also explains how you can build a genesis file for your own gaia testnet.

Note that you can generate a default genesis file for your own testnet by running the following command:

    okchaind init <moniker> --chain-id <chain-id>

The genesis file is stored in ~/.okchaind/config/genesis.toml.

## What is a Genesis File

A genesis file is a JSON file which defines the initial state of your blockchain. It can be seen as height 0 of your blockchain. The first block, at height 1, will reference the genesis file as its parent.

The state defined in the genesis file contains all the necessary information, like initial token allocation, genesis time, default parameters, and more. Let us break down these information.

## Genesis Time and Chain_id

The genesis_time is defined at the top of the genesis file. It is a UTC timestamps which specifies when the blockchain is due to start. At this time, genesis validators are supposed to come online and start participating in the consensus process. The blockchain starts when more than 2/3rd of the genesis validators (weighted by voting power) are online.

"genesis_time": "2019-03-13T17:00:00.000000000Z",

The chain_id is a unique identifier for your chain. It helps differentiate between different chains using the same version of the software.

"chain_id": "cosmoshub-1",

