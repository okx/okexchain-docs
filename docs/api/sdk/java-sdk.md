## Java SDK

github: https://github.com/okex/okexchain-java-sdk

### 1 utils function

All utils functions are defined in the package `utils` under path `okexchain-java-sdk/src/main/java/com/okexchain/utils`. They can be invoked by the way like:

```
import com.okexchain.utils.Utils;

amount.setAmount(Utils.NewDecString(amount));
```

#### 1.1 Account function
##### 1.1.1 Create the public key with the given private key
```
public static byte[] generatePubKeyFromPriv(String privateKey)
```

Enter parameters:

|  Name   | Type  |Mark|
|  ----  | ----  |----|
| privateKey  | string |account private|

Printed results:

|  Name   | Type  |Mark|
|  ----  | ----  |----|
| privateKey  | string |account private|

##### 1.1.2 Create the address with the give private key

##### 1.1.3 Create the address with the give public key

##### 1.1.4 Create the validator address with the given public key
