# Reward distribution

## 1. Role definition

|Name|Definition|Election Condition|Quantity|
|---|---|---|---|
| Candidate | Users who have registered Validator on the chain | Unlimited ||
| Validator | Exercise the right to generate blocks and enjoy the right of on-chain governance | Top 21 nodes with the highest number of okt delegations to be the validators in the next cycle | 21 |
| User | A user holding okt | Hold okt | Unlimited ||
| Delegator | A user who can enjoy the reward from the validator | Vote on a node which will become a validator after the next election | Unlimited ||
| Proposer | Pack transactions and notify other validators for verification | Generate a sequential list of proposers based on the number of pledged okt and voting okt of each validator and each supernode may become a proposer | Only one each time ||



## 2. Reward source

* All transaction related fees ([fee](../../concepts/fee.html))
* Other fees
    1. Issuance fee: amount of okt required to be paid by the project team to issue tokens
    1. Listing fee: amount of okt paid by the project team after listing
    1. Deduction for proposal failure: n odes need to deposit a certain amount of okt for a proposal. If the proposal fails, the amount of pledged okt is deducted

## 3. Distribution period & Dividend strategy

25% of the Reward goes to active validators and 75% goes to standby validators calculated from a percentage of the votes received.

Reward allocation calculation is performed once for each block, and the reward will be deposited into the `ValidatorAccumulatedCommission`.

validators need to collect it manually.








