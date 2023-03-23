# Add Network Endpoints

This index guide contains network details for the OKB Chain Testnet and OKB Chain Mainnet and lists their associated RPC and node endpoints.

In order to view the flow of funds in your accounts, on the OKB Chain, you will need to configure OKB Chain testnet and mainnet URLs in your wallet.
You can add OKB Chain Network manually by inputing the following info into **Add a network** under **Settings**.
For detailed guide, check out [How to add a custom network RPC](https://support.metamask.io/hc/en-us/articles/360043227612-How-to-add-a-custom-network-RPC#:~:text=Go%20to%20'Settings'%2C%20and,the%20bottom%20of%20the%20screen. "How to add a custom network RPC")
>Mainnet network info will be updated after OKB Chain is live on Mainnet.

## OKB Chain Testnet
OKB Chain Testnet replicates the OKB Chain Mainnet and is used for testing. Users can request for testnet tokens from the faucet, which are without any actual value, unlike value-bearing assets such as OKB. This enables network maintainers or developers to test settings and trial implementations.

| Properties  | Network Details  |
| :------------ | :------------ |
| Network Name  | OKB Chain Testnet  |
| Parent Chain  | [Goërli](https://goerli.net/)  |
| Chain ID  | ![img.png](img.png)  |
| Gas Token  | OKB  |
| RPC Endpoint  | https://okbtestrpc.okx.com  |
| Node Endpoint  | https://okbtestrpc.okx.com  |
| Block Explorer  |  https://www.oklink.com/cn/okbc-test  |

## RPC API Methods
Developers can utilize network endpoints to interact with on-chain data and send various transaction types to the network. The APIs adhere to a JSON-RPC standard, which is a lightweight, stateless remote procedure call (RPC) protocol frequently utilized when interacting with a blockchain network.
>**GET STARTED WITH RPC CALLS**
Start by accessing the comprehensive API documentation for standard [JSON-RPC calls](/dev/api/okbc-api/json-rpc-api.html).
If you wish to initiate API requests without any preliminary configuration, troubleshoot unsuccessful requests, or test new methods on the OKB Chain network, try out the [Composer App](https://composer.alchemyapi.io/?composer_state=%7B%22chain%22%3A2%2C%22network%22%3A401%2C%22methodName%22%3A%22eth_getBlockByNumber%22%2C%22paramValues%22%3A%5B%22latest%22%2Cfalse%5D%7D "Composer App").

When interacting with the OKB Chain, a user has the option to either run their own node or use one of the public endpoints offered by infrastructure and API service providers to connect to the network. If you require real-time updates from the chain, Dagger is the ideal solution. This platform allows your dApps and backend system to receive blockchain events in real-time through a socket or websocket.

### Infrastructure Providers
Public RPCs may have traffic or rate limitations based on usage. You can register for a dedicated free RPC URL at the following:
- [Alchemy](https://www.alchemy.com/ "Alchemy")
- [Ankr](https://www.ankr.com/ "Ankr")
- [Blast (Bware Labs)](https://blastapi.io/ "Blast (Bware Labs)")
- [BlockPI](https://blockpi.io/ "BlockPI")
- [BlockSpaces](https://www.blockspaces.com/web3-infrastructure "BlockSpaces")
- [Chainnodes](https://www.chainnodes.org/ "Chainnodes")
- [Chainstack](https://chainstack.com/build-better-with-polygon/ "Chainstack")
- [DataHub (Figment)](https://datahub.figment.io/ "DataHub (Figment)")
- [Getblock](https://getblock.io/en/ "Getblock")
- [Infura](https://infura.io/ "Infura")
- [Moralis](https://moralis.io/ "Moralis")
- [Pocket Network](https://www.portal.pokt.network/ "Pocket Network")
- [QuickNode](https://www.quicknode.com/chains/matic "QuickNode")
- [SettleMint](https://docs.settlemint.com/docs/polygon-connect-to-a-node "SettleMint")
- [WatchData](https://docs.watchdata.io/blockchain-apis/polygon-api "WatchData")
- [NOWNodes](https://nownodes.io/nodes/polygon-matic "NOWNodes")