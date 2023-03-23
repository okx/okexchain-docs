# Run A Testnet Node

## Steps to Sync with Testnet
There are 2 methods to sync your testnet node. Please note that testnet node only supports snapshots startup.

### 1. Sync from Snapshot (Recommended)
Before you start services to sync, follow the steps below to use the snapshot:

1. To download okbchain source code and compile, by running the following command:
~~~
# 1. build okbchaind# latest_version can be viewed through this link https://github.com/okx/okbchain/releases/latest
git clone -b ${latest_version} https://github.com/okx/okbchain.git
cd okbchain
make testnet 
~~~

2. To download, unpack the TAR GZ file in the data directory, and start the RPC node, run the following command:
~~~
# 2. Initialize okbchain node configurationsexport OKBCHAIND_PATH=~/.okbchaind (or other directory)
okbchaind init your_custom_moniker --chain-id okbchaintest-195 --home ${OKBCHAIND_PATH}# 3. download snapshot
rm -rf ${OKBCHAIND_PATH}/data
cd ${OKBCHAIND_PATH}
wget https://okg-pub-hk.oss-cn-hongkong.aliyuncs.com/cdn/okbc/snapshot/testnet-$version-$date-$height-rocksdb.tar.gz
tar -zxvf testnet-$version-$date-$height-rocksdb.tar.gz
    
# 4. start okbchaind
okbchaind start --home ${OKBCHAIND_PATH}
~~~
#### Notes
- Note 1: Be sure to compile with make testnet.
- Note 2: latest_version can be viewed [here](https://github.com/okx/okbchain/releases/tag/v1.6.7.2 "here").
- Note 3: If this is the first time to run okbchaind, we should install rocksdb first. OKB Chain team has provided a command to `make rocksdb` to help. You can try it in the okbchain folder.

### 2. Sync with Docker and Snapshot
Run the following commands to sync RPC node with docker and snapshot.
~~~
# 1. Initialize okbchain node configurationsexport OKBCHAIND_PATH=~/.okbchaind (or other directory)
okbchaind init your_custom_moniker --chain-id okbchaintest-195 --home ${OKBCHAIND_PATH}# 2. download snapshot
rm -rf ${OKBCHAIND_PATH}/data
cd ${OKBCHAIND_PATH}
wget https://okg-pub-hk.oss-cn-hongkong.aliyuncs.com/cdn/okbc/snapshot/testnet-$version-$date-$height-rocksdb.tar.gz
tar -zxvf testnet-$version-$date-$height-rocksdb.tar.gz
    
# 3. download the docker image
docker pull okbchain/fullnode-testnet:latest
    
# 4. run docker based the snapshot downloaded in the previous step Start based on snapshot.
docker run -d --name okbchain-testnet-fullnode -v ~/.okbchaind/data:/root/.okbchaind/data/ -p 8545:8545 -p 26656:26656 okbchain/fullnode-testnet:latest
~~~