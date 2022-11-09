# Swap Guide (CLI)

## cli command

### Create token pair

The `create-pair` function is used to create new token pairs.

You could create swap pair with any 2 tokens.

```bash
$ exchaincli tx swap create-pair --token [token]
```

- --token: the token name you want to create  against OKT.

Example:

```shell
exchaincli tx swap create-pair --token eth-335 --from captain -y -b block --fees 0.002okt
{
  "height": "1243",
  "txhash": "FA10BF76AC2CEEC8B709D1ECE93698E8C82997D282C02930063DFB772FF8E452",
  "raw_log": "[{\"msg_index\":0,\"success\":true,\"log\":\"\",\"events\":null}]",
  "logs": [
    {
      "msg_index": 0,
      "success": true,
      "log": "",
      "events": null
    }
  ],
  "gas_wanted": "200000",
  "gas_used": "43884",
  "events": [
    {
      "type": "message",
      "attributes": [
        {
          "key": "module",
          "value": "ammswap"
        },
        {
          "key": "pool-token"
        },
        {
          "key": "token-pair",
          "value": "eth-335_okt"
        },
        {
          "key": "action",
          "value": "create_exchange"
        },
        {
          "key": "fee",
          "value": "0.00200000okt"
        },
        {
          "key": "sender",
          "value": "ex1c5g4v00np7fjjnexkhh5yk0hc6mamf402nxk8d"
        }
      ]
    },
    {
      "type": "transfer",
      "attributes": [
        {
          "key": "recipient",
          "value": "ex1qj5c07sm6jetjz8f509qtrxgh4psxkv3ddyq7u"
        },
        {
          "key": "amount",
          "value": "0.00200000okt"
        }
      ]
    }
  ]
}
```



### Swap token

Users can trade between any tokens having a trading pair against OKT. The swap between two tokens takes place via the intermediary token OKT, ie. SWAP token A for OKT, and  SWAP OKT for token B.

```bash
$ exchaincli tx swap token --sell-amount [amount sellToken] --min-buy-amount [amount wantToken]
```

- --sell-amount：token amount and token name you want to sell.
- --min-buy-amount: the minimum token amount and token name you expect.(If the actual amount of the desired token you could swap, according to the real-time exchange rate, is less than what you expected, then all the transactions happened before would be reverted. In other words, the order you placed will be processed only when the predefined condition you set is satisfied.)

Example:

```shell
exchaincli tx swap token --sell-amount 100okt --min-buy-amount 80eth-335 --from captain -y -b block --fees 0.002okt
{
  "height": "1483",
  "txhash": "5D56D443B51C8888EF5572763C261AAE42C2678796C51E1EAA6CCA5C286A711A",
  "raw_log": "[{\"msg_index\":0,\"success\":true,\"log\":\"\",\"events\":null}]",
  "logs": [
    {
      "msg_index": 0,
      "success": true,
      "log": "",
      "events": null
    }
  ],
  "gas_wanted": "200000",
  "gas_used": "71882",
  "events": [
    {
      "type": "message",
      "attributes": [
        {
          "key": "sender",
          "value": "ex1c5g4v00np7fjjnexkhh5yk0hc6mamf402nxk8d"
        },
        {
          "key": "sender",
          "value": "ex1fh9tpkqka29n0mj307cu5cvp5ts0p4dl3mkv7r"
        },
        {
          "key": "module",
          "value": "ammswap"
        },
        {
          "key": "action",
          "value": "token_swap"
        },
        {
          "key": "fee",
          "value": "0.00200000okt"
        },
        {
          "key": "sender",
          "value": "ex1c5g4v00np7fjjnexkhh5yk0hc6mamf402nxk8d"
        }
      ]
    },
    {
      "type": "transfer",
      "attributes": [
        {
          "key": "recipient",
          "value": "ex1fh9tpkqka29n0mj307cu5cvp5ts0p4dl3mkv7r"
        },
        {
          "key": "amount",
          "value": "100.00000000okt"
        },
        {
          "key": "recipient",
          "value": "ex1c5g4v00np7fjjnexkhh5yk0hc6mamf402nxk8d"
        },
        {
          "key": "amount",
          "value": "98.71580343eth-335"
        },
        {
          "key": "recipient",
          "value": "ex1qj5c07sm6jetjz8f509qtrxgh4psxkv3ddyq7u"
        },
        {
          "key": "amount",
          "value": "0.00200000okt"
        }
      ]
    }
  ]
}
```



### Add liquidity

Anyone who can join a liquidity pool by calling the addLiquidity function.

Adding liquidity requires depositing an equivalent value of token and OKT.

The first liquidity provider to join a pool sets the initial exchange rate by depositing what they believe to be an equivalent value of token and OKT. If this ratio is off, arbitrage traders will bring the prices to equilibrium at the expense of the initial liquidity provider.

All future liquidity providers deposit token and OKT using the exchange rate at the moment of their deposit. If the exchange rate is not attractive there is a profitable arbitrage opportunity that will correct the price.
```bash
$ exchaincli tx swap add-liquidity --max-base-amount [amount token] --quote-amount [amount okt] --min-liquidity [amount]
```
- --max-base-amount: the maximum amount of the base token user is willing to add in the pool. (Given the desired quote token to be added , if the amount of the corresponding base token is more than the predetermined max-base-amount, then the transaction is reverted.)
- --quote-amount: the token quote to be added in the pool, namely OKT in our case.
- --min-liquidity: the amount of liquidity the user expects to have after depositing the tokens.

Example:

```shell
exchaincli tx swap add-liquidity --max-base-amount 10000eth-335 --quote-amount 10000okt --min-liquidity 0.001 --from captain -y -b block --fees 0.002okt

{
  "height": "1281",
  "txhash": "4F2E8AFC6AD8D8FD6F64E7427C8E6E9DF3D1C457C9AC876BC824479AD9497BBC",
  "raw_log": "[{\"msg_index\":0,\"success\":true,\"log\":\"\",\"events\":null}]",
  "logs": [
    {
      "msg_index": 0,
      "success": true,
      "log": "",
      "events": null
    }
  ],
  "gas_wanted": "200000",
  "gas_used": "89222",
  "events": [
    {
      "type": "message",
      "attributes": [
        {
          "key": "sender",
          "value": "ex1c5g4v00np7fjjnexkhh5yk0hc6mamf402nxk8d"
        },
        {
          "key": "sender",
          "value": "ex1fh9tpkqka29n0mj307cu5cvp5ts0p4dl3mkv7r"
        },
        {
          "key": "module",
          "value": "ammswap"
        },
        {
          "key": "action",
          "value": "add_liquidity"
        },
        {
          "key": "fee",
          "value": "0.00200000okt"
        },
        {
          "key": "sender",
          "value": "ex1c5g4v00np7fjjnexkhh5yk0hc6mamf402nxk8d"
        }
      ]
    },
    {
      "type": "transfer",
      "attributes": [
        {
          "key": "recipient",
          "value": "ex1fh9tpkqka29n0mj307cu5cvp5ts0p4dl3mkv7r"
        },
        {
          "key": "amount",
          "value": "10000.00000000okt,10000.00000000eth-335"
        },
        {
          "key": "recipient",
          "value": "ex1c5g4v00np7fjjnexkhh5yk0hc6mamf402nxk8d"
        },
        {
          "key": "amount",
          "value": "1.00000000ammswap-eth-335"
        },
        {
          "key": "recipient",
          "value": "ex1qj5c07sm6jetjz8f509qtrxgh4psxkv3ddyq7u"
        },
        {
          "key": "amount",
          "value": "0.00200000okt"
        }
      ]
    }
  ]
}
```





### Remove liquidity
Liquidity providers use the removeLiquidity function to withdraw their portion of the reserves.

Liquidity is withdrawn at the same ratio as the reserves at the time of withdrawal. If the exchange rate is not attractive, a profitable arbitrage opportunity will correct the price.
```bash
$ exchaincli tx swap remove-liquidity --liquidity [amount] --min-base-amount [amount token] --min-quote-amount [amount okt]
```
- --liquidity: the amount tokens (liquidity providing certificate) users want to burn.
- --min-base-amount: the minimum redeemable amount of base token.
- --min-quote-amount: the minimum redeemable of the quote token.

Example:

```shell
exchaincli tx swap remove-liquidity --liquidity 0.5 --min-base-amount 1eth-335 --min-quote-amount 1okt --from captain -y -b block --fees 0.002okt
{
  "height": "1620",
  "txhash": "B070469B65320A4C458A86B1FD5836D273C1B8B003DC59D04EDE8ED3D0709C5B",
  "raw_log": "[{\"msg_index\":0,\"success\":true,\"log\":\"\",\"events\":null}]",
  "logs": [
    {
      "msg_index": 0,
      "success": true,
      "log": "",
      "events": null
    }
  ],
  "gas_wanted": "200000",
  "gas_used": "86100",
  "events": [
    {
      "type": "message",
      "attributes": [
        {
          "key": "sender",
          "value": "ex1fh9tpkqka29n0mj307cu5cvp5ts0p4dl3mkv7r"
        },
        {
          "key": "sender",
          "value": "ex1c5g4v00np7fjjnexkhh5yk0hc6mamf402nxk8d"
        },
        {
          "key": "module",
          "value": "ammswap"
        },
        {
          "key": "action",
          "value": "remove_liquidity"
        },
        {
          "key": "fee",
          "value": "0.00200000okt"
        },
        {
          "key": "sender",
          "value": "ex1c5g4v00np7fjjnexkhh5yk0hc6mamf402nxk8d"
        }
      ]
    },
    {
      "type": "transfer",
      "attributes": [
        {
          "key": "recipient",
          "value": "ex1c5g4v00np7fjjnexkhh5yk0hc6mamf402nxk8d"
        },
        {
          "key": "amount",
          "value": "5050.00000000okt,4950.64209828eth-335"
        },
        {
          "key": "recipient",
          "value": "ex1fh9tpkqka29n0mj307cu5cvp5ts0p4dl3mkv7r"
        },
        {
          "key": "amount",
          "value": "0.50000000ammswap-eth-335"
        },
        {
          "key": "recipient",
          "value": "ex1qj5c07sm6jetjz8f509qtrxgh4psxkv3ddyq7u"
        },
        {
          "key": "amount",
          "value": "0.00200000okt"
        }
      ]
    }
  ]
}
```





### query

1. Query pool info by token name
```bash
$ exchaincli query swap pool [token]
```
Example：

```shell
$ exchaincli query swap pool eth-355
{
  "quote_pooled_coin":{"denom":"okt","amount":"10100.00000000"},
  "base_pooled_coin" :{"denom":"eth-355","amount":"9901.28419657"},
  "pool_token_name"  :"ammswap-eth-355"
}
```



2. Query the parameters of the AMM swap system

```bash
$ exchaincli query swap params
```

Example：

```shell
$ exchaincli query swap params
{
  "fee_rate": "0.00300000"
}
```



3. Query infomation of all pools

```bash
$ exchaincli query swap pools
```
Example：

```shell
$ exchaincli query swap pools
[
  {
    "quote_pooled_coin":{"denom":"okt","amount":"10100.00000000"},
   	"base_pooled_coin" :{"denom":"eth-355","amount":"9901.28419657"},
    "pool_token_name"  :"ammswap-eth-355"
  }
]
```



4. Query redeemable assets by specifying pool and pool token amount

```bash
$ exchaincli query swap redeemable-assets [token] [amount]
```

Example：

```json
$ exchaincli query swap redeemable-assets eth-355 0.5
[
  {"denom":"eth-355","amount":"4950.64209828"},
  {"denom":"okt",   "amount":"5050.00000000"}
]
```



5. Query how many token returned by the given amount of token to sell

```bash
$ exchaincli query swap amount [amount sellToken] [wantToken]
```

Example：

```shell
exchaincli query swap amount 100eth-355 okt
"100.68709041"
```

