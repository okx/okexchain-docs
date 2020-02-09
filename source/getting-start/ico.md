# 数字资产发行和申请

持有一定数量OKT的用户，可以在OKChain网络中发行新的token; 之后通过数字资产交易对申请提案和激活后，新发行的token就可以在OKChain网络上进行自由交易。

## 1. 发行token

在数字资产交易对申请之前首先需要发行token,以`mycoin`数字资产为例（测试账户名称为alice）:

```sh
$ okchaincli tx token issue --from alice --symbol mycoin -n 21000000 --whole-name 'mycoin'
{
 "height": "9",
 "txhash": "7D3797B43CF2144CB0B740404C1549A71381E0BB90A35BFE5DC3BE9C86103226",

 ...
}
```
其中，参数`--from alice`表示新token拥有者，`--symbol mycoin`代表发行token的标识，更详细参数说明请参考[[发行数字资产](./command/token.html#id2)]， 查询发行结果：

```sh
$ okchaincli query token info mycoin
#example
{
 "symbol": "mycoin-254",
 "original_symbol": "mycoin",
 "total_supply": "21000000",
 "owner": "okchain15vfcagv9m56xn6j52l4eqf796z8tkfayz9qu2q",
 "mintable": false
}
```
更多功能，请参考[增发token](./command/token.html#id6), [销毁token](./command/token.html#id10)

发行token的手续费目前为`20000okt`，因此发行新token成功后alice账户会被扣除20000okt；如果余额过少，发行将失败。

## 2. 发起数字资产交易对申请提案

token发行成功后，只能进行转账，通过 **数字资产交易对申请提案** 后才具有初始价格和进行买卖交易。

```
$ okchaincli tx gov submit-dex-list-proposal --title="list mycoin/okt" --description="" --type=DexList --deposit="500okt" --listAsset="mycoin" --quoteAsset="okt" --initPrice="40.25" --maxPriceDigit=4 --maxSizeDigit=4 --minTradeSize="0.001" --from alice
{
 "height": "137",
 "txhash": "D78534FBA22688F482CCE36F368A99DB77F9886CA4016C7A3325DEA940C34B83",
}
```
其中，参数`--deposit 1000okt`表示发起的案时指定的初始抵押，`--initPrice`是在数字资产交易对申请时指定的数字资产交易对初始价格，`--from alice`表示发起提案的账户。更详细参数说明请参考[[数字资产交易对申请提案命令](./command/gov.html###数字资产交易对申请提案命令)]。   

OKChain会为提交成功的提案生成一个`proposal-id`用于唯一标识该提案，查询交易：
```sh
$ okchaincli query tx D78534FBA22688F482CCE36F368A99DB77F9886CA4016C7A3325DEA940C34B83
{
  "height": "137",
  "txhash": "D78534FBA22688F482CCE36F368A99DB77F9886CA4016C7A3325DEA940C34B83",
  "raw_log": "[{\"msg_index\":\"0\",\"success\":true,\"log\":\"\"}]",
  "tags": [
    {
      "key": "fee",
      "value": "0.01250000 okt"
    },
    {
      "key": "proposal-id",
      "value": "1"
    },
  ],
  ...
}
```
从查询结果中，了解到该例中生成的提案`proposal-id`为1。
查询提案信息：

```sh
$ okchaincli query gov proposal 1
#example
{
 "type": "gov/DexListProposal",
 "value": {
  "proposal_id": "1",
  "list_asset": "mycoin",
  "quote_asset": "okt",
  "init_price": "40.250000000000000000",
  "proposal_status": "DepositPeriod",

   ...
}
```
当前提案状态为`DepositPeriod`，表示抵押阶段。OKChain系统中默认数字资产交易对申请需要抵押`1000okt`，上面提案申请中只抵押了`500okt`，所以需要再抵押`500okt`。

## 3. 数字资产交易对申请提案抵押

剩下的`500okt`可以由alice自己继续抵押，也可以是其他拥有okt的用户来抵押
```sh
$ okchaincli tx gov deposit 1 500okt --from alice

confirm transaction before signing and broadcasting [Y/n]: y
{
 "height": "143",
 "txhash": "E117DD7F03D5EF47C62D38E764B0849B85329BDDECE8108A1CFE6D8395B9D4C4",

  ...
}
```
抵押后再次通过上述命令查询，此时提案进入`VotingPeriod`状态。

## 4. 数字资产交易对申请提案投票

投票阶段，OKChain网络的 **验证者** 需要审核足额抵押的 **数字资产交易对申请提案** ，并对提案进行投票，操作如下
```sh
$ okchaincli tx gov vote 1 yes --from alice

confirm transaction before signing and broadcasting [Y/n]: y
{
 "height": "146",
 "txhash": "35AF42AEF0D9D8BB1F0A1509D7514D09CBD04ADB2912BD05E58997F6F8C1D36A",

  ...
}
```
在VotingPeriod结束时查询提案，提案状态为`Passed`状态。此时说明提案通过。

## 5. 数字资产交易对激活

数字资产交易对申请提案通过后，**token发行者**（这里是alice）可以采取主动数字资产交易对激活操作：

```sh
$ okchaincli tx gov dexlist --proposal=1 --from alice

confirm transaction before signing and broadcasting [Y/n]: y
{
 "height": "339",
 "txhash": "E558097F2190176B4B9731A6F2A8214C23C58D7AEE556A69C01CD80FF74F750E",
 
  ...
}
```
用户也可以采用[自动激活](../governance/dexlist.html)方式来进行数字资产交易对激活。

最后，可以通过查询数字资产交易对的方式来检查数字资产交易对申请是否被激活:
```sh 
$ okchaincli query token  tokenpair
#example
[
  {
    "baseAssetSymbol": "mycoin",
    "quoteAssetSymbol": "okt",
    "price": "10.00000000",
    "maxPriceDigit": "1",
    "maxSizeDigit": "2",
    "minTradeSize": "0.10000000",
    "tokenPairId": "0"
  }
]
```
上面结果显示：数字资产交易对mycoin/okt存在，说明数字资产交易对申请已成功。到这里，`mycoin`就可以在`DEX`进行自由交易了。
