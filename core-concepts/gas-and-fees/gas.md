# Gas and Fees

Learn about the differences between `Gas` and `Fees` in Ethereum and OKBC. 

## Denominations
OKBC has a metric system of denominations used as units of okb. Each denomination has its own unique name (some bear the family name of seminal figures playing a role in evolution of computer science and cryptoeconomics). The smallest denomination aka *base unit* of okb is called Wei. Below is a list of the named denominations and
their value in Wei. Following a common (although somewhat ambiguous) pattern, ether also designates a unit (of 1e18 or one quintillion Wei) of the currency.

|   Unit        | Wei Value | Wei  |
|--------------------|-----------------------|----------------------|
|  **wei**           | 1 wei                              | 1             |
|  **Kwei (babbage)**          | 1e3 wei                  | 1,000             |
|  **Mwei (lovelace)**         | 1e6 wei                  | 1,000,000             |
|  **Gwei (shannon)**          | 1e9 wei                  | 1,000,000,000             |
|  **microether (szabo)**      | 1e12 wei                 | 1,000,000,000,000             |
|  **milliether (finney)**     | 1e15 wei                 | 1,000,000,000,000,000             |
|  **okb**                     | 1e18 wei                 | 1,000,000,000,000,000,000             |




## Pre-requisite Readings

- [Cosmos SDK Gas](https://docs.cosmos.network/main/basics/gas-fees)
- [Ethereum Gas](https://ethereum.org/en/developers/docs/gas/) 

The concept of Gas represents the amount of computational effort required to execute specific operations on the state machine.

Gas was created on Ethereum to disallow the EVM (Ethereum Virtual Machine) from running infinite
loops by allocating a small amount of monetary value into the system. A unit of gas, usually in a
form as a fraction of the native coin, is consumed for every operation on the EVM and requires a
user to pay for these operations. These operations consist in state transitions such as sending a
transaction or calling a contract.

Exactly like Ethereum, Cosmos utilizes the concept of gas and this is how Cosmos tracks the resource
usage of operations during execution. Operations on Cosmos are represented as read or writes done to the chain's store.

In Cosmos, a fee is calculated and charged to the user during a message execution. This fee is
calculated from the sum of all gas consumed in an message execution:

```
fee = gas * gas price
```

In both networks, gas is used to make sure that operations do not require an excess amount of
computational power to complete and as a way to deter bad-acting users from spamming the network.

## Cosmos SDK `Gas`

In the Cosmos SDK, gas is tracked in the main `GasMeter` and the `BlockGasMeter`:

- `GasMeter`: keeps track of the gas consumed during executions that lead to state transitions. It is reset on every transaction  execution.
- `BlockGasMeter`: keeps track of the gas consumed in a block and enforces that the gas does not go over a predefined limit. This limit is defined in the Tendermint consensus parameters and can be changed via governance parameter change proposals.

More information regarding gas in Cosmos SDK can be found [here](https://docs.cosmos.network/master/basics/gas-fees.html).

## Matching EVM Gas consumption

OKBC is an EVM-compatible chain that supports Ethereum Web3 tooling. For this reason, gas
consumption must be equitable in order to accurately calculate the state transition hashes and exact
the behaviour that would be seen on the main Ethereum network (main net).

In Cosmos, there are types of operations that are not triggered by transactions that can also result in state transitions. Concrete examples are the  `BeginBlock` and `EndBlock` operations and the `AnteHandler` checks, which might also read and write to the store before running the state transition from a transaction.

### `BeginBlock` and `EndBlock`

These operations are defined by the Tendermint Core's Application Blockchain Interface (ABCI) and are defined by each Cosmos SDK module. As their name suggest, they are executed at the beginning and at the end of each block processing respectively (i.e pre and post transaction execution). Since these operations are not reflected on Ethereum, to match the the gas consumption we reset the main `GasMeter` to 0 on OKBC's EVM module.

### `AnteHandler`

The Cosmos SDK [`AnteHandler`](https://docs.cosmos.network/master/basics/gas-fees.html#antehandler)
performs basic checks prior to transaction execution. These checks are usually signature
verification, transaction field validation, transaction fees, etc.

Because the EVM transaction gas calculated in OKBC is done by the `IntrinsicGas` method from go-ethereum, a
special `AnteHandler` that is customized for EVM transaction fee verification is required. This
allows OKBC to generate the expected gas costs for operations done in the network and scale the
gas costs as it would in the Ethereum network.

## Gas Refunds

In Ethereum, gas can be specified prior to execution and the remaining gas will be refunded back to the user if any gas is left over - should fail if not enough gas was provided. 

In OKBC, there are two types of transactions, EVM and Cosmos. The EVM type transaction will refund gas like Ethereum, but the Cosmos type transaction will not refund gas.

If you are using a Cosmos type transaction, it is extremely important to use the correct gas. To prevent overspending on fees, providing the `--gas-adjustment` flag for a Cosmos transaction will determine the fees automatically. 

## 0 Fee Transactions

In Cosmos, a minimum gas price is not enforced by the `AnteHandler` as the `min-gas-prices` is
checked against the local node/validator. In other words, the minimum fees accepted are determined
by the validators of the network, and each validator can specify a different value for their fees.
This potentially allows end users to submit 0 fee transactions if there is at least one single
validator that is willing to include transactions with `0` gas price in their blocks proposed.

For this same reason, in OKBC it is possible to send transactions with `0` fees for transaction
types other than the ones defined by the `evm` module. EVM module transactions cannot have `0` fees
as gas is required inherently by Ethereum. This check is done by the evm transactions
`ValidateBasic` function as well as on the custom `AnteHandler` defined by OKBC.
