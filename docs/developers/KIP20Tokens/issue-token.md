# Issue Token

Compile and Deploy KIP20 Contract

1.Open Remix IDE: https://remix.ethereum.org
![avatar](../../img/issue-token-01.png)
1.Select solidity language
![avatar](../../img/issue-token-02.png)
1.Create new contract KIP20Token.sol and copy contract code from the KIP20 token template [here](https://github.com/okx/KIPs/blob/master/docs/final)

2.Modify “name”, “symbol”, “decimals” and “totalSupply” according to your requirements.
![avatar](../../img/issue-token-03.png)
Compile the KIP20 token contract

a. Step1: Click button to switch to compile page

b. Step2: Select “KIP20Token” contract

c. Step3: Enable “Auto compile” and    “optimization”

d. Step4: Click “ABI” to copy the contract abi and save it.
![avatar](../../img/issue-token-04.png)
Depoy the contract to OKC

a. Step1: Click button to switch to compile button.

b. Step2: Select “Injected Web3”

c. Step3: Select “KIP20Token”

d. Step4: Client “Deploy” button and Metamask will pop up
![avatar](../../img/issue-token-05.png)

e. Client “confirm” button to sign and broadcast transaction to OKC.
![avatar](../../img/issue-token-06.png)
