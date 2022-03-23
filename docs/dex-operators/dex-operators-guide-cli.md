# DEX Operators Guide (CLI)

In OKC-OKExDEX，any user can issue their own Token and Tokenpairs.

> _NOTE_: Before reading the following documents, it is recommended that you read [delegators-guide-cli](../delegators/delegators-guide-cli.html) first.

## cli command
There are 4 commands for DEX operators, providing complete support for equity circulation.

*  issue: issue token

*  list: list a token pair

*  deposit: deposit an amount of OKT on a tokenpair

*  withdraw: withdraw an amount of OKT from a tokenpair


### Issue token

Any user can issue their own Token and will be charged a portion of the OKT as a fee in addition to the system fee charged by GAS. Please refer to [Fee Model](../concepts/fee.html) for specific rates.

```shell
exchaincli tx token issue --from alice --symbol bcoin --total-supply 200000 --whole-name 'bcoin' --desc 'blockchain coin' -b block --mintable  

```

* symbol ：symbol is a non-case-sensitive token ticker limited to 6 alphanumeric characters, but the first character cannot be a number, eg. “bcoin” since the system will automatically add 3 random characters, such as "bcoin-gf6"
* whole-name ：full token name
* desc ：token description limited to 256 bytes
* total-supply ：total token supply
* mintable ：indicate whether to increase the supply of tokens



### List a tokenpair

Only a DEX operator can list a token pair. In a DEX, any pair of tokens can form one and only one Tokenpair.

```shell
exchaincli tx dex list --base-asset tusdk-9a2 --quote-asset tbtc-965 --from mykey -b block -y

```

* base-asset ：base-asset should be issued before listed to opendex (default "btc")
* from ：Name or address of private key with which to sign
* init-price ：init-price should be valid price (default "0.01")
* quote-asset ：quote-asset should be issued before listed to opendex (default "okt")


### Deposit an amount of okt on a tokenpair

In order to make fair and open use of the matching resources of the blockchain, OKC allocates the system resources in the way of competitive ranking. Deposit OKT to a token pair can make the orders of this token pair matched earlier.


```shell
exchaincli tx dex deposit tusdk-9a2_tbtc-965 100okt --from mykey -b block -y
```



### Withdraw an amount of okt from a tokenpair

In contrast with the deposit operation, DEX operators can also withdraw their deposits. The withdrawn amount will be back to the operator’s account after 3 days.


```shell
exchaincli tx dex withdraw tusdk-9a2_tbtc-965 50okt --from mykey -b block -y
```
