# OIP-20：Token Standard 
## Simple Summary
A standard interface for tokens on OKB Chain.  
## Abstract
The following standard allows for the implementation of a standard API for tokens within smart contracts. This standard provides basic functionality to transfer tokens, as well as allow tokens to be approved so they can be spent by another on-chain third party.  
## Motivation
A standard interface allows any tokens on OKB Chain to be re-used by other applications: from wallets to decentralized exchanges.  
## Specification
The key words “MUST”, “MUST NOT”, “REQUIRED”, “SHALL”, “SHALL NOT”, “SHOULD”, “SHOULD NOT”, “RECOMMENDED”, “MAY”, and “OPTIONAL” in this document are to be interpreted as described in RFC 2119.  
### Methods
**NOTES:**  
- The following specifications use syntax from Solidity `0.4.17` (or above)
- Callers MUST handle `false` from `returns (bool success)`. Callers MUST NOT assume that `false` is never returned!
#### name
Returns the name of the token - e.g. `"OKToken"`.  
OPTIONAL - This method can be used to improve usability, but interfaces and other contracts MUST NOT expect these values to be present.
```
function name() public view returns (string)
```
#### symbol
Returns the symbol of the token. E.g. `“OKB”`.  
OPTIONAL - This method can be used to improve usability, but interfaces and other contracts MUST NOT expect these values to be present.
```
function symbol() public view returns (string)
```
#### decimals
Returns the number of decimals the token uses - e.g. `8`, means to divide the token amount by `100000000` to get its user representation.  
OPTIONAL - This method can be used to improve usability, but interfaces and other contracts MUST NOT expect these values to be present.  
```
function decimals() public view returns (uint8)
```
#### totalSupply
Returns the total token supply.  
```
function totalSupply() public view returns (uint256)
```
#### balanceOf
Returns the account balance of another account with address `_owner`.  
```
function balanceOf(address _owner) public view returns (uint256 balance)
```
#### transfer
Transfers `_value` amount of tokens to address `_to`, and MUST fire the `Transfer` event. The function SHOULD `throw` if the message caller’s account balance does not have enough tokens to spend.
*Note* Transfers of 0 values MUST be treated as normal transfers and fire the `Transfer` event.
```
function transfer(address _to, uint256 _value) public returns (bool success)
```
#### transferFrom
Transfers `_value` amount of tokens from address `_from` to address `_to`, and MUST fire the `Transfer` event.
The `transferFrom` method is used for a withdraw workflow, allowing contracts to transfer tokens on your behalf. This can be used for example to allow a contract to transfer tokens on your behalf and/or to charge fees in sub-currencies. The function SHOULD `throw` unless the `_from` account has deliberately authorized the sender of the message via some mechanism.
*Note* Transfers of 0 values MUST be treated as normal transfers and fire the `Transfer` event.
```
function transferFrom(address _from, address _to, uint256 _value) public returns (bool success)
```
#### approve
Allows `_spender` to withdraw from your account multiple times, up to the `_value` amount. If this function is called again it overwrites the current allowance with `_value`.  
```
function approve(address _spender, uint256 _value) public returns (bool success)
```
#### allowance
Returns the amount which `_spender` is still allowed to withdraw from `_owner`.  
```
function allowance(address _owner, address _spender) public view returns (uint256 remaining)
```
### Events
#### Transfer
MUST trigger when tokens are transferred, including zero value transfers.  
A token contract which creates new tokens SHOULD trigger a `Transfer` event with the `_from` address set to `0x0` when tokens are created.  
```
event Transfer(address indexed _from, address indexed _to, uint256 _value)
```
#### Approval
MUST trigger on any successful call to `approve(address _spender, uint256 _value)`.  
```
event Approval(address indexed _owner, address indexed _spender, uint256 _value)
```
## Copyright
Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/deed.en).
