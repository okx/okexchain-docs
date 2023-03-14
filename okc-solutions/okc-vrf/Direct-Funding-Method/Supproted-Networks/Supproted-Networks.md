# Supported Networks

## Wrapper Parameters

These parameters are configured in the VRF  Wrapper contract. You can view these values by running `getConfig` and call other view function on the VRF  Wrapper or by viewing the VRF  Wrapper contract in a blockchain explorer.

- `uint32 wrapperGasOverhead`: The gas overhead of the VRF  Wrapper’s `fulfillRandomWords` function.
- `uint32 coordinatorGasOverhead`: The gas overhead of the coordinator’s `fulfillRandomWords` function.
- `uint8 maxNumWords`: Maximum number of words that can be requested in a single wrapped VRF request.
- `uint32 wrapperGasOverhead`: The gas overhead of the VRF  Wrapper’s `fulfillRandomWords` function.
- `uint32 s_minGasPrice`: The min gas price for consumer request randomwords transaction.

## Coordinator Parameters

Some parameters are important to know and are configured in the coordinator contract. You can view these values by running `getConfig` on the coordinator or by viewing the coordinator contract in a blockchain explorer.

- `uint16 minimumRequestConfirmations`: The minimum number of confirmation blocks on VRF requests before oracles respond
- `uint32 maxGasLimit`: The maximum gas limit supported for a `fulfillRandomWords` callback. Note that you still need to substract the `wrapperGasOverhead` for the accurate limit, as explained in [Direct funding limits](../Direct-Funding-Method/Direct-Funding-Method.md#limits).

## Fee Parameters

Fee parameters are configured in the VRF  Wrapper and the VRF  Coordinator contracts and specify the premium you pay per request in addition to the gas cost for the transaction. You can view them by running `getConfig` on the VRF  Wrapper:

- The `uint8 wrapperPremiumPercentage` parameter defines the premium ratio in percentage. For example, a value of *0* indicates no premium. A value of *15* indicates a *15%* premium.

The details for calculating the total transaction cost can be found [here](../Direct-Funding-Method/Direct-Funding-Method.md#request-and-receive-data).

## Configurations

VRF  coordinators for direct funding are available on several networks. 

### OKT Mainnet

| Item                       | Value                                      |
| :------------------------- | :----------------------------------------- |
| VRF Wrapper                | 0xB1A0323E202B27300f8530740A37162b2d7e62cB |
| VRF Coordinator            | 0xCC5169D5484eEc4Bf3a0caF388773aC4c3e1eD7a |
| Wrapper Premium Percentage | 0                                          |
| Coordinator Flat Fee       | 0                                          |
| Maximum Confirmations      | 200                                        |
| Maximum Random Values      | 10                                         |
| Wrapper Gas overhead       | 60000                                      |
| Coordinator Gas Overhead   | 60000                                      |

