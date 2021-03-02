<!--
order: 4
-->

# Join the Public Testnet With Docker
## Run OKExChain testnet fullnode with docker

### 1. Download the docker image

```
docker pull okexchain/fullnode-testnet:latest
```

### 2. Set the data directory

If you have a data snapshot, you can use it directly. If not, you can download the testnet snapshot from [here](https://okexchain-docs.readthedocs.io/en/latest/resources/snapshot.html), or do as follows:

- create a data directory
```
mkdir ${DATA_DIR}
```
- generate a json file in data directory
```
cd ${DATA_DIR}
echo '{"height": "0","round": "0","step": 0}' > priv_validator_state.json
```


### 3. Run docker container
```
docker run -d --name okexchain-testnet-fullnode -v ${DATA_DIR}:/root/.okexchaind/data/ -p 8545:8545 okexchain/fullnode-testnet:latest
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
