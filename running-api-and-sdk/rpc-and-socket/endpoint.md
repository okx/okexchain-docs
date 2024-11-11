# Endpoint

## Used by
- exchain-java-sdk
- Metamask

## Mainnet JSON-RPC Endpoint (chain-id: exchain-66)
- https://exchainrpc.okex.org

## Mainnet websocket Endpoint
- wss://exchainws.okex.org:8443

### How to configure MetaMask with OKTC(Mainnet) in one step

```javascript
currentProvider.send({
    "method": "wallet_addEthereumChain",
    "params": [
        {
            "chainId": "0x42",
            "chainName": "OKTC Main",
            "rpcUrls": ["https://exchainrpc.okex.org/"],
            "nativeCurrency": {
                "name": "OKT",
                "symbol": "OKT",
                "decimals": 18
            },
            "blockExplorerUrls": ["https://www.okx.com/explorer/oktc"]
        }
    ]
})
```






