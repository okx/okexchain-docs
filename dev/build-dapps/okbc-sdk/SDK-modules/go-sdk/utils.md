# utils
All utils functions are defined in the package `utils` under path `okbchain-go-sdk/utils`. They can be invoked by the way like:

```go
import "github.com/okx/okbchain-go-sdk/utils"

_, _, _ = utils.CreateAccountWithMnemo(defaultMnemo, "turing", defaultPassWd)
```

## 1. Account function

## 1.1 Create a random key info with the given name and password

```go
func CreateAccount(name, passWd string) (info keys.Info, mnemo string, err error)
```

**Parameters**

|  Name   | Type  |Mark|
|  ----  | ----  |----|
| name  | string |account name|
| passWd  | string |account password|

**Results**

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

### 1.2 Create the key info with the given mnemonic, name and password

```go
func CreateAccountWithMnemo(mnemonic, name, passWd string) (info keys.Info, mnemo string, err error)
```

**Parameters**

|  Name   | Type  |Mark|
|  ----  | ----  |----|
| name  | string |account name|
| passWd  | string |account password|
| mnemonic  | string |account mnemonic|

**Results**

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

### 1.3 Create the key info with the given private-key string, name and password

```go
func CreateAccountWithPrivateKey(privateKey, name, passWd string) (info keys.Info, err error)
```

**Parameters**

|  Name   | Type  |Mark|
|  ----  | ----  |----|
| name  | string |account name|
| passWd  | string |account password|
| privateKey  | string |account private-key|

**Results**

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

### 1.4 Create a random mnemonic

```go
func GenerateMnemonic() (mnemo string, err error)
```

**Results**

```go
// Mnemonic
string
```

### 1.5 Generate private key from mnemonic

```go
func GeneratePrivateKeyFromMnemo(mnemonic string) (privKey string, err error)
```

**Parameters**

|  Name   | Type  |Mark|
|  ----  | ----  |----|
| mnemonic  | string |account mnemonic|

**Results**

```go
// Private Key
string
```

## 2 Token function

### 2.1 Parse the whole multi-send info string into TransferUnit

```go
func ParseTransfersStr(str string) ([]types.TransferUnit, error) 
```

**Parameters**

|  Name   | Type  |Mark|
|  ----  | ----  |----|
| str  | string |transfer unit info in string, e.g. "addr1 1okb\naddr2 2okb"|

**Results**

```go
// TransferUnit slice 
type TransferUnit struct {
    To    sdk.AccAddress
    Coins sdk.SysCoins
}
```

## 3. Order utils function

### 3.1 Filter the order IDs from the new order's tx response

```go
func GetOrderIDsFromResponse(txResp *sdk.TxResponse) (orderIDs []string, err error) 
```

**Parameters**

|  Name   | Type  |Mark|
|  ----  | ----  |----|
| txResp  | *sdk.TxResponse |the pointer of the new order's tx response|

**Results**

```go
// orderID slice
[]string
```
