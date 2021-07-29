
# OKExChain Snapshot

Quick instructions on how to install the OKExChain snapshots.

## testnet
Download URL: 
  - [okexchain-v0.18.7-testnet-20210715-height_4322747.tar.gz](https://ok-public-hk.oss-cn-hongkong.aliyuncs.com/cdn/okexchain/snapshot/okexchain-v0.18.7-testnet-20210715-height_4322747.tar.gz)
  - [okexchain-v0.18.0-testnet-20210423-height_2270911.tar.gz](https://ok-public-hk.oss-cn-hongkong.aliyuncs.com/cdn/okexchain/snapshot/data_180.tar.gz)

## mainnet
Download URL: 
  - [okexchain-v0.18.9-mainnet-20210729-height_4534291.tar.gz](https://ok-public-hk.oss-cn-hongkong.aliyuncs.com/cdn/okexchain/snapshot/okexchain-v0.18.9-mainnet-20210729-height_4534291.tar.gz)
  - [okexchain-v0.18.4-mainnet-20210510-height_2676566.tar.gz](https://ok-public-hk.oss-cn-hongkong.aliyuncs.com/cdn/okexchain/snapshot/okexchain-v0.18.4-mainnet-20210510-height_2676566.tar.gz)
  - [okexchain-v0.16.3-mainnet-height_0-2322600.tar.gz](https://ok-public-hk.oss-cn-hongkong.aliyuncs.com/cdn/okexchain/snapshot/okexchain-v0.16.8-mainnet-20210428-height-2322600.tar.gz), need exchain version is [v0.16.3](https://github.com/okex/exchain/releases/tag/v0.16.3)

## Unpack the snapshot file for cosmos
```shell
mv ~/.exchaind/data ~/.exchaind/data-bak
# rm -rf ~/.exchaind/data
cd ~/.exchaind 
tar -zxvf okexchain-$version-$date-$height_xxx.tar.gz
```
