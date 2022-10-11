# Reward distribution

## 1. Role definition

|Name|Definition|Election Condition|Quantity|
|---|---|---|---|
| Candidate | Users who have registered Validator on the chain | Unlimited ||
| Validator | Exercise the right to generate blocks and enjoy the right of on-chain governance | Top 21 nodes with the highest number of okt delegations to be the validators in the next cycle | 21 |
| User | A user holding okt | Hold okt | Unlimited ||
| Delegator | A user who can enjoy the reward from the validator | Vote on a node which will become a validator after the next election | Unlimited ||
| Proposer | Pack transactions and notify other validators for verification | Generate a sequential list of proposers based on the number of pledged okt and voting okt of each validator and each validators may become a proposer | Only one each time ||



## 2. Reward source

* produce block rewards.The block reward mechanism of OKT is like BTC, which adopts a strategy of fixed total amount and periodic decrease. Each new block has a 0.5 OKT reward, and the reward is halved every 3 years.
* All transaction related fees ([fee](../../concepts/fee.html))
* Other fees
    1. Issuance fee: amount of okt required to be paid by the project team to issue tokens
    1. Listing fee: amount of okt paid by the project team after listing
    1. Deduction for proposal failure: n odes need to deposit a certain amount of okt for a proposal. If the proposal fails, the amount of pledged okt is deducted

## 3. Distribution period & Dividend strategy

25% of the Reward goes to active validators and 75% goes to all  validators(include active validators and candidate validators) calculated from a percentage of the votes received.

Reward allocation calculation is performed once for each block, and the reward will be deposited into the `ValidatorAccumulatedCommission`.

validators need to collect it manually.

- x% is the distribution ratio of the community (currently 0%)。y% is the percentage of each validator  (default is 100%), validator can set their own according to actual needs.

- total reward = block reward + fees for all transactions in one block

- within an epoch
  - (1-x%) * 25% of the block reward is evenly distributed among 21 block producers (producer validators)
  - (1-x%) * 75% of the block reward is distributed to 21 block producers (producer validators) and all candidate nodes (candidate validators) by voting share
  - x% of the block reward plus the above distribution balance, and then all send into the community fund pool

- Validator will distribute (1-y%) part to the user as a reward according to the user's voting ratio

![](/Users/oker/workspace/github/okexchain-docs/docs/img/staking-01.png)



## multiple-voting mechanism

After user deposit OKT (single deposit not less than 0.0001 OKT), they get voting rights for validator nodes. OKC adopts a one-vote multi-voting mechanism, that is, user can choose to vote for up to 30 validator nodes after completing the deposit (each node can only cast one vote).If the user additionally deposit OKT again, there is no need to vote again, and it will vote for the previously selected validator by default.

![](/Users/oker/workspace/github/okexchain-docs/docs/img/staking-02.png)

## Calculation of Staking Rewards

**terminology**

| **name**                   | **describe**                                                 |
| -------------------------- | ------------------------------------------------------------ |
| period                     | If a validator's share of votes does not change within N blocks, define these N blocks as a period. When the validator's share of votes changes, a new epoch is automatically recorded. Each epoch has a start block and an end block. |
| ValidatorCurrentRewards    | Record the amount rewarded in the current period             |
| ValidatorHistoricalRewards | When the number of votes validator changes, it will store new historical records, which will be used for calculation reward. |
| RewardRatio                | Within a certain time period, the number of votes obtained is fixed, and can be calculated: RewardRatio = total rewards / total shares |
| CumulativeRewardRatio      | Sum of RewardRatio accumulated over multiple epochs          |
| Outstanding                | Total commission rewards + user staking rewards - all withdrawn rewards |

Since the number of validators' votes does not change frequently on the chain, the concept of a period is introduced when calculating rewards.

- The number of votes of validator nodes in an epoch does not change

- The user send tx causes the validator's share to change, which will end an epoch and start a new epoch

- From the point of view of the period, calculating the user's income actually only needs to sum up the income of the user's start period and end period.

The rationale for calculating user reward is to track the cumulative unit reward of a single share over multiple consecutive periods, CumulativeRewardRatio. For users, if the number of shares has not changed during the period, then

​											User reward = CumulativeRewardRatio * Shares

![](/Users/oker/workspace/github/okexchain-docs/docs/img/staking-03.png)

The following describes the process of reward distribution based on the deposit, voting, and withdraw reward by User A.

|                                       | **historical period** **m-4** | **historical period** **m-3** | **historical period** **m-2** | **historical period** **m-1** |
| ------------------------------------- | ----------------------------- | ----------------------------- | ----------------------------- | ----------------------------- |
| **reward for the current period**     |                               | 10 OKT                        | 10 OKT                        | 10 OKT                        |
| **user** **A** **shares**             |                               | 50 shares                     | 50 shares                     | 0shares                       |
| **Total shares of current validator** |                               | 100 shares                    | 500 shares                    | 450 shares                    |
| **reward ratio**                      |                               | 0.1 OKT                       | 0.02 OKT                      | 0.0222 OKT                    |
| **cumulative reward ratio**           | 0 OKT                         | 0.1 OKT                       | 0.12 OKT                      | 0.2422 OKT                    |

- User A votes at the end of epoch m-4, resulting in epoch m-3

- User B votes at the end of epoch m-3, resulting in epoch m-2

- User A withdraws the vote at the end of epoch m-2, resulting in epoch m-1

- When user A withdraw , the reward operation is triggered, and the total reward is the sum of the income from the m-4 period to the m-2 period

 (0.12OKT - 0 OKT) * 50 shares = 6 OKT

- Calculate unit reward for each period

## User withdraw reward

When the user add shares, after a certain period of time, a certain amount of reward income can be accumulated.Users can withdraw rewards to the user's wallet in two ways: active withdrawal and passive withdrawal.

- Active withdrawal：Users receive rewards from validator by sending withdraw-reward tx to withdraw reward.

- Passive withdrawal：After the voting is completed, when the user send tx about deposit, voting and other operations again, the reward withdrawal is triggered due to the change in the number of votes. (The user's own actions can trigger their own passive dividends)

In addition, there will be a truncation precision problem when withdraw reward, that is, how many digits are retained after the decimal point.The balance after this number of digits will be uniformly truncated and distributed to the community pool.For example, when the precision is 1, it means that only 1 decimal place is retained.Suppose the user has 1.55 OKT reward under V_1, V_2 has 0.39 OKT reward, V_3 has 24.305 OKT reward, then：

- actual reward：1.5 + 0.3 + 24.3 = 26.1 OKT

- community pool reward：0.05 + 0.09 + 0.005 = 0.145 OKT

The truncation precision can be adjusted through community proposal governance. The current truncation precision can be viewed with the cli

```Shell
exchaincli query distr params
```

## Unstaking cycle

Users can send tx to unstaking  OKT through the command, unstaking has a 14-day lock-up period. During this period, the unlocked OKT will not receive staking rewards, and no other operations will be allowed. If the user submits multiple tx for release of deposit within 14 days, the OKT will be combined into one, and the countdown to the lock-up period will be recalculated based on the last.

The minimum number of OKT deposit to be released at one time is: 0.0001 OKT

## Validator reward

Validator set commissions to reward users who voted, thereby attracting users to participate in voting.After getting user votes, it will get more block rewards due to its higher weight among all validators.

The default commission of the validator is 1, that is, 100% of the commission, and the value can be modified by sending tx through the cli.



