# Package crypto
## 1. Class AddressUtil

```java
import com.okbchain.utils.crypto.AddressUtil;
```

### 1.1 generate bech32 address from pubkey

```java
public static String createNewAddressSecp256k1(String mainPrefix, byte[] publickKey) throws Exception
```

### 1.2 convert pubkey to bech32 pubkey

```java
public static String getPubkeyBech32FromValue(String mainPrefix, byte[] publickKeyValue) throws Exception
```

### 1.3 convert hex string address to bech32 address 

```java
public static String convertAddressFromHexToBech32(String hexAddress)
```

### 1.4  convert  bech32 address to hex string address 

```java
public static String convertAddressFromBech32ToHex(String bech32Address)
```

## 2. Class Crypto

```java
import com.okbchain.utils.crypto.Crypto;
```

### 2.1 sign the msg with hex string private key

```java
public static byte[] sign(byte[] msg, String privateKey) throws NoSuchAlgorithmException
```

### 2.2 generate a private key randomly

```java
public static String generatePrivateKey()
```

### 2.3 generate hex string pubkey from hex string private key

```java
public static String generatePubKeyHexFromPriv(String privateKey)
```

### 2.4 generate mnemonic randomly

```java
public static String generateMnemonic()
```

### 2.5 generate hex string private key from mnemonic

```
public static String generatePrivateKeyFromMnemonic(String mnemonic)
```

### 2.6 generate bech32 validator operator address from hex string pubkey

```java
public static String generateValidatorAddressFromPub(String pubKey)
```

## 3. Class PrivateKey

```java
import com.okbchain.utils.crypto.PrivateKey;
```

### 3.1 PrivateKey constructor

```java
public PrivateKey(String mnemonic)
```

parameter `mnemonic` could be mnemonic or hex string pivate key.
