# Web3

### web3_clientVersion

Get the web3 client version.

#### Example

```json
// Request
curl -X POST --data '{
	"jsonrpc": "2.0",
	"method": "web3_clientVersion",
	"params": [],
	"id": 67
}' -H "Content-Type: application/json" http://localhost:8545

// Result
 {"jsonrpc":"2.0","id":1,"result":"Ethermint/0.0.0+/linux/go1.14"}
```

### web3_sha3

Returns Keccak-256 (not the standardized SHA3-256) of the given data.

#### Parameters

- The data to convert into a SHA3 hash

#### Example

```json
// Request
curl -X POST --data '{
	"jsonrpc": "2.0",
	"method": "web3_sha3",
	"params": ["0x67656c6c6f20776f726c64"],
	"id": 1
}' -H "Content-Type: application/json" http://localhost:8545

// Result
{
	"jsonrpc": "2.0",
	"id": 1,
	"result": "0x1b84adea42d5b7d192fd8a61a85b25abe0757e9a65cab1da470258914053823f"
}
```
