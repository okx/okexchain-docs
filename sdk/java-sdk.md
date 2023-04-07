# Java SDK

github: https://github.com/okx/exchain-java-sdk

## 1. package utils

### 1.1  Class Utils

```java
import com.okexchain.utils.Utils;
```

#### 1.1.1 Complement 18-bit accuracy

```java
public static String NewDecString(String str)
```

#### 1.1.2 Convert BigInteger to bytes

```java
public static byte[] BigIntegerToBytes(BigInteger value)
```

## 2. package crypto

### 2.1 Class AddressUtil

```java
import com.okexchain.utils.crypto.AddressUtil;
```

#### 2.1.1 generate bech32 address from pubkey

```java
public static String createNewAddressSecp256k1(String mainPrefix, byte[] publickKey) throws Exception
```

#### 2.1.2 convert pubkey to bech32 pubkey

```java
public static String getPubkeyBech32FromValue(String mainPrefix, byte[] publickKeyValue) throws Exception
```

#### 2.1.3 convert hex string address to bech32 address 

```java
public static String convertAddressFromHexToBech32(String hexAddress)
```

#### 2.1.4  convert  bech32 address to hex string address 

```java
public static String convertAddressFromBech32ToHex(String bech32Address)
```

### 2.2 Class Crypto

```java
import com.okexchain.utils.crypto.Crypto;
```

#### 2.2.1 sign the msg with hex string private key

```java
public static byte[] sign(byte[] msg, String privateKey) throws NoSuchAlgorithmException
```

#### 2.2.2 generate a private key randomly

```java
public static String generatePrivateKey()
```

#### 2.2.3 generate hex string pubkey from hex string private key

```java
public static String generatePubKeyHexFromPriv(String privateKey)
```

#### 2.2.4 generate mnemonic randomly

```java
public static String generateMnemonic()
```

#### 2.2.5 generate hex string private key from mnemonic

```
public static String generatePrivateKeyFromMnemonic(String mnemonic)
```

#### 2.2.6 generate bech32 validator operator address from hex string pubkey

```java
public static String generateValidatorAddressFromPub(String pubKey)
```

### 2.3 Class PrivateKey

```java
import com.okexchain.utils.crypto.PrivateKey;
```

#### 2.3.1 PrivateKey constructor

```java
public PrivateKey(String mnemonic)
```

parameter `mnemonic` could be mnemonic or hex string pivate key.

## 3. package msg

Package msg defines the message types according to module in OKTC, and the example is the main function in class Msgxxx not end with "value" or in sample package. Take transfer coins as example as follows or you can also refer to the main fuction in class MsgSend in package `import com.okexchain.msg.common.Token`.

##### 1. environment setting

```java
import com.okexchain.env.EnvInstance;
// set chainid
EnvInstance.getEnv().setChainID("okexchain-1");
// set rest url
EnvInstance.getEnv().setRestServerUrl("http://localhost:8080");
```

##### 2. transfer tokens between accounts

```java
import com.okexchain.msg.common.Message;
import com.okexchain.msg.common.Token;

// create send msg
MsgSend msg = new MsgSend();

msg.initMnemonic("puzzle glide follow cruel say burst deliver wild tragic galaxy lumber offer");

// create msg that sends 6.00000000okt from account whose mnemonic is `puzzle glide follow cruel say burst deliver wild tragic galaxy lumber offer` to account `ex1hcngft7gfkhn8z8fnlajzh7agyt0az0v6ztmme`
Message messages = msg.produceSendMsg("okt", "6.00000000", "ex1hcngft7gfkhn8z8fnlajzh7agyt0az0v6ztmme");

// submit msg to exchain network; `0.01000000` is the fee, `200000` is the gas limit and `exchain transfer!` is the memo of this msg.
msg.submit(messages, "0.01000000", "200000", "exchain transfer!");
```
