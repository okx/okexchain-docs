# FARM OVERVIEW

## introduction

As an essential part of `DeFi`, `yield farming` has now been integrated into the `Farm module` of `OKC`.

Through the `Farm module`, the project team can quickly create a `yield farming pool` by specifying the following parameters:

- name of farm pool
- farm token and its minimum lock up amount
- reward token for farming

After the farm pool is created, the project team also needs to provide the farm token for the pool, and specify the following paraneters:

- reward token and its amount

- rewards amount per block
-  the block height where the reward starts.

Then the farm pool can work.

After a farm pool works normally, farmers can lock farm tokens in the pool and start to get rewards after the reward start block. The rewards are distributed in blocks, and the total amount of rewards in each block is designated by the project team. The rewards that a farmer get in each block depends on the percentage of the amount of tokens locked by  the farmer in the total amount of tokens locked by all farmers.

Farmers can unlock their own lockup tokens at any time. Each time, they can unlock some or all of them. When unlocking, all active rewards will be sent to farmers at the same time. If the user's farm tokens are not fully unlocked, the remaining farm tokens will start calculating revenue from a new start. Farmers can also choose to only claim rewards without unlocking farm tokens.

When all the reward tokens in the farm pool have been distributed, the project team can continue to provide the reward token to the farm pool to extend the farming time, or destroy the farm pool after all the rewards and farm tokens are retrieved.

If the farm token in the farm pool has created a token pair with `USDK` in the `Swap module`, then the farm pool can calculate market value with `usdk` (market value refers to the usdk value of the farm tokens locked in the farm pool). The farm pool that can calculate the market value can apply to join the `OKT mining white list`  in the `Gov module` . Farmers of a farm pool in the `OKT mining white list` can get not only token rewards in the pool, but also `OKT ` rewards. `OKT` is the native token of `OKC`. `OKC` generates `OKT` rewards in each block, 50% of which is used for validators' rewards, and 50% is allocated to all farm pools in the white list. How many `OKT` rewards can be obtained for each farm pool in each block depends on the proportion of the market value of the farm pool in all farm pools.

