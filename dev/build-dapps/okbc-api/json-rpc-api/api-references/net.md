# Net

### net_version

Returns the current network id.

#### Example

```json
// Request
curl -X POST --data '{
	"jsonrpc": "2.0",
	"method": "net_version",
	"params": [],
	"id": 1
}' -H "Content-Type: application/json" http://localhost:8545

// Result
{
	"jsonrpc": "2.0",
	"id": 1,
	"result": "8"
}
```