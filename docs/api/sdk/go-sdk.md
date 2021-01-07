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