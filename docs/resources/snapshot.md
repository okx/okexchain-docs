
# OKExChain Snapshot

Quick instructions on how to install the OKExChain testnet snapshots.

Download URL: 
  - [okexchain-v0.10.8-20200622-height_7207321.tar.gz](https://ok-public-hk.oss-cn-hongkong.aliyuncs.com/cdn/okexchain/snapshot/okexchain-v0.10.8-20200622-height_7207321.tar.gz)
  - [okexchain-v0.10.5-20200610-height_6775432.tar.gz](https://ok-public-hk.oss-cn-hongkong.aliyuncs.com/cdn/okexchain/snapshot/okexchain-v0.10.5-20200610-height_6775432.tar.gz)

## Unpack the snapshot file for cosmos
```shell
mv ~/.okexchaind/data ~/.okexchaind/data-bak
# rm -rf ~/.okexchaind/data
cd ~/.okexchaind 
tar -zxvf okexchain-$version-$date-$height_xxx.tar.gz
```
