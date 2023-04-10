# Router
## Contract info
**Contract name**: SwapRouter
View on github:[SwapRouter.sol on GitHub](https://github.com/okex/OKCSwap/blob/main/contracts/router/OKCSwapRouter02.sol).  
**Contract address**: 0xc97b81B8a38b9146010Df85f1Ac714aFE1554343
View on Oklink: [Router  contract on OkLink](https://www.oklink.com/en/oktc/address/0xc97b81B8a38b9146010Df85f1Ac714aFE1554343).
## Read functions
### WOKT
`function WOKT() external pure returns (address);`
Returns the canonical address for OKX: [WOKT Token](https://www.oklink.com/en/oktc/token/0x8f8526dbfd6e38e3d8307702ca8469bae6c56c15).
### factory
`function factory() external pure returns (address);`
Returns the canonical address for [SwapFactory](https://www.oklink.com/en/oktc/address/0x7b9F0a56cA7D20A44f603C03C6f45Db95b31e539).
For explanations of the following, view the [Uniswap v2 Internal Functions documentation](https://uniswap.org/docs/v2/smart-contracts/library/#internal-functions).
### getAmountOut
`function getAmountOut(uint amountIn, uint reserveIn, uint reserveOut) internal pure returns (uint amountOut);`
### getAmountIn
`function getAmountIn(uint amountOut, uint reserveIn, uint reserveOut) internal pure returns (uint amountIn);`
### getAmountsOut
`function getAmountsOut(uint amountIn, address[] memory path) internal view returns (uint[] memory amounts);`
### getAmountsIn
`function getAmountsIn(uint amountOut, address[] memory path) internal view returns (uint[] memory amounts);`
### quote
`function quote(uint amountA, uint reserveA, uint reserveB) internal pure returns (uint amountB);`
## Write functions
### addLiquidity
```
function addLiquidity(
  address tokenA,
  address tokenB,
  uint amountADesired,
  uint amountBDesired,
  uint amountAMin,
  uint amountBMin,
  address to,
  uint deadline
) external returns (uint amountA, uint amountB, uint liquidity);
```
Adds liquidity to a KIP20⇄KIP20 pool.
|Name|Type|Text|
|----|----|----|
|tokenA|address|The contract address of one token from your liquidity pair.|
|tokenB|address|The contract address of the other token from your liquidity pair.|
|amountADesired|uint|The amount of tokenA you'd like to provide as liquidity.|
|amountBDesired|uint|The amount of tokenA you'd like to provide as liquidity.|
|amountAMin|uint|The minimum amount of tokenA to provide (slippage impact).|
|amountBMin|uint|The minimum amount of tokenB to provide (slippage impact).|
|to|address|Address of LP Token recipient.|
|deadline|uint|Unix timestamp deadline by which the transaction must confirm.|
#### addLiquidityOKT
```
function addLiquidityOKT(
  address token,
  uint amountTokenDesired,
  uint amountTokenMin,
  uint amountOKTMin,
  address to,
  uint deadline
) external payable returns (uint amountToken, uint amountOKT, uint liquidity);
```
Adds liquidity to a KIP20⇄WOKT pool.
|Name|Type|Text|
|----|----|----|
|addLiquidityOKT|uint|The payable amount in OKT.|
|token|address|The contract address of the token to add liquidity.|
|amountTokenDesired|uint|The amount of the token you'd like to provide as liquidity.|
|amountTokenMin|uint|The minimum amount of the token to provide (slippage impact).|
|amountOKTMin|uint|The minimum amount of OKT to provide (slippage impact).|
|to|address|Address of LP Token recipient.|
|deadline|uint|Unix timestamp deadline by which the transaction must confirm.|
### removeLiquidity
```
function removeLiquidity(
  address tokenA,
  address tokenB,
  uint liquidity,
  uint amountAMin,
  uint amountBMin,
  address to,
  uint deadline
) external returns (uint amountA, uint amountB);
```
Removes liquidity from a KIP20⇄KIP20 pool.
|Name|Type|Text|
|----|----|----|
|tokenA|address|The contract address of one token from your liquidity pair.|
|tokenB|address|The contract address of the other token from your liquidity pair.|
|liquidity|uint|The amount of LP Tokens to remove.|
|amountAMin|uint|The minimum amount of tokenA to remove (slippage impact).|
|amountBMin|uint|The minimum amount of tokenB to remove (slippage impact).|
|to|address|Address of LP Token recipient.|
|deadline|uint|Unix timestamp deadline by which the transaction must confirm.|
### removeLiquidityOKT
```
function removeLiquidityOKT(
  address token,
  uint liquidity,
  uint amountTokenMin,
  uint amountOKTMin,
  address to,
  uint deadline
) external returns (uint amountToken, uint amountOKT);
```
Removes liquidity from a KIP20⇄WOKT pool.
|Name|Type|Text|
|----|----|----|
|token|address|The contract address of the token to remove liquidity.|
|liquidity|uint|The amount of LP Tokens to remove.|
|amountTokenMin|uint|The minimum amount of the token to remove (slippage impact).|
|amountOKTMin|uint|The minimum amount of OKT to remove (slippage impact).|
|to|address|Address of LP Token recipient.|
|deadline|uint|Unix timestamp deadline by which the transaction must confirm.|
### removeLiquidityOKTSupportingFeeOnTransferTokens
```
function removeLiquidityOKTSupportingFeeOnTransferTokens(
  address token,
  uint liquidity,
  uint amountTokenMin,
  uint amountOKTMin,
  address to,
  uint deadline
) external returns (uint amountOKT);
```
Removes liquidity from a KIP20⇄WOKT for tokens that take a fee on transfer.
|Name|Type|Text|
|----|----|----|
|token|address|The contract address of the token to remove liquidity.|
|liquidity|uint|The amount of LP Tokens to remove.|
|amountTokenMin|uint|The minimum amount of the token to remove (slippage impact).|
|amountOKTMin|uint|The minimum amount of OKT to remove (slippage impact).|
|to|address|Address of LP Token recipient.|
|deadline|uint|Unix timestamp deadline by which the transaction must confirm.|
### removeLiquidityOKTWithPermit
```
function removeLiquidityOKTWithPermit(
  address token,
  uint liquidity,
  uint amountTokenMin,
  uint amountOKTMin,
  address to,
  uint deadline,
  bool approveMax, uint8 v, bytes32 r, bytes32 s
) external returns (uint amountToken, uint amountOKT);
```
Removes liquidity from a KIP20⇄WOKT and receives OKT, without pre-approval, via permit.
|Name|Type|Text|
|----|----|----|
|token|address|The contract address of the token to remove liquidity.|
|liquidity|uint|The amount of LP Tokens to remove.|
|amountTokenMin|uint|The minimum amount of the token to remove (slippage impact).|
|amountOKTMin|uint|The minimum amount of OKT to remove (slippage impact).|
|to|address|Address of LP Token recipient.|
|deadline|uint|Unix timestamp deadline by which the transaction must confirm.|
|approveMax|bool|Whether or not the approval amount in the signature is for liquidity or uint(-1).|
|v|uint8|The v component of the permit signature.|
|r|bytes32|The r component of the permit signature.|
|s|bytes32|The s component of the permit signature.|
### removeLiquidityOKTWithPermitSupportingFeeOnTransferTokens
```
function removeLiquidityOKTWithPermitSupportingFeeOnTransferTokens(
  address token,
  uint liquidity,
  uint amountTokenMin,
  uint amountOKTMin,
  address to,
  uint deadline,
  bool approveMax, uint8 v, bytes32 r, bytes32 s
) external returns (uint amountOKT);
```
Removes liquidity from a KIP20⇄WOKT and receives OKT via permit for tokens that take a fee on transfer.
|Name|Type|Text|
|----|----|----|
|token|address|The contract address of the token to remove liquidity.|
|liquidity|uint|The amount of LP Tokens to remove.|
|amountTokenMin|uint|The minimum amount of the token to remove (slippage impact).|
|amountOKTMin|uint|The minimum amount of OKT to remove (slippage impact).|
|to|address|Address of LP Token recipient.|
|deadline|uint|Unix timestamp deadline by which the transaction must confirm.|
|approveMax|bool|Whether or not the approval amount in the signature is for liquidity or uint(-1).|
|v|uint8|The v component of the permit signature.|
|r|bytes32|The r component of the permit signature.|
|s|bytes32|The s component of the permit signature.|
### removeLiquidityWithPermit
```
function removeLiquidityWithPermit(
  address tokenA,
  address tokenB,
  uint liquidity,
  uint amountAMin,
  uint amountBMin,
  address to,
  uint deadline,
  bool approveMax, uint8 v, bytes32 r, bytes32 s
) external returns (uint amountA, uint amountB);
```
Removes liquidity from a KIP20⇄KIP20, without pre-approval, via permit.
|Name|Type|Text|
|----|----|----|
|tokenA|address|The contract address of one token from your liquidity pair.|
|tokenB|address|The contract address of the other token from your liquidity pair.|
|liquidity|uint|The amount of LP Tokens to remove.|
|amountTokenMin|uint|The minimum amount of the token to remove (slippage impact).|
|amountOKTMin|uint|The minimum amount of OKT to remove (slippage impact).|
|to|address|Address of LP Token recipient.|
|deadline|uint|Unix timestamp deadline by which the transaction must confirm.|
|approveMax|bool|Whether or not the approval amount in the signature is for liquidity or uint(-1).|
|v|uint8|The v component of the permit signature.|
|r|bytes32|The r component of the permit signature.|
|s|bytes32|The s component of the permit signature.|
### swapOKTForExactTokens
```
function swapOKTForExactTokens(uint amountOut, address[] calldata path, address to, uint deadline)
  external
  payable
  returns (uint[] memory amounts);
  ```
Receive an exact amount of output tokens for as little OKT as possible.
|Name|Type|Text|
|----|----|----|
|swapOKTForExactTokens|uint|Payable OKT amount.|
|amountOut|uint|The amount tokens to receive.|
|path (address[])|address|An array of token addresses. path.length must be >= 2. Pools for each consecutive pair of addresses must exist and have liquidity.|
|to|address|Address of recipient.|
|deadline|uint|Unix timestamp deadline by which the transaction must confirm.|
### swapExactOKTForTokens
```
function swapExactOKTForTokens(uint amountOutMin, address[] calldata path, address to, uint deadline)
  external
  payable
  returns (uint[] memory amounts);
  ```
Receive as many output tokens as possible for an exact amount of OKT.
|Name|Type|Text|
|----|----|----|
|swapExactOKTForTokens|uint|Payable OKT amount.|
|amountOutMin|uint|The minimum amount tokens to receive.|
|path (address[])|address|An array of token addresses. path.length must be >= 2. Pools for each consecutive pair of addresses must exist and have liquidity.|
|to|address|Address of recipient.|
|deadline|uint|Unix timestamp deadline by which the transaction must confirm.|
### swapExactOKTForTokensSupportingFeeOnTransferTokens
```
function swapExactOKTForTokensSupportingFeeOnTransferTokens(
  uint amountOutMin,
  address[] calldata path,
  address to,
  uint deadline
) external payable;
```
Receive as many output tokens as possible for an exact amount of OKT. Supports tokens that take a fee on transfer.
|Name|Type|Text|
|----|----|----|
|swapExactOKTForTokensSupportingFeeOnTransferTokens|uint|Payable OKT amount.|
|amountOutMin|uint|The minimum amount tokens to receive.|
|path (address[])|address|An array of token addresses. path.length must be >= 2. Pools for each consecutive pair of addresses must exist and have liquidity.|
|to|address|Address of recipient.|
|deadline|uint|Unix timestamp deadline by which the transaction must confirm.|
### swapExactTokensForOKT
```
function swapExactTokensForOKT(uint amountIn, uint amountOutMin, address[] calldata path, address to, uint deadline)
  external
  returns (uint[] memory amounts);
  ```
Receive as much OKT as possible for an exact amount of input tokens.
|Name|Type|Text|
|----|----|----|
|amountIn|uint|Payable amount of input tokens.|
|amountOutMin|uint|The minimum amount tokens to receive.|
|path (address[])|address|An array of token addresses. path.length must be >= 2. Pools for each consecutive pair of addresses must exist and have liquidity.|
|to|address|Address of recipient.|
|deadline|uint|Unix timestamp deadline by which the transaction must confirm.|

### swapExactTokensForOKTSupportingFeeOnTransferTokens
```
function swapExactTokensForOKTSupportingFeeOnTransferTokens(
  uint amountIn,
  uint amountOutMin,
  address[] calldata path,
  address to,
  uint deadline
) external;
```
Receive as much OKT as possible for an exact amount of tokens. Supports tokens that take a fee on transfer.
|Name|Type|Text|
|----|----|----|
|amountIn|uint|Payable amount of input tokens.|
|amountOutMin|uint|The minimum amount tokens to receive.|
|path (address[])|address|An array of token addresses. path.length must be >= 2. Pools for each consecutive pair of addresses must exist and have liquidity.|
|to|address|Address of recipient.|
|deadline|uint|Unix timestamp deadline by which the transaction must confirm.|
### swapExactTokensForTokens
```
function swapExactTokensForTokens(
  uint amountIn,
  uint amountOutMin,
  address[] calldata path,
  address to,
  uint deadline
) external returns (uint[] memory amounts);
```
Receive as many output tokens as possible for an exact amount of input tokens.
|Name|Type|Text|
|----|----|----|
|amountIn|uint|Payable amount of input tokens.|
|amountOutMin|uint|The minimum amount tokens to receive.|
|path (address[])|address|An array of token addresses. path.length must be >= 2. Pools for each consecutive pair of addresses must exist and have liquidity.|
|to|address|Address of recipient.|
|deadline|uint|Unix timestamp deadline by which the transaction must confirm.|
### swapExactTokensForTokensSupportingFeeOnTransferTokens
```
function swapExactTokensForTokensSupportingFeeOnTransferTokens(
  uint amountIn,
  uint amountOutMin,
  address[] calldata path,
  address to,
  uint deadline
) external;
```
Receive as many output tokens as possible for an exact amount of input tokens. Supports tokens that take a fee on transfer.
|Name|Type|Text|
|----|----|----|
|amountIn|uint|Payable amount of input tokens.|
|amountOutMin|uint|The minimum amount tokens to receive.|
|path (address[])|address|An array of token addresses. path.length must be >= 2. Pools for each consecutive pair of addresses must exist and have liquidity.|
|to|address|Address of recipient.|
|deadline|uint|Unix timestamp deadline by which the transaction must confirm.|
### swapTokensForExactOKT
```
function swapTokensForExactOKT(uint amountOut, uint amountInMax, address[] calldata path, address to, uint deadline)
  external
  returns (uint[] memory amounts);
```
Receive an exact amount of OKT for as few input tokens as possible.
|Name|Type|Text|
|----|----|----|
|amountOut|uint|Payable amount of input tokens.|
|amountInMax|uint|The minimum amount tokens to input.|
|path (address[])|address|An array of token addresses. path.length must be >= 2. Pools for each consecutive pair of addresses must exist and have liquidity.|
|to|address|Address of recipient.|
|deadline|uint|Unix timestamp deadline by which the transaction must confirm.|
### swapTokensForExactTokens
```
function swapTokensForExactTokens(
  uint amountOut,
  uint amountInMax,
  address[] calldata path,
  address to,
  uint deadline
) external returns (uint[] memory amounts);
```
Receive an exact amount of output tokens for as few input tokens as possible.
|Name|Type|Text|
|----|----|----|
|amountOut|uint|Payable amount of input tokens|
|amountInMax|uint|The minimum amount tokens to input.|
|path (address[])|address|An array of token addresses. path.length must be >= 2. Pools for each consecutive pair of addresses must exist and have liquidity.|
|to|address|Address of recipient.|
|deadline|uint|Unix timestamp deadline by which the transaction must confirm.|
## Interface
```
// SPDX-License-Identifier: MIT
pragma solidity =0.6.12;

interface IOKCSwapRouter01 {
    function factory() external pure returns (address);
    function WOKT() external pure returns (address);
    function pairCodeHash() external pure returns (bytes32);

    function addLiquidity(
        address tokenA,
        address tokenB,
        uint amountADesired,
        uint amountBDesired,
        uint amountAMin,
        uint amountBMin,
        address to,
        uint deadline
    ) external returns (uint amountA, uint amountB, uint liquidity);
    function addLiquidityOKT(
        address token,
        uint amountTokenDesired,
        uint amountTokenMin,
        uint amountOKTMin,
        address to,
        uint deadline
    ) external payable returns (uint amountToken, uint amountOKT, uint liquidity);
    function removeLiquidity(
        address tokenA,
        address tokenB,
        uint liquidity,
        uint amountAMin,
        uint amountBMin,
        address to,
        uint deadline
    ) external returns (uint amountA, uint amountB);
    function removeLiquidityOKT(
        address token,
        uint liquidity,
        uint amountTokenMin,
        uint amountOKTMin,
        address to,
        uint deadline
    ) external returns (uint amountToken, uint amountOKT);
    function removeLiquidityWithPermit(
        address tokenA,
        address tokenB,
        uint liquidity,
        uint amountAMin,
        uint amountBMin,
        address to,
        uint deadline,
        bool approveMax, uint8 v, bytes32 r, bytes32 s
    ) external returns (uint amountA, uint amountB);
    function removeLiquidityOKTWithPermit(
        address token,
        uint liquidity,
        uint amountTokenMin,
        uint amountOKTMin,
        address to,
        uint deadline,
        bool approveMax, uint8 v, bytes32 r, bytes32 s
    ) external returns (uint amountToken, uint amountOKT);
    function swapExactTokensForTokens(
        uint amountIn,
        uint amountOutMin,
        address[] calldata path,
        address to,
        uint deadline
    ) external returns (uint[] memory amounts);
    function swapTokensForExactTokens(
        uint amountOut,
        uint amountInMax,
        address[] calldata path,
        address to,
        uint deadline
    ) external returns (uint[] memory amounts);
    function swapExactOKTForTokens(uint amountOutMin, address[] calldata path, address to, uint deadline)
        external
        payable
        returns (uint[] memory amounts);
    function swapTokensForExactOKT(uint amountOut, uint amountInMax, address[] calldata path, address to, uint deadline)
        external
        returns (uint[] memory amounts);
    function swapExactTokensForOKT(uint amountIn, uint amountOutMin, address[] calldata path, address to, uint deadline)
        external
        returns (uint[] memory amounts);
    function swapOKTForExactTokens(uint amountOut, address[] calldata path, address to, uint deadline)
        external
        payable
        returns (uint[] memory amounts);

    function quote(uint amountA, uint reserveA, uint reserveB) external pure returns (uint amountB);
    function getAmountOut(uint amountIn, uint reserveIn, uint reserveOut) external pure returns (uint amountOut);
    function getAmountIn(uint amountOut, uint reserveIn, uint reserveOut) external pure returns (uint amountIn);
    function getAmountsOut(uint amountIn, address[] calldata path) external view returns (uint[] memory amounts);
    function getAmountsIn(uint amountOut, address[] calldata path) external view returns (uint[] memory amounts);
}

// SPDX-License-Identifier: MIT
pragma solidity =0.6.12;

import './IOKCSwapRouter01.sol';

interface IOKCSwapRouter02 is IOKCSwapRouter01 {
    function removeLiquidityOKTSupportingFeeOnTransferTokens(
        address token,
        uint liquidity,
        uint amountTokenMin,
        uint amountOKTMin,
        address to,
        uint deadline
    ) external returns (uint amountOKT);
    function removeLiquidityOKTWithPermitSupportingFeeOnTransferTokens(
        address token,
        uint liquidity,
        uint amountTokenMin,
        uint amountOKTMin,
        address to,
        uint deadline,
        bool approveMax, uint8 v, bytes32 r, bytes32 s
    ) external returns (uint amountOKT);

    function swapExactTokensForTokensSupportingFeeOnTransferTokens(
        uint amountIn,
        uint amountOutMin,
        address[] calldata path,
        address to,
        uint deadline
    ) external;
    function swapExactOKTForTokensSupportingFeeOnTransferTokens(
        uint amountOutMin,
        address[] calldata path,
        address to,
        uint deadline
    ) external payable;
    function swapExactTokensForOKTSupportingFeeOnTransferTokens(
        uint amountIn,
        uint amountOutMin,
        address[] calldata path,
        address to,
        uint deadline
    ) external;
}
```
