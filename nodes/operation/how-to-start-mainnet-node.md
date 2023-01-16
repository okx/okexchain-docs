# How to Start the Mainnet Node
## 1. Use Snapshots
[Snapshot link](https://forum.okt.club/d/154 "Snapshot link")

    # 1. Build exchaind
    git clone -b latest_version https://github.com/okx/exchain.git # The latest version can be viewed through this link(https://github.com/okx/exchain/releases/latest
    cd exchain).
    make mainnet # Compile the mainnet. The default database is leveldb.
    make mainnet WITH_ROCKSDB=true # Compile the mainnet. The used database is rocksdb.
    
    # 2. Initialize the configuration of exchain node
    export EXCHAIND_PATH=~/.exchaind (or other directory)
    exchaind init your_custom_moniker --chain-id exchain-66 --home ${EXCHAIND_PATH}
    
    # 3. Download snapshot
    rm -rf ${EXCHAIND_PATH}/data
    cd ${EXCHAIND_PATH}
    wget https://ok-public-hk.oss-cn-hongkong.aliyuncs.com/cdn/okexchain/snapshot/okexchain-$version-$date-$height_xxx.tar.gz
    tar -zxvf okexchain-$version-$date-$height_xxx.tar.gz
    
    # 4. Start exchaind# Start a leveldb node
    exchaind start --chain-id exchain-66 --home ${EXCHAIND_PATH}
    # Start a rocksdb node
    exchaind start --chain-id exchain-66 --db_backend rocksdb --home ${EXCHAIND_PATH}

## 2. Use Genesis File


    # 1. Build exchain
    git clone -b latest_version https://github.com/okx/exchain.git # The latest version can be viewed through this link(https://github.com/okx/exchain/releases/latest).cd exchain
    make mainnet # Compile the mainnet. The default database is leveldb.
    make mainnet WITH_ROCKSDB=true # Compile the mainnet. The used database is rocksdb.# 2. Initialize the configuration of exchain nodeexport EXCHAIND_PATH=~/.exchaind (or other directory)
    exchaind init your_custom_moniker --chain-id exchain-66 --home ${EXCHAIND_PATH}# 3. Download the genesis file(genesis.json)
    wget https://raw.githubusercontent.com/okx/mainnet/main/genesis.json -O ${EXCHAIND_PATH}/config/genesis.json
    
    # 4. Start exchaind# Start a node using leveldb
    exchaind start --chain-id exchain-66 --home ${EXCHAIND_PATH}# Start a node using rocksdb
    exchaind start --chain-id exchain-66 --db_backend rocksdb --home ${EXCHAIND_PATH}

### Notice
If you're using s3 snapshot to start a node, please make sure to add `pruning=nothing` to the startup parameters, as the default value of pruning is `default` which will prune the data.
In addition, it is recommended to configure the following parameters according to your needs.
- `--max-open=10000` Maximum number of connections, `1000` for default. Increasing this value can provide more connections that the rpc service can receive.
- `--disable-abci-query-mutex=1` The switch of lock in abci query, `0` for default (`0` means closed, `1` means open). The query performance can be improved when it is open.
- `--fast-query=1` The switch of fast query mode, `0` for default (`0` means closed, `1` means open). When this switch is opened, the query data will be additionally recorded to watch.db in order to improve the query performance.
- `--enable-bloom-filter=1` The switch of bloom filter, `0` for default (`0` means closed, `1` means open). The query performance for eth_getLogs will be improved when it is open.
- `--mempool.size=10000` The mempool size, `2000` for default. Increasing this value will increase the quantity's limit of transactions stored in mempool.
You can use `exchaind start -h` to see more details.

## 3. Start with Docker + Snapshot


    # 1. Initialize the configuration of exchain nodeexport EXCHAIND_PATH=~/.exchaind (or other directory)
    exchaind init your_custom_moniker --chain-id exchain-66 --home ${EXCHAIND_PATH}# 2. Download snapshot
    rm -rf ${EXCHAIND_PATH}/data
    cd ${EXCHAIND_PATH}# Please download the rocksdb snapshot corresponding to the mainnet as this mirror uses rocksdb.
    wget https://ok-public-hk.oss-cn-hongkong.aliyuncs.com/cdn/okexchain/snapshot/okexchain-$version-$date-$height_xxx.tar.gz
    tar -zxvf okexchain-$version-$date-$height_xxx.tar.gz
    
    # 3. Download the docker image
    docker pull okexchain/fullnode-mainnet:latest # This image uses data in rocksdb snapshot.# 4. Run docker based on the snapshot downloaded in the previous step.
    docker run -d --name exchain-mainnet-fullnode -v ~/.exchaind/data:/root/.exchaind/data/ -p 8545:8545 -p 26656:26656 okexchain/fullnode-mainnet:latest