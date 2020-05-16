# DEX Operators FAQ

### What is a DEX operator? Why do we need DEX operators?

The DEX operator is an entity that operates a decentralized exchange. His core assets are the digital asset trading pairs he operates, and his value is reflected through the operation of digital asset trading pairs. Generally speaking, the DEX operator only needs to provide  basic liquidity supply.


###  Why can't DEX operators be chain operators?
If there is only one operator on one chain, the ecosystem of the chain will be closed. Experiments with such models had already been conducted in 2013, but the development of the chains were restricted due to the limitation of the closed ecosystem. Learn more   [**Onchain matching fee design**]() . Therefore, if you want an open DEX ecosystem, the public chain operator cannot undertake all the work of DEX operations.

So here comes a new design challenge -- how to make all DEX operators use the blockchain resources fairly and openly.

For example, just like [Issuing digital assets](), the management of trading pairs such as  [digital asset trading pairs issuance]() is not required with a grant, because it is the core asset and basic need of DEX operators. At the same time, for the case that the system carries digital asset trading pairs with different values, but the system resources are insufficient, OpenDEX introduces the concept of   [**Digital Asset Matching Fund**]() to allocate system resources through bid ranking, which is similar to the locking mechanism.

### DEX operator costs
The value of DEX operators is reflected through the operation activities of digital asset trading pairs. In the blockchain system, application developers only need to bear the development cost and the deployment cost of the DAPP application and don't need to bear the server cost.  The design fee is essentially the revenue of the block -generating node for selling its computing and storage resources. Therefore, all the fees are distributed to the block-generating nodes as revenue. That's why it is mandatory to distribute the matching fee to the block-generating nodes in the traditional DEX scheme, as the block-generating nodes are the DEX operators. In OpenDEX, the DEX operators have been distinguished from the public chain operators, and the matching fee is returned to the DEX operators to solve the problem of low liquidity caused by the high cost of market-making. Read  [Fee design]() to learn more information.

### Product deposits

The core resource of a DEX operator is his own digital asset trading pairs. DEX operator who have digital assets trading pair deposit any number of OKT as Product deposits. The digital asset trading pair has the attribute of product deposits. In the process of matching, the high product deposits pair order will be preferentially matched.

