# FAQ

## View address
在okexchain中存在两种地址格式，一种是okexchain开头的地，如：`okexchain13temqjlsgq93dygmtgfrvqfzzjq9d4tzug0pt5`；另一种以0x开头的地址，如：`0x8aF3B04bF0400b16911b5A12360122148056d562`。二者由同一个助记词生成，将助记词导入metamask中后，可以恢复出0x开头的地址；使用okexchaincli中可以恢复出okexchain和0x开头的地址。在dex网页和手机客户端可以查看okexchain开头的地址。

## How to use
okexchain开头的地址可以在手机客户端、网页端或okexchaincli上直接使用，进行转账、质押、投票等操作。
0x开头的地址，目前只能在metamaks上使用进行转账操作。

注意：使用okexchain开头的地址只能给okexchain开头的地址转账，不能交叉转账。

## Mutual conversion
0x开头的地址和okexchain开头的地址来自同一助记词，并且可以相互转换。0x开头的地址为Hex格式,目前ethereum在使用这种格式的address。okexchain开头的地址，格式规范来自btc协议[BIP173（bech32）](https://github.com/bitcoin/bitcoin/pull/11167)，目前btc，cosmos都在使用这种格式的address.

两种格式的address可以相互转换，转换方法:使用[okexchain-java-sdk](https://github.com/okex/okexchain-java-sdk/blob/release/v0.16.0/src/main/java/com/okexchain/utils/crypto/AddressUtil.java)、[okexchain-javascript-sdk](https://github.com/okex/okexchain-javascript-sdk/blob/master/src/crypto/index.js)方法convertAddressFromHexToBech32以及方法convertAddressFromBech32ToHex进行转换