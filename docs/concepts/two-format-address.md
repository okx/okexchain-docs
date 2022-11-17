# Two format address

## The relationship between ex and 0x address
There are two address formats in ex, one is the address at the prefix of ex, such as: `ex1hcngft7gfkhn8z8fnlajzh7agyt0az0v6ztmme`;Another address starts with 0x, such as: `0x8aF3B04bF0400b16911b5A12360122148056d562`.The addresses prefix with 0x and ex are from the same mnemonic, the balance under their address is the same, the same number of okt for the owner under the two addresses. After the mnemonic is imported into the metamask, the address starting with 0x can be recovered;Use exchaincli to view addresses starting with 0x and ex. You can view the address prefix with ex on the dex web page and mobile client.

## How to use
The address starting with ex can be used directly on the mobile client, web page or exchaincli for operations such as transfer, deposit, and voting.Addresses starting with 0x can only be used for transfer operations on metamasks at present.

`Note`: Using addresses prefix with ex can only transfer funds to addresses prefix with ex, and cannot be cross-transferred.

## Mutual conversion
The address at the prefix of 0x and the address at the prefix of ex come from the same mnemonic and can be converted to each other.Addresses starting with 0x are in Hex format, and ethereum currently uses addresses in this format.The address at the prefix of ex, the format specification comes from the btc protocol[BIP173（bech32）](https://github.com/bitcoin/bitcoin/pull/11167)，Currently btc and cosmos are using this format address.

The address of the two formats can be converted mutually, the conversion method: use[exchain-java-sdk](https://github.com/okex/exchain-java-sdk/blob/v0.18.0/src/main/java/com/okexchain/utils/crypto/AddressUtil.java)、[exchain-javascript-sdk](https://github.com/okex/exchain-javascript-sdk/blob/master/src/crypto/index.js)method convertAddressFromHexToBech32 and method convertAddressFromBech32ToHex to convert
