
# OKExChain Snapshot

Quick instructions on how to install the OKExChain testnet snapshots.

Download URL: 
  - [okexchain-v0.12.3-testnet1-20201023-height_1555881.tar.gz](https://ok-public-hk.oss-cn-hongkong.aliyuncs.com/cdn/okexchain/snapshot/okexchain-v0.12.3-testnet1-20201023-height_1555881.tar.gz)
  - [okexchain-v0.12.2-testnet1-20201013-height_1136926.tar.gz](https://ok-public-hk.oss-cn-hongkong.aliyuncs.com/cdn/okexchain/snapshot/okexchain-v0.12.2-testnet1-20201013-height_1136926.tar.gz)

## Unpack the snapshot file for cosmos
```shell
mv ~/.okexchaind/data ~/.okexchaind/data-bak
# rm -rf ~/.okexchaind/data
cd ~/.okexchaind 
tar -zxvf okexchain-$version-$date-$height_xxx.tar.gz
```
