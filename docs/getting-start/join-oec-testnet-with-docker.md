<!--
order: 4
-->

# Join the Public Testnet With Docker
## Run OKC testnet fullnode with docker

### 1. Download the docker image

```
docker pull okexchain/fullnode-testnet:latest
```

### 2. Set the data directory


Download the testnet snapshot from [here](https://okexchain-docs.readthedocs.io/en/latest/resources/snapshot.html), and unzip it into a data directory ${DATA_DIR}.



### 3. Run docker container
```
docker run -d --name okexchain-testnet-fullnode -v ${DATA_DIR}:/root/.exchaind/data/ -p 8545:8545 okexchain/fullnode-testnet:latest
```
`Notice: ${DATA_DIR} has to be an absolute path`


### 4. View the running log
```
docker logs --tail 100 -f okexchain-testnet-fullnode
```

### 5. Stop and restart the fullnode
- Stop
```
docker stop okexchain-testnet-fullnode
```
- Restart
```
docker start okexchain-testnet-fullnode
```

### 5. RPC
When docker gets to the latest block, local RPC can be used：`http://localhost:8545`
