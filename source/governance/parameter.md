
![text](/img/gov-parameter.png)

说明：

在OKChain中，存在一些特殊的参数，它们可通过链上治理被修改。持有OKT的用户可以参与到参数修改的链上治理。 如果社区对某些可修改的参数不满意，可以通过发起参数修改提案来完成。参数升级提案流程同Text提案一致。

这些参数分为两类，系统参数和业务参数。
系统参数是指在OKChain系统本身指定的参数，业务参数则是指基于OKChain创造的数据的参数的修改，比如在OKChain上发行的数字资产的最小精度等。当前业务参数暂不支持修改。

1. 系统参数的参数修改提案只有当前验证人节点才能发起。
2. 业务参数的参数修改提案只有该token的owner才能发起，且只有owner才能支付押金。
3. 参数修改提案最小押金为2000okt。
4. 参数修改提案提出时需指定生效的块高。
5. 不能指定过去的块高，如果提案通过时块高已经过去，则立即执行。
6. 业务参数修改提案通过后，押金由validator节点收取。

#### 系统参数

###### gov模块可修改参数：

|      Parameters       |      Type       |       Descriptions        |
| :-------------: | :-------------: | :------------------: |
| TextMaxDepositPeriod          |time           | Text提案抵押周期|
| TextMinDeposit                |DecCoins            | Text提案抵押额度<br>提案抵押超过该值则提案进入Voting Period|
| TextVotingPeriod              |time                | Text提案投票周期|
| ParamChangeMaxDepositPeriod        |time                | 参数修改提案抵押周期|
| ParamChangeMinDeposit              |DecCoins            | 参数修改提案抵押额度<br>提案抵押超过该值则提案进入Voting Period|
| ParamChangeVotingPeriod            |time                | 参数修改提案投票周期|
| ParamChangeMaxBlockHeight      |int64               | 参数修改提案指定自动生效的块高不超过当前块高与ParamChangeMaxBlockHeight之和|
| AppUpgradeMaxDepositPeriod        |time                | app升级提案抵押周期|
| AppUpgradeMinDeposit              |DecCoins            | app升级提案抵押额度<br>提案抵押超过该值则提案进入Voting Period|
| AppUpgradeVotingPeriod            |time                | app升级提案投票周期|
| DexListMaxDepositPeriod   |time                | 数字资产交易对申请提案提案抵押周期|
| DexListMinDeposit         |DecCoins            | 数字资产交易对申请提案提案抵押额度|
| DexListVotingPeriod       |time                | 数字资产交易对申请提案提案投票周期|
| DexListVoteFee            |DecCoins            | 数字资产交易对申请提案投票手续费<br>对数字资产交易对申请提案投Yes/NoWithVeto的账户按照<br>DexListVoteFee*账户staking所占权重收取手续费|
| DexListMaxBlockHeight     |uint64              | 指定自动数字资产交易对激活的块高不超过当前块高与DexListMaxBlockHeight之和|
| DexListFee                |DecCoins            | 数字资产交易对激活所需费用|
| DexListExpireTime         |time                | 数字资产交易对申请提案通过后到数字资产交易对激活的有效期|
| Quorum                    |Dec                 | 投票周期结束时全网参与投票的权重阈值，用于[投票统计](/governance/overview/#_2)|
| Threshold                 |Dec                 | 投票周期结束时投Yes票在所有投非弃权票中的比重阈值，用于[投票统计](/governance/overview/#_2)|
| Veto                      |Dec                 | 投NoWithVeto票在所有投票中的比重阈值，用于[投票统计](/governance/overview/#_2)|
| YesInVotePeriod           |Dec                 | 在投票结束前投Yes票在所有投票中（包含已投和未投）比重阈值，<br>用于用于[投票统计](/governance/overview/#_2)|
| MaxTxNumPerBlock          |int64               | 每个块中包含的最大交易数量|


###### token模块可修改参数：   

| 可修改参数             | 赋值类型 |
| ----                   | ----     |
| ListAsset              | Dec      |
| IssueAsset             | Dec      |
| MintAsset              | Dec      |
| BurnAsset              | Dec      |
| Transfer               | Dec      |
| FreezeAsset            | Dec      |
| UnfreezeAsset          | Dec      |
| ListPeriod             | time     |
| ListProposalMinDeposit | Dec      |

###### order模块可修改参数：   

|      Parameters       |      Type       |       Descriptions        |
| :-------------: | :-------------: | :------------------: |
| OrderExpireBlocks          |int64           | 订单过期参数，经过若干个块之后订单自动过期|
| MaxDealsPerBlock   |int64    | 每个块撮合的订单数量限制|
| NewOrder           |Dec      | 下单手续费，默认为0|
| Cancel             |Dec      | 取消订单手续费（采用非okt支付时，等价的okt数量|
| CancelNative       |Dec      | 取消订单手续费（需要支付的okt数量）|
| Expire             |Dec      | 订单过期手续费（采用非okt支付时，等价的okt数量）|
| ExpireNative       |Dec      | 订单过期手续费（需要支付的okt数量）|
| TradeFeeRate       |Dec      | 订单成交手续费率（使用非okt数字资产支付时）|
| TradeFeeRateNative |Dec      | 订单成交手续费率（使用okt支付时）|

###### staking模块可修改参数：   

| 可修改参数             | 赋值类型 | 说明
| ----                   | ----     | ----
| UnbondingTime          | time     | 解除委托的超时时间
| MaxValidators          | uint16   | validator集合容纳的最大数量
| KeyMaxEntries          | uint16   | 同一委托者在unbondingtime内解委托、重新委托交易允许的最大数量

* 注：   
1.time: Valid time units are "ns", "us" (or "µs"), "ms", "s", "m", "h". such as "300ms", "-1.5h" or "2h45m".   
2.DecCoins: 精度为小数点后8位的浮点数和数字资产的符号组成。例如100.00okt。   
3.Dec: 精度为小数点后8位的浮点数。例如0.334。   


