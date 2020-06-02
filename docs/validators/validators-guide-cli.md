
# Validator Guide (CLI)
<!--
order: 2
-->


Staking is an important basic module supporting DEX’s PoS (Proof of Stake) consensus mechanism. It determines the number of block producer sets in each election period according to the total amount of delegated proof of stake accepted by validators, and dynamically determines the block order according to the voting power. Meanwhile, it also provides necessary support for delegation relationships and information query of validators to distribution and gov modules.

Through staking, you can freely create validators, update validators, delegate proof of stake to trusted validators, cancel delegation from validators that you no longer trust, and re-delegate proof of stake currently delegated to a validator to other validators.

## Rotation mechanism

OKChain will re-elect block generation nodes from each set at each fixed block height interval which is called cycle. The block generation set is fixed and the identities of block generation nodes in the set remain unchanged during the same cycle. At the penultimate block height interval during the same cycle, staking will rotate the block generation node sets for the next cycle. The top 21 nodes with the highest number of okt will become the block generation nodes in the next cycle, and the nodes which are not the top 21 ones with the highest number of okt in the set will be forced to quit. The number of okt should only be an integer, and the decimal part is not considered when the comparison of the numbers of nodes supported by the sets is made during rotation.

## cli command
staking cli contains the following 5 commands for PoS operations, providing complete support for equity circulation.


*  create-validator：create a validator

*  edit-validator：update a validator

*  delegate：delegate proof of stake

*  unbond：undelegate

*  redelegate：re-delegate

### Create a validator

Upgrade a node to a validator and set the description on a validator.

```bash
  okchaincli tx staking create-validator --amount=2okt --pubkey=$(okchaind tendermint show-validator) --moniker="my nickname" --identity="logo|||http://mywebsite/pic/logo.jpg" --website="http://mywebsite" --details="my slogan" --from jack
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

### Delegate
user need delegate a certain amount of okts to the staking account to become a delegator
```bash
okchaincli tx staking delegate <amountToDelegate> --from <delegatorKeyName> --gas auto --gas-adjustment 1.5 --gas-prices <gasPrice>
```

### Vote

okchain delegator can vote to self or other validator by following command

```bash
okchaincli tx staking vote okchainvaloper1alq9na49n9yycysh889rl90g9nhe58lcs50wu5,okchainvaloper1svzxp4ts5le2s4zugx34ajt6shz2hg42a3gl7g,okchainvaloper10q0rk5qnyag7wfvvt7rtphlw589m7frs863s3m,okchainvaloper1g7znsf24w4jc3xfca88pq9kmlyjdare6mph5rx --from mykey
```

* In the example, okchainvaloper1alq9na49n9yycysh889rl90g9nhe58lcs50wu5,okchainvaloper1svzxp4ts5le2s4zugx34ajt6shz2hg42a3gl7g,okchainvaloper10q0rk5qnyag7wfvvt7rtphlw589m7frs863s3m,okchainvaloper1g7znsf24w4jc3xfca88pq9kmlyjdare6mph5rx is the validator’s address, and all of delegated okt will be voted.

* from indicates the user account to be re-delegated, which is rose here

### Unbond

okchain users can unbond the deposit token while canceling all the votes, it takes 14 days for unbonding the tokens.

   - [ ] allow the user to exchange votes into tokens multiple times, and the number of votes allowed to be withdrawan from deposit can be 0.001 \ ~ n (total number of votes owned by the user)
   - [ ] if the user status is "voted", after the command is executed, the number of votes that have been voted will be automatically updated and deducted. Essentially, the new votes will be used for re voting
   - [ ] if the user status is "voted", execute the command and withdraw all the votes, essentially execute the unbond behavior
   - [ ] if the user's status is "not voted", after the command is executed, the votes will not be affected. After 14 days, it will be converted into token and returned to the user's account
   - [ ] users are allowed to perform the "unbond" operation for many times, but it only takes effect for the last time, and the last unbond operation automatically accumulates the transaction amount in the process of unbond
   
Unbond shares and withdraw the same amount of votes

```bash
okchaincli tx staking unbond 10okt --from rose
```

* In the example, 10 is the number of the unbond share to be undelegated

* from indicates the user account to be undelegated, which is rose here

