# 分红

## 1.角色定义

|角色名称|角色释义|当选条件|数量|
|---|---|---|---|
|Candidate （节点）|有能力对链上数据进行记账的节点|成功链接okchain网络，并抵押1w okt|不限||
|Validator （验证人）|行使出块权利，享有链上治理权利|在一次选举过程中，获得okt委托数top21的节点作为下一周期的验证人.|21|
|User （普通用户）|持有okt的用户|持有okt，1okt=1票|不限||
|Delegator （权益用户）|可以享受验证人收益分成的用户|对某个节点投票，这个节点在下次竞选时成为了验证人|不限||
|Proposer （出块人）|对交易进行打包，并通知其他验证人进行验证|根据每个验证人的质押okt和投票okt数量生成提案人顺序列表，每个验证人都有可能成为提案人|同一时间只有一个||



## 2.奖励来源

* 所有交易相关的手续费（[手续费](../fee.md)）
* 其他费用
    1. **数字资产发行费：**项目方数字资产发行需要花费的okt
    1. **数字资产交易对申请费：**项目方数字资产交易对申请成功后花费的okt
    1. **提案失败扣除：**节点进行一项提案需要抵押一定数量okt，若提案失败，则扣除质押的okt
    1. **业务参数修改：**项目方修改已发token的相关精度参数 

## 3.分红周期

每259200个区块进行一次收益分配, 周期末尾分红自动到账

## 4.分红策略

### 4.1 分配到奖励池

**每个块执行结束**，按照投票验证者权重, 将奖励分配到validator各自的奖励池。

假设当前区块待分配的奖励为totalReward，则每个validator所得的奖励为：
```math
    validatorReward = (validatorPower / totalPower) * totalReward
```

注意：

1. 该操作会在每个块结束时执行

2. 该操作会将本块的所有奖励划分给不同的validator的奖励池，不会直接到账

3. 如果在分配过程中产生了过小的零钱，则将零钱划入该块的proposer对应的奖励池中


**例子：**
假设有三个Validator：V1,V2,V3，votingPower分别为100,200,300，当前区块的总奖励为1000okt，
假设最小分红单位为1okt，则三个validator的奖励池分别可以得到的奖励如下：
```
validatorReward1 = (100 / 600) * 1000 = 166okt
validatorReward2 = (200 / 600) * 1000 = 333okt
validatorReward3 = (300 / 600) * 1000 = 500okt
```

剩余零钱为：remaining = 1000 - 166 - 333 - 500 = 1okt。
假设V1为当前区块的proposer，则剩余的1okt将划入V1的奖励池，即V1的最终奖励为166+1=167okt。

### 4.2 分配到账

**每个分红周期末尾**，将各个validator奖励池中的资金分配到账。以分配其中某一个validator的奖励池为例：

1. 首先，根据validator的佣金比率，计算validator应该得到的佣金，将佣金分配给validator账户

2. 扣除佣金后，将奖励池中剩余的奖励（remainReward）按照各个delegator的权重分配到账
```math
    delegatorReward = (delegatorShare / totalShare) * remainReward
```

注意：

1. 该操作只会在每个分红周期结束时执行

2. 如果在分配过程中，产生过小的零钱，则将零钱转入validator账户

**例子：**
假设某个validator的佣金比例为20%，有三个delegator：D1,D2,D3，份额分别为100,200,300，该validator奖励池中共有10000okt，
假设最小分红单位为1okt，则validator和三个delegator分别可以得到的奖励如下：
```
validatorReward = 10000 * 20% = 2000okt
delegatorReward1 = (100 / 600) * (10000 - 2000) = 1333okt
validatorReward2 = (200 / 600) * (10000 - 2000) = 2666okt
validatorReward3 = (300 / 600) * (10000 - 2000) = 4000okt
```

剩余零钱为：remaining = 10000 - 2000 - 1333 - 2666 - 4000 = 1okt。
剩余的1okt将分配给validator对应的地址，即validator的最终奖励为2000+1=2001okt。


## 5. 操作示例
## 分红模块相关功能
okchain采用主动分红方式，在一个分红周期结束，会将分红打到用户的账户上。详细分红策略和分红奖励来源见设计文档
### 分红相关tx操作
1. 修改分红地址(修改成功后，新的奖励会发放到新设置的地址上)
```sh
# Set the withdraw address for rewards associated with a delegator address:
$ okchaincli tx set-withdraw-addr okchain1gghjut3ccd8ay0zduzj64hwre2fxs9ld75ru9p --from [mykey]
Usage:
  okchaincli tx distr set-withdraw-addr [withdraw-addr] [flags]
```
### 分红相关query操作
1. 查询分红系统参数
```sh
okchaincli query distr params --chain-id okchain
```
2. 查询所有分红
```
okchaincli query distr validator-outstanding-rewards [valAddress] --chain-id okchain
```
3. 查询validator的佣金
```sh
okchaincli query distr commission [valAddress]  --chain-id okchain
```
4. 查询委托者的奖励，如果不加okchainvaloper，表示查询自己来自所有委托的奖励
```sh
okchaincli query distr rewards [accAddress] [valAddress]  --chain-id okchain
```








