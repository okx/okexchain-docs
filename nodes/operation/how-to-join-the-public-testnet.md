# How to Join the Public Testnet
There are two ways to start exchaind testnet node.Please note that testnet node only supports snapshots startup.
## 1. Using exchaind and snapshots


    # 1. build exchaind# latest_version can be viewed through this link https://github.com/okx/exchain/releases/latest
    git clone -b ${latest_version} https://github.com/okx/exchain.git
    cd exchain
    make testnet 

Note 1: Be sure to compile with **make testnet**
Note 2: latest_version can be viewed [here](https://github.com/okx/exchain/releases/tag/v1.6.7.2 "here")
Note 3: If this is the first time to run exchaind, we should install rocksdb first. OKTC team has provided a command to `make rocksdb` to help. You can try it in the exchain folder.
Note 4: If you encounter problems in the process of compiling rocksdb, please refer to [this link](https://forum.okt.club/d/267-rocksdb "this link")


    # 2. Initialize exchain node configurationsexport EXCHAIND_PATH=~/.exchaind (or other directory)
    exchaind init your_custom_moniker --chain-id exchain-65 --home ${EXCHAIND_PATH}# 3. download snapshot
    rm -rf ${EXCHAIND_PATH}/data
    cd ${EXCHAIND_PATH}
    wget https://okg-pub-hk.oss-cn-hongkong.aliyuncs.com/cdn/chain/okc/snapshot/testnet-$version-$date-$height-rocksdb.tar.gz
    tar -zxvf testnet-$version-$date-$height-rocksdb.tar.gz
    
    # 4. start exchaind
    exchaind start --home ${EXCHAIND_PATH}

## 2. Using docker and snapshots


    # 1. Initialize exchain node configurationsexport EXCHAIND_PATH=~/.exchaind (or other directory)
    exchaind init your_custom_moniker --chain-id exchain-65 --home ${EXCHAIND_PATH}# 2. download snapshot
    rm -rf ${EXCHAIND_PATH}/data
    cd ${EXCHAIND_PATH}
    wget https://okg-pub-hk.oss-cn-hongkong.aliyuncs.com/cdn/chain/okc/snapshot/testnet-$version-$date-$height-rocksdb.tar.gz
    tar -zxvf testnet-$version-$date-$height-rocksdb.tar.gz
    
    # 3. download the docker image
    docker pull okexchain/fullnode-testnet:latest
    
    # 4. run docker based the snapshot downloaded in the previous step Start based on snapshot.
    docker run -d --name exchain-testnet-fullnode -v ~/.exchaind/data:/root/.exchaind/data/ -p 8545:8545 -p 26656:26656 okexchain/fullnode-testnet:latest
