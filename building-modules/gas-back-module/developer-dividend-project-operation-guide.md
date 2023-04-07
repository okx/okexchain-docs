# Developer Dividend Project Operation Guide

This article introduces how to participate in the contract dividend distribution project on OKTC.

## How do contract developers participate in Gas Back?

*Note: the following operations all require OKTC to updated to* *[v1.6.5.1](https://github.com/okx/exchain/tree/v1.6.5.1)* *or newer.*

### Register for contract dividend

**To participate in the contract handling fee distribution project, firstly you will need to provide the following information for registration:**

- Contract address: after registering, call this contract (initiate transaction) to proportionally distribute the handling fee dividend to the designated recipient.

- Deployer address: contract deployer. The deployer has to be this registered contract's initiator (deployer address: that is, the currently connected wallet address).

- Withdrawer address: address of the recipient, handling fee dividend is transferred to this account; if this is not set up, the payment will directly go to the deployer's address.

- Nonce: nonce value of the deploying contract transaction.`Nonce`and`deployer`can accurately deduce and judge the accuracy of`contract`. The input format supports Arabic numerals, or a string of Arabic numerals separated by English commas.（i.e.,`3or100,3,1,9`）.

**Nonce explanation：**

> If User1 deploys Contract1 when Nonce=5, the Nonce value will be 5 when registering Contract1;
>
> If User2 deploys Contract2 when Nonce=6, Contract2 deploys Contract3 when Nonce=1, Contract3 deploys Contract4 when Nonce=0, then the Nonce value will be 6,1,0 when registering Contract4;

**CLI**

- `contract`: contract address. After registering, call this contract (initiate transaction) to proportionally distribute the handling fee dividend to the designated recipient.

- `deployer`: contract deployer. The deployer has to be this registered contract's initiator (for the currently connected wallet address).

- `nonces`: nonce value of the deploying contract transaction.`Nonce`and`deployer`can accurately deduce and judge the accuracy of`contract`. The input format supports Arabic numerals, or a string of Arabic numerals separated by English commas. (i.e.,`3，100,3,1,9`).

- `withdraw`: recipient's address. The handling fee dividend goes into this account; if this is not set up, the dividend will automatically go into the deployer's address.

```Python
exchaincli tx feesplit register \
0x093d5dA874D2AA938f8AcCEC452994a90646F2fc \ //contract
5611 \                                       //nonces
0x61E1945CfbFb945f4156813410Ea6E34e39fbddB \ //withdraw
--from=UserA \                               //deployer
--chain-id=exchain-65 \
--node https://exchaintesttmrpc.okex.org
```

### Update contract dividend receiving address

After registering for Gas Back, you can modify your receiving address by clicking the Edit button shown in the screenshot below.

**CLI**

- `contract`: contract address. After registering, call this contract (initiate transaction) to proportionally distribute the handling fee dividend to the designated recipient.

- `withdraw`: recipient's address. Handling fee dividend goes into this account; if it is not set up,the payment will automatically be sent to the deployer's address.

- `deployer`: contract deployer. The deployer has to be this registered contract's initiator (for currently connected wallet address).

```Python
exchaincli tx feesplit update \
0x093d5dA874D2AA938f8AcCEC452994a90646F2fc \ //contract
ex12k29craqwutesrtmwe4aacz0lpxfzqagwyde7v \  //withdraw
--from=UserA \                               //deployer
--chain-id=exchain-65 \
--node https://exchaintesttmrpc.okex.org
```

### Delete contract dividend

After registering for Gas Back, you can opt to stop participating in the handling fee dividend distribution project by clicking the Delete button shown in the screenshot below. After deleting, the contract will stop distributing dividends for upcoming transactions.

**CLI**

- `contract`: contract address. After registering, call this contract (initiate transaction) to proportionally distribute the handling fee dividend to the designated recipient.

- `deployer`: contract deployer. The deployer has to be this registered contract's initiator (for the currently connected wallet address).

```Python
exchaincli tx feesplit cancel \
0x093d5dA874D2AA938f8AcCEC452994a90646F2fc \ //contract
--from=UserA \                               //deployer
--chain-id=exchain-65 \
--node https://exchaintesttmrpc.okex.org
```

## Query Gas Back information

#### Query all Gas Back contracts

```Python
exchaincli query feesplit contracts
```

#### Query Gas Back information according to contract

- **CLI**

```Python
exchaincli query feesplit contract 0x95d85EC4003A349c05107A0362e846Ca157194A0
```

- **Rest API**

Testnet as example

```Python
https://exchaintestrpc.okex.org/okexchain-test/v1/feesplit/contract/0x95d85EC4003A349c05107A0362e846Ca157194A0
```

#### Query registered contracts according to deployer

- **CLI**

```Python
exchaincli query feesplit deployer-contracts 0x61E1945CfbFb945f4156813410Ea6E34e39fbddB
```

- **Rest API**

Testnet as example

```Python
https://exchaintestrpc.okex.org/okexchain-test/v1/feesplit/deployer/ex1v8segh8mlw297s2ksy6pp6nwxn3el0wmkuqsx2?page=1&limit=2
```

- `page` page number, defaulted at 1

- `limit` result limit per page, defaulted at 100

#### Query registered contracts according to withdraw

- **CLI**

```Python
exchaincli query feesplit withdrawer-contracts 0xfB4d72C1e96A2eF456C2cEDD2b10ecb20c52F2B2
```

- **Rest API**

Testnet as example

```Python
https://exchaintestrpc.okex.org/okexchain-test/v1/feesplit/withdrawer/ex1v8segh8mlw297s2ksy6pp6nwxn3el0wmkuqsx2?page=1&limit=2
```

- `page` page number, defaulted at 1

- `limit` result limit per page, defaulted at 100

## Restrictions on participating in the Gas Back contract dividend project

Only transactions in pure EVM format are supported, that is, transactions in which `To` is the contract address. Contract calls triggered by the Cosmos exchange, such as IBC, ERC20 format contracts, cannot participate in the dividend project.

The project supports contract address derivation in EVM `CREATE` mode, but does not support contract address deriving in `CREATE2` mode.

The project supports deriving smart contract addresses from the deployer's address, and the `nonces` value input cannot exceed 20 digits.