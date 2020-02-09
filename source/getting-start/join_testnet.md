
# 加入OKChain测试网络

```
注：在开始下面的操作之前，你需要安装并配置好okchaind
```
okchaind的安装请参考[OKChain安装](install.html##OKChain安装)

## 1. 初始化新节点

初始化节点并生成必要的配置文件：
```bash
okchaind init --chain-id okchain 
```

在`$HOME/.okchaind/config/config.toml`配置文件中对节点的别名`moniker`进行编辑
```
# A custom human readable name for this node
moniker = "<your_custom_moniker>"
```
说明：
moniker只能包含ASCII字符. Unicode字符可能导致节点在网络中不可见！


## 2. 创世文件

创世文件介绍请参考[genesis文件](genesis.md)

### 2.1 下载创世文件:

从官网[genesis文件](https://github.com/okex/okchain-binaries/blob/master/genesis.json)链接下载genesis.json创世文件

并校验genesis.json的完整性，保证与测试网使用的是同一个创世文件
```
$ shasum -a 256 genesis.json
f2ae29a36f5872571f8130197433ace6b163f56608eb116c8bb51449252ca363 genesis.json
```
将测试网genesis.json复制到okchaind配置目录下，配置目录为`$HOME/.okchaind/config`

## 3. 种子节点

节点初始化后，需要通过种子节点加入OKChain测试网。

OKChain测试网种子节点配置：
```
b7c6bdfe0c3a6c1c68d6d6849f1b60f566e189dd@3.13.150.20:26656
d7eec05e6449945c8e0fd080d58977d671eae588@35.176.111.229:26656
223b5b41d1dba9057401def49b456630e1ab2599@18.162.106.25:26656
```
将种子节点配置到`$HOME/.okchaind/config/config.toml`。
```
# Comma separated list of seed nodes to connect to
seeds = "b7c6bdfe0c3a6c1c68d6d6849f1b60f566e189dd@3.13.150.20:26656,d7eec05e6449945c8e0fd080d58977d671eae588@35.176.111.229:26656,223b5b41d1dba9057401def49b456630e1ab2599@18.162.106.25:26656"

```

## 4. 启动节点

### 4.1 使用okchaind启动

通过`config.toml`中配置的种子节点连接到OKChain
```bash
okchaind start 
```


### 4.2 使用docker启动

#### 4.2.1 使用docker命令启动

okchaind也可以通过容器的方式启动，目前官方发布了多个docker镜像，$TAG表示对应的okchaind版本, 测试网`$TAG=v0.1.0`.
```bash
$ docker run \
    -e OKDEX_P2P_SEEDS=b7c6bdfe0c3a6c1c68d6d6849f1b60f566e189dd@3.13.150.20:26656,d7eec05e6449945c8e0fd080d58977d671eae588@35.176.111.229:26656,223b5b41d1dba9057401def49b456630e1ab2599@18.162.106.25:26656 \
    -e OKDEX_P2P_ADDR_BOOK_STRICT=false \
    -e OKDEX_LOG_STDOUT=false \
    -e OKDEX_LOG_FILE=/root/.okchaind/okchaind.log \
    -p 26656:26656 \
    -p 26657:26657 \
    -p 26659:26659 \
    -d okchain/testnet:v0.1.0
```
#### 4.2.2 使用docker-compose命令启动

首先，保存下面内容到`okchain_full_node.yml`文件中。
```yml
version: '2'

services:
  mynode:
    container_name: mynode
    image: "okchain/testnet:v0.1.0"
    environment:
      - OKDEX_P2P_ADDR_BOOK_STRICT=false
      - OKDEX_LOG_LEVEL=*:info
      - OKDEX_LOG_STDOUT=false
      - OKDEX_LOG_FILE=/root/.okchaind/okchaind.log
      - OKDEX_PROF_LADDR=0.0.0.0:6060
      - OKDEX_P2P_LADDR=tcp://0.0.0.0:26656
      - OKDEX_P2P_SEEDS=b7c6bdfe0c3a6c1c68d6d6849f1b60f566e189dd@3.13.150.20:26656,d7eec05e6449945c8e0fd080d58977d671eae588@35.176.111.229:26656,223b5b41d1dba9057401def49b456630e1ab2599@18.162.106.25:26656
      - OKDEX_MONIKER=mynode
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
      - ./okchain_data/mynode:/root/.okchaind
    ports:
      - "26656:26656"
      - "26657:26657"
      - "26659:26659"
```
然后,执行命令`docker-compose -f okchain_full_node.yml up -d`, 成功后会在本地启动okchaind容器并连接到测试网络。


### 4.3 开启backend模块

如果需要从节点中获取额外数据（如K线、行情、订单列表、交易列表等），那么在启动节点时需要开启backend模块。  
```bash
okchaind start --backend.enable_backend=1 --backend.orm_engine.engine_type=sqlite3 --backend.orm_engine.connect_str=$db_filepath
```
1、本地跑一个sqlite3数据库，命令如下  
```bash
sqlite3 backend.db 
``` 
2、启动加载backend.db  
```bash
okchaind start --backend.enable_backend=1 --backend.orm_engine.engine_type=sqlite3 --backend.orm_engine.connect_str=/root/backend.db
```


## 5. 关闭节点

当需要关闭节点的时候，需要按照如下方式让okchaind优雅退出, 否则会造成区块数据损坏：

### 5.1 关闭okchaind start方式启动的节点

```bash
# grep "okchaind" | grep -v grep |awk '{print "kill -2 "$1""}' |  bash
okchaind stop
```

### 5.2 关闭docker方式启动的节点

```bash
# docker exec -i <container_id> ps -ef| grep "okchaind" | grep -v grep |awk '{print "kill -2 "$1""}' | docker exec -i <container_id> /bin/bash
docker exec -i <container_id> okchaind stop
```

### 5.3 关闭docker-compose方式启动的节点

```bash
# docker-compose exec -i <container_id> ps -ef| grep "okchaind" | grep -v grep |awk '{print "kill -2 "$1""}' | docker-compose exec -i <container_id> /bin/bash
docker-compose exec -i <container_id> okchaind stop
```
