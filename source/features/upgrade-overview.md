# 版本升级

## 简介

该模块主要用来版本升级。

## 操作

### 提交升级提案
用户在进行app升级前，需要首先提交一个升级提案，提交完成后的提案状态是DepositPeriod。详细信息请参阅[提交升级提案](../governance/upgrade.html#1-app)

### 升级提案抵押
用户抵押足够的OKT后，提案进入VotingPeriod状态。详细信息请参阅[升级提案抵押](../governance/upgrade.html#2-app)

### 升级提案投票
在VotingPeriod结束前对提案进行投票，查询提案状态为Passed状态则说明提案通过。详细信息请参阅[升级提案投票](../governance/upgrade.html#3-app)

### 新版本运行
当app升级提案通过后，各个节点的管理员可以通过提案获取下载地址，获取版本软件并重新启动```okchain```后台程序。详细信息请参阅[新版本运行](../governance/upgrade.html#4-app)

### 新版本激活
当块高达到提案指定的块高并且网络中大部分节点已经升级app，那么网络会自动而平滑的切换到新版本。详细信息请参阅[版本激活](../governance/upgrade.html#5-app)
