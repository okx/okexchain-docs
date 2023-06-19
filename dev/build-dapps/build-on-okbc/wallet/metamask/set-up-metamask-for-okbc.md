# Set up MetaMask for OKBC
[MetaMask](https://metamask.io/ "MetaMask") is a crypto wallet designed for seamless integration with web browsers and mobile devices, facilitating interaction with the Ethereum blockchain. It empowers users to effortlessly execute Ethereum DApps directly within their browser environment without running a full Ethereum node.

**Type**: Non-custodial/HD
**Private Key Storage**: User’s local browser storage
**Communication to Ethereum Ledger**: Infura
**Private key encoding**: Mnemonic

> **DANGER**
Please Backup your Secret Recovery Phrase. If your device breaks, is lost, stolen, or has data corruption, there is no other way to recover it. The Secret Recovery Phrase is the only way to recover your MetaMask accounts. Check more [Basic Safety and Security Tips for MetaMask](https://metamask.zendesk.com/hc/en-us/articles/360015489591-Basic-Safety-and-Security-Tips-for-MetaMask "Basic Safety and Security Tips for MetaMask").

## Guide to set up MetaMask for OKBC
- [Download & Install MetaMask](/dev/build-dapps/build-on-okbc/wallet/metamask/overview.html)
- [Configure OKBC on MetaMask](/dev/build-dapps/build-on-okbc/wallet/metamask/add-okbc-to-metamask.html)
- [Configure Custom Tokens](/dev/build-dapps/build-on-okbc/wallet/metamask/configure-custom-tokens.html)
- [Create & Import Accounts](/dev/build-dapps/build-on-okbc/wallet/metamask/create-and-import-accounts.hmtl)

### Step 1
 Set up Web3
#### 1. Install the following in your DApp:

    npm install --save web3
Create a new file, name it web3.js and insert the following code in it:

    import Web3 from 'web3';
    
    const getWeb3 = () => new Promise((resolve) => {
        window.addEventListener('load', () => {
            let currentWeb3;
            if (window.ethereum) {
                currentWeb3 = new Web3(window.ethereum);
                try {
                    // Request account access if needed
                    window.ethereum.enable();
                    // Acccounts now exposed
                    resolve(currentWeb3);
                } catch (error) {
                    // User denied account access...
                    alert('Please allow access for the app to work');
                }
            } else if (window.web3) {
                window.web3 = new Web3(web3.currentProvider);
                // Acccounts always exposed
                resolve(currentWeb3);
            } else {
                console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
            }
        });
    });
    export default getWeb3;
The above file exports a function called `getWeb3()` - the purpose of which is to request MetaMask account’s access via detecting a global object (`ethereum` or `web3`) injected by Metamask.
According to Metamask API documentation:
> MetaMask injects a global API into websites visited by its users at window.ethereum. This API allows websites to request users' Ethereum accounts, read data from blockchains the user is connected to, and suggest that the user sign messages and transactions. The presence of the provider object indicates an Ethereum user.

In simpler terms, it basically means that having Metamask’s extension/add-on installed in your browser, you’d have a global variable defined, called `ethereum` (`web3` for older versions), and using this variable we instantiate our web3 object.

### Step 2
Now, in your client code, import the above file:

    import getWeb3 from '/path/to/web3';
and call the function:

    getWeb3()
    .then((result) => {
        this.web3 = result;// we instantiate our contract next
    });

#### 1. Set up account
Now to send transactions (specifically those that alter the state of the blockchain) we’ll need an account to sign those transactions. We instantiate our contract instance from the web3 object we created above:

    this.web3.eth.getAccounts()
    .then((accounts) => {
        this.account = accounts[0];
    })
The `getAccounts()` function returns an array of all the accounts on user’s MetaMask, and `accounts[0]` is the one currently selected by the user.

#### 2. Instantiate your contracts
Once we have our `web3` object in place, we’ll next instantiate our contracts, assuming you have your contract ABI and address already in place:

    const myContractInstance = new this.web3.eth.Contract(myContractAbi, myContractAddress)

#### 3. Call functions
Now for any function you’d want to call from your contract, we directly interact with our instantiated contract object (which is `myContractInstance` declared in Step 2).
> **A QUICK REVIEW**
Functions that alter the state of the contract are called `send()` functions. Functions that do not alter the state of the contract are called `call()` functions.

##### Calling `call()` Functions
    this.myContractInstance.methods.myMethod(myParams)
    .call()
    .then (
    // do stuff with returned values
    )

##### Calling `send()` Functions
    this.myContractInstance.methods.myMethod(myParams)
    .send({
        from: this.account,gasPrice: 0
    })
    .then (
        (receipt) => {}
        // returns a transaction receipt}
    )