# Gov

### Get govParameters

Get gov parameters by type, `deposit / voting / tallying`

#### HTTP Request

`GET v1/gov/parameters/{ParamsType}`

> Request Example

```wiki
https://okbrpc.okbchain.org/v1/gov/parameters/deposit
```

#### Request Parameters

None

> Example Response

```json
{
  "min_deposit": [
    {
      "denom": "okb",
      "amount": "10.000000000000000000"
    }
  ],
  "max_deposit_period": "86400000000000"
}
```

#### Response Parameters

| **Parameter**      | **Type** | **Description**                 |
| :----------------- | :------- | :------------------------------ |
| min_deposit        | Array    | Min deposit, okb                |
| > amount           | String   | amount of deposit               |
| > denom            | String   | denom of deposit                |
| max_deposit_period | String   | Max deposit period for proposal |

> Request Example

```wiki
https://okbrpc.okbchain.org/v1/gov/parameters/voting
```

#### Request Parameters

None

> Example Response

```json
{
  "voting_period": "259200000000000"
}
```

#### Response Parameters

| **Parameter** | **Type** | **Description**               |
| :------------ | :------- | :---------------------------- |
| voting_period | String   | Voting period of the proposal |

> Request Example

```wiki
https://okbrpc.okbchain.org/v1/gov/parameters/tallying
```

#### Request Parameters

None

> Example Response

```json
{
  "quorum": "0.334000000000000000",
  "threshold": "0.500000000000000000",
  "veto": "0.334000000000000000",
  "yes_in_vote_period": "0.667000000000000000"
}
```

#### Response Parameters

| **Parameter**      | **Type** | **Description**         |
| :----------------- | :------- | :---------------------- |
| quorum             | String   | Quorum of voting        |
| threshold          | String   | Threshold of voting     |
| veto               | String   | Veto                    |
| yes_in_vote_period | String   | Yes in period of voting |

### Get proposals

Get the all proposals

#### HTTP Request

`GET v1/gov/proposals`

> Request Example

```wiki
https://okbrpc.okbchain.org/v1/gov/proposals

```

#### Request Parameters

None

> Example Response

```json
[{
 	"content": {
 		"type": "okbchain/params/ParameterChangeProposal",
 		"value": {
 			"ParameterChangeProposal": {
 				"title": "open farm",
 				"description": "open farm",
 				"changes": [{
 					"subspace": "farm",
 					"key": "YieldNativeToken",
 					"value": "true"
 				}]
 			},
 			"height": "600"
 		}
 	},
 	"id": "1",
 	"proposal_status": "Passed",
 	"final_tally_result": {
 		"total_power": "484267077339.546817829366687657",
 		"total_voted_power": "352194238067.852231148630318296",
 		"yes": "352194238067.852231148630318296",
 		"abstain": "0.000000000000000000",
 		"no": "0.000000000000000000",
 		"no_with_veto": "0.000000000000000000"
 	},
 	"submit_time": "2021-01-15T12:10:20.683558322Z",
 	"deposit_end_time": "2021-01-15T12:10:20.683558322Z",
 	"total_deposit": [{
 		"denom": "okb",
 		"amount": "100.000000000000000000"
 	}],
 	"voting_start_time": "2021-01-15T12:10:20.683558322Z",
 	"voting_end_time": "2021-01-15T13:00:21.369507718Z"
 }]
```

#### Response Parameters

| **Parameter**              | **Type** | **Description**                                              |
| :------------------------- | :------- | :----------------------------------------------------------- |
| content                    | Object   | Content of proposal                                          |
| > type                     | String   | Type of proposal                                             |
| > value                    | Object   | Value object of proposal                                     |
| >> ParameterChangeProposal | Object   | Parameter change proposal object                             |
| >>> changes                | Array    | Changes array                                                |
| >>>> subspace              | String   | Subspace name of change                                      |
| >>>> value                 | String   | Value of change                                              |
| >>>> key                   | String   | key of change                                                |
| >>> description            | String   | proposal description                                         |
| >>> title                  | String   | Proposal title                                               |
| >> height                  | String   | Effective block height of the proposal                       |
| voting_start_time          | String   | Voting start time of proposal                                |
| id                         | String   | Proposal id                                                  |
| deposit_end_time           | String   | Deposit end time of proposal                                 |
| submit_time                | String   | Submit time of proposal                                      |
| total_deposit              | Array    | Total deposit of proposal                                    |
| > amount                   | String   | Amount of deposit                                            |
| > denom                    | String   | Denom of deposit                                             |
| final_tally_result         | Object   | Final tally result of proposal                               |
| > total_voted_power        | String   | Total voted power                                            |
| > no                       | String   | Voted no                                                     |
| > no_with_veto             | String   | Voted with veto                                              |
| > total_power              | String   | Total power                                                  |
| > yes                      | String   | Voted yes                                                    |
| > abstain                  | String   | Voted abstain                                                |
| proposal_status            | String   | Proposal status.DepositPeriod,VotingPeriod,Passed,Rejected,Failed |
| voting_end_time            | String   | Voting end time of proposal                                  |

### Get proposer by proposalId

Get proposer by ID

#### HTTP Request

`GET v1/gov/proposals/{ProposalID}/proposer`

> Request Example

```wiki
https://okbrpc.okbchain.org/v1/gov/proposals/17/proposer
```

#### Request Parameters

None

> Example Response

```json
{
  "proposal_id": "17",
  "proposer": "ex18au05qx485u2qcw2gvqsrfh29evq77lmnmqk2e"
}
```

#### Response Parameters

| **Parameter** | **Type** | **Description**  |
| :------------ | :------- | :--------------- |
| proposal_id   | String   | Proposal id      |
| proposer      | String   | Proposer address |

### Get tally by proposalId

Get proposer by ID

#### HTTP Request

`GET v1/gov/proposals/{ProposalID}/tally`

> Request Example

```wiki
https://okbrpc.okbchain.org/v1/gov/proposals/17/tally
```

#### Request Parameters

None

> Example Response

```json
{
  "total_power": "165837653241301.605382606344753055",
  "total_voted_power": "116130784063951.268597087599105663",
  "yes": "116130784063951.268597087599105663",
  "abstain": "0.000000000000000000",
  "no": "0.000000000000000000",
  "no_with_veto": "0.000000000000000000"
}
```

#### Response Parameters

| **Parameter**     | **Type** | **Description**             |
| :---------------- | :------- | :-------------------------- |
| total_power       | String   | Total power                 |
| total_voted_power | String   | Total voted power           |
| yes               | String   | Voted power of yes          |
| abstain           | String   | Voted power of abstain      |
| no                | String   | Voted power of no           |
| no_with_veto      | String   | Voted power of no with veto |

### Get votes by proposalId

Get votes by proposalId

#### HTTP Request

`GET v1/gov/proposals/{ProposalID}/votes`

> Request Example

```wiki
https://okbrpc.okbchain.org/v1/gov/proposals/17/votes
```

#### Request Parameters

None

> Example Response

```json
[
  {
    "proposal_id": "17",
    "voter": "ex18au05qx485u2qcw2gvqsrfh29evq77lmnmqk2e",
    "option": "Yes"
  },
  {
    "proposal_id": "17",
    "voter": "ex1s6nfs7mlj7ewsskkrmekqhpq2w234fczzm23lw",
    "option": "Yes"
  },
  {
    "proposal_id": "17",
    "voter": "ex1zxthrcdcecfe5ss4tal0tq30hzel2lksvx6cnp",
    "option": "Yes"
  },
  {
    "proposal_id": "17",
    "voter": "ex1q9nct2gska2yutx24starv6s63xz022fmf8vxk",
    "option": "Yes"
  },
  {
    "proposal_id": "17",
    "voter": "ex195ez67wmhprwrru34gvttyd8ttpl7edx8xvrc8",
    "option": "Yes"
  },
  {
    "proposal_id": "17",
    "voter": "ex19wln93k3faq7vkqzlc9gljr3ey5fljt984rz57",
    "option": "Yes"
  },
  {
    "proposal_id": "17",
    "voter": "ex1qva0ejf0t943x6rt824gwmvtjgec9cjr2v72ha",
    "option": "Yes"
  },
  {
    "proposal_id": "17",
    "voter": "ex1ka92ujcwh6hyyeu4tymzy3dedgxplt4dahf6zd",
    "option": "Yes"
  },
  {
    "proposal_id": "17",
    "voter": "ex1zza3jrylyecrtuh0p9ts2xauzsefuvwarc0d5u",
    "option": "Yes"
  },
  {
    "proposal_id": "17",
    "voter": "ex1ygcvtcqxl82xvzrq25dymam434k3nnc8qfx8jp",
    "option": "Yes"
  },
  {
    "proposal_id": "17",
    "voter": "ex1ja9xngm4zh0t442mse73ll30p7dczd49xqdhwu",
    "option": "Yes"
  },
  {
    "proposal_id": "17",
    "voter": "ex1c34s7lc7ec8gs9xrtxeh0j2wjaam25c37gsz9t",
    "option": "Yes"
  },
  {
    "proposal_id": "17",
    "voter": "ex1m569cfenudxemegcf4mmykhugnslhdv0ssxukq",
    "option": "Yes"
  }
]
```

#### Response Parameters

| **Parameter** | **Type** | **Description**                    |
| :------------ | :------- | :--------------------------------- |
| proposal_id   | String   | Proposal id                        |
| voter         | String   | Voter of address                   |
| option        | String   | Option, Yes, Abstain,No,NoWithVeto |
