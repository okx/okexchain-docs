# Delegator Overview



## Introduction

OKC is based on Tendermint and relies on a set of validators responsible for submitting blocks. These validators participate in the consensus protocol by broadcasting votes which contain cryptographic signatures signed by each validator’s private key.

Token holders can delegate staking rights through the “delegation” command, and select the validators that they think are meaningful to the ecosystem. These token holders are called delegators.


To have a look at a practical guide on how to become a delegator, please click [here](./delegators-guide-cli.html).




## Staking Mechanics

In OKC, any user who has staked OKT tokens can add staking rights to target validators. Each user is allowed to add staking rights for up to 30 validator candidates using the full weight of their stake. For example, if a user has staked  OKT, he has staking rights to share to up to 30 validators. The top 21 validators are determined by the total number of OKT staking rights gathered . Additional validators, ranked by their total number of OKT staked, are also compensated by the network to serve as validator candidates.

OKC is implementing a delegative governance. Users have the option to add staking rights directly to the validators, but they can also delegate their staking  rights to other accounts in order to allow others to participate in the POS protocol on their behalf. The delegated account, called a proxy, has no control over the original user’s account — the user can proxy his staking rights trustlessly without handing over any keys. The proxy has the power to use the delegated staking power towards certain validators, but the user can revoke this staking power from the proxy at any point of time.


In the proxy staking mechanism, there are two roles:
* Delegator
* Proxy delegator

### Delegator
* You can register as a Proxy Delegator by sending a Proxy Delegator Registration transaction.
* Only one proxy can be selected as a proxy delegator.
* Establish a staking relationship with a proxy delegator by executing a proxy binding transaction.
* Once a proxy is selected, all staking rights in the user account are managed by the proxy delegator.
* The number of proxy staking rights obtained will be updated in real time.
* Put an end to  the proxy relationship by executing a transaction that cancels the proxy relationship.

### Proxy delegator
* Transfer from proxy delegator to  delegator by initiating a specific tx unregistration.
* You must have made a deposit to register as a proxy delegator. Once the  proxy delegator’s deposit is completely unbond, the proxy delegator status will be automatically cancelled.
* Acting delegators allow more than one target to stake.
* Whenever the delegator represented by the proxy delegator changes the deposit amounts, all the staking rights of the proxy delegator are updated at the same time. 
* The proxy delegator only records the delegators who bind staking rights to the proxy delegator.
* When registering as a proxy delegator, you can no longer delegate your rights to others (not multiple proxies).
* When the proxy delegator is deregistered, the staking rights  represented by the  proxy delegator are immediately cleared, and the staking power weight of the staked node is also reduced in real time.

## Staking Weight

The weight of the number of staking rights reduces on a weekly basis (0:00 UTC time every Saturday). The ballot weights will be calculated using the following formula:
```
start_timestamp = 946684800 (ie 00:00:00 UTC on January 1, 2000)
weeks_per_year = 52
weight = (now_timestamp - start_timestamp) / (seconds_per_day * 7) / weeks_per_year
shares = delegated_tokens * 2^weight
```
The best staking management strategy consists in increasing the level of staking rights   once a week to ensure that the staking powers held are always up to date.

## Punishment
OKC has an automatic penalty mechanism on-chain, that is currently implemented for two types of behavior:
* When the block node is used as a validator, the block is not signed.
   - In the current testnet, when a total of 9500 block signatures are accumulated, an automatic penalty will be executed.
   - Penalty: Jail validator 600s. 
   - The validator cannot participate in the block rotation during the Jail period.
* Once a double signed block is found in the test network, an automatic penalty will be executed immediately.
   - Penalty: Permanent Jai
   - The validator cannot participate in the block rotation during the Jail period.

## Key Management 
The best way to minimize the risk of theft or loss of OKT is to have a strong storage and backup strategy for your private keys. The safest way to store your keys is offline, either in a cryptocurrency hardware wallet or on any type of other device that you never connect to the internet. The best backup strategy for your keys is to ensure that you have multiple copies of them stored in a few safe places, and to take specific measures to protect at least one copy of your keys from any kind of natural disaster that could happen.

**To protect your OKT, do not share your 12 words with anyone.** The only person who should ever need to know them is you. You do not need to share your private keys if you’re delegating OKT to a validator on the network or to use custodial services.


## Software Vulnerabilities
To protect yourself and ensure you’re using the safest , you need use the latest version of softwares available, and to update them as soon as you can when new versions are released. This is important for your laptops, mobile devices, cryptocurrency wallets, and anything else that may be linked to your crypto-assets.

*To protect your OKT, you should only download software directly from official sources, and make sure that you’re always using the latest and most secure version of `exchaincli` when you’re performing any recovery involving your 12 words*. The latest versions of `Tendermint`, the `OKC-SDK`, and `exchaincli` will always be available from our official Github repositories.

**No one from OKC, the Tendermint team or the Interchain Foundation will ever send an email that asks for you to download a software attachment after sending out a security advisory or making a patch available.**


## Verifying Transactions
Be extra cautious when receiving advice that comes from people you do not know in forums and on group chat channels. Familiarize yourself with important commands, especially those that will help you carry out high-risk actions, and consult our official documentation to make sure that you’re not being tricked into doing something that will harm you or your validators.

**When sending transactions or doing anything that may spend tokens, you should always verify those transactions before hitting send**. While address strings are long, it is important to visually compare them in blocks of 4 characters at a time to ensure that you are sending them to the right address.

## Account Security
One of the most important things you can do to protect your cryptocurrency and to reduce  risk is to highly protect all of your sensitive online accounts. Attackers will try to gain foothold wherever they can, and will use that foothold to pivot from one place to another. Unprotected accounts like email, social media, your Github account, the OKC Forum and anything in between could give an attacker  opportunities to access and steal your data.

For people who hold cryptocurrency, there are two specific account security actions that can be taken to reduce specific risks that come with being part of the blockchain world.

* First, it is important to enable 2-factor authentication everywhere you can, and to make sure that you are using a code generator or [U2F hardware key](https://en.wikipedia.org/wiki/Universal_2nd_Factor) as a second factor.

* Second, be mindful of account recovery methods used to regain access to your most important accounts and make sure that you do not use SMS as a recovery method. If you haven’t done so yet, start using an authenticator app or a hardware key immediately for your personal email account and anything else you use to manage and store your tokens, especially if you use online exchanges.


## Supply Chain Attacks
Whether you’re buying a hardware or a hardware wallet, it is important to purchase whatever you need directly from the supplier or from a trusted source. This is the only way to eliminate the risk of a compromised device or chip from stealing your private keys, especially since there are reports of compromised wallets being sold on Amazon and through other popular online marketplaces.
