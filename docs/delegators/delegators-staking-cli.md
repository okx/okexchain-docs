# OKC CLI staking manual

This guide explains how to use command-line interface (CLI) commands to earn staking rewards as a validator or delegator.

> _NOTE_: Before reading the following documents, it is recommended that you read [delegators-guide-cli](../delegators/delegators-guide-cli.html) first. If you need to get OKT, you can get it [here](https://discord.gg/B5nMs6qK5F).

## What is staking?

OKC employs Tendermint's (BFT-DPoS) consensus algorithm. Users can use the command-line interface (CLI) tool to stake OKT and earn voting rights, and also have the option to give their votes to their desired validator node(s) for access to dividend rewards on the chain.



## How to stake for ordinary users

1. Stake OKT, obtain voting rights

1. Choose validator(s) to vote for, and if the chosen validator has set up a share ratio, the user will receive a dividend reward on the chain.

### Staking

```Shell
// Deposit an amount of OKT to the delegator account.
// Deposited OKT in the delegator account is a prerequisite for adding shares. If add-shares was set before, this deposit will reuse the existing add-shares settings with the validators, respectively, and trigger a passive reward, which will automatically distribute the rewards to its own account (or reward withdrawal account).
// e.g., <amountToDeposit>=1024okt, <gasPrice>=0.00000001okt

exchaincli tx staking deposit <amountToDeposit> --from <delegatorKeyName> --gas auto --gas-adjustment 1.5 --gas-prices <gasPrice>

// Query all information on delegations and all shares recently added by a delegator.
// e.g., <delegatorAddress>=ex1c8w3jcfagaw8s2je3kk2dqftmyypzv3mrv4tcd

exchaincli query staking delegator <delegatorAddress>
```

### Voting

```Shell
// Add shares to one or more validators with all deposited OKT.
// Note: If shares are added multiple times, only the last setting will be used. If add-shares was set before, this operation will trigger a passive reward, which will automatically distribute the rewards to its own account (or reward withdrawal account).
// e.g., <validator-addr1, validator-addr2, validator-addr3, ... validator-addrN>=exvaloper1h0j8x0v9hs4eq6ppgamemfyu4vuvp2sle8094k,exvaloper1qrugh3kdhfz2a4cjx7ahuk6pkc7yy3pryv2jvw
// <gasPrice>=0.00000001okt

exchaincli tx staking add-shares <validator-addr1, validator-addr2, validator-addr3, ... validator-addrN> --from <delegatorKeyName> --gas auto --gas-adjustment 1.5 --gas-prices <gasPrice>

// Query all information on delegations and all shares recently added by a delegator.
// e.g., <delegatorAddress>=ex1c8w3jcfagaw8s2je3kk2dqftmyypzv3mrv4tcd

exchaincli query staking delegator <delegatorAddress>
```

## Common command operations of ordinary users

Ordinary users can reference the following commands below to conduct staking and voting, hence obtaining dividend rewards.

Note: On every command, users can write ` -h or --help` to get more help info.

### Staking OKT

```Shell
// Deposit an amount of OKT to the delegator account.
// Deposited OKT in the delegator account is a prerequisite for adding shares. If add-shares was set before, this deposit will reuse the existing add-shares settings with the validators, respectively, and trigger a passive reward, which will automatically distribute the rewards to its own account (or reward withdrawal account).
// e.g., <amountToDeposit>=1024okt, <gasPrice>=0.00000001okt

exchaincli tx staking deposit <amountToDeposit> --from <delegatorKeyName> --gas auto --gas-adjustment 1.5 --gas-prices <gasPrice>

// Query all information on delegations and all shares recently added by a delegator.
// e.g., <delegatorAddress>=ex1c8w3jcfagaw8s2je3kk2dqftmyypzv3mrv4tcd

exchaincli query staking delegator <delegatorAddress>
```

### Voting

```Shell
// Add shares to one or more validators with all deposited OKT.
// Note: If shares are added multiple times, only the last setting will be used. If add-shares was set before, this operation will trigger a passive reward, which will automatically distribute the rewards to its own account (or reward withdrawal account).
// e.g., <validator-addr1, validator-addr2, validator-addr3, ... validator-addrN>=exvaloper1h0j8x0v9hs4eq6ppgamemfyu4vuvp2sle8094k,exvaloper1qrugh3kdhfz2a4cjx7ahuk6pkc7yy3pryv2jvw
// <gasPrice>=0.00000001okt

exchaincli tx staking add-shares <validator-addr1, validator-addr2, validator-addr3, ... validator-addrN> --from <delegatorKeyName> --gas auto --gas-adjustment 1.5 --gas-prices <gasPrice>

// Query all information on delegations and all shares recently added by a delegator.
// e.g., <delegatorAddress>=ex1c8w3jcfagaw8s2je3kk2dqftmyypzv3mrv4tcd

exchaincli query staking delegator <delegatorAddress>
```

### Withdraw OKT

```Shell
// Withdraw an amount of OKT and the corresponding shares from all validators.
// You will have to wait 14 days before your OKTs are fully unlocked and transferrable. This will also trigger a passive reward, which will automatically distribute the rewards to its own account (or reward withdrawal account)
// e.g., <amountToWithdraw>=1024okt, <gasPrice>=0.00000001okt

exchaincli tx staking withdraw <amountToWithdraw> --from <delegatorKeyName> --gas auto --gas-adjustment 1.5 --gas-prices <gasPrice>
```

### Query staking info

```Shell
// Query all information of delegations and all shares recently added by a delegator.
// e.g., <delegatorAddress>=ex1c8w3jcfagaw8s2je3kk2dqftmyypzv3mrv4tcd

exchaincli query staking delegator <delegatorAddress>
```

### Query staking dividend rewards

```Shell
// Query all rewards earned by a delegator, optionally restrict to rewards from a single validator.
// e.g.,  <delegatorAddr>=ex1ja9xngm4zh0t442mse73ll30p7dczd49xqdhwu, [validatorAddr]=exvaloper1xkl5agjzqnjnptyat2dng2asmx8g5kllg7xamv

exchaincli query distr rewards <delegatorAddr> [validatorAddr]
```

### Withdraw a single validator's staking reward

```Shell
// Withdraw rewards from a given validator address.
// e.g., <validatorAddr>=exvaloper1xkl5agjzqnjnptyat2dng2asmx8g5kllg7xamv,<gasPrice>=0.00000001okt

exchaincli tx distr withdraw-rewards <validatorAddr> --from <delegatorKeyName> --gas auto --gas-adjustment 1.5 --gas-prices <gasPrice>
```

### Withdraw all validator staking rewards

```Shell
// Withdraw all delegations rewards for a delegator.
// e.g., <gasPrice>=0.00000001okt

exchaincli tx distr withdraw-all-rewards --from <delegatorKeyName> --gas auto --gas-adjustment 1.5 --gas-prices <gasPrice>
```

## Common command operations of validators

Validators can reference the following commands below to set up a commission rate, withdraw a commission reward, etc.

Note: On every command, users can write ` -h or --help` to get more help info.

### Setting up a validator commission rate

```Shell
// Update an existing validator commission rate, ranging [0,1]. It can only be edited by the validator once every 24 hours. 
//Default value is 1 (100%), i.e., no distribution rewards to users. If the value is set at 0.2 (20%), 80% will be allocated to users according to the voting ratio.
// e.g., <commission-rate>=0.2,<gasPrice>=0.00000001okt

exchaincli tx staking edit-validator-commission-rate <commission-rate> --from <delegatorKeyName> --gas auto --gas-adjustment 1.5 --gas-prices <gasPrice>
```

### Query validator commission rate

```Shell
// Query the information of a validator with the given address. 
// e.g., <validatorAddr>=exvaloper1xkl5agjzqnjnptyat2dng2asmx8g5kllg7xamv

exchaincli query staking validator <validatorAddress>
```

### Query validator commission reward

```Shell
// Query available rewards of a validator address.
// e.g., <validatorAddress>=exvaloper1xkl5agjzqnjnptyat2dng2asmx8g5kllg7xamv

exchaincli query distr commission <validatorAddress>
```

### Withdraw validator commission reward

```Shell
// Withdraw commission reward of validator with commission parameter. This will automatically distribute to its own account (or reward withdraw account).
// e.g., <validatorAddr>=exvaloper1xkl5agjzqnjnptyat2dng2asmx8g5kllg7xamv,<gasPrice>=0.00000001okt

exchaincli tx distr withdraw-rewards <validatorAddr> --commission --from <delegatorKeyName> --gas auto --gas-adjustment 1.5 --gas-prices <gasPrice>
```

## General operating commands

`exchaincli` command can query all the following info from the blockchain: account balance, number of bound tokens (OKT staked and voted for one or more validators), not yet withdrawn commissions, dividend rewards, etc.

Note: On every command, users can write ` -h or --help` to get more help info.

### Query account info

```Shell
// Your balance will change after staking OKTs or withdrawing rewards.

exchaincli query account <yourAddress>
```

### Query transaction execution results

```Shell
// This returns the execution result of a Tx

exchaincli query tx <txHash>
```

### Query all validator lists

```Shell
// Query the list of all validators.

exchaincli query staking validators
```

### Query all validator details

```Shell
// Query the details of a validator with a given address.
// e.g.,  <validatorAddress>=exvaloper1xkl5agjzqnjnptyat2dng2asmx8g5kllg7xamv

exchaincli query staking validator <validatorAddress>
```

### Query all validator voting details

```Shell
// Query the information of all shares recently added to a validator.
// e.g. <validatorAddress> exvaloper1xkl5agjzqnjnptyat2dng2asmx8g5kllg7xamv

exchaincli query staking shares-added-to <validatorAddress>
```

### Query staking module parameters

```Shell
// Query the parameters of the staking module.

exchaincli query staking params 
```

### Query reward module parameters

```Shell
// Query the parameters of the distrbution module.

exchaincli query distr params
```

### Query community pool balance

```Shell
// Query the balance of the community pool.

exchaincli query distr community-pool
```

### Set reward withdrawal address

```Shell
// Change the default withdrawal address.
// e.g., <withdraw-addr>=ex153z8qwxkqa5p2samfn8z50kr9pt8j6afs0am6e,<gasPrice>=0.00000001okt

exchaincli tx distr set-withdraw-addr <withdraw-addr> --from <yourKeyName> --gas auto --gas-adjustment 1.5 --gas-prices <gasPrice>
```

### Query reward withdrawal address

```Shell
// Query the reward withdrawal address of a delegator.

exchaincli query distr withdraw-addr <delegator>
```
