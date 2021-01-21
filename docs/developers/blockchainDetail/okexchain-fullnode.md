# OKExChain fullnode
### How to Run A Fullnode on OKEXChain
### Fullnodes Functions
- Stores the full blockchain history on disk and can answer the data request from the network.
- Receives and validates the new blocks and transactions.
- Verifies the states of every accounts.
### Supported Platforms
We support running a full node on Mac OS Xand Linux.
### Minimum Requirements
The hardware must meet certain requirements to run a full node.
- VPS running recent versions of Mac OS X or Linux.
- 500 GB of free disk space
- 4 cores of CPU and 8 gigabytes of memory (RAM).
- A broadband Internet connection with upload/download speeds of at least 1 megabyte per second
### Setings
##### Sync Mode
- Fast Sync
The default sync mode. Synchronizes a full node doing a fast synchronization by downloading the entire state database, requesting the headers first, and filling in block bodies and receipts afterward. Once the fast sync reaches the best block of the Binance Smart Chain network, it switches to full sync mode.
- Full Sync
Synchronizes a full node starting at genesis, verifying all blocks and executing all transactions. This mode is a bit slower than the fast sync mode but comes with increased security.
### Steps to Run a Fullnode
For more information, Please refer to [setting up a new node](https://okexchain-docs.readthedocs.io/en/add-evm-doc/getting-start/join-okexchain-testnet.html#setting-up-a-new-node)