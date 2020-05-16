.. raw:: html

   <!---
   order: 1
   --->

Basic concepts
==============

types of OKChain nodes
----------------------

full node
~~~~~~~~~

A full node is a program that verifies blockchain transactions and
blocks. Unlike lightweight nodes that only process block headers and a
small number of transactions, it requires more resources to run full
nodes, which is a necessary step to become a proposer. In addition, full
nodes can also be used to provide stable and low latency blockchain APIs
for applications.

validator
~~~~~~~~~

The role of a validator is to exercise block generation rights and enjoy
on-chain governance rights. In a voting session, 21 nodes that have
obtained the highest numbers of votes from okt voters are elected as
super nodes in the next cycle.

types of OKChain users
----------------------

normal user
~~~~~~~~~~~

A normal user is an OKT holder.

delegator
~~~~~~~~~

OKChain relies on a group of proposers to maintain network security. The
role of a validation node is to run a full node and participate in
consensus through broadcast voting (including ciphertext signed by the
sender’s private key). Validation nodes are able to keep track of
on-chain data, place new blocks on the blockchain and earn yields to
incentivize their operation. Validation nodes can only be elected after
successfully linking to OKChain’s network and pledging 10w OKT.

proposer
~~~~~~~~

A proposer packs transactions and notifies other super nodes of
verification.

candidate proposers
~~~~~~~~~~~~~~~~~~~

To be added.

duties of proposers
-------------------

A proposer has two main duties:

-  Able to continuously run the correct version of the software:
    Proposers need to ensure that their servers are always online
   and their private keys are not compromised.
-  Actively participate in governance: Proposers are required
   to vote on each proposal.

In addition, proposers will be active members of the community. They
should always be in sync with the current state of the ecosystem to
easily adapt to any changes.
