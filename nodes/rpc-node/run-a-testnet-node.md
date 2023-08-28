# Run A Testnet Node

## Steps to Sync with Testnet
There are 2 methods to sync your testnet node. 

### 1. Sync from Genesis file
For more information on installation and launch, please [see here](/dev/quick-start/build-on-okbc/join-public-testnet.md).

### 2. Sync from Snapshot (Recommended)
Before you start services to sync, follow the steps below to use the [snapshot](https://static.okex.org/cdn/chain/okbc/snapshot/index.html):

1. To download okbchain source code and compile.

2. To download, unpack the TAR GZ file in the data directory, and start the RPC node, run the following command:
~~~
# 1. Initialize okbchain node configurationsexport OKBCHAIND_PATH=~/.okbchaind (or other directory)
okbchaind init your_custom_moniker --chain-id okbchaintest-195 --home ${OKBCHAIND_PATH}

# 2. download snapshot
rm -rf ${OKBCHAIND_PATH}/data
cd ${OKBCHAIND_PATH}
wget https://okg-pub-hk.oss-cn-hongkong.aliyuncs.com/cdn/chain/okbc/snapshot/testnet-$version-$date-$height-rocksdb.tar.gz
tar -zxvf testnet-$version-$date-$height-rocksdb.tar.gz
    
# 3. start okbchaind
okbchaind start --home ${OKBCHAIND_PATH}
~~~

For more information on installation and launch, please [see here](/dev/quick-start/build-on-okbc/join-public-testnet.md).
#### Notes
- Note 1: Be sure to compile with make testnet.
- Note 2: latest_version can be viewed [here](https://github.com/okx/okbchain/releases "here").
- Note 3: If this is the first time to run okbchaind, we should install rocksdb first. OKBChain team has provided a command to `make rocksdb` to help. You can try it in the okbchain folder.

