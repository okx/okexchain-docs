# Cancel Subscription

Subscriptions are cancelled with a regular RPC call with `eth_unsubscribe` as method and
the subscription id as first parameter. It returns a bool indicating if the subscription
was cancelled successful.

### Parameters
1. subscription id

### Example

    >> {"id": 1, "method": "eth_unsubscribe", "params": ["0x65eca2989ce064d141862c8b7138c1e"]}
    << {"jsonrpc":"2.0","id":1,"result":true}