<!--
order: 4
-->

# Join the Public Mainnet With Docker
## Run OKExChain mainnet fullnode with docker

### 1. Download the docker image

```
docker pull okexchain/fullnode-mainnet:latest
```



### 2. Download the snapshot
You can download the mainnet snapshot from [here](https://okexchain-docs.readthedocs.io/en/latest/resources/snapshot.html). For example:

```shell
// 1.download the snapshpot
wget -c https://ok-public-hk.oss-cn-hongkong.aliyuncs.com/cdn/okexchain/snapshot/okexchain-v0.16.3-mainnet-20210127-height_275913.tar.gz

// 2.generate data directory
mkdir -p ~/okexchain/mainnet

// 3.unzip the snapshot to data directory
tar -zxvf okexchain-v0.16.3-mainnet-20210127-height_275913.tar.gz -C ~/okexchain/mainnet/
```



### 3. Run docker container

```
docker run -d --name okexchain-mainnet-fullnode -v ~/okexchain/mainnet/data:/root/.okexchaind/data/ -p 8545:8545 okexchain/fullnode-mainnet:latest
```



### 4. View the running log

```
docker logs --tail 100 -f okexchain-mainnet-fullnode
```



>  You can stop the docker container with command: `docker stop okexchain-mainnet-fullnode`, and then restart the docker container with command: `docker start okexchain-mainnet-fullnode`. When the docker container gets to the latest block, local RPC can be used：`http://localhost:8545`

