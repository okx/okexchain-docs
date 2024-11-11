# KIP20
## KIP20 token
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

