
# OKExChain Snapshot

Quick instructions on how to install the OKExChain snapshots.

## testnet
Download URL: 
  - [okexchain-v0.16.8-testnet-20210310-height_1245356.tar.gz](https://ok-public-hk.oss-cn-hongkong.aliyuncs.com/cdn/okexchain/snapshot/okexchain-v0.16.8-testnet-20210310-height_1245356.tar.gz)

## mainnet
Download URL: 
  - [okexchain-v0.16.3-mainnet-20210127-height_275913.tar.gz](https://ok-public-hk.oss-cn-hongkong.aliyuncs.com/cdn/okexchain/snapshot/okexchain-v0.16.3-mainnet-20210127-height_275913.tar.gz)

## Unpack the snapshot file for cosmos
```shell
mv ~/.okexchaind/data ~/.okexchaind/data-bak
# rm -rf ~/.okexchaind/data
cd ~/.okexchaind 
tar -zxvf okexchain-$version-$date-$height_xxx.tar.gz
```
