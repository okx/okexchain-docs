# OKChain简介


OKChain是OKEx研发的一组商业链。以建立安全、高效Defi基础设施为目标，我们的第一条链，是在已经实现解决效率敏感需求的前提下，向用户提供更全面的增信服务，解决用户加密资产交换时对增信服务的需求。

OKChain目前包括两个可执行程序，okchaind和okchaincli。

* okchaind：OKChain后台程序，用来运行OKChain全节点
* okchaincli：OKChain命令行客户端，用来与OKChain全节点进行交互

主要包含以下几个模块：

* auth：账户模块
* token：token模块
* order：订单模块
* gov：治理模块
* backend：行情模块
<!--
* staking：抵押模块
* distribution：分红模块
* upgrade：升级模块 
-->


## okchaind后台程序

okchaind用于初始化和启动OKChain全节点，是OKChain后台程序，详细信息请参考`okchaind -h`, 如下：
```sh
$ okchaind -h
OKChain Daemon

Usage:
  okchaind [command]

Available Commands:
  init                Initialize genesis config, priv-validator file, and p2p-node file
  collect-gentxs      Collect genesis txs and output a genesis.json file
  testnet             Initialize files for a Okdexd testnet
  gentx               Generate a genesis tx carrying a self delegation
  add-genesis-account Adds an account to the genesis file
  validate-genesis    validates the genesis file at the default location or at the location passed as an arg
  start               Run the full node
  unsafe-reset-all    Resets the blockchain database, removes address book files, and resets priv_validator.json to the genesis state

  tendermint          Tendermint subcommands
  export              Export state to JSON

  version             Print the app version
  help                Help about any command

Flags:
      --enable_distr false   Enable distribution module (default false)
  -h, --help                 help for okchaind
      --home string          directory for config and data (default "$HOME/.okchaind")
      --log_file string      Log file (default "$HOME/.okchaind/okchaind.log")
      --log_level string     Log level (default "main:info,state:info,*:error")
      --log_stdout           Print log to stdout, rather than a file (default true)
      --passwd string        Pass word of sender (default "12345678")
      --production_mode      Run in production mode or development mode. (default "false")
      --trace                print out full stack trace on errors

Use "okchaind [command] --help" for more information about a command.
```

## okchaincli客户端

okchaincli是OKChain命令行客户端，提供了丰富的功能与OKChain后台程序进行交互，主要包含两类功能：tx功能和query功能。详细信息请参考`okchaincli -h`, 如下：
```sh 
$ okchaincli -h
OKChain Client

Usage:
  okchaincli [command]

Available Commands:
  status      Query remote node for status
  config      Create or query an OKChain CLI configuration file
  query       Querying subcommands
  tx          Transactions subcommands
  backend     backend subcommands


  keys        Add or view local private keys

  version     Print the app version
  help        Help about any command

Flags:
      --chain-id string   Chain ID of tendermint node
  -e, --encoding string   Binary encoding (hex|b64|btc) (default "hex")
  -h, --help              help for okchaincli
      --home string       directory for config and data (default "/Users/hanxueyang/.okchaincli")
  -o, --output string     Output format (text|json) (default "text")
      --passwd string     Pass word of sender (default "12345678")
      --trace             print out full stack trace on errors

Use "okchaincli [command] --help" for more information about a command.
```
同时，用户也可以通过`okchaincli keys`子命令来管理本地私钥。

