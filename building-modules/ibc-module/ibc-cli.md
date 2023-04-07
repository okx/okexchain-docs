# OKTC IBC CLI Guide

## Background

​     This paper aims to help IBC developers/ordinary users learn to use exchaincli for IBC related operations in a quick and efficient way.

## Preconditions

&nbsp;&nbsp;&nbsp;&nbsp;IBC is a cross-chain operation, which means that if you want to test locally, you need to have cli binaries of other chains (such as gaia) and a relayer.

- [Example of relayer in Go version](https://github.com/cosmos/relayer)
- [OKTC binary](https://github.com/okx/exchain/releases/tag/v1.6.4) (suggest using the newest version, size of version needs to be bigger than v1.6.1)
- [Gaia binary](https://github.com/cosmos/gaia)

## How to transfer tokens across chains for ordinary users

### OKTC provides a [visual operating interface](https://www.okx.com/oktc/ibc)

The process of a token transfer is broken down into 6 steps, along with screenshots of the operating interface below:

1. Select a chain to transfer from, e.g., OKTC

1. Select a chain to transfer to, e.g., CosmosHub

1. Enter the receiving address of the receiving chain

1. Enter transfer amount

1. Click the transfer button

1. Wait for relayer to relay data (approx. 1-2 mins)

![img](../../img/ibc-cli-01.png)

### OKTC also provides transfers in the form of manually sending commands through the command line

Example of cross-chain transfer from OKTC to Cosmos

- Get bidirectional channelId (OKTC:channel-0,Cosmos:channel-361)
- Select the corresponding transfer recipient and wait for the relay

#### Query to get channel information


&nbsp;&nbsp;&nbsp;&nbsp; Channel information can be otained from the following [link](https://forum.okt.club/d/301-ibc-oktc-document)

#### Sending cross-chain transfer information

```Bash
// IBC fungible token transfer transaction
// e.g. Send token from OKTC to Cosmos,
//      <srcChannel>=channel-0,
//      <receiveAddress>=cosmos1qucqm3swgur9jp49xtedq8ej2rm02jd64kh30c 
//      <amount>=10000wei <fees>=1000000000000000wei,
//      <nodeUri>=https://exchainmrpc.okex.org/
//      <chainId>=exchain-66
//      The first transfer means it is a transfer action,the seconds means
the IBC port is transfer
 exchaincli tx ibc-transfer transfer transfer <srcChannel> <receiveAddress> <amount> --fees <fee>  -b block -y --node <nodeUri> --chain-id <chainId>  
```

#### Waiting for relayer

&nbsp;&nbsp;&nbsp;&nbsp; For an IBC cross-chain connection that is already online (such as OKTC<=>Cosmos), it usually takes about 1-2 minutes for the corresponding transfer token to be relayed to the opposite chain. At this time, the blockchain explorer provided by the corresponding chain can be used to view address balance information, or view the balance information through the binary script of the corresponding chain.

## How IBC developers can establish cross-chain connections with OKTC

Here is an example of Gaia private chain <=> OKTC mainnet and Go version of relayer

1. Initiate relayer configuration

1. Relayer adds OKTC mainnet related configurations

1. Relayer adds private chain information

1. Relayer binds an account for OKTC, and also binds an account for Gaia private chain that is used for sending gas payment transactions

1. Create an IBC chain pair (Path)

1. IBC chain pair (Path) create client

1. IBC chain pair (Path) create connection

1. IBC chain pair (Path) create channel

1. For this IBC chain pair (Path), initiate backend process, so that the packet can be automatically relayed

### Initialize relayer configuration

```Plaintext
// Initialize the Relayer configuration
rly config init 
```

### Relayer adds OKTC mainnet related configurations

```Plaintext
// Pull chain configuration from open source repository(https://github.com/cosmos/chain-registry)
// eg: <chainName>=okexchain（oktc）
rly chains add <chainName>
```

### Relayer adds private chain information

Private chain information cannot be pulled like with the previously mentioned configuration command, hence needs to be manually configurated

```Bash
// example:
{
  "type": "cosmos", 
  "value": {
    "key": "testkey", // alias of the relayer account 
    "chain-id": "ibc-0", 
    "rpc-addr": "http://localhost:6657", 
    "grpc-addr": "",
    "account-prefix": "cosmos", 
    "keyring-backend": "test", 
    "gas-adjustment": 1.5,
    "gas-prices": "0.025uatom",
    "debug": true,  
    "timeout": "10s",
    "output-format": "json",
    "sign-mode": "direct"
  }
}
// add chain to the relayer configuration ,--file points to the chain configuration file path
// eg: <jsonFile>=./ibc0.json ,<chainAlias>=ibc0
rly chains add --file <jsonFile> <chainAlias>
```

### Relayer binding account

A gas fee is required everytime the relayer relays information and needs to bind the corresponding account.

```Bash
// initialize the account,coin-type default value is 118
// eg: <chainAlias>=exchain-66,<chainAccountKey>=testkey,<coinType>=60
rly keys restore <chainAlias> <chainAccountKey>  "mnemonic" --coin-type <coinType>
```

### Create an IBC chain pair (Path)

The two chains establishing an IBC connection with each other can be considered to be a chain pair, which is referred to as Path in IBC. Path contains the source chain and target chain information, and the configuration information is stored in the form of files.

```Bash
// path configuration example:
{
  "src": {
    "chain-id": "exchain-66",
    "port-id": "transfer",
    "order": "unordered",
    "version": "ics20-1"
  },
  "dst": {
    "chain-id": "ibc-0",
    "port-id": "transfer",
    "order": "unordered",
    "version": "ics20-1"
  }
}
```

When the configuration file of the chain pair (Path) is configured, it can be added to the relayer configuration

```Bash
// add the source chain and destination chain to the relayer configurations
// --file points to the configuraiton file path created before
// eg: <srcChainAlias>=okexchain,<destChainAlias>=ibc0,<pathName>=oktc66_ibc0
        <pathJsonFile>=./oktc66_ibc0.json
rly paths add <srcChainAlias> <destChainAlias> <pathName> --file <pathJsonFile>
```

### IBC chain pair (Path) create client

```Bash
// send create client message to the source chain and destination chain 
// -d means it is debug mode 
// pathName means the path we created before
// eg: <pathName>=oktc66_ibc0
 rly tx clients <pathName> -d 
```

### IBC chain pair (Path) create connection

```Bash
// send create connection message to the source chain and destination chain 
// -d means it is debug mode 
// pathName means the path we created before
// eg: <pathName>=oktc66_ibc0
 rly tx connection <pathName> -d 
```

### IBC chain pair (Path) create channel

```Bash
// send create connection message to the source chain and destination chain 
// -d means it is debug mode 
// pathName means the path we created before
// eg: <pathName>=oktc66_ibc0
 rly tx channel <pathName> -d   
```

### With this IBC chain pair (Path), initiate backend process and it will automatically relay the data packet

This step shows that the private chain and OKTC mainnet already created an IBC cross-chain connection, initiated the backend process and assisted the packet relay.

```Bash
// start the relayer monitor ,relayer will listen the event from source chain
and dest chain so that it will dispatch the message automatically
 -d means it is debug mode 
// eg:<pathName>=oktc66_ibc0
rly start <pathName> -d
```

## General operating commands

`exchaincli` command line tools can query all relevant information from the blockchain, such as account balance, IBC client information, connection information and channel information, etc.

Note: the following can be used on any command to obtain more information: ` -h or --help`

## Query account information

```Shell
// return the balance of the account 
exchaincli query account <yourAddress>
```

### Query created client information

```Bash
// query for all client informations
 exchaincli query ibc client states 
```

### Query created connection information

```Bash
// query for all connection informations
exchaincli query ibc connection  connections
```

### Query created channel information

```Bash
// query for all channel informations
exchaincli query ibc channel channels 
```

### Query packet commits

```Bash
// query packet which is not dispathed yet
port means which logic services should handle with
channel is used for exchanging data
// eg: <port>=transfer ,<channel>=channel-0
exchaincli query ibc channel packet-commitments <port> <channel> 
```