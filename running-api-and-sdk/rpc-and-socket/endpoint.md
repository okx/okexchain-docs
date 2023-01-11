# Endpoint

## Used by
- exchain-java-sdk
- Metamask

## Mainnet JSON-RPC Endpoint (chain-id: exchain-66)
- https://exchainrpc.okex.org

## Mainnet Websocket Endpoint
- wss://exchainws.okex.org:8443

### How to configure MetaMask with OKC(Mainnet) in one step

```javascript
currentProvider.send({
    "method": "wallet_addEthereumChain",
    "params": [
        {
            "chainId": "0x42",
            "chainName": "OKC Main",
            "rpcUrls": ["https://exchainrpc.okex.org/"],
            "nativeCurrency": {
                "name": "OKT",
                "symbol": "OKT",
                "decimals": 18
            },
            "blockExplorerUrls": ["https://www.oklink.com/okc"]
        }
    ]
})
```

## Testnet JSON-RPC Endpoint (chain-id: exchain-65):
- https://exchaintestrpc.okex.org

## Testnet Websocket Endpoint
- wss://exchaintestws.okex.org:8443

### How to configure MetaMask with OKC(Testnet) in one step

```javascript
currentProvider.send({
  "method": "wallet_addEthereumChain",
  "params": [
    {
      "chainId": "0x41",
      "chainName": "OKC Testnet",
      "rpcUrls": ["https://exchaintestrpc.okex.org"],
      "nativeCurrency": {
        "name": "OKT",
        "symbol": "OKT",
        "decimals": 18
      },
      "blockExplorerUrls": ["https://www.oklink.com/okc-test"]
    }
  ]
})
```





