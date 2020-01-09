# 资产管理

## 简介

该模块描述了OKChain上的资产管理。任何人都可以在OKChain上发布新资产。

## 操作

### 账户间转账
通过账户名往对方收账地址转相应数量的数字资产。
详细信息请参阅[转账](../getting-start/command/send.md#转账)

### 多签转账
为了提高账户安全性，OKChain支持交易离线签名保护账户的私钥。构建一个未签名的交易```unsignedTx.json```
对上述的离线交易进行聚合签名```signedTx.json```
详细信息请参阅[多签转账](../getting-start/command/send.md#21-p1-p2-p3)。

### 广播交易
广播离线产生的已签名的交易signedTx.json，并查询余额确认。
该交易将在OKChain中广播并执行，详细信息请参阅[执行交易](../getting-start/command/send.md#24-signedtxjson)。


### 发行数字资产
用户通过自定义数字资产相关参数来发行新的数字资产，如数字资产描述、发行总量等。详细信息请参阅[发行Token](../getting-start/command/token.md#1-token) 

### 数字资产增发
数字资产的所有者可以对已经发行的数字资产增发一定的数量。详细信息请参阅[增发Token](../getting-start/command/token.md#2-token)

### 销毁数字资产
用户可以销毁一定数量已发行的数字资产。详细信息请参阅[销毁Token](../getting-start/command/token.md#3-token)

### 冻结数字资产
用户可以冻结自己账号里面的数字资产。详细信息请参阅[冻结Token](../getting-start/command/token.md#4-token)

### 解冻数字资产
用户可以解冻自己账号里面已冻结的数字资产。详细信息请参阅[解冻Token](../getting-start/command/token.md#5-token)

### 查询数字资产信息
用户可以通过数字资产标识查询该数字资产相关信息。详细信息请参阅[查询Token信息](../getting-start/command/token.md#6-token)

### 给多个人转多种数字资产
用户可以同时给多个人转多种数字资产。详细信息请参阅[给多人转多种Token](../getting-start/command/token.md#7-token)

### 转移数字资产所有权
可以把数字资产的所有者权限转移给另外一个用户，但是必须通过[多签](../getting-start/command/send.md#21-p1-p2-p3)才可以进行数字资产所有权的转移。详细信息请参阅[转移数字资产所有权](../getting-start/command/token.md#8-token)
