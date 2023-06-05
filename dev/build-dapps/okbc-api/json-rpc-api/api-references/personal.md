# Personal

### personal_importRawKey

Imports the given unencrypted private key (hex string) into the key store, encrypting it with the passphrase.

Returns the address of the new account.

<Warning>
Currently, this is not implemented since the feature is not supported by the keys
</Warning>

#### Parameters

- Hex encoded ECDSA key
- Passphrase

#### Example

```json
// Request
curl -X POST --data '{
	"jsonrpc": "2.0",
	"method": "personal_importRawKey",
	"params": ["c5bd76cd0cd948de17a31261567d219576e992d9066fe1a6bca97496dec634e2c8e06f8949773b300b9f73fabbbc7710d5d6691e96bcf3c9145e15daf6fe07b9", "the key is this"],
	"id": 1
}' -H "Content-Type: application/json" http://localhost:8545

// Result
{
	"jsonrpc": "2.0",
	"id": 1,
	"result": true
}
```

### personal_listAccounts

Returns a list of addresses for accounts this node manages.

#### Example

```json
// Request
curl -X POST --data '{
	"jsonrpc": "2.0",
	"method": "personal_listAccounts",
	"params": [],
	"id": 1
}' -H "Content-Type: application/json" http://localhost:8545

// Result
{
	"jsonrpc": "2.0",
	"id": 1,
	"result": ["0x3b7252d007059ffc82d16d022da3cbf9992d2f70", "0xddd64b4712f7c8f1ace3c145c950339eddaf221d", "0x0f54f47bf9b8e317b214ccd6a7c3e38b893cd7f0"]
}
```

### personal_lockAccount

Removes the private key with given address from memory. The account can no longer be used to send transactions.

#### Parameters

- Account Address

#### Example

```json
// Request
curl -X POST --data '{
	"jsonrpc": "2.0",
	"method": "personal_lockAccount",
	"params": ["0x0f54f47bf9b8e317b214ccd6a7c3e38b893cd7f0"],
	"id": 1
}' -H "Content-Type: application/json" http://localhost:8545

// Result
{
	"jsonrpc": "2.0",
	"id": 1,
	"result": true
}
```

### personal_newAccount

Generates a new private key and stores it in the key store directory. The key file is encrypted with the given passphrase. Returns the address of the new account.

#### Parameters

- Passphrase

#### Example

```json
// Request
curl -X POST --data '{
	"jsonrpc": "2.0",
	"method": "personal_newAccount",
	"params": ["This is the passphrase"],
	"id": 1
}' -H "Content-Type: application/json" http://localhost:8545

// Result
{
	"jsonrpc": "2.0",
	"id": 1,
	"result": "0xf0e4086ad1c6aab5d42161d5baaae2f9ad0571c0"
}
```

### personal_unlockAccount

Decrypts the key with the given address from the key store.

Both passphrase and unlock duration are optional when using the JavaScript console. The unencrypted key will be held in memory until the unlock duration expires. If the unlock duration defaults to 300 seconds. An explicit duration of zero seconds unlocks the key until geth exits.

The account can be used with eth_sign and eth_sendTransaction while it is unlocked.

#### Parameters

- Account Address
- Passphrase
- Duration

#### Example

```json
// Request
curl -X POST --data '{
	"jsonrpc": "2.0",
	"method": "personal_unlockAccount",
	"params": ["0x0f54f47bf9b8e317b214ccd6a7c3e38b893cd7f0", "secret passphrase", 30],
	"id": 1
}' -H "Content-Type: application/json" http://localhost:8545

// Result
{
	"jsonrpc": "2.0",
	"id": 1,
	"result": true
}
```

### personal_sendTransaction

Validate the given passphrase and submit transaction.

The transaction is the same argument as for eth_sendTransaction and contains the from address. If the passphrase can be used to decrypt the private key belogging to tx.from the transaction is verified, signed and send onto the network.

<Warning>
The account is not unlocked globally in the node and cannot be used in other RPC calls.
</Warning>

#### Parameters

 - Object containing:

    | **Parameter** | **Type** | **Description**                                              |
    | ------------- | -------- | ------------------------------------------------------------ |
    | from          | DATA     | 20 Bytes - The address the transaction is send from.         |
    | to            | DATA     | 20 Bytes - (optional when creating new contract) The address the transaction is directed to. |
    | value         | QUANTITY | value sent with this transaction                             |

- Passphrase

#### Example

```json
// Request
curl -X POST --data '{
	"jsonrpc": "2.0",
	"method": "personal_sendTransaction",
	"params": [{
		"from": "0x3b7252d007059ffc82d16d022da3cbf9992d2f70",
		"to": "0xddd64b4712f7c8f1ace3c145c950339eddaf221d",
		"value": "0x16345785d8a0000"
	}, "passphrase"],
	"id": 1
}' -H "Content-Type: application/json" http://localhost:8545

// Result
{
	"jsonrpc": "2.0",
	"id": 1,
	"result": "0xd2a31ec1b89615c8d1f4d08fe4e4182efa4a9c0d5758ace6676f485ea60e154c"
}
```

### personal_sign

The sign method calculates an Ethereum specific signature with: sign(keccack256("\x19Ethereum Signed Message:\n" + len(message) + message))).

#### Parameters

- Message
- Account Address
- Password

#### Example

```json
// Request
curl -X POST --data '{
	"jsonrpc": "2.0",
	"method": "personal_sign",
	"params": ["0xdeadbeaf", "0x3b7252d007059ffc82d16d022da3cbf9992d2f70", "password"],
	"id": 1
}' -H "Content-Type: application/json" http://localhost:8545

// Result
{
	"jsonrpc": "2.0",
	"id": 1,
	"result": "0xf9ff74c86aefeb5f6019d77280bbb44fb695b4d45cfe97e6eed7acd62905f4a85034d5c68ed25a2e7a8eeb9baf1b8401e4f865d92ec48c1763bf649e354d900b1c"
}
```

### personal_ecRecover

ecRecover returns the address associated with the private key that was used to calculate the signature in personal_sign.

#### Parameters

- Message
- Signature returned from personal_sign

#### Example

```json
// Request
curl -X POST --data '{
	"jsonrpc": "2.0",
	"method": "personal_ecRecover",
	"params": ["0xdeadbeaf", "0xf9ff74c86aefeb5f6019d77280bbb44fb695b4d45cfe97e6eed7acd62905f4a85034d5c68ed25a2e7a8eeb9baf1b8401e4f865d92ec48c1763bf649e354d900b1c"],
	"id": 1
}' -H "Content-Type: application/json" http://localhost:8545

// Result
{
	"jsonrpc": "2.0",
	"id": 1,
	"result": "0x3b7252d007059ffc82d16d022da3cbf9992d2f70"
}
```

### txpool_content

Returns a list of the exact details of all the transactions currently pending for inclusion in the next block(s), as well as the ones that are being scheduled for future execution only

#### Example

```json
// Request
curl -X POST --data '{
	"jsonrpc": "2.0",
	"method": "txpool_content",
	"params": [],
	"id": 1
}' -H "Content-Type: application/json" http://localhost:8545

// Result
{
	"jsonrpc": "2.0",
	"id": 1,
	"result": "0x3b7252d007059ffc82d16d022da3cbf9992d2f70"
}
```

### txpool_inspect

Returns a list on text format to summarize all the transactions currently pending for inclusion in the next block(s), as well as the ones that are being scheduled for future execution only. This is a method specifically tailored to developers to quickly see the transactions in the pool and find any potential issues.

#### Example

```json
// Request
curl -X POST --data '{
	"jsonrpc": "2.0",
	"method": "txpool_inspect",
	"params": [],
	"id": 1
}' -H "Content-Type: application/json" http://localhost:8545

// Result
{
	"jsonrpc": "2.0",
	"id": 1,
	"result": {
		"queued": {
			"0xbbE4733d85bc2b90682147779DA49caB38C0aA1F": {
				"5": "0x96897899078973b00D49d7d0442287DefF413F49: 0x56bc75e2d63100000 wei + 0x16405 gas × 0x5f5e100 wei"
			}
		}
	}
}
```

### txpool_status

Returns the number of transactions currently pending for inclusion in the next block(s), as well as the ones that are being scheduled for future execution only.

#### Example

```json
// Request
curl -X POST --data '{
	"jsonrpc": "2.0",
	"method": "txpool_status",
	"params": [],
	"id": 1
}' -H "Content-Type: application/json" http://localhost:8545

// Result
{
	"jsonrpc": "2.0",
	"id": 1,
	"result": {
		"pending": "0x1",
		"queued": "0x2"
	}
}
```