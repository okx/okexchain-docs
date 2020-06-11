
# OKChain Snapshot

Quick instructions on how to install the OKChain testnet snapshots.

Download URL: [okchain-v0.10.5-20200610-height_6775432.tar.gz](https://ok-public-hk.oss-cn-hongkong.aliyuncs.com/cdn/okchain/snapshot/okchain-v0.10.5-20200610-height_6775432.tar.gz)

## Unpack the snapshot file for cosmos
```shell
mv ~/.okchaind/data ~/.okchaind/data-bak
# rm -rf ~/.okchaind/data
cd ~/.okchaind 
tar -zxvf okchain-$version-$date-$height_xxx.tar.gz
```
