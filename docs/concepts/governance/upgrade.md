# Governance App Upgrade

Description:
Compared with the traditional hard fork, app upgrade is a smoother and more fault-tolerant system upgrade method. The app here refers to the OKExChain software running on the tendermint consensus layer. When the app version update is completed and the new validation node’s “voting power” is lower than a certain threshold, the new app can continue to run based on the logic of its old version in the same situation where the entire block network remains in the old version, which will not result in network fork; when the new validation node’s “voting power” reaches the threshold, the logic of its new version will swap at a specified height, and the entire block network will run using such logic.

## Reference
proposal parameters:
```
- title indicates the title of the app upgrade proposal
- description indicates a detailed description of the app upgrade proposal
- deposit indicates the number of tokens desposited by the current proposal
- version indicates the new version number of the app included in the current proposal
- software indicates the download address of the app of the new version included in the current proposal
- switchHeight indicates the swap block height of the app of the new version included in the current proposal
- threshold indicates the threshold for 'voting power' included in the current proposal
- type specifies the current proposal as an app upgrade proposal
- from indicates the current proposal's initiator account, alice
```

## App upgrade
![](../../img/upgrade-diagram.png)

## Operation process of upgrade
### 1. Submit an app upgrade proposal
Before the app upgrade, you need to submit an `upgrade proposal` first, assuming that the current version of the app running on the network is  `0` and you want to upgrade it to version `1`
```sh
$ exchaindcli tx gov submit-app-upgrade-proposal --title="app upgrade" --description="app upgrade, version 1" --deposit="50okt" --version=1 --software="http://newappdownloadingurl" --switchHeight="1000" --threshold="0.8" --type="AppUpgrade" --from jack -b block

confirm transaction before signing and broadcasting [Y/n]: y
{
  "height": "136",
  "txhash": "6DD839E912CB62BB0654CE0476CE474F596E1D6A5A038D95B4CEA0AD71463841",
  "data": "0101",
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
      "value": "0.01250000 okt"
    },
    {
      "key": "proposer",
      "value": "ex1hcngft7gfkhn8z8fnlajzh7agyt0az0v6ztmme"
    },
    {
      "key": "proposal-id",
      "value": "1"
    }
  ]
}
```
OKExChain will generate a proposal-id to uniquely label the successfully submitted proposal. The proposal_id of the proposal in this example is 1. Query proposal information:
```sh
$ exchaindcli query gov proposal 1
{
  "type": "gov/AppUpgradeProposal",
  "value": {
    "BasicProposal": {
      "proposal_id": "1",
      "title": "app upgrade"V
      "description": "app upgrade, version 1",
      "proposal_type": "AppUpgrade",
      "proposal_status": "DepositPeriod",
      "tally_result": {
        "yes": "0.00000000",
        "abstain": "0.00000000",
        "no": "0.00000000",
        "no_with_veto": "0.00000000"
      },
      "submit_time": "2019-07-29T09:28:28.886129Z",
      "deposit_end_time": "2019-07-30T09:28:28.886129Z",
      "total_deposit": [
        {
          "denom": "okt",
          "amount": "50.00000000"
        }
      ],
      "voting_start_time": "0001-01-01T00:00:00Z",
      "voting_end_time": "0001-01-01T00:00:00Z"
    },
    "ProtocolDefinition": {
      "version": "1",
      "software": "http://newappdownloadingurl",
      "height": "1000",
      "threshold": "0.80000000"
    }
  }
}
```
The current proposal status is DepositPeriod. The upgrade requires a deposit of 100okt during configuration. Only 50okt is deposited in the above proposal application, so that a deposit of over 50okt should be deposited again to enter the voting period. If the query results after initiating the proposal are:
```sh
ERROR: {"codespace":"gov","code":1,"message":"Unknown proposal with id 1"}
```
which means that the proposal faces a timeout after entering the DepositPeriod state (the timeouts during the DepositPeriod and VotingPeriod are 24h and 72h respectively) and fails to meet the deposit conditions, and the proposal will be deleted on-chain, so that the above error is obtained.
### 2. Deposit an app upgrade proposal
```sh
$ exchaindcli tx gov deposit 1 50okt --from jack -b block

confirm transaction before signing and broadcasting [Y/n]: y
{
  "height": "190",
  "txhash": "F67D95ABA3FEEB8DE1ED2F42F19BC411A801EAF73568F5489A1EE3074D709C1C",
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
      "value": "0.01250000 okt"
    },
    {
      "key": "depositor",
      "value": "ex1hcngft7gfkhn8z8fnlajzh7agyt0az0v6ztmme"
    },
    {
      "key": "proposal-id",
      "value": "1"
    },
    {
      "key": "voting-period-start",
      "value": "1"
    }
  ]
}
```
When the query is made through the above commands again after deposit, the proposal enters the VotingPeriod state. Before the timeout during the votingPeriod, it is required to vote on the proposal. Otherwise the proposal will enter the Rejected state.

### 3. Vote on an app upgrade proposal
```sh
$ exchaindcli tx gov vote 1 yes --from jack -b block

confirm transaction before signing and broadcasting [Y/n]: y
{
  "height": "207",
  "txhash": "4CEAE14408145FA161A693F19F57E1F7033012A5EE15D437A00C85BF59B1A419",
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
      "value": "0.01250000 okt"
    },
    {
      "key": "voter",
      "value": "ex1hcngft7gfkhn8z8fnlajzh7agyt0az0v6ztmme"
    },
    {
      "key": "proposal-id",
      "value": "1"
    },
    {
      "key": "proposal-status",
      "value": "VotingPeriod"
    }
  ]
}
```
Query the proposal at the end of the VotingPeriod. The proposal status is Passed. That means the proposal is approved.

### 4. Run the new app version
Once the app upgrade proposal is approved, the administrator of each node can obtain version `1` and restart the background program of `okexchain` via the download address specified by `--software="http://newappdownloadingurl"` in the proposal.
#### Query the current app version
```sh
$ exchaindcli query upgrade version
{
  "version": "1"
}
```
### 5. Activate the new app version
When the block reaches the block height `--switchHeight="1000"` specified by the proposal, if most nodes on the network have updated the app to version `1`, the network will automatically and smoothly switch to the new version. Otherwise, maintain the original version.
#### Test if the new version is activated
```sh
$ exchaindcli query upgrade failed-version
{
  "version": "0"
}
```
If the block height is higher than the specified height of `--switchHeight="1000"` and the value of `failed-version` returns` 0` (the default value is 0) after query, the network upgrade is successful; otherwise the upgrade fails and version `0` is running on the network.

Note: For the sake of security, after downloading the new version of the app software, you need to verify if the SHA-1 fingerprint of the program is consistent with the one published on the official website.

