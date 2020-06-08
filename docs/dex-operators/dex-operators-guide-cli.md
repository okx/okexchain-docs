# DEX Operators Guide (CLI)

In OKChain-OpenDEX，any user can issue their own Token and Tokenpairs。

> _NOTE_: Before reading the following documents, it is recommended that you read [delegators-guide-cli](../delegators/delegators-guide-cli.html) first. If you need to get tokt, you can get it [here](https://www.okex.com/drawdex).

## cli command
staking cli contains the following 3 commands for DEX operator, providing complete support for equity circulation.

*  issue: issue token

*  list: list a token pair

*  deposit: deposit an amount of okt on a tokenpair

*  withdraw: withdraw an amount of okt from a tokenpair


### Issue token

Any user can issue their own Token and will be charged a portion of the OKT as a fee in addition to the system fee charged by GAS. Please refer to [Fee Model](../concepts/fee.html) for specific rates.

```shell
okchaincli tx token issue --from alice --symbol bcoin --total-supply 200000 --whole-name 'bcoin' --desc 'blockchain coin' -b block --mintable  

```

* symbol ：symbol is a non-case-sensitive token ticker limited to 6 alphanumeric characters, but the first character cannot be a number, eg. “bcoin” since the system will automatically add 3 random characters, such as "bcoin-gf6"
* whole-name ：full token name
* desc ：token description limited to 256 bytes
* total-supply ：total token supply
* mintable ：indicate whether to increase the supply of tokens



### List a tokenpair

Any user can issue a token pair to become a DEX operator. In opendex, any two tokens can form one and only one Tokenpair.

```shell
okchaincli tx dex list --base-asset tusdk-9a2 --quote-asset tbtc-965 --from mykey -b block -y

```

* base-asset ：base-asset should be issued before listed to opendex (default "btc")
* from ：Name or address of private key with which to sign
* init-price ：init-price should be valid price (default "0.01")
* quote-asset ：quote-asset should be issued before listed to opendex (default "okt")


### Deposit an amount of okt on a tokenpair

In order to make fair and open use of the matching resources of the blockchain,  OpenDex allocates the system resources in the way of competitive ranking. By adding digital asset matching alloy, DEX can prioritize the matching of its own transaction pairs.


```shell
okchaincli tx dex deposit tusdk-9a2_tbtc-965 100tokt --from mykey -b block -y
```



### Withdraw an amount of okt from a tokenpair

In contrast, DEX operator can also withdrawn their product deposits, and the withdrawn part will be back to the operator's account after 2 weeks.


```shell
okchaincli tx dex withdraw tusdk-9a2_tbtc-965 50okt --from mykey -b block -y
```
