# Create Subscription

Subscriptions are created with a regular RPC call with `eth_subscribe` as method and the
subscription name as first parameter. If successful it returns the subscription id.

### Parameters

1. subscription name
2. optional arguments

### Example

    >> {"id": 1, "method": "eth_subscribe", "params": ["newHeads"]}
    << {"id": 1, "jsonrpc": "2.0", "result": "0x65eca2989ce064d141862c8b7138c1e"}
