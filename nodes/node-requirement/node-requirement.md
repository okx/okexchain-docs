# Node Requirement
## Minimum Hardware Configurations
There are the minimum hardware configurations required to setup a Validator Node, Full Node and Archinve Node.

| | Validator Node | Full Node | Archive Node
| :---- | :------------ | :------------ | :------------ |
| CPU | 3.5 GHz, 16-Core |3.0 GHz or up, 16-Core | 3.0 GHz or up, 16-Core |
| System | x86_64 | x86_64 | x86_64 |
| RAM | 64G | 64G | 64G |
| Storage | 1T SSD | 1T SSD | 5T SSD (Expandable) |
| Bandwidth | 100M | 100M | 100M |
| Suggestions | AWS m6i.4xlarge, 16Core, 64G, 3.5GHz | AWS m6i.4xlarge | AWS r6i.4xlarge |

>💡 The minimum storage requirements will change over time as the network grows. It is recommended to use more than the minimum requirements to run a robust full node

# Recommendations on Running Nodes
## Background
OEC nodes use level db to store block data and state data. Frequently read disks will require a higher requirement for disk performance.

## Problems
Using the ordinary cloud disk of Alibaba Cloud will cause the node to lag behind in synchronizing blocks.

## Solutions
Alibaba Cloud offers 4 types of Cloud Disks: Standard SSDs, Ultra disks, ESSDs, ESSD AutoPL disks. 

Recommendation: Usd Standard SSD for both Alibaba Cloud and AWS machines.

Reference: [Alibaba Cloud Disks Categories](https://www.alibabacloud.com/help/en/elastic-compute-service/latest/block-storage-overview-disks)
