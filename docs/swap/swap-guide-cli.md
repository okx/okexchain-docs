
# Swap Guide (CLI)
<!--
order: 2
-->


## cli command

### Create exchange
```bash
$ okexchaincli tx swap create-pair --token eth-355 --fees 0.01okt 
```

### Swap token
```bash
$ okexchaincli tx swap token --sell-amount 1eth-355 --min-buy-amount 60okt
```

### Add liquidity
Anyone who wants can join a Uniswap liquidity pool by calling the addLiquidity function.

Adding liquidity requires depositing an equivalent value of ETH and OKT.

The first liquidity provider to join a pool sets the initial exchange rate by depositing what they believe to be an equivalent value of ETH and OKT. If this ratio is off, arbitrage traders will bring the prices to equilibrium at the expense of the initial liquidity provider.

All future liquidity providers deposit ETH and OKT’s using the exchange rate at the moment of their deposit. If the exchange rate is bad there is a profitable arbitrage opportunity that will correct the price.
```bash
$ okexchaincli tx swap add-liquidity --max-base-amount 10eth-355 --quote-amount 100okt --min-liquidity 0.001
```
--max-base-amount: Maximum number of base amount deposited. Deposits max amount if total pool token supply is 0. For example "100okt"  
--quote-amount: The number of quote amount. For example "100okt"  
--min-liquidity: Minimum number of sender will mint if total pool token supply is greater than 0  

### Remove liquidity
Liquidity providers use the removeLiquidity function to withdraw their portion of the reserves.

Liquidity is withdrawn at the same ratio as the reserves at the time of withdrawal. If the exchange rate is bad there is a profitable arbitrage opportunity that will correct the price.
```bash
$ okexchaincli tx swap remove-liquidity --liquidity 1 --min-base-amount 10eth-355 --min-quote-amount 1okt
```
--liquidity: Liquidity amount of sender will burn  
--min-base-amount: Minimum number of base amount withdrawn  
--min-quote-amount: Minimum number of quote amount withdrawn  

### query
1. Query pool info by token name
```bash
$ okexchaincli query swap pool eth-355
```
2. Query how many token returned by the given amount of token to sell
```bash
$ okexchaincli query swap amount 100eth-245 xxb
```

3. Query the parameters of the AMM swap system
```bash
$ okexchaincli query swap params
```

4. Query infomation of all pools
```bash
$ okexchaincli query swap pools
```
5. Query redeemable assets by specifying pool token amount
```bash
$ okexchaincli query swap redeemable-assets eth-355 1
```
