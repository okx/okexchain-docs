# Supervision tool

## prometheus

Tendermint also supports the use of prometheus metrics. This function is
enabled by setting `prometheus=true` in `config/config.toml`. Through
setting `prometheus_listen_addr`, the default supervision address
`:26660` is changed. The default status is set as enable on okc's
testnet.

## Metrics available on okc

  ---------------------------------------------------------------------------------------------------------
  Name                                              Type        Tags       Description
  ------------------------------------------------- ----------- ---------- --------------------------------
  tendermint_consensus_height                       Gauge       √          consensus block height

  tendermint_consensus_validators                   Gauge       √          number of validators

  tendermint_consensus_validators_power             Gauge       √          total voting power of validators

  tendermint_consensus_missing_validators           Gauge       √          number of missing validators

  tendermint_consensus_missing_validators_power     Gauge       √          total voting power of missing
                                                                           validators

  tendermint_consensus_byzantine_validators         Gauge       √          number of byzantine validators

  tendermint_consensus_byzantine_validators_power   Gauge       √          total voting power of byzantine
                                                                           validators

  tendermint_consensus_block_interval_seconds       Histogram   √          block interval

  tendermint_consensus_rounds                       Gauge       √          consensus round

  tendermint_consensus_num_txs                      Gauge       √          number of transactions in the
                                                                           block

  tendermint_consensus_block_parts                  Counter     peer_id    number of block parts

  tendermint_consensus_latest_block_height          Gauge       √          latest block height after
                                                                           consensus

  tendermint_consensus_fast_syncing                 Gauge       √          0 (not fast syncing) , 1
                                                                           (syncing)

  tendermint_consensus_total_txs                    Gauge       √          total number of transactions in
                                                                           the block

  tendermint_consensus_block_size_bytes             Gauge       √          block size

  tendermint_consensus_new_round_processing_time    Gauge       √          processing time for consensus
                                                                           initialization

  tendermint_consensus_propose_processing_time      Gauge       √          consensus proposal processing
                                                                           time

  tendermint_consensus_prevote_processing_time      Gauge       √          consensus prevote processing
                                                                           time

  tendermint_consensus_precommit_processing_time    Gauge       √          consensus precommit processing
                                                                           time

  tendermint_consensus_commit_processing_time       Gauge       √          consensus commit processing time

  tendermint_p2p_peers                              Gauge       √          number of connected peers

  tendermint_p2p_peer_receive_bytes_total           Counter     peer_id,   total bytes received from the
                                                                chID       specific peer

  tendermint_p2p_peer_send_bytes_total              Counter     peer_id,   total bytes sent to a peer node
                                                                chID       

  tendermint_p2p_peer_pending_send_bytes            Gauge       peer_id    number of bytes pending to be
                                                                           sent

  tendermint_p2p_num_txs                            Gauge       peer_id    number of transactions broadcast
                                                                           from a peer node

  tendermint_mempool_size                           Gauge       √          number of uncommitted
                                                                           transactions

  tendermint_mempool_tx_size_bytes                  Histogram   √          increased transaction size in
                                                                           the memory pool

  tendermint_mempool_failed_txs                     Counter     √          number of transactions that fail
                                                                           to pass verification in the
                                                                           memory pool

  tendermint_mempool_recheck_times                  Counter     √          number of rechecked transactions
                                                                           executed in the memory pool

  tendermint_state_block_processing_time            Histogram   √          block processing time

  x_order_canceled                                  Gauge       √          order canceled

  x_order_expired                                   Gauge       √          order expired

  x_order_fullfilled                                Gauge       √          order filled

  x_order_partial_filled                            Gauge       √          order partially filled

  x_order_pending                                   Gauge       √          order pending
  ---------------------------------------------------------------------------------------------------------

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
