# Overview
This document guides you on how to use the OKBC REST API. The following are the REST API methods for OKBC.

### Mainnet
https://okbrpc.okbchain.org/v1/auth/accounts/0x11941B5f5A1BD39bc3Da48f3815C877800bb73c1

### Testnet
https://okbtestrpc.okbchain.org/v1/auth/accounts/0x9536354AE32852A7E7C4BFe7415b104016d5Fb04
Rate Limit: 6 requests per second.
Query with the history info with `height` param, default 0 latest block, the node may delete historical information, suggested query the latest in 10 blocks.

### Query account info on block height 1111
https://okbrpc.okbchain.org/v1/auth/accounts/0x11941B5f5A1BD39bc3Da48f3815C877800bb73c1?height=1111

### Query delegator info on block height 1111
https://okbrpc.okbchain.org/v1/staking/delegators/0x11941B5f5A1BD39bc3Da48f3815C877800bb73c1?height=1111

### Query delegator info on latest block
https://okbrpc.okbchain.org/v1/staking/delegators/0x11941B5f5A1BD39bc3Da48f3815C877800bb73c1
https://okbrpc.okbchain.org/v1/staking/delegators/0x11941B5f5A1BD39bc3Da48f3815C877800bb73c1?height=0