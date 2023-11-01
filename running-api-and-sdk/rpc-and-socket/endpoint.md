# Endpoint

## Used by
- exchain-java-sdk
- Metamask

## Mainnet JSON-RPC Endpoint (chain-id: okbchaintest-196)
- https://okbrpc.okbchain.org

## Mainnet Websocket Endpoint
- wss://okbws.okx.org:8443

### How to configure MetaMask with OKBC(Mainnet) in one step

```javascript
currentProvider.send({
    "method": "wallet_addEthereumChain",
    "params": [
        {
            "chainId": "0xC4",
            "chainName": "OKBC Main",
            "rpcUrls": ["https://okbrpc.okbchain.org/"],
            "nativeCurrency": {
                "name": "OKB",
                "symbol": "OKB",
                "decimals": 18
            },
            "blockExplorerUrls": ["https://www.oklink.com/okbc"]
        }
    ]
})
```

## Testnet JSON-RPC Endpoint (chain-id: okbchaintest-195):
- https://okbtestrpc.okbchain.org

## Testnet Websocket Endpoint
- wss://okbtestws.okx.org:8443

### How to configure MetaMask with OKBC(Testnet) in one step

```javascript
currentProvider.send({
  "method": "wallet_addEthereumChain",
  "params": [
    {
      "chainId": "0xC3",
      "chainName": "OKBC Testnet",
      "rpcUrls": ["https://okbtestrpc.okbchain.org"],
      "nativeCurrency": {
        "name": "OKB",
        "symbol": "OKB",
        "decimals": 18
      },
      "blockExplorerUrls": ["https://www.oklink.com/okbc-test"]
    }
  ]
})
```





