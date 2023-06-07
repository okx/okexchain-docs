# Get Started
OKBC SDK provides 3 sets of lightweight libraries in different programming languages, to cater to developers who use different programming languages in interacting with the various components of the OKBC network.

1. OKBChain Go SDK
2. OKBChain Java SDK
3. OKBChain JavaScript SDK

## 1. Go SDK 
Please find all the useful repositories and API information in [this GitHub link](https://github.com/okx/okbchain-go-sdk "this GitHub link").
### 1.1 Components

|Component|Description|
|:----|:----|
|[client.go](https://github.com/okx/okbchain-go-sdk/blob/master/client.go "client.go")|The main client of OKBChain GO SDK is created in this file. Developers are supposed to set up the config with their own requirements during client creation.|
|[expose](https://github.com/okx/okbchain-go-sdk/tree/master/exposed "expose")|Abstraction with the interfaces of each module. The implements of it are filled in the folder `module`.|
|[module](https://github.com/okx/okbchain-go-sdk/tree/master/module "module")|The main logic for OKBChain GO SDK queries and txs are classified by their own module names in OKBChain. Developers can find out the concrete designs under the specific module folder. Please focus on the files, tx.go and query.go.|
|[mocks](https://github.com/okx/okbchain-go-sdk/tree/master/mocks "mocks")|Mock client tools for unit testing of the main client in OKBChain GO SDK.|
|[sample](https://github.com/okx/okbchain-go-sdk/tree/master/sample "sample")|A clear short user guide.|
|[types](https://github.com/okx/okbchain-go-sdk/tree/master/types "types")|The necessary struct set of OKBChain is built here. Developers are allowed to import some basic types, like Dec and AccAddress directly if they want.|
|[utils](https://github.com/okx/okbchain-go-sdk/tree/master/utils "utils")|A useful tool set for someone who is going to send more transactions and queries, is spilt by module names as the file names. Beyond that, the operation of account keys with mnemonics remains in the file `account.go`.|

### 1.2 Installation
>Go version above 1.15 is required.

The developer can get the OKBChain Go SDK directly by `git clone` from [this github link](https://github.com/okx/okbchain-go-sdk "this github link").

### 1.3 API
The api functions of transactions and queries are all under the path `expose`. You can find more details in OKBC docs [here](https://exchain-docs.readthedocs.io/en/latest/api/sdk/go-sdk.html "here").

### 1.4 Tendermint Query
OKBChain Go SDK also provides node query functions so that the underlying information of blockchain is available for developers.
The tendermint query functions can be found in the file `exposed/tendermint.go`. Developers could make it through with the file `module/tendermint/query.go` and get clear how to invoke them.

### 1.5 Example
`Client` seems necessary for every operation with Go SDK. Here are the examples:

    // rpcURL should be modified according to the actual situationrpcURL   = "https://okbtesttmrpc.okbchain.org"name     = "alice"passWd   = "12345678"mnemonic = "giggle sibling fun arrow elevator spoon blood grocery laugh tortoise culture tool"addr     = "ex1qj5c07sm6jetjz8f509qtrxgh4psxkv3ddyq7u"// build the client with own configconfig, _ := sdk.NewClientConfig(rpcURL, "okbchaintest-197", sdk.BroadcastBlock, "0.00002okb", 200000, 0, "")
            client := sdk.NewClient(config)
    
    // create your account key info by 'name','passWd' and 'mnemonic'keyInfo, ,  := utils.CreateAccountWithMnemo(mnemonic, name, passWd)
    
    // get info of your account from OKBChainaccInfo, _ := client.Auth().QueryAccount(keyInfo.GetAddress().String())
    
    // transfer some okb to addrres, _ := client.Token().Send(keyInfo, passWd, addr, "0.1024okb", "my memo", accInfo.GetAccountNumber(), accInfo.GetSequence())
    
You can invoke more and more api functions with the object `client`.

### 1.6 Testing
All changes and addition of codes will be pushed with unit tests strictly.

## 2. Java SDK 
OKBChain Java SDK is a lightweight Java library to interact with OKBC through REST. Please find all the useful repositories and API information in https://github.com/okx/okbchain-java-sdk[this GitHub link](https://github.com/okx/okbchain-java-sdk "this GitHub link").

### 2.1 Components

|Component|Description|
|:----|:----|
|[src](https://github.com/okx/okbchain-java-sdk/tree/main/src "src")|The functions which could interact with OKBChain are contained in class `OKBChainRPCClientImpl` of package `com.okbchain.client.impl`.|
|test|It seems like a set of examples to show how to use the functions mentioned above. The developers could design their code referring to the test functions of class `OKBChainRPCClientImplTest` in package `com.okbchain.client` in detail.|

Function modules in path `src`

|Component|Description|
|:----|:----|
|env|Set environment for Java SDK to interact with OKBChain.|
|msg|Define the message types according to module in OKBChain, and the example is the main function in class Msgxxx not end with "value" or in sample package.|
|common|Network communications by RPC.|
|utils.crypto|Related to the account info and address info of OKBChain|
|utils.encoding|The implementation of go-amino in Java|


### 2.2 Installation

    git clone https://github.com/okx/okbchain-java-sdk.git
    cd okbchain-java-sdk
    mvn install -Dmaven.test.skip=true
        
### 2.3 API
You can find more details [here](/dev/build-dapps/okbc-sdk/apis/java-sdk/package-utils.html).

### 2.4 Testing
All changes and addition of codes will be pushed with unit tests strictly. Right now you can find existing test cases [here](http://github.com/okex/okexchain-java-sdk/src/test "here").

## 3. JavaScript SDK 
OKBChain JavaScript SDK allows browsers and node.js clients to interact with OKBC. Please find all the useful repositories and API information in [this GitHub link](https://github.com/okx/okbchain-javascript-sdk "this GitHub link").

### 3.1 Components

|Component|Description|
|:----|:----|
|crypto|Core cryptographic functions.|
|client|Implementations of OKBChain transaction types, such as for transfers and trading.|
|accounts|Management of "accounts" and wallets, including seed and encrypted mnemonic generation.|

### 3.2 Installation
Install the NPM package:

    $ npm i @okbchain/javascript-sdk
    
### 3.3 API
For up-to-date API documentation, please check the [wiki](https://github.com/okx/okbchain-javascript-sdk/tree/main/docs "wiki").

### 3.4 Testing
All new code changes should be covered with unit tests. You can run the tests with the following command:

    $ npm run test
    