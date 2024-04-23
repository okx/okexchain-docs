# Get a random number

## Requirements

This guide assumes that you know how to create and deploy smart contracts on OKT  using the following tools:

- [The Remix IDE](https://remix.ethereum.org/)
- [MetaMask](https://metamask.io/)

## Create and fund a subscription

For this example, create a new subscription on the OKTC mainnet .

1. Open MetaMask and set it to use the OKTC mainnet . The [Subscription Manager](https://www.okx.com/oktc/oracle/vrf) detects your network based on the active network in MetaMask.

2. Check MetaMask to make sure you have OKT on OKTC mainnet.

3. Open the Subscription Manager at [vrf.chain.OKT](https://www.okx.com/oktc/oracle/vrf).

4. Click **Create Subscription** and follow the instructions to create a new subscription account. MetaMask opens and asks you to confirm payment to create the account on-chain. After you approve the transaction, the network confirms the creation of your subscription account on-chain.

5. After the subscription is created, click **Add funds** and follow the instructions to fund your subscription. For this example, a balance of 0.01 OKT is sufficient. MetaMask opens to confirm the OKT transfer to your subscription. After you approve the transaction, the network confirms the transfer of your OKT token to your subscription account.

6. After you add funds, click **Add consumer**. A page opens with your account details and subscription ID.

7. Record your subscription ID, which you need for your consuming contract. You will add the consuming contract to your subscription later.

You can always find your subscription IDs, balances, and consumers at [vrf.chain.OKT](https://www.okx.com/oktc/oracle/vrf).

Now that you have a funded subscription account and your subscription ID, [create and deploy a VRF  compatible contract](#create-and-deploy-a-vrf--compatible-contract).

## Create and deploy a VRF  compatible contract

For this example, use the [VRFConsumer.sol](https://github.com/okx/OKTC-VRF/blob/main/contracts/VRFConsumerExample.sol) sample contract. This contract imports the following dependencies:

- `VRFConsumerBase.sol`[(link)](https://github.com/okx/OKTC-VRF/blob/main/contracts/interfaces/VRFConsumerBaseV2.sol)
- `VRFCoordinatorInterface.sol`[(link)](https://github.com/okx/OKTC-VRF/blob/main/contracts/interfaces/VRFCoordinatorV2Interface.sol)

The contract also includes pre-configured values for the necessary request parameters such as `vrfCoordinator` address, gas lane `keyHash`, `callbackGasLimit`, `requestConfirmations` and number of random words `numWords`. You can change these parameters if you want to experiment on different , but for this example you only need to specify `subscriptionId` when you deploy the contract.

Build and deploy the contract on OKTC mainnet.

1. Open the [`VRFConsumer.sol` contract](https://github.com/okx/OKTC-VRF/blob/addSomeFeatureBeforeOnline/contracts/flat/VRFConsumerExampleFlat.sol) in Remix.

2. On the **Compile** tab in Remix, compile the `VRFConsumer.sol` contract.

3. Configure your deployment. On the **Deploy** tab in Remix, select the **Injected Provider** environment, select the `VRFConsumer` contract from the contract list, and specify your `subscriptionId` so the constructor can set it.

4. Fill the constructor arguments like below and Click the **‘Deploy’** button to deploy your contract on-chain. MetaMask opens and asks you to confirm the transaction.

   | Item                                  | Value                                                        |
   | :------------------------------------ | :----------------------------------------------------------- |
   | uint64 subscriptionId                 | the subId you just created                                   |
   | address VRFCoordinatorV2Interfaceaddr | 0xCC5169D5484eEc4Bf3a0caF388773aC4c3e1eD7a                   |
   | bytes32 _keyHash                      | 0xafbffab6e68cb6699436d34fb0351f36ee1188d933b35992889561f58e5cb2c0 |
   | uint32 _callbackGasLimit              | 200000                                                       |
   | uint32 _numWords                      | 2                                                            |
   | uint16 _requestConfirmations          | 0                                                            |

5. After you deploy your contract, copy the address from the **Deployed Contracts** list in Remix. Before you can request randomness from VRF , you must add this address as an approved consuming contract on your subscription account.

6. Open the Subscription Manager at [vrf.chain.OKT](https://www.okx.com/oktc/oracle/vrf) and click the ID of your new subscription under the **My Subscriptions** list. The subscription details page opens.

7. Under the **Consumers** section, click **Add consumer**.

8. Enter the address of your consuming contract that you just deployed and click **Add consumer**. MetaMask opens and asks you to confirm the transaction.

Your example contract is deployed and approved to use your subscription balance to pay for VRF requests. Next, [request random values](#request-random-values) from OKTC VRF.

## Request random values

The deployed contract requests random values from OKTC VRF, receives those values, builds a struct `RequestStatus` containing them and stores the struct in a mapping `s_requests`. Run the `requestRandomWords()` function on your contract to start the request.

1. Return to Remix and view your deployed contract functions in the **Deployed Contracts** list.

2. Click the `requestRandomWords()` function to send the request for random values to OKTC VRF. MetaMask opens and asks you to confirm the transaction. After you approve the transaction, OKTC VRF processes your request. OKTC VRF fulfills the request and returns the random values to your contract in a callback to the `fulfillRandomWords()` function. At this point, a new key `requestId` is added to the mapping `s_requests`.

   Depending on current  conditions, it might take a few minutes for the callback to return the requested random values to your contract. You can see a list of pending requests for your subscription ID at [vrf.chain.OKT](https://www.okx.com/oktc/oracle/vrf).

3. To fetch the request ID of your request, call `lastRequestId()`.

4. After the oracle returns the random values to your contract, the mapping `s_requests` is updated: The received random values are stored in `s_requests[_requestId].randomWords`.

5. Call `getRequestStatus()` specifying the `requestId` to display the random words.

You deployed a simple contract that can request and receive random values from OKTC VRF. 

## Analyzing the contract

In this example, your MetaMask wallet is the subscription owner and you created a consuming contract to use that subscription. The consuming contract uses static configuration parameters.

```solidity
// SPDX-License-Identifier: MIT
// An example of a consumer for customer sub.
pragma solidity ^0.8.7;

contract VRFConsumerExample is VRFConsumerBaseV2 {
    event RequestSent(uint256 requestId, uint32 numWords);
    event RequestFulfilled(uint256 requestId, uint256[] randomWords);

    struct RequestStatus {
        bool fulfilled; // whether the request has been successfully fulfilled
        bool exists; // whether a requestId exists
        uint256[] randomWords;
    }
    mapping(uint256 => RequestStatus) public s_requests; //requestId --> requestStatus
    VRFCoordinatorV2Interface public COORDINATOR;

    // Your subscription ID.
    uint64 public s_subscriptionId;

    // past requests Id.
    uint256[] public requestIds;
    uint256 public lastRequestId;
    uint256 public lastRequestBlockNumber;
    bytes32 public keyHash;
    uint32 public callbackGasLimit;
    uint16 public requestConfirmations;
    uint32 public numWords;

    constructor(
        uint64 subscriptionId,
        address VRFCoordinatorV2Interfaceaddr,
        bytes32 _keyHash,
        uint32 _callbackGasLimit,
        uint16 _requestConfirmations,
        uint32 _numWords
    ) {
        vrfCoordinator = VRFCoordinatorV2Interfaceaddr;
        COORDINATOR = VRFCoordinatorV2Interface(VRFCoordinatorV2Interfaceaddr);
        s_subscriptionId = subscriptionId;
        keyHash = _keyHash;
        callbackGasLimit = _callbackGasLimit;
        requestConfirmations = _requestConfirmations;
        numWords = _numWords;
    }

    function setConfig(
        uint64 subscriptionId,
        address VRFCoordinatorV2Interfaceaddr,
        bytes32 _keyHash,
        uint32 _callbackGasLimit,
        uint16 _requestConfirmations,
        uint32 _numWords
    ) external {
        vrfCoordinator = VRFCoordinatorV2Interfaceaddr;
        COORDINATOR = VRFCoordinatorV2Interface(VRFCoordinatorV2Interfaceaddr);
        s_subscriptionId = subscriptionId;
        keyHash = _keyHash;
        callbackGasLimit = _callbackGasLimit;
        requestConfirmations = _requestConfirmations;
        numWords = _numWords;
    }

    function requestRandomWords() external returns (uint256 requestId) {
        requestId = COORDINATOR.requestRandomWords(
            keyHash,
            s_subscriptionId,
            requestConfirmations,
            callbackGasLimit,
            numWords
        );
        s_requests[requestId] = RequestStatus({
            randomWords: new uint256[](0),
            exists: true,
            fulfilled: false
        });
        requestIds.push(requestId);
        lastRequestId = requestId;

        lastRequestBlockNumber = block.number;
        emit RequestSent(requestId, numWords);
        return requestId;
    }

    function fulfillRandomWords(
        uint256 _requestId,
        uint256[] memory _randomWords
    ) internal override {
        require(s_requests[_requestId].exists, "request not found");
        s_requests[_requestId].fulfilled = true;
        s_requests[_requestId].randomWords = _randomWords;
        emit RequestFulfilled(_requestId, _randomWords);
    }

    function getRequestStatus(uint256 _requestId)
        external
        view
        returns (bool fulfilled, uint256[] memory randomWords)
    {
        require(s_requests[_requestId].exists, "request not found");
        RequestStatus memory request = s_requests[_requestId];
        return (request.fulfilled, request.randomWords);
    }
}

```

The parameters define how your requests will be processed. You can find the values for your network in the [Configuration](#Configuration) page.

- `uint64 s_subscriptionId`: The subscription ID that this contract uses for funding requests.
- `bytes32 keyHash`: The gas lane key hash value, which is the maximum gas price you are willing to pay for a request in wei. It functions as an ID of the off-chain VRF job that runs in response to requests.
- `uint32 callbackGasLimit`: The limit for how much gas to use for the callback request to your contract’s `fulfillRandomWords()` function. It must be less than the `maxGasLimit` limit on the coordinator contract. Adjust this value for larger requests depending on how your `fulfillRandomWords()` function processes and stores the received random values. If your `callbackGasLimit` is not sufficient, the callback will fail and your subscription is still charged for the work done to generate your requested random values.
- `uint16 requestConfirmations`: How many confirmations the OKTC node should wait before responding. It must be greater than the `minimumRequestBlockConfirmations` limit on the coordinator contract.
- `uint32 numWords`: How many random values to request. If you can use several random values in a single callback, you can reduce the amount of gas that you spend per random value. The total cost of the callback request depends on how your `fulfillRandomWords()` function processes and stores the received random values, so adjust your `callbackGasLimit` accordingly.

The contract includes the following functions:

- `requestRandomWords()`: Takes your specified parameters and submits the request to the VRF coordinator contract.
- `fulfillRandomWords()`: Receives random values and stores them with your contract.
- `getRequestStatus()`: Retrive request details for a given `_requestId`.

## Clean up

After you are done with this contract and the subscription, you can retrieve the remaining OKT to use with other examples.

1. Open the Subscription Manager at [vrf.chain.OKT](https://www.okx.com/oktc/oracle/vrf) and click the ID of your new subscription under the **My Subscriptions** list. The subscription details page opens.
2. Under your subscription details, click **Cancel subscription**. MetaMask opens and asks you to confirm the transaction. After you approve the transaction, OKTC VRF closes your subscription account and sends the remaining OKT to your wallet.

## What’s next

- [› Subscription Manager UI](https://www.okx.com/oktc/oracle/vrf)
- [› Security Considerations](/dev/oktc-solutions/oktc-vrf/Security-Considerations/Security-Considerations)
- [› Best Practices](/dev/oktc-solutions/oktc-vrf/Best-Practices/Best-Practices)
- [› Supported Networks](/dev/oktc-solutions/oktc-vrf/Subscription-Method/Supported-Networks/Supported-Networks#Configuration)
