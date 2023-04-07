# KIP20
## KIP20 Token
A KIP20 token must implement the interface IKIP20 in IKIP20.sol. This is a template contract KIP20Token.template. Users just need to fill in _name, _symbol, _decimals and _totalSupply according to their own requirements:
```
  constructor() public {
    _name = {{TOKEN_NAME}};
    _symbol = {{TOKEN_SYMBOL}};
    _decimals = {{DECIMALS}};
    _totalSupply = {{TOTAL_SUPPLY}};
    _balances[msg.sender] = _totalSupply;

    emit Transfer(address(0), msg.sender, _totalSupply);
  }
```
Then users can use [Remix IDE](https://remix.ethereum.org/) and Metamask to compile and deploy the KIP20 contract to OKTC.
## Contract Interaction with Web3 and NodeJS

Connect to OKTC's public RPC endpoint
```
const Web3 = require('web3');

// testnet
const web3 = new Web3('https://exchaintestrpc.okex.org');
```
Create a wallet
```
web3.eth.accounts.create([entropy]);
```
Output:
```
web3.eth.accounts.create();
{
  address: '0x03975c070801D6110EBD8301a0F159f89FB7a4C0',
  privateKey: 'BB1C835AB9770454318D8F19079AA1498EFE3B57654E8084134ADB7854969D93',
  signTransaction: [Function: signTransaction],
  sign: [Function: sign],
  encrypt: [Function: encrypt]
}
```
Recover a wallet
```
const account = web3.eth.accounts.privateKeyToAccount("BB1C835AB9770454318D8F19079AA1498EFE3B57654E8084134ADB7854969D93")
```
Check balance
```
web3.eth.getBalance(holder).then(console.log);
```
Output:
The balance will be bumped by e18 for OKT.
```
6249621999900000000
```
Create transaction
Parameters
- Object - The transaction object to send:
- from - String|Number: The address for the sending account. Uses the web3.eth.defaultAccount property, if not specified. Or an address or index of a local wallet in web3.eth.accounts.wallet.
- to - String: (optional) The destination address of the message, left undefined for a contract-creation transaction.
- value - Number|String|BN|BigNumber: (optional) The value transferred for the transaction in wei, also the endowment if it’s a contract-creation transaction.
- gas - Number: (optional, default: To-Be-Determined) The amount of gas to use for the transaction (unused gas is refunded).
- gasPrice - Number|String|BN|BigNumber: (optional) The price of gas for this transaction in wei, defaults to web3.eth.gasPrice.
- data - String: (optional) Either a ABI byte string containing the data of the function call on a contract, or in the case of a contract-creation transaction the initialisation code.
- nonce - Number: (optional) Integer of a nonce. This allows to overwrite your own pending transactions that use the same nonce.
```
    // // Make a transaction using the promise
    web3.eth.sendTransaction({
        from: holder,
        to: '0x0B75fbeB0BC7CC0e9F9880f78a245046eCBDBB0D',
        value: '1000000000000000000',
        gas: 4500000,
        gasPrice: 17e8,
    }, function(err, transactionHash) {
      if (err) {
        console.log(err);
        } else {
        console.log(transactionHash);
       }
    });
```
