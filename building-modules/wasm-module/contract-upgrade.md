# Wasm contract upgrade
Contract upgrades is a unique feature of wasm contracts. Developers can call the Migrate method to upgrade contracts. For example, the developer uploads two sets of wasm codes, and the code IDs are 1 and 2. The developer initializes a contract `A` based on code 1, and the developer can upgrade the underlying code of contract `A` to code 2, and the contract address remains unchanged. After the upgrade, users can use the calling interface and parameters defined in the schema file of code 2 to call the contract.
```Bash
# migrate contract to new code id, <instantiate_message> is the instantiate message of the new code defined in json schema
# e.g.
#    <contractAddr>=ex1eyfccmjm6732k7wp4p6gdjwhxjwsvje44j0hfx8nkgrm8fs7vqfsfxfyxv
#    <new_code_id>=2
#    <instantiate_message>="" (refer to the schema file of the new code)
#    <from_address_or_name>=ex1h0j8x0v9hs4eq6ppgamemfyu4vuvp2sl0q9p3v
#    <fees>=0.01okt
#    <gas>=3000000

exchaincli tx wasm migrate <contractAddr> <new_code_id> <instantiate_message> --from <from_address_or_name> --fees <fees> --gas <gas> -b block -y
```
