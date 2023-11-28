# Governance Parameter Proposal

![text](../../img/gov-parameter.png)

Descriptions:
On OKTC, there are some special parameters that can be modified through on-chain governance. OKT holdes can participate in on-chain governance of parameter modification. If the community is not satisfied with some modifiable parameters, the members can initiate a parameter change proposal. The processes involved in parameter upgrade proposals are the same as those involved in text proposals.

Those parameters are divided into two categories, namely system parameters and business parameters.
System parameters refer to the parameters specified on OKTC, and the modification of business parameters are based on parameters of data created by OKTC, such as the minimum precision of the unit of the cryptocurrency issued on OKTC. The current business parameters are not subject to modification.

1. The parameter change proposals in relation to system parameters can only be initiated by validation nodes.
2. The parameter change proposals in relation to business parameters can only be initiated by token owners, and only owners can pay deposits.
3. The minimum deposit for a parameter change proposal is 2000okt.
4. When parameter change proposals are initiated, effective block heights must be specified.
5. Past block heights cannot be specified. If the block heights are no longer effective when the proposal are approved, immediate execution is required.
6. After business parameter change proposals are passed, deposits are collected by validation nodes.

## System parameters
### Modifiable parameters on gov module:

| Parameters              | Type | Descriptions                                                                                               |
| :----                   | ----     | :----                                                                                                      |
| TextMaxDepositPeriod        | time     | deposit period for text proposal                                                                           |
| TextMinDeposit              | DecCoins | deposit limit for text proposal<br>if the proposal deposit exceeds this value, the Voting Period will be effective                               |
| TextVotingPeriod            | time     | voting period for text proposal                                                                          |
| ParamChangeMaxDepositPeriod        | time     | deposit period for parameter change proposal                                                                          |
| ParamChangeMinDeposit              | DecCoins | deposit limit for parameter change proposal<br>if the proposal deposit exceeds this value, the Voting Period will be effective                               |
| ParamChangeVotingPeriod            | time     | voting period for parameter change proposal                                                                          |
| ParamChangeMaxBlockHeight    | int64    | block height specified for automatically activating the token listing does not exceed the sum of the current block height and ParamChangeMaxBlockHeight                                     |
| AppUpgradeMaxDepositPeriod        | time     | deposit period for app upgrade proposal                                                                          |
| AppUpgradeMinDeposit              | DecCoins | deposit limit for app upgrade proposal<br>if the proposal deposit exceeds this value, the Voting Period will be effective                               |
| AppUpgradeVotingPeriod            | time     | voting period for app upgrade proposal                                                                          |
| Quorum                  | Dec      | weight threshold for voting on the entire network when the voting period ends used for [voting statistics](/dev/core-concepts/on-chain-governance/overview.html#proposal-voting-statistics)                                                                                     |
| Threshold               | Dec      | weight threshold for the proportion of Yes votes to all non-abstained votes when the voting period ends used for [voting statistics](/dev/core-concepts/on-chain-governance/overview.html#proposal-voting-statistics)                                                                        |
| Veto                    | Dec      | weight threshold for the proportion of NoWithVeto votes to all votes used for [voting statistics](/dev/core-concepts/on-chain-governance/overview.html#proposal-voting-statistics)                                                                       |
| YesInVotePeriod         | Dec      | weight threshold for the proportion of Yes votes to all votes (including the voted and unvoted) before the voting ends, <br> used for [voting statistics](/dev/core-concepts/on-chain-governance/overview.html#proposal-voting-statistics)                                                                       |
| MaxTxNumPerBlock        | int64    | maximum number of transactions contained in each block                                                                                 |


### Modifiable parameters on token module: 

| Parameters             | Type |
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

### Modifiable parameters on order module:   

| Parameters              | Type | Descriptions                                                                                               |
| :----                   | ----     | :----
| OrderExpireBlocks  | int64    | order expiration parameters covering the data of orders that automatically expire after passing certain blocks |
| MaxDealsPerBlock   | int64    | limit on the number of orders matched per block |
| NewOrder           | Dec      | order fee set as 0  |
| Cancel             | Dec      | order cancellation fee (equivalent to the number of okt when okt is not the cryptocurrency for payment) |
| CancelNative       | Dec      | order cancellation fee (the number of okt to be paid) |
| Expire             | Dec      | order expiry handling charge (equivalent to the number of okt when okt is not the cryptocurrency for payment) |
| ExpireNative       | Dec      | order expiry handling charge (the number of okt to be paid) |
| TradeFeeRate       | Dec      | order transaction fee rate (when okt is not the cryptocurrency for payment) |
| TradeFeeRateNative | Dec      | order transaction fee rate (when okt is the cryptocurrency for payment) |

### Modifiable parameters on staking module:  

| Parameters             | Type | Descriptions
| ----                   | ----     | ----
| UnbondingTime          | time     | wait time for undelegation
| MaxValidators          | uint16   | maximum number of validators allowed
| KeyMaxEntries          | uint16   | Maximum number of transactions allowed for undelegation and re-delegation by the same delegator during unbondingtime

* Note:  
1.time: Valid time units are "ns", "us" (or "µs"), "ms", "s", "m", "h". such as "300ms", "-1.5h" or "2h45m".   
2.DecCoins: It is composed of a floating-point number and a token unit, eg. 100.00okt.   
3.Dec: The float value is rounded to the nearest 8 decimal places, eg. 0.334.   


