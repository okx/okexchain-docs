# Client Setup
Follow the commands below to setup the `client`:
```
    const client = new OKBChainClient(serverUrl, {
          chainId: chainId,
          isMainnet: false
        })
        const privateKey = crypto.getPrivateKeyFromMnemonic(mnemonic, '60')
        await client.setAccountInfo(privateKey)
        const res = await client.getBalance(from)
        console.log(res)
        expect(res.length).toBeGreaterThanOrEqual(0)
 ```               
Once the client is initiated, you can interact with all available [APIs](https://github.com/okx/okbchain-javascript-sdk/tree/main/docs "APIs").