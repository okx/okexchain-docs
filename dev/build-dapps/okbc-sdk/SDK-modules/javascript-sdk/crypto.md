# Crypto

#### 1. crypto.getHDPath
- Get HD path by cointype param .
- Kind: static constant of `crypto`

|Param|Type|Description|
|:----|:----|:----|
|cointype|String|default 60|
#### 2. crypto.decodeAddressToBuffer
- Decode address from bech32 to buffer.
- Kind: static constant of `crypto`

|Param|Type|Description|
|:----|:----|:----|
|addr|String|bech32 format|
#### 3. crypto.validateAddress
- Validate address.
- Kind: static constant of `crypto`

|Param|Type|Description|
|:----|:----|:----|
|addr|String|bech32 format|
#### 4. crypto.convertBech32ToHex
- Encodes address from hex to bech32 format.
- Kind: static constant of `crypto`
- Returns: `string` - address with bech32 format

|Param|Type|Description|
|:----|:----|:----|
|hexAddr|String|address in hex string|
|prefix|string|address prefix|
#### 5. crypto.convertHexToBech32
- covert 0x address to ex address
- Kind: static constant of `crypto`

|Param|
|:----|
|hexAddress|
#### 6. crypto.generatePrivateKey
- Generates privateKey.
- Kind: static constant of `crypto`
- Returns: `string` - privateKey hex string

|Param|Type|Description|
|:----|:----|:----|
|len|Number|privateKey length (default: 32 bytes)|
#### 7. crypto.getPubKeyFromHex
- Get publicKey from hex string.
- Kind: static constant of `crypto`
- Returns: `Elliptic.PublicKey` - pubKey

|Param|Type|Description|
|:----|:----|:----|
|publicKey|String|pubKey with hex string format|
#### 8. crypto.encodePubKeyToCompressedBuffer
- Encode pubKey to compressed pubKey buffer.
- Kind: static constant of `crypto`

|Param|Type|
|:----|:----|
|pubKey|Elliptic.PublicKey|
#### 9. crypto.getPubKeyHexFromPrivateKey
- Get public key from private key.
- Kind: static constant of `crypto`
- Returns: `string` - public key in hex string

|Param|Type|Description|
|:----|:----|:----|
|privateKeyHex|String|the private key hex string|
#### 10. crypto.getPubKeyFromPrivateKey
- Get public key from private key.
- Kind: static constant of `crypto`
- Returns: `Elliptic.PublicKey` - PubKey

|Param|Type|
|:----|:----|
|privateKey|Buffer|
#### 11. crypto.getAddressFromPubKey
- Gets address from pubKey with hex format.
- Kind: static constant of `crypto`
- Returns: `string` - address

|Param|Type|Description|
|:----|:----|:----|
|publicKey|String|publicKey hexstring|
|prefix|String|address prefix|
#### 12. crypto.getAddressFromPrivateKey
- Get address from private key.
- Kind: static constant of `crypto`
- Returns: `string` - address

|Param|Type|Description|
|:----|:----|:----|
|privateKeyHex|String|the private key hexstring|
|prefix|String|address prefix|
#### 13. crypto.sign
- Sign msg with privateKey and Msg in hex format.
- Kind: static constant of `crypto`
- Returns: `Buffer` - Signature.

|Param|Type|Description|
|:----|:----|:----|
|msgHex|String|msg in hex format.|
|privateKey|String|The private key in hex format.|
#### 14. crypto.validateSig
- Validate signature.
- Kind: static constant of `crypto`

|Param|Type|Description|
|:----|:----|:----|
|sigHex|String|signature in hex format|
|msgHex|String|msg in hex format|
|pubKeyHex|String|public key in hex format|
#### 15. crypto.generateKeyStore
- Generate KeyStore with privateKey and password.
- Kind: static constant of `crypto`

|Param|Type|
|:----|:----|
|privateKeyHex|String|
|password|String|
#### 16. crypto.getPrivateKeyFromKeyStore
- Get privateKey from keyStore.
- Kind: static constant of `crypto`
- Returns: `string` - privateKey

|Param|Type|
|:----|:----|
|keystore|String or object|
|password|String|
#### 17. crypto.generateMnemonic
- Generate mnemonic.
- Kind: static constant of `crypto`
#### 18. crypto.validateMnemonic
- Validate mnemonic.
- Kind: static constant of `crypto`

|Param|Type|
|:----|:----|
|mnemonic|String|
#### 19. crypto.getPrivateKeyFromMnemonicGet private key from mnemonic.
- Kind: static constant of `crypto`
- Returns: `string` - hexstring

|Param|Type|Description|
|:----|:----|:----|
|mnemonic|String||
|cointype|String|default 60|
#### 20. crypto.sha256Ripemd160
- Just like ripemd160(sha256(hex))
- Kind: static constant of `crypto`
- Returns: `string` - hash

|Param|Type|
|:----|:----|
|hex|String|
#### 21. crypto.sha256
- SHA256.
- Kind: static constant of `crypto`
- Returns: `string` - hash

|Param|Type|
|:----|:----|
|hex|String|
#### 22. crypto~isBN(object)
- Returns true if object is BN, otherwise false
- Kind: inner method of `crypto`

|Param|Type|
|:----|:----|
|object|Boolean|
#### 23. crypto~isHexStrict(hex)
- Check if string is HEX, requires a 0x in front
- Kind: inner method of `crypto`

|Param|Type|Description|
|:----|:----|:----|
|hex|String|to be locked|
#### 24. crypto~sha3() 
- Hashes values to a sha3 hash using keccak 256
- To hash a HEX string the hex must have 0x in front.
- Kind: inner method of `crypto`
- Returns: `String` - the sha3 string
#### 25. crypto~toChecksumAddress(address) 
- Converts to a checksum address
- Kind: inner method of `crypto`

|Param|Type|Description|
|:----|:----|:----|
|address|String|the given HEX address|

