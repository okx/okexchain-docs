
# OKExChain Snapshot

Quick instructions on how to install the OKExChain snapshots.

## testnet
Download URL: 
  - [okexchain-v0.16.8-testnet-20210406-height_1875108.tar.gz](https://ok-public-hk.oss-cn-hongkong.aliyuncs.com/cdn/okexchain/snapshot/okexchain-v0.16.8-testnet-20210406-height_1875108.tar.gz)
  - [okexchain-v0.16.8-testnet-20210314-height_1337598.tar.gz](https://ok-public-hk.oss-cn-hongkong.aliyuncs.com/cdn/okexchain/snapshot/okexchain-v0.16.8-testnet-20210314-height_1337598.tar.gz)

## mainnet
Download URL: 
  - [okexchain-v0.16.8-mainnet-20210406-height_1882911.tar.gz](https://ok-public-hk.oss-cn-hongkong.aliyuncs.com/cdn/okexchain/snapshot/okexchain-v0.16.8-mainnet-20210406-height_1882911.tar.gz)

## Unpack the snapshot file for cosmos
```shell
mv ~/.okexchaind/data ~/.okexchaind/data-bak
# rm -rf ~/.okexchaind/data
cd ~/.okexchaind 
tar -zxvf okexchain-$version-$date-$height_xxx.tar.gz
```
