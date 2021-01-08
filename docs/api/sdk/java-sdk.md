## Java SDK

github: https://github.com/okex/okexchain-java-sdk

### 1 utils function

All utils functions are defined in the package `utils` under the path of `okexchain-java-sdk/src/main/java/com/okexchain/utils`. They can be invoked by the way like:

```
import com.okexchain.utils.Utils;

amount.setAmount(Utils.NewDecString(amount));
```

#### 1.1 Account function
##### 1.1.1 Create a key info with the given private key
```
PrivateKey key = new PrivateKey("8145bfb1d3acc216c54490952c994d5e3bce09dd65ae73d0c79f892284f721e7");
```

|  Name   | Type  |Mark|
|  ----  | ----  |----|
| privateKey  | string |account private key|

Printed results:

```
public class PrivateKey {
    // Address of the key
    public String getAddress() { return address; }

    // public key of the key
    public String getPubKey() { return pubKeyString; }

    // private key of the key
    public String getPriKey() { return priKeyString; }
}
```

##### 1.1.2 Create the public key with the given private key
```
public static byte[] generatePubKeyFromPriv(String privateKey)
```

Enter parameters:

|  Name   | Type  |Mark|
|  ----  | ----  |----|
| privateKey  | string |account private key|

Printed results:

|  Name   | Type  |Mark|
|  ----  | ----  |----|
| publicKey  | byte[] |account public key|

##### 1.1.3 Create the address with the give private key
```
public static String generateAddressFromPriv(String privateKey)
```

Enter parameters:

|  Name   | Type  |Mark|
|  ----  | ----  |----|
| privateKey  | string |account private key|

Printed results:

|  Name   | Type  |Mark|
|  ----  | ----  |----|
| Address  | String |account address|

##### 1.1.4 Create the address with the give public key
```
public static String generateAddressFromPub(String pubKey)
```

Enter parameters:

|  Name   | Type  |Mark|
|  ----  | ----  |----|
| pubKey  | string |account public key|

Printed results:

|  Name   | Type  |Mark|
|  ----  | ----  |----|
| Address  | String |account address|

##### 1.1.5 Create the validator address with the given public key
```
public static String generateValidatorAddressFromPub(String pubKey)
```

Enter parameters:

|  Name   | Type  |Mark|
|  ----  | ----  |----|
| pubKey  | string |account public key|

Printed results:

|  Name   | Type  |Mark|
|  ----  | ----  |----|
| Address  | String |account address|

### 2 Msg module

All msg functions are defined in the package `msg` under the path of `okexchain-java-sdk/src/main/java/com/okexchain/msg`. They can be invoked by the way like:

```
import com.okexchain.msg.*

MsgTokenIssueValue value = new MsgTokenIssueValue();
```

#### 2.1 token
##### 2.1.1 environment setting

Set ChainID:

```
import com.okexchain.env.EnvInstance;

EnvInstance.getEnv().setChainID("okexchain-1");
```

Set rest server url:

```
import com.okexchain.env.EnvInstance

EnvInstance.getEnv().setRestServerUrl("http://localhost:8080");
```

##### 2.1.2 transfer between users

```
import com.okexchain.msg.common.Message;
import com.okexchain.msg.common.Token;

// Create a transfer transaction message object
MsgSend msg = new MsgSend();

// Initialization message
msg.init();

// Add parameters and construct transaction
Message messages = msg.produceSendMsg();

// Add fee, gas and memo to send transaction
msg.submit(messages, "0.02000000", "200000", "okexchain transfer!");
```
