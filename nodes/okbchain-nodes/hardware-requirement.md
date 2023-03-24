# Hardware Requirement
## Minimum Hardware Configuration
This is the minimum hardware configuration required to engage with OKB Chain as a RPC node:

| Parameters | RPC Node  |
| :------------ | :------------------------- |
| CPU | 3.5 GHz, 4-Core  |
| System  | x86_64  |
| RAM | 32G  |
| Storage | 200G SSD  |
| Bandwidth | 100M  |
| Suggestions |  AWS r6i.2xlarge, 4 Core, 32G, 3.5GHz |

>💡 The minimum storage requirements will change over time as the network grows. It is recommended to use more than the minimum requirements to run a robust full node

## Recommendations on Running Nodes
### Background
OOKBC nodes use level db to store block data and state data. Frequently read disks will require a higher requirement for disk performance.
### Problems
Using the ordinary cloud disk of Alibaba Cloud will cause the node to lag behind in synchronizing blocks.
### Solutions
Alibaba Cloud offers 4 types of Cloud Disks: Standard SSDs, Ultra disks, ESSDs, ESSD AutoPL disks.
Recommendation: Use Standard SSD for both Alibaba Cloud and AWS machines.
Reference: [Alibaba Cloud Disks Categories](https://www.alibabacloud.com/help/en/elastic-compute-service/latest/block-storage-overview-disks "Alibaba Cloud Disks Categories")