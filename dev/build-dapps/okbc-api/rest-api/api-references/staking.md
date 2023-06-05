# Staking

### Get staking parameters

Query the current staking parameters information

#### HTTP Request

`GET v1/staking/parameters`

> Request Example

```wiki
https://okbrpc.okbchain.org/v1/staking/parameters
```

#### Request Parameters

None

> Example Response

```json
{
  "unbonding_time": "1209600000000000",
  "max_bonded_validators": 21,
  "epoch": 252,
  "max_validators_to_add_shares": 30,
  "min_delegation": "0.000100000000000000",
  "min_self_delegation": "10000.000000000000000000"
}
```

#### Response Parameters

| **Parameter**                | **Type** | **Description**                             |
| :--------------------------- | :------- | :------------------------------------------ |
| unbonding_time               | String   | Unbinding time of okb                       |
| max_bonded_validators        | Int      | Max producting block validators nums        |
| epoch                        | Int      | Epoch of change producting block validators |
| max_validators_to_add_shares | Int      | Max validators to add shares                |
| min_delegation               | String   | Min delegation                              |
| min_self_delegation          | String   | Min self delegation of creating validator   |

### Get delegator Info

Query information of a delegator

#### HTTP Request

`GET v1/staking/delegators/{delegatorAddr}`

> Request Example

```wiki
https://okbrpc.okbchain.org/v1/staking/delegators/ex17se79kf0c9t5sw0yg0jjdm6et79sy8aradphtg
```

#### Request Parameters

None

> Example Response

```json
{
  "delegator_address": "ex17se79kf0c9t5sw0yg0jjdm6et79sy8aradphtg",
  "validator_address": [
    "exvaloper19e6edpu97d6w2t5dlp7lph2fkdja0lvlj8ngk0",
    "exvaloper18v23ln9ycrtg0mrwsm004sh4tdknudtdapcfcq",
    "exvaloper1ucmx6vvtrwam9pg20fnwmy9z80uhchyxqn67wq",
    "exvaloper1tat4lam8wjqmeax9mv4s584vu2mp7c0cgvlajl",
    "exvaloper1rz7frqz9ky52qqjwlpawfe5hz6plcrmmpha0px",
    "exvaloper1w3ptfgekjgdvwkqmdepdeyvuxqmcplfszlz3jm",
    "exvaloper104y8sy0r6fke4a9qr8u05j6v5y68gkh4v3ud9t",
    "exvaloper1qva0ejf0t943x6rt824gwmvtjgec9cjrut5wn8"
  ],
  "shares": "72053.451006669074462727",
  "tokens": "0.024951000000000000",
  "is_proxy": false,
  "total_delegated_tokens": "0.000000000000000000",
  "proxy_address": ""
}
```

#### Response Parameters

| **Parameter**          | **Type** | **Description**                             |
| :--------------------- | :------- | :------------------------------------------ |
| is_proxy               | String   | Proxy or not                                |
| tokens                 | String   | Delegation of okb                           |
| proxy_address          | String   | The proxy's address                         |
| validator_address      | Array    | Validator address                           |
| total_delegated_tokens | String   | Total delegated tokens for it's proxy users |
| delegator_address      | String   | Delegator address                           |
| shares                 | String   | Shares,  voting rights from okb             |

### Get unbonding token of delegator

Query the unbonding token information of the specified delegator

#### HTTP Request

`GET v1/staking/delegators/{address}/unbonding_delegations`

> Request Example

```wiki
https://okbrpc.okbchain.org/v1/staking/delegators/ex17se79kf0c9t5sw0yg0jjdm6et79sy8aradphtg/unbonding_delegations
```

#### Request Parameters

None

> Example Response

```json
{
  "delegator_address": "ex10q0rk5qnyag7wfvvt7rtphlw589m7frs3hvqmf",
  "quantity": "1.02400000",
  "completion_time": "2020-05-25T09:44:55.736074648Z"
}

```

#### Response Parameters

| **Parameter**     | **Type** | **Description**           |
| :---------------- | :------- | :------------------------ |
| delegator_address | String   | Delegator address         |
| quantity          | String   | Unbonding okb             |
| completion_time   | String   | Completion time of unbond |

### Get validators

Query information on all validators

#### HTTP Request

`GET v1/staking/validators?status=all`

> Request Example

```wiki
https://okbrpc.okbchain.org/v1/staking/validators?status=all
```

#### Request Parameters

None

> Example Response

```json
[
  {
    "operator_address": "exvaloper1q9nct2gska2yutx24starv6s63xz022fdwdgzv",
    "consensus_pubkey": "exvalconspub1zcjduepqks93pmhg3aqak0unyx28vgwhnh9vhtapddm75uax4ls2z2frfunsd9mnrx",
    "jailed": false,
    "status": 2,
    "tokens": "0",
    "delegator_shares": "66193233954117.096196430937242815",
    "description": {
      "moniker": "Collector",
      "identity": "",
      "website": "",
      "details": ""
    },
    "unbonding_height": "0",
    "unbonding_time": "2021-02-17T01:49:59.985069599Z",
    "commission": {
      "commission_rates": {
        "rate": "0.200000000000000000",
        "max_rate": "1.000000000000000000",
        "max_change_rate": "0.000000000000000000"
      },
      "update_time": "2022-12-16T09:53:12.200554194Z"
    },
    "min_self_delegation": "10000.000000000000000000"
  }
]
```

#### Response Parameters

| **Parameter**                               | **Type** | **Description**                                    |
| :------------------------------------------ | :------- | :------------------------------------------------- |
| operator_address                            | String   | Operator address of validator                      |
| consensus_pubkey                            | String   | Consensus pubkey of validator                      |
| jailed                                      | bool     | Jailed or not                                      |
| status                                      | Int      | 0,Unbonded;1,Unbonding;2Bonded                     |
| tokens                                      | String   | Tokens                                             |
| delegator_shares                            | String   | Shares for the delegators who voting the validator |
| description                                 | Obj      | Description object                                 |
| description.moniker                         | String   | Moniker                                            |
| description.identity                        | String   | Identity                                           |
| description.website                         | String   | Website                                            |
| description.details                         | String   | Details                                            |
| unbonding_height                            | String   | Unbonding height                                   |
| unbonding_time                              | String   | Unbonding time                                     |
| commission                                  |          | commission object                                  |
| commission.commission_rates                 |          | Commission rate object.                            |
| commission.commission_rates.rate            | String   | Commission rate of validator                       |
| commission.commission_rates.max_rate        | String   | Max commission rate                                |
| commission.commission_rates.max_change_rate | String   | Max change rate                                    |
| commission.update_time                      | String   | Last update time                                   |
| min_self_delegation                         | String   | Min self delegation for creating validator         |

### Get validator info

Query information from a validator

#### HTTP Request

`GET v1/staking/validators/{validatorAddr}`

> Request Example

```wiki
https://okbrpc.okbchain.org/v1/staking/validators/exvaloper1q9nct2gska2yutx24starv6s63xz022fdwdgzv
```

#### Request Parameters

None

> Example Response

```json
{
  "operator_address": "exvaloper1q9nct2gska2yutx24starv6s63xz022fdwdgzv",
  "consensus_pubkey": "exvalconspub1zcjduepqks93pmhg3aqak0unyx28vgwhnh9vhtapddm75uax4ls2z2frfunsd9mnrx",
  "jailed": false,
  "status": 2,
  "tokens": "0",
  "delegator_shares": "66193233954117.096196430937242815",
  "description": {
    "moniker": "Collector",
    "identity": "",
    "website": "",
    "details": ""
  },
  "unbonding_height": "0",
  "unbonding_time": "2021-02-17T01:49:59.985069599Z",
  "commission": {
    "commission_rates": {
      "rate": "0.200000000000000000",
      "max_rate": "1.000000000000000000",
      "max_change_rate": "0.000000000000000000"
    },
    "update_time": "2022-12-16T09:53:12.200554194Z"
  },
  "min_self_delegation": "10000.000000000000000000"
}
```

#### Response Parameters

See the response of Get validators api

### Get votingInfo of validator

Query all voting shares on a validator

#### HTTP Request

`GET v1/staking/validators/{address}/shares
`

> Request Example

```wiki
https://okbrpc.okbchain.org/v1/staking/validators/exvaloper1q9nct2gska2yutx24starv6s63xz022fdwdgzv/shares
```

#### Request Parameters

None

> Example Response

```json
[
  {
    "voter_address": "ex12mek8h0mjs9m4hrh5q4zyhx04pqltyrnrtarud",
    "votes": "1424779953353.73000000"
  },
  {
    "voter_address": "ex12mek8h0mjs9m4hrh5q4zyhx04pqltyrnrtarud",
    "votes": "1424779953353.73000000"
  },
  {
    "voter_address": "ex12mek8h0mjs9m4hrh5q4zyhx04pqltyrnrtarud",
    "votes": "1424779953353.73000000"
  }
]

```

#### Response Parameters

| **Parameter** | **Type** | **Description**             |
| :------------ | :------- | :-------------------------- |
| voter_address | String   | Voter address of delegators |
| votes         | String   | Shares of voting            |

### Get validator address

Query corresponding account_address through operator_address

#### HTTP Request

`GET v1/v1/staking/address/{operator_addr}/account_address`

> Request Example

```wiki
https://okbrpc.okbchain.org/v1/staking/address/exvaloper1q9nct2gska2yutx24starv6s63xz022fdwdgzv/account_address
```

#### Request Parameters

None

> Example Response

```json
"ex1q9nct2gska2yutx24starv6s63xz022fmf8vxk"
```

#### Response Parameters

| **Parameter** | **Type** | **Description**           |
| :------------ | :------- | :------------------------ |
| address       | String   | Validator account address |

### Get relationship of proxy delegator

Query the proxy relationship on a proxy delegator

#### HTTP Request

`GET v1/staking/delegators/{address}/proxy
`

> Request Example

```wiki
https://okbrpc.okbchain.org/v1/staking/delegators/ex1pt7xrmxul7sx54ml44lvv403r06clrdk0s8rxy/proxy
```

#### Request Parameters

None

> Example Response

```json
[
    "ex1s0vrf96rrsknl64jj65lhf89ltwj7lksr7m3r9"
]
```

#### Response Parameters

| **Parameter** | **Type** | **Description** |
| :------------ | :------- | :-------------- |
|               | String   | Proxy address   |

### Get staking pool

Query current staking pool assets

#### HTTP Request

`GET v1/staking/pool`

> Request Example

```wiki
https://okbrpc.okbchain.org/v1/staking/pool
```

#### Request Parameters

None

> Example Response

```json
{
  "not_bonded_tokens": "46658.862345999999959778",
  "bonded_tokens": "4561558.000338499999741215"
}
```

#### Response Parameters

| **Parameter**     | **Type** | **Description**                   |
| :---------------- | :------- | :-------------------------------- |
| not_bonded_tokens | String   | Not bonded tokens of staking pool |
| bonded_tokens     | String   | Bonded tokens of staking pool     |

### Get operator address

Query corresponding operator_address through validator_address

#### HTTP Request

`GET v1/v1/staking/address/{operator_addr}/validator_address`

> Request Example

```wiki
https://okbrpc.okbchain.org/v1/staking/address/B8586789B5681169A6CDC670775AC83FF560AA2F/validator_address
```

#### Request Parameters

None

> Example Response

```json
"exvaloper1q9nct2gska2yutx24starv6s63xz022fdwdgzv"
```

#### Response Parameters

| **Parameter** | **Type** | **Description**   |
| :------------ | :------- | :---------------- |
| address       | String   | validator address |

### Get operator and validator pairs

Query information on all validators

#### HTTP Request

`GET v1/staking/address`

> Request Example

```wiki
https://okbrpc.okbchain.org/v1/staking/address
```

#### Request Parameters

None

> Example Response

```json
[{
		"operator_address": "exvaloper1q9nct2gska2yutx24starv6s63xz022fdwdgzv",
		"validator_address": "B8586789B5681169A6CDC670775AC83FF560AA2F"
	},
	{
		"operator_address": "exvaloper1qva0ejf0t943x6rt824gwmvtjgec9cjrut5wn8",
		"validator_address": "C1D32DDFC3C0C06F44BEE90593D5ED7539D5BA12"
	},
	{
		"operator_address": "exvaloper1pc864zshkvsgc724k5jffcjsrmhz63m6gwrrhh",
		"validator_address": "49023DF452630B38D1F638273BF40F72D7A91EB9"
	},
	{
		"operator_address": "exvaloper1zza3jrylyecrtuh0p9ts2xauzsefuvwa4l9fsx",
		"validator_address": "E3F8C6177337DC894631E702D8154BBEC9A931D5"
	},
	{
		"operator_address": "exvaloper1zxthrcdcecfe5ss4tal0tq30hzel2lks6psuhm",
		"validator_address": "E42368D36DEB5E5D6682858E730E63014B1CA2C5"
	},
	{
		"operator_address": "exvaloper1rz7frqz9ky52qqjwlpawfe5hz6plcrmmpha0px",
		"validator_address": "9B2CAB86E170002ABAFA11AD029CF87678CAAD95"
	},
	{
		"operator_address": "exvaloper1rr253al2mtdgfcjwh7j3778g5gru3elyumxj8m",
		"validator_address": "D2B872B9EC08B28C91831BD01B013196987C6204"
	},
	{
		"operator_address": "exvaloper1rv8tjxp8d8ucuak8c7svewwugzfdjwf9arju5j",
		"validator_address": "6DA0DDD71603F4874FFFB2C3808CD0B5F7320167"
	},
	{
		"operator_address": "exvaloper1rmrx7wp60almzvghx2820aamjfd4kgwlcx542p",
		"validator_address": "EE694A82C1828483F46348A0EB5862DE1DD10DA6"
	},
	{
		"operator_address": "exvaloper1ygcvtcqxl82xvzrq25dymam434k3nnc8kwvrkm",
		"validator_address": "6BE29CEF63D91013E5DE84064BAC7B2DE2B8B949"
	},
	{
		"operator_address": "exvaloper19wln93k3faq7vkqzlc9gljr3ey5fljt93jfxsy",
		"validator_address": "456D70DDD05B7AF40369FABFFDFACC2135AA5232"
	},
	{
		"operator_address": "exvaloper195ez67wmhprwrru34gvttyd8ttpl7edx3px8ua",
		"validator_address": "0FE9CF2FFAC38F7BCC50818B9B431FF9934C9597"
	},
	{
		"operator_address": "exvaloper19e6edpu97d6w2t5dlp7lph2fkdja0lvlj8ngk0",
		"validator_address": "D7958E043A8FCFF9405F043E1F8EFFB9C1147F60"
	},
	{
		"operator_address": "exvaloper1xkl5agjzqnjnptyat2dng2asmx8g5kllg7xamv",
		"validator_address": "2DA545954A696F8F09AEF25AEDE2B0DDE1A67B60"
	},
	{
		"operator_address": "exvaloper1xaxvu9wxr8szym3aqdesvqq968y2tf53l8fyak",
		"validator_address": "3A2794CC9C60BC3DE6812C1665FADEE8E6D1E0D6"
	},
	{
		"operator_address": "exvaloper188dhgmaq8cka2yczzjfzsw0nely6y8uap4u5kg",
		"validator_address": "33FAA80AA17F6412E8594ED447BAD09454A557AC"
	},
	{
		"operator_address": "exvaloper18v23ln9ycrtg0mrwsm004sh4tdknudtdapcfcq",
		"validator_address": "E1A887691AFEE37AF64FCEE9CE80B35178A8C8E2"
	},
	{
		"operator_address": "exvaloper18w9mggs2s5t8ve0zr0ctjcyq7faft3qp8dlj75",
		"validator_address": "6CDB634FDDB970BBC4E10DF0F29274DB2D298DF3"
	},
	{
		"operator_address": "exvaloper18au05qx485u2qcw2gvqsrfh29evq77lm9u2jwr",
		"validator_address": "B08F1E9CD9BDAD3EB8AEEC37E0662ABCC70BFB3E"
	},
	{
		"operator_address": "exvaloper1g3a6vtau2k93n4tqgqnrggeu3qa4x20rgs4x4s",
		"validator_address": "26A3A71528117598DA8CAECE3B5CB4D41264D648"
	},
	{
		"operator_address": "exvaloper1fymxn4gazxzjdfvwvr0ccnrnjpwmj0r9vw3t2y",
		"validator_address": "32409E2BBF7F551EC182769BD142B2F262B261F0"
	},
	{
		"operator_address": "exvaloper1fwvre7w2na66fq3k2wjy30rzp07c4fl99v3hsw",
		"validator_address": "09A02E61153A22BDB19B69C79357E9596C0FA406"
	},
	{
		"operator_address": "exvaloper1fj2wlj8lwy4hd8ngfzntku0r38wxz2wt96awnp",
		"validator_address": "6FED194F7C8BE04ACD4E76271E8C4C3780F86869"
	},
	{
		"operator_address": "exvaloper1tzxmqa6dqlpeq2s34c8f6n4amuuwj8gnx8vr9q",
		"validator_address": "B7B08047944713E21B62A24115607DCBC0D61EF3"
	},
	{
		"operator_address": "exvaloper1tkwxgcpvptua0q0h5tn0at58ufnjdue7xp9jh4",
		"validator_address": "206BC60D6024CCFE4062CE1D358C5BA18CDCA284"
	},
	{
		"operator_address": "exvaloper1tat4lam8wjqmeax9mv4s584vu2mp7c0cgvlajl",
		"validator_address": "5F45AD27AF7C5718BF36678BAC9FBBD0623C264F"
	},
	{
		"operator_address": "exvaloper1vsjcts3ga8dgf6nj2q7vmlrnu5en4cneaskg9w",
		"validator_address": "5304C540AD76FD12BF228C30DC889AD2F80A65FC"
	},
	{
		"operator_address": "exvaloper1v5pvu4rkzc5axd6f7ngxa39je6d0lyujky5tng",
		"validator_address": "E303C3040B2374405D29EEB3B6E659BA4BCE2E2A"
	},
	{
		"operator_address": "exvaloper1v4kagglr3vq82vqywqd8quhsuarkm4kf2nz85r",
		"validator_address": "4E40AC623F479A4FA783703A2338F10821C574E3"
	},
	{
		"operator_address": "exvaloper1vlzgq74y6hm9crhkkhdjy77uvyqa0zdupstsqj",
		"validator_address": "7AE14A0113E95291CB37E5773A699A01D5071C1D"
	},
	{
		"operator_address": "exvaloper1w3ptfgekjgdvwkqmdepdeyvuxqmcplfszlz3jm",
		"validator_address": "718EABE12152C41E0F0DA01259F994C49BF3088C"
	},
	{
		"operator_address": "exvaloper1w5zu7xxzfdx729elg2lu4rnltjsvzpdg3dhpaf",
		"validator_address": "D129F169D41E5168F287BE7E174FC8ADA795C990"
	},
	{
		"operator_address": "exvaloper104y8sy0r6fke4a9qr8u05j6v5y68gkh4v3ud9t",
		"validator_address": "83E68B475E906B3F1A0ED07C537ACE9DE4EEBFB7"
	},
	{
		"operator_address": "exvaloper1079vd72hpvlhnt7yjdya50egxkdr4dtureduuf",
		"validator_address": "2538B193B3BD9BB7FF22DD693B0CDC94979F8189"
	},
	{
		"operator_address": "exvaloper1s6nfs7mlj7ewsskkrmekqhpq2w234fcz5uq4m5",
		"validator_address": "1C2BB905E9B6F7D6B8625077CD955C0F1A3BA026"
	},
	{
		"operator_address": "exvaloper1su2ks3x0xnh6hpgg7s8rv6kgd5set0d022l24z",
		"validator_address": "E64D13E00C08548CD4444869B018EA90A2DF742D"
	},
	{
		"operator_address": "exvaloper13mayrjzsrp976y0ae0qw8sjan3qg2xfdeq8vmh",
		"validator_address": "9F200A2080BABAD093746F6FAB1E28CDF7F5C669"
	},
	{
		"operator_address": "exvaloper1ja9xngm4zh0t442mse73ll30p7dczd49s88n2x",
		"validator_address": "C624AEA0BAF4BB7D65B204B6D50D26D0D0AF5DA0"
	},
	{
		"operator_address": "exvaloper1nx6grwxsanpwfghzu40e4ng5xqktuj2rh498pe",
		"validator_address": "B696038C26C2A7C554F1FFDA3130A2A3F1E1A152"
	},
	{
		"operator_address": "exvaloper1ncdghxtp58y0gq4tem0nex3ln0hxsjefq9x2w4",
		"validator_address": "9F8B5FFEB4DD54D4FF40E4C952AA4F8E0BD426D3"
	},
	{
		"operator_address": "exvaloper1508d7eq592kg2lh9d46xvv3r4sm7gm8w0nrejk",
		"validator_address": "C12BA4719F0F124D44CD1C820F7A7DE5AA2724EF"
	},
	{
		"operator_address": "exvaloper14zgafe7cynlpuhpfpqpxu2gntzhq6ttedqru6j",
		"validator_address": "4CFF323073C5796C57D963F837ACF4A5AC617032"
	},
	{
		"operator_address": "exvaloper14kpvn0zr75594rlrl66lw953mlkrq6qz5ctupj",
		"validator_address": "5F3E052B1788D34A84878B603FDB0DF11DF2BC9E"
	},
	{
		"operator_address": "exvaloper1k84d9rfaz6v92sazaclj24uyvx79wnl8kvckks",
		"validator_address": "8EF0AC196873BB6471F32176B095A459C1277A18"
	},
	{
		"operator_address": "exvaloper1ka92ujcwh6hyyeu4tymzy3dedgxplt4dtsr7xh",
		"validator_address": "D67B9BA8B93D16A80B3F228D9DDCEFBEC0463D10"
	},
	{
		"operator_address": "exvaloper1klcqq056hndfch7yew6fkl6tyrdr07qxv60g90",
		"validator_address": "714BEBEDC3A93CB6EFD71E6E041F41707C77B176"
	},
	{
		"operator_address": "exvaloper1hw0y28hgzadpmjwa68sfukdp69pc68cnxxgml0",
		"validator_address": "154D3DA927BF936369A76C4F5F7672183B842700"
	},
	{
		"operator_address": "exvaloper1h59keaqu7jap3cs6fqw0usggapl9q2x5v4w7rx",
		"validator_address": "EDB8AFEC84C4FCC034143CF86B89C53960FF2706"
	},
	{
		"operator_address": "exvaloper1c34s7lc7ec8gs9xrtxeh0j2wjaam25c3g06xp3",
		"validator_address": "B527086523C2B0B093BECFE42D45729B6775F56D"
	},
	{
		"operator_address": "exvaloper1evazeyntpfr62avj65dwd6mcw9wvh24kc3x84s",
		"validator_address": "621C90FCD8CD2C01A8664FAD003F4CBC400E5DA8"
	},
	{
		"operator_address": "exvaloper1m569cfenudxemegcf4mmykhugnslhdv0xhvcj6",
		"validator_address": "697C3DBA5A7E7326B560E496D6F7B9924A26ED1B"
	},
	{
		"operator_address": "exvaloper1mlmwvdprn8dj6g45vdxkjsjgu4ntu9j7dnjky2",
		"validator_address": "CF60F5722ECD528917287E85BDAC92446B21A08E"
	},
	{
		"operator_address": "exvaloper1ucmx6vvtrwam9pg20fnwmy9z80uhchyxqn67wq",
		"validator_address": "693E03F50442F845AF1EDD43C51F4246F6B3F88B"
	},
	{
		"operator_address": "exvaloper1a9893mfvk9x80x209jhpvl0hm24djxqhr3jwuf",
		"validator_address": "3D3468F41B262F1119C28009DAF0D202881AFADE"
	}
]
```

#### Response Parameters

| **Parameter**     | **Type** | **Description**               |
| :---------------- | :------- | :---------------------------- |
| operator_address  | String   | Operator address of validator |
| validator_address | String   | Validator address             |