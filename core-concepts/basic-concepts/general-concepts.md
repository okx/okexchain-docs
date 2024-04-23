# Basic concepts
## Types of OKTC nodes
### Full node
A Full Node in Tendermint maintains up-to-date copy of the blockchain ledger’s state. It validates all transactions, executes smart contracts and is capable of delegating work for the Proof of Stake Consensus. Full nodes play a critical role in ensuring the security & resilience of the network by independently verifying blocks and transactions. They serve as data sources for other blockchain applications to use and operate in the OKTC ecosystem. In comparison with Light Nodes, Full Nodes carry more network and storage resources, but they improve decentralization and keep the validators honest.

Not your keys, not your coins. And if you’re not running a node yourself, you’re trusting someone else’s node.

### Validator
A Validator in Tendermint participates in the Proof-of-Stake consensus. Validators are full nodes who additionally choose to participate in consensus beyond being responsible for verifying and validating transactions. They propose new blocks, vote on proposed blocks, and provide cryptographic proofs used for slashing bad actors who attempt to break consensus or otherwise attack the network. Validators ensure the security and consistency of the blockchain by providing their computing power and staking a certain amount of cryptocurrency as collateral. In return for their services, validators are rewarded with transaction fees and newly minted tokens. Validators play a crucial role in maintaining the integrity and decentralization of Tendermint-based blockchain networks.

## Types of OKTC users
### Normal user
In Tendermint, a normal user is a participant in the blockchain network who sends and receives transactions. Normal users do not have any special roles like validators or proposers, but they play a vital role in the functioning of the blockchain network.
Normal users interact with the blockchain network through compatible wallet or client programs that support Tendermint’s consensus algorithm. They can create and sign transactions, which contain information such as the amount, receiver, and other relevant details. These transactions are then broadcast to the network and validated by the nodes.
The actions of normal users generate network demand, and the liquidity of the network’s native coin is increased. They also provide an indication of the network’s health and usage.
Tendermint depends on the participation of normal users to sustain the ecosystem’s growth and promote decentralization. Thus, developers seek to design user-friendly applications and make the user experience as smooth as possible to encourage their active participation.

### Delegator
OKTC relies on a group of proposers to maintain network security. The
role of a validation node is to run a full node and participate in
consensus through broadcast voting (including ciphertext signed by the
sender’s private key). Validation nodes are able to keep track of
on-chain data, place new blocks on the blockchain and earn yields to
incentivize their operation. Validation nodes can only be elected after
successfully connecting to the OKTC network.

### Proposer
Tendermint is a blockchain consensus algorithm, wherein the proposer is a role responsible for arbitrating, choosing the next leader node before each block ends.
In Tendermint, all nodes can become a proposer, but the blockchain’s designer may set rules and weights to determine which nodes are more likely to become the proposer.
Once a node is chosen to be the proposer, it is responsible for generating the next block. This includes determining the next set of nodes, selecting a valid set of transactions, calculating the block’s hash, and more.
Tendermint’s proposer mechanism aims to increase the security and efficiency of the blockchain. By rotating different proposers, the blockchain can avoid situations controlled by a single or few nodes, ensuring the entire blockchain system’s decentralization and security.

### Candidate proposers
In Tendermint, a candidate proposer is a node that is considered for the role of proposer in the next block generation round. The blockchain’s designer may set specific rules and weights to determine which node becomes a candidate proposer.
Candidate proposers are usually chosen based on their stake in the network or objectivity. The algorithm considers several factors, including past performance, to select the next candidate proposer. The goal is to ensure that the proposer role is rotated fairly among the network’s nodes.
Once a node becomes a candidate proposer, it starts crafting a block proposal, including selecting a set of valid transactions, adding them to the block, and broadcasting the proposal to the network. The other nodes in the network will validate the proposal, and once they reach consensus, the proposal will become the next block in the blockchain.
The candidate proposer mechanism is an essential part of Tendermint’s consensus algorithm. Its purpose is to ensure that no single node dominates the proposer role, promoting a more decentralized and secure blockchain network.

## Duties of proposers
A proposer has two main duties:

- Able to continuously run the correct version of the software: Proposers need to ensure that their servers are always online and their private keys are not compromised.
- Actively participate in the governance: Proposers are required to vote on each proposal.

In addition, proposers will be active members of the community. They
should always be in sync with the current state of the ecosystem to
easily adapt to any changes.
