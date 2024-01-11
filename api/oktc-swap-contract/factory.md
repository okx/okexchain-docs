# Factory
## Contract info
**Contract name**: SwapFactory
View on github:[SwapFactory.sol on GitHub.](https://github.com/okx/OKCSwap/blob/main/contracts/pair/OKCSwapFactory.sol)
**Contract address**:0x7b9F0a56cA7D20A44f603C03C6f45Db95b31e539
View on Oklink:[Swap: Factory contract on OkLink.](https://www.okx.com/explorer/oktc/address/0x7b9F0a56cA7D20A44f603C03C6f45Db95b31e539)
## Read functions
### getHash
`function getHash() public pure returns(bytes32)；`
CreationCode of SwapPair
### getPair
`function getPair(address tokenA, address tokenB) external view returns (address pair);`
Address for `tokenA` and address for `tokenB` return address of pair contract (where one exists).
`tokenA` and `tokenB` order is interchangeable.
Returns `0x0000000000000000000000000000000000000000` as address where no pair exists.
### allPairs
`function allPairs(uint) external view returns (address pair);`
Returns the address of the `n`th pair (`0`-indexed) created through the Factory contract.
Returns `0x0000000000000000000000000000000000000000` where pair has not yet been created.
Begins at `0 `for the first created pair.
### allPairsLength
`function allPairsLength() external view returns (uint);`
Displays the current number of pairs created through the Factory contract as an integer.
### feeTo
`function feeTo() external view returns (address);`
The address to where non-LP-holder fees are sent.
### feeToSetter
`function feeToSetter() external view returns (address);`
The address with permission to set the feeTo address.
## Write functions
### createPair
`function createPair(address tokenA, address tokenB) external returns (address pair);`
Creates a pair for `tokenA` and `tokenB` where a pair doesn't already exist.
`tokenA` and `tokenB` order is interchangeable.
Emits `PairCreated` (see Events sector).
### setFeeTo
Sets address for `feeTo`.
### setFeeToSetter
Sets address for permission to adjust `feeTo`.
## Events
### PairCreated
`event PairCreated(address indexed token0, address indexed token1, address pair, uint);`
Emitted whenever a `createPair` creates a new pair.
`token0` will appear before `token1` in sort order.
The final `uint` log value will be `1` for the first pair created, `2 `for the second, etc.
## Interface
```
// SPDX-License-Identifier: MIT
pragma solidity =0.6.12;

interface IOKCSwapFactory {
    event PairCreated(address indexed token0, address indexed token1, address pair, uint);

    function feeTo() external view returns (address);
    function feeToSetter() external view returns (address);

    function getPair(address tokenA, address tokenB) external view returns (address pair);
    function allPairs(uint) external view returns (address pair);
    function allPairsLength() external view returns (uint);

    function createPair(address tokenA, address tokenB) external returns (address pair);

    function setFeeTo(address) external;
    function setFeeToSetter(address) external;
}

```