# 转账模块

## 简介

该模块主要用于账户之间转账，同时提供多签转账与交易广播方法。

## 操作

### 账户间转账
通过账户名往对方收账地址转相应数量的数字资产。
详细信息请参阅[转账](../getting-start/command/send.html#id1)

### 多签转账
为了提高账户安全性，OKChain支持交易离线签名保护账户的私钥。构建一个未签名的交易```unsignedTx.json```
对上述的离线交易进行聚合签名```signedTx.json```
详细信息请参阅[多签转账](../getting-start/command/send.html#id4)。

### 广播交易
广播离线产生的已签名的交易signedTx.json，并查询余额确认。
该交易将在OKChain中广播并执行，详细信息请参阅[执行交易](../getting-start/command/send.html#signedtx-json)。
