# How to Start the Mainnet Node
## 1. Using exchaind and snapshots
[Snapshot link](https://forum.okt.club/d/154 "Snapshot link")


    # 1. Build exchaind use the latest version of release# latest_version can be viewed through this link https://github.com/okx/exchain/releases/latest
    git clone -b ${latest_version} https://github.com/okx/exchain.git 
    cd exchain
    make mainnet  # Compile the mainnet, default WITH_ROCKSDB=true

Note 1: Be sure to compile with **make mainnet**  
Note 2: latest_version can be viewed [here](https://github.com/okx/exchain/releases/tag/v1.6.7.2 "here")  
Note 3: If this is the first time to run exchaind, we should install rocksdb first. OKC team has provided a command to `make rocksdb` to help. You can try it in the exchain folder.  
Note 4: If you encounter problems in the process of compiling rocksdb, please refer to [this link](https://forum.okt.club/d/267-rocksdb "this link")

## 2. Using exchaind and genesis.json file


    # 1. Build exchaind with the latest version# latest_version can be viewed through this link https://github.com/okx/exchain/releases/latest
    git clone -b ${latest_version} https://github.com/okx/exchain.git 
    cd exchain
    make mainnet  # Compile the mainnet, default WITH_ROCKSDB=true

Note 1: Be sure to compile with **make mainnet**  
Note 2: latest_version can be viewed [here](https://github.com/okx/exchain/releases/tag/v1.6.7.2 "here")  
Note 3: If this is the first time to run exchaind, we should install rocksdb first. OKC team has provided a command to `make rocksdb` to help. You can try it in the exchain folder.  
Note 4: If you encounter problems in the process of compiling rocksdb, please refer to [this link](https://forum.okt.club/d/267-rocksdb "this link")



    # 2. Initialize exchain node configurations.export EXCHAIND_PATH=~/.exchaind (or other directory)
    exchaind init your_custom_moniker --chain-id exchain-66 --home ${EXCHAIND_PATH}# 3. download genesis.json
    wget https://raw.githubusercontent.com/okx/mainnet/main/genesis.json -O ${EXCHAIND_PATH}/config/genesis.json
    
    # 4. start exchained# rpc node
    exchaind start --home ${EXCHAIND_PATH}# validator node
    exchaind start --node-mode=val --home ${EXCHAIND_PATH}# archive node
    exchaind start --pruning=nothing --iavl-enable-async-commit=false --fast-query=false --home ${EXCHAIND_PATH}

### Notice
exchaind will put the state increment of each height into the memory, and after N block heights, it will persist uniformly.
If the exchaind node is forced to exit, and restarted again, the state data would be lost, and data repair is required, so:
**It is strongly recommended that you should not force exit the exchaind node.
With docker, it is strongly recommended to stop the container completely before performing other operations.**

#### Steps
- Stop exchaind from the command line


    # Both commands can be used, just choose one of the two
    kill -2 ${pid}
    kill -15 ${pid}
    

- Stop exchaind in docker


    docker stop -t 1200 or docker-compose down -t 1200

#### Check for normal exit
After executing the exit command, if the following records appear in the log, it indicates that this smooth exit will not cause data corruption


    I[2022-11-19|02:58:37.689][19369] exiting....module=main

## 3. Using docker and snapshots


    # 1. Initialize exchain node configurations. If the node already exists, this step can be skipped
    export EXCHAIND_PATH=~/.exchaind (or other directory)
    exchaind init your_custom_moniker --chain-id exchain-66 --home ${EXCHAIND_PATH}
    
    # 2. download snapshot
    rm -rf ${EXCHAIND_PATH}/data
    cd ${EXCHAIND_PATH}
    # This image uses rocksdb data, so download the rocksdb snapshot corresponding to the mainnet.
    wget https://okg-pub-hk.oss-cn-hongkong.aliyuncs.com/cdn/oec/snapshot/mainnet-$version-$date-$height-rocksdb.tar.gz
    tar -zxvf mainnet-$version-$date-$height-rocksdb.tar.gz
    
    # 3. download the docker image
    docker pull okexchain/fullnode-mainnet:latest # This image uses rocksdb snapshot data.
    
    # 4. run docker based the snapshot downloaded in the previous step Start based on snapshot.
    docker run -d --name exchain-mainnet-fullnode -v ~/.exchaind/data:/root/.exchaind/data/ -p 8545:8545 -p 26656:26656 okexchain/fullnode-mainnet:latest
    