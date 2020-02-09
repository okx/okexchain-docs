# 用okchaincli连接OKChain

`okchaincli`是连接OKChain的命令行工具

## 配置okchaincli的运行环境：

* 设置chain-id, 必须是okchain
```bash
okchaincli config chain-id okchain 
```

* 设置okchaincli请求响应的输出格式
```bash
okchaincli config output json    
okchaincli config indent true 
```

* 设置RPC Interface
```bash
okchaincli config node tcp://$RpcInterface  
```

向OKChain发送交易或者查询信息需要指定一个RPC Interface.
 
如果你在本地搭建了OKChain全节点, $RpcInterface可以是`localhost:26657`:
```bash
okchaincli config node tcp://localhost:26657  
```
或者是下列地址端口中任意一个:

```
3.13.150.20:26657
35.176.111.229:26657
18.162.106.25:26657
18.220.143.90:26657
3.9.253.24:26657
18.162.205.49:26657
18.162.215.44:26657
18.162.217.121:26657
18.162.217.91:26657
13.209.159.23:26657
15.164.112.129:26657
18.197.242.177:26657
3.120.127.153:26657
18.139.28.11:26657
18.139.57.190:26657
18.140.23.247:26657
13.113.155.133:26657
13.115.176.62:26657
18.179.82.0:26657
34.210.189.230:26657
52.41.56.82:26657
```


* 设置信任
```bash
okchaincli config trust-node true
```
客户端配置trust-node为true，查询链上数据直接返回，查询效率较高；配置为false，会对节点返回数据的真实性进行检查，安全性较高。

## okchaincli用户手册

* [account](command/account.md) 

    账户管理相关操作

* [token](command/token.md) 

    Token相关操作, 包括数字资产发行, 冻结, 解冻, Token拥有权转移

* [send](command/send.md) 

    转账操作, 包括阈值签名转账

* [order](command/order.md) 

    交易订单相关操作

* [gov](command/gov.md) 

    治理相关操作

* [backend](command/backend.md) 
    
    K线数据、Ticker数据等查询功能

