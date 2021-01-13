## Go SDK

github: https://github.com/okex/okexchain-go-sdk

---

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

#### 1.3 Order utils function
##### 1.3.1 Filter the order IDs from the new order's tx response

```go
func GetOrderIDsFromResponse(txResp *sdk.TxResponse) (orderIDs []string, err error) 
```

Enter parameters:

|  Name   | Type  |Mark|
|  ----  | ----  |----|
| txResp  | *sdk.TxResponse |the pointer of the new order's tx response|

Printed results:

```go
// orderID slice
[]string
```

---

### 2 Auth module

All auth functions are defined in the package `auth` under path `okexchain-go-sdk/module/auth`. They can be invoked by the way like:

```go
import "github.com/okex/okexchain-go-sdk"

config, _ := gosdk.NewClientConfig(rpcURL, chainID, gosdk.BroadcastBlock, "0.02okt", 200000, "")
cli := gosdk.NewClient(config)
_, _ = cli.Auth().QueryAccount(accAddrStr)
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

---

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
func (tc tokenClient) MultiSend(fromInfo keys.Info, passWd string, transfers []types.TransferUnit, memo string, accNum, seqNum uint64) (resp sdk.TxResponse, err error) 
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
func (tc tokenClient) Issue(fromInfo keys.Info, passWd, orgSymbol, wholeName, totalSupply, tokenDesc, memo string, mintable bool, accNum, seqNum uint64) (resp sdk.TxResponse, err error)
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
func (tc tokenClient) Mint(fromInfo keys.Info, passWd, coinsStr, memo string, accNum, seqNum uint64) (resp sdk.TxResponse, err error)
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
func (tc tokenClient) Burn(fromInfo keys.Info, passWd, coinsStr, memo string, accNum, seqNum uint64) (resp sdk.TxResponse, err error)
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
func (tc tokenClient) Edit(fromInfo keys.Info, passWd, symbol, description, wholeName, memo string, isDescEdit, isWholeNameEdit bool, accNum, seqNum uint64) (resp sdk.TxResponse, err error)
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

---

### 4 Staking module

All staking functions are defined in the package `staking` under path `okexchain-go-sdk/module/staking`. They can be invoked by the way like:

```go
import "github.com/okex/okexchain-go-sdk"

config, _ := gosdk.NewClientConfig(rpcURL, chainID, gosdk.BroadcastBlock, "0.02okt", 200000, "")
cli := gosdk.NewClient(config)
_, _ = cli.Staking().Deposit(info, defaultPassWd, depositAmount, memo, accountNumber, sequence)
```

#### 4.1 Query
##### 4.1.1 Get all the validators info

```go
func (sc stakingClient) QueryValidators() (vals []types.Validator, err error) 
```

Printed results:

```go
// Validator slice
type Validator struct {
    OperatorAddress         sdk.ValAddress
    ConsPubKey              crypto.PubKey
    Jailed                  bool
    Status                  sdk.BondStatus
    Tokens                  sdk.Int
    DelegatorShares         sdk.Dec
    Description             Description
    UnbondingHeight         int64
    UnbondingCompletionTime time.Time
    Commission              Commission
    MinSelfDelegation       sdk.Dec
}
```

##### 4.1.2 Get the info of a specific validator

```go
func (sc stakingClient) QueryValidator(valAddrStr string) (val types.Validator, err error)
```

Enter parameters:

|  Name   | Type  |Mark|
|  ----  | ----  |----|
| valAddrStr  | string |validator address in bech32|

Printed results:

```go
// Validator
type Validator struct {
    OperatorAddress         sdk.ValAddress
    ConsPubKey              crypto.PubKey
    Jailed                  bool
    Status                  sdk.BondStatus
    Tokens                  sdk.Int
    DelegatorShares         sdk.Dec
    Description             Description
    UnbondingHeight         int64
    UnbondingCompletionTime time.Time
    Commission              Commission
    MinSelfDelegation       sdk.Dec
}
```

##### 4.1.3 Get the detail info of a delegator

```go
func (sc stakingClient) QueryDelegator(delAddrStr string) (delResp types.DelegatorResponse, err error) 
```

Enter parameters:

|  Name   | Type  |Mark|
|  ----  | ----  |----|
| delAddrStr  | string |delegator address in bech32|

Printed results:

```go
// DelegatorResponse
type DelegatorResponse struct {
    DelegatorAddress     sdk.AccAddress
    ValidatorAddresses   []sdk.ValAddress
    Shares               sdk.Dec
    Tokens               sdk.Dec
    UnbondedTokens       sdk.Dec
    CompletionTime       time.Time
    IsProxy              bool
    TotalDelegatedTokens sdk.Dec
    ProxyAddress         sdk.AccAddress
}
```

#### 4.2 Transaction
##### 4.2.1 Create a new validator

```go
func (sc stakingClient) CreateValidator(fromInfo keys.Info, passWd, pubkeyStr, moniker, identity, website, details, memo string, accNum, seqNum uint64) (resp sdk.TxResponse, err error)
```

Enter parameters:

|  Name   | Type  |Mark|
|  ----  | ----  |----|
| fromInfo  | keys.Info |sender's key info|
| passWd  | string |sender's password|
| memo  | string |memo to note|
| accNum  | uint64 |account number of sender's account on chain|
| seqNum  | uint64 |sequence number of sender's account on chain|
| pubkeyStr  | string |bech32 encoded pubkey of the validator|
| moniker  | string |validator's name|
| identity  | string |validator's identity|
| website  | string |validator's website |
| details  | string | validator's details |

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

##### 4.2.2 Edit the description on a validator by the owner

```go
func (sc stakingClient) EditValidator(fromInfo keys.Info, passWd, moniker, identity, website, details, memo string, accNum, seqNum uint64) (resp sdk.TxResponse, err error)
```

Enter parameters:

|  Name   | Type  |Mark|
|  ----  | ----  |----|
| fromInfo  | keys.Info |sender's key info|
| passWd  | string |sender's password|
| memo  | string |memo to note|
| accNum  | uint64 |account number of sender's account on chain|
| seqNum  | uint64 |sequence number of sender's account on chain|
| moniker  | string |validator's new name to change|
| identity  | string |validator's new identity to change|
| website  | string |validator's new website to change |
| details  | string | validator's new details to change |

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

##### 4.2.3 Deregister the validator and withdraw the min-self-delegation

```go
func (sc stakingClient) DestroyValidator(fromInfo keys.Info, passWd string, memo string, accNum, seqNum uint64) (resp sdk.TxResponse, err error)
```

Enter parameters:

|  Name   | Type  |Mark|
|  ----  | ----  |----|
| fromInfo  | keys.Info |sender's key info|
| passWd  | string |sender's password|
| memo  | string |memo to note|
| accNum  | uint64 |account number of sender's account on chain|
| seqNum  | uint64 |sequence number of sender's account on chain|

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

##### 4.2.4 Deposit an amount of okt to delegator account

```go
func (sc stakingClient) Deposit(fromInfo keys.Info, passWd, coinsStr, memo string, accNum, seqNum uint64) (resp sdk.TxResponse, err error)
```

Enter parameters:

|  Name   | Type  |Mark|
|  ----  | ----  |----|
| fromInfo  | keys.Info |sender's key info|
| passWd  | string |sender's password|
| memo  | string |memo to note|
| accNum  | uint64 |account number of sender's account on chain|
| seqNum  | uint64 |sequence number of sender's account on chain|
| coinsStr  | string |amount to deposit, e.g. "1024.1024okt"|

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

##### 4.2.5 Withdraw an amount of okt and the corresponding shares from all validators

```go
func (sc stakingClient) Withdraw(fromInfo keys.Info, passWd, coinsStr, memo string, accNum, seqNum uint64) (resp sdk.TxResponse, err error)
```

Enter parameters:

|  Name   | Type  |Mark|
|  ----  | ----  |----|
| fromInfo  | keys.Info |sender's key info|
| passWd  | string |sender's password|
| memo  | string |memo to note|
| accNum  | uint64 |account number of sender's account on chain|
| seqNum  | uint64 |sequence number of sender's account on chain|
| coinsStr  | string |amount to withdraw, e.g. "1024.1024okt"|

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

##### 4.2.6 Add shares to some specific validators

```go
func (sc stakingClient) AddShares(fromInfo keys.Info, passWd string, valAddrsStr []string, memo string, accNum, seqNum uint64) (resp sdk.TxResponse, err error)
```

Enter parameters:

|  Name   | Type  |Mark|
|  ----  | ----  |----|
| fromInfo  | keys.Info |sender's key info|
| passWd  | string |sender's password|
| memo  | string |memo to note|
| accNum  | uint64 |account number of sender's account on chain|
| seqNum  | uint64 |sequence number of sender's account on chain|
| valAddrsStr  | []string |set of target validators' addresses in bech32|

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

##### 4.2.7 Register the identity of proxy

```go
func (sc stakingClient) RegisterProxy(fromInfo keys.Info, passWd, memo string, accNum, seqNum uint64) (resp sdk.TxResponse, err error) 
```

Enter parameters:

|  Name   | Type  |Mark|
|  ----  | ----  |----|
| fromInfo  | keys.Info |sender's key info|
| passWd  | string |sender's password|
| memo  | string |memo to note|
| accNum  | uint64 |account number of sender's account on chain|
| seqNum  | uint64 |sequence number of sender's account on chain|

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

##### 4.2.8 Deregister the identity of proxy

```go
func (sc stakingClient) UnregisterProxy(fromInfo keys.Info, passWd, memo string, accNum, seqNum uint64) (resp sdk.TxResponse, err error)
```

Enter parameters:

|  Name   | Type  |Mark|
|  ----  | ----  |----|
| fromInfo  | keys.Info |sender's key info|
| passWd  | string |sender's password|
| memo  | string |memo to note|
| accNum  | uint64 |account number of sender's account on chain|
| seqNum  | uint64 |sequence number of sender's account on chain|

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

##### 4.2.9 Bind the staking tokens to a proxy

```go
func (sc stakingClient) BindProxy(fromInfo keys.Info, passWd, proxyAddrStr, memo string, accNum, seqNum uint64) (resp sdk.TxResponse, err error)
```

Enter parameters:

|  Name   | Type  |Mark|
|  ----  | ----  |----|
| fromInfo  | keys.Info |sender's key info|
| passWd  | string |sender's password|
| memo  | string |memo to note|
| accNum  | uint64 |account number of sender's account on chain|
| seqNum  | uint64 |sequence number of sender's account on chain|
| proxyAddrStr  | string |proxy's address in bech32|

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

##### 4.2.10 Unbind the staking tokens from a proxy

```go
func (sc stakingClient) UnbindProxy(fromInfo keys.Info, passWd, memo string, accNum, seqNum uint64) (resp sdk.TxResponse, err error)
```

Enter parameters:

|  Name   | Type  |Mark|
|  ----  | ----  |----|
| fromInfo  | keys.Info |sender's key info|
| passWd  | string |sender's password|
| memo  | string |memo to note|
| accNum  | uint64 |account number of sender's account on chain|
| seqNum  | uint64 |sequence number of sender's account on chain|

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

---

### 5 Distribution module

All distribution functions are defined in the package `distribution` under path `okexchain-go-sdk/module/distribution`. They can be invoked by the way like:

```go
import "github.com/okex/okexchain-go-sdk"

config, _ := gosdk.NewClientConfig(rpcURL, chainID, gosdk.BroadcastBlock, "0.02okt", 200000, "")
cli := gosdk.NewClient(config)
_, _ = cli.Distribution().WithdrawRewards(info, defaultPassWd, valAddrStr, memo, accountNumber, sequence)
```

#### 5.1 Transaction
##### 5.1.1 Change the withdraw address of validator to receive rewards

```go
func (dc distrClient) SetWithdrawAddr(fromInfo keys.Info, passWd, withdrawAddrStr, memo string, accNum, seqNum uint64) (resp sdk.TxResponse, err error) 
```

Enter parameters:

|  Name   | Type  |Mark|
|  ----  | ----  |----|
| fromInfo  | keys.Info |sender's key info|
| passWd  | string |sender's password|
| memo  | string |memo to note|
| accNum  | uint64 |account number of sender's account on chain|
| seqNum  | uint64 |sequence number of sender's account on chain|
| withdrawAddrStr  | string | account address in bech32 to receive the rewards of validator|

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

##### 5.1.2 Withdraw the rewards of validator by the owner

```go
func (dc distrClient) WithdrawRewards(fromInfo keys.Info, passWd, valAddrStr, memo string, accNum, seqNum uint64) (resp sdk.TxResponse, err error)
```

Enter parameters:

|  Name   | Type  |Mark|
|  ----  | ----  |----|
| fromInfo  | keys.Info |sender's key info|
| passWd  | string |sender's password|
| memo  | string |memo to note|
| accNum  | uint64 |account number of sender's account on chain|
| seqNum  | uint64 |sequence number of sender's account on chain|
| valAddrStr  | string | target validator's address in bech32|

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

---

### 6 Slashing module

All slashing functions are defined in the package `slashing` under path `okexchain-go-sdk/module/slashing`. They can be invoked by the way like:

```go
import "github.com/okex/okexchain-go-sdk"

config, _ := gosdk.NewClientConfig(rpcURL, chainID, gosdk.BroadcastBlock, "0.02okt", 200000, "")
cli := gosdk.NewClient(config)
_, _ = cli.Slashing().Unjail(info, defaultPassWd, memo, accountNumber, sequence)
```

#### 6.1 Transaction
##### 6.1.1 Unjail the own validator which was jailed by slashing

```go
func (sc slashingClient) Unjail(fromInfo keys.Info, passWd, memo string, accNum, seqNum uint64) (resp sdk.TxResponse, err error)
```

Enter parameters:

|  Name   | Type  |Mark|
|  ----  | ----  |----|
| fromInfo  | keys.Info |sender's key info|
| passWd  | string |sender's password|
| memo  | string |memo to note|
| accNum  | uint64 |account number of sender's account on chain|
| seqNum  | uint64 |sequence number of sender's account on chain|

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

---

### 7 Dex module

All dex functions are defined in the package `dex` under path `okexchain-go-sdk/module/dex`. They can be invoked by the way like:

```go
import "github.com/okex/okexchain-go-sdk"

config, _ := gosdk.NewClientConfig(rpcURL, chainID, gosdk.BroadcastBlock, "0.02okt", 200000, "")
cli := gosdk.NewClient(config)
_, _ = cli.Dex().RegisterDexOperator(info, defaultPassWd, "", website, memo, accountNumber, sequence)
```

#### 7.1 Query
##### 7.1.1 Get token pair info

```go
func (dc dexClient) QueryProducts(ownerAddr string, page, perPage int) (tokenPairs []types.TokenPair, err error)
```

Enter parameters:

|  Name   | Type  |Mark|
|  ----  | ----  |----|
| ownerAddr  | string |owner account address in bech32 of a token pair. If it's set empty, all token pairs' info will be returned|
| page  | int |page number|
| perPage  | int | items number per page|

Printed results:

```go
// TokenPair slice
type TokenPair struct {
    BaseAssetSymbol  string
    QuoteAssetSymbol string
    InitPrice        sdk.Dec
    MaxPriceDigit    int64
    MaxQuantityDigit int64
    MinQuantity      sdk.Dec
    ID               uint64
    Delisting        bool
    Owner            sdk.AccAddress
    Deposits         sdk.SysCoin
    BlockHeight      int64
}
```

#### 7.2 Transaction
##### 7.2.1 Register a dex operator

```go
func (dc dexClient) RegisterDexOperator(fromInfo keys.Info, passWd, handleFeeAddrStr, website, memo string, accNum, seqNum uint64) (resp sdk.TxResponse, err error) 
```

Enter parameters:

|  Name   | Type  |Mark|
|  ----  | ----  |----|
| fromInfo  | keys.Info |sender's key info|
| passWd  | string |sender's password|
| memo  | string |memo to note|
| accNum  | uint64 |account number of sender's account on chain|
| seqNum  | uint64 |sequence number of sender's account on chain|
| handleFeeAddrStr  | string |account address in bech32 to receive fees of tokenpair's matched order|
| website  | string |a valid http link to describe DEXOperator which ends with "operator.json" defined in OIP-{xxx}，and its length should be less than 1024|

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

##### 7.2.2 Edit the dex operator

```go
func (dc dexClient) EditDexOperator(fromInfo keys.Info, passWd, handleFeeAddrStr, website, memo string, accNum, seqNum uint64) (resp sdk.TxResponse, err error)
```

Enter parameters:

|  Name   | Type  |Mark|
|  ----  | ----  |----|
| fromInfo  | keys.Info |sender's key info|
| passWd  | string |sender's password|
| memo  | string |memo to note|
| accNum  | uint64 |account number of sender's account on chain|
| seqNum  | uint64 |sequence number of sender's account on chain|
| handleFeeAddrStr  | string |new account address in bech32 to receive fees of tokenpair's matched order to change|
| website  | string |a new valid http link to describe DEXOperator which ends with "operator.json" defined in OIP-{xxx} to change|

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

##### 7.2.3 List a trading pair on dex

```go
func (dc dexClient) List(fromInfo keys.Info, passWd, baseAsset, quoteAsset, initPriceStr, memo string, accNum, seqNum uint64) (resp sdk.TxResponse, err error)
```

Enter parameters:

|  Name   | Type  |Mark|
|  ----  | ----  |----|
| fromInfo  | keys.Info |sender's key info|
| passWd  | string |sender's password|
| memo  | string |memo to note|
| accNum  | uint64 |account number of sender's account on chain|
| seqNum  | uint64 |sequence number of sender's account on chain|
| baseAsset  | string |token symbol as base asset|
| quoteAsset  | string |token symbol as quote asset|
| initPriceStr  | string |initial price of the trading pair on dex|

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

##### 7.2.4 Deposit okt to a specific product

```go
func (dc dexClient) Deposit(fromInfo keys.Info, passWd, product, amountStr, memo string, accNum, seqNum uint64) (resp sdk.TxResponse, err error)
```

Enter parameters:

|  Name   | Type  |Mark|
|  ----  | ----  |----|
| fromInfo  | keys.Info |sender's key info|
| passWd  | string |sender's password|
| memo  | string |memo to note|
| accNum  | uint64 |account number of sender's account on chain|
| seqNum  | uint64 |sequence number of sender's account on chain|
| product  | string |the name of target token pair|
| amountStr  | string |amount of okt to deposit to the product |

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

##### 7.2.5 Withdraw okt from a specific product

```go
func (dc dexClient) Withdraw(fromInfo keys.Info, passWd, product, amountStr, memo string, accNum, seqNum uint64) (resp sdk.TxResponse, err error)
```

Enter parameters:

|  Name   | Type  |Mark|
|  ----  | ----  |----|
| fromInfo  | keys.Info |sender's key info|
| passWd  | string |sender's password|
| memo  | string |memo to note|
| accNum  | uint64 |account number of sender's account on chain|
| seqNum  | uint64 |sequence number of sender's account on chain|
| product  | string |the name of target token pair|
| amountStr  | string |amount of okt to withdraw from the product |

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

##### 7.2.6 Change the owner of a product

```go
func (dc dexClient) TransferOwnership(fromInfo keys.Info, passWd, product, toAddrStr, memo string, accNum, seqNum uint64) (resp sdk.TxResponse, err error) 
```

Enter parameters:

|  Name   | Type  |Mark|
|  ----  | ----  |----|
| fromInfo  | keys.Info |sender's key info|
| passWd  | string |sender's password|
| memo  | string |memo to note|
| accNum  | uint64 |account number of sender's account on chain|
| seqNum  | uint64 |sequence number of sender's account on chain|
| product  | string |the name of target token pair|
| toAddrStr  | string |account address in bech32 to transfer the ownership to |

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

##### 7.2.7 Confirm the transfer-ownership of a product

```go
func (dc dexClient) ConfirmOwnership(fromInfo keys.Info, passWd, product, memo string, accNum, seqNum uint64) (resp sdk.TxResponse, err error) 
```

Enter parameters:

|  Name   | Type  |Mark|
|  ----  | ----  |----|
| fromInfo  | keys.Info |sender's key info|
| passWd  | string |sender's password|
| memo  | string |memo to note|
| accNum  | uint64 |account number of sender's account on chain|
| seqNum  | uint64 |sequence number of sender's account on chain|
| product  | string |the name of target token pair to confirm|

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

---

### 8 Order module

All order functions are defined in the package `order` under path `okexchain-go-sdk/module/order`. They can be invoked by the way like:

```go
import "github.com/okex/okexchain-go-sdk"

config, _ := gosdk.NewClientConfig(rpcURL, chainID, gosdk.BroadcastBlock, "0.02okt", 200000, "")
cli := gosdk.NewClient(config)
_, _ = cli.Order().QueryDepthBook(productName)
```

#### 8.1 Query
##### 8.1.1 Get the current depth book info of a specific product

```go
func (oc orderClient) QueryDepthBook(product string) (depthBook types.BookRes, err error)
```

Enter parameters:

|  Name   | Type  |Mark|
|  ----  | ----  |----|
| product  | string |the name of target token pair|

Printed results:

```go
// BookRes
type BookRes struct {
    Asks []BookResItem
    Bids []BookResItem
}

// BookResItem - field of BookRes
type BookResItem struct {
    Price    string
    Quantity string
}
```

##### 8.1.2 Get the detail info of an order by its order ID

```go
func (oc orderClient) QueryOrderDetail(orderID string) (orderDetail types.OrderDetail, err error)
```

Enter parameters:

|  Name   | Type  |Mark|
|  ----  | ----  |----|
| orderID  | string |target order ID|

Printed results:

```go
// Order
type Order struct {
    TxHash            string
    OrderID           string
    Sender            sdk.AccAddress
    Product           string
    Side              string
    Price             sdk.Dec
    Quantity          sdk.Dec
    Status            int64
    FilledAvgPrice    sdk.Dec
    RemainQuantity    sdk.Dec
    RemainLocked      sdk.Dec
    Timestamp         int64
    OrderExpireBlocks int64
    FeePerBlock       sdk.SysCoin
    ExtraInfo         string
}
```

#### 8.2 Transaction
##### 8.2.1 Place orders with some detail info

```go
func (oc orderClient) NewOrders(fromInfo keys.Info, passWd, products, sides, prices, quantities, memo string, accNum, seqNum uint64) (resp sdk.TxResponse, err error)
```

Enter parameters:

|  Name   | Type  |Mark|
|  ----  | ----  |----|
| fromInfo  | keys.Info |sender's key info|
| passWd  | string |sender's password|
| memo  | string |memo to note|
| accNum  | uint64 |account number of sender's account on chain|
| seqNum  | uint64 |sequence number of sender's account on chain|
| products  | string |target products in order|
| sides  | string |the sides of each order in order. Side is the choice between "BUY" and "SELL"|
| prices  | string |the prices in order|
| quantities  | string |the quantities in order|

for example:

```go
	_, _ = cli.Order().NewOrders(info, defaultPassWd, "usdk_okt,eth_okt,btc_okt", "SELL,BUY,SELL", "2,3,4", "1024.1024,50.001,50.001", memo, accAccountNumber, accSequenceNumber)
```

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

Note:
The order IDs will be returned in TxResponse's Log. It's recommended to use order utils function to filter the order IDs out at 1.3.1.

##### 8.2.2 Cancel orders by orderIDs

```go
func (oc orderClient) CancelOrders(fromInfo keys.Info, passWd, orderIDs, memo string, accNum, seqNum uint64) (resp sdk.TxResponse, err error) 
```

Enter parameters:

|  Name   | Type  |Mark|
|  ----  | ----  |----|
| fromInfo  | keys.Info |sender's key info|
| passWd  | string |sender's password|
| memo  | string |memo to note|
| accNum  | uint64 |account number of sender's account on chain|
| seqNum  | uint64 |sequence number of sender's account on chain|
| orderIDs  | string |the set of order IDs to cancel the orders|

for example:

```go
    _, _ = cli.Order().CancelOrders(info, defaultPassWd, "ID0000002032-1,ID0000002032-2", memo, accAccountNumber, accSequenceNumber)
```

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

---

### 9 Backend module

All order functions are defined in the package `backend` under path `okexchain-go-sdk/module/backend`. They can be invoked by the way like:

```go
import "github.com/okex/okexchain-go-sdk"

config, _ := gosdk.NewClientConfig(rpcURL, chainID, gosdk.BroadcastBlock, "0.02okt", 200000, "")
cli := gosdk.NewClient(config)
_, _ = cli.Backend().QueryCandles("usdk_okt", 60, 10)
```

#### 9.1 Query
##### 9.1.1 Get the candles data of a specific product

```go
func (bc backendClient) QueryCandles(product string, granularity, size int) (candles [][]string, err error)
```

Enter parameters:

|  Name   | Type  |Mark|
|  ----  | ----  |----|
| product  | string |the name of target token pair|
| granularity  | int | seconds in unit, [60/180/300/900/1800/3600/7200/14400/21600/43200/86400/604800]|
| size  | int |the limited number of items, 1000 at most|

Printed results:

```go
// candles data
[][]string
```

##### 9.1.2 Get all tickers' data

```go
func (bc backendClient) QueryTickers(product string, count ...int) (tickers []types.Ticker, err error) 
```

Enter parameters:

|  Name   | Type  |Mark|
|  ----  | ----  |----|
| product  | string |the name of target token pair|
| count  | int |ticker count (default 10)|

Printed results:

```go
// ticker slice
type Ticker struct {
    Symbol           string
    Product          string
    Timestamp        int64
    Open             float64
    Close            float64
    High             float64
    Low              float64
    Price            float64
    Volume           float64
    Change           float64
    ChangePercentage string
}
```

##### 9.1.3 Get the specific product's record of recent transactions

```go
func (bc backendClient) QueryRecentTxRecord(product string, start, end, page, perPage int) (record []types.MatchResult, err error) 
```

Enter parameters:

|  Name   | Type  |Mark|
|  ----  | ----  |----|
| product  | string |the name of target token pair|
| start  | int |filter txs by start timestamp|
| end  | int |filter txs by end timestamp|
| page  | int |page number|
| perPage  | int | item's number per page|

Printed results:

```go
// MatchResult slice
type MatchResult struct {
    Timestamp   int64
    BlockHeight int64
    Product     string
    Price       float64
    Quantity    float64
}
```

##### 9.1.4 Get the open orders of a specific account

```go
func (bc backendClient) QueryOpenOrders(addrStr, product, side string, start, end, page, perPage int) (orders []types.Order,err error)
```

Enter parameters:

|  Name   | Type  |Mark|
|  ----  | ----  |----|
| addrStr  | string |target account address in bech32|
| product  | string |the name of target token pair|
| side  | string |"BUY" or "SELL"|
| start  | int |filter txs by start timestamp|
| end  | int |filter txs by end timestamp|
| page  | int |page number|
| perPage  | int | item's number per page|

Printed results:

```go
// Order slice
type Order struct {
    TxHash         string
    OrderID        string
    Sender         string
    Product        string
    Side           string
    Price          string
    Quantity       string
    Status         int64
    FilledAvgPrice string
    RemainQuantity string
    Timestamp      int64
}
```

##### 9.1.5 Get the closed orders of a specific account

```go
func (bc backendClient) QueryClosedOrders(addrStr, product, side string, start, end, page, perPage int) (orders []types.Order,err error)
```

Enter parameters:

|  Name   | Type  |Mark|
|  ----  | ----  |----|
| addrStr  | string |target account address in bech32|
| product  | string |the name of target token pair|
| side  | string |"BUY" or "SELL"|
| start  | int |filter txs by start timestamp|
| end  | int |filter txs by end timestamp|
| page  | int |page number|
| perPage  | int | item's number per page|

Printed results:

```go
// Order slice
type Order struct {
    TxHash         string
    OrderID        string
    Sender         string
    Product        string
    Side           string
    Price          string
    Quantity       string
    Status         int64
    FilledAvgPrice string
    RemainQuantity string
    Timestamp      int64
}
```

##### 9.1.6 Get the deals info of a specific account

```go
func (bc backendClient) QueryDeals(addrStr, product, side string, start, end, page, perPage int) (deals []types.Deal, err error)
```

Enter parameters:

|  Name   | Type  |Mark|
|  ----  | ----  |----|
| addrStr  | string |target account address in bech32|
| product  | string |the name of target token pair|
| side  | string |"BUY" or "SELL"|
| start  | int |filter txs by start timestamp|
| end  | int |filter txs by end timestamp|
| page  | int |page number|
| perPage  | int | item's number per page|

Printed results:

```go
// Deal slice
type Deal struct {
    Timestamp   int64
    BlockHeight int64
    OrderID     string
    Sender      string
    Product     string
    Side        string
    Price       float64
    Quantity    float64
    Fee         string
    FeeReceiver string
}
```

##### 9.1.7 Get the transactions of a specific account

```go
func (bc backendClient) QueryTransactions(addrStr string, typeCode, start, end, page, perPage int) (transactions []types.Transaction, err error)
```

Enter parameters:

|  Name   | Type  |Mark|
|  ----  | ----  |----|
| addrStr  | string |target account address in bech32|
| typeCode  | string |filter txs by txType, 1:Transfer 2:NewOrder 3:CancelOrder|
| side  | string |"BUY" or "SELL"|
| start  | int |filter txs by start timestamp|
| end  | int |filter txs by end timestamp|
| page  | int |page number|
| perPage  | int | item's number per page|

Printed results:

```go
// Transaction slice
type Transaction struct {
    TxHash    string
    Type      int64
    Address   string
    Symbol    string
    Side      int64
    Quantity  string
    Fee       string
    Timestamp int64
}
```

---

### 10 Ammswap module

All ammswap functions are defined in the package `ammswap` under path `okexchain-go-sdk/module/ammswap`. They can be invoked by the way like:

```go
import "github.com/okex/okexchain-go-sdk"

config, _ := gosdk.NewClientConfig(rpcURL, chainID, gosdk.BroadcastBlock, "0.02okt", 200000, "")
cli := gosdk.NewClient(config)
_, _ = cli.AmmSwap().QuerySwapTokenPairs()
```

#### 10.1 Query
##### 10.1.1 Get all the swap token pairs

```go
func (ac ammswapClient) QuerySwapTokenPairs() (exchanges []types.SwapTokenPair, err error)
```

Printed results:

```go
// SwapTokenPair slice
type SwapTokenPair struct {
    QuotePooledCoin sdk.SysCoin
    BasePooledCoin  sdk.SysCoin
    PoolTokenName   string
}
```

##### 10.1.2 Get a specific swap token pair

```go
func (ac ammswapClient) QuerySwapTokenPair(token string) (exchange types.SwapTokenPair, err error)
```

Enter parameters:

|  Name   | Type  |Mark|
|  ----  | ----  |----|
| token  | string |the name of target swap token pair|

Printed results:

```go
// swap token pair info
type SwapTokenPair struct {
    QuotePooledCoin sdk.SysCoin
    BasePooledCoin  sdk.SysCoin
    PoolTokenName   string
}
```

##### 10.1.3 Get how much token would get from a swap pool

```go
func (ac ammswapClient) QueryBuyAmount(tokenToSellStr, tokenDenomToBuy string) (amount sdk.Dec, err error)
```

Enter parameters:

|  Name   | Type  |Mark|
|  ----  | ----  |----|
| tokenToSellStr  | string |the amount of a given token to sell|
| tokenDenomToBuy  | string |target token name to buy|

Printed results:

```go
// amount of target token to buy
sdk.Dec
```

#### 10.2 Transaction
##### 10.2.1 Create a token pair in swap module

```go
CreateExchange(fromInfo keys.Info, passWd, baseToken, quoteToken, memo string, accNum, seqNum uint64) (resp sdk.TxResponse, err error)
```

Enter parameters:

|  Name   | Type  |Mark|
|  ----  | ----  |----|
| fromInfo  | keys.Info |sender's key info|
| passWd  | string |sender's password|
| memo  | string |memo to note|
| accNum  | uint64 |account number of sender's account on chain|
| seqNum  | uint64 |sequence number of sender's account on chain|
| baseToken  | string |the base token name required to create an AMM swap pair|
| quoteToken  | string |the quote token name required to create an AMM swap pair|

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

##### 10.2.2 Add the number of liquidity of a token pair

```go
func (ac ammswapClient) AddLiquidity(fromInfo keys.Info, passWd, minLiquidity, maxBaseAmount, quoteAmount, deadlineDuration, memo string, accNum, seqNum uint64) (resp sdk.TxResponse, err error) 
```

Enter parameters:

|  Name   | Type  |Mark|
|  ----  | ----  |----|
| fromInfo  | keys.Info |sender's key info|
| passWd  | string |sender's password|
| memo  | string |memo to note|
| accNum  | uint64 |account number of sender's account on chain|
| seqNum  | uint64 |sequence number of sender's account on chain|
| minLiquidity  | string |minimum number of sender will mint if total pool token supply is greater than 0|
| maxBaseAmount  | string |maximum number of base amount deposited. deposits max amount if total pool token supply is 0|
| quoteAmount  | string |the number of quote amount to add liquidity|
| deadlineDuration  | duration after which this transaction can no longer be executed such as "300ms", "1.5h" or "2h45m". valid time units are "ns", "us" (or "µs"), "ms", "s", "m", "h"|

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

##### 10.2.3 Remove the number of liquidity of a token pair

```go
func (ac ammswapClient) RemoveLiquidity(fromInfo keys.Info, passWd, liquidity, minBaseAmount, minQuoteAmount, deadlineDuration, memo string, accNum, seqNum uint64) (resp sdk.TxResponse, err error) 
```

Enter parameters:

|  Name   | Type  |Mark|
|  ----  | ----  |----|
| fromInfo  | keys.Info |sender's key info|
| passWd  | string |sender's password|
| memo  | string |memo to note|
| accNum  | uint64 |account number of sender's account on chain|
| seqNum  | uint64 |sequence number of sender's account on chain|
| liquidity  | string | number of liquidity to burn|
| minBaseAmount  | string |minimum number of base amount withdrawn|
| minQuoteAmount  | string |minimum number of quote amount withdrawn|
| deadlineDuration  | duration after which this transaction can no longer be executed such as "300ms", "1.5h" or "2h45m". valid time units are "ns", "us" (or "µs"), "ms", "s", "m", "h"|

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

##### 10.2.4 Swap the number of specific token with another type of token

```go
func (ac ammswapClient) TokenSwap(fromInfo keys.Info, passWd, soldTokenAmount, minBoughtTokenAmount, recipient, deadlineDuration, memo string, accNum, seqNum uint64) (resp sdk.TxResponse, err error) 
```

Enter parameters:

|  Name   | Type  |Mark|
|  ----  | ----  |----|
| fromInfo  | keys.Info |sender's key info|
| passWd  | string |sender's password|
| memo  | string |memo to note|
| accNum  | uint64 |account number of sender's account on chain|
| seqNum  | uint64 |sequence number of sender's account on chain|
| soldTokenAmount  | string | amount of token expected to sell|
| minBoughtTokenAmount  | string |minimum amount of token expected to buy|
| recipient  | string |account address in bech32 to receive the amount bought|
| deadlineDuration  | duration after which this transaction can no longer be executed such as "300ms", "1.5h" or "2h45m". valid time units are "ns", "us" (or "µs"), "ms", "s", "m", "h"|

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

---

### 11 Farm module

All farm functions are defined in the package `farm` under path `okexchain-go-sdk/module/farm`. They can be invoked by the way like:

```go
import "github.com/okex/okexchain-go-sdk"

config, _ := gosdk.NewClientConfig(rpcURL, chainID, gosdk.BroadcastBlock, "0.02okt", 200000, "")
cli := gosdk.NewClient(config)
_, _ = cli.Farm().QueryPools()
```

#### 11.1 Query
##### 11.1.1 Get all farm pools info

```go
func (fc farmClient) QueryPools() (farmPools []types.FarmPool, err error) 
```

Printed results:

```go
// FarmPool slice
type FarmPool struct {
    Owner                   sdk.AccAddress
    Name                    string
    MinLockAmount           sdk.SysCoin
    DepositAmount           sdk.SysCoin
    TotalValueLocked        sdk.SysCoin
    YieldedTokenInfos       YieldedTokenInfos
    TotalAccumulatedRewards sdk.SysCoins
}
```

##### 11.1.2 Get the farm pool info by its pool name

```go
func (fc farmClient) QueryPool(poolName string) (farmPool types.FarmPool, err error) 
```

Enter parameters:

|  Name   | Type  |Mark|
|  ----  | ----  |----|
| poolName  | string |pool name|

Printed results:

```go
// pool info
type FarmPool struct {
    Owner                   sdk.AccAddress
    Name                    string
    MinLockAmount           sdk.SysCoin
    DepositAmount           sdk.SysCoin
    TotalValueLocked        sdk.SysCoin
    YieldedTokenInfos       YieldedTokenInfos
    TotalAccumulatedRewards sdk.SysCoins
}
```

##### 11.1.3 Get the name of pools that an account has locked coins in

```go
func (fc farmClient) QueryAccount(accAddrStr string) (poolNames []string, err error) 
```

Enter parameters:

|  Name   | Type  |Mark|
|  ----  | ----  |----|
| accAddrStr  | string |target account address in bech32|

Printed results:

```go
// pool names that the target account has locked coins in
[]string
```

##### 11.1.4 Get all addresses of accounts that have locked coins in a pool

```go
func (fc farmClient) QueryAccountsLockedTo(poolName string) (accAddrs []sdk.AccAddress, err error) 
```

Enter parameters:

|  Name   | Type  |Mark|
|  ----  | ----  |----|
| poolName  | string |pool name|

Printed results:

```go
// address accounts
[]sdk.AccAddress
```

##### 11.1.5 Get the locked info of an account in a specific pool

```go
func (fc farmClient) QueryLockInfo(poolName, accAddrStr string) (lockInfo types.LockInfo, err error) 
```

Enter parameters:

|  Name   | Type  |Mark|
|  ----  | ----  |----|
| poolName  | string |pool name|
| accAddrStr  | string |target account address in bech32|

Printed results:

```go
// locked info
type LockInfo struct {
    Owner            sdk.AccAddress
    PoolName         string
    Amount           sdk.SysCoin
    StartBlockHeight int64
    ReferencePeriod  uint64
}
```

#### 11.2 Transaction
##### 11.2.1 Create a farm pool

```go
func (fc farmClient) CreatePool(fromInfo keys.Info, passWd, poolName, minLockAmountStr, yieldToken, memo string, accNum, seqNum uint64) (resp sdk.TxResponse, err error)
```

Enter parameters:

|  Name   | Type  |Mark|
|  ----  | ----  |----|
| fromInfo  | keys.Info |sender's key info|
| passWd  | string |sender's password|
| memo  | string |memo to note|
| accNum  | uint64 |account number of sender's account on chain|
| seqNum  | uint64 |sequence number of sender's account on chain|
| poolName  | string |pool name|
| minLockAmountStr  | string |minimum amount of token to lock in this pool|
| yieldToken  | string |the symbol of token as yield|

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

##### 11.2.2 Destroy a farm pool

```go
func (fc farmClient) DestroyPool(fromInfo keys.Info, passWd, poolName, memo string, accNum, seqNum uint64) (resp sdk.TxResponse, err error)
```

Enter parameters:

|  Name   | Type  |Mark|
|  ----  | ----  |----|
| fromInfo  | keys.Info |sender's key info|
| passWd  | string |sender's password|
| memo  | string |memo to note|
| accNum  | uint64 |account number of sender's account on chain|
| seqNum  | uint64 |sequence number of sender's account on chain|
| poolName  | string |pool name to destroy|

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

##### 11.2.3 Provide a number of yield tokens into a pool

```go
func (fc farmClient) Provide(fromInfo keys.Info, passWd, poolName, amountStr, yieldPerBlockStr string, startHeightToYield int64, memo string, accNum, seqNum uint64) (resp sdk.TxResponse, err error) 
```

Enter parameters:

|  Name   | Type  |Mark|
|  ----  | ----  |----|
| fromInfo  | keys.Info |sender's key info|
| passWd  | string |sender's password|
| memo  | string |memo to note|
| accNum  | uint64 |account number of sender's account on chain|
| seqNum  | uint64 |sequence number of sender's account on chain|
| poolName  | string |pool name|
| amountStr  | string |amount of yield token to provide to the target farm pool|
| yieldPerBlockStr  | string |amount of yield token to release per block|
| startHeightToYield  | int64 |the height to start to release yield token|

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

##### 11.2.4 Lock a number of tokens for yield farming

```go
func (fc farmClient) Lock(fromInfo keys.Info, passWd, poolName, amountStr, memo string, accNum, seqNum uint64) (resp sdk.TxResponse, err error) 
```

Enter parameters:

|  Name   | Type  |Mark|
|  ----  | ----  |----|
| fromInfo  | keys.Info |sender's key info|
| passWd  | string |sender's password|
| memo  | string |memo to note|
| accNum  | uint64 |account number of sender's account on chain|
| seqNum  | uint64 |sequence number of sender's account on chain|
| poolName  | string |pool name|
| amountStr  | string |amount of token to lock to the target farm pool|

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

##### 11.2.5 Unlock a number of tokens from the farm pool and claims the current yield

```go
func (fc farmClient) Unlock(fromInfo keys.Info, passWd, poolName, amountStr, memo string, accNum, seqNum uint64) (resp sdk.TxResponse, err error) 
```

Enter parameters:

|  Name   | Type  |Mark|
|  ----  | ----  |----|
| fromInfo  | keys.Info |sender's key info|
| passWd  | string |sender's password|
| memo  | string |memo to note|
| accNum  | uint64 |account number of sender's account on chain|
| seqNum  | uint64 |sequence number of sender's account on chain|
| poolName  | string |pool name|
| amountStr  | string |amount of token to unlock from the target farm pool|

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

##### 11.2.6 Claim yield farming rewards

```go
func (fc farmClient) Claim(fromInfo keys.Info, passWd, poolName, memo string, accNum, seqNum uint64) (resp sdk.TxResponse, err error)
```

Enter parameters:

|  Name   | Type  |Mark|
|  ----  | ----  |----|
| fromInfo  | keys.Info |sender's key info|
| passWd  | string |sender's password|
| memo  | string |memo to note|
| accNum  | uint64 |account number of sender's account on chain|
| seqNum  | uint64 |sequence number of sender's account on chain|
| poolName  | string |pool name|

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

### 12 Governance module

All governance functions are defined in the package `governance` under path `okexchain-go-sdk/module/governance`. They can be invoked by the way like:

```go
import "github.com/okex/okexchain-go-sdk"

config, _ := gosdk.NewClientConfig(rpcURL, chainID, gosdk.BroadcastBlock, "0.02okt", 200000, "")
cli := gosdk.NewClient(config)
_, _ = cli.Governance().SubmitTextProposal(info, defaultPassWd, "text_proposal.json", memo, accAccountNumber, accSequenceNumber)
```

#### 12.1 Query
##### 12.1.1 Get all proposals

```go
func (gc govClient) QueryProposals(depositorAddrStr, voterAddrStr, status string, numLimit uint64) (proposals []types.Proposal, err error)
```

Enter parameters:

|  Name   | Type  |Mark|
|  ----  | ----  |----|
| depositorAddrStr  | string |filter by proposals deposited on by depositor. defaults to all proposals by ""|
| voterAddrStr  | string |filter by proposals voted on by voted. defaults to all proposals by ""|
| status  | string |filter by proposals' status: DepositPeriod/VotingPeriod/Passed/Rejected. defaults to all proposals by ""|
| numLimit  | uint64 |limit to latest [numLimit] proposals. defaults to all proposals by 0|

Printed results:

```go
// Proposal slice
type Proposal struct {
    Content          
    ProposalID       uint64
    Status           ProposalStatus
    FinalTallyResult TallyResult
    SubmitTime       time.Time
    DepositEndTime   time.Time
    TotalDeposit     sdk.SysCoins
    VotingStartTime  time.Time
    VotingEndTime    time.Time
}
```

#### 12.2 Transaction
##### 12.2.1 Submit the text proposal

```go
func (gc govClient) SubmitTextProposal(fromInfo keys.Info, passWd, proposalPath, memo string, accNum, seqNum uint64) (resp sdk.TxResponse, err error)
```

Enter parameters:

|  Name   | Type  |Mark|
|  ----  | ----  |----|
| fromInfo  | keys.Info |sender's key info|
| passWd  | string |sender's password|
| memo  | string |memo to note|
| accNum  | uint64 |account number of sender's account on chain|
| seqNum  | uint64 |sequence number of sender's account on chain|
| proposalPath  | string | the path pf proposal file|

text proposal file template:
```json
{
  "title": "text proposal",
  "description": "description of text proposal",
  "proposalType": "Text",
  "deposit": "100okt"
}
```

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

##### 12.2.2 Submit the proposal to change the params

```go
func (gc govClient) SubmitParamsChangeProposal(fromInfo keys.Info, passWd, proposalPath, memo string, accNum, seqNum uint64) (resp sdk.TxResponse, err error) 
```

Enter parameters:

|  Name   | Type  |Mark|
|  ----  | ----  |----|
| fromInfo  | keys.Info |sender's key info|
| passWd  | string |sender's password|
| memo  | string |memo to note|
| accNum  | uint64 |account number of sender's account on chain|
| seqNum  | uint64 |sequence number of sender's account on chain|
| proposalPath  | string | the path pf proposal file|

text proposal file template:
```json
{
  "title": "Param Change Proposal",
  "description": "param change proposal description",
  "changes": [
    {
      "subspace": "staking",
      "key": "MaxValsToAddShares",
      "value": 5
    }
  ],
  "deposit": [
    {
      "denom": "okt",
      "amount": "100"
    }
  ],
  "height": "16910"
}
```

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

##### 12.2.3 Submit the proposal to delist a token pair from dex

```go
func (gc govClient) SubmitDelistProposal(fromInfo keys.Info, passWd, proposalPath, memo string, accNum, seqNum uint64) (resp sdk.TxResponse, err error)
```

Enter parameters:

|  Name   | Type  |Mark|
|  ----  | ----  |----|
| fromInfo  | keys.Info |sender's key info|
| passWd  | string |sender's password|
| memo  | string |memo to note|
| accNum  | uint64 |account number of sender's account on chain|
| seqNum  | uint64 |sequence number of sender's account on chain|
| proposalPath  | string | the path pf proposal file|

text proposal file template:
```json
{
  "title": "Delist Proposal",
  "description": "delist proposal description",
  "base_asset": "btc",
  "quote_asset": "okt",
  "deposit": [
    {
      "denom": "okt",
      "amount": "100"
    }
  ]
}
```

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

##### 12.2.4 Submit the proposal to spend the tokens from the community pool

```go
func (gc govClient) SubmitCommunityPoolSpendProposal(fromInfo keys.Info, passWd, proposalPath, memo string, accNum, seqNum uint64) (resp sdk.TxResponse, err error)
```

Enter parameters:

|  Name   | Type  |Mark|
|  ----  | ----  |----|
| fromInfo  | keys.Info |sender's key info|
| passWd  | string |sender's password|
| memo  | string |memo to note|
| accNum  | uint64 |account number of sender's account on chain|
| seqNum  | uint64 |sequence number of sender's account on chain|
| proposalPath  | string | the path pf proposal file|

text proposal file template:
```json
{
  "title": "Community Pool Spend Proposal",
  "description": "community pool spend description",
  "recipient": "okexchain1ntvyep3suq5z7789g7d5dejwzameu08m6gh7yl",
  "amount": [
    {
      "denom": "okt",
      "amount": "10.24"
    }
  ],
  "deposit": [
    {
      "denom": "okt",
      "amount": "100"
    }
  ]
}
```

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

##### 12.2.5 Submit the proposal to manage the white list member

```go
func (gc govClient) SubmitManageWhiteListProposal(fromInfo keys.Info, passWd, proposalPath, memo string, accNum, seqNum uint64) (resp sdk.TxResponse, err error) 
```

Enter parameters:

|  Name   | Type  |Mark|
|  ----  | ----  |----|
| fromInfo  | keys.Info |sender's key info|
| passWd  | string |sender's password|
| memo  | string |memo to note|
| accNum  | uint64 |account number of sender's account on chain|
| seqNum  | uint64 |sequence number of sender's account on chain|
| proposalPath  | string | the path pf proposal file|

text proposal file template:
```json
{
  "title": "Manage White List Proposal",
  "description": "manage white list description",
  "pool_name": "pool1",
  "is_added": true,
  "deposit": [
    {
      "denom": "okt",
      "amount": "100"
    }
  ]
}
```

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

##### 12.2.6 Increase the deposit amount on a specific proposal

```go
func (gc govClient) Deposit(fromInfo keys.Info, passWd, depositCoinsStr, memo string, proposalID, accNum, seqNum uint64) (resp sdk.TxResponse, err error) 
```

Enter parameters:

|  Name   | Type  |Mark|
|  ----  | ----  |----|
| fromInfo  | keys.Info |sender's key info|
| passWd  | string |sender's password|
| memo  | string |memo to note|
| accNum  | uint64 |account number of sender's account on chain|
| seqNum  | uint64 |sequence number of sender's account on chain|
| depositCoinsStr  | string | amount to deposit to the proposal|
| proposalID  | uint64 | target proposal ID|

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

##### 12.2.7 Vote for an active proposal

```go
func (gc govClient) Vote(fromInfo keys.Info, passWd, voteOption, memo string, proposalID, accNum, seqNum uint64) (resp sdk.TxResponse, err error) 
```

Enter parameters:

|  Name   | Type  |Mark|
|  ----  | ----  |----|
| fromInfo  | keys.Info |sender's key info|
| passWd  | string |sender's password|
| memo  | string |memo to note|
| accNum  | uint64 |account number of sender's account on chain|
| seqNum  | uint64 |sequence number of sender's account on chain|
| voteOption  | string | option to vote: yes/no/no_with_veto/abstain|
| proposalID  | uint64 | target proposal ID|

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

---

### 13 Tendermint module

All tendermint functions are defined in the package `tendermint` under path `okexchain-go-sdk/module/tendermint`. They can be invoked by the way like:

```go
import "github.com/okex/okexchain-go-sdk"

config, _ := gosdk.NewClientConfig(rpcURL, chainID, gosdk.BroadcastBlock, "0.02okt", 200000, "")
cli := gosdk.NewClient(config)
_, _ = cli.Tendermint().QueryBlock(1024)
```

#### 13.1 Query
##### 13.1.1 Get the block info of a specific height

```go
func (tc tendermintClient) QueryBlock(height int64) (pBlock *types.Block, err error) 
```

Enter parameters:

|  Name   | Type  |Mark|
|  ----  | ----  |----|
| height  | int64 |target block height. get the latest block with height 0 input|

Printed results:

```go
// block info
type Block struct {
    mtx        sync.Mutex
    Header
    Data
    Evidence   EvidenceData
    LastCommit *Commit
}
```

##### 13.1.2 Get the abci result of the block on a specific height

```go
func (tc tendermintClient) QueryBlockResults(height int64) (pBlockResults *types.ResultBlockResults, err error)
```

Enter parameters:

|  Name   | Type  |Mark|
|  ----  | ----  |----|
| height  | int64 |target block height. get the latest block with height 0 input|

Printed results:

```go
// abci result info of block
type ResultBlockResults struct {
    Height                int64
    TxsResults            []*abci.ResponseDeliverTx
    BeginBlockEvents      []abci.Event
    EndBlockEvents        []abci.Event
    ValidatorUpdates      []abci.ValidatorUpdate
    ConsensusParamUpdates *abci.ConsensusParams
}
```

##### 13.1.3 Get the commit info of the block on a specific height

```go
func (tc tendermintClient) QueryCommitResult(height int64) (pCommitResult *types.ResultCommit, err error)
```

Enter parameters:

|  Name   | Type  |Mark|
|  ----  | ----  |----|
| height  | int64 |target block height. get the latest block with height 0 input|

Printed results:

```go
// commit info of block
type ResultCommit struct {
    types.SignedHeader
    CanonicalCommit    bool
}

// types.SignedHeader - field in ResultCommit
type SignedHeader struct {
    *Header
    Commit *Commit
}
```

##### 13.1.4 Get the validators info on a specific height

```go
func (tc tendermintClient) QueryValidatorsResult(height int64) (pValsResult *types.ResultValidators, err error) 
```

Enter parameters:

|  Name   | Type  |Mark|
|  ----  | ----  |----|
| height  | int64 |target block height. get the latest block with height 0 input|

Printed results:

```go
// validators info
type ResultValidators struct {
    BlockHeight int64
    Validators  []*types.Validator
    Count       int
    Total       int
}
```

##### 13.1.5 Get the detail info of a tx with its tx hash

```go
func (tc tendermintClient) QueryTxResult(hashHexStr string, prove bool) (pResultTx *types.ResultTx, err error) 
```

Enter parameters:

|  Name   | Type  |Mark|
|  ----  | ----  |----|
| hashHexStr  | string |tx hash in hex string|
| prove  | bool |whether to verify proofs for responses|

Printed results:

```go
// tx result
type ResultTx struct {
    Hash     bytes.HexBytes
    Height   int64
    Index    uint32
    TxResult abci.ResponseDeliverTx
    Tx       types.Tx
    Proof    types.TxProof
}
```

##### 13.1.5 Get the detail info of a tx with its tx hash

```go
func (tc tendermintClient) QueryTxResult(hashHexStr string, prove bool) (pResultTx *types.ResultTx, err error) 
```

Enter parameters:

|  Name   | Type  |Mark|
|  ----  | ----  |----|
| hashHexStr  | string |tx hash in hex string|
| prove  | bool |whether to verify proofs for responses|

Printed results:

```go
// tx result
type ResultTx struct {
    Hash     bytes.HexBytes
    Height   int64
    Index    uint32
    TxResult abci.ResponseDeliverTx
    Tx       types.Tx
    Proof    types.TxProof
}
```

##### 13.1.6 Get txs result by a group of specific searching string

```go
func (tc tendermintClient) QueryTxsByEvents(eventsStr string, page, limit int) (pResultTxSearch *types.ResultTxSearch, err error)
```

Enter parameters:

|  Name   | Type  |Mark|
|  ----  | ----  |----|
| eventsStr  | string |list of transaction events in the form of {eventType}.{eventAttribute}={value}|
| page  | int |a specific page of paginated results|
| limit  | int |number of transactions results per page returned|

Printed results:

```go
// Result of searching for txs
type ResultTxSearch struct {
    Txs        []*ResultTx
    TotalCount int
}

// ResultTx - field in ResultTxSearch
type ResultTx struct {
    Hash     bytes.HexBytes
    Height   int64
    Index    uint32
    TxResult abci.ResponseDeliverTx
    Tx       types.Tx
    Proof    types.TxProof
}
```