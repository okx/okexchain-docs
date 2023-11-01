# API Overview

This section explains the Swap Subgraph and how to interact with it. The Swap subgraph indexes data from the Swap contracts over time. It organizes data about pairs, tokens, Swap as a whole, and more. The subgraph updates any time a transaction is made on OKCSwap. The subgraph runs on [The Graph](https://thegraph.com/en/) protocol's hosted service and can be openly queried.

## Usage
The subgraph provides a snapshot of the current state of Swap and also tracks historical data. It is currently used to power [Swap.info](https://www.okx.com/oktc/swap/info). **It is not intended to be used as a data source for structuring transactions (contracts should be referenced directly for the most reliable live data).**
## Making Queries
To learn more about querying a subgraph refer to [The Graph's documentation](https://thegraph.com/docs/en/about/).
