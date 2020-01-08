# 升级流程

## 升级提案流程

![](../img/upgrade-diagram.png)

说明：
app升级相较于传统的硬分叉来说，是一种更为平滑更具容错性的系统升级方式。这里的app是指运行在tendermint共识层上面的OKChain软件。当实际完成app版本更新并重新运行新版本的validator节点`voting power`低于一定的阈值时，新版本app可以继续以旧版本逻辑运行，相当于整个出块网络保持在旧版本，不会导致网络分叉；当运行新版本的validator节点`voting power`达到阈值时，新版本app逻辑将会在指定高度进行切换，整个出块网络将使用新版本逻辑运行。

## 参考
提案相关参数说明：
```sh
- title表示app升级提案的标题
- description表示app升级提案的详情描述
- deposit表示当前提案抵押的Token数量
- version指定当前提案包括的app新版本号
- software表示当前提案包括的app新版本下载地址
- switchHeight表示当前提案包括的app新版本切换块高
- threshold表示当前提案包括的`voting power`阈值
- type指定当前提案为app升级提案
- from指定当前提案发起人账户，这里为alice
```
