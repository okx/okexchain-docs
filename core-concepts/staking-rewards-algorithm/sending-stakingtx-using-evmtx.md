# Receive Staking Rewards Guide

## 1. Introduction
This guide explains how users can receive gas fee rewards through executing an EVM transaction, whereby users can stake OKT and obtain voting rights to vote for their corresponding validator nodes.
For a detailed explanation of OKTC's staking algorithm, please refer to [here](/dev/core-concepts/staking-rewards-algorithm/distr.html).

## 2. How to use

|  Contract name   | Contract role  | Contract address  |
|  ----  | ----  | ----  |
|  StakingMSGHelper proxy   | Generates a Msg according to the corresponding parameters inputted, acts as the parameters of SystemContract invoke interface  | Mainnet: 0x1b29c875Bd7Ec9a12C29fc6eeF8E451207352EF3 <br> Testnet: 0x37AFc0Fe2b14acC1593C4435F3B53ac0335Ee292  |
|  SystemContract   | Offers a public invoke interface; after the user assembles the data, they can use this interface to initiate a staking transaction  | Mainnet: 0xd6bce454316b8ddFb76bB7bb1B57B8942B09Acd5 <br> Testnet: 0x727d14EfC4FB5281A18A6d62BCf486a1cF4d2210  |
|  StakingMSGHelper    | Code implementation  | Mainnet: 0x4D56015FCAc1C6695A10fB2254190D6996dB6E09 <br> Testnet: 0x5701Dd294C68DbEEC080e0521df58F3643387777  |
|  ProxyAdmin   | Responsible for managing the proxy's admin contract  | Mainnet: 0xe9196e65a0b6705777fbe829dfa94ec8b9f2ba48 <br> Testnet: 0xcc904644d73fa4aff34fda7433a8f3154c812769  |

### Operating process:
1. According to the specific action that the user would like to perform, they should select the corresponding method from the proxy contract in StakingMSGHelper to generate the parameters
2. Use the parameters generated from step 1, call SystemContract's invoke method, generate an EVM formatted transaction
3. Sign and broadcast the assembled EVM transaction on the chain
4. After completion, users can check their results on the [browser](https://www.okx.com/explorer/oktc) or their wallet

## 3. Sample code
The codes use the OKTC staking method as in the examples below, including multi-language version demos; all developers only need to change their private key, address, and parameters to their own 
  - [Js version](https://github.com/okex/solidity-sample/tree/main/js/staking.js)
  - [Go version](https://github.com/okex/solidity-sample/tree/main/go/exchain-staking)
  - [JAVA version](https://github.com/okex/solidity-sample/tree/main/java/exchain-web3-sample/src/main/java/com/exchain/web3/util/staking)

## 4. Interface list
|  Interface   | Details  | Parameter details  | This Msg functions as the corresponding command line of SystemContract's invoke interface parameters  |
|  ----  | ----  | ----  | ----  |
|  genDepositMsg()   | **Stake OKT to get voting rights; this is the prerequisite for users to obtain voting rights** <br> If the user has already voted, their next transaction will automatically trigger a passive claim, and unclaimed rewards will automatically be distributed to their own accounts  | _amount: the desired staking amount, no less than 0.0001 (currency: OKT)  | exchaincli tx staking deposit  |
|  genAddSharesMsg()   | **Voting rights that were exchanged from staking OKT can be used to vote for 1 or more validator nodes** <br> - The validator node address can be obtained from [this](https://www.okx.com/explorer/oktc/bp-list) <br> - If the validator sets up a reward distribution rate, then the voters will be able to receive a share of the rewards <br> - If the user has already voted, their next transaction will automatically trigger a passive claim, and rewards will automatically be distributed to their own accounts  | _validatorAddresses: node address, node values can range from [1,30] <br> Example:["exvaloper1xkl5agjzqnjnptyat2dng2asmx8g5kllg7xamv", <br> "exvaloper1fymxn4gazxzjdfvwvr0ccnrnjpwmj0r9vw3t2y"]  | exchaincli tx staking add-shares |
|  genWithdrawMsg()   | **Withdraw OKT from staking** <br> - There is a 14-day locking period for OKT withdrawals; users currently in the locking period who try to initiate a second withdrawal will have their 14-day locking period reset and start counting from the time of the second initiation <br> - If the user has already voted, their next transaction will automatically trigger a passive claim, and rewards will automatically be distributed to their own accounts  | _amount: the desired withdrawal amount, no less than 0.0001 (currency: OKT)  | exchaincli tx staking withdraw  |
|  genWithdrawAllRewardsMsg()  | **Withdraw and claim all the rewards; all rewards will automatically be distributed to the user's own account**  | None  | exchaincli tx distr withdraw-all-rewards  |