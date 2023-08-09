# Package msg
Package msg defines the message types according to module in OKBC, and the example is the main function in class Msgxxx not end with "value" or in sample package. Take transfer coins as example as follows or you can also refer to the main fuction in class MsgSend in package `import com.okbchain.msg.common.Token`.

## 1.Environment setting

```java
import com.okbchain.env.EnvInstance;
// set chainid
EnvInstance.getEnv().setChainID("okbchain-67");
// set rest url
EnvInstance.getEnv().setRestServerUrl("http://localhost:8545");
```

## 2. Transfer tokens between accounts

```java
import com.okbchain.msg.common.Message;
import com.okbchain.msg.common.Token;

// create send msg
MsgSend msg = new MsgSend();

msg.initMnemonic("puzzle glide follow cruel say burst deliver wild tragic galaxy lumber offer");

// create msg that sends 6.00000000okb from account whose mnemonic is `puzzle glide follow cruel say burst deliver wild tragic galaxy lumber offer` to account `ex1hcngft7gfkhn8z8fnlajzh7agyt0az0v6ztmme`
Message messages = msg.produceSendMsg("okb", "6.00000000", "ex1hcngft7gfkhn8z8fnlajzh7agyt0az0v6ztmme");

// submit msg to exchain network; `0.01000000` is the fee, `200000` is the gas limit and `exchain transfer!` is the memo of this msg.
msg.submit(messages, "0.01000000", "200000", "exchain transfer!");
```