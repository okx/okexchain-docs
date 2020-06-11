
# Validator Guide (CLI)
<!--
order: 2
-->


Staking is an important basic module supporting DEX’s PoS (Proof of Stake) consensus mechanism. It determines the number of block producer sets in each election period according to the total amount of delegated proof of stake accepted by validators, and dynamically determines the block order according to the voting power. Meanwhile, it also provides necessary support for delegation relationships and information query of validators to distribution and gov modules.

Through staking, you can freely create validators, update validators, delegate proof of stake to trusted validators, cancel delegation from validators that you no longer trust, and re-delegate proof of stake currently delegated to a validator to other validators.

## Rotation mechanism

OKChain will re-elect block generation nodes from each set at each fixed block height interval which is called cycle. The block generation set is fixed and the identities of block generation nodes in the set remain unchanged during the same cycle. At the penultimate block height interval during the same cycle, staking will rotate the block generation node sets for the next cycle. The top 21 nodes with the highest number of okt will become the block generation nodes in the next cycle, and the nodes which are not the top 21 ones with the highest number of okt in the set will be forced to quit. The number of okt should only be an integer, and the decimal part is not considered when the comparison of the numbers of nodes supported by the sets is made during rotation.

> _NOTE_: Before reading the following documents, it is recommended that you read [delegators-guide-cli](../delegators/delegators-guide-cli.html) first. If you need to get tokt, you can get it [here](https://www.okex.com/drawdex).

## cli command
staking cli contains the following 5 commands for PoS operations, providing complete support for equity circulation.


*  create-validator：create a validator

*  edit-validator：update a validator

*  deposit：deposit the token 

*  add shares：add shares that are calculated by deposited token

*  withdraw：withdraw the deposited token

### Create a validator

Upgrade a node to a validator and set the description on a validator.

```bash
  okchaincli tx staking create-validator --pubkey=$(okchaind tendermint show-validator) --moniker="my nickname" --identity="logo|||http://mywebsite/pic/logo.jpg" --website="http://mywebsite" --details="my slogan" --from jack
```

* pubkey represents the tendermint public key of the current node
* moniker indicates the alias of the validator
* identity specifies the address of the validator’s profile picture
* website indicates the validator’s website address
* details indicate the validator’s detailed description
* from specifies the operator’s account, which is jack here

### Update a validator

The operator can update the description of the validator and adjust the commission rate.

```bash
okchaincli tx staking edit-validator --moniker=“my new nickname” --identity="logo|||http://mynewwebsite/pic/newlogo.jpg" --website="http://mynewwebsite" --details="my new slogan"  --from jack
```

- moniker indicates the alias of the validator to be updated
- identity specifies the address of the profile picture of the validator to be updated
- website indicates the website address of the validator to be updated
- details indicate the detailed description of the validator to be updated
- from specifies the operator’s account, which is jack here

### Deposit
user need deposit a certain amount of okts to the staking account to become a delegator
```bash
okchaincli tx staking deposit <amountToDeposit> --from <delegatorKeyName> --gas auto --gas-adjustment 1.5 --gas-prices <gasPrice>
```

### Add shares

okchain delegator can add shares to self or other validator by following command

```bash
okchaincli tx staking add-shares okchainvaloper1alq9na49n9yycysh889rl90g9nhe58lcs50wu5,okchainvaloper1svzxp4ts5le2s4zugx34ajt6shz2hg42a3gl7g,okchainvaloper10q0rk5qnyag7wfvvt7rtphlw589m7frs863s3m,okchainvaloper1g7znsf24w4jc3xfca88pq9kmlyjdare6mph5rx --from <delegatorKeyName>
```

* in this example, `okchainvaloper1alq9na49n9yycysh889rl90g9nhe58lcs50wu5`,`okchainvaloper1svzxp4ts5le2s4zugx34ajt6shz2hg42a3gl7g`,`okchainvaloper10q0rk5qnyag7wfvvt7rtphlw589m7frs863s3m`,`okchainvaloper1g7znsf24w4jc3xfca88pq9kmlyjdare6mph5rx` are the validator’s addresses, and all of deposited okt will be calculated into shares added on the above-mentioned validators.

* from indicates the user account to be re-delegated, which is rose here

### Withdraw

okchain users can withdraw the deposited token while cancelling all the shares, it takes 14 days for withdrawing the tokens.

* Allow users to exchange tokens for votes multiple times, and the number of tokens allowed to be withdrawn is supposed to be 0.0001 ~ n (total number of tokens deposited by the user)
* If a user has added shares on some validators, after executing the command, the number of shares will be automatically updated. Essentially, it could be considered as a `re-vote` behavior.
* If the user has already added shares, after executing the command to withdraw all the tokens, it could be considered as an `unbond` behavior.
* If the user hasn't added shares, the new tokens will not be transformed into shares after executing the command. 
* Users are allowed to operate withdrawing deposited tokens many times. Still, it will refresh the time about getting the tokens back, and all the withdrawn tokens will be accumulated. After 14 days, it will be converted into tokens and given back to the user's account.

Withdraw an amount of okt and the corresponding shares from all validators

```bash
okchaincli tx staking withdraw 10okt --from rose
```

* In the example, 10 is the number of the deposited okts to be undelegated

* from indicates the user account to be withdrawn, which is rose here

### Reward

Validator will be rewarded by its well performance. The owner can withdraw the rewards by the command below

```
okchaincli tx distr withdraw-rewards <validator-addr> --from <validatorKeyName> --gas auto --gas-adjustment 1.5 --gas-prices <gasPrice>
```
