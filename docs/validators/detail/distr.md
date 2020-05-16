# Reward distribution

## 1. Role definition

|Name|Definition|Election Condition|Quantity|
|---|---|---|---|
| Candidate | A node capable of record keeping of on-chain data | Successfully linked to okchain and deposit 1w okt | Unlimited ||
| Validator | Exercise the right to generate blocks and enjoy the right of on-chain governance | Top 21 nodes with the highest number of okt delegations to be the validators in the next cycle | 21 |
| User | A user holding okt | Hold okt, 1okt = 1 vote | Unlimited ||
| Delegator | A user who can enjoy the reward from the validator | Vote on a node which will become a validator after the next election | Unlimited ||
| Proposer | Pack transactions and notify other validators for verification | Generate a sequential list of proposers based on the number of pledged okt and voting okt of each validator and each supernode may become a proposer | Only one each time ||



## 2. Reward source

* All transaction related fees ([fee](../../concepts/fee.html))
* Other fees
    1. **Issuance fee：**amount of okt required to be paid by the project team to issue tokens
    1. **Listing fee：**amount of okt paid by the project team after listing
    1. **Deduction for proposal failure：**nodes need to deposit a certain amount of okt for a proposal. If the proposal fails, the amount of pledged okt is deducted
    1. **Business parameter change：**the project team modifies the relevant precision parameters of tokens issued

## 3. Distribution period

Reward distribution is performed once every 259200 blocks. Rewards are automatically deposited to corresponding accounts at the end of the period.

## 4. Dividend strategy

### 4.1 Distribution to the reward pool

**After the execution of each block ends**, rewards are distributed to each validator’s respective reward pool according to the weight of validators participating in voting.

If the reward to be distributed in the current block is totalReward, the reward obtained by each validator is:
```
    validatorReward = (validatorPower / totalPower) * totalReward
```

Note:

1. The operation is performed at the end of each block

2. During the operation, all rewards in the block are distributed to reward pools of different validators, which will not be directly deposited to corresponding accounts

3. If small change is left during the distribution, it is transferred into the reward pool of the block’s proposer


**Example：**
If there are three validators: V1, V2 and V3, the votingPower is 100, 200 and 300 respectively, and the total reward in the current block is 1000okt,
If the distribution unit is 1okt, the rewards received by reward pools of the three validators are as follows:
```
validatorReward1 = (100 / 600) * 1000 = 166okt
validatorReward2 = (200 / 600) * 1000 = 333okt
validatorReward3 = (300 / 600) * 1000 = 500okt
```

The remaining change is: remaining = 1000 - 166 - 333 - 500 = 1okt.
If V1 is the proposer of the current block, the remaining 1okt will be distributed to V1’s reward pool and the final reward of V1 will be 166 + 1 = 167okt.

### 4.2 Distribution to corresponding accounts

**At the end of each distribution period**, the funds in each validator’s reward pool are distributed to corresponding accounts. Take the distribution to the reward pool of a validator as an example:

1. First, calculate the commission for each validator at the corresponding rate and distribute the commission to the accounts of validators

2. The remaining rewards in the reward pool (remainReward) are distributed to the accounts of delegators according to the weight of each delegator
```
    delegatorReward = (delegatorShare / totalShare) * remainReward
```

Note:

1. The operation is performed at the end of each distribution period

2. If small change is left during the distribution, it is transferred into validators' accounts

**Example：**
If a validator’s commission rate is 20%, there are three delegators: D1, D2 and D3 with shares of 100, 200 and 300 respectively and the validator’s reward pool has a total of 10,000okt;
If the dividend unit is 1okt, the validator and the three delegators can receive the rewards as follows:
```
validatorReward = 10000 * 20% = 2000okt
delegatorReward1 = (100 / 600) * (10000 - 2000) = 1333okt
validatorReward2 = (200 / 600) * (10000 - 2000) = 2666okt
validatorReward3 = (300 / 600) * (10000 - 2000) = 4000okt
```

The remaining change is：remaining = 10000 - 2000 - 1333 - 2666 - 4000 = 1okt。
The remaining 1okt will be distributed to the address of the validator, the final reward of the validator is 2000 + 1 = 2001okt.


## 5. Operation example
## Distribution module related functions
okchain adopts an active distribution approach. At the end of each distribution period, rewards are distributed to users’ accounts. Please refer to the design documentation for detailed reward distribution strategies and resources
### Distribution related tx operation
1. Change the distribution address (new rewards will be distributed to the newly set address after change)
```sh
# Set the withdraw address for rewards associated with a delegator address:
$ okchaincli tx set-withdraw-addr okchain1gghjut3ccd8ay0zduzj64hwre2fxs9ld75ru9p --from [mykey]
Usage:
  okchaincli tx distr set-withdraw-addr [withdraw-addr] [flags]
```
### Distribution related query operation
1. Query parameters of the distribution system
```sh
okchaincli query distr params --chain-id okchain
```
2. Query information on all rewards
```
okchaincli query distr validator-outstanding-rewards [valAddress] --chain-id okchain
```
3. Query information on the validator’s commission
```sh
okchaincli query distr commission [valAddress]  --chain-id okchain
```
4. Query the rewards of the delegator. If okchainvaloper is not input, it means that you query the information on the rewards from all delegators
```sh
okchaincli query distr rewards [accAddress] [valAddress]  --chain-id okchain
```








