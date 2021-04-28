
# OKExChain Snapshot

Quick instructions on how to install the OKExChain snapshots.

## testnet
Download URL: 
  - [okexchain-v0.18.0-testnet-20210423-height_2270911.tar.gz](https://ok-public-hk.oss-cn-hongkong.aliyuncs.com/cdn/okexchain/snapshot/data_180.tar.gz)

## mainnet
Download URL: 
  - [okexchain-v0.16.3-mainnet-20210428-height_2322600.tar.gz](https://ok-public-hk.oss-cn-hongkong.aliyuncs.com/cdn/okexchain/snapshot/okexchain-v0.16.8-mainnet-20210428-height-2322600.tar.gz)

## Unpack the snapshot file for cosmos
```shell
mv ~/.exchaind/data ~/.exchaind/data-bak
# rm -rf ~/.exchaind/data
cd ~/.exchaind 
tar -zxvf okexchain-$version-$date-$height_xxx.tar.gz
```
