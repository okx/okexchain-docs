# Wasm

### Query all codes

Query all contract codes

#### HTTP Request

`GET v1/wasm/code`

> Request Example

```wiki
https://okbrpc.okbchain.org/v1/wasm/code?page=1&count_total=true&reverse=true&limit=2
```

#### Request Parameters

| **Parameter**                                           | **Type** | **Required** | **Description**                                              |
| :------------------------------------------------------ | :------- | :----------- | :----------------------------------------------------------- |
| page                                                    | Uint64   | No           |                                                              |
| page_key                                                | String   | No           | `page_key` is a value returned in `PageResponse.next_key` to begin querying the next page most efficiently. Only one of `offset` or `page_key` should be set. |
| offset                                                  | Uint64   | No           | `offset` is a numeric offset that can be used when `page_key` is unavailable. It is less efficient than using key. Only one of `offset` or `page_key` should be set. |
| limit                                                   | Uint64   | No           | `limit` is the total number of results to be returned in the result page. If left empty it will default to a value to be set by each app. |
| count_total                                             | Bool     | No           | `count_total` is set to true to indicate that the result set should include a count of the total number of items available for pagination in UIs. `count_total` is only respected when `offset` is used. It is ignored when `page_key` is set. |
| reverse                                                 | Bool     | No           | `reverse` is set to true if results are to be returned in the descending order. |
| **Once page is set, page_key or offset cannot be set.** |          |              |                                                              |

> Example Response

```json
{
  "code_infos": [
    {
      "id": "2",
      "creator": "ex1h0j8x0v9hs4eq6ppgamemfyu4vuvp2sl0q9p3v",
      "data_hash": "DCE5CE229B1FE766ABD20AA0F0126D3FA9CB63F9C18C78192E14BAE51634304E",
      "instantiate_permission": {
        "permission": "Everybody"
      }
    },
    {
      "id": "1",
      "creator": "ex1h0j8x0v9hs4eq6ppgamemfyu4vuvp2sl0q9p3v",
      "data_hash": "13A1FC994CC6D1C81B746EE0C0FF6F90043875E0BF1D9BE6B7D779FC978DC2A5",
      "instantiate_permission": {
        "permission": "Everybody"
      }
    }
  ],
  "pagination": {
    "next_key": "AAAAAAAAAAM=",
    "total": "5"
  }
}

```

#### Response Parameters

| **Parameter**                               | **Type**     | **Description**             |
| :------------------------------------------ | :----------- | :-------------------------- |
| code_infos                                  | Array Object | The array code info         |
| code_info.id                                | Int64        | Code id                     |
| code_info.creator                           | String       | The creator of code         |
| code_info.data_hash                         | String       | The hash of code            |
| code_info.instantiate_permission            | Object       | The permission of code      |
| code_info.instantiate_permission.permission | String       | Permission type             |
| pagination                                  | Object       | Page response	parameters |
| pagination.next_key                         | String       | The next page start key     |
| pagination.total                            | String       | It's a number format        |

### Get contract code

Get contract code by codeID

#### HTTP Request

`GET v1/wasm/code/{codeID}`

> Request Example

```wiki
https://okbrpc.okbchain.org/v1/wasm/code/1
```

#### Request Parameters

| **Parameter** | **Type** | **Required** | **Description**               |
| :------------ | :------- | :----------- | :---------------------------- |
| codeID        | String   | Yes          | Code ID of wasm contract code |

> Example Response

```json
{
  "id": 1,
  "creator": "ex1h0j8x0v9hs4eq6ppgamemfyu4vuvp2sl0q9p3v",
  "data_hash": "13A1FC994CC6D1C81B746EE0C0FF6F90043875E0BF1D9BE6B7D779FC978DC2A5",
  "instantiate_permission": {
    "permission": "Everybody"
  },
  "data": "contract bytescode"
}
```

#### Response Parameters

| **Parameter**                     | **Type** | **Description**        |
| :-------------------------------- | :------- | :--------------------- |
| id                                | Int64    | Code id                |
| creator                           | String   | The creator of code    |
| data_hash                         | String   | The hash of code       |
| instantiate_permission            | Object   | The permission of code |
| instantiate_permission.permission | String   | Permission type        |
| data                              | String   | Code data              |

### Query contract information

Query contract information by contract address

#### HTTP Request

`GET v1/wasm/contract/{contractAddr}`

> Request Example

```wiki
https://okbrpc.okbchain.org/v1/wasm/contract/ex14hj2tavq8fpesdwxxcu44rty3hh90vhujrvcmstl4zr3txmfvw9s6fqu27
```

#### Request Parameters

| **Parameter** | **Type** | **Required** | **Description**  |
| :------------ | :------- | :----------- | :--------------- |
| contractAddr  | String   | Yes          | Contract address |

> Example Response

```json
{
  "address": "ex14hj2tavq8fpesdwxxcu44rty3hh90vhujrvcmstl4zr3txmfvw9s6fqu27",
  "code_id": 2,
  "creator": "ex1h0j8x0v9hs4eq6ppgamemfyu4vuvp2sl0q9p3v",
  "label": "local0.1.0"
}
```

#### Response Parameters

| **Parameter** | **Type** | **Description**          |
| :------------ | :------- | :----------------------- |
| address       | String   | Contract address         |
| code_id       | int64    | Code id                  |
| creator       | String   | The creator of  contract |
| label         | String   | Contract label           |

### Query all corresponding contracts of specified codeid

Query all corresponding contracts of specified codeid

#### HTTP Request

`GET v1/wasm/code/{codeID}/contracts`

> Request Example

```wiki
https://okbrpc.okbchain.org/v1/wasm/code/3/contracts?page=1&count_total=true&reverse=true&limit=1
```

#### Request Parameters

| **Parameter**                                           | **Type** | **Required** | **Description**                                              |
| :------------------------------------------------------ | :------- | :----------- | :----------------------------------------------------------- |
| codeID                                                  | String   | Yes          | Code id of wasm contract                                     |
| page                                                    | Uint64   | No           | Page                                                         |
| page_key                                                | String   | No           | `page_key` is a value returned in `PageResponse.next_key` to begin querying the next page most efficiently. Only one of `offset` or `page_key` should be set. |
| offset                                                  | Uint64   | No           | `offset` is a numeric offset that can be used when `page_key` is unavailable. It is less efficient than using key. Only one of `offset` or `page_key` should be set. |
| limit                                                   | Uint64   | No           | `limit` is the total number of results to be returned in the result page. If left empty it will default to a value to be set by each app. |
| count_total                                             | Bool     | No           | `count_total` is set to true to indicate that the result set should include a count of the total number of items available for pagination in UIs. `count_total` is only respected when `offset` is used. It is ignored when `page_key` is set. |
| reverse                                                 | Bool     | No           | `reverse` is set to true if results are to be returned in the descending order. |
| **Once page is set, page_key or offset cannot be set.** |          |              |                                                              |

> Example Response

```json
{
  "contracts": [
    "ex1qg5ega6dykkxc307y25pecuufrjkxkaggkkxh7nad0vhyhtuhw3s4zjvwg"
  ],
  "pagination": {
    "total": "1"
  }
}
```

#### Response Parameters

| **Parameter**       | **Type** | **Description**             |
| :------------------ | :------- | :-------------------------- |
| contracts           | Array    | Contract Address Array      |
| pagination          | Object   | Page response	parameters |
| pagination.next_key | String   | The next page start key     |
| pagination.total    | String   | It's a number format        |

###  Query contract history information

Query contract history information

#### HTTP Request

`GET v1/wasm/contract/{contractAddr}/history`

> Request Example

```wiki
https://okbrpc.okbchain.org/v1/wasm/contract/ex1ufs3tlq4umljk0qfe8k5ya0x6hpavn897u2cnf9k0en9jr7qarqqy2pl6c/history?page=1&count_total=true&reverse=true&limit=2
```

#### Request Parameters

| **Parameter**                                           | **Type** | **Required** | **Description**                                              |
| :------------------------------------------------------ | :------- | :----------- | :----------------------------------------------------------- |
| contractAddr                                            | String   | Yes          | contract address                                             |
| page                                                    | Uint64   | No           | page                                                         |
| page_key                                                | String   | No           | `page_key` is a value returned in `PageResponse.next_key` to begin querying the next page most efficiently. Only one of `offset` or `page_key` should be set. |
| offset                                                  | Uint64   | No           | `offset` is a numeric offset that can be used when `page_key` is unavailable. It is less efficient than using key. Only one of `offset` or `page_key` should be set. |
| limit                                                   | Uint64   | No           | `limit` is the total number of results to be returned in the result page. If left empty it will default to a value to be set by each app. |
| count_total                                             | Bool     | No           | `count_total` is set to true to indicate that the result set should include a count of the total number of items available for pagination in UIs. `count_total` is only respected when `offset` is used. It is ignored when `page_key` is set. |
| reverse                                                 | Bool     | No           | `reverse` is set to true if results are to be returned in the descending order. |
| **Once page is set, page_key or offset cannot be set.** |          |              |                                                              |

> Example Response

```json
{
  "entries": [
    {
      "operation": 1,
      "code_id": "5",
      "msg": {
        "decimals": 10,
        "initial_balances": [
          {
            "address": "ex1h0j8x0v9hs4eq6ppgamemfyu4vuvp2sl0q9p3v",
            "amount": "100000000"
          }
        ],
        "name": "my test token",
        "symbol": "MTT"
      }
    }
  ],
  "pagination": {
    "total": "1"
  }
}
```

#### Response Parameters

| **Parameter**                       | **Type**     | **Description**              |
| :---------------------------------- | :----------- | :--------------------------- |
| entries                             | Array Object | The history info of contract |
| entry.operation                     | Int64        | Contract operate type        |
| entry.code_id                       | String       | Code id                      |
| entry.msg                           | Object       | Msg                          |
| entry.msg.decimals                  | Int64        | Decimal                      |
| entry.msg.initial_balances          | Array Object | Initial balances             |
| entries.msg.initial_balance.address | String       | Initial balance address      |
| entries.msg.name                    | String       | Contract name                |
| entries.msg.symbol                  | String       | Contract symbol              |
| pagination                          | Object       | Page response parameters     |
| pagination.next_key                 | String       | The next page start key      |
| pagination.total                    | String       | It's a number format         |

### Query contract data through key

Query contract data by key

#### HTTP Request

`GET v1/wasm/contract/{contractAddr}/raw/{key}?encoding=hex`

> Request Example

```wiki
https://okbrpc.okbchain.org/v1/wasm/contract/ex1qg5ega6dykkxc307y25pecuufrjkxkaggkkxh7nad0vhyhtuhw3s4zjvwg/raw/0006636F6E666967636F6E7374616E7473?encoding=hex
```

#### Request Parameters

| **Parameter** | **Type** | **Required** | **Description**                   |
| :------------ | :------- | :----------- | :-------------------------------- |
| contractAddr  | String   | Yes          | Contract address required         |
| key           | String   | Yes          | Queried key value required        |
| encoding      | string   | Yes          | Must use hex because `key` is hex |

> Example Response

Response is Base64

```shell
"eyJuYW1lIjoibXkgdGVzdCB0b2tlbiIsInN5bWJvbCI6Ik1UVCIsImRlY2ltYWxzIjoxMH0="
# base64Code represent{"name":"my test token","symbol":"MTT","decimals":10}
```

#### Response Parameters

None

### Smart query of contract data

Smart query of contract data

#### HTTP Request

`GET v1/wasm/contract/{contractAddr}/smart/{query}?encoding=base64`

> Request Example

```wiki
https://okbrpc.okbchain.org/v1/wasm/contract/ex1qg5ega6dykkxc307y25pecuufrjkxkaggkkxh7nad0vhyhtuhw3s4zjvwg/smart/eyJiYWxhbmNlIjp7ImFkZHJlc3MiOiJleDFoMGo4eDB2OWhzNGVxNnBwZ2FtZW1meXU0dnV2cDJzbDBxOXAzdiJ9fQ==?encoding=base64
```

#### Request Parameters

| **Parameter** | **Type** | **Required** | **Description**                   |
| :------------ | :------- | :----------- | :-------------------------------- |
| contractAddr  | String   | Yes          | Contract address required         |
| query         | String   | Yes          | Request data required base64 code |
| encoding      | string   | Yes          | Must use base64                   |

> Example Response

```shell
{"smart":"eyJiYWxhbmNlIjoiOTk5OTk5MDAifQ=="} 
# eyJiYWxhbmNlIjoiOTk5OTk5MDAifQ== represent {"balance":"99999900"}
```

#### Response Parameters

| **Parameter** | **Type** | **Description** |
| :------------ | :------- | :-------------- |
| smart         | string   | Base64 Code     |

### Query contract status

Query contract all state data

#### HTTP Request

`GET v1/wasm/contract/{contractAddr}/state`

> Request Example

```wiki
https://okbrpc.okbchain.org/v1/wasm/contract/ex1ufs3tlq4umljk0qfe8k5ya0x6hpavn897u2cnf9k0en9jr7qarqqy2pl6c/state?page=1&count_total=true&reverse=true&limit=2
```

coderID

#### Request Parameters

| **Parameter** | **Type** | **Required** | **Description**                                              |
| :------------ | :------- | :----------- | :----------------------------------------------------------- |
| contractAddr  | String   | Yes          | Contract address                                             |
| page          | Uint64   | No           |                                                              |
| page_key      | String   | No           | `page_key` is a value returned in `PageResponse.next_key` to begin querying the next page most efficiently. Only one of `offset` or `page_key` should be set. |
| offset        | Uint64   | No           | `offset` is a numeric offset that can be used when `page_key` is unavailable. It is less efficient than using key. Only one of `offset` or `page_key` should be set. |
| limit         | Uint64   | No           | `limit` is the total number of results to be returned in the result page. If left empty it will default to a value to be set by each app. |
| count_total   | Bool     | No           | `count_total` is set to true to indicate that the result set should include a count of the total number of items available for pagination in UIs. `count_total` is only respected when `offset` is used. It is ignored when `page_key` is set. |
| reverse       | Bool     | No           | `reverse` is set to true if results are to be returned in the descending order. |

**Once page is set, page_key or offset cannot be set.** 

> Example Response

```json
{
  "models": [
    {
      "key": "0006636F6E666967746F74616C5F737570706C79",
      "value": "AAAAAAAAAAAAAAAABfXhAA=="
    },
    {
      "key": "0006636F6E666967636F6E7374616E7473",
      "value": "eyJuYW1lIjoibXkgdGVzdCB0b2tlbiIsInN5bWJvbCI6Ik1UVCIsImRlY2ltYWxzIjoxMH0="
    }
  ],
  "pagination": {
    "next_key": "AAhiYWxhbmNlc2V4MWV1dHl1cXFhc2UzZXl2d2U5MmNhdzhkY3g1bHk4czU0NHEzaG1x",
    "total": "4"
  }
}
```

#### Response Parameters

| **Parameter**       | **Type**     | **Description**            |
| :------------------ | :----------- | :------------------------- |
| models              | Array Object | Model object               |
| model.key           | String       | Data key which is hex code |
| model.value         | String       | Data value which is base64 |
| pagination          | Object       | Page response parameters   |
| pagination.next_key | String       | The next page start key    |
| pagination.total    | String       | It's a number format       |