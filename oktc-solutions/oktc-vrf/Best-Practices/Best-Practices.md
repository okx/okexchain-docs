# VRF best practices

## Getting a random number within a range

If you need to generate a random number within a given range, use [modulo](https://docs.soliditylang.org/en/v0.8.7/types#modulo) to define the limits of your range. Below you can see how to get a random number in a range from 1 to 50.

```solidity
function fulfillRandomWords(
  uint256 requestId,
  uint256[] memory randomWords
) internal override {
  // Assuming only one random word was requested.
  s_randomRange = (randomWords[0] % 50) + 1;
}
```

## Getting multiple random values

If you want to get multiple random values from a single VRF request, you can request this directly with the `numWords` argument:

- If you are using the VRF  subscription method, see the [Get a Random Number](/dev/oktc-solutions/oktc-vrf/Subscription-Method/SubScription) guide for an example where one request returns multiple random values.
- If you are using the VRF  direct funding method, see the [Get a Random Number](/dev/oktc-solutions/oktc-vrf/Direct-Funding-Method/Direct-Funding-Method) guide for an example where one request returns multiple random values.

## Processing simultaneous VRF requests

If you want to have multiple VRF requests processing simultaneously, create a mapping between `requestId` and the response. You might also create a mapping between the `requestId` and the address of the requester to track which address made each request.

```solidity
mapping(uint256 => uint256[]) public s_requestIdToRandomWords;
mapping(uint256 => address) public s_requestIdToAddress;
uint256 public s_requestId;

function requestRandomWords() external onlyOwner returns (uint256) {
  uint256 requestId = COORDINATOR.requestRandomWords(
    keyHash,
    s_subscriptionId,
    requestConfirmations,
    callbackGasLimit,
    numWords
  );
  s_requestIdToAddress[requestId] = msg.sender;

  // Store the latest requestId for this example.
  s_requestId = requestId;

  // Return the requestId to the requester.
  return requestId;
}

function fulfillRandomWords(
    uint256 requestId,
    uint256[] memory randomWords
  ) internal override {
  // You can return the value to the requester,
  // but this example simply stores it.
  s_requestIdToRandomWords[requestId] = randomWords;
}
```

You could also map the `requestId` to an index to keep track of the order in which a request was made.

```solidity
mapping(uint256 => uint256) s_requestIdToRequestIndex;
mapping(uint256 => uint256[]) public s_requestIndexToRandomWords;
uint256 public requestCounter;

function requestRandomWords() external onlyOwner {
  uint256 requestId = COORDINATOR.requestRandomWords(
    keyHash,
    s_subscriptionId,
    requestConfirmations,
    callbackGasLimit,
    numWords
  );
  s_requestIdToRequestIndex[requestId] = requestCounter;
  requestCounter += 1;
}

function fulfillRandomWords(
    uint256 requestId,
    uint256[] memory randomWords
  ) internal override {
  uint256 requestNumber = s_requestIdToRequestIndex[requestId];
  s_requestIndexToRandomWords[requestNumber] = randomWords;
}
```

## Processing VRF responses through different execution paths

If you want to process VRF responses depending on predetermined conditions, you can create an `enum`. When requesting for randomness, map each `requestId` to an enum. This way, you can handle different execution paths in `fulfillRandomWords`. See the following example:

```solidity
// SPDX-License-Identifier: MIT
// An example of a consumer contract that relies on a subscription for funding.
// It shows how to setup multiple execution paths for handling a response.
pragma solidity ^0.8.7;

import "../interfaces/VRFCoordinatorInterface.sol";
import "../VRFConsumerBaseV2.sol";

/**
 * THIS IS AN EXAMPLE CONTRACT THAT USES HARDCODED VALUES FOR CLARITY.
 * THIS IS AN EXAMPLE CONTRACT THAT USES UN-AUDITED CODE.
 * DO NOT USE THIS CODE IN PRODUCTION.
 */

contract VRFMultiplePaths is VRFConsumerBase {
    VRFCoordinatorInterface COORDINATOR;

    // Your subscription ID.
    uint64 s_subscriptionId;

    address vrfCoordinator = 0xCC5169D5484eEc4Bf3a0caF388773aC4c3e1eD7a;

    // The gas lane to use, which specifies the maximum gas price to bump to.
    
    bytes32 keyHash =
        0xafbffab6e68cb6699436d34fb0351f36ee1188d933b35992889561f58e5cb2c0;

    uint32 callbackGasLimit = 200000;

    // The default is 3, but you can set this higher.
    uint16 requestConfirmations = 3;

    // For this example, retrieve 1 random value in one request.
    // Cannot exceed VRFCoordinator.MAX_NUM_WORDS.
    uint32 numWords = 1;

    enum Variable {
        A,
        B,
        C
    }

    uint256 public variableA;
    uint256 public variableB;
    uint256 public variableC;

    mapping(uint256 => Variable) public requests;

    // events
    event FulfilledA(uint256 requestId, uint256 value);
    event FulfilledB(uint256 requestId, uint256 value);
    event FulfilledC(uint256 requestId, uint256 value);

    constructor(uint64 subscriptionId) VRFConsumerBase(vrfCoordinator) {
        COORDINATOR = VRFCoordinatorInterface(vrfCoordinator);
        s_subscriptionId = subscriptionId;
    }

    function updateVariable(uint256 input) public {
        uint256 requestId = COORDINATOR.requestRandomWords(
            keyHash,
            s_subscriptionId,
            requestConfirmations,
            callbackGasLimit,
            numWords
        );

        if (input % 2 == 0) {
            requests[requestId] = Variable.A;
        } else if (input % 3 == 0) {
            requests[requestId] = Variable.B;
        } else {
            requests[requestId] = Variable.C;
        }
    }

    function fulfillRandomWords(
        uint256 requestId,
        uint256[] memory randomWords
    ) internal override {
        Variable variable = requests[requestId];
        if (variable == Variable.A) {
            fulfillA(requestId, randomWords[0]);
        } else if (variable == Variable.B) {
            fulfillB(requestId, randomWords[0]);
        } else if (variable == Variable.C) {
            fulfillC(requestId, randomWords[0]);
        }
    }

    function fulfillA(uint256 requestId, uint256 randomWord) private {
        // execution path A
        variableA = randomWord;
        emit FulfilledA(requestId, randomWord);
    }

    function fulfillB(uint256 requestId, uint256 randomWord) private {
        // execution path B
        variableB = randomWord;
        emit FulfilledB(requestId, randomWord);
    }

    function fulfillC(uint256 requestId, uint256 randomWord) private {
        // execution path C
        variableC = randomWord;
        emit FulfilledC(requestId, randomWord);
    }
}
```
