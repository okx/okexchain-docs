# Supervision tool

## prometheus

Tendermint also supports the use of prometheus metrics. This function is
enabled by setting `prometheus=true` in `config/config.toml`. Through
setting `prometheus_listen_addr`, the default supervision address
`:26660` is changed. The default status is set as enable on okc's
testnet.

## Metrics available on okc

| Name                                                  | Type        | Tags             | Description                                                                |
| -------------------------------------------------------|-------------|------------------|----------------------------------------------------------------------------| 
| tendermint\_consensus\_height                         | Gauge       | √                | consensus block height                                                     |
| tendermint\_consensus\_validators                     | Gauge       | √                | number of validators                                                       |
| tendermint\_consensus\_validators\_power              | Gauge       | √                | total voting power of validators                                           |
| tendermint\_consensus\_missing\_validators            | Gauge       | √                | number of missing validators                                               |
| tendermint\_consensus\_missing\_validators\_power     | Gauge       | √                | total voting power of missing validators                                   |
| tendermint\_consensus\_byzantine\_validators          | Gauge       | √                | number of byzantine validators                                             |
| tendermint\_consensus\_byzantine\_validators\_power   | Gauge       | √                | total voting power of byzantine validators                                 |
| tendermint\_consensus\_block\_interval\_seconds       | Histogram   | √                | block interval                                                             |
| tendermint\_consensus\_rounds                         | Gauge       | √                | consensus round                                                            |
| tendermint\_consensus\_num\_txs                       | Gauge       | √                | number of transactions in the block                                        |
| tendermint\_consensus\_block\_parts                   | Counter     | peer\_id         | number of block parts                                                      |
| tendermint\_consensus\_latest\_block\_height          | Gauge       | √                | latest block height after consensus                                        |
| tendermint\_consensus\_fast\_syncing                  | Gauge       | √                | 0 (not fast syncing) , 1 (syncing)                                         |
| tendermint\_consensus\_total\_txs                     | Gauge       | √                | total number of transactions in the block                                  |
| tendermint\_consensus\_block\_size\_bytes             | Gauge       | √                | block size                                                                 |
| tendermint\_consensus\_new\_round\_processing\_time   | Gauge       | √                | processing time for consensus initialization                               |
| tendermint\_consensus\_propose\_processing\_time      | Gauge       | √                | consensus proposal processing time                                         |
| tendermint\_consensus\_prevote\_processing\_time      | Gauge       | √                | consensus prevote processing time                                          |
| tendermint\_consensus\_precommit\_processing\_time    | Gauge       | √                | consensus precommit processing time                                        |
| tendermint\_consensus\_commit\_processing\_time       | Gauge       | √                | consensus commit processing time                                           |
| tendermint\_p2p\_peers                                | Gauge       | √                | number of connected peers                                                  |
| tendermint\_p2p\_peer\_receive\_bytes\_total          | Counter     | peer\_id, chID   | total bytes received from the specific peer                                |
| tendermint\_p2p\_peer\_send\_bytes\_total             | Counter     | peer\_id, chID   | total bytes sent to a peer node                                            |
| tendermint\_p2p\_peer\_pending\_send\_bytes           | Gauge       | peer\_id         | number of bytes pending to be sent                                         |
| tendermint\_p2p\_num\_txs                             | Gauge       | peer\_id         | number of transactions broadcast from a peer node                          |
| tendermint\_mempool\_size                             | Gauge       | √                | number of uncommitted transactions                                         |
| tendermint\_mempool\_tx\_size\_bytes                  | Histogram   | √                | increased transaction size in the memory pool                              |
| tendermint\_mempool\_failed\_txs                      | Counter     | √                | number of transactions that fail to pass verification in the memory pool   |
| tendermint\_mempool\_recheck\_times                   | Counter     | √                | number of rechecked transactions executed in the memory pool               |
| tendermint\_state\_block\_processing\_time            | Histogram   | √                | block processing time                                                      |
| x\_order\_canceled                                    | Gauge       | √                | order canceled                                                             |
| x\_order\_expired                                     | Gauge       | √                | order expired                                                              |
| x\_order\_fullfilled                                  | Gauge       | √                | order filled                                                               |
| x\_order\_partial\_filled                             | Gauge       | √                | order partially filled                                                     |
| x\_order\_pending                                     | Gauge       | √                | order pending                                                              |

## Supervision tool

Create `monitor.yml`

``` {.yaml}
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

Create `prometheus_config.yml` in the same directory

``` {.yaml}
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

Enable `prometheus` and `grafana` in the same directory

``` {.shell}
docker-compose -f monitor.yml up -d
```

After enabling the above, you can see the information on prometheus via
[http://localhost:9090](http://localhost:9090/). You can configure a
dashboard (template id: 7044) suitable for okc via
[http://localhost:3000](http://localhost:3000/)(the default account name
and password are both admin) and adjust it by customizing the names of
metrics.

Note: Users can also enable `prometheus` and `grafana` through other
methods.
