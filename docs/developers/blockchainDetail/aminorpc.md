# JSON-AMINO-RPC Endpoint (Encoded by Amino)

## Amino vs JSON
JavaScript Object Notation (JSON) is human readable, well structured and great for interoperability with Javascript, but it is inefficient. Protobuf3, BER, RLP all exist because we need a more compact and efficient binary encoding standard. Amino provides efficient binary encoding for complex objects (e.g. embedded objects) that integrate naturally with your favorite modern programming language. Additionally, Amino has a fully compatible JSON encoding. 

[More details](https://github.com/tendermint/go-amino)

## Used by
- okexchaincli
- okexchain-go-sdk

## Mainnet (chain-id: okexchain-66)

### Recommend (Hong Kong domain)
 - http://okexchain-rpc1.okex.com:26657 (proxy required, if you are in mainland China)
 - http://okexchain-rpc1.okexcn.com:26657

### Backups (Tokyo domain)
 - http://okexchain-rpc2.okex.com:26657 (proxy required, if you are in mainland China)
 - http://okexchain-rpc2.okexcn.com:26657

___

## Testnet (chain-id: okexchain-65):

### Recommend (Hong Kong domain)
 - http://okexchaintest-rpc1.okex.com:26657 (proxy required, if you are in mainland China)
 - http://okexchaintest-rpc1.okexcn.com:26657
 
### Backups (Ohio)
 - http://okexchaintest-rpc2.okex.com:26657 (proxy required, if you are in mainland China)
 - http://okexchaintest-rpc2.okexcn.com:26657
 
### Backups (London)
 - http://okexchaintest-rpc3.okex.com:26657 (proxy required, if you are in mainland China)
 - http://okexchaintest-rpc3.okexcn.com:26657



