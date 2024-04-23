# Developer Dividend Project 

# Introduction

This article is a detailed explanation of the principles of OKTC’s contract handling fee distribution project (Gas Back).

## What is gas back?

Gas Back is a new function added to OKTC [v1.6.5.1](https://github.com/okx/exchain/tree/v1.6.5.1), which supports the proportional distribution of handling fees between block producers and contract deployers. The handling fee for calling a contract is distributed proportionally to the deployer of the contract.

Gas Back aims to encourage more developers to deploy contracts on OKTC and enrichen the OKTC ecosystem.

## The influence of gas back on OKTC participants

| Order | Participant type  | Action                                          | Effect                                                       |
| ----- | ----------------- | ----------------------------------------------- | ------------------------------------------------------------ |
| 1     | Contract user     | Call contract                                   | No effect, no additional handling fees will be charged       |
| 2     | Contract deployer | Deploy contractGas Back Participate in Gas Back | Needs to register for Gas Back, pay a certain amount in handling feesAfter registering, the contract’s handling fees will be proportionally distributed to the deployer |
| 3     | Validator node    | Handling fee dividend                           | Profit from handling fee dividends will lessen               |

## Rules for calculation of gas back handling fee dividend distribution 

```
split_fee= tx.GasUsed * tx.GasPrice * DeveloperShares
```

Among which:

- `split_fee`A single transaction, the amount of handling fees the contract deployer can distribute out

- `tx.GasUsed`Amount of gas the transaction consumed

- `tx.GasPrice`Gas price of the transaction

- `DeveloperShares`handling fee dividend distribution ratio, this value is controlled by 2 variables:
  - From the system parameters of the Gas Back module, the default value is 0.5, which can be modified by initiating a parameter modification proposal. Usually all contracts are calculated according to this ratio.
  - In respects to the Gas Back dividend distribution ratio modification proposal, this proposal can modify the dividend distribution ratio of a single contract. After the entire network votes, the contract will calculate the dividend distribution ratio according to the new specifications, in place of the system parameters which will no longer be used to calculate the dividend distribution ratio.
    -   This proposal can be used to either lower（≥ 0）or raise（≤ 1）a contract’s dividend distribution ratio.

For example, if the system dividend distribution ratio is`DeveloperShares=0.5`，`account a`(Deployer of`contract A`)register to Gas Back function, and set`account b`as withdraw.

Call`tx1` of`contract A`to consume`gas=41624`，Specified`gas price=0.1gwei`, with` account b`and through`tx1`can obtain:

Dividend distribution ratio amount = 41624 * 0.1gwei * 0.5 = 0.000002081200000000 (OKT)