# Introduction to OKTC VRF

OKTC VRF (Verifiable Random Function) is a provably fair and verifiable random number generator (RNG) that enables smart contracts to access random values without compromising security or usability. For each request, OKTC VRF generates one or more random values and cryptographic proof of how those values were determined. The proof is published and verified on-chain before any consuming applications can use it. This process ensures that results cannot be tampered with or manipulated by any single entity including oracle operators, miners, users, or smart contract developers.

Use OKTC VRF to build reliable smart contracts for any applications that rely on unpredictable outcomes:

- Building blockchain games and NFTs.
- Random assignment of duties and resources. For example, randomly assigning judges to cases.
- Choosing a representative sample for consensus mechanisms.

## Two methods to request randomness

OKTC VRF  offers two methods for requesting randomness:

- **Subscription**: Create a subscription account and fund its balance with OKT. Users can then connect multiple consuming contracts to the subscription account. When the consuming contracts request randomness, the transaction costs are calculated after the randomness requests are fulfilled and the subscription balance is deducted accordingly. This method allows you to fund requests for multiple consumer contracts from a single subscription.

- **Direct funding**: Consuming contracts directly pay with OKT when they request random values. You must directly fund your consumer contracts and ensure that there are enough OKT tokens to pay for randomness requests.

## Choosing the correct method

Depending on your use case, one method might be more suitable than another. Consider the following characteristics when you choose a method:

| [Subscription method](/dev/oktc-solutions/oktc-vrf/Subscription-Method/Subscription.html) | [Direct funding method](/dev/oktc-solutions/oktc-vrf/Direct-Funding-Method/Direct-Funding-Method.html) |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| Suitable for regular requests                                | Suitable for infrequent one-off requests                     |
| Supports multiple VRF consuming contracts connected to one subscription account | Each VRF consuming contract directly pays for its requests   |
| VRF costs are calculated after requests are fulfilled and then deducted from the subscription balance. Learn [how VRF costs are calculated for the subscription method](/dev/oktc-solutions/oktc-vrf/Subscription-Method/Subscription.html). | VRF costs are estimated and charged at request time, which may make it easier to transfer the cost of VRF to the end user. Learn [how VRF costs are calculated for the direct funding method](/dev/oktc-solutions/oktc-vrf/Direct-Funding-Method/Supported-Networks/Supported-Networks.html). |
| Reduced gas overhead and more control over the maximum gas price for requests | Higher gas overhead than the subscription method             |
| More random values returned per single request. See the maximum random values per request for the [Subscription supported networks](/dev/oktc-solutions/oktc-vrf/Subscription-Method/Supported-Networks/Supported-Networks.html). | Fewer random values returned per single request than the subscription method, due to higher overhead. See the maximum random values per request and gas overhead for the [Direct funding supported networks](/dev/oktc-solutions/oktc-vrf/Direct-Funding-Method/Supported-Networks/Supported-Networks.html). |
| You don’t have to estimate costs precisely for each request. Ensure that the subscription account has enough funds. | You must estimate transaction costs carefully for each request to ensure the consuming contract has enough funds to pay for the request. |
| Requires a subscription account                              | No subscription account required                             |
| VRF costs are billed to your subscription account. [Manage and monitor your balance](/dev/oktc-solutions/oktc-vrf/Subscription-Method/Subscription.html) | No refunds for overpayment after requests are completed      |


## What’s next

- [› Subscription Method](/dev/oktc-solutions/oktc-vrf/Subscription-Method/Subscription.html)
- [› Direct Funding Method](/dev/oktc-solutions/oktc-vrf/Direct-Funding-Method/Direct-Funding-Method.html)

  





