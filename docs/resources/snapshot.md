
# OKExChain Snapshot

Quick instructions on how to install the OKExChain snapshots.

## testnet
Download URL: 
  - [v0.18.10-normal-20210806-height_4876708.tar.gz](https://ok-public-hk.oss-cn-hongkong.aliyuncs.com/cdn/okexchain/snapshot/okexchain-v0.18-testnet-20210806-height_4876708.tar.gz)
  - [v0.18.7-normal-20210715-height_4322747.tar.gz](https://ok-public-hk.oss-cn-hongkong.aliyuncs.com/cdn/okexchain/snapshot/okexchain-v0.18.7-testnet-20210715-height_4322747.tar.gz)
  - [v0.18.0-normal-20210423-height_2270911.tar.gz](https://ok-public-hk.oss-cn-hongkong.aliyuncs.com/cdn/okexchain/snapshot/data_180.tar.gz)

## mainnet
Download URL: For the differences between snapshots, please refer to：[this](https://forum.okt.club/d/169-oec)
#### 1. Mini SnapShot
  - [v0.18.10-mini(9.7G)-20210811-height_4797527.tar.gz](https://ok-public-hk.oss-cn-hongkong.aliyuncs.com/cdn/okexchain/snapshot/okexchain-compact-v0.18-mainnet-20210811-height_4797527.tar.gz)

#### 2. Normal SnapShot
  - [v0.18.10-normal(59.7G)-20210811-height_4797527.tar.gz](https://ok-public-hk.oss-cn-hongkong.aliyuncs.com/cdn/okexchain/snapshot/okexchain-v0.18-mainnet-20210811-height_4797527.tar.gz)
  <!-- 
  - [v0.18.10-normal-20210806-height_4697978.tar.gz](https://ok-public-hk.oss-cn-hongkong.aliyuncs.com/cdn/okexchain/snapshot/okexchain-v0.18-mainnet-20210806-height_4697978.tar.gz)
  - [v0.18.9-normal-20210729-height_4534291.tar.gz](https://ok-public-hk.oss-cn-hongkong.aliyuncs.com/cdn/okexchain/snapshot/okexchain-v0.18-mainnet-20210729-height_4534291.tar.gz)
  - [v0.18.4-normal-20210510-height_2676566.tar.gz](https://ok-public-hk.oss-cn-hongkong.aliyuncs.com/cdn/okexchain/snapshot/okexchain-v0.18.4-mainnet-20210510-height_2676566.tar.gz) -->
  - [v0.16.3-normal(29.9G)-height_0-2322600.tar.gz](https://ok-public-hk.oss-cn-hongkong.aliyuncs.com/cdn/okexchain/snapshot/okexchain-v0.16.8-mainnet-20210428-height-2322600.tar.gz), need exchain version is [v0.16.3](https://github.com/okex/exchain/releases/tag/v0.16.3)

#### 3. Archive Node SnapShot
- [v0.18.10-archive(223G)-20210804-height_4639037.tar.gz](https://ok-public-hk.oss-cn-hongkong.aliyuncs.com/cdn/okexchain/snapshot/okexchain-v0.18-mainnet-20210804-height_4639037.tar.gz)

## Unpack the snapshot file for cosmos
```shell
mv ~/.exchaind/data ~/.exchaind/data-bak
# rm -rf ~/.exchaind/data
cd ~/.exchaind 
tar -zxvf okexchain-$version-$date-$height_xxx.tar.gz
```
