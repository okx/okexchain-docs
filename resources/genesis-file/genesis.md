# Genesis file

This document explains how the genesis file of the OKTC mainnet is structured. 

Note that you can generate a default genesis file for your local testnet by running the following command:

```bash
exchaind init <moniker> --chain-id <chain-id>
```

The genesis file is stored in `~/.exchaind/config/genesis.toml`.




## What is a genesis file

A genesis file is a JSON file which defines the initial state of your blockchain. It can be seen as height `0` of your blockchain. The first block, at height `1`, will reference the genesis file as its parent.

The state defined in the genesis file contains all the necessary information, like initial token allocation, genesis time, default parameters, and more. Let us break down this information.

## Genesis time and chain_id

The `genesis_time` is defined at the top of the genesis file. It is a UTC timestamps which specifies when the blockchain is due to start. At this time, genesis validators are supposed to come online and start participating in the consensus process. The blockchain starts when more than 2/3rd of the genesis validators (weighted by voting power) are online.

```json
"genesis_time": "2019-03-13T17:00:00.000000000Z",
```

The `chain_id` is a unique identifier for your chain. It helps differentiate between different chains using the same version of the software.

```json
"chain_id": "exchain-66", // OKTC mainnet

```

## Consensus parameters

Next, the genesis file defines consensus parameters. Consensus parameters regroup all the parameters that are related to the consensus layer, which is `Tendermint` in the case of `oktc`. Let us look at these parameters:

* `block`
  - `max_bytes`: Maximum number of bytes per block.
  - `max_gas`: Gas limit per block. Each transaction included in the block will consume some gas. The total gas used by transactions included in a block cannot exceed this limit.
* `evidence`
  - `max_age`: An evidence is a proof that a validator signed two different blocks at the same height (and round). This is an explicitly malicious behaviour that is punished at the state-machine level. The max_age defines the maximum number of blocks after which an evidence is not valid anymore.
* `validator`
  - `pub_key_types`: The types of pubkey (`ed25519`, `secp256k1`, …) that are accepted for validators. Currently only `ed25519` is accepted.

```json
"consensus_params": {
    "block_size": {
      "max_bytes": "150000",
      "max_gas": "1500000"
    },
    "evidence": {
      "max_age": "1000000"
    },
    "validator": {
      "pub_key_types": [
        "ed25519"
      ]
    }
  },
```

## Application state

The application state defines the initial state of the state-machine.

### Genesis accounts

In this section, initial allocation of tokens is defined. It is possible to add accounts manually by directly editing the genesis file, but it is also possible to use the following command:

```bash
// Example: exchaind add-genesis-account ex1fh9tpkqka29n0mj307cu5cvp5ts0p4dl3mkv7r 10000000okt

exchaind add-genesis-account <account-address> <amount><denom>
```

This command creates an item in the `accounts` list, under the `app_state` section.

```json
"accounts": [
      {
        "address": "ex1fh9tpkqka29n0mj307cu5cvp5ts0p4dl3mkv7r",
        "coins": [
          {
            "denom": "okt",
            "amount": "10000000"
          }
        ],
        "sequence_number": "0",
        "account_number": "0",
        "original_vesting": [
          {
            "denom": "okt",
            "amount": "26306000000"
          }
        ],
        "delegated_free": null,
        "delegated_vesting": null,
        "start_time": "0",
        "end_time": "10000"
      }
]
```

Let us break down the parameters:
- `sequence_number`: This number is used to count the number of transactions sent by this account. It is incremented each time a transaction is included in a block, and used to prevent replay attacks. Initial value is `0`.
- `account_number`: Unique identifier for the account. It is generated the first time a transaction including this account is included in a block.
- `original_vesting`: Vesting is natively supported by `oktc`. You can define an amount of token owned by the account that needs to be vested for a period of time before it can be transferred. Vested tokens can be delegated. Default value is `null`.
- `delegated_free`: Amount of delegated tokens that can be transferred after they’ve been vested. Most of the time, will be `null` in genesis.
- `delegated_vesting`: Amount of delegated tokens that are still vesting. Most of the time, will be `null` in genesis.
- `start_time`: Block at which the vesting period starts. `0` most of the time in genesis.
- `end_time`: Block at which the vesting period ends. `0` if no vesting for this account.

### Bank

The `bank` module handles tokens. The only parameter that needs to be defined in this section is whether `transfers` are enabled at genesis or not.

```json
"bank": {
      "send_enabled": false
    }
```

### Staking

The `staking` module handles the bulk of the Proof-of-Stake logic of the state-machine. This section should look like the following:

```json
"staking": {
      "delegators": null,
      "exported": false,
      "last_total_power": "0",
      "last_validator_powers": null,
      "params": {
        "bond_denom": "okt",
        "epoch": 252,
        "max_bonded_validators": 21,
        "max_validators_to_vote": 30,
        "min_delegation": "0.00010000",
        "unbonding_time": "1209600000000000"
      },
      "proxy_delegator_keys": null,
      "unbonding_delegations": null,
      "validators": null,
      "votes": null
    }
```

Let us break down the parameters:
- `params`
  - `unbonding_time`: time in nanosecond it takes for tokens to complete unbonding.
  - `max_validators`: Maximum number of active validators.
  - `bond_denom`: Denomination of the staking token.
  - `min_delegation`: The minimum amount of token in an operation of delegating or unbonding.
  - `epoch`: The period to start the update of next validator set.
  - `max_validators_to_vote`: The maximum number of validators  that can be delegated by a delegator
- `last_total_power`: Total amount of staking power. Generally `0` in genesis (except if genesis was generated using a previous state).
- `last_validator_powers`: Power of each validator in last known state. Generally null in genesis (except if genesis was generated using a previous state).
- `validators`: List of last known validators. Generally null in genesis (except if genesis was generated using a previous state).
- `unbonding_delegations`: List of last known unbonding delegations. Generally `null` in genesis (except if genesis was generated using a previous state).
- `exported`: Whether this genesis was generated using the export of a previous state.
- `delegators`: The info of the delegator who has staked any token.
- `proxy_delegator_keys`: The keys records the relationship between proxies and delegators.
- `votes`: The details of delegator’s votes related to validators.

### Mint

The `mint` module governs the logic of inflating the supply of token. The `mint` section in the genesis file looks like the following:

```json
"mint": {
      "minter_custom": {
        "annual_provisions": "0.00000000",
        "minted_per_block": [
          {
            "amount": "0.00000000",
            "denom": "okt"
          }
        ],
        "next_block_to_update": "0"
      },
      "params": {
        "blocks_per_year": "10519200",
        "inflation_rate": "0.01000000",
        "mint_denom": "okt"
      }
    }
```

Let us break down the parameters:

- `minter_custom`
  - `minted_per_block`: The fixed amount of tokens which was minted in each block.
  - `annual_provisions`: Calculated each block. Initialize at `0.000000000000000000`.
  - `next_block_to_update`: The block height interval to update the setting to the minter.
- `params`
  - `mint_denom`: Denom of the staking token that is inflated.
  - `inflation_rate`: Yearly inflation rate.
  - `blocks_per_year`: Estimation of the amount of blocks per year. Used to compute the block reward coming from inflated staking token (called block provisions).

### Distribution

The `distribution` module handles the logic of distribution block provisions and fees to validators and delegators. The `distribution` section in the genesis file looks like the following:

```json
    "distribution": {
          "community_tax": "0.02000000",
          "delegator_withdraw_infos": [],
          "fee_pool": {
            "community_pool": []
          },
          "previous_proposer": "",
          "validator_accumulated_commissions": [],
          "withdraw_addr_enabled": true
        }
```

Let us break down the parameters:

- `fee_pool`
  - `community_pool`: The community pool is a pool of tokens that can be used to pay for bounties. It is allocated via governance proposals. Generally `null` in genesis.
- `community_tax`: The tax percentage on fees and block rewards that goes to the community pool.
- `withdraw_addr_enabled`: If `true`, delegators can set a different address to withdraw their rewards. Set to `false` if you want to disable transfers at genesis, as it can be used as a way to get around the restriction.
- `delegator_withdraw_infos`: List of delegators withdraw address. Generally `null` if genesis was not exported from previous state.
- `previous_proposer`: Proposer of the previous block. Set to `""` if genesis was not exported from previous state.
- `validator_accumulated_commission`: Outstanding (un-withdrawn) commission of validators. Set to `null` if genesis was not exported from previous state.

### Governance

The `gov` module handles all governance-related transactions. The initial state of the `gov` section looks like the following:

```json
    "gov": {
      "deposit_params": {
        "max_deposit_period": "86400000000000",
        "min_deposit": [
          {
            "amount": "100.00000000",
            "denom": "okt"
          }
        ]
      },
      "deposits": null,
      "proposals": [],
      "starting_proposal_id": "1",
      "tally_params": {
        "quorum": "0.33400000",
        "threshold": "0.50000000",
        "veto": "0.33400000",
        "yes_in_vote_period": "0.66700000"
      },
      "votes": null,
      "voting_params": {
        "voting_period": "259200000000000"
      },
      "waiting_proposals": {}
    }
```

Let us break down the parameters:

- `starting_proposal_id`: This parameter defines the ID of the first proposal. Each proposal is identified by a unique ID.
- `deposits`: List of deposits for each proposal ID. Set to `null` if genesis was not exported from previous state.
- `votes`: List of votes for each proposal ID. Set to `null` if genesis was not exported from previous state.
- `proposals`: List of proposals for each proposal ID: Set to `null` if genesis was not exported from previous state.
- `deposit_params`
  - `min_deposit`: The minimum deposit required for the proposal to enter `Voting Period`. If multiple denoms are provided, the `OR` operator applies.
  - `max_deposit_period`: The maximum period (in **nanoseconds**) after which it is not possible to deposit on the proposal anymore.
- `voting_params`
  - `voting_period`: Length of the voting period in **nanoseconds**.
- `tally_params`
  - `quorum`: Minimum percentage of bonded staking tokens that needs to vote for the result to be valid.
  - `threshold`: Minimum percentage of votes that need to be `YES` for the result to be valid.
  - `veto`: Maximum percentage `NO_WITH_VETO` votes for the result to be valid.
  - `governance_penalty`: Penalty for validators that do not vote on a given proposal.
- `waiting_proposals`: The set of the proposals that are waiting to be confirmed. 

### Slashing

The `slashing` module handles the logic to slash delegators if their validator misbehaves. The `slashing` section in genesis looks as follows:

```json
"slashing": {
      "missed_blocks": {},
      "params": {
        "downtime_jail_duration": "600000000000",
        "max_evidence_age": "120000000000",
        "min_signed_per_window": "0.05000000",
        "signed_blocks_window": "10000",
        "slash_fraction_double_sign": "0.00000000",
        "slash_fraction_downtime": "0.00000000"
      },
      "signing_infos": {}
    }
```

Let us break down the parameters:

- `params`
  - `max_evidence_age`: Maximum age of the evidence in **nanoseconds**.
  - `signed_blocks_window`: Moving window of blocks to figure out offline validators.
  - `min_signed_per_window`: Minimum percentage of `precommits`that must be present in the `block window` for the validator to be considered online.
  - `downtime_jail_duration`: Duration in **nanoseconds** for which a validator is jailed after they get slashed for downtime.
  - `slash_fraction_double_sign`: Percentage of delegators bonded stake slashed when their validator double signs.
  - `slash_fraction_downtime`: Percentage of delegators bonded stake slashed when their validator is down.
- `signing_infos`: Various infos per validator needed by the `slashing` module. Set to `{}` if genesis was not exported from previous state.
- `missed_blocks`: Various infos related to missed blocks needed by the `slashing` module. Set to `{}` if genesis was not exported from previous state.

### Token

The `token` module handles the token economy on the chain. The `token` section in genesis looks as follows:

```json
"token": {
      "locked_assets": null,
      "locked_fees": null,
      "params": {
        "burn_fee": {
          "amount": "10.00000000",
          "denom": "okt"
        },
        "issue_fee": {
          "amount": "20000.00000000",
          "denom": "okt"
        },
        "mint_fee": {
          "amount": "2000.00000000",
          "denom": "okt"
        },
        "modify_fee": {
          "amount": "0.00000000",
          "denom": "okt"
        },
        "multi_send_fee": {
          "amount": "0.01000000",
          "denom": "okt"
        },
        "transfer_ownership_fee": {
          "amount": "10.00000000",
          "denom": "okt"
        }
      },
      "tokens": null
    },
```

Let us break down the parameters:

- `locked_assets`: The locked-asset info for the matching service in order module. If a kind of digital asset is placed on Dex, the corresponding amount of token will be locked in the system.
- `tokens`: The issued tokens info on the chain.
- `params`
  - `burn_fee`: The fixed fee to burn a specific amount of token.
  - `issue_fee`: The fixed fee to issue a kind of token.
  - `mint_fee`: The fixed fee to mint a specific amount of token.
  - `modify_fee`: The fixed fee to modify the registered info of a specific token.
  - `multi_send_fee`: The fixed fee related to an multi-send tx.
  - `transfer_ownership_fee`: The fixed fee to transfer the ownership of a specific token.
- `locked_fees`: ignored.


### Genesis transactions

By default, the genesis file does not contain any `gentxs`. A `gentx` is a transaction creating a validator in the genesis file. The chain will start as soon as more than 2/3rds of the validators (weighted by voting power) that are the recipient of a valid `gentx` come online after `genesis_time`.

A `gentx` can be added manually to the genesis file, or via the following command:

```bash
exchaind collect-gentxs
```

This command will add all the `gentxs` stored in `~/.exchaind/config/gentx` to the genesis file. In order to create a genesis transaction, click [here](/dev/core-concepts/validator/validators-guide-cli).
