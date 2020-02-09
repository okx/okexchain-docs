# 链上治理

## 提案流程

关于一个提案从发起到结束的流程如下图所示：   
![](/img/OKChainProposal.png)   
说明：   
1. 为防止恶意发起提案，发起者在发起提案时需要抵押okt。   
2. 投票参与者为bond okt的持有者，除以下两种情况外：   
&emsp;&emsp;a. 进入vote_period后bond/unbond到验证者的okt持有者   
&emsp;&emsp;b. 进入vote_period后成为验证者的okt持有者。   
3. 投票的权重取决于bond的okt数量。   
4. 为了防止双重投票：   
&emsp;&emsp;a. voting period要小于unbond_period。voting period的初始值为72h（可以根据不同类型提案调整voting period）。   
&emsp;&emsp;b. 如果委托者在其委托的验证者投票前投票，则该验证者投票权重不包含委托者bond的okt权重。   
&emsp;&emsp;c. 如果委托者在其委托的验证者投票后进行投票，其投票结果所占权重将覆盖验证者替委托者投票的权重。   

## 提案类型
针对不同用途，OKChain提供以下4种提案类型：   
1. [Text提案（Text Proposal）](../governance/text.md)：用于获取某个topic网络意见。   
2. [参数修改提案（Parameter Proposal）](../governance/parameter.md)：用于修改系统参数。   
3. [数字资产交易对申请提案（DexList Proposal）](../governance/dexlist.md)：用于项目方数字资产交易对申请。   
4. [版本升级提案（Software Upgrade Proposal）](../governance/upgrade.md)：用于进行全网升级操作。   

除了Text提案外，提案均由发起，抵押阶段（deposit_period），投票阶段（vote_period）和执行阶段组成，Text提案则没有执行阶段。

## 提案投票统计
![](/img/gov-tally.png) 
图中变量含义：   
1.totalBonded：表示全网可参与投票的Bonded的okt总和   
2.totalVotingPower：表示参与投票的Bonded的okt总和   
3.percentVoting = totalVotingPower / totalBonded   
4.Quorum：参与投票的权重占比阈值(0.334)   
5.Threshold：投Yes票在所有投非弃权票中的比重阈值(0.5)   
6.Veto：投NoWithVeto票在所有投票中的比重阈值(0.334)   
7.YesInVotePeriod：在投票结束前投Yes票占totalBonded比重阈值(0.667)   
8.Yes：表示投Yes票的Bonded的okt总和   
9.No：表示投No票的Bonded的okt总和   
10.NoWithVeto：表示投NoWithVeto票的Bonded的okt总和   
11.Abstain：表示投Abstain票的Bonded的okt总和 

## 提案相关参数
Text提案参数：  
&emsp;&emsp;抵押周期(`TextMaxDepositPeriod`): 24h   
&emsp;&emsp;抵押额度(`TextMinDeposit`): 100okt  
&emsp;&emsp;投票周期(`TextVotingPeriod`): 72h   
参数修改提案参数：   
&emsp;&emsp;抵押周期(`ParamChangeMaxDepositPeriod`): 24h   
&emsp;&emsp;抵押额度(`ParamChangeMinDeposit`): 100okt  
&emsp;&emsp;投票周期(`ParamChangeVotingPeriod`): 72h   
&emsp;&emsp;参数修改生效块高(`ParamChangeMaxBlockHeight`)：100000    
版本升级提案参数：   
&emsp;&emsp;抵押周期(`AppUpgradeMaxDepositPeriod`): 24h   
&emsp;&emsp;抵押额度(`AppUpgradeMinDeposit`): 100okt   
&emsp;&emsp;投票周期(`AppUpgradeVotingPeriod`): 72h   
数字资产交易对申请提案参数：    
&emsp;&emsp;抵押周期(`DexListMaxDepositPeriod`): 24h   
&emsp;&emsp;抵押额度(`DexListMinDeposit`): 20000okt   
&emsp;&emsp;投票周期(`DexListVotingPeriod`): 72h   
&emsp;&emsp;投票费用(`DexListVoteFee`): 0okt  
&emsp;&emsp;自动数字资产交易对申请指定的最大块高(`DexListMaxBlockHeight`): 10000   
&emsp;&emsp;数字资产交易对激活费用(`DexListFee`): 100000okt   
&emsp;&emsp;数字资产交易对激活到期时间(`DexListExpireTime`): 数字资产交易对申请提案通过后24h内激活否则提案失效     
所有提案的投票统计参数：   
&emsp;&emsp;参与投票的权重占比阈值(`Quorum`)：0.334   
&emsp;&emsp;投Yes票在所有投非弃权票中的比重阈值(`Threshold`)：0.5   
&emsp;&emsp;NoWithVeto票在所有投票中的比重阈值(`Veto`)：0.334  
&emsp;&emsp;在投票结束前投Yes票在所有投票中（包含已投和未投）比重阈值(`YesInVotePeriod`)：0.667

详细信息请参阅[提案参数](../governance/parameter.html#id1)
