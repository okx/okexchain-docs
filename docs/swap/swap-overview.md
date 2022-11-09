# Swap Overview

## Introduction

A token pair can be created by anyone using the `exchaincli tx swap create-pair`.

SWAP is a decentralized exchange protocol built on OKC. It is an automated liquidity protocol without any order book or any centralized party required to make trades. SWAP allows users to trade without intermediaries, with a high degree of decentralization.

Each token pair holds reserves of both `okt` and the issued token. Anyone can become a liquidity provider for a token pair as well as add liquidity for the token pair. it requires depositing an equivalent value of both `okt` and other token issued on OKC. Liquidity is pooled across all providers and an internal “pool token” is used to track each provider's relative contribution. The owner of the “Pool Token” is the SWAP module account. Pool tokens are minted when liquidity is deposited into the system and can be burned at any time to withdraw a proportional share of the reserves.

Token pairs are automated market makers between token issued on OKC and `okt`. Traders can swap between the two in either direction by adding to the liquidity reserve of one and withdrawing from the reserve of the other.  `okt` can be used as an intermediary allowing direct token-token trades in a single transaction. Users can specify a recipient address if they want to receive purchased tokens at a different address from the one used to make a transaction.

SWAP uses a “constant product” market making formula to set exchange rates based on the relative reserve volume of `okt`, other token reserves, and the amount with which an incoming trade shifts this ratio. Selling `okt` for buying a token XYZ, for example,  increases the size of the `okt` reserve and decreases the size of the XYZ token reserve. This shifts the reserve ratio, increasing the token’s price relative to `okt` for subsequent transactions. The larger a trade relative to the total size of the reserves, the higher will be the price movement. Essentially, exchange contracts use the open financial market principles to decide on the relative value of a pair and use that as a market making strategy.

A small liquidity provider fee (0.30%) is taken out of each trade and added to the reserves. While the OKT token reserve ratio is constantly shifting,  the total combined reserve size increases with every trade. Those funds are used as a payout to liquidity providers when they burn their pool tokens to withdraw their portion of total reserves. Arbitrage opportunities from price fluctuations should push a steady flow of transactions through the system and increase the amount of fee revenue generated.

SWAP is entirely on-chain. Prices can vary between the moment a transaction is signed to the moment  it is included in a block. Traders can bound price fluctuations by specifying the minimum amount bought on sell orders, or the maximum amount sold on buy orders. This acts as a limit order that will automatically be canceled if not filled. It is also possible to set transaction deadlines which will cancel orders if they are not executed fast enough.
