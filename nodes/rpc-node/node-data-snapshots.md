# Node Data Snapshots
Before you start running a node, you must first sync with the network. This means your node needs to download all the headers and blocks that other nodes in the network already have.
When setting up a new sentry, validator, or full node server, it is recommended that you use a snapshot for faster syncing without having to sync over the network. Using snapshots will save you several days.
Here are the available snapshots directories based on node type and network. Please note that the snapshots are updated every 48 hours.

## Instructions on Installing OKB Chain Snapshots
According to the snapshot size, it is divided into S0, S1, S2 and S3:
- S0. size of s0 is the smallest, including only the last block and the state of that height.
- S1. --pruning everything: larger than S0 size
- S2. --pruning default: larger than S1 size
- S3. --pruning nothing: maximum size


## Snapshot Links
| Node Type and Network Type  | Download Snapshot File  | Link to Latest Version  |
| :------------------------------------------ | :------------ | :------------ |
| RPC Testnet  | [Link to download latest snapshot files](https://static.okex.org/cdn/okbc/snapshot/index.html "Link to download latest snapshot files")  | [GitHub release](https://github.com/okx/okbchain "GitHub release")  |
| RPC Mainnet  | Available after Mainnet launch  | Available after Mainnet launch  |
| Archive Mainnet  | Available after Mainnet launch  | Available after Mainnet launch  |