# WebSocket


### eth_subscribe

subscribe using JSON-RPC notifications. This allows clients to wait for events instead of polling for them.

It works by subscribing to particular events. The node will return a subscription id. For each event that matches the subscription a notification with relevant data is send together with the subscription id.

#### Parameters

- Subscription Name
- Optional Arguments

#### Example

```json
// Request
{"id": 1, "method": "eth_subscribe", "params": ["newHeads", {"includeTransactions": true}]}

// Result
{
	"jsonrpc": "2.0",
	"result": "0x34da6f29e3e953af4d0c7c58658fd525",
	"id": 1
}
```

### eth_unsubscribe

Unsubscribe from an event using the subscription id

#### Parameters

- Subscription ID

#### Example

```json
// Request
{"id": 1, "method": "eth_unsubscribe", "params": ["0x34da6f29e3e953af4d0c7c58658fd525"]}

// Result
{
	"jsonrpc": "2.0",
	"result": true,
	"id": 1
}
```