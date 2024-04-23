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

## Testnet JSON-RPC Endpoint (chain-id: exchain-65):
- https://exchaintestrpc.okex.org

## Testnet websocket Endpoint
- wss://exchaintestws.okex.org:8443

### How to configure MetaMask with OKTC(Testnet) in one step

```javascript
currentProvider.send({
  "method": "wallet_addEthereumChain",
  "params": [
    {
      "chainId": "0x41",
      "chainName": "OKTC Testnet",
      "rpcUrls": ["https://exchaintestrpc.okex.org"],
      "nativeCurrency": {
        "name": "OKT",
        "symbol": "OKT",
        "decimals": 18
      },
      "blockExplorerUrls": ["https://www.okx.com/explorer/oktc-test"]
    }
  ]
})
```





