
# CLI
## Transaction related actions
#### 1. Upload a wasm binary
```Bash
# upload the wasm code to OKTC and you will get a code id.
# e.g.
#    <path_to_wasm_file>=./cw-plus/target/wasm32-unknown-unknown/release/cw20_base.wasm
#    <from_address_or_name>=ex1h0j8x0v9hs4eq6ppgamemfyu4vuvp2sl0q9p3v
#    <fees>=0.01okt
#    <gas>=3000000

exchaincli tx wasm store <path_to_wasm_file> --from <from_address_or_name> --fees <fees> --gas <gas> -b block -y
```
#### 2. Instantiate a wasm contract
```Bash
# Instantiate a contract with the uploaded code. We can use the code we upload in previous step.
# e.g.
#    <code_id>=1
#    <instantiate_message>
#    <label>=test (label can be any human readable string)
#    <admin_address>=ex1h0j8x0v9hs4eq6ppgamemfyu4vuvp2sl0q9p3v (usually same as <from_address_or_name>)
#    <from_address_or_name>=ex1h0j8x0v9hs4eq6ppgamemfyu4vuvp2sl0q9p3v
#    <fees>=0.01okt
#    <gas>=3000000

exchaincli tx wasm instantiate <code_id> <instantiate_message> --label <label> --admin <admin_address> --from <from_address_or_name> --fees <fees> --gas <gas> -b block -y
```
#### 3. Execute a command on a wasm contract
```Bash
# Call the contract with execute message defined in schema json.
# e.g.
#    <contract_address>=ex1eyfccmjm6732k7wp4p6gdjwhxjwsvje44j0hfx8nkgrm8fs7vqfsfxfyxv
#    <execute_message>=?
#    <admin_address>=ex1h0j8x0v9hs4eq6ppgamemfyu4vuvp2sl0q9p3v (usually same as <from_address_or_name>)
#    <from_address_or_name>=ex1h0j8x0v9hs4eq6ppgamemfyu4vuvp2sl0q9p3v
#    <fees>=0.01okt
#    <gas>=3000000

exchaincli tx wasm execute <contract_address> <execute_message> --from <from_address_or_name> --fees <fees> --gas <gas> -b block -y
```
#### 4. Migrate a wasm contract to a new code version
```Bash
# migrate contract to new code id, <instantiate_message> is the instantiate message of the new code defined in json schema
# e.g.
#    <contractAddr>=ex1eyfccmjm6732k7wp4p6gdjwhxjwsvje44j0hfx8nkgrm8fs7vqfsfxfyxv
#    <new_code_id>=2
#    <instantiate_message>="" (refer to the schema file)
#    <from_address_or_name>=ex1h0j8x0v9hs4eq6ppgamemfyu4vuvp2sl0q9p3v
#    <fees>=0.01okt
#    <gas>=3000000

exchaincli tx wasm migrate <contractAddr> <new_code_id> <instantiate_message> --from <from_address_or_name> --fees <fees> --gas <gas> -b block -y
```
#### 5. Set new admin for a contract
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
#### 6. Clear admin for a contract to prevent further migrations
```Bash
# clear admin of the contract
# e.g.
#    <contractAddr>=ex1eyfccmjm6732k7wp4p6gdjwhxjwsvje44j0hfx8nkgrm8fs7vqfsfxfyxv
#    <admin_address>=ex1h0j8x0v9hs4eq6ppgamemfyu4vuvp2sl0q9p3v
#    <fees>=0.01okt
#    <gas>=3000000

exchaincli tx wasm clear-contract-admin <contractAddr> --from <admin_address> --fees <fees> --gas <gas> -b block -y
```

## Query related actions
#### 1. Query all code information on the chain, including code_id, uploader address, code_hash and contract initialization authority
```Bash
exchaincli query wasm list-code
```
#### 2. Query all contracts corresponding to a given code id (a single wasm code can initialize multiple contracts)
```Bash
# e.g.
#    <code_id>=1

exchaincli query wasm list-contract-by-code <code_id>
```
#### 3. Download wasm code to local
```Bash
# Download wasm bytecode and save to file
# e.g.
#    <code_id>=1
#    <filename>=test.wasm

exchaincli query wasm code <code_id> <filename>
```
#### 4. Query code information, including code_id, uploader address, code_hash and contract initialization authority
```Bash
# e.g.
#    <code_id>=1

exchaincli query wasm code-info <code_id>
```
#### 5. Query contract information, including the code id, code uploader address, admin account and other information respective to the contract
```Bash
# e.g.
#    <contract_address>=ex14hj2tavq8fpesdwxxcu44rty3hh90vhujrvcmstl4zr3txmfvw9s6fqu27

exchaincli query wasm contract <contract_address>
```
#### 6. Query the history of contract actions, including contract initialization actions and contract upgrade actions
```Bash
# e.g.
#    <contract_address>=ex14hj2tavq8fpesdwxxcu44rty3hh90vhujrvcmstl4zr3txmfvw9s6fqu27

exchaincli query wasm contract-history <contract_address>
```
#### 7. Query contract status
- List all status information of this contract
```Bash
# e.g.
#    <contract_address>=ex14hj2tavq8fpesdwxxcu44rty3hh90vhujrvcmstl4zr3txmfvw9s6fqu27

exchaincli query wasm contract-state all <contract_address>
```
- Specify query parameters to query the status of the contract
```Bash
# e.g.
#    <contract_address>=ex14hj2tavq8fpesdwxxcu44rty3hh90vhujrvcmstl4zr3txmfvw9s6fqu27
#    <query_message>='{"balance":{"address":"ex190227rqaps5nplhg2tg8hww7slvvquzy0qa0l0"}}'
# you should refer to the schema file for query message

exchaincli query wasm contract-state smart <contract_address> <query_message>
```
#### 8. List all pinned codes
```Bash
exchaincli query wasm pinned
```
#### 9. Query version number of wasmvm
```Bash
  exchaincli query wasm libwasmvm-version
```
