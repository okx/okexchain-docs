# Distribution

### Query distribution params

Query distribution params onchain

#### HTTP Request

`GET v1/distribution/parameters`

> Request Example

```wiki
https://okbrpc.okbchain.org/v1/distribution/parameters
```

#### Request Parameters

None

> Example Response

```json
{
    "community_tax": "0.020000000000000000",
    "withdraw_addr_enabled": true,
    "distribution_type": 1,
    "withdraw_reward_enabled": true,
    "reward_truncate_precision": "0"
}
```

#### Response Parameters

| **Parameter**             | **Type** | **Description**                                              |
| :------------------------ | :------- | :----------------------------------------------------------- |
| community_tax             | String   | Community tax                                                |
| withdraw_addr_enabled     | bool     | Enable using withdraw address                                |
| distribution_type         | int      | Distribution model,0 offchain; 1 onchain                     |
| withdraw_reward_enabled   | bool     | Enable withdrawing reward                                    |
| reward_truncate_precision | String   | Dividend precision truncated. 0 means to keep 0 decimal points, such as 1.2345 truncated dividend is 1; 2 means to keep two decimal points. For example, the dividend after 1.2345 truncated is 1.23 |

### Get delegator rewards

Query rewards from all validators

#### HTTP Request

`GET v1/distribution/delegators/{delegatorAddr}/rewards`

> Request Example

```wiki
https://okbrpc.okbchain.org/v1/distribution/delegators/ex17se79kf0c9t5sw0yg0jjdm6et79sy8aradphtg/rewards
```

#### Request Parameters

None

> Example Response

```json
{
    "rewards": [
        {
            "validator_address": "exvaloper1q6ls3h64gkxq0r73u2eqwwr7d5mp583fm325zu",
            "reward": [
                {
                    "denom": "okb",
                    "amount": "2.081385971734814468"
                }
            ]
        },
        {
            "validator_address": "exvaloper1pt7xrmxul7sx54ml44lvv403r06clrdkehd8z7",
            "reward": [
                {
                    "denom": "okb",
                    "amount": "2.081385971734814468"
                }
            ]
        },
        {
            "validator_address": "exvaloper1gd6avvrg0jp5wxpfyfa4c84fygtl6cn9dage6d",
            "reward": [
                {
                    "denom": "okb",
                    "amount": "2.081385971734814468"
                }
            ]
        },
        {
            "validator_address": "exvaloper1ve4mwgq9967gk338yptsg2fheur4ke322gzynt",
            "reward": [
                {
                    "denom": "okb",
                    "amount": "2.081385971734814468"
                }
            ]
        }
    ],
    "total": [
        {
            "denom": "okb",
            "amount": "8.325543886939257872"
        }
    ]
}
```

#### Response Parameters

| **Parameter**     | **Type** | **Description**               |
| :---------------- | :------- | :---------------------------- |
| rewards           | Array    | Reward array                  |
| validator_address | String   | Validator address             |
| reward            | String   | Reward from validator address |
| total             | Array    | Collection of all rewards     |

### Get delegator rewards from a validator

Query delegator rewards from a particular validator

#### HTTP Request

`GET v1/distribution/delegators/{delegatorAddr}/rewards/{validatorAddr}`

> Request Example

```wiki
https://okbrpc.okbchain.org/v1/distribution/delegators/ex17se79kf0c9t5sw0yg0jjdm6et79sy8aradphtg/rewards/exvaloper1q9nct2gska2yutx24starv6s63xz022fdwdgzv
```

#### Request Parameters

None

> Example Response

```json
[
    {
        "denom": "okb",
        "amount": "2.694422051593216614"
    }
]
```

#### Response Parameters

| **Parameter** | **Type** | **Description** |
| :------------ | :------- | :-------------- |
| denom         | String   | okb             |
| amount        | String   | Amount          |

### Get validator commission

Query distribution validator commission

#### HTTP Request

`GET v1/distribution/validators/{validatorAddr}/validator_commission`

> Request Example

```wiki
https://okbrpc.okbchain.org/v1/distribution/validators/exvaloper1q9nct2gska2yutx24starv6s63xz022fdwdgzv/validator_commission
```

#### Request Parameters

None

> Example Response

```json
[
    {
        "denom": "okb",
        "amount": "2.038175975947119947"
    }
]
```

#### Response Parameters

| **Parameter** | **Type** | **Description**                |
| :------------ | :------- | :----------------------------- |
| denom         | String   | okb                            |
| amount        | String   | Amount of validator commission |

### Get outstanding for a validator

Query distribution outstanding (un-withdrawn) rewards for a validator and all their delegations

#### HTTP Request

`GET v1/distribution/validators/{{validatorAddr}}/outstanding_rewards`

> Request Example

```wiki
https://okbrpc.okbchain.org/v1/distribution/validators/exvaloper1q9nct2gska2yutx24starv6s63xz022fdwdgzv/outstanding_rewards
```

#### Request Parameters

None

> Example Response

```json
[
    {
        "denom": "okb",
        "amount": "3.150937542414329105"
    }
]
```

#### Response Parameters

| **Parameter** | **Type** | **Description**                 |
| :------------ | :------- | :------------------------------ |
| denom         | String   | okb                             |
| amount        | String   | Amount of validator outstanding |

### Get withdraw address

Query delegator's withdraw address

#### HTTP Request

`GET v1/distribution/delegators/{{delegatorAddr}}/withdraw_address`

> Request Example

```wiki
https://okbrpc.okbchain.org/v1/distribution/delegators/ex17se79kf0c9t5sw0yg0jjdm6et79sy8aradphtg/withdraw_address
```

#### Request Parameters

None

> Example Response

```json
"ex1h0j8x0v9hs4eq6ppgamemfyu4vuvp2sl0q9p3v"
```

#### Response Parameters

| **Parameter** | **Type** | **Description**  |
| :------------ | :------- | :--------------- |
| String        | String   | Withdraw address |

### Get amount in community pool

Query the amount of coins in the community pool

#### HTTP Request

`GET v1/distribution/community_pool`

> Request Example

```wiki
https://okbrpc.okbchain.org/v1/distribution/community_pool
```

#### Request Parameters

None

> Example Response

```json
[
    {
        "denom": "okb",
        "amount": "2.471826444531520986"
    }
]
```

#### Response Parameters

| **Parameter** | **Type** | **Description**          |
| :------------ | :------- | :----------------------- |
| denom         | String   | okb                      |
| amount        | String   | Amount of community pool |