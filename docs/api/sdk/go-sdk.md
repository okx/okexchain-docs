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

#### 2.2 Transaction