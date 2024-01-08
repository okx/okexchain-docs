# OKTC Price Feeds 


# Introduction to OKTC Price Feeds

OKTC Price Feeds is the quickest way to connect your smart contracts to the real-world market prices of crypto assets. 

For example, one use for data feeds is to enable smart contracts to retrieve the latest pricing data of a crypto asset in a single call.



## 1.Using OKTC Price Feeds

### Contract Address
**OKTC Mainnet：**

|Name|Address|
|--|--|
|Oracle|[0xF77596928f0823959c2caF4810834FD227244871](https://www.okx.com/explorer/oktc/address/0xf77596928f0823959c2caf4810834fd227244871)|
| dataSource |[0x8B83D77C1584e9E1D81d3172608c045E6E5876e5](https://www.okx.com/explorer/oktc/address/0x8B83D77C1584e9E1D81d3172608c045E6E5876e5)|




**OKTC Testnet：**

| Name | Address|
|--|--|
| Oracle |[0x8825446B7881F54d296AF704c1050BdBB08A2589](https://www.okx.com/explorer/oktc-test/address/0x8825446B7881F54d296AF704c1050BdBB08A2589)|
| dataSource |[0xF4E0D270c864eE527ff73d1afC558778570dae8B](https://www.okx.com/explorer/oktc-test/address/0xF4E0D270c864eE527ff73d1afC558778570dae8B)|



### Code Example

```
pragma solidity ^0.5.17;
pragma experimental ABIEncoderV2;

interface IExOraclePriceData
{
    function latestRoundData(string calldata priceType, address dataSource) external view returns (uint80 roundId, int256 answer, uint256 startedAt, uint256 updatedAt, uint80 answeredInRound);
    function get(string calldata priceType, address source) external view returns (uint256 price, uint256 timestamp);
    function getOffchain(string calldata priceType, address source) external view returns (uint256 price, uint256 timestamp);
    function getCumulativePrice(string calldata priceType, address source) external view returns (uint256 cumulativePrice,uint32 timestamp);
    function lastResponseTime(address source) external view returns (uint256);
}

contract Demo {
    address public exOracleAddress;
    
     /**
     * Input an ExOracle contract address
     */
    constructor(address oracle) public {
        exOracleAddress = oracle;
    }
    
    /**
     * @notice Read a single key from an authenticated source. 
     * @param priceType The selector for the value to return
     * @param source The verifiable author of the data
     */
    function getLatestPrice(string memory priceType, address source) public view returns (uint256) 
    {
        IExOraclePriceData oracle = IExOraclePriceData(exOracleAddress);
        (uint256  value, uint256 timestamp) = oracle.get(priceType, source);
        return value;
    }
    
    /**
    * @notice A specific example to get BTC-USD price
    */
    function getBtcPrice() public view returns (uint256) 
    {
        address dataSource = 0x8B83D77C1584e9E1D81d3172608c045E6E5876e5;
        return getLatestPrice("BTC", dataSource);
    }
}
```


### Price Feeds API Reference

Import this interface to your contract and use it to run functions in the proxy contract. Create the interface object by pointing to the proxy address. 

For example, on **OKTC Mainnet** you could create the interface object in the constructor of your contract using the following example:

```
/**
 * Network: OKTC Mainnet
 * Address: 0xF77596928f0823959c2caF4810834FD227244871
 */constructor() {
    priceFeed = ExOraclePriceDataInterface(0xF77596928f0823959c2caF4810834FD227244871);
    }
```


#### Functions

| **Name** | **Description** |                                                     
| ----- | ----------------- |
| latestRoundData     | The last round data (the most recent data for a given price type and data source)    | 
|  get | Read a single key from an authenticated source  |
|  getOffchain |  Get the price data on off-chain |
|  getCumulativePrice |  Read a Cumulative Price from an authenticated source |
| lastResponseTime  | Timestamp of last response  |


#### latestRoundData

get the last round data (the most recent data for a given price type and data source)

```
function latestRoundData(string calldata priceType, address source) external view returns (uint80 roundId, int256 answer, uint256 startedAt, uint256 updatedAt, uint80 answeredInRound);
```


**Parameters:**

- `priceType`: specifies which price to get, i.e. `BTC`.**Please note that upper case letters must be used.**
- `source`: specifies which data source you want to get the price. i.e. the address of OKX

**Return values:**

- `roundId`: roundId is set to 0
- `answer`: answer is the actual value of the priceType
- `startedAt`: startedAt is set to 0
- `updatedAt`: the timestamp when this answer is submitted to the oracle
- `answeredInRound`: answeredInRound is set to 0


#### get

Read a single key from an authenticated source

```
function get(string calldata priceType, address source) external view returns (uint256 price, uint256 timestamp);
```

**Parameters:**

- `priceType`: specifies which price to get, i.e. `BTC`.**Please note that upper case letters must be used.**

- `source`: specifies which data source you want to get the price. i.e. the address of OKX

**Return values:**
- `price`: The value of the priceType
- `timestamp`: Timestamp of last updated


#### getOffchain

Get the price data on off-chain

```
function getOffchain(string calldata priceType, address source) external view returns (uint256 price, uint256 timestamp);
```

**Parameters:**

- `priceType`: specifies which price to get, i.e. `BTC`.**Please note that upper case letters must be used.**

- `source`: specifies which data source you want to get the price. i.e. the address of OKX

**Return values:**

- `price`: The value of the priceType
- `timestamp`: Timestamp of last updated


#### getCumulativePrice

Read a Cumulative Price from an authenticated source

```
function getCumulativePrice(string calldata priceType, address source) external view returns (uint256 cumulativePrice,uint32 timestamp);
```


**Parameters:**

- `priceType`: specifies which price to get, i.e. `BTC`.**Please note that upper case letters must be used.**

- `source`: specifies which data source you want to get the price. i.e. the address of OKX

**Return values:**

- `cumulativePrice`:  Cumulative Price from an authenticated source
- `timestamp`: Timestamp of last updated


#### lastResponseTime

The timestamp of the last data source response

```
function lastResponseTime(address source) external view returns (uint256);
```

**Parameters:**

- `source`: specifies which data source you want to get the price. i.e. the address of OKX

**Return values:**
- `timestamp`: Timestamp of last updated



## 2.Available Feeds & Refresh Frequency

We collect data from trusted data source (OKX、Coinbase、Kraken、Coingecko、CoinMarketCap、CryptoCompare and so on) and publish it to our on-chain oracle smart contracts through a robust pipeline.


To ensure accurate data is fed to the smart contracts in a timely manner, OKTC Oracle will feed the price to the smart contracts in regard to two parameters:**deviation threshold** and **heartbeat threshold**.  


|**Name**|**Description**|
|--|--|
|Deviation Threshold|The deviation of real-world data beyond a certain interval triggers all the nodes to update.|
|Heartbeat Threshold|If the data values stay within the deviation parameters, it will only trigger an update every X minutes / seconds.|




The list shown below represents the assets that OKTC Oracle currently supports. 


|Pair|Assets(priceType)| Decimals|Deviation Threshold（%）|Heartbeat Threshold（s）|
|:--|:--:|:--:|:--:|:--:|
|BTC/USD|BTC|6|0.1|60|
|CHE/USD|CHE|6|0.5|120|
|DAI/USD|DAI|6|0.1|120|
|DOT/USD|DOT|6|0.2|120|
|ETC/USD|ETC|6|0.2|120|
|ETH/USD|ETH|6|0.1|60|
|FIL/USD|FIL|6|0.3|120|
|LINK/USD|LINK|6|0.2|120|
|LTC/USD|LTC|6|0.3|120|
|OKB/USD|OKB|6|0.5|120|
|OKT/USD|OKT|6|0.5|120|
|ONT/USD|ONT|6|0.5|120|
|SUSHI/USD|SUSHI|6|0.5|120|
|USDC/USD|USDC|6|0.1|120|
|USDK/USD|USDK|6|0.1|120|
|USDT/USD|USDT|6|0.1|120|
|UNI/USD|UNI|6|0.2|120|
|WING/USD|WING|6|0.5|120|

