<!--
order: 1
-->

# OKChain Client

## OKChain CLI

`okchaincli` is the tool that enables you to interact with the node that runs on the OKChain network, whether you run it yourself or not. Let us set it up properly. In order to install it, follow the [installation procedure](../getting-start/install-okchain.html).

## Setting up okchaincli

The main command used to set up `okchaincli` is the following:

```bash
okchaincli config <flag> <value>
```

It allows you to set a default value for each given flag.

First, set up the address of the full-node you want to connect to:

```bash
okchaincli config node <host>:<port>

# example: okchaincli config node tcp://35.176.62.211:26657
```

Or any of the following address ports:
```
35.176.62.211:26657
18.132.46.47:26657
15.164.104.138:26657
```


If you run your own full-node, just use `tcp://localhost:26657` as the address.

Then, let us set the default value of the `--trust-node` flag:

```bash
okchaincli config trust-node true

# Set to true if you trust the full-node you are connecting to, false otherwise
```

Finally, let us set the `chain-id` of the blockchain we want to interact with:

```bash
okchaincli config chain-id okchain
```

Set the output format of okchaincli request response
```bash
okchaincli config output json    
okchaincli config indent true
```

## okchaincli user manual

* [Keys](#keys)  
* [Account](#account)  
* [Token](#token)  
* [Dex](#dex)  
* [Orders](#orders)  
* [Backend](#backend)  
* [Staking](#staking)  
* [Distribution](#distribution)  
* [Governance](#governance)  
* [Params](#params)  
* [Slashing](#slashing)  
* [Debug](#debug)  



## Keys

### 1. Add an account:
#### Parameter description:

  | Parameter |        Mark         |
  | ------- | ------------------------ |
  |   name    | Add an account name (eg. bob) |

#### Example:
The system will randomly gerenate information including mnemonic phrases, public keys and addresses 
```bash
okchaincli keys add <name> [flags]
```
#### Successful response:
```
okchaincli keys add wind
  
# Example output
{
  "name": "wind",
  "type": "local",
  "address": "okchain1ltxwpg2f2frsnq3et3qp7sfz2u44qsaj5ytlcf",
  "pubkey": "okchainpub1addwnpepqg8g82chdrf4ra4fn39e0lhzmds6qgs75emlzp2kqw5n69xt0fz3cewvx06",
  "mnemonic": "alpha enroll regret dizzy bid reunion company divorce layer narrow ceiling state"
  }
  
# Recover keys by mnemonic phrases
okchaincli keys add --recover admin   -y -m "keen border system oil inject hotel hood potato shed pumpkin legend actor"
```

### 2. Display all local key information:
#### Parameter description:

  Null

#### Example:
Display all local key information
```bash
okchaincli keys list [flags]
```
#### Successful response:
```
  okchaincli keys list
  
  # Example output
  [
    {
      "name": "admin16",
      "type": "local",
      "address": "okchain1v853tq96n9ghvyxlvqyxyj97589clccr33yr7a",
      "pubkey": "okchainpub1addwnpepq2nfj9lqmqrwjyrqnp574tll493svxdltwlnqq3vn5ptmf2ceraesgyfegg"
    },
    {
      "name": "alice",
      "type": "local",
      "address": "okchain1vr9u0u829g68vcy6y362efm3tky4mhfxf28tth",
      "pubkey": "okchainpub1addwnpepq2nkjj2tv9yyvfaevc45n3tszsl9l7t642rh5j2udvwn5uee26gqv7vwhun"
    },
  ]
```

### 3. Display the information on the key of a specific user:
#### Parameter description:

  | Parameter |           Mark           |
  | :-------: | :-----------------------------: |
  |   name    | Account name to be displayed (eg. bob) |

#### Example:
Display the information on the key of a specific user
```bash
okchaincli keys show [name [name...]] [flags]
```
#### Successful response:
```
  okchaincli keys show bob
  
  # Example output
  {
    "name": "bob",
    "type": "local",
    "address": "okchain10487f9wxss2g2ctvpewkmjk543vg65x9rzv09n",
    "pubkey": 	  "okchainpub1addwnpepq2gaqy8nk0z0plexzusvs4g97wsvjtqftnpjkmw25lfh2hjz3wk0svf030h"
  }
```

### 4. Delete the information on the key of a specific user:
#### Parameter description:

  | Parameter |           Mark           |
  | :-------: | :-----------------------------: |
  |   name    | Account name to be deleted (eg. bob) |

#### Example:
Delete the information on the key of a specific user
```bash
okchaincli keys delete <name> [flags]
```
#### Successful response:
```
  okchaincli keys delete bob
  
  #Example output
  DANGER - enter password to permanently delete key:
  Key deleted forever (uh oh!)
```

### 5. Update the information on the key of a specific user:
#### Parameter description:

  | Parameter | Mark               |
  | --------- | ------------------------- |
  | name      | Account name to be updated (eg. bob) |

#### Example:
Update the information on the key of a specific user:
```bash
okchaincli keys update <name> [flags]
```
#### Successful response:
```
  okchaincli keys update bob
  
  # Example output
  Enter the current passphrase:
  Enter the new passphrase:
  Repeat the new passphrase:
  Password successfully updated!
```

### 6. Generate a bip39 mnemonic phrase:
#### Parameter description:

  Null

#### Example:
Generate a bip39 mnemonic phrase
```bash
okchaincli keys mnemonic [flags]
```
#### Successful response:
```
okchaincli keys mnemonic

# Example output
board zone elevator lesson welcome meadow love card obey cruise unlock double
```


## Account

### Query account balance:
#### Parameter description:

  | Parameter |                         Mark                          |
  | :-------: | :----------------------------------------------------------: |
  |  Address  | User address (eg. okchain10q0rk5qnyag7wfvvt7rtphlw589m7frsmyq4ya) |

#### Example:
Query user information, including serial numbers, public keys and token balances
```bash
okchaincli query account <address>
```
#### Successful response:
```
  okchaincli query account okchain10q0rk5qnyag7wfvvt7rtphlw589m7frsmyq4ya
  
  # Example output
  {
    "type": "auth/Account",
    "value": {
      "address": "okchain10q0rk5qnyag7wfvvt7rtphlw589m7frsmyq4ya",
      "coins": [
        {
          "denom": "acoin",
          "amount": "10000000.00000000"
        },
        {
          "denom": "bcoin",
          "amount": "10000000.00000000"
        },
        {
          "denom": "bcoin-805",
          "amount": "200000.00000000"
        },
        {
          "denom": "tokt",
          "amount": "9920000.00000000"
        },
      ],
      "public_key": {
        "type": "tendermint/PubKeySecp256k1",
        "value": "AgYaL1tZ7ekqvweQhKojG8sDHUfN23qJWviAsTDIWvYU"
      },
      "account_number": "3",
      "sequence": "4"
    }
   }  
```


## Token

Token attributes

|      Name      |      Type       |            Description             |
| -------------- | --------------- | ---------------------------------- |
|     Symbol     |     string      |    unique token ticker, eg. bcoin-y60  |
| OriginalSymbol |     string      | original token ticker entered by the user, eg. bcoin |
|      Desc      |     string      |     token description limited to 256 bytes     |
|   WholeName    |     string      |            full token name             |
|  TotalSupply   |      int64      |          total token supply           |
|     Owner      | string(address) |           token owner            |
|    Mintable    |      Bool       |       indicate whether whether to increase the supply of tokens         |


Dex supports the token issuance function. Commands are as follows:

```bash
okchaincli tx token [command]
```

Secondary sub-commands mainly include the following 7 functions
### 1. Transfer

```bash
okchaincli tx send <addr> <amount> --from <name>
```

#### Parameter description


|      Name      |      Type       |            Description             |
| -------------- | --------------- | ---------------------------------- |
|     amount     |     string      |    recipient address  |
| amount |     string      | transfer amount, covering various cryptocurrencies separated by commas, eg. 1tokt, 2bcoin |
|      from      |     string      |     token owner     |


#### Example

```bash
okchaincli tx send okchain1jrhfgvmun4wd5qekxg2ma4xr405pn4dpwtx2qf 2tokt --from alice -b block
```
#### Successful response:
```
{
  "height": "63",
  "txhash": "AF5742022E2A183AB0C9BB90F130BFBBFEE1E69C05B20F4E417C2C9E93A52A16",
  "raw_log": "[{\"msg_index\":\"0\",\"success\":true,\"log\":\"\"}]",
  "logs": [
    {
      "msg_index": "0",
      "success": true,
      "log": ""
    }
  ],
  "tags": [
    {
      "key": "fee",
      "value": "0.01250000 tokt"
    },
    {
      "key": "action",
      "value": "send"
    }
  ]
}
```
### 2. Issue tokens：
#### parameter description:

  |        Name        |  Type  |                       **Description**                        |
  | :----------------: | :----: | :----------------------------------------------------------: |
  |       symbol       | string | symbol is a non-case-sensitive token ticker limited to 6 alphanumeric characters, but the first character cannot be a number, eg. “bcoin” since the system will automatically add 3 random characters, such as "bcoin-gf6" |
  |        desc        | string |           token description limited to 256 bytes            |
  |  total-supply(-n)  |  int   |                         total token supply                         |
  |   whole-name(-w)   | string |                           full token name                           |
  |      mintable      | string |                      indicate whether to increase the supply of tokens                      |
  |        from        | string |                          token owner                          |
  | broadcast-mode(-b) | string |               transaction broadcast modes (sync\|async\|block)               |

#### Example:
Issue a new token
```bash
okchaincli tx token issue [flags]
```
#### Successful response:
```
okchaincli tx token issue --from alice --symbol bcoin -n 200000 -w 'bcoin' --desc 'blockchain coin' -b block --mintable  
# example  
{
  "height": "340949",
  "txhash": 	"02978378301B38883C5CA9E17997B5CC5701DED817BA8B516851B1F706BD2544",
  "raw_log": "[{"msg_index":"0","success":true,"log":""}]",
  "logs": [
    {
      "msg_index": "0",
      "success": true,
      "log": ""
    }
  ],
  "tags": [
    {
      "key": "fee",
      "value": "20000.00000000 tokt"
    },
    {
      "key": "action",
      "value": "issue"
    },
    {
      "key": "symbol",
      "value": "bcoin-254"
    }
  ]
}
```
### 3. Increase the supply of tokens：
#### Parameter description:

  |  Name  |  Type  |    **Description**    |
  | :----: | :----: | :-------------------: |
  | amount |  int   |      amount of increase in supply       |
  | symbol | string |  token symbol  |
  |  from  | string |      token owner       |

#### Example:
A certain amount of supply of tokens issued is increased and only tokens with mintable parameters upon issuance can be issued
```bash
okchaincli tx token mint [flags]
```
#### Successful response:
```
okchaincli tx token mint --amount 10000000 --symbol tokt --from alice -b block
# Example output
{
  "height": "341001",
  "txhash": "D890F0A3140797410179270BFF5353B15AAF0C14847715319DA64499754BECF6",
  "raw_log": "[{\"msg_index\":\"0\",\"success\":true,\"log\":\"\"}]",
  "logs": [
     {
       "msg_index": "0",
       "success": true,
       "log": ""
     }
    ],
  "tags": [
     {
       "key": "fee",
       "value": "2000.00000000 tokt"
     },
     {
       "key": "action",
       "value": "mint"
     }
   ]
}
```
### 4. Burn tokens：
#### Parameter description:

 |  Name  |  Type  |        Description         |
 | :----: | :----: | :------------------------: |
 | amount | string | amount of tokens burnt (decimal places allowed) |
 | symbol | string |   token symbol    |
 |  from  | string |         token owner         |

#### Example:
A certain amount of tokens issued are burnt
```bash
okchaincli tx token burn [flags]
```
#### Successful response:
```
okchaincli tx token burn --from alice --symbol tokt --amount 100.0 -b block
  # Example output
{
  "height": "341036",
  "txhash": "DB72C94B7D42EAEEE0AC129488DC637B270B9E389FFA5FD483DE927DB92D928F",
  "raw_log": "[{\"msg_index\":\"0\",\"success\":true,\"log\":\"\"}]",
  "logs": [
    {
      "msg_index": "0",
      "success": true,
      "log": ""
    }
  ],
  "tags": [
    {
      "key": "fee",
      "value": "10.00000000 tokt"
    },
    {
      "key": "action",
      "value": "burn"
    }
  ]
}
```
### 5. Query token information:
#### Example:
Query token information
```bash
  okchaincli query token info <symbol>
```
#### Successful response:
```
  # Example output
  {
    "desc": "blockchain coin",
    "symbol": "bcoin-254",
    "originalSymbol": "bcoin",
    "wholeName": "bcoin",
    "totalSupply": "200000",
    "owner": "okchain10q0rk5qnyag7wfvvt7rtphlw589m7frsmyq4ya",
    "mintable": true
  }
```
### 6. Transfer multiple tokens to users at the same time: 
#### Example:
Transfer multiple tokens to users at the same time and specify the transfer files through --transfers-file. When --transfers-file is specified, --transfers is ignored
```bash
okchaincli tx token multi-send [flags]
```
#### Successful response:

```
  okchaincli tx token multi-send --from alice --transfers '[{"to":"okchain106205vgqv4fnn0yqcq7y7j936pv4kznv99yw85","amount":"1tokt,2btc-254"}]' -b block
  
  # Example output
  {
    "height": "341487",
    "txhash": "1FA997F9557156A36AC8E3E2B5932888973796ABD0FB6FCEB3581B3BDF495D6B",
    "raw_log": "[{\"msg_index\":\"0\",\"success\":true,\"log\":\"\"}]",
    "logs": [
      {
        "msg_index": "0",
        "success": true,
        "log": ""
      }
    ],
    "tags": [
      {
        "key": "fee",
        "value": "0.02000000 tokt"
      },
      {
        "key": "action",
        "value": "multi-send"
      }
    ]
  }
```
### 7. Multi-signature transfer

Multi-signature transfer consists of multiple steps:

#### 7.1. Creat accounts p1, p2, p3：
Example:
```bash
okchaincli keys add --pubkey=okchainpub1addwnpepqtg367t3j6myh4ces0luq3f6g87ptzwszpl9g5r28tgavypkdmm2w5l4zuq p1

okchaincli keys add --pubkey=okchainpub1addwnpepqg334a4my6ufrs7r0ajsd6lxac9arsvtqljf0fzrgr27xvf3n5uugpsxna8 p2

okchaincli keys add --pubkey=okchainpub1addwnpepqd7jd60n88tk98hyh72xsw48pjpfhdw0cd77ju59eqc88sxscfjkgx7tyfc p3
```

#### 7.2. Generate multi-signature public keys:

* Aggregate multi-signature public keys p1, p2 and p3 and set the signature threshold as N, which means the transfer is effective after obtaining N people's signatures.

* Set the signature threshold as 2 in the example:
```bash  
okchaincli keys add --multisig-threshold=2 --multisig=p1,p2,p3 p1p2p3
```

`--multisig-threshold` is the threshold for the number of private keys involved in multi-signature transactions.

`--multisig` tag must contain the names of sub-public keys to be aggregated into a single public key, which will be generated in a local database and stored as `new_key_name`. All names provided via `--multisig` must have already existed in the local database.

* Display user addresses and deposit into them:
Display user addresses p1, p2, p3 and deposit 100.1 TOKT into them
* Example:
```bash
okchaincli keys show -a p1p2p3
okchaincli tx send okchain1553hrs03kl2tlq47d9f6j477xdjp362l2cfetl 100.1tokt --from=alice
okchaincli query account okchain1553hrs03kl2tlq47d9f6j477xdjp362l2cfetl

```
#### 7.3. Multi-signature:
##### Create an unsigned transaction:
Create an unsigned transaction `unsignedTx.json`
###### Example:
```bash
okchaincli tx send okchain1xd07r5a3e2mf4srqck3hvzww24c65hpt604ge5 10tokt \
  --chain-id=okchain \
  --from=okchain1553hrs03kl2tlq47d9f6j477xdjp362l2cfetl \
  --generate-only > unsignedTx.json
```
##### p1, p2, p3 sign:
###### Example:
```bash
okchaincli tx sign \
  --multisig=okchain1553hrs03kl2tlq47d9f6j477xdjp362l2cfetl \
  --from=alice \
  --output-document=p1signature.json \
  unsignedTx.json

 
okchaincli tx sign \
  --multisig=okchain1553hrs03kl2tlq47d9f6j477xdjp362l2cfetl \
  --from=jack \
  --output-document=p2signature.json \
  unsignedTx.json 
```
##### Create an aggregate signature: 
Create an aggregate signature `signedTx.json` since the default threshold is set to 2 so that a transaction with p1p2 can be executed.
###### Example:
```bash 
okchaincli tx multisign \
  unsignedTx.json \
  p1p2p3 \
  p1signature.json p2signature.json > signedTx.json
```
#### 7.4. Execute a transaction signedTx.json：
Execute a signed `signedTx.json` offline and query the balance for confirmation.
##### Example:
```bash 
okchaincli tx broadcast signedTx.json

okchaincli query account okchain1553hrs03kl2tlq47d9f6j477xdjp362l2cfetl
```
### 8. Transfer token ownership:

We support the function where token ownership can be transferred to another person. In order to ensure the security of token ownership transfer, multi signatures are required to validate the transfer. The process consists of the following 4 steps:

#### original owner(from) generates an unsigned tx：
##### Example:
```bash
okchaincli tx token transfer-ownership [flags]
```
##### Successful response:
```
# from alice to jack
okchaincli tx token transfer-ownership --from okchain1pck0wndww84wtppc0vz9mcuvv7j5lcg00yf3gp --to okchain1x045ccxnwpurav2d5e25k25383qpmsr73293w0 --symbol tokt > unsignedTx.json

# unsignedTx.json
{
	"type": "auth/StdTx",
	"value": {
		"msg": [{
			"type": "token/TransferOwnership",
			"value": {
				"from_address": "okchain1pck0wndww84wtppc0vz9mcuvv7j5lcg00yf3gp",
				"to_address": "okchain1x045ccxnwpurav2d5e25k25383qpmsr73293w0",
				"symbol": "tokt",
				"to_signature": {
					"pub_key": null,
					"signature": null
				}
			}
		}],
		"signatures": null,
		"memo": ""
	}
}
```

#### owner(to) signs to validate the transfer：
##### Example:
```bash
okchaincli tx token multisigns unsignedTx.json
```
##### Successful response:
```
okchaincli tx token multisigns unsignedTx.json --from jack > signedTx1.json -y

# signedTx1.json
{
	"type": "auth/StdTx",
	"value": {
		"msg": [{
			"type": "token/Chown",
			"value": {
				"from_address": "okchain1pck0wndww84wtppc0vz9mcuvv7j5lcg00yf3gp",
				"to_address": "okchain1x045ccxnwpurav2d5e25k25383qpmsr73293w0",
				"symbol": "tokt",
				"to_signature": {
					"pub_key": {
						"type": "tendermint/PubKeySecp256k1",
						"value": "A6zP2A10dBxpR6oNKD8Q+j285lJ63PEecFyK19mcYodh"
					},
					"signature": "lfL+i1YRtddruRpd2PloI7Ss1CYTyu5bBz4AmBm9eVYEvmghUqNrkERm12fetiGh1ux1R/WiXijeomjFQHNkrQ=="
				}
			}
		}],
		"signatures": null,
		"memo": ""
	}
}
```

#### original owner(from) signs：
##### Example:
```bash
okchaincli tx sign [flags]
```
##### Successful response:
```
okchaincli tx sign --from alice signedTx1.json > signedTx.json -y

# signedTx.json
{
  "type": "auth/StdTx",
  "value": {
    "msg": [
      {
        "type": "token/Chown",
        "value": {
          "from_address": "okchain1pck0wndww84wtppc0vz9mcuvv7j5lcg00yf3gp",
          "to_address": "okchain1x045ccxnwpurav2d5e25k25383qpmsr73293w0",
          "symbol": "tokt",
          "to_signature": {
            "pub_key": {
              "type": "tendermint/PubKeySecp256k1",
              "value": "A6zP2A10dBxpR6oNKD8Q+j285lJ63PEecFyK19mcYodh"
            },
            "signature": "lfL+i1YRtddruRpd2PloI7Ss1CYTyu5bBz4AmBm9eVYEvmghUqNrkERm12fetiGh1ux1R/WiXijeomjFQHNkrQ=="
          }
        }
      }
    ],
    "signatures": [
      {
        "pub_key": {
          "type": "tendermint/PubKeySecp256k1",
          "value": "A/EpsisD1SuP2aMjErP/RmCiPgFbMQcd2ADUM4dCmYvk"
        },
        "signature": "5G3e8VjKulShcgbp3gL4Wfk3QhFVRyQ/YgVdCsokJTplAT58P5jfkkn0Qjwuv3kKNIOYC8k1n4jhauqM0WCZWQ=="
      }
    ],
    "memo": ""
  }
}
```

#### tx upon multi-signature broadcast：
##### Example:
```bash
okchaincli tx broadcast signedTx.json
```
##### Successful response:
```
okchaincli tx broadcast signedTx.json -b block -y

# Example
{
  "height": "136",
  "txhash": "C59A61BE30A15D57702C32C2C2DBBEA740B372135E89831205C51B2880CBA0B9",
  "raw_log": "[{\"msg_index\":\"0\",\"success\":true,\"log\":\"\"}]",
  "logs": [
    {
      "msg_index": "0",
      "success": true,
      "log": ""
    }
  ],
  "tags": [
    {
      "key": "fee",
      "value": "10.00000000 tokt"
    },
    {
      "key": "action",
      "value": "transfer"
    }
  ]
}
```

The transfer of token ownership is successful only after the original owner(from) and the owner(to) sign upon and after the transfer.


## Dex

Decentralized exchange management subcommands

```bash
$ okchaincli tx dex  -h

Usage:
  okchaincli tx dex [command]

Available Commands:
  list               list a trading pair
  deposit            deposit an amount of token on a product
  withdraw           withdraw an amount of token from a product
  transfer-ownership change the owner of the product
  multisign          append signature to the unsigned tx file of transfer-ownership

Flags:
  -h, --help   help for dex
```


Secondary subcommand including features as below


### List a token pair

```shell
$ okchaincli tx dex list -h

Example:
    okchaincli tx dex list --base-asset tusdk-9a2 --quote-asset tbtc-965 --from mykey -b block -y

Usage:
    okchaincli tx dex list [flags]
  
Flags:
      --base-asset string       base-asset should be issued before listed to opendex (default "btc")
  -b, --broadcast-mode string   Transaction broadcasting mode (sync|async|block) (default "sync")
      --from string             Name or address of private key with which to sign
  -h, --help                    help for list
      --init-price string       init-price should be valid price (default "0.01")
      --quote-asset string      quote-asset should be issued before listed to opendex (default "tokt")
  -y, --yes                     Skip tx broadcasting prompt confirmation

```

### Deposit an amount of tokt on a token pair

```shell
$ okchaincli tx dex deposit -h

Example:
    okchaincli tx dex deposit tusdk-9a2_tbtc-965 100tokt --from mykey -b block -y

Usage:
    okchaincli tx dex deposit [product] [amount] [flags]

Flags:
      --from string             Name or address of private key with which to sign
  -h, --help                    help for deposit
      --node string             <host>:<port> to tendermint rpc interface for this chain (default "tcp://localhost:26657")
  -y, --yes                     Skip tx broadcasting prompt confirmation
```


### Withdraw an amount of tokt from a token pairs

```shell
$ okchaincli tx dex  withdraw -h

Example:
    okchaincli tx dex withdraw tusdk-9a2_tbtc-965 50tokt --from mykey -b block -y

Usage:
    okchaincli tx dex withdraw [product] [amount] [flags]

Flags:

      --from string             Name or address of private key with which to sign
  -h, --help                    help for withdraw
  -y, --yes                     Skip tx broadcasting prompt confirmation
```

### transfer the ownership of token pair

We support to transfer ownership of the token pairs to others. It needs multi-sign for the security of transfer transaction. The procedure can be divided into 4 steps:

#### Step 1: Previous owner(from) generate unsigned tx：

Create transfer transaction by  previous owner

```shell
$ okchaincli tx dex transfer-ownership -h

Example:
    okchaincli tx dex transfer-ownership --from mykey --to  okchain1eh7953xgu526hfjnyfpkdxrn78746gusg29pmy --product eox-22d_tokt > unsignedTx.json

Usage:
    okchaincli tx dex transfer-ownership [flags]

Flags:
  -b, --broadcast-mode string   Transaction broadcasting mode (sync|async|block) (default "sync")
      --from string             Name or address of private key with which to sign
  -h, --help                    help for transfer-ownership
  -p, --product string          product to be transfered
      --to string               the user to be transfered
  -y, --yes                     Skip tx broadcasting prompt confirmation

```

##### unsignedTx.json
```
{
    "type":"cosmos-sdk/StdTx",
    "value":{
        "msg":[
            {
                "type":"dex/MsgTransferOwnership",
                "value":{
                    "from_address":"okchain10q0rk5qnyag7wfvvt7rtphlw589m7frsmyq4ya",
                    "to_address":"okchain1eh7953xgu526hfjnyfpkdxrn78746gusg29pmy",
                    "product":"eox-22d_tokt",
                    "to_signature":{
                        "pub_key":null,
                        "signature":null
                    }
                }
            }
        ],
        "signatures":null,
        "memo":""
    }
}
```

#### Step 2:Target owner(to) sigh

Sign transaction file of transfer-ownership by target owner

```
$ okchaincli tx dex multisign -h

Example:
    okchaincli tx dex multisign --from okchain1eh7953xgu526hfjnyfpkdxrn78746gusg29pmy unsignedTx.json > signedTx1.json -y

Usage:
    okchaincli tx dex multisign [flags]
  
Flags:
      --from string             Name or address of private key with which to sign
  -h, --help                    help for multisign
  -y, --yes                     Skip tx broadcasting prompt confirmation
```

##### signedTx1.json
```
{
    "type":"cosmos-sdk/StdTx",
    "value":{
        "msg":[
            {
                "type":"dex/MsgTransferOwnership",
                "value":{
                    "from_address":"okchain10q0rk5qnyag7wfvvt7rtphlw589m7frsmyq4ya",
                    "to_address":"okchain1eh7953xgu526hfjnyfpkdxrn78746gusg29pmy",
                    "product":"eox-22d_tokt",
                    "to_signature":{
                        "pub_key":{
                            "type":"tendermint/PubKeySecp256k1",
                            "value":"AwsiTrrGe4G0gDJj8u8T5s5ik65WmwgR+qdeepx9R4qg"
                        },
                        "signature":"mgf3IxbttnNjel2ZCAxoqIKPX2oqU8YcZxW6fcgGD5o+kDEqBP+LewHtdZf9UIUA1/GVSkzjtG1JjiClDGvstQ=="
                    }
                }
            }
        ],
        "signatures":null,
        "memo":""
    }
}
```

#### Step 3:Previous owner(from) sign

Sign transaction file of multisign by previous owner
```shell
$ okchaincli tx sign  -h

Example:
    okchaincli tx sign --from alice signedTx1.json > signedTx.json -y

Usage:
    okchaincli tx sign [file] [flags]

Flags:
      --from string              Name or address of private key with which to sign
      --multisig string          Address of the multisig account on behalf of which the transaction shall be signed
  -y, --yes                      Skip tx broadcasting prompt confirmation

```

##### signedTx.json

```json
{
  "type": "cosmos-sdk/StdTx",
  "value": {
    "msg": [
      {
        "type": "dex/MsgTransferOwnership",
        "value": {
          "from_address": "okchain10q0rk5qnyag7wfvvt7rtphlw589m7frsmyq4ya",
          "to_address": "okchain1eh7953xgu526hfjnyfpkdxrn78746gusg29pmy",
          "product": "eox-22d_tokt",
          "to_signature": {
            "pub_key": {
              "type": "tendermint/PubKeySecp256k1",
              "value": "AwsiTrrGe4G0gDJj8u8T5s5ik65WmwgR+qdeepx9R4qg"
            },
            "signature": "mgf3IxbttnNjel2ZCAxoqIKPX2oqU8YcZxW6fcgGD5o+kDEqBP+LewHtdZf9UIUA1/GVSkzjtG1JjiClDGvstQ=="
          }
        }
      }
    ],
    "signatures": [
      {
        "pub_key": {
          "type": "tendermint/PubKeySecp256k1",
          "value": "AgYaL1tZ7ekqvweQhKojG8sDHUfN23qJWviAsTDIWvYU"
        },
        "signature": "82HJ0dHE1la3/fph1IDcl6Uarxi1lKOAIQ51Q6Z0YgBnilXPgGzy+9er+RQFnTZa2SG8cyTK6LWr8LyiGMTQWQ=="
      }
    ],
    "memo": ""
  }
}
```

#### Step 4:Broadcast transactions after multi-signed

Broadcast transactions created 

```
$ okchaincli tx broadcast -h

Example:
    okchaincli tx broadcast signedTx.json --from alice -b block -y

Usage:
    okchaincli tx broadcast [file_path] [flags]


Flags:
      --from string             Name or address of private key with which to sign
  -h, --help                    help for broadcast
  -y, --yes                     Skip tx broadcasting prompt confirmation
```

The original owner (from) and the transferred owner (to) must sign together to successfully transfer the ownership of the token.

### Query the listed token pairs

```shell
$ okchaincli query dex products -h

Example:
    okchaincli query dex products -p 1 -i 1

Usage:
    okchaincli query dex products [flags]

Flags:
-h, --help                 help for products
-i, --items-per-page int   items per page (default 50)
    --node string          <host>:<port> to Tendermint RPC interface for this chain (default "tcp://localhost:26657")
    --owner string         address of the product owner
-p, --page-number int      page num (default 1)
```

### Query token pairs deposits of account

```shell
$ okchaincli query dex deposits -h

Example:
    okchaincli query dex deposits okchain1w7xcg4t90fxcpe95dzhykcvs9skzz2xsy60g3u -i 1

Usage:
    okchaincli query dex deposits [account-addr] [flags]

Flags:
-h, --help                 help for deposits
-i, --items-per-page int   items per page (default 50)
-p, --page-number int      page num (default 1)
```

### Query the match order of token pairs

```shell
$ okchaincli query dex match-order -h

Example:
    okchaincli query dex match-order -i 1 --node ${url}

Usage:
    okchaincli query dex match-order [flags]

Flags:
-h, --help                 help for match-order
-i, --items-per-page int   items per page (default 50)
-p, --page-number int      page num (default 1)
```

### Query relevant parameters from DEX

Query the all the parameters for the governance process

```shell
$ okchaincli query dex  params -h

Example:
    okchaincli query dex  params --node ${url}

Usage:
    okchaincli query dex params [flags]

```

### Query all the delisting token pairs

Query all the products' names involved in dex delisting

```shell
$ okchaincli query dex  products-delisting -h

Example:
    okchaincli query dex  products-delisting --node ${url}

Usage:
    okchaincli query dex products-delisting [flags]
```


## Orders

Order attributes

|      Name       |      Type       |       Mark        |
| :-------------: | :-------------: | :------------------: |
| txhash          |string           | txHash of the place order tx|
| order_id         |string           | order id, denoted as "blockHeight-orderNumInBlock".|
| sender          |string           | order maker address|
| product         |string           | product for trading pair in full name of the tokens|
| side            |string           | BUY/SELL|
| price           |string           | price of the order|
| quantity        |string           | quantity of the order|
| status          |int64            | order status,(0-5) respectively represents (Open, Filled, Cancelled, Expired, PartialFilledCancelled, PartialFilledExpired)|
| filled_avg_price  |string           | filled average price|
| remain_quantity  |string           | Remaining quantity of the order|
| remain_locked    |string           | Remaining locked quantity of token|
| timestamp       |int64            | created timestamp|
| order_expire_blocks|int64          | the number of block heights that need to pass when the order expires |
| fee_per_block    | string          | handling fee receivable for each block |
| extra_info       |string           | extra info of order in json format|

### 1. Place or cancel an order:

Dex supports order placing and cancellation functions. Commands are as follows:

```bash
okchaincli tx order
```

Secondary sub-commands mainly include the following 2 functions

#### 1.1 Place orders:
##### Example:
Place one or multiple orders.
```bash
# place orders
okchaincli tx order new [flags]
```
```
Flags:
  -a, --account-number uint     The account number of the signing account (offline mode only)
  -b, --broadcast-mode string   Transaction broadcasting mode (sync|async|block) (default "sync")
      --from string             Name or address of private key with which to sign
      --generate-only           Build an unsigned transaction and write it to STDOUT (when enabled, the local Keybase is not accessible and the node operates offline)
  -h, --help                    help for new
      --indent                  Add indent to JSON response
      --ledger                  Use a connected Ledger device
      --memo string             Memo to send along with transaction
      --node string             <host>:<port> to tendermint rpc interface for this chain (default "tcp://localhost:26657")
  -p, --price string            The price of the order
      --product string          Trading pair in full name of the tokens: ${baseAssetSymbol}_${quoteAssetSymbol}, for example "mycoin_tokt".
  -q, --quantity string         The quantity of the order
      --sequence uint           The sequence number of the signing account (offline mode only)
  -s, --side string             BUY or SELL (default "SELL")
      --trust-node              Trust connected full node (don't verify proofs for responses) (default true)
  -y, --yes                     Skip tx broadcasting prompt confirmation

Global Flags:
      --chain-id string   Chain ID of tendermint node
  -e, --encoding string   Binary encoding (hex|b64|btc) (default "hex")
      --home string       directory for config and data (default "/Users/dwil/.okchaincli")
  -o, --output string     Output format (text|json) (default "text")
      --passwd string     Pass word of sender (default "12345678")
      --trace             print out full stack trace on errors

```
##### Successful response:
```
# example
okchaincli tx order new --product xxb-08a_tokt,xxb-08a_tokt -s BUY,BUY -p 1,1 -q 1,1 --from captain --gas-prices="0.00000001tokt" --gas "200000" -y -b block
# example return
{
  "height": "373",
  "txhash": "6993FB047F445C24F9463D97E6C2EFCE30009299C885005A982E10417DC2ADD4",
  "raw_log": "[{\"msg_index\":0,\"success\":true,\"log\":\"\",\"events\":null}]",
  "logs": [
    {
      "msg_index": 0,
      "success": true,
      "log": "",
      "events": null
    }
  ],
  "gas_wanted": "200000",
  "gas_used": "95042",
  "events": [
    {
      "type": "message",
      "attributes": [
        {
          "key": "sender",
          "value": "okchain10q0rk5qnyag7wfvvt7rtphlw589m7frsmyq4ya"
        },
        {
          "key": "sender",
          "value": "okchain10q0rk5qnyag7wfvvt7rtphlw589m7frsmyq4ya"
        },
        {
          "key": "module",
          "value": "order"
        },
        {
          "key": "orders",
          "value": "[{\"code\":0,\"msg\":\"\",\"orderid\":\"ID0000000373-1\"},{\"code\":0,\"msg\":\"\",\"orderid\":\"ID0000000373-2\"}]"
        },
        {
          "key": "action",
          "value": "new"
        },
        {
          "key": "fee",
          "value": "0.00200000tokt"
        },
        {
          "key": "sender",
          "value": "okchain10q0rk5qnyag7wfvvt7rtphlw589m7frsmyq4ya"
        }
      ]
    },
    {
      "type": "transfer",
      "attributes": [
        {
          "key": "recipient",
          "value": "okchain183rfa8tvtp6ax7jr7dfaf7ywv870sykx3uvcxn"
        },
        {
          "key": "amount",
          "value": "1.00000000tokt"
        },
        {
          "key": "recipient",
          "value": "okchain183rfa8tvtp6ax7jr7dfaf7ywv870sykx3uvcxn"
        },
        {
          "key": "amount",
          "value": "1.00000000tokt"
        },
        {
          "key": "recipient",
          "value": "okchain17xpfvakm2amg962yls6f84z3kell8c5ljresa7"
        },
        {
          "key": "amount",
          "value": "0.00200000tokt"
        }
      ]
    }
  ]
}

```


#### 1.2 Cancel orders:
##### Example:
Cancel one or multiple orders.
```bash
okchaincli tx order cancel [order-id] [flags]
```
```
Flags:
  -a, --account-number uint     The account number of the signing account (offline mode only)
  -b, --broadcast-mode string   Transaction broadcasting mode (sync|async|block) (default "sync")
      --from string             Name or address of private key with which to sign
      --generate-only           Build an unsigned transaction and write it to STDOUT (when enabled, the local Keybase is not accessible and the node operates offline)
  -h, --help                    help for new
      --indent                  Add indent to JSON response
      --ledger                  Use a connected Ledger device
      --memo string             Memo to send along with transaction
      --node string             <host>:<port> to tendermint rpc interface for this chain (default "tcp://localhost:26657")
  -p, --price string            The price of the order
      --product string          Trading pair in full name of the tokens: ${baseAssetSymbol}_${quoteAssetSymbol}, for example "mycoin_tokt".
  -q, --quantity string         The quantity of the order
      --sequence uint           The sequence number of the signing account (offline mode only)
  -s, --side string             BUY or SELL (default "SELL")
      --trust-node              Trust connected full node (don't verify proofs for responses) (default true)
  -y, --yes                     Skip tx broadcasting prompt confirmation

Global Flags:
      --chain-id string   Chain ID of tendermint node
  -e, --encoding string   Binary encoding (hex|b64|btc) (default "hex")
      --home string       directory for config and data (default "/Users/dwil/.okchaincli")
  -o, --output string     Output format (text|json) (default "text")
      --passwd string     Pass word of sender (default "12345678")
      --trace             print out full stack trace on errors

```
##### Successful response:
```
# example
okchaincli tx order cancel ID0000000373-1,ID0000000373-2 --from captain --gas-prices="0.00000001tokt" --gas "200000" -y -b block

# example return
{
  "height": "441",
  "txhash": "3B139AB85BE6FB05E2E18FD41C7B1D4F70A9FCD2A992476063E5A15C36F0A805",
  "raw_log": "[{\"msg_index\":0,\"success\":true,\"log\":\"\",\"events\":null}]",
  "logs": [
    {
      "msg_index": 0,
      "success": true,
      "log": "",
      "events": null
    }
  ],
  "gas_wanted": "200000",
  "gas_used": "86743",
  "events": [
    {
      "type": "message",
      "attributes": [
        {
          "key": "sender",
          "value": "okchain183rfa8tvtp6ax7jr7dfaf7ywv870sykx3uvcxn"
        },
        {
          "key": "sender",
          "value": "okchain183rfa8tvtp6ax7jr7dfaf7ywv870sykx3uvcxn"
        },
        {
          "key": "module",
          "value": "order"
        },
        {
          "key": "orders",
          "value": "[{\"code\":0,\"msg\":\"0.00000000tokt\",\"orderid\":\"ID0000000373-1\"},{\"code\":0,\"msg\":\"0.00000000tokt\",\"orderid\":\"ID0000000373-2\"}]"
        },
        {
          "key": "action",
          "value": "cancel"
        },
        {
          "key": "fee",
          "value": "0.00200000tokt"
        },
        {
          "key": "sender",
          "value": "okchain10q0rk5qnyag7wfvvt7rtphlw589m7frsmyq4ya"
        }
      ]
    },
    {
      "type": "transfer",
      "attributes": [
        {
          "key": "recipient",
          "value": "okchain10q0rk5qnyag7wfvvt7rtphlw589m7frsmyq4ya"
        },
        {
          "key": "amount",
          "value": "1.00000000tokt"
        },
        {
          "key": "recipient",
          "value": "okchain10q0rk5qnyag7wfvvt7rtphlw589m7frsmyq4ya"
        },
        {
          "key": "amount",
          "value": "1.00000000tokt"
        },
        {
          "key": "recipient",
          "value": "okchain17xpfvakm2amg962yls6f84z3kell8c5ljresa7"
        },
        {
          "key": "amount",
          "value": "0.00200000tokt"
        }
      ]
    }
  ]
}

```
`order-id` A list of orderIds separated by commas

### 2. Operation query:

Dex supports various functions including order query, depthbook and users' order books. Commands are as follows:

```bash
okchaincli query order
```

Secondary sub-commands mainly include the following functions
#### 2.1 Order details:
##### Example:
Query the information of a order.
```bash
okchaincli query order detail [orderId]
```
```
Flags:
  -h, --help          help for detail
      --indent        Add indent to JSON response
      --ledger        Use a connected Ledger device
      --node string   <host>:<port> to tendermint rpc interface for this chain (default "tcp://localhost:26657")
      --trust-node    Trust connected full node (don't verify proofs for responses)

Global Flags:
      --chain-id string   Chain ID of tendermint node
  -e, --encoding string   Binary encoding (hex|b64|bcoin) (default "hex")
      --home string       directory for config and data (default "/Users/dwil/.okchaincli")
  -o, --output string     Output format (text|json) (default "text")
      --passwd string     Pass word of sender (default "12345678")
      --trace             print out full stack trace on errors
```
##### Successful response:
```
# example
okchaincli query order detail ID0000000525-1
# example return
{
	"txhash": "B32EC706A2B5ACCF4FC43D6530588C0C9E36E79AC572D3443653281500D46FDA",
	"order_id": "ID0000000525-1",
	"sender": "okchain10q0rk5qnyag7wfvvt7rtphlw589m7frsmyq4ya",
	"product": "xxb-08a_tokt",
	"side": "BUY",
	"price": "1.00000000",
	"quantity": "1.00000000",
	"status": "0",
	"filled_avg_price": "0.00000000",
	"remain_quantity": "1.00000000",
	"remain_locked": "1.00000000",
	"timestamp": "1589539376",
	"order_expire_blocks": "259200",
	"fee_per_block": {
		"denom": "tokt",
		"amount": "0.00000000"
	},
	"extra_info": "{\"newFee\":\"0.00000000tokt\"}"
}
```
#### 2.2 Order depthbook:
Query the information of the depthbook.
##### Example:
```bash
okchaincli query order depthbook [product]
```
```
Flags:
  -h, --help          help for depthbook
      --indent        Add indent to JSON response
      --ledger        Use a connected Ledger device
      --node string   <host>:<port> to tendermint rpc interface for this chain (default "tcp://localhost:26657")
      --size int      depth book single-side size (default 200)
      --trust-node    Trust connected full node (don't verify proofs for responses)

Global Flags:
      --chain-id string   Chain ID of tendermint node
  -e, --encoding string   Binary encoding (hex|b64|bcoin) (default "hex")
      --home string       directory for config and data (default "/Users/dwil/.okchaincli")
  -o, --output string     Output format (text|json) (default "text")
      --passwd string     Pass word of sender (default "12345678")
      --trace             print out full stack trace on errors
```
##### Successful response:
```
# example
okchaincli query order depthbook mycoin_tokt
# example return
{
	"asks": null,
	"bids": [{
		"price": "1.00000000",
		"quantity": "2.00000000"
	}]
}
```
#### 2.3 order store:
Query the state of depthbook.
##### Example:
```bash
okchaincli query order store
```
```
Flags:
      --dbpath string   db path (if this path is given, query through local file)
      --dump            dump all key-value constants of specified module
  -h, --help            help for store
      --indent          Add indent to JSON response
      --ledger          Use a connected Ledger device
      --node string     <host>:<port> to tendermint rpc interface for this chain (default "tcp://localhost:26657")
      --trust-node      Trust connected full node (don't verify proofs for responses)

Global Flags:
      --chain-id string   Chain ID of tendermint node
  -e, --encoding string   Binary encoding (hex|b64|bcoin) (default "hex")
      --home string       directory for config and data (default "/Users/dwil/.okchaincli")
  -o, --output string     Output format (text|json) (default "text")
      --passwd string     Pass word of sender (default "12345678")
      --trace             print out full stack trace on errors
```
##### Successful response:
```
# example
okchaincli query order store

# example return
{
	"StoreOrderNum": "2",
	"DepthBookNum": {
		"xxb-08a_tokt": "1"
	},
	"BookOrderIDsNum": {
		"xxb-08a_tokt:1.00000000:BUY": "2"
	}
}
```
#### 2.4 order parameters:
Query all parameters during governance
##### Example:
```bash
okchaincli query order params
```
```
Flags:
  -h, --help          help for params
      --indent        Add indent to JSON response
      --ledger        Use a connected Ledger device
      --node string   <host>:<port> to tendermint rpc interface for this chain (default "tcp://localhost:26657")
      --trust-node    Trust connected full node (don't verify proofs for responses)

Global Flags:
      --chain-id string   Chain ID of tendermint node
  -e, --encoding string   Binary encoding (hex|b64|bcoin) (default "hex")
      --home string       directory for config and data (default "/Users/dwil/.okchaincli")
  -o, --output string     Output format (text|json) (default "text")
      --passwd string     Pass word of sender (default "12345678")
      --trace             print out full stack trace on errors
```
##### Successful response:
```
# example
okchaincli query order params

# example return
{
  "order_expire_blocks": "259200",
  "max_deals_per_block": "1000",
  "fee_per_block": {
    "denom": "tokt",
    "amount": "0.00000000"
  },
  "trade_fee_rate": "0.00100000"
}

```


## Backend 

The module supports various functions on unfilled orders, filled order history, transaction lists, fee details, matching results, candlestick data and ticker data query. The command lines are as follows:

```bash
okchaincli backend
```

Secondary sub-commands have the following functions

### 1. Users' order books:
#### Example:
```bash
okchaincli backend orders [open/closed] [addr] [flags]


Flags:
      --end int          end timestamp. if start and end is set to 0, it means ignoring time condition.
  -h, --help             help for orders
      --hideNoFill       hide orders that have no fills
      --node string      <host>:<port> to tendermint rpc interface for this chain (default "tcp://localhost:26657")
      --page int         page num (default 1)
      --perPage int      items per page (default 50)
  -p, --product string   filter orders by product
      --side string      filter deals by side, support SELL|BUY, default for empty string means all
      --start int        start timestamp. if start and end is set to 0, it means ignoring time condition.

Global Flags:
      --chain-id string   Chain ID of tendermint node
  -e, --encoding string   Binary encoding (hex|b64|bcoin) (default "hex")
      --home string       directory for config and data (default "/Users/dwil/.okchaincli")
  -o, --output string     Output format (text|json) (default "text")
      --passwd string     Pass word of sender (default "12345678")
      --trace             print out full stack trace on errors

```
#### Successful response:
```
# example
okchaincli backend orders open $(okchaincli keys show bob -a)
# example return
{
	"code": 0,
	"msg": "",
	"detailMsg": "",
	"data": {
		"data": [{
			"txHash": "7E71C87B9687D21CA0E4FE2044D28019949B5FFFB5CE9464A247CC95F463DC69",
			"orderId": "ID0000000011-1",
			"sender": "okchain15uj03h8c2dluhfr9d9ele68v36cl3whjhgq2ch",
			"product": "mycoin_tokt",
			"side": "SELL",
			"price": "11.10000000",
			"quantity": "1.00000000",
			"status": 0,
			"filledAvgPrice": "0.00000000",
			"remainQuantity": "1.00000000",
			"timestamp": 1563890879
		}],
		"paramPage": {
			"page": 1,
			"perPage": 50,
			"total": 1
		}
	}
}
```

### 2. Transaction lists:
#### Example:
```bash
okchaincli backend deals [flags]

Flags:
      --address string   filter deals by address
      --end int          filter deals by < end timestamp
  -h, --help             help for deals
      --node string      <host>:<port> to tendermint rpc interface for this chain (default "tcp://localhost:26657")
      --page int         page num (default 1)
      --perPage int      items per page (default 50)
      --product string   filter deals by product
      --side string      filter deals by side, support SELL|BUY|ALL, default for empty string means all
      --start int        filter deals by >= start timestamp

Global Flags:
      --chain-id string   Chain ID of tendermint node
  -e, --encoding string   Binary encoding (hex|b64|bcoin) (default "hex")
      --home string       directory for config and data (default "/Users/dwil/.okchaincli")
  -o, --output string     Output format (text|json) (default "text")
      --passwd string     Pass word of sender (default "12345678")
      --trace             print out full stack trace on errors

```
#### Successful response:
```
# example
okchaincli backend deals --address=$(okchaincli keys show bob -a)
# example return
{
	"code": 0,
	"msg": "",
	"detailMsg": "",
	"data": {
		"data": [{
			"timestamp": 1563890996,
			"blockHeight": 127,
			"orderId": "ID0000000105-1",
			"sender": "okchain15uj03h8c2dluhfr9d9ele68v36cl3whjhgq2ch",
			"product": "mycoin_tokt",
			"side": "SELL",
			"price": 4,
			"volume": 1,
			"fee": "0.00160000tokt"
		}],
		"paramPage": {
			"page": 1,
			"perPage": 50,
			"total": 1
		}
	}
}
```
### 3. User fee details:
#### Example:
```bash
okchaincli backend fees [addr] [flags]

Flags:
  -h, --help          help for fees
      --node string   <host>:<port> to tendermint rpc interface for this chain (default "tcp://localhost:26657")
      --page int      page num (default 1)
      --perPage int   items per page (default 50)

Global Flags:
      --chain-id string   Chain ID of tendermint node
  -e, --encoding string   Binary encoding (hex|b64|bcoin) (default "hex")
      --home string       directory for config and data (default "/Users/dwil/.okchaincli")
  -o, --output string     Output format (text|json) (default "text")
      --passwd string     Pass word of sender (default "12345678")
      --trace             print out full stack trace on errors

```
#### Successful response:
```
# example
okchaincli backend fees $(okchaincli keys show bob -a)
# example return
{
	"code": 0,
	"msg": "",
	"detailMsg": "",
	"data": {
		"data": [{
			"address": "okchain15uj03h8c2dluhfr9d9ele68v36cl3whjhgq2ch",
			"fee": "0.00160000tokt",
			"feeType": "deal",
			"timestamp": 1563890996
		}, {
			"address": "okchain15uj03h8c2dluhfr9d9ele68v36cl3whjhgq2ch",
			"fee": "0.01250000tokt",
			"feeType": "transfer",
			"timestamp": 1563890942
		}],
		"paramPage": {
			"page": 1,
			"perPage": 50,
			"total": 2
		}
	}
}
```

### 4. Obtain lists of matching results:
#### Example:
```bash
okchaincli backend matches [flags]

Flags:
      --end int          filter deals by < end timestamp
  -h, --help             help for matches
      --node string      <host>:<port> to tendermint rpc interface for this chain (default "tcp://localhost:26657")
      --page int         page num (default 1)
      --perPage int      items per page (default 50)
      --product string   filter deals by product
      --start int        filter deals by >= start timestamp

Global Flags:
      --chain-id string   Chain ID of tendermint node
  -e, --encoding string   Binary encoding (hex|b64|bcoin) (default "hex")
      --home string       directory for config and data (default "/Users/dwil/.okchaincli")
  -o, --output string     Output format (text|json) (default "text")
      --passwd string     Pass word of sender (default "12345678")
      --trace             print out full stack trace on errors


```
#### Successful response:
```
# example
okchaincli backend matches
# example return
{
	"code": 0,
	"msg": "",
	"detailMsg": "",
	"data": {
		"data": [{
			"timestamp": 1563890996,
			"blockHeight": 127,
			"product": "mycoin_tokt",
			"price": 4,
			"volume": 1
		}],
		"paramPage": {
			"page": 1,
			"perPage": 50,
			"total": 1
		}
	}
}
```
### 5. Obtain lists of past transactions containing user addresses:
#### Example:
```bash
okchaincli backend txs [addr] [flags]

Flags:
      --end int       filter txs by end timestamp
  -h, --help          help for txs
      --node string   <host>:<port> to tendermint rpc interface for this chain (default "tcp://localhost:26657")
      --page int      page num (default 1)
      --perPage int   items per page (default 50)
      --start int     filter txs by start timestamp
      --type int      filter txs by txType

Global Flags:
      --chain-id string   Chain ID of tendermint node
  -e, --encoding string   Binary encoding (hex|b64|bcoin) (default "hex")
      --home string       directory for config and data (default "/Users/dwil/.okchaincli")
  -o, --output string     Output format (text|json) (default "text")
      --passwd string     Pass word of sender (default "12345678")
      --trace             print out full stack trace on errors

```
#### Successful response:
```
# example
okchaincli backend txs $(okchaincli keys show bob -a)
# example return
{
	"code": 0,
	"msg": "",
	"detailMsg": "",
	"data": {
		"data": [{
			"txHash": "550101C97C83028F228542755F76A806D00D6635C64E5762EF6FD1667A900D81",
			"type": 2,
			"address": "okchain15uj03h8c2dluhfr9d9ele68v36cl3whjhgq2ch",
			"symbol": "mycoin_tokt",
			"side": 2,
			"quantity": "1.00000000",
			"fee": "0.00000000tokt",
			"timestamp": 1563890974
		}, {
			"txHash": "B287E99E1938FD2C4A6D31F6EBD928920572B4A9385FB4D1C630436985046112",
			"type": 1,
			"address": "okchain15uj03h8c2dluhfr9d9ele68v36cl3whjhgq2ch",
			"symbol": "tokt",
			"side": 3,
			"quantity": "10000.00000000",
			"fee": "0.01250000tokt",
			"timestamp": 1563890942
		}, {
			"txHash": "7E71C87B9687D21CA0E4FE2044D28019949B5FFFB5CE9464A247CC95F463DC69",
			"type": 2,
			"address": "okchain15uj03h8c2dluhfr9d9ele68v36cl3whjhgq2ch",
			"symbol": "mycoin_tokt",
			"side": 2,
			"quantity": "1.00000000",
			"fee": "0.00000000tokt",
			"timestamp": 1563890879
		}],
		"paramPage": {
			"page": 1,
			"perPage": 50,
			"total": 3
		}
	}
}
```
### 6. Obtain tx hash of a block at a specific height:
#### Example:
```bash
okchaincli backend block_tx_hashes [height] [flags]

Flags:
  -h, --help          help for block-tx-hashes
      --node string   <host>:<port> to tendermint rpc interface for this chain (default "tcp://localhost:26657")

Global Flags:
      --chain-id string   Chain ID of tendermint node
  -e, --encoding string   Binary encoding (hex|b64|bcoin) (default "hex")
      --home string       directory for config and data (default "/Users/dwil/.okchaincli")
  -o, --output string     Output format (text|json) (default "text")
      --passwd string     Pass word of sender (default "12345678")
      --trace             print out full stack trace on errors

```
#### Successful response:
```
# example
okchaincli backend block-tx-hashes 105
# example return
["550101C97C83028F228542755F76A806D00D6635C64E5762EF6FD1667A900D81"]

```

### 7. Query candlestick data:
#### Example:
```bash
okchaincli backend klines [flags]

Flags:
  -g, --granularity int   [60/180/300/900/1800/3600/7200/14400/21600/43200/86400/604800], second in unit (default 60)
  -h, --help              help for klines
      --node string       <host>:<port> to tendermint rpc interface for this chain (default "tcp://localhost:26657")
  -p, --product string    product of coin pairs (default "tokt_xxx")
  -s, --size int          at most 1000 (default 1)

Global Flags:
      --chain-id string   Chain ID of tendermint node
  -e, --encoding string   Binary encoding (hex|b64|bcoin) (default "hex")
      --home string       directory for config and data (default "/Users/dwil/.okchaincli")
  -o, --output string     Output format (text|json) (default "text")
      --passwd string     Pass word of sender (default "12345678")
      --trace             print out full stack trace on errors

```
#### Successful response:
```
# example
okchaincli backend klines -p mycoin_tokt 

# example return
{
  "code": 0,
  "data": [
    [
      "2019-07-23T14:50:00.000Z",
      "11.0000",
      "11.0000",
      "11.0000",
      "11.0000",
      "0.00000000"
    ]
  ],
  "detailMsg": "",
  "msg": ""
}

```
### 8. Query market data:
#### Example:
```bash
okchaincli backend tickers [flags]

Flags:
  -c, --count int        ticker count (default 10)
  -h, --help             help for tickers
      --node string      <host>:<port> to tendermint rpc interface for this chain (default "tcp://localhost:26657")
  -p, --product string   product of coin pairs (default "mycoin_tokt")
  -s, --sort             true or false (default true)

Global Flags:
      --chain-id string   Chain ID of tendermint node
  -e, --encoding string   Binary encoding (hex|b64|bcoin) (default "hex")
      --home string       directory for config and data (default "/Users/dwil/.okchaincli")
  -o, --output string     Output format (text|json) (default "text")
      --passwd string     Pass word of sender (default "12345678")
      --trace             print out full stack trace on errors

```
#### Successful response:
```
# example
okchaincli backend tickers -p mycoin_tokt

# example return
{
  "code": 0,
  "data": [
    {
      "symbol": "mycoin_tokt",
      "product": "mycoin_tokt",
      "timestamp": 1563893602,
      "open": 4,
      "close": 11,
      "high": 11,
      "low": 4,
      "price": 11,
      "volume": 4,
      "change": 7,
      "changePercentage": "175.00%"
    }
  ],
  "detailMsg": "",
  "msg": ""
}
```


## Staking

### Create, destroy, edit-validator

#### Create validator


Create a new validator with own keys

```shell
$ okchaincli tx staking create-validator -h

Example:
    okchaincli tx staking create-validator --moniker $MONIKER --pubkey $PUBKEY --from mykey
    
Usage:
    okchaincli tx staking create-validator [flags]

Flags:
    -- moniker  	The validator's name
    -- pubkey  		The Bech32 encoded PubKey of the validator  
```

#### Destroy validator

Unbonding of MSD causes the validator to enter unbonding from the bonded state while jailed, and the operation will not affect the voting of other delegators on this validator.

After the operation is performed, the delegator can still withdraw the vote (unbond or change the vote) from the validator. Once the number of votes and MSD of the validator are both 0, the validator will be completely removed from the validator set.


The Unbonded MSD has a freeze period of 14 days (the same as the normal unboundingtime parameter)



Destroy a validator and withdraw the self-delegation

```shell
$ okchaincli tx staking destroy-validator -h
  
Example:
    okchaincli tx staking destroy-validator --from mykey
    
Usage:
    okchaincli tx staking destroy-validator [flags]

```

#### Edit validator


Edit the detail info of a validator

```shell
$ okchaincli tx staking edit-validator -h

Example:
    okchaincli tx staking edit-validator --moniker "my new name" --identity "http://mynewwebsite/pic/newlogo.jpg" --website "http://mynewwebsites" --details "my new slogans" --from mykey
	
Usage:
    okchaincli tx staking edit-validator [flags]

Flags:
	  -- moniker		The validator's name (default "[do-not-modify]")
	  -- identity		The  (optional) identity signature (ex. UPort or Keybase) (default "[do-not-modify]")
	  -- website		The validator's (optional) website (default "[do-not-modify]")
	  -- details 		The validator's (optional) details (default "[do-not-modify]")
```

### Delegate & vote

#### Delegate


Delegate an amount of tokt

```shell
$ okchaincli tx staking delegate -h

Example:
	  okchaincli tx staking delegate 1024.1024tokt --from mykey
	  
Usage:
    okchaincli tx staking delegate [amount] [flags]
    

```

#### Vote 

Vote on one or more validator(s) by delegate tokt

Vote on one or more validator(s)

```shell
$ okchaincli tx staking vote -h

 
Example:
    okchaincli tx staking vote okchainvaloper1alq9na49n9yycysh889rl90g9nhe58lcs50wu5,okchainvaloper1svzxp4ts5le2s4zugx34ajt6shz2hg42a3gl7g,okchainvaloper10q0rk5qnyag7wfvvt7rtphlw589m7frs863s3m,okchainvaloper1g7znsf24w4jc3xfca88pq9kmlyjdare6mph5rx --from mykey

Usage:
    okchaincli tx staking vote [validator-addr1, validator-addr2, validator-addr3, ... validator-addrN] [flags]
```

#### Unbond

Unbond the deposit token while canceling all the votes, it takes 14 days for unbonding the tokens.

  
   - allow the user to exchange votes into tokens multiple times, and the number of votes allowed to be withdrawan from deposit can be 0.001 \ ~ n (total number of votes owned by the user)
   - if the user status is "voted", after the command is executed, the number of votes that have been voted will be automatically updated and deducted. Essentially, the new votes will be used for re voting
   - if the user status is "voted", execute the command and withdraw all the votes, essentially execute the unbond behavior
   - if the user's status is "not voted", after the command is executed, the votes will not be affected. After 14 days, it will be converted into token and returned to the user's account
   - users are allowed to perform the "unbond" operation for many times, but it only takes effect for the last time, and the last unbond operation automatically accumulates the transaction amount in the process of unbond
   
Unbond shares and withdraw the same amount of votes

```shell
$ okchaincli tx staking unbond -h

Example:
    okchaincli tx staking unbond 1024.1024tokt --from mykey

Usage:
    okchaincli tx staking unbond [amount] [flags]

```

#### query delegator & vote information


Query the information of delegations and all votes recently made by a delegator

```shell
$ okchaincli query staking delegator -h

Example:
    okchaincli query staking delegator okchain1hw4r48aww06ldrfeuq2v438ujnl6alszzzqpph
    
Usage:
    okchaincli query staking delegator [address] [flags]
	
```

#### Query the votes info on a specific validator


Query the information of all votes recently made to a validator

```shell
$ okchaincli query staking votes-to -h

Example:
	  okchaincli query staking votes-to okchainvaloper1alq9na49n9yycysh889rl90g9nhe58lcs50wu5
	  
Usage:
    okchaincli query staking votes-to [validator-addr] [flags]

```

#### Query others

```
Usage:
    okchaincli query staking [command] [flags]

Available Commands:
    validator                  Query a validator
    validators                 Query for all validators
    params                     Query the current staking parameters information
    pool                       Query the current staking pool values
```

### Proxy vote

#### Register proxy

Used for register as a proxy

Become a proxy by registration

```shell
$ okchaincli tx staking proxy reg -h

Example:
	  okchaincli tx staking proxy reg --from mykey
	  
Usage:
	  okchaincli tx staking proxy reg [flags]

```

#### Unregister proxy


Unregister the proxy identity

```shell
$ okchaincli tx staking proxy unreg -h

Example:
	  okchaincli tx staking proxy unreg --from mykey
	  
Usage:
    okchaincli tx staking proxy unreg [flags]

```

#### Bind proxy


Bind proxy relationship

```shell
$ okchaincli tx staking proxy bind -h

Example:
	  okchaincli tx staking proxy bind okchain1hw4r48aww06ldrfeuq2v438ujnl6alszzzqpph --from mykey
	  
Usage:
    okchaincli tx staking proxy bind [flags]

```

#### Unbind proxy


Unbind proxy relationship

```shell
$ okchaincli tx staking proxy unbind -h

Example:
	  okchaincli tx staking proxy unbind okchain1hw4r48aww06ldrfeuq2v438ujnl6alszzzqpph --from mykey
	  
Usage:
    okchaincli tx staking proxy unbind [flags]

```

#### Query proxy


Query the addresses of delegators by a specific proxy

```shell
$ okchaincli query staking proxy -h

Example:
	  okchaincli query staking proxy okchain1hw4r48aww06ldrfeuq2v438ujnl6alszzzqpph
	  
Usage:
    okchaincli query staking proxy [address] [flags]


```


## Distribution
### Withdraw rewards


Withdraw rewards coming from fees to the validator account

```shell
$ okchaincli tx distr withdraw-rewards -h

Example：
    okchaincli tx distr withdraw-rewards okchainvaloper1g7znsf24w4jc3xfca88pq9kmlyjdare6mph5rx --from ${name} --node ${url}

Usage: 
    okchaincli tx distr withdraw-rewards [validator-address] [flags]


Flags：
	--from ${name} Name or address of private key with which to sign
	--node ${url}  <host>:<port> to tendermint rpc interface for this chain (default "tcp://localhost:26657")
```



### Query distribution parameters

Execution parameters for distribution module

Query distribution parameters

```shell
$ okchaincli query distr params -h

Example：
    okchaincli query distr params --node ${url}
    
Usage: 
    okchaincli query distr params [flags]

Flags：
	--node ${url}  validator address
```

### Query community pool


Query all coins in the community pool which is under Governance control.

```shell
$ okchaincli query distr community-pool -h

Example：
    okchaincli query distr community-pool --node ${url}
    
Usage: 
    okchaincli query distr community-pool [flags]

Flags：
	--node ${url}  validator address
```

### Query validator commission rewards from delegators

Query validator commission rewards from delegators to that validator.

```shell
$ okchaincli query distr commission -h

Example：
    okchaincli query distr commission okchainvaloper1g7znsf24w4jc3xfca88pq9kmlyjdare6mph5rx --node ${url}
    
Usage: 
    okchaincli query distr commission [validator] [flags]

Flags：
	--node ${url}  validator address
```


## Governance

### Dex delist proposal

Submit a dex delist proposal along with an initial deposit.

```shell
$ okchaincli tx gov submit-proposal delist-proposal -h

Submit a dex delist proposal along with an initial deposit.
The proposal details must be supplied via a JSON file.

Example:
  okchaincli tx gov submit-proposal delist-proposal <path/to/proposal.json> --from=<key_or_address>

Where proposal.json contains:

{
 "title": "delist xxx/tokt",
 "description": "delist asset from dex",
 "base_asset": "xxx",
 "quote_asset": "tokt",
 "deposit": [
   {
     "denom": "tokt",
     "amount": "100"
   }
 ]
}

Usage:
  okchaincli tx gov submit-proposal delist-proposal [proposal-file] [flags]

Flags:
  -a, --account-number uint     The account number of the signing account (offline mode only)
  -b, --broadcast-mode string   Transaction broadcasting mode (sync|async|block) (default "sync")
      --dry-run                 ignore the --gas flag and perform a simulation of a transaction, but don't broadcast it
      --fees string             Fees to pay along with transaction; eg: 1tokt
      --from string             Name or address of private key with which to sign
      --gas string              gas limit to set per-transaction; set to "auto" to calculate required gas automatically (default 200000) (default "200000")
      --gas-adjustment float    adjustment factor to be multiplied against the estimate returned by the tx simulation; if the gas limit is set manually this flag is ignored  (default 1)
      --gas-prices string       Gas prices to determine the transaction fee (e.g. 1tokt)
      --generate-only           Build an unsigned transaction and write it to STDOUT (when enabled, the local Keybase is not accessible and the node operates offline)
  -h, --help                    help for delist-proposal
      --indent                  Add indent to JSON response
      --ledger                  Use a connected Ledger device
      --memo string             Memo to send along with transaction
      --node string             <host>:<port> to tendermint rpc interface for this chain (default "tcp://localhost:26657")
      --sequence uint           The sequence number of the signing account (offline mode only)
      --trust-node              Trust connected full node (don't verify proofs for responses) (default true)
  -y, --yes                     Skip tx broadcasting prompt confirmation

Global Flags:
      --chain-id string   Chain ID of tendermint node
  -e, --encoding string   Binary encoding (hex|b64|btc) (default "hex")
      --home string       directory for config and data (default "/Users/admin/.okchaincli")
  -o, --output string     Output format (text|json) (default "text")
      --passwd string     Pass word of sender (default "12345678")
      --trace             print out full stack trace on errors
```

### Text proposal


Submit a proposal along with an initial deposit.

```shell
$ okchaincli tx gov  submit-proposal -h
Submit a proposal along with an initial deposit.
Proposal title, description, type and deposit can be given directly or through a proposal JSON file.

Example:
  okchaincli tx gov submit-proposal --proposal="path/to/proposal.json" --from mykey

Where proposal.json contains:

{
  "title": "Test Proposal",
  "description": "My awesome proposal",
  "type": "Text",
  "deposit": "10tokt"
}

Which is equivalent to:

  okchaincli tx gov submit-proposal --title="Test Proposal" --description="My awesome proposal" --type="Text" \
	--deposit="10tokt" --from mykey

Usage:
  okchaincli tx gov submit-proposal [flags]
  okchaincli tx gov submit-proposal [command]

Available Commands:
  upgrade              submit a app upgrade proposal
  param-change         Submit a parameter change proposal
  delist-proposal      Submit a dex delist proposal
  community-pool-spend Submit a community pool spend proposal

Flags:
  -a, --account-number uint     The account number of the signing account (offline mode only)
  -b, --broadcast-mode string   Transaction broadcasting mode (sync|async|block) (default "sync")
      --deposit string          deposit of proposal
      --description string      description of proposal
      --dry-run                 ignore the --gas flag and perform a simulation of a transaction, but don't broadcast it
      --fees string             Fees to pay along with transaction; eg: 1tokt
      --from string             Name or address of private key with which to sign
      --gas string              gas limit to set per-transaction; set to "auto" to calculate required gas automatically (default 200000) (default "200000")
      --gas-adjustment float    adjustment factor to be multiplied against the estimate returned by the tx simulation; if the gas limit is set manually this flag is ignored  (default 1)
      --gas-prices string       Gas prices to determine the transaction fee (e.g. 1tokt)
      --generate-only           Build an unsigned transaction and write it to STDOUT (when enabled, the local Keybase is not accessible and the node operates offline)
  -h, --help                    help for submit-proposal
      --indent                  Add indent to JSON response
      --ledger                  Use a connected Ledger device
      --memo string             Memo to send along with transaction
      --node string             <host>:<port> to tendermint rpc interface for this chain (default "tcp://localhost:26657")
      --proposal string         proposal file path (if this path is given, other proposal flags are ignored)
      --sequence uint           The sequence number of the signing account (offline mode only)
      --title string            title of proposal
      --trust-node              Trust connected full node (don't verify proofs for responses) (default true)
      --type string             proposalType of proposal, types: text/parameter_change/software_upgrade
  -y, --yes                     Skip tx broadcasting prompt confirmation

Global Flags:
      --chain-id string   Chain ID of tendermint node
  -e, --encoding string   Binary encoding (hex|b64|btc) (default "hex")
      --home string       directory for config and data (default "/Users/admin/.okchaincli")
  -o, --output string     Output format (text|json) (default "text")
      --passwd string     Pass word of sender (default "12345678")
      --trace             print out full stack trace on errors

Use "okchaincli tx gov submit-proposal [command] --help" for more information about a command.
```
##### Parameter description：

| Name                | Description  |
| :------             | :------  |
| --title             | title of the proposal  |
| --description       | description of the proposal (for text proposals only) 
| --type              | type of the proposal initiated (for text proposals only) |
| --deposit           | initial deposit specified when the proposal is initiated  |
| --from              | account name specified for sending a transaction |
| --home              | account name and the directory where okchaincli is configured
if it is ~/.okchaincli can ignore the parameters |
| -b/--broadcast-mode | specific transaction broadcast modes（async、sync、block）|

### Change parameter proposal


Submit a parameter modification proposal along with an initial deposit.

```shell
$ okchaincli tx gov  submit-proposal param-change -h

Submit a parameter modification proposal along with an initial deposit.
The proposal details must be supplied via a JSON file. For values that contains
objects, only non-empty fields will be updated.

IMPORTANT: Currently parameter changes are evaluated but not validated, so it is
very important that any "value" change is valid (ie. correct type and within bounds)
for its respective parameter, eg. "MaxValidators" should be an integer and not a decimal.

Proper vetting of a parameter change proposal should prevent this from happening
(no deposits should occur during the governance process), but it should be noted
regardless.

Example:
  okchaincli tx gov submit-proposal param-change <path/to/proposal.json> --from=<key_or_address>

Where proposal.json contains:

{
  "title": "Staking Param Change",
  "description": "Update max validators",
  "changes": [
    {
      "subspace": "staking",
      "key": "MaxValidators",
      "value": 105
    }
  ],
  "deposit": [
    {
      "denom": common.NativeToken,
      "amount": "10000"
    }
  ],
  "height": "1000"
}

Usage:
  okchaincli tx gov submit-proposal param-change [proposal-file] [flags]

Flags:
  -a, --account-number uint     The account number of the signing account (offline mode only)
  -b, --broadcast-mode string   Transaction broadcasting mode (sync|async|block) (default "sync")
      --dry-run                 ignore the --gas flag and perform a simulation of a transaction, but don't broadcast it
      --fees string             Fees to pay along with transaction; eg: 1 tokt
      --from string             Name or address of private key with which to sign
      --gas string              gas limit to set per-transaction; set to "auto" to calculate required gas automatically (default 200000) (default "200000")
      --gas-adjustment float    adjustment factor to be multiplied against the estimate returned by the tx simulation; if the gas limit is set manually this flag is ignored  (default 1)
      --gas-prices string       Gas prices to determine the transaction fee (e.g. 1tokt)
      --generate-only           Build an unsigned transaction and write it to STDOUT (when enabled, the local Keybase is not accessible and the node operates offline)
  -h, --help                    help for param-change
      --indent                  Add indent to JSON response
      --ledger                  Use a connected Ledger device
      --memo string             Memo to send along with transaction
      --node string             <host>:<port> to tendermint rpc interface for this chain (default "tcp://localhost:26657")
      --sequence uint           The sequence number of the signing account (offline mode only)
      --trust-node              Trust connected full node (don't verify proofs for responses) (default true)
  -y, --yes                     Skip tx broadcasting prompt confirmation

Global Flags:
      --chain-id string   Chain ID of tendermint node
  -e, --encoding string   Binary encoding (hex|b64|btc) (default "hex")
      --home string       directory for config and data (default "/Users/admin/.okchaincli")
  -o, --output string     Output format (text|json) (default "text")
      --passwd string     Pass word of sender (default "12345678")
      --trace             print out full stack trace on errors
```

##### Parameter description

| Name                | Description |
| :------             | :------ |
| --title             | title of the proposal  |
| --type              | type of the proposal initiated (for parameterchange proposals only) |
| --deposit           | initial deposit specified when the proposal is initiated |
| --param             | specific parameters and values to be modified (gov/MinDeposit=1000tokt
modify the MinDeposit parameters in the module to be governed to 1000tokt. |
| --height            | block height when the specific parameter change proposal becomes effective (parameters to be modified changed to specific values),the specific height must meet: higher than the current block height and lower than or equal to the sum of the current block height and MaxBlockHeightPeriod |
| --from              | account name specified for sending a transaction  |
| --home              | account name and the directory where okchaincli is configured
if it is ~/.okchaincli can ignore the parameters |
| -b/--broadcast-mode | specific transaction broadcast modes（async、sync、block） |

### Submit deposit


Submit a deposit for an active proposal.

```shell
$ okchaincli tx gov deposit -h

Submit a deposit for an active proposal. You can
find the proposal-id by running "<appcli> query gov proposals".

Example:
  okchaincli tx gov deposit 1 10tokt --from mykey

Usage:
  okchaincli tx gov deposit [proposal-id] [deposit] [flags]

Flags:
  -a, --account-number uint     The account number of the signing account (offline mode only)
  -b, --broadcast-mode string   Transaction broadcasting mode (sync|async|block) (default "sync")
      --dry-run                 ignore the --gas flag and perform a simulation of a transaction, but don't broadcast it
      --fees string             Fees to pay along with transaction; eg: 1tokt
      --from string             Name or address of private key with which to sign
      --gas string              gas limit to set per-transaction; set to "auto" to calculate required gas automatically (default 200000) (default "200000")
      --gas-adjustment float    adjustment factor to be multiplied against the estimate returned by the tx simulation; if the gas limit is set manually this flag is ignored  (default 1)
      --gas-prices string       Gas prices to determine the transaction fee (e.g. 1tokt)
      --generate-only           Build an unsigned transaction and write it to STDOUT (when enabled, the local Keybase is not accessible and the node operates offline)
  -h, --help                    help for deposit
      --indent                  Add indent to JSON response
      --ledger                  Use a connected Ledger device
      --memo string             Memo to send along with transaction
      --node string             <host>:<port> to tendermint rpc interface for this chain (default "tcp://localhost:26657")
      --sequence uint           The sequence number of the signing account (offline mode only)
      --trust-node              Trust connected full node (don't verify proofs for responses) (default true)
  -y, --yes                     Skip tx broadcasting prompt confirmation

Global Flags:
      --chain-id string   Chain ID of tendermint node
  -e, --encoding string   Binary encoding (hex|b64|btc) (default "hex")
      --home string       directory for config and data (default "/Users/admin/.okchaincli")
  -o, --output string     Output format (text|json) (default "text")
      --passwd string     Pass word of sender (default "12345678")
      --trace             print out full stack trace on errors
```

### Submit vote


Submit a vote for an active proposal. 

```shell
$ okchaincli tx gov vote -h

Submit a vote for an active proposal. You can
find the proposal-id by running "<appcli> query gov proposals".


Example:
  okchaincli tx gov vote 1 yes --from mykey

Usage:
  okchaincli tx gov vote [proposal-id] [option] [flags]

Flags:
  -a, --account-number uint     The account number of the signing account (offline mode only)
  -b, --broadcast-mode string   Transaction broadcasting mode (sync|async|block) (default "sync")
      --dry-run                 ignore the --gas flag and perform a simulation of a transaction, but don't broadcast it
      --fees string             Fees to pay along with transaction; eg: 1tokt
      --from string             Name or address of private key with which to sign
      --gas string              gas limit to set per-transaction; set to "auto" to calculate required gas automatically (default 200000) (default "200000")
      --gas-adjustment float    adjustment factor to be multiplied against the estimate returned by the tx simulation; if the gas limit is set manually this flag is ignored  (default 1)
      --gas-prices string       Gas prices to determine the transaction fee (e.g. 1tokt)
      --generate-only           Build an unsigned transaction and write it to STDOUT (when enabled, the local Keybase is not accessible and the node operates offline)
  -h, --help                    help for vote
      --indent                  Add indent to JSON response
      --ledger                  Use a connected Ledger device
      --memo string             Memo to send along with transaction
      --node string             <host>:<port> to tendermint rpc interface for this chain (default "tcp://localhost:26657")
      --sequence uint           The sequence number of the signing account (offline mode only)
      --trust-node              Trust connected full node (don't verify proofs for responses) (default true)
  -y, --yes                     Skip tx broadcasting prompt confirmation

Global Flags:
      --chain-id string   Chain ID of tendermint node
  -e, --encoding string   Binary encoding (hex|b64|btc) (default "hex")
      --home string       directory for config and data (default "/Users/admin/.okchaincli")
  -o, --output string     Output format (text|json) (default "text")
      --passwd string     Pass word of sender (default "12345678")
      --trace             print out full stack trace on errors
```

### withdraw rewards

Send a proposal used for withdraw rewards from community pool

```shell
$ okchaincli tx gov submit-proposal community-pool-spend -h

Example:
	okchaincli tx gov submit-proposal community-pool-spend <path/to/proposal.json> --from=<key_or_address>

Where proposal.json contains:
{
  "title": "Community Pool Spend",
  "description": "Pay me some tokt!",
  "recipient": "okchain5afhd6gxevu37mkqcvvsj8qeylhn0rz46zdlq",
  "amount": [
    {
      "denom": "tokt",
      "amount": "10000"
    }
  ],
  "deposit": [
    {
      "denom": "tokt",
      "amount": "10000"
    }
  ]
}

Usage: 
    okchaincli tx gov submit-proposal community-pool-spend [proposal-file] [flags]

Flags：
	--from ${name} Name or address of private key with which to sign 
	--node ${url}  validator address 
```

### Query proposal

#### Query proposal by ID

Query details for a proposal

```shell
$ okchaincli query gov proposal -h

Query details for a proposal. You can find the
proposal-id by running "<appcli> query gov proposals".

Example:
  okchaincli query gov proposal 1

Usage:
  okchaincli query gov proposal [proposal-id] [flags]

Flags:
      --height int    Use a specific height to query state at (this can error if the node is pruning state)
  -h, --help          help for proposal
      --indent        Add indent to JSON response
      --ledger        Use a connected Ledger device
      --node string   <host>:<port> to Tendermint RPC interface for this chain (default "tcp://localhost:26657")
      --trust-node    Trust connected full node (don't verify proofs for responses)

Global Flags:
      --chain-id string   Chain ID of tendermint node
  -e, --encoding string   Binary encoding (hex|b64|btc) (default "hex")
      --home string       directory for config and data (default "/Users/admin/.okchaincli")
  -o, --output string     Output format (text|json) (default "text")
      --passwd string     Pass word of sender (default "12345678")
      --trace             print out full stack trace on errors
```

#### Query all proposals


Query for a all proposals. 

```shell
$ okchaincli query gov proposals -h

Query for a all proposals. You can filter the returns with the following flags.

Example:
  okchaincli query gov proposals --depositor okchain1skjwj5whet0lpe65qaq4rpq03hjxlwd9nf39lk
  okchaincli query gov proposals --voter okchain1skjwj5whet0lpe65qaq4rpq03hjxlwd9nf39lk
  okchaincli query gov proposals --status (DepositPeriod|VotingPeriod|Passed|Rejected)

Usage:
  okchaincli query gov proposals [flags]

Flags:
      --depositor string   (optional) filter by proposals deposited on by depositor
      --height int         Use a specific height to query state at (this can error if the node is pruning state)
  -h, --help               help for proposals
      --indent             Add indent to JSON response
      --ledger             Use a connected Ledger device
      --limit string       (optional) limit to latest [number] proposals. Defaults to all proposals
      --node string        <host>:<port> to Tendermint RPC interface for this chain (default "tcp://localhost:26657")
      --status string      (optional) filter proposals by proposal status, status: deposit_period/voting_period/passed/rejected
      --trust-node         Trust connected full node (don't verify proofs for responses)
      --voter string       (optional) filter by proposals voted on by voted

Global Flags:
      --chain-id string   Chain ID of tendermint node
  -e, --encoding string   Binary encoding (hex|b64|btc) (default "hex")
      --home string       directory for config and data (default "/Users/admin/.okchaincli")
  -o, --output string     Output format (text|json) (default "text")
      --passwd string     Pass word of sender (default "12345678")
      --trace             print out full stack trace on errors
```


## Params
Query parameters of params:

#### Query governance parameters

Query the all the parameters for the governance process.

```shell
okchaincli query params params -h

Query the all the parameters for the governance process.

Example:
  okchaincli query params params

Usage:
  okchaincli query params params [flags]

Flags:
      --height int    Use a specific height to query state at (this can error if the node is pruning state)
  -h, --help          help for params
      --indent        Add indent to JSON response
      --ledger        Use a connected Ledger device
      --node string   <host>:<port> to Tendermint RPC interface for this chain (default "tcp://localhost:26657")
      --trust-node    Trust connected full node (don't verify proofs for responses)

Global Flags:
      --chain-id string   Chain ID of tendermint node
  -e, --encoding string   Binary encoding (hex|b64|btc) (default "hex")
      --home string       directory for config and data (default "/Users/admin/.okchaincli")
  -o, --output string     Output format (text|json) (default "text")
      --passwd string     Pass word of sender (default "12345678")
      --trace             print out full stack trace on errors
```

##### Governance module parameters

| Parameters              | Mark                                                                                               
| :----                   | :----  |                                                                                                   
| MaxDepositPeriod        | Text/parameter modification/app upgrade deposit period |                                                                         
| MinDeposit              | Text/parameter modification/app Upgrade proposal maximum deposit <br>If the proposed mortgage exceeds this value, the Voting Period will be effective    |                           |
| VotingPeriod            | Text/Parameter Modification/app upgrade proposal voting period|                                                                        
| MaxTxNumPerBlock        | maximum number of transactions contained in each block  |


## Slashing

### Change target validator state from jailed to unjail
```sh
okchaincli tx slashing unjail -h
unjail a jailed validator:

Example:
    okchaincli tx slashing unjail --from mykey

Usage:
    okchaincli tx slashing unjail [flags]
Flags:
    --from string             Name or address of private key with which to sign
```

### Query jail state of target validator 
```sh
okchaincli query slashing signing-info -h

Use a validators' consensus public key to find the signing-info for that validator:

Example:
    okchaincli query slashing signing-info okchainvalconspub1zcjduepqfhvwcmt7p06fvdgexxhmz0l8c7sgswl7ulv7aulk364x4g5xsw7sr0k2g5

Usage:
    okchaincli query slashing signing-info [validator-conspub] [flags]

Flags:
      --height int    Use a specific height to query state at (this can error if the node is pruning state)
  -h, --help          help for signing-info
      --indent        Add indent to JSON response
      --ledger        Use a connected Ledger device
      --node string   <host>:<port> to Tendermint RPC interface for this chain (default "tcp://localhost:26657")
      --trust-node    Trust connected full node (don't verify proofs for responses)
```

###  Query params from slashing module
```sh
okchaincli query slashing params -h

Query genesis parameters for the slashing module:

Example:
    okchaincli query slashing params

Usage:
    okchaincli query slashing params [flags]
  
Flags:
      --height int    Use a specific height to query state at (this can error if the node is pruning state)
  -h, --help          help for params
      --indent        Add indent to JSON response
      --ledger        Use a connected Ledger device
      --node string   <host>:<port> to Tendermint RPC interface for this chain (default "tcp://localhost:26657")
      --trust-node    Trust connected full node (don't verify proofs for responses)
```


## Debug
### set-loglevel

Set the okchaind log level  

```shell
$ okchaincli debug set-loglevel -h

Example：
  $ okchaincli debug set-loglevel "main:info,state:info"

  $ okchaincli debug set-loglevel "upgrade:error"

Usage:
  okchaincli debug set-loglevel [flags]

Flags:
      --height int    Use a specific height to query state at (this can error if the node is pruning state)
  -h, --help          help for set-loglevel
      --indent        Add indent to JSON response
      --node string   <host>:<port> to Tendermint RPC interface for this chain (default "tcp://localhost:26657")
      --trust-node    Trust connected full node (don't verify proofs for responses)

Global Flags:
      --chain-id string   Chain ID of tendermint node
  -e, --encoding string   Binary encoding (hex|b64|btc) (default "hex")
      --home string       directory for config and data (default "/Users/yourname/.okchaincli")
  -o, --output string     Output format (text|json) (default "text")
      --passwd string     Pass word of sender (default "12345678")
      --trace             print out full stack trace on errors
```

### dump

Dump the data of kv-stores by a module name  

```shell
$ okchaincli debug dump -h
Dump the data of kv-stores by a module name

Usage:
  okchaincli debug dump [module] [flags]

Flags:
     --height int    Use a specific height to query state at (this can error if the node is pruning state)
  -h, --help          help for dump
     --indent        Add indent to JSON response
     --node string   <host>:<port> to Tendermint RPC interface for this chain (default "tcp://localhost:26657")
     --trust-node    Trust connected full node (don't verify proofs for responses)
   
  Global Flags:
     --chain-id string   Chain ID of tendermint node
  -e, --encoding string   Binary encoding (hex|b64|btc) (default "hex")
     --home string       directory for config and data (default "/Users/yourname/.okchaincli")
  -o, --output string     Output format (text|json) (default "text")
     --passwd string     Pass word of sender (default "12345678")
     --trace             print out full stack trace on errors
```
