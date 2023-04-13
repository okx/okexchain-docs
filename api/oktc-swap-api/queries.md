# Queries 
The subgraph can be queried to retrieve important information about Swap, pairs, tokens, transactions, users, and more. This page will provide examples for common queries.
To try these queries and run your own visit the [graphql page](https://www.okx.com/oktc/subgraph/name/OKCSwap/oktc-swap-subgraph-open/graphql?query=%0A++++%23%0A++++%23+Welcome+to+The+GraphiQL%0A++++%23%0A++++%23+GraphiQL+is+an+in-browser+tool+for+writing%2C+validating%2C+and%0A++++%23+testing+GraphQL+queries.%0A++++%23%0A++++%23+Type+queries+into+this+side+of+the+screen%2C+and+you+will+see+intelligent%0A++++%23+typeaheads+aware+of+the+current+GraphQL+type+schema+and+live+syntax+and%0A++++%23+validation+errors+highlighted+within+the+text.%0A++++%23%0A++++%23+GraphQL+queries+typically+start+with+a+%22%7B%22+character.+Lines+that+start%0A++++%23+with+a+%23+are+ignored.%0A++++%23%0A++++%23+An+example+GraphQL+query+might+look+like%3A%0A++++%23%0A++++%23+++++%7B%0A++++%23+++++++field%28arg%3A+%22value%22%29+%7B%0A++++%23+++++++++subField%0A++++%23+++++++%7D%0A++++%23+++++%7D%0A++++%23%0A++++%23+Keyboard+shortcuts%3A%0A++++%23%0A++++%23++Prettify+Query%3A++Shift-Ctrl-P+%28or+press+the+prettify+button+above%29%0A++++%23%0A++++%23+++++Merge+Query%3A++Shift-Ctrl-M+%28or+press+the+merge+button+above%29%0A++++%23%0A++++%23+++++++Run+Query%3A++Ctrl-Enter+%28or+press+the+play+button+above%29%0A++++%23%0A++++%23+++Auto+Complete%3A++Ctrl-Space+%28or+just+start+typing%29%0A++++%23%0A++)
To learn more about graphql query refer to [GraphQL API](https://thegraph.com/docs/en/querying/graphql-api/)
## Block
### Block Overview
To get the latest status of the currently synchronized blocks, you can query with the following example.
```
{
  blocks(first: 10,orderBy: number,orderDirection: desc) {
    id
    number
    timestamp
  }
}
```
### Time-travel queries
To get a snapshot of past state, use The Graph's block query feature and query at a previous block.
```
{
  tokens(block: {number: 16084896},where: {id: "0x8f8526dbfd6e38e3d8307702ca8469bae6c56c15"}) {
    id
    name
    tradeVolume
    totalSupply
  }
```
## Pair Data
### Pair Overview
Fetch a snapshot of the current state of the pair with common values. This example fetches the USDT/WOKT pair.
```
{
 pair(id: "0xf6bda1da6ab3c3f577e50ba6e9127dfc2727c388"){
     token0 {
       id
       symbol
       name
       derivedUSD
     }
     token1 {
       id
       symbol
       name
       derivedUSD
     }
     reserve0
     reserve1
     reserveUSD
     trackedReserveUSD
     token0Price
     token1Price
     volumeUSD
     txCount
 }
}
```
### All pairs in Swap
The Graph limits entity return amounts to 1000 per query as of now. To get all pairs on OKTC swapuse a loop and graphql skip query to fetch multiple chunks of 1000 pairs. The query would look like this (where skip is some incrementing variable passed into your query).
```
{
 query pairs($skip: Int!) {
   pairs(first: 1000, skip: $skip) {
     id
   }
 }
}
```
### Most liquid pairs
Order by liquidity to get the most liquid pairs in Swap.
```
{
 pairs(first: 1000, orderBy: reserveUSD, orderDirection: desc) {
   id
 }
}
```
### Recent Swaps within a Pair
Get the last 100 swaps on a pair by fetching Swap events and passing in the pair address. You'll often want token information as well.
```
{
swaps(orderBy: timestamp, orderDirection: desc, where:
 { pair: "0xf6bda1da6ab3c3f577e50ba6e9127dfc2727c388" }
) {
     pair {
       token0 {
         symbol
       }
       token1 {
         symbol
       }
     }
     amount0In
     amount0Out
     amount1In
     amount1Out
     amountUSD
     to
 }
}
```
### Pair Daily Aggregated
Day data is useful for building charts and historical views around entities. To get stats about a pair in daily buckets query for day entities bounded by timestamps. This query gets the first 100 days after the given unix timestamp on the USDT/WOKT pair.
```
{
 pairDayDatas(first: 100, orderBy: date, orderDirection: asc,
   where: {
     pairAddress: "0x1ffef1c715f3ad5e7f89f24d507b6fb001667154",
     date_gt: 1592505859
   }
 ) {
     date
     dailyVolumeToken0
     dailyVolumeToken1
     dailyVolumeUSD
     reserveUSD
 }
}
```
## Token Data
Token data can be fetched using the token contract address as an ID. Token data is aggregated across all pairs the token is included in. Any token that is included in some pair in Swap can be queried.
### Token Overview
Get a snapshot of the current stats on a token in Swap. This query fetches current stats on WOKT. The allPairs field gets the first 200 pairs WOKT is included in sorted by liquidity in derived USD.
```
{
 token(id: "0x8f8526dbfd6e38e3d8307702ca8469bae6c56c15"){
   name
   symbol
   decimals
   derivedUSD
   tradeVolumeUSD
   totalLiquidity
 }
}
```
#### All Tokens in Swap
Similar to fetching all pairs (see above), you can query all tokens in Swap. Because The Graph service limits return size to 1000 entities use graphql skip query. (Note this query will not work in the graph sandbox and more resembles the structure of a query you'd pass to some graphql middleware like [Apollo](https://www.apollographql.com/).
```
{
 query tokens($skip: Int!) {
   tokens(first: 1000, skip: $skip) {
     id
     name
     symbol
   }
 }
}
```
### Token Transactions
To get transactions that include a token you'll need to first fetch an array of pairs that the token is included in (this can be done with the allPairs field on the Token entity.) Once you have an array of pairs the token is included in, filter on that in the transaction lookup.
This query fetches the latest 30 mints, swaps, and burns involving USDT. The allPairs array could look something like this where we include the USDT/WOKT pair address and the USDT/OKB pair address.
```
allPairs = [
    "0xf6bda1da6ab3c3f577e50ba6e9127dfc2727c388",
    "0xff63b17e85532c1d548f516b2bda72f24f952f08"
]
```
```
query($allPairs: [String!]) {
 mints(first: 30, where: { pair_in: $allPairs }, orderBy: timestamp, orderDirection: desc) {
   transaction {
     id
     timestamp
   }
   to
   liquidity
   amount0
   amount1
   amountUSD
 }
 burns(first: 30, where: { pair_in: $allPairs }, orderBy: timestamp, orderDirection: desc) {
   transaction {
     id
     timestamp
   }
   to
   liquidity
   amount0
   amount1
   amountUSD
 }
 swaps(first: 30, where: { pair_in: $allPairs }, orderBy: timestamp, orderDirection: desc) {
   transaction {
     id
     timestamp
   }
   amount0In
   amount0Out
   amount1In
   amount1Out
   amountUSD
   to
 }
}
```
### Token Daily Aggregated
Like pair and global daily lookups, tokens have daily entities that can be queries as well. This query gets daily information for WOKT. Note that you may want to sort in ascending order to receive your days from oldest to most recent in the return array.
```
{
 tokenDayDatas(orderBy: date, orderDirection: asc,
  where: {
    token: "0x8f8526dbfd6e38e3d8307702ca8469bae6c56c15"
  }
 ) {
    id
    date
    priceUSD
    totalLiquidityToken
    totalLiquidityUSD
    totalLiquidityUSD
    dailyVolumeUSD
    dailyVolumeToken
    dailyVolumeUSD
 }
}
```