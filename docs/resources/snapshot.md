
# OEC Snapshot

Quick instructions on how to install the OEC snapshots.

According to the snapshot size, it is divided into S0, S1, S2 and S3:

 - S0. size of s0 is the smallest, including only the last block and the state of that height.
 - S1. --pruning everything: larger than S0 size
 - S2. --pruning default: larger than S1 size
 - S3. --pruning nothing: maximum size

Meaning of [pruning parameter](https://forum.okt.club/d/58-pruning)


## testnet
Download URL: [https://ok-public-hk.oss-cn-hongkong.aliyuncs.com/cdn/okexchain/snapshot/index.html](https://ok-public-hk.oss-cn-hongkong.aliyuncs.com/cdn/okexchain/snapshot/index.html)

<!--
#### 1. Mini SnapShot
  - [testnet-v0.19.1-s0(14.8G)-20210824-5306549.tar.gz](https://ok-public-hk.oss-cn-hongkong.aliyuncs.com/cdn/okexchain/snapshot/testnet-v0.19.1-s0-20210824-5306549.tar.gz)

#### 2. Normal SnapShot
  - [testnet-v0.19.1-s1(50G)-20210824-5306549.tar.gz](https://ok-public-hk.oss-cn-hongkong.aliyuncs.com/cdn/okexchain/snapshot/testnet-v0.19.1-s1-20210824-5306549.tar.gz)

  - [v0.18.10-normal-20210806-height_4876708.tar.gz](https://ok-public-hk.oss-cn-hongkong.aliyuncs.com/cdn/okexchain/snapshot/okexchain-v0.18-testnet-20210806-height_4876708.tar.gz)
  - [v0.18.7-normal-20210715-height_4322747.tar.gz](https://ok-public-hk.oss-cn-hongkong.aliyuncs.com/cdn/okexchain/snapshot/okexchain-v0.18.7-testnet-20210715-height_4322747.tar.gz)
  - [v0.18.0-normal-20210423-height_2270911.tar.gz](https://ok-public-hk.oss-cn-hongkong.aliyuncs.com/cdn/okexchain/snapshot/data_180.tar.gz)
-->
For the differences between snapshots, please refer to：[this](https://forum.okt.club/d/169-oec)


## mainnet
Download URL: [https://ok-public-hk.oss-cn-hongkong.aliyuncs.com/cdn/okexchain/snapshot/index.html](https://ok-public-hk.oss-cn-hongkong.aliyuncs.com/cdn/okexchain/snapshot/index.html)

<!--
#### 1. Mini SnapShot
  - [mainnet-s0(14.8G)-20210903-height_5296787.tar.gz](https://ok-public-hk.oss-cn-hongkong.aliyuncs.com/cdn/okexchain/snapshot/mainnet-s0-20210903-5296787.tar.gz)
  - [mainnet-s0(9.7G)-20210811-height_4797527.tar.gz](https://ok-public-hk.oss-cn-hongkong.aliyuncs.com/cdn/okexchain/snapshot/okexchain-compact-v0.18-mainnet-20210811-height_4797527.tar.gz)

#### 2. Normal SnapShot
  - [mainnet-s1(56.1G)-20210903-height_5296787.tar.gz](https://ok-public-hk.oss-cn-hongkong.aliyuncs.com/cdn/okexchain/snapshot/mainnet-s1-20210903-5296787.tar.gz)
  - [mainnet-normal(59.7G)-20210811-height_4797527.tar.gz](https://ok-public-hk.oss-cn-hongkong.aliyuncs.com/cdn/okexchain/snapshot/okexchain-v0.18-mainnet-20210811-height_4797527.tar.gz)
  - [v0.18.10-normal-20210806-height_4697978.tar.gz](https://ok-public-hk.oss-cn-hongkong.aliyuncs.com/cdn/okexchain/snapshot/okexchain-v0.18-mainnet-20210806-height_4697978.tar.gz)
  - [v0.18.9-normal-20210729-height_4534291.tar.gz](https://ok-public-hk.oss-cn-hongkong.aliyuncs.com/cdn/okexchain/snapshot/okexchain-v0.18-mainnet-20210729-height_4534291.tar.gz)
  - [v0.18.4-normal-20210510-height_2676566.tar.gz](https://ok-public-hk.oss-cn-hongkong.aliyuncs.com/cdn/okexchain/snapshot/okexchain-v0.18.4-mainnet-20210510-height_2676566.tar.gz)
  - [mainnet-normal(29.9G)-height_0-2322600.tar.gz](https://ok-public-hk.oss-cn-hongkong.aliyuncs.com/cdn/okexchain/snapshot/okexchain-v0.16.8-mainnet-20210428-height-2322600.tar.gz), need exchain version is [v0.16.3](https://github.com/okex/exchain/releases/tag/v0.16.3)

#### 3. Archive Node SnapShot
  - [mainnet-s3(582G)-20210828-height_5167085.tar.gz](https://ok-public-hk.oss-cn-hongkong.aliyuncs.com/cdn/okexchain/snapshot/mainnet-s3-20210828-5167085.tar.gz)
  - [mainnet-s3(223G)-20210804-height_4639037.tar.gz](https://ok-public-hk.oss-cn-hongkong.aliyuncs.com/cdn/okexchain/snapshot/okexchain-v0.18-mainnet-20210804-height_4639037.tar.gz)
-->
    
For the differences between snapshots, please refer to：[this](https://forum.okt.club/d/169-oec)


## Unpack the snapshot file for cosmos
```shell
mv ~/.exchaind/data ~/.exchaind/data-bak
# rm -rf ~/.exchaind/data
cd ~/.exchaind 
tar -zxvf okexchain-$version-$date-$height_xxx.tar.gz
```
