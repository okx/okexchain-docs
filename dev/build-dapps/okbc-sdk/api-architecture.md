# API Architecture
The library follows common API architecture thoughout and the APIs are divided into 2 types - 
1. Read API
2. Write API
## Read API
Read APIs do not publish anything on blockchain, so it does not consume any gas. Examples of read APIs are - `getBalance`, `QueryTokenInfo` etc.
Let's see an example of the read API:
```
```
Read APIs are very simple and returns results directly.
## Write API
Write APIs publish some data on blockchain, so it consumes gas. Examples of write APIs are - `approve`, `desposit` etc.
When you are calling a write API, you need two data from the result.
1. TransactionHash
2. TransactionReceipt
Let's see an example of write API and get the transactionhash and receipt: 
```
```
## Transaction Option
There are some configurable options that are available for all API's. These configurations can be passed in parameters.
Available configurations are -
- from?: string | number - The address transactions should be made from.
- to?: string - The address transactions should be made to.
- value?: number | string | BN - The value transferred for the transaction in wei.
- gasLimit?: number | string - The maximum gas provided for a transaction (gas limit).
- gasPrice?: number | string | BN - The gas price in wei to use for transactions.
- data?: string - The byte code of the contract.
- nonce?: number;
- chainId?: number;
- chain?: string;
- hardfork?: string;
- returnTransaction?: boolean - making it true will return the transaction object which can be used to send transactions manually.
Let's see an example by configuring the gasPrice.
```
const erc20RootToken = posClient.erc20(<root token address>,true);

// approve 100 amount
const approveResult = await erc20Token.approve(100, {
gasPrice: '4000000000',
});

const txHash = await approveResult.getTransactionHash();

const txReceipt = await approveResult.getReceipt();
```