## Go SDK

github: https://github.com/okex/okexchain-go-sdk

### 1 utils function

All utils functions are defined in the package `utils` under path `okexchain-go-sdk/utils`. They can be invoked by the way like:

```go
import "github.com/okex/okexchain-go-sdk/utils"

_, _, _ = utils.CreateAccountWithMnemo(defaultMnemo, "turing", defaultPassWd)
```
#### 1.1 Account function
##### 1.1.1 Create a random key info with the given name and password

```go
func CreateAccount(name, passWd string) (info keys.Info, mnemo string, err error)
```

Enter parameters:

|  Name   | Type  |Mark|
|  ----  | ----  |----|
| name  | string |account name|
| passWd  | string |account password|

Printed results:

```go
// Info interface
type Info interface {
	// Human-readable type for key listing
	GetType() KeyType
	// Name of the key
	GetName() string
	// Public key
	GetPubKey() crypto.PubKey
	// Address
	GetAddress() types.AccAddress
	// Bip44 Path
	GetPath() (*hd.BIP44Params, error)
	// Algo
	GetAlgo() SigningAlgo
}

// Mnemonic
string
```

##### 1.1.2 Create the key info with the given mnemonic, name and password

```go
func CreateAccountWithMnemo(mnemonic, name, passWd string) (info keys.Info, mnemo string, err error)
```

Enter parameters:

|  Name   | Type  |Mark|
|  ----  | ----  |----|
| name  | string |account name|
| passWd  | string |account password|
| mnemonic  | string |account mnemonic|

Printed results:

```go
// Info interface
type Info interface {
	// Human-readable type for key listing
	GetType() KeyType
	// Name of the key
	GetName() string
	// Public key
	GetPubKey() crypto.PubKey
	// Address
	GetAddress() types.AccAddress
	// Bip44 Path
	GetPath() (*hd.BIP44Params, error)
	// Algo
	GetAlgo() SigningAlgo
}

// Mnemonic
string
```

##### 1.1.3 Create the key info with the given private-key string, name and password

```go
func CreateAccountWithPrivateKey(privateKey, name, passWd string) (info keys.Info, err error)
```

Enter parameters:

|  Name   | Type  |Mark|
|  ----  | ----  |----|
| name  | string |account name|
| passWd  | string |account password|
| privateKey  | string |account private-key|

Printed results:

```go
// Info interface
type Info interface {
	// Human-readable type for key listing
	GetType() KeyType
	// Name of the key
	GetName() string
	// Public key
	GetPubKey() crypto.PubKey
	// Address
	GetAddress() types.AccAddress
	// Bip44 Path
	GetPath() (*hd.BIP44Params, error)
	// Algo
	GetAlgo() SigningAlgo
}
```

##### 1.1.4 Create a random mnemonic

```go
func GenerateMnemonic() (mnemo string, err error)
```

Printed results:

```go
// Mnemonic
string
```

##### 1.1.5 Generate private key from mnemonic

```go
func GeneratePrivateKeyFromMnemo(mnemonic string) (privKey string, err error)
```

Enter parameters:

|  Name   | Type  |Mark|
|  ----  | ----  |----|
| mnemonic  | string |account mnemonic|

Printed results:

```go
// Private Key
string
```

#### 1.2 Token utils function
##### 1.2.1 Parse the whole multi-send info string into TransferUnit

```go
func ParseTransfersStr(str string) ([]types.TransferUnit, error) 
```

Enter parameters:

|  Name   | Type  |Mark|
|  ----  | ----  |----|
| str  | string |transfer unit info in string, e.g. "addr1 1okt\naddr2 2okt"|

Printed results:

```go
// TransferUnit slice 
type TransferUnit struct {
    To    sdk.AccAddress
    Coins sdk.SysCoins
}
```

### 2 Auth module

All auth functions are defined in the package `auth` under path `okexchain-go-sdk/module/auth`. They can be invoked by the way like:

```go
import "github.com/okex/okexchain-go-sdk"

config, _ := gosdk.NewClientConfig(rpcURL, chainID, gosdk.BroadcastBlock, "0.02okt", 200000, "")
cli := gosdk.NewClient(config)
_, _ = cli.Auth().QueryAccount("okexchain1ntvyep3suq5z7789g7d5dejwzameu08m6gh7yl")
```

#### 2.1 Query
##### 2.1.1 Get the account info

```go
func (ac authClient) QueryAccount(accAddrStr string) (account types.Account, err error) 
```

Enter parameters:

|  Name   | Type  |Mark|
|  ----  | ----  |----|
| accAddrStr  | string |account address in bech32|

Printed results:

```go
// Account interface
type Account interface {
    GetAddress() sdk.AccAddress
    SetAddress(sdk.AccAddress) error

    GetPubKey() crypto.PubKey
    SetPubKey(crypto.PubKey) error

    GetAccountNumber() uint64
    SetAccountNumber(uint64) error

    GetSequence() uint64
    SetSequence(uint64) error

    GetCoins() sdk.Coins
    SetCoins(sdk.Coins) error

    SpendableCoins(blockTime time.Time) sdk.Coins
    
    String() string
}
```

### 3 Token module

All token functions are defined in the package `token` under path `okexchain-go-sdk/module/token`. They can be invoked by the way like:

```go
import "github.com/okex/okexchain-go-sdk"

config, _ := gosdk.NewClientConfig(rpcURL, chainID, gosdk.BroadcastBlock, "0.02okt", 200000, "")
cli := gosdk.NewClient(config)
_, _ = cli.Token().Issue(info, defaultPassWd, "usdk", "usdk", "1000000000", "stable coins", memo, true, accountNumber, sequence)
```

#### 3.1 Query
##### 3.1.1 Get token info with a specific symbol, or the owner address

```go
func (tc tokenClient) QueryTokenInfo(ownerAddr, symbol string) (tokens []types.TokenResp, err error)
```

Enter parameters:

|  Name   | Type  |Mark|
|  ----  | ----  |----|
| ownerAddr  | string |owner address in bech32|
| symbol  | string |symbol of token|

Printed results:

```go
// TokenResp slice
type TokenResp struct {
    Description         string
    Symbol              string
    OriginalSymbol      string
    WholeName           string
    OriginalTotalSupply sdk.Dec
    Type                int
    Owner               sdk.AccAddress
    Mintable            bool
    TotalSupply         sdk.Dec
}
```

#### 3.2 Transaction
##### 3.2.1 Transfer coins to other receiver

```go
func (tc tokenClient) Send(fromInfo keys.Info, passWd, toAddrStr, coinsStr, memo string, accNum, seqNum uint64)
```

Enter parameters:

|  Name   | Type  |Mark|
|  ----  | ----  |----|
| fromInfo  | keys.Info |sender's key info|
| passWd  | string |sender's password|
| memo  | string |memo to note|
| accNum  | uint64 |account number of sender's account on chain|
| seqNum  | uint64 |sequence number of sender's account on chain|
| toAddrStr  | string |receiver's account address in bech32|
| coinsStr  | string |transfer amount, e.g. "1024.1024okt" |

Printed results:

```go
// Transaction response containing relevant tx data and metadata
type TxResponse struct {
    Height    int64
    TxHash    string
    Codespace string
    Code      uint32
    Data      string
    RawLog    string
    Logs      ABCIMessageLogs
    Info      string
    GasWanted int64
    GasUsed   int64
    Tx        Tx
    Timestamp string
}
```

##### 3.2.2 Multi-send coins to several receivers

```go
func (tc tokenClient) MultiSend(fromInfo keys.Info, passWd string, transfers []types.TransferUnit, memo string, accNum,
seqNum uint64) (resp sdk.TxResponse, err error) 
```

Enter parameters:

|  Name   | Type  |Mark|
|  ----  | ----  |----|
| fromInfo  | keys.Info |sender's key info|
| passWd  | string |sender's password|
| memo  | string |memo to note|
| accNum  | uint64 |account number of sender's account on chain|
| seqNum  | uint64 |sequence number of sender's account on chain|
| transfers  | []types.TransferUnit |set of data struct containing the receivers and transfer amount. A build function is shown on 1.2.1|

Printed results:

```go
// Transaction response containing relevant tx data and metadata
type TxResponse struct {
    Height    int64
    TxHash    string
    Codespace string
    Code      uint32
    Data      string
    RawLog    string
    Logs      ABCIMessageLogs
    Info      string
    GasWanted int64
    GasUsed   int64
    Tx        Tx
    Timestamp string
}
```

##### 3.2.3 Issue a kind of token

```go
func (tc tokenClient) Issue(fromInfo keys.Info, passWd, orgSymbol, wholeName, totalSupply, tokenDesc, memo string,
mintable bool, accNum, seqNum uint64) (resp sdk.TxResponse, err error)
```

Enter parameters:

|  Name   | Type  |Mark|
|  ----  | ----  |----|
| fromInfo  | keys.Info |sender's key info|
| passWd  | string |sender's password|
| memo  | string |memo to note|
| accNum  | uint64 |account number of sender's account on chain|
| seqNum  | uint64 |sequence number of sender's account on chain|
| orgSymbol  | string |symbol of the new token|
| wholeName  | string | whole name of the new token|
| totalSupply  | string | total supply of the new token|
| tokenDesc  | string | description of the token|
| mintable  | bool |  whether the token can be minted|

Printed results:

```go
// Transaction response containing relevant tx data and metadata
type TxResponse struct {
    Height    int64
    TxHash    string
    Codespace string
    Code      uint32
    Data      string
    RawLog    string
    Logs      ABCIMessageLogs
    Info      string
    GasWanted int64
    GasUsed   int64
    Tx        Tx
    Timestamp string
}
```

##### 3.2.4 Increase the total supply of a kind of token by its owner

```go
func (tc tokenClient) Mint(fromInfo keys.Info, passWd, coinsStr, memo string, accNum, seqNum uint64) (resp sdk.TxResponse,
err error)
```

Enter parameters:

|  Name   | Type  |Mark|
|  ----  | ----  |----|
| fromInfo  | keys.Info |sender's key info|
| passWd  | string |sender's password|
| memo  | string |memo to note|
| accNum  | uint64 |account number of sender's account on chain|
| seqNum  | uint64 |sequence number of sender's account on chain|
| coinsStr  | string | amount to mint, e.g. "1024.1024okt" |

Printed results:

```go
// Transaction response containing relevant tx data and metadata
type TxResponse struct {
    Height    int64
    TxHash    string
    Codespace string
    Code      uint32
    Data      string
    RawLog    string
    Logs      ABCIMessageLogs
    Info      string
    GasWanted int64
    GasUsed   int64
    Tx        Tx
    Timestamp string
}
```

##### 3.2.5 Decrease the total supply of a kind of token by burning a specific amount of that from the owner

```go
func (tc tokenClient) Burn(fromInfo keys.Info, passWd, coinsStr, memo string, accNum, seqNum uint64) (resp sdk.TxResponse,
err error)
```

Enter parameters:

|  Name   | Type  |Mark|
|  ----  | ----  |----|
| fromInfo  | keys.Info |sender's key info|
| passWd  | string |sender's password|
| memo  | string |memo to note|
| accNum  | uint64 |account number of sender's account on chain|
| seqNum  | uint64 |sequence number of sender's account on chain|
| coinsStr  | string | amount to burn, e.g. "1024.1024okt" |

Printed results:

```go
// Transaction response containing relevant tx data and metadata
type TxResponse struct {
    Height    int64
    TxHash    string
    Codespace string
    Code      uint32
    Data      string
    RawLog    string
    Logs      ABCIMessageLogs
    Info      string
    GasWanted int64
    GasUsed   int64
    Tx        Tx
    Timestamp string
}
```

##### 3.2.6 Modify the info of a specific token by its owner

```go
func (tc tokenClient) Edit(fromInfo keys.Info, passWd, symbol, description, wholeName, memo string, isDescEdit,
isWholeNameEdit bool, accNum, seqNum uint64) (resp sdk.TxResponse, err error)
```

Enter parameters:

|  Name   | Type  |Mark|
|  ----  | ----  |----|
| fromInfo  | keys.Info |sender's key info|
| passWd  | string |sender's password|
| memo  | string |memo to note|
| accNum  | uint64 |account number of sender's account on chain|
| seqNum  | uint64 |sequence number of sender's account on chain|
| symbol  | string | symbol of the token to modify |
| description  | string | new description to change |
| wholeName  | string | new whole name to change |
| isDescEdit  | bool | whether to modify the token description by this transaction |
| isWholeNameEdit  | bool | whether to modify the token whole name by this transaction |

Printed results:

```go
// Transaction response containing relevant tx data and metadata
type TxResponse struct {
    Height    int64
    TxHash    string
    Codespace string
    Code      uint32
    Data      string
    RawLog    string
    Logs      ABCIMessageLogs
    Info      string
    GasWanted int64
    GasUsed   int64
    Tx        Tx
    Timestamp string
}
```