# Java SDK

SDK [下载](https://github.com/okex/okchain-java-sdk)

## 通过远程区块链节点获取account信息
```java
public JSONObject getAccountFromNode(String userAddress) throws NullPointerException;
```
传入参数：

|Name|Type|Description|
|---|---|---|
|userAddress|String|账户地址|

返回结果：
```json
{
	"type": "auth/Account",
	"value": {
		"address": "okchain1g7c3nvac7mjgn2m9mqllgat8wwd3aptdqket5k",
		"coins": [{
			"denom": "okt",
			"amount": "10000.00000000"
		}],
		"public_key": {
			"type": "tendermint/PubKeySecp256k1",
			"value": "Aga5P7TWoqq+6cmxOTHhj9tLqFlHNlLpWMEdAfHcokp+"
		},
		"account_number": "4",
		"sequence": "0"
	}
}
```

## 创建私钥，并生成对应公钥，地址
```java
    public AccountInfo createAccount();
```
传入参数：无


返回结果：
```java
public class AddressInfo {
    private String privateKey;//私钥
    private String publicKey;//公钥
    private String userAddress;//地址
}
public class AccountInfo extends AddressInfo {
    private String accountNumber;//账户在okchain上的id
    private String sequenceNumber;//该账户下次发送交易应有的序号
}
```
## 输入私钥，获得对应公钥，地址
```java
    public AddressInfo getAddressInfo(String privateKey) throws NullPointerException;
```
传入参数：

|Name|Type|Description|
|---|---|---|
|privateKey|String|私钥|

返回结果：
```java
public class AddressInfo {
    private String privateKey;//私钥
    private String publicKey;//公钥
    private String userAddress;//地址
}
```
## 通过私钥获得account信息
```java
    public AccountInfo getAccountInfo(String privateKey) throws NullPointerException;
```
传入参数：

|Name|Type|Description|
|---|---|---|
|privateKey|String|私钥|

返回结果：同上
## 通过助记词生成私钥
```java
    public String getPrivateKeyFromMnemonic(String mnemonic);
```
## 生成新的助记词
```java
    public String generateMnemonic();
```
## 在当前目录下生成KeyStore文件
```java
    public String generateKeyStore(String privateKey, String passWord) throws CipherException, IOException;
```
传入参数：

|Name|Type|Description|
|---|---|---|
|privateKey|String|私钥|
|passWord|String|密码|

返回结果：

|Name|Type|Description|
|---|---|---|
|KeyStoreName|String|KeyStore文件名|

## 从指定文件路径的KeyStore文件恢复私钥
```java
    public String getPrivateKeyFromKeyStore(String keyStoreFilePath, String passWord) throws IOException, CipherException;
```
传入参数：

|Name|Type|Description|
|---|---|---|
|keyStoreFilePath|String|KeyStore文件路径|
|passWord|String|密码|

返回结果：

|Name|Type|Description|
|---|---|---|
|privateKey|String|私钥|

## 发起转账Transaction
```java
    public JSONObject sendSendTransaction(AccountInfo account, String to, List<Token> amount, String memo) throws NullPointerException, IOException;
```
传入参数：

|Name|Type|Description|
|---|---|---|
|account|AccountInfo|账户信息|
|to|String|被转账方地址|
|amount|Token[]|转账数字资产信息|
|memo|String|备注|

```java
public class Token {
    private String amount;//数字资产数量，必须是八位小数，如1.00000000
    private String denom;//数字资产信息，如okt
}
```
返回结果：
```json
{
	"height": "0",
	"txhash": "A1F5688C769621E04FFF2617BD1C1931607FD3178368A362CEC8EFAD9D8FFB46"//Transaction哈希
}
```
## 发起下单Transaction
```java
    public JSONObject sendPlaceOrderTransaction(AccountInfo account, RequestPlaceOrderParams parms, String memo) throws NullPointerException, IOException;
```
传入参数：

|Name|Type|Description|
|---|---|---|
|account|AccountInfo|账户信息|
|price|String|数字资产价格，需要是八位小数|
|product|String|数字资产交易对，比acoin_okt|
|quantity|String|数字资产数量，需要是八位小数|
|side|String|"BUY"or"SELL"|
|memo|String|备注|

返回结果：
```json
{
	"height": "0",
	"txhash": "A1F5688C769621E04FFF2617BD1C1931607FD3178368A362CEC8EFAD9D8FFB46"//Transaction哈希
}
```
## 发起取消订单Transaction
```java
    public JSONObject sendCancelOrderTransaction(AccountInfo account, String orderId, String memo) throws NullPointerException, IOException;
```
传入参数：

|Name|Type|Description|
|---|---|---|
|account|AccountInfo|账户信息|
|orderId|String|订单id|
|memo|String|备注|

返回结果：
```json
{
	"height": "0",
	"txhash": "A1F5688C769621E04FFF2617BD1C1931607FD3178368A362CEC8EFAD9D8FFB46"//Transaction哈希
}
```

<!--
## 发起同时给多个人转账的Transaction
```java
    public JSONObject sendMultiSendTransaction(AccountInfo account, List<TransferUnit> transfers, String memo) throws IOException;

```
传入参数：

|Name|Type|Description|
|---|---|---|
|account|AccountInfo|账户信息|
|transfers|TransferUnit[]|被转账方信息|
|memo|String|备注|

```java
public class TransferUnit {
    private List<Token> coins;//被转账方数字资产信息
    private String to;//被转账方地址
}
```

返回结果：
```json
{
	"height": "0",
	"txhash": "A1F5688C769621E04FFF2617BD1C1931607FD3178368A362CEC8EFAD9D8FFB46"//Transaction哈希
}
```
-->

## 获取用户所有数字资产信息
```java
    public BaseModel getAccountALLTokens(String address, String show) throws NullPointerException;
```
参数和返回值信息参考http api对应接口描述

返回结果：

```java
public class BaseModel {
    private String code;
    private String data;
    private String msg;
    private String detailMsg;
}
```
## 获取用户单个数字资产信息
```java
    public BaseModel getAccountToken(String address, String symbol) throws NullPointerException;
```
参数和返回值信息参考http api对应接口描述
## 获取所有数字资产的信息
```java
    public BaseModel getTokens();
```
参数和返回值信息参考http api对应接口描述
## 获取单个数字资产的信息
```java
    public BaseModel getToken(String symbol) throws NullPointerException;
```
参数和返回值信息参考http api对应接口描述
## 获取所有数字资产交易对的信息
```java
    public BaseModel getProducts();
```
参数和返回值信息参考http api对应接口描述
## 获取交易深度信息
```java
    public BaseModel getDepthBook(String product) throws NullPointerException;
```
参数和返回值信息参考http api对应接口描述
## 获取交易K线信息
```java
    public BaseModel getCandles(String granularity, String instrumentId, String size) throws NullPointerException;
```
参数和返回值信息参考http api对应接口描述
## 获取所有的交易行情信息
```java
    public BaseModel getTickers(String count);
```
参数和返回值信息参考http api对应接口描述
## 获取某数字资产交易对最近成交记录
```java
public BaseModel getMatches(String product, String start, String end, String page, String perPage) throws NullPointerException;
```
参数和返回值信息参考http api对应接口描述
## 未成交订单
```java
    public BaseModel getOrderListOpen(RequestOrderListOpenParams params) throws NullPointerException;
```
参数和返回值信息参考http api对应接口描述
## 历史订单
```java
    public BaseModel getOrderListClosed(RequestOrderListClosedParams params) throws NullPointerException;
```
参数和返回值信息参考http api对应接口描述
## 获取成交明细
```java
    public BaseModel getDeals(RequestDealsParams params) throws NullPointerException;
```
参数和返回值信息参考http api对应接口描述
## 获取交易记录
```java
    public BaseModel getTransactions(RequestTransactionsParams params) throws NullPointerException;
```
参数和返回值信息参考http api对应接口描述
