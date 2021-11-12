# DEX Traders Guide (CLI)


DEX Traders can perform pending orders and cancel orders through exchaincli, or through the UI provided by OEC ecosystem partners.


### Order depthbook

Query tokenpair's order depthbook.

```bash
# example
exchaincli query order depthbook mycoin_okt
# example return
# example return
{
 "code": "0",
 "msg": "",
 "asks": [
  {
   "price": "10.100000000000000000",
   "quantity": "1.000000000000000000"
  }
 ],
 "bids": [
  {
   "price": "10.000000000000000000",
   "quantity": "0.100000000000000000"
  },
  {
   "price": "9.900000000000000000",
   "quantity": "2.000000000000000000"
  },
  {
   "price": "9.800000000000000000",
   "quantity": "10.000000000000000000"
  }
 ]
}
```

### Place an order

Create a new limit order.

```bash
# example
exchaincli tx order new --product xxb-08a_okt --side BUY --price 1 --quantity 1 --from alice
# example return
{
  "txhash": "57A390CBBE43548F112956DF6CA7146E14A02720F2895908B3A057136CE0324D"
}
```

* product ：Trading pair in full name of the tokens: ${baseAssetSymbol}_${quoteAssetSymbol}, for example "mycoin_okt".
* side ：BUY or SELL (default "SELL")
* price ：The price of the order
* quantity ：The quantity of the order




### Order details

Query order details.

```bash
# example
exchaincli query order detail ID0000000007-0000
# example return
{
 "txHash": "CF8CEC36B97F089DEA243655A70D1CB2AE906D712D71210BCDEBC47F184DB6C2",
 "orderId": "ID0000000007-0000",
 "sender": "ex1fh9tpkqka29n0mj307cu5cvp5ts0p4dl3mkv7r",
 "product": "mycoin_okt",
 "side": "BUY",
 "price": "10.000000000000000000",
 "quantity": "1.100000000000000000",
 "status": "0",
 "filledAvgPrice": "10.000000000000000000",
 "remainQuantity": "0.100000000000000000",
 "timestamp": "1554273977"
}
```

## More

For more details on how to use OEC client, click [exchaincli](../resources/exchaincli.html).

