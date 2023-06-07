# Client Setup
Go SDK is a light weight Go library that provides `Client` to interact with the OKTC network. 
```
package gosdk

import (
        "fmt"
        "github.com/okex/exchain-go-sdk/module/feesplit"
        "github.com/okex/exchain-go-sdk/module/ibc"
        ibcTypes "github.com/okex/exchain/libs/ibc-go/modules/apps/transfer/types"
        feesplitTypes "github.com/okex/exchain/x/feesplit/types"

        "github.com/okex/exchain-go-sdk/exposed"
        "github.com/okex/exchain-go-sdk/module"
        "github.com/okex/exchain-go-sdk/module/ammswap"
        ammswaptypes "github.com/okex/exchain-go-sdk/module/ammswap/types"
        "github.com/okex/exchain-go-sdk/module/auth"
        authtypes "github.com/okex/exchain-go-sdk/module/auth/types"
        "github.com/okex/exchain-go-sdk/module/dex"
        dextypes "github.com/okex/exchain-go-sdk/module/dex/types"
        "github.com/okex/exchain-go-sdk/module/distribution"
        distrtypes "github.com/okex/exchain-go-sdk/module/distribution/types"
        "github.com/okex/exchain-go-sdk/module/evm"
        evmtypes "github.com/okex/exchain-go-sdk/module/evm/types"
        "github.com/okex/exchain-go-sdk/module/farm"
        "github.com/okex/exchain-go-sdk/module/governance"
        govtypes "github.com/okex/exchain-go-sdk/module/governance/types"
        "github.com/okex/exchain-go-sdk/module/order"
        ordertypes "github.com/okex/exchain-go-sdk/module/order/types"
        "github.com/okex/exchain-go-sdk/module/slashing"
        slashingtypes "github.com/okex/exchain-go-sdk/module/slashing/types"
        "github.com/okex/exchain-go-sdk/module/staking"
        stakingtypes "github.com/okex/exchain-go-sdk/module/staking/types"
        "github.com/okex/exchain-go-sdk/module/tendermint"
        tmtypes "github.com/okex/exchain-go-sdk/module/tendermint/types"
        "github.com/okex/exchain-go-sdk/module/token"
        tokentypes "github.com/okex/exchain-go-sdk/module/token/types"
        gosdktypes "github.com/okex/exchain-go-sdk/types"
        "github.com/okex/exchain/libs/cosmos-sdk/codec"
        farmtypes "github.com/okex/exchain/x/farm/types"
)

// Client - structure of the main client of ExChain GoSDK
type Client struct {
        config  gosdktypes.ClientConfig
        cdc     *codec.Codec
        modules map[string]gosdktypes.Module
}

// NewClient creates a new instance of Client
func NewClient(config gosdktypes.ClientConfig) Client {
        cdc := gosdktypes.NewCodec()
        pClient := &Client{
                config:  config,
                cdc:     cdc,
                modules: make(map[string]gosdktypes.Module),
        }
        pBaseClient := module.NewBaseClient(cdc, &pClient.config)

        pClient.registerModule(
                ammswap.NewAmmSwapClient(pBaseClient),
                auth.NewAuthClient(pBaseClient),
                dex.NewDexClient(pBaseClient),
                distribution.NewDistrClient(pBaseClient),
                evm.NewEvmClient(pBaseClient),
                farm.NewFarmClient(pBaseClient),
                governance.NewGovClient(pBaseClient),
                order.NewOrderClient(pBaseClient),
                staking.NewStakingClient(pBaseClient),
                slashing.NewSlashingClient(pBaseClient),
                token.NewTokenClient(pBaseClient),
                tendermint.NewTendermintClient(pBaseClient),
                ibc.NewIbcClient(pBaseClient),
                feesplit.NewfeesplitClient(pBaseClient),
        )

        return *pClient
}

func (cli *Client) registerModule(mods ...gosdktypes.Module) {
        for _, mod := range mods {
                moduleName := mod.Name()
                if _, ok := cli.modules[moduleName]; ok {
                        panic(fmt.Sprintf("duplicated module: %s", moduleName))
                }
                // register codec by each module
                mod.RegisterCodec(cli.cdc)
                cli.modules[moduleName] = mod
        }
        gosdktypes.RegisterBasicCodec(cli.cdc)
        cli.cdc.Seal()
}

// GetConfig returns the client config
func (cli *Client) GetConfig() gosdktypes.ClientConfig {
        return cli.config
}

// nolint
func (cli *Client) AmmSwap() exposed.AmmSwap {
        return cli.modules[ammswaptypes.ModuleName].(exposed.AmmSwap)
}
func (cli *Client) Auth() exposed.Auth {
        return cli.modules[authtypes.ModuleName].(exposed.Auth)
}
func (cli *Client) Dex() exposed.Dex {
        return cli.modules[dextypes.ModuleName].(exposed.Dex)
}
func (cli *Client) Distribution() exposed.Distribution {
        return cli.modules[distrtypes.ModuleName].(exposed.Distribution)
}
func (cli *Client) Evm() exposed.Evm {
        return cli.modules[evmtypes.ModuleName].(exposed.Evm)
}
func (cli *Client) Farm() exposed.Farm {
        return cli.modules[farmtypes.ModuleName].(exposed.Farm)
}
func (cli *Client) Governance() exposed.Governance {
        return cli.modules[govtypes.ModuleName].(exposed.Governance)
}
func (cli *Client) Order() exposed.Order {
        return cli.modules[ordertypes.ModuleName].(exposed.Order)
}
func (cli *Client) Slashing() exposed.Slashing {
        return cli.modules[slashingtypes.ModuleName].(exposed.Slashing)
}
func (cli *Client) Staking() exposed.Staking {
        return cli.modules[stakingtypes.ModuleName].(exposed.Staking)
}
func (cli *Client) Tendermint() exposed.Tendermint {
        return cli.modules[tmtypes.ModuleName].(exposed.Tendermint)
}
func (cli *Client) Token() exposed.Token {
        return cli.modules[tokentypes.ModuleName].(exposed.Token)
}

func (cli *Client) Ibc() exposed.Ibc {
        return cli.modules[ibcTypes.ModuleName].(exposed.Ibc)
}

func (cli *Client) Feesplit() exposed.Feesplit {
        return cli.modules[feesplitTypes.ModuleName].(exposed.Feesplit)
}
```
Once the `Client` is initiated, you can interact with all available [APIs](https://www.okx.com/cn/oktc/docs/dev/sdk/go-sdk).
## Example
`Client` seems necessary for every operation with Go SDK. Here are the examples :
```
        // rpcURL should be modified according to the actual situation
        rpcURL   = "https://exchaintesttmrpc.okex.org"
        name     = "alice"
        passWd   = "12345678"
        mnemonic = "giggle sibling fun arrow elevator spoon blood grocery laugh tortoise culture tool"
        addr     = "ex1qj5c07sm6jetjz8f509qtrxgh4psxkv3ddyq7u"
        
        // build the client with own config
        config, _ := sdk.NewClientConfig(rpcURL, "exchain-65", sdk.BroadcastBlock, "0.00002okt", 200000, 0, "")
        client := sdk.NewClient(config)

        // create your account key info by 'name','passWd' and 'mnemonic'
        keyInfo, _, _ := utils.CreateAccountWithMnemo(mnemonic, name, passWd)

        // get info of your account from ExChain
        accInfo, _ := client.Auth().QueryAccount(keyInfo.GetAddress().String())

        // transfer some okt to addr
        res, _ := client.Token().Send(keyInfo, passWd, addr, "0.1024okt", "my memo", accInfo.GetAccountNumber(), accInfo.GetSequence())
```
You can invoke more and more api functions with the object `client`.