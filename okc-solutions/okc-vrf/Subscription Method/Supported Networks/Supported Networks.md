
# Configuration

## Coordinator Parameters

These parameters are configured in the coordinator contract. You can view these values by running `getConfig` on the coordinator or by viewing the coordinator contracts in a blockchain explorer.

- `uint16 minimumRequestConfirmations`: The minimum number of confirmation blocks on VRF requests before oracles respond
- `uint32 maxGasLimit`: The maximum gas limit supported for a `fulfillRandomWords` callback.
- `uint32 gasAfterPaymentCalculation`: How much gas is used outside of the payment calculation. This covers the additional operations required to decrement the subscription balance and increment the balance for the oracle that handled the request.

## Fee Parameters

Fee parameters are configured in the coordinator contract and specify the premium you pay per request in addition to the gas cost for the transaction. You can view them by running `getFeeConfig` on the coordinator. The `uint32 fulfillmentFlatFeeOKTPPMTier1` parameter defines the fees per request specified in millionths of OKT. The details for calculating the total transaction cost can be found [here](../SubScription.md#request-and-receive-data).

## Configurations

VRF  coordinators for subscription funding are available on several networks. To see a list of coordinators for direct funding, see the [Direct Funding Configurations](../../Direct Funding Method/Supproted Networks/Supproted Networks.md#supported-networks) page.

### OKT Mainnet

| Item                  | Value                                                        |
| :-------------------- | :----------------------------------------------------------- |
| VRF Coordinator       | 0xCC5169D5484eEc4Bf3a0caF388773aC4c3e1eD7a                   |
| 10 gwei Key Hash      | 0xafbffab6e68cb6699436d34fb0351f36ee1188d933b35992889561f58e5cb2c0 |
| 20 gwei Key Hash      | 0x042158abfa1748a71524546afea06756f6e290f3a3122bacf2ca8f6d2f1e6955 |
| Premium               | 0                                                            |
| Max Gas Limit         | 5000000                                                      |
| Minimum Confirmations | 0                                                            |
| Maximum Confirmations | 200                                                          |
