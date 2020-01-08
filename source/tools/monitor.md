<!---
order: 1
--->

# 监控工具

## prometheus

Tendermint 本身也支持使用prometheus metrics（指标。通过设置 `config/config.toml` 中的 `prometheus=true` 开启该功能. 通过设置`prometheus_listen_addr`改变默认 `:26660`的监听地址。目前okchain测试网已经默认开启该功能。

## okchain 目前提供的指标

| Name                                            | Type      |     Tags      | Description                         |
| :---------------------------------------------- | :-------- | :-----------: | :---------------------------------- |
| tendermint_consensus_height                     | Gauge     |       √       | 共识块高                            |
| tendermint_consensus_validators                 | Gauge     |       √       | 验证者数量                          |
| tendermint_consensus_validators_power           | Gauge     |       √       | 验证者总投票权重                    |
| tendermint_consensus_missing_validators         | Gauge     |       √       | 未参与验证者数量                    |
| tendermint_consensus_missing_validators_power   | Gauge     |       √       | 未参与验证者总投票权重              |
| tendermint_consensus_byzantine_validators       | Gauge     |       √       | 作恶验证者数量                      |
| tendermint_consensus_byzantine_validators_power | Gauge     |       √       | 作恶验证者总投票权重                |
| tendermint_consensus_block_interval_seconds     | Histogram |       √       | 出块间隔                            |
| tendermint_consensus_rounds                     | Gauge     |       √       | 共识轮次                            |
| tendermint_consensus_num_txs                    | Gauge     |       √       | 区块当前包含交易数量                |
| tendermint_consensus_block_parts                | Counter   |    peer_id    | 区块被切分的块数                    |
| tendermint_consensus_latest_block_height        | Gauge     |       √       | 已共识完成的最新块高                |
| tendermint_consensus_fast_syncing               | Gauge     |       √       | 0 (not fast syncing)  ，1 (syncing) |
| tendermint_consensus_total_txs                  | Gauge     |       √       | 区块中的交易总数量                  |
| tendermint_consensus_block_size_bytes           | Gauge     |       √       | 区块大小                            |
| tendermint_consensus_new_round_processing_time  | Gauge     |       √       | 共识初始化的时间                    |
| tendermint_consensus_propose_processing_time    | Gauge     |       √       | 共识propose时间                     |
| tendermint_consensus_prevote_processing_time    | Gauge     |       √       | 共识prevote时间                     |
| tendermint_consensus_precommit_processing_time  | Gauge     |       √       | 共识precommit时间                   |
| tendermint_consensus_commit_processing_time     | Gauge     |       √       | 共识commit时间                      |
| tendermint_p2p_peers                            | Gauge     |       √       | 连接的peer数量                      |
| tendermint_p2p_peer_receive_bytes_total         | Counter   | peer_id, chID | 从指定peer接受到的总字节数          |
| tendermint_p2p_peer_send_bytes_total            | Counter   | peer_id, chID | 发送到一个peer节点的总字节数        |
| tendermint_p2p_peer_pending_send_bytes          | Gauge     |    peer_id    | 处于等待发送状态的字节数量          |
| tendermint_p2p_num_txs                          | Gauge     |    peer_id    | 从某个peer节点广播过来的交易数量    |
| tendermint_mempool_size                         | Gauge     |       √       | transaction当前uncommitted数量      |
| tendermint_mempool_tx_size_bytes                | Histogram |       √       | 内存池中增加的交易大小              |
| tendermint_mempool_failed_txs                   | Counter   |       √       | 内存池中校验失败的交易数量          |
| tendermint_mempool_recheck_times                | Counter   |       √       | 内存池中执行过 rechecked的交易数量  |
| tendermint_state_block_processing_time          | Histogram |       √       | 区块处理时间                        |
| x_order_canceled                                | Gauge     |       √       | 取消的挂单                          |
| x_order_expired                                 | Gauge     |       √       | 过期的挂单                          |
| x_order_fullfilled                              | Gauge     |       √       | 处理完成的挂单                      |
| x_order_partial_filled                          | Gauge     |       √       | 处理部分的挂单                      |
| x_order_pending                                 | Gauge     |       √       | 待处理的挂单                        |

## 配置

编写`monitor.yml`

```yaml
version: '2'
services:
  prometheus:
    image: prom/prometheus
    container_name: prometheus
    hostname: prometheus
    user: "root"
    volumes:
      - ./prometheus_config.yml:/etc/prometheus/prometheus.yml
    ports:
      - "9090:9090"
      
  grafana:
    image: grafana/grafana
    container_name: grafana
    hostname: grafana
    user: "root"
    ports:
      - '3000:3000'      
```

在同级目录下，编写`prometheus_config.yml`

```yaml
global:
  scrape_interval:     15s # Set the scrape interval to every 15 seconds. Default is every 1 minute.
  evaluation_interval: 15s # Evaluate rules every 15 seconds. The default is every 1 minute.

scrape_configs:
  - job_name: 'node'
    static_configs:
      - targets: ['localhost:26660']
        labels:
          instance: fullnode
```

在同级目录下，启动`prometheus`和`grafana`

```shell
docker-compose -f monitor.yml up -d
```

启动后，通过[http://localhost:9090](http://localhost:9090/)上可以看到prometheus的信息，通过[http://localhost:3000](http://localhost:3000/)(默认账号密码均为admin)可以配置适用于okchain的仪表盘(模板id: 7044)，用户可自行通过指标名称调整仪表。

注：用户也可自行通过其他方式启动`prometheus`和`grafana`
