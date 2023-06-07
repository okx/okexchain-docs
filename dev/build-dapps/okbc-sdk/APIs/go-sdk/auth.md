# Auth

All auth functions are defined in the package `auth` under path `okbchain-go-sdk/module/auth`. They can be invoked by the way like:

```go
import "github.com/okx/okbchain-go-sdk"

config, _ := gosdk.NewClientConfig(rpcURL, chainID, gosdk.BroadcastBlock, "0.02okb", 200000, "")
cli := gosdk.NewClient(config)
_, _ = cli.Auth().QueryAccount(accAddrStr)
```

## Query

### Get the account info

```go
func (ac authClient) QueryAccount(accAddrStr string) (account types.Account, err error) 
```

**Parameters**

|  Name   | Type  |Mark|
|  ----  | ----  |----|
| accAddrStr  | string |account address in bech32|

**Results**

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
