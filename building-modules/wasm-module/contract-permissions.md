
# Permissions management for wasm smart contracts
### Who can upload the wasm code?
It is controlled by the wasm contract deployment whitelist, which can be updated through proposals, and only addresses in the whitelist can upload the wasm code.
### Who can initialize a contract?
Ownership can usually be specified when uploading a contract, and there are 3 kinds of ownership that can be specified.
1. Anyone can use this code to initialize the contract, which defaults to this owner when no explicit owner is specified
```Bash
exchaincli tx wasm store <path_to_wasm_file> --instantiate-everybody=true --from <from_address_or_name> --fees <fees> --gas <gas> -b block -y
```
2. A specific address can initialize the contract with this code. For example, only `ex1h0j8x0v9hs4eq6ppgamemfyu4vuvp2sl0q9p3vcan` can initialize
```Bash
exchaincli tx wasm store <path_to_wasm_file> --instantiate-only-address=ex1h0j8x0v9hs4eq6ppgamemfyu4vuvp2sl0q9p3v --from <from_address_or_name> --fees <fees> --gas <gas> -b block -y
```
3. No one can use this code to initialize contracts
```Bash
exchaincli tx wasm store <path_to_wasm_file> --instantiate-nobody=true --from <from_address_or_name> --fees <fees> --gas <gas> -b block -y
```
### Who can upgrade a contract?
When the developer initializes the contract, he/she can usually specify an admin address, which is usually the from address of the initialized contract. Only the admin account can upgrade the contract.
```Bash
# migrate contract to new code id, <instantiate_message> is the instantiate message of the new code defined in json schema
# e.g.
#    <contractAddr>=ex1eyfccmjm6732k7wp4p6gdjwhxjwsvje44j0hfx8nkgrm8fs7vqfsfxfyxv
#    <new_code_id>=2
#    <instantiate_message>="{}"
#    <fees>=0.01okt
#    <gas>=3000000

exchaincli tx wasm migrate <contractAddr> <new_code_id> <instantiate_message> --from <from_address_or_name> --fees <fees> --gas <gas> -b block -y
```
The admin account can be transferred, but only the admin account can initiate this action. After the transfer, the old admin account will lose the admin rights, and the new admin account will gain all the admin rights.
```Bash
# transfer admin to a new address
# e.g.
#    <contractAddr>=ex1eyfccmjm6732k7wp4p6gdjwhxjwsvje44j0hfx8nkgrm8fs7vqfsfxfyxv
#    <new_admin_address>=ex190227rqaps5nplhg2tg8hww7slvvquzy0qa0l0
#    <admin_address>=ex1h0j8x0v9hs4eq6ppgamemfyu4vuvp2sl0q9p3v
#    <fees>=0.01okt
#    <gas>=3000000

exchaincli tx wasm set-contract-admin <contractAddr> <new_admin_address> --from <admin_address> --fees <fees> --gas <gas> -b block -y
```
The admin account can clear the admin account, after which no account can upgrade the contract
```Bash
# clear admin of the contract
# e.g.
#    <contractAddr>=ex1eyfccmjm6732k7wp4p6gdjwhxjwsvje44j0hfx8nkgrm8fs7vqfsfxfyxv
#    <admin_address>=ex1h0j8x0v9hs4eq6ppgamemfyu4vuvp2sl0q9p3v
#    <fees>=0.01okt
#    <gas>=3000000

exchaincli tx wasm clear-contract-admin <contractAddr> --from <admin_address> --fees <fees> --gas <gas> -b block -y
```
In addition, OKTC also provides a proposal function, and validators can upgrade contracts and clear the admin account of a specific contract through proposals and voting.

### Who can call a contract?
Generally speaking, anyone can initiate a call to any contract, but the contract upgrade may cause the interface to change and cause the old contract interface to render invalid, so the old interface will no longer be able to be called.

Or when there is a loophole in the contract, the validator can add a specific interface of a specific contract to the blacklist through proposals and voting, and subsequent calls to the contract interface will render invalid.
