## app升级
### 1. 提交app升级提案
在app升级之前，需要首先提交`升级提案`, 假设当前网络运行的app版本为`0`，要升级到版本`1`
```sh
$ okchaincli tx gov submit-app-upgrade-proposal --title="app upgrade" --description="app upgrade, version 1" --deposit="50okt" --version=1 --software="http://newappdownloadingurl" --switchHeight="1000" --threshold="0.8" --type="AppUpgrade" --from jack -b block

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
      "value": "okchain1wxzmqpff0g5trn45j33l3x0zakxu6fklj3mjv6"
    },
    {
      "key": "proposal-id",
      "value": "1"
    }
  ]
}
```
OKChain会为提交成功的提案生成一个proposal-id用于唯一标识该提案，该例中的提案proposal_id为1。 查询提案信息：
```sh
$ okchaincli query gov proposal 1
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
当前提案状态为DepositPeriod，配置中升级需要抵押100okt，上面发起提案申请中只抵押了50okt，所以需要再抵押多于50okt进入投票阶段。 如果在发起提案后查询结果为：
```sh
ERROR: {"codespace":"gov","code":1,"message":"Unknown proposal with id 1"}
```
说明提案进入DepositPeriod状态后超时（当前DepositPeriod和VotingPeriod超时时间分别为24h和72h）且没有达到抵押条件，链上会将该提案删除，所以得到上述错误。
### 2. app升级提案抵押
```sh
$ okchaincli tx gov deposit 1 50okt --from jack -b block

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
      "value": "okchain1wxzmqpff0g5trn45j33l3x0zakxu6fklj3mjv6"
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
抵押后再次通过上述命令查询，此时提案进入VotingPeriod状态。在VotingPeriod超时前需要对提案进行投票否则提案进入Rejected状态。

### 3. app升级提案投票
```sh
$ okchaincli tx gov vote 1 yes --from jack -b block

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
      "value": "okchain1wxzmqpff0g5trn45j33l3x0zakxu6fklj3mjv6"
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
在VotingPeriod结束时查询提案，提案状态为Passed状态。此时说明提案通过。

### 4. 新app版本运行
一旦app升级提案获得通过，各个节点的管理员可以通过提案中`--software="http://newappdownloadingurl"`所指定下载地址，获取版本`1`软件并重新启动`okchain`后台程序。
#### 查询当前app运行版本
```sh
$ okchaincli query upgrade version
{
  "version": "1"
}
```
### 5. 新app版本激活
当块高达到提案指定的块高`--switchHeight="1000"`指定高度, 如果此时网络中大部分节点已经将app更新到`1`版本，那么网络会自动而平滑的切换到新版本；否则，维持原来版本。
#### 测试新版本是否激活
```sh
$ okchaincli query upgrade failed-version
{
  "version": "0"
}
```
如果当区块高度大于`--switchHeight="1000"`指定高度, 查询`failed-version`返回为`0`(默认值为0), 那么网络升级成功；否则，升级失败，网络仍然以低版本`0`运行。

注：为了安全起见，下载新版本app软件后，需要校验程序的SHA-1指纹是否与官网公布的一致。

