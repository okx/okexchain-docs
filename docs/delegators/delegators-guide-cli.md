<!--
order: 1
-->

# Delegator Guide (CLI)

This document contains all the necessary information for delegators to interact with the OKChain through the Command-Line Interface (CLI).


::: danger
**Very Important**: Please assure that you follow the steps described hereinafter
carefully, as negligence in this significant process could lead to an indefinite
loss of your okts. Therefore, read through the following instructions in their 
entirety prior to proceeding and reach out to us in case you need support.

Please also note that you are about to interact with the OKChain, a
blockchain technology containing highly experimental software. While the
blockchain has been developed in accordance to the state of the art and audited
with utmost care, we can nevertheless expect to have issues, updates and bugs.
Furthermore, interaction with blockchain technology requires
advanced technical skills and always entails risks that are outside our control.
By using the software, you confirm that you understand the inherent risks
associated with cryptographic software. Any use of this open source software released under the Apache 2.0 license is
done at your own risk and on a "AS IS" basis, without warranties or conditions
of any kind.
:::

Please exercise extreme caution!

## Table of Contents

- [Installing `okchaincli`](#installing-okchaincli)
- [OKChain Accounts](#cosmos-accounts)
    + [Creating an Account](#creating-an-account)
- [Accessing the OKChain Network](#accessing-the-cosmos-hub-network)
    + [Running Your Own Full-Node](#running-your-own-full-node)
    + [Connecting to a Remote Full-Node](#connecting-to-a-remote-full-node)
- [Setting Up `okchaincli`](#setting-up-okchaincli)
- [Querying the State](#querying-the-state)
- [Sending Transactions](#sending-transactions)
    + [A Note on Gas and Fees](#a-note-on-gas-and-fees)
    + [Bonding okts and Withdrawing Rewards](#bonding-okts-and-withdrawing-rewards)
    + [Participating in Governance](#participating-in-governance)
    + [Signing Transactions from an Offline Computer](#signing-transactions-from-an-offline-computer)

## Installing `okchaincli` 

`okchaincli`: This is the command-line interface to interact with a `okchaind` full-node. 

::: warning
**Please check that you download the latest stable release of `okchaincli` that is available**
:::

[**Download the binaries**]
Not available yet.

[**Install from source**](../getting-start/install-okchain.html)

::: tip
`okchaincli` is used from a terminal. To open the terminal, follow these steps:
- **Windows**: `Start` > `All Programs` > `Accessories` > `Command Prompt`
- **MacOS**: `Finder` > `Applications` > `Utilities` > `Terminal`
- **Linux**: `Ctrl` + `Alt` + `T`
:::

## OKChain Accounts

At the core of every OKChain account, there is a seed, which takes the form of a 12-words mnemonic. From this mnemonic, it is possible to create any number of OKChain accounts, i.e. pairs of private key/public key. This is called an HD wallet (see [BIP32](https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki) for more information on the HD wallet specification).

```
     Account 0                         Account 1                         Account 2

+------------------+              +------------------+               +------------------+
|                  |              |                  |               |                  |
|    Address 0     |              |    Address 1     |               |    Address 2     |
|        ^         |              |        ^         |               |        ^         |
|        |         |              |        |         |               |        |         |
|        |         |              |        |         |               |        |         |
|        |         |              |        |         |               |        |         |
|        +         |              |        +         |               |        +         |
|  Public key 0    |              |  Public key 1    |               |  Public key 2    |
|        ^         |              |        ^         |               |        ^         |
|        |         |              |        |         |               |        |         |
|        |         |              |        |         |               |        |         |
|        |         |              |        |         |               |        |         |
|        +         |              |        +         |               |        +         |
|  Private key 0   |              |  Private key 1   |               |  Private key 2   |
|        ^         |              |        ^         |               |        ^         |
+------------------+              +------------------+               +------------------+
         |                                 |                                  |
         |                                 |                                  |
         |                                 |                                  |
         +--------------------------------------------------------------------+
                                           |
                                           |
                                 +---------+---------+
                                 |                   |
                                 |  Mnemonic (Seed)  |
                                 |                   |
                                 +-------------------+
```

The funds stored in an account are controlled by the private key. This private key is generated using a one-way function from the mnemonic. If you lose the private key, you can retrieve it using the mnemonic. However, if you lose the mnemonic, you will lose access to all the derived private keys. Likewise, if someone gains access to your mnemonic, they gain access to all the associated accounts. 

::: danger
**Do not lose or share your 12 words with anyone. To prevent theft or loss of funds, it is best to ensure that you keep multiple copies of your mnemonic, and store it in a safe, secure place and that only you know how to access. If someone is able to gain access to your mnemonic, they will be able to gain access to your private keys and control the accounts associated with them.**
:::

The address is a public string with a human-readable prefix (e.g. `okchain1e9mh6ypht7ncfc482qcl0tj2q6j84fkqtl4x9k`) that identifies your account. When someone wants to send you funds, they send it to your address. It is computationally infeasible to find the private key associated with a given address. 


### Creating an Account

To create an account, you just need to have `okchaincli` installed. Before creating it, you need to know where you intend to store and interact with your private keys. The best options are to store them in an offline dedicated computer or a ledger device. Storing them on your regular online computer involves more risk, since anyone who infiltrates your computer through the internet could exfiltrate your private keys and steal your funds.


::: warning
**NOTE: It is more secure to perform this action on an offline computer**
:::

To generate an account, just use the following command:

```bash
okchaincli keys add <yourKeyName>
```

The command will generate a 24-words mnemonic and save the private and public keys for account `0`
at the same time.
Each time you want to send a transaction, you will need to unlock your system's credentials store.
If you lose access to your credentials storage, you can always recover the private key with the
mnemonic.

::: tip
**You may not be prompted for password each time you send a transaction since most operating systems
unlock user's credentials store upon login by default. If you want to change your credentials
store security policies please refer to your operating system manual.**
:::

::: danger
**Do not lose or share your 12 words with anyone. To prevent theft or loss of funds, it is best to ensure that you keep multiple copies of your mnemonic, and store it in a safe, secure place and that only you know how to access. If someone is able to gain access to your mnemonic, they will be able to gain access to your private keys and control the accounts associated with them.**
::: 

::: warning
After you have secured your mnemonic (triple check!), you can delete bash history to ensure no one can retrieve it:

```bash
history -c
rm ~/.bash_history
```
:::

- `<yourKeyName>` is the name of the account. It is a reference to the account number used to derive the key pair from the mnemonic. You will use this name to identify your account when you want to send a transaction.
- You can add the optional `--account` flag to specify the path (`0`, `1`, `2`, ...) you want to use to generate your account. By default, account `0` is generated. 


You can generate more accounts from the same mnemonic using the following command:

```bash
okchaincli keys add <yourKeyName> --recover --account 1
```

This command will prompt you to input a passphrase as well as your mnemonic. Change the account number to generate a different account. 


## Accessing the OKChain Network

In order to query the state and send transactions, you need a way to access the network. To do so, you can either run your own full-node, or connect to someone else's.

::: danger
**NOTE: Do not share your mnemonic (12 or 24 words) with anyone. The only person who should ever need to know it is you. This is especially important if you are ever approached via email or direct message by someone requesting that you share your mnemonic for any kind of blockchain services or support. No one from OKChain, the Tendermint team or the Interchain Foundation will ever send an email that asks for you to share any kind of account credentials or your mnemonic."**.
::: 

### Running Your Own Full-Node

This is the most secure option, but comes with relatively high resource requirements. In order to run your own full-node, you need good bandwidth and at least 1TB of disk space. 

You will find the tutorial on how to install `okchaind` [here](https://cosmos.network/docs/cosmos-hub/installation.html), and the guide to run a full-node [here](https://cosmos.network/docs/cosmos-hub/join-mainnet.html).

### Connecting to a Remote Full-Node

If you do not want or cannot run your own node, you can connect to someone else's full-node. You should pick an operator you trust, because a malicious operator could return  incorrect query results or censor your transactions. However, they will never be able to steal your funds, as your private keys are stored locally on your computer or ledger device. Possible options of full-node operators include validators, wallet providers or exchanges. 

In order to connect to the full-node, you will need an address of the following form: `https://77.87.106.33:26657` (*Note: This is a placeholder*). This address has to be communicated by the full-node operator you choose to trust. You will use this address in the [following section](#setting-up-okchaincli).

## Setting Up `okchaincli`

::: tip
**Before setting up `okchaincli`, make sure you have set up a way to [access the OKChain network](#accessing-the-cosmos-hub-network)**
:::

::: warning
**Please check that you are always using the latest stable release of `okchaincli`**
:::

`okchaincli` is the tool that enables you to interact with the node that runs on the OKChain network, whether you run it yourself or not. Let us set it up properly.

In order to set up `okchaincli`, use the following command:

```bash
okchaincli config <flag> <value>
```

It allows you to set a default value for each given flag. 

First, set up the address of the full-node you want to connect to:

```bash
okchaincli config node <host>:<port

// example: okchaincli config node https://77.87.106.33:26657
```

If you run your own full-node, just use `tcp://localhost:26657` as the address. 

Then, let us set the default value of the `--trust-node` flag:

```bash
okchaincli config trust-node false

// Set to true if you run a light-client node, false otherwise
```

Finally, let us set the `chain-id` of the blockchain we want to interact with:

```bash
okchaincli config chain-id okchain
```

## Querying the State

::: tip
**Before you can bond okts and withdraw rewards, you need to [set up `okchaincli`](#setting-up-okchaincli)**
:::

`okchaincli` lets you query all relevant information from the blockchain, like account balances, amount of bonded tokens, outstanding rewards, governance proposals and more. Next is a list of the most useful commands for delegator. 

```bash
// query account balances and other account-related information
okchaincli query account <yourAddress>

// query the list of validators
okchaincli query staking validators

// query the information of a validator given their address (e.g. cosmosvaloper1n5pepvmgsfd3p2tqqgvt505jvymmstf6s9gw27)
okchaincli query staking validator <validatorAddress>

// query all delegations made from a delegator given their address (e.g. cosmos10snjt8dmpr5my0h76xj48ty80uzwhraqalu4eg)
okchaincli query staking delegations <delegatorAddress>

// query a specific delegation made from a delegator (e.g. cosmos10snjt8dmpr5my0h76xj48ty80uzwhraqalu4eg) to a validator (e.g. cosmosvaloper1n5pepvmgsfd3p2tqqgvt505jvymmstf6s9gw27) given their addresses
okchaincli query staking delegation <delegatorAddress> <validatorAddress>

// query the rewards of a delegator given a delegator address (e.g. cosmos10snjt8dmpr5my0h76xj48ty80uzwhraqalu4eg)
okchaincli query distribution rewards <delegatorAddress> 

// query all proposals currently open for depositing
okchaincli query gov proposals --status deposit_period

// query all proposals currently open for voting
okchaincli query gov proposals --status voting_period

// query a proposal given its proposalID
okchaincli query gov proposal <proposalID>
```

For more commands, just type:

```bash
okchaincli query
```

For each command, you can use the `-h` or `--help` flag to get more information.

## Sending Transactions

::: warning
On OKChain testnet, the accepted denom is `uatom`, where `1atom = 1,000,000uatom`
:::

### A Note on Gas and Fees

Transactions on the OKChain network need to include a transaction fee in order to be processed. This fee pays for the gas required to run the transaction. The formula is the following:

```
fees = ceil(gas * gasPrices)
```

The `gas` is dependent on the transaction. Different transaction require different amount of `gas`. The `gas` amount for a transaction is calculated as it is being processed, but there is a way to estimate it beforehand by using the `auto` value for the `gas` flag. Of course, this only gives an estimate. You can adjust this estimate with the flag `--gas-adjustment` (default `1.0`) if you want to be sure you provide enough `gas` for the transaction. For the remainder of this tutorial, we will use a `--gas-adjustment` of `1.5`.

The `gasPrice` is the price of each unit of `gas`. Each validator sets a `min-gas-price` value, and will only include transactions that have a `gasPrice` greater than their `min-gas-price`. 

The transaction `fees` are the product of `gas` and `gasPrice`. As a user, you have to input 2 out of 3. The higher the `gasPrice`/`fees`, the higher the chance that your transaction will get included in a block. 

::: tip
For testnet, the recommended `gas-prices` is `0.025uatom`. 
::: 

### Sending Tokens

::: tip
**Before you can bond okts and withdraw rewards, you need to [set up `okchaincli`](#setting-up-okchaincli) and [create an account](#creating-an-account)**
:::

::: warning
**Note: These commands need to be run on an online computer. It is more secure to perform them commands using a Ledger Nano S device. For the offline procedure, click [here](#signing-transactions-from-an-offline-computer).**
::: 

```bash
// Send a certain amount of tokens to an address
// Ex value for parameters (do not actually use these values in your tx!!): <to_address>=cosmos16m93fezfiezhvnjajzrfyszml8qm92a0w67ntjhd3d0 <amount>=1000000uatom 
// Ex value for flags: <gasPrice>=0.025uatom

okchaincli tx send <to_address> <amount> --from <yourKeyName> --gas auto --gas-adjustment 1.5 --gas-prices <gasPrice>
```

### Bonding okts and Withdrawing Rewards

::: tip
**Before you can bond okts and withdraw rewards, you need to [set up `okchaincli`](#setting-up-okchaincli) and [create an account](#creating-an-account)**
:::

::: warning
**Before bonding okts, please read the [delegator faq](https://cosmos.network/resources/delegators) to understand the risk and responsibilities involved with delegating**
:::

::: warning
**Note: These commands need to be run on an online computer. It is more secure to perform them commands using a ledger device. For the offline procedure, click [here](#signing-transactions-from-an-offline-computer).**
::: 

```bash
// Bond a certain amount of okts to a given validator
// ex value for flags: <validatorAddress>=cosmosvaloper18thamkhnj9wz8pa4nhnp9rldprgant57pk2m8s, <amountToBound>=10000000uatom, <gasPrice>=0.025uatom

okchaincli tx staking delegate <validatorAddress> <amountToBond> --from <delegatorKeyName> --gas auto --gas-adjustment 1.5 --gas-prices <gasPrice>


// Redelegate a certain amount of okts from a validator to another
// Can only be used if already bonded to a validator
// Redelegation takes effect immediately, there is no waiting period to redelegate
// After a redelegation, no other redelegation can be made from the account for the next 3 weeks
// ex value for flags: <stcValidatorAddress>=cosmosvaloper18thamkhnj9wz8pa4nhnp9rldprgant57pk2m8s, <amountToRedelegate>=100000000uatom, <gasPrice>=0.025uatom

okchaincli tx staking redelegate <srcValidatorAddress> <destValidatorAddress> <amountToRedelegate> --from <delegatorKeyName> --gas auto --gas-adjustment 1.5 --gas-prices <gasPrice>

// Withdraw all rewards
// ex value for flag: <gasPrice>=0.025uatom

okchaincli tx distribution withdraw-all-rewards --from <delegatorKeyName> --gas auto --gas-adjustment 1.5 --gas-prices <gasPrice>


// Unbond a certain amount of okts from a given validator 
// You will have to wait 3 weeks before your okts are fully unbonded and transferrable 
// ex value for flags: <validatorAddress>=cosmosvaloper18thamkhnj9wz8pa4nhnp9rldprgant57pk2m8s, <amountToUnbound>=10000000uatom, <gasPrice>=0.025uatom

okchaincli tx staking unbond <validatorAddress> <amountToUnbond> --from <delegatorKeyName> --gas auto --gas-adjustment 1.5 --gas-prices <gasPrice>
```

::: warning
**If you use a connected Ledger, you will be asked to confirm the transaction on the device before it is signed and broadcast to the network. Note that the command will only work while the Ledger is plugged in and unlocked.**
::: 

To confirm that your transaction went through, you can use the following queries:

```bash
// your balance should change after you bond okts or withdraw rewards
okchaincli query account

// you should have delegations after you bond okt
okchaincli query staking delegations <delegatorAddress>

// this returns your tx if it has been included
// use the tx hash that was displayed when you created the tx
okchaincli query tx <txHash>

```

Double check with a block explorer if you interact with the network through a trusted full-node. 

## Participating in Governance

#### Primer on Governance

The OKChain has a built-in governance system that lets bonded okt holders vote on proposals. There are three types of proposal:

- `Text Proposals`: These are the most basic type of proposals. They can be used to get the opinion of the network on a given topic. 
- `Parameter Proposals`: These are used to update the value of an existing parameter.
- `Software Upgrade Proposal`: These are used to propose an upgrade of the Hub's software.

Any okt holder can submit a proposal. In order for the proposal to be open for voting, it needs to come with a `deposit` that is greater than a parameter called `minDeposit`. The `deposit` need not be provided in its entirety by the submitter. If the initial proposer's `deposit` is not sufficient, the proposal enters the `deposit_period` status. Then, any okt holder can increase the deposit by sending a `depositTx`. 

Once the `deposit` reaches `minDeposit`, the proposal enters the `voting_period`, which lasts 2 weeks. Any **bonded** okt holder can then cast a vote on this proposal. The options are `Yes`, `No`, `NoWithVeto` and `Abstain`. The weight of the vote is based on the amount of bonded okts of the sender. If they don't vote, delegator inherit the vote of their validator. However, delegators can override their validator's vote by sending a vote themselves. 

At the end of the voting period, the proposal is accepted if there are more than 50% `Yes` votes (excluding `Abstain ` votes) and less than 33.33% of `NoWithVeto` votes (excluding `Abstain` votes).

#### In Practice

::: tip
**Before you can bond okts and withdraw rewards, you need to [bond okts](#bonding-okts-and-withdrawing-rewards)**
:::

::: warning
**Note: These commands need to be run on an online computer. It is more secure to perform them commands using a ledger device. For the offline procedure, click [here](#signing-transactions-from-an-offline-computer).**
::: 

```bash
// Submit a Proposal
// <type>=text/parameter_change/software_upgrade
// ex value for flag: <gasPrice>=0.025uatom

okchaincli tx gov submit-proposal --title "Test Proposal" --description "My awesome proposal" --type <type> --deposit=10000000uatom --gas auto --gas-adjustment 1.5 --gas-prices <gasPrice> --from <delegatorKeyName>

// Increase deposit of a proposal
// Retrieve proposalID from $okchaincli query gov proposals --status deposit_period
// ex value for parameter: <deposit>=10000000uatom

okchaincli tx gov deposit <proposalID> <deposit> --gas auto --gas-adjustment 1.5 --gas-prices <gasPrice> --from <delegatorKeyName>

// Vote on a proposal
// Retrieve proposalID from $okchaincli query gov proposals --status voting_period 
// <option>=yes/no/no_with_veto/abstain

okchaincli tx gov vote <proposalID> <option> --gas auto --gas-adjustment 1.5 --gas-prices <gasPrice> --from <delegatorKeyName>
```

### Signing Transactions From an Offline Computer

If you do not have a ledger device and want to interact with your private key on an offline computer, you can use the following procedure. First, generate an unsigned transaction on an **online computer** with the following command (example with a bonding transaction):

```bash
// Bond okts 
// ex value for flags: <amountToBound>=10000000uatom, <bech32AddressOfValidator>=cosmosvaloper18thamkhnj9wz8pa4nhnp9rldprgant57pk2m8s, <gasPrice>=0.025uatom, <delegatorAddress>=cosmos10snjt8dmpr5my0h76xj48ty80uzwhraqalu4eg

okchaincli tx staking delegate <validatorAddress> <amountToBond> --from <delegatorAddress> --gas auto --gas-adjustment 1.5 --gas-prices <gasPrice> --generate-only > unsignedTX.json
```

In order to sign, you will also need the `chain-id`, `account-number` and `sequence`. The `chain-id` is a unique identifier for the blockchain on which you are submitting the transaction. The `account-number` is an identifier generated when your account first receives funds. The `sequence` number is used to keep track of the number of transactions you have sent and prevent replay attacks.

Get the chain-id from the genesis file (`okchain`), and the two other fields using the account query:

```bash
okchaincli query account <yourAddress> --chain-id okchain
```

Then, copy `unsignedTx.json` and transfer it (e.g. via USB) to the offline computer. If it is not done already, [create an account on the offline computer](#using-a-computer). For additional security, you can double check the parameters of your transaction before signing it using the following command:

```bash
cat unsignedTx.json
```

Now, sign the transaction using the following command. You will need the `chain-id`, `sequence` and `account-number` obtained earlier:

```bash
okchaincli tx sign unsignedTx.json --from <delegatorKeyName> --offline --chain-id okchain --sequence <sequence> --account-number <account-number> > signedTx.json
```

Copy `signedTx.json` and transfer it back to the online computer. Finally, use the following command to broadcast the transaction:

```bash
okchaincli tx broadcast signedTx.json
```
