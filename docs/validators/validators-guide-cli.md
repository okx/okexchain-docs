
# Validator Guide (CLI)
<!--
order: 2
-->


Staking is an important basic module supporting PoS (Proof of Stake) consensus mechanism. It determines the number of block producer sets in each election period according to the total amount of delegated proof of stake accepted by validators, and dynamically determines the block order according to the voting power. Meanwhile, it also provides necessary support for delegation relationships and information query of validators to distribution and governance modules.

Through staking, you can freely create validators, update validators, delegate proof of stake to trusted validators, cancel delegation from validators that you no longer trust, and re-delegate proof of stake  to other validators.

## Rotation mechanism

OKC will re-elect block generation nodes from each set at each fixed block height interval which is called cycle. The block generation set is fixed and the identities of block generation nodes in the set remain unchanged during the same cycle. At the penultimate block height interval during the same cycle, staking will rotate the block generation node sets for the next cycle. The top 21 nodes with the highest number of okt will become the block generation nodes in the next cycle, and the nodes which are not the top 21 ones with the highest number of okt in the set will be forced to quit. The number of okt should only be an integer, and the decimal part is not considered when the comparison of the numbers of nodes supported by the sets is made during rotation.
OKC will re-elect block generation nodes at each fixed block height interval, called cycle. The block producer will be changed every 252 blocks (a cycle), and the next producer is elected on the 251th block of a cycle. This change takes effect in the 1st block of the next cycle. The top 21 nodes with the highest number of OKT will become the block generation nodes in the next cycle, and the nodes which are not within the top 21 ones with the highest number of OKT in the set will be forced to quit. The number of OKT should only be an integer, and the decimal part is not considered when the comparison of the numbers of nodes supported by the sets is made during each rotation.

> _NOTE_: Before reading the following documents, it is recommended that you read [delegators-guide-cli](../delegators/delegators-guide-cli.html) first. If you need to get OKT, you can get it [here](https://discord.gg/B5nMs6qK5F).


## cli command
Staking cli command contains the following commonly commands.

* create-validator：create a validator
* edit-validator：update a validator
* edit-validator-commission-rate：update a validator commission rate

> _NOTE_: For more cli, it is recommended that you read [delegators-staking-cli](../delegators/delegators-staking-cli.html). 

### Create a validator

Upgrade a node to a validator and set the description on a validator.

```bash
  exchaincli tx staking create-validator --pubkey=$(exchaind tendermint show-validator) --moniker="my nickname" --identity="logo|||http://mywebsite/pic/logo.jpg" --website="http://mywebsite" --details="my slogan" --from <userKeyName> --gas auto --gas-adjustment 1.5 --gas-prices <gasPrice>
```
> _NOTE_: If you set home flag when executing `exchaind start`, `exchaind tendermint show-validator` the inputs after home flag should be the same as `okexcahind start`.

* **Pubkey** represents the tendermint public key of the current node
* **Moniker** indicates the alias of the validator
* **Identity** specifies the address of the validator’s profile picture
* **Website** indicates the validator’s website address
* **Details** indicate the validator’s detailed description
* **From** specifies the operator’s account


### Update a validator

The operator can update the description of the validator and adjust the commission rate.

```bash
exchaincli tx staking edit-validator --moniker=“my new nickname” --identity="logo|||http://mynewwebsite/pic/newlogo.jpg" --website="http://mynewwebsite" --details="my new slogan"  --from <userKeyName> --gas auto --gas-adjustment 1.5 --gas-prices <gasPrice>
```

* **moniker** indicates the alias of the validator to be updated
* **identity** specifies the address of the profile picture of the validator to be updated
* **website** indicates the website address of the validator to be updated
* **details** indicate the detailed description of the validator to be updated
* **from** specifies the operator’s account

### Update validator commission rate

Update an existing validator,e.g., <commission-rate>=0.2

```bash
exchaincli tx staking edit-validator-commission-rate <commission-rate> --from <userKeyName> --gas auto --gas-adjustment 1.5 --gas-prices <gasPrice>
```

- **commission-rate** commission rate, ranging [0,1]. It can only be edited by the validator once every 24 hours. Default value is 1 (100%), i.e., no distribution rewards to users. If the value is set at 0.2 (20%), 80% will be allocated to users according to the voting ratio. 
