

# Get a Random Number

This guide explains how to get random values using a simple contract to request and receive random values from OKC VRF  without managing a subscription. 

## Requirements

This guide assumes that you know how to create and deploy smart contracts on OKC Maine  using the following tools:

- [The Remix IDE](https://remix.ethereum.org/)
- [MetaMask](https://metamask.io/)

## Create and deploy a VRF  compatible contract

For this example, use the [VRFDirectFundingConsumer.sol](https://github.com/okx/OKC-VRF/blob/main/contracts/VRFWrapperConsumerExample.sol) sample contract. This contract imports the following dependencies:

- `VRFWrapperConsumerBase.sol`[(link)](https://github.com/okx/OKC-VRF/blob/main/contracts/interfaces/VRFV2WrapperConsumerBase.sol)

The contract also includes pre-configured values for the necessary request parameters such as `callbackGasLimit`, `requestConfirmations`, the number of random words `numWords`, the VRF  Wrapper address `wrapperAddress`, and the OKT token address `OKTAddress`. You can change these parameters if you want to experiment on different .

Build and deploy the contract on OKC Mainnet.

1. Open the [`VRFDirectFundingConsumer.sol` contract](https://github.com/okx/OKC-VRF/blob/addSomeFeatureBeforeOnline/contracts/flat/VRFWrapperConsumerExampleFlat.sol) in Remix.

2. On the **Compile** tab in Remix, compile the `VRFDirectFundingConsumer` contract.

3. Configure your deployment. On the **Deploy** tab in Remix, select the **Injected Web3 Environment** and select the `VRFDirectFundingConsumer` contract from the contract list.

4. Fill the constructor arguments like below and Click the **Deploy** button to deploy your contract on-chain. MetaMask opens and asks you to confirm the transaction.

   | Item                  | Value                                      |
   | :-------------------- | :----------------------------------------- |
   | address _vrfV2Wrapper | 0xB1A0323E202B27300f8530740A37162b2d7e62cB |
   
5. After you deploy your contract, copy the address from the **Deployed Contracts** list in Remix. Before you can request randomness from VRF , you must fund your consuming contract with enough OKT tokens in order to request for randomness. Next, [fund your contract](#fund-your-contract).

## Fund Your Contract

Requests for randomness will fail unless your consuming contract has enough OKT. For this example, transfering 0.01 OKT to your consumer contracts should be sufficient.

## Request random values

The deployed contract requests random values from OKC VRF, receives those values, builds a struct `RequestStatus` containing them, and stores the struct in a mapping `s_requests`. Run the `requestRandomWords()` function on your contract to start the request.

1. Return to Remix and view your deployed contract functions in the **Deployed Contracts** list.

2. Click the `requestRandomWords()` function to send the request for random values to OKC VRF. MetaMask opens and asks you to confirm the transaction.

   After you approve the transaction, OKC VRF processes your request. OKC VRF fulfills the request and returns the random values to your contract in a callback to the `fulfillRandomWords()` function. At this point, a new key `requestId` is added to the mapping `s_requests`. Depending on current  conditions, it might take a few minutes for the callback to return the requested random values to your contract.

3. To fetch the request ID of your request, call `lastRequestId()`.

4. After the oracle returns the random values to your contract, the mapping `s_requests` is updated. The received random values are stored in `s_requests[_requestId].randomWords`.

5. Call `getRequestStatus()` and specify the `requestId` to display the random words.

## Analyzing the contract

In this example, the consuming contract uses static configuration parameters.

```solidity
// SPDX-License-Identifier: MIT
// An example of a consumer contract that directly pays for each request.
pragma solidity ^0.8.7;


contract VRFV2WrapperConsumerExample is VRFV2WrapperConsumerBase {
    event RequestFulfilled(
        uint256 requestId,
        uint256[] randomWords,
        uint256 payment
    );

    constructor(
        address _vrfV2Wrapper
    ) VRFV2WrapperConsumerBase(_vrfV2Wrapper) {}

    function fulfillRandomWords(
        uint256 _requestId,
        uint256[] memory _randomWords
    ) internal override {
        require(s_requests[_requestId].paid > 0, "request not found");

        s_requests[_requestId].fulfilled = true;
        s_requests[_requestId].randomWords = _randomWords;
        emit RequestFulfilled(
            _requestId,
            _randomWords,
            s_requests[_requestId].paid
        );
    }
}

```

The parameters define how your requests will be processed. You can find the values for your network in the [Supported networks](./Supproted Networks/Supproted Networks.md) page.

- `uint32 callbackGasLimit`: The limit for how much gas to use for the callback request to your contract’s `fulfillRandomWords()` function. It must be less than the `maxGasLimit` limit on the coordinator contract minus the `wrapperGasOverhead`. See the [VRF  Direct funding limits](./Direct Funding Method/Direct Funding Method.md#limits) for more details. Adjust this value for larger requests depending on how your `fulfillRandomWords()` function processes and stores the received random values. If your `callbackGasLimit` is not sufficient, the callback will fail and your consuming contract is still charged for the work done to generate your requested random values.
- `uint16 requestConfirmations`: How many confirmations the OKC node should wait before responding. The longer the node waits, the more secure the random value is. It must be greater than the `minimumRequestBlockConfirmations` limit on the coordinator contract.
- `uint32 numWords`: How many random values to request. If you can use several random values in a single callback, you can reduce the amount of gas that you spend per random value. The total cost of the callback request depends on how your `fulfillRandomWords()` function processes and stores the received random values, so adjust your `callbackGasLimit` accordingly.

The contract includes the following functions:

- `requestRandomWords()`: Takes your specified parameters and submits the request to the VRF  Wrapper contract.
- `fulfillRandomWords()`: Receives random values and stores them with your contract.
- `getRequestStatus()`: Retrive request details for a given `_requestId`.
- `withdrawOKT()`: At any time, the owner of the contract can withdraw outstanding OKT balance from it.

## Clean up

After you are done with this contract, you can retrieve the remaining  OKT to use with other examples.

1. Call `withdrawOKT()` function. MetaMask opens and asks you to confirm the transaction. After you approve the transaction, the remaining OKT will be transfered from your consuming contract to your wallet address.

## What's next

- [› Security Considerations](../../Security Considerations/Security Considerations.md)
- [› Best Practices](../../Best Practices/Best Practices.md)
- [› Supported Networks](../Supproted Networks/Supproted Networks.md)

