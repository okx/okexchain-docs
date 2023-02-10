# OKC Snapshot

Quick instructions on how to install the OKC snapshots.

According to the snapshot size, it is divided into S0, S1, S2 and S3:

 - S0. size of s0 is the smallest, including only the last block and the state of that height.
 - S1. --pruning everything: larger than S0 size
 - S2. --pruning default: larger than S1 size
 - S3. --pruning nothing: maximum size

Meaning of [pruning parameter](https://forum.okt.club/d/58-pruning)


## testnet
Download URL: [https://static.okex.org/cdn/okc/snapshot/index.html](https://static.okex.org/cdn/okc/snapshot/index.html)

For the differences between snapshots, please refer to：[this](https://forum.okt.club/d/169-oec)


## mainnet
Download URL: [https://static.okex.org/cdn/okc/snapshot/index.html](https://static.okex.org/cdn/okc/snapshot/index.html)

For the differences between snapshots, please refer to：[this](https://forum.okt.club/d/169-oec)


## Unpack the snapshot file for cosmos
```shell
mv ~/.exchaind/data ~/.exchaind/data-bak
# rm -rf ~/.exchaind/data
cd ~/.exchaind 
tar -zxvf exchain-$version-$date-$height_xxx.tar.gz
```
