# How to deploy OKTC Subgraph

## Develop Subgraph

### Code specification

Refer to: https://github.com/okx-subgraph/oktc-subgraph-example/blob/main/docs/Developing.md

### Version requirement

-  "@graphprotocol/graph-cli": "^0.20.1"
- "@graphprotocol/graph-ts": "^0.20.1"
- "npm": "^7.20.5"

### Block height requirement

- The query block height can't be lower than 13,400,000
- Sample：https://github.com/okx-subgraph/oktc-subgraph-example/

## Upload Subgraph code to Github

Special notes

- If the code repository is a private repository, you need to add your OKC Github account subgraph@okx.com. (This step isn't required for public code repositories)
- Before uploading the subgraph code, please make sure it's been compiled

## Deploy the Subgraph on the Hosted Service

OKC will help you with the deployment

## With the Subgraph deployed, you can query the Graph

After the subgraph is deployed, it takes some time to synchronize the block height before it can be queried.
