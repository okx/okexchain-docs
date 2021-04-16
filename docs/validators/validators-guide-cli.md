
# Validator Guide (CLI)
<!--
order: 2
-->


Staking is an important basic module supporting PoS (Proof of Stake) consensus mechanism. It determines the number of block producer sets in each election period according to the total amount of delegated proof of stake accepted by validators, and dynamically determines the block order according to the voting power. Meanwhile, it also provides necessary support for delegation relationships and information query of validators to distribution and governance modules.

Through staking, you can freely create validators, update validators, delegate proof of stake to trusted validators, cancel delegation from validators that you no longer trust, and re-delegate proof of stake  to other validators.

## Rotation mechanism

OKExChain will re-elect block generation nodes from each set at each fixed block height interval which is called cycle. The block generation set is fixed and the identities of block generation nodes in the set remain unchanged during the same cycle. At the penultimate block height interval during the same cycle, staking will rotate the block generation node sets for the next cycle. The top 21 nodes with the highest number of okt will become the block generation nodes in the next cycle, and the nodes which are not the top 21 ones with the highest number of okt in the set will be forced to quit. The number of okt should only be an integer, and the decimal part is not considered when the comparison of the numbers of nodes supported by the sets is made during rotation.
OKExChain will re-elect block generation nodes at each fixed block height interval, called cycle. The block producer will be changed every 252 blocks (a cycle), and the next producer is elected on the 251th block of a cycle. This change takes effect in the 1st block of the next cycle. The top 21 nodes with the highest number of OKT will become the block generation nodes in the next cycle, and the nodes which are not within the top 21 ones with the highest number of OKT in the set will be forced to quit. The number of OKT should only be an integer, and the decimal part is not considered when the comparison of the numbers of nodes supported by the sets is made during each rotation.

> _NOTE_: Before reading the following documents, it is recommended that you read [delegators-guide-cli](../delegators/delegators-guide-cli.html) first. If you need to get TOKT, you can get it [here](https://www.okex.com/drawdex).


## cli command
Staking cli command contains the 5 following commands for PoS operations.

* create-validator：create a validator
* edit-validator：update a validator
* deposit：deposit  tokens
* add shares：add shares that are calculated by deposited token
* withdraw：withdraw the deposited token

### Create a validator

Upgrade a node to a validator and set the description on a validator.

```bash
  okexchaincli tx staking create-validator --pubkey=$(okexchaind tendermint show-validator) --moniker="my nickname" --identity="logo|||http://mywebsite/pic/logo.jpg" --website="http://mywebsite" --details="my slogan" --from jack
```
> _NOTE_: If you set home flag when executing `okexchaind start`, `okexchaind tendermint show-validator` the inputs after home flag should be the same as `okexcahind start`.

* **Pubkey** represents the tendermint public key of the current node
* **Moniker** indicates the alias of the validator
* **Identity** specifies the address of the validator’s profile picture
* **Website** indicates the validator’s website address
* **Details** indicate the validator’s detailed description
* **From** specifies the operator’s account, which is jack here


### Update a validator

The operator can update the description of the validator and adjust the commission rate.

```bash
okexchaincli tx staking edit-validator --moniker=“my new nickname” --identity="logo|||http://mynewwebsite/pic/newlogo.jpg" --website="http://mynewwebsite" --details="my new slogan"  --from jack
```

* **moniker** indicates the alias of the validator to be updated
* **identity** specifies the address of the profile picture of the validator to be updated
* **website** indicates the website address of the validator to be updated
* **details** indicate the detailed description of the validator to be updated
* **from** specifies the operator’s account, which is jack here


### Deposit
Users first need to deposit a certain amount of OKTs to make the staking account become a delegator one.
```bash
okexchaincli tx staking deposit <amountToDeposit> --from <delegatorKeyName> --gas auto --gas-adjustment 1.5 --gas-prices <gasPrice>
```

### Add shares

An OKExChain delegator can add shares to himself or other validator by following the command:

```bash
okexchaincli tx staking add-shares exvaloper1qj5c07sm6jetjz8f509qtrxgh4psxkv3m2wy6x,exvaloper1hcngft7gfkhn8z8fnlajzh7agyt0az0vv9pllr,exvaloper1c5g4v00np7fjjnexkhh5yk0hc6mamf40u5vjrh,exvaloper1fh9tpkqka29n0mj307cu5cvp5ts0p4dl8uug6e --from <delegatorKeyName>
```

* In the following example, `exvaloper1qj5c07sm6jetjz8f509qtrxgh4psxkv3m2wy6x,exvaloper1hcngft7gfkhn8z8fnlajzh7agyt0az0vv9pllr,exvaloper1c5g4v00np7fjjnexkhh5yk0hc6mamf40u5vjrh,exvaloper1fh9tpkqka29n0mj307cu5cvp5ts0p4dl8uug6e` are the validator’s addresses, and all OKT deposited will be converted into shares and added on the above-mentioned validators.

* The from flag specifies who signs the transaction.

### Withdraw

When an OKExChain user withdraws the deposited tokens , the share added to the validators will be removed.This token withdrawal process  takes 14 days.

* The number of tokens allowed to be withdrawn must be greater or equal to be 0.0001 ~ n (total number of tokens deposited by the user).
* If a user has added staking rights on some validators, after executing the command, the number of staking rights will be automatically updated. Essentially, this action  could be considered as a `re-vote` behavior.
* If the user has already added shares, after executing the command to withdraw all the tokens, it could be considered as an `unbond` behavior.
* If the user hasn’t added shares, the new tokens will not be transformed into shares after executing the command.
* Users are allowed to withdraw deposited tokens multiple times. Every time tokens are withdrawn, the tokens will be locked for 14 days before being sent back to the user’s account. If users withdraw tokens again (after the last withdrawal) within 14 days, the tokens withdrawn last time will be locked for another 14 days, and will be sent back to the user’s account with the second batch of token withdrawn.

Withdraw an amount of OKT and the corresponding shares from all validators.

```bash
okexchaincli tx staking withdraw 10okt --from rose
```

* In the example, 10 is the number of deposited OKTs to be withdrawn.

* Here, “from” indicates the user account to be withdrawn, which is “rose” in this example.

### Reward

Validators will be rewarded for  performing well. The owner can withdraw the rewards by using the command below:

```
okexchaincli tx distr withdraw-rewards <validator-addr> --from <validatorKeyName> --gas auto --gas-adjustment 1.5 --gas-prices <gasPrice>
```
