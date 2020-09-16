<!--
order: 1
-->

# Swap Overview

## Introduction

Swap(like Uniswap) on OKExChain is made up of a series of tokens issued through token module. There is exactly one exchange per token. If a token does not yet have an token pair it can be created by anyone using the `okexchaincli tx swap create-pair`.

Each toke pair holds reserves of both `okt` and its issued token. Anyone can become a liquidity provider on an token pair and add liquidity for the token pair. This is different than buying or selling; it requires depositing an equivalent value of both `okt` and other token issued on OKExChain. Liquidity is pooled across all providers and an internal "pool token" is used to track each providers relative contribution. The owner of the "Pool Token" is the swap module account. Pool tokens are minted when liquidity is deposited into the system and can be burned at any time to withdraw a proportional share of the reserves.

Token pairs are automated market makers between token issued on OKExChain and `okt`. Traders can swap between the two in either direction by adding to the liquidity reserve of one and withdrawing from the reserve of the other. Since `okt` is a common pair for all tokens, it can be used as an intermediary allowing direct token-token trades in a single transaction. Users can specify a recipient address if they want to receive purchased tokens at a different address from the one used to make a transaction.

Swap uses a "constant product" market making formula which sets the exchange rate based off of the relative size of the `okt` and token reserves, and the amount with which an incoming trade shifts this ratio. Selling `okt` for tokens increases the size of the `okt` reserve and decreases the size of the token reserve. This shifts the reserve ratio, increasing the token’s price relative to `okt` for subsequent transactions. The larger a trade relative to the total size of the reserves, the more price slippage will occur. Essentially, exchange contracts use the open financial market to decide on the relative value of a pair and uses that as a market making strategy.

A small liquidity provider fee (0.30%) is taken out of each trade and added to the reserves. While the okt-token reserve ratio is constantly shifting, fees makes sure that the total combined reserve size increases with every trade. This functions as a payout to liquidity providers that is collected when they burn their pool tokens to withdraw their portion of total reserves. Guaranteed arbitrage opportunities from price fluctuations should push a steady flow of transactions through the system and increase the amount of fee revenue generated.

Swap is entirely on-chain, prices can change between when a transaction is signed and when it is included in a block. Traders can bound price fluctuations by specifying the minimum amount bought on sell orders, or the maximum amount sold on buy orders. This acts as a limit order that will automatically cancel if it is not filled. It is also possible to set transaction deadlines which will cancel orders if they are not executed fast enough.
