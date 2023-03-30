
# Introduction

![Welcome to the OKC](./img/okc2022poster.png)

## What is OKC？

### About OKX Chain

A Super Scalable, Compatible L1 Blockchain OKX Chain (OKC) is an EVM-compatible L1 built on Cosmos with a focus on true interoperability (IBC) and maximized performance. At high scalability, developers can build and scale with low gas fees. The OKX Chain ecosystem and infrastructure, including the all-in-one multi-chain Web3 interface, enables a seamless experience for both developers and users.

### Advantages of OKX Chain

- High Scalability & Maximized Performance: Based on enhanced Tendermint and Delegated Proof of Stake (DPoS) consensus that can support up to 5000 Transactions per Second (TPS), Web3 applications shall reach their full potential at extremely low cost.
- Enhanced Interoperability: OKX Chain supports Inter-Blockchain Communication (IBC)nprotocol that — together with the Tendermint consensus algorithm, featuring instant finality — can be used to realize value transmission between Cosmos ecosystem within seconds. Being fully EVM compatible, OKX Chain allows developers to build projects without any learning cost.
- Developer Friendly: OKX Chain is completely open-source. Anyone can read it, check the progress, comment on it, and help build the ecosystem. OKX Chain also provides native oracle protocol and industry-leader Chainlink for maximum flexibility to access price feeds.
- Secure: The OKX Chain team offers a reliable smart contract auditing service, making it a genuinely decentralized protocol that avoids the centralization risks of most blockchain networks today.

![OKC multichain framework](./img/okc2022ibc.png)

## The OKT

Do you have OKT tokens? With OKT, you have the unique ability to contribute to the security and governance of the OKC. Delegate your OKT to one or more of the 100 validators on the OKC blockchain to earn more OKT through Proof-of-Stake. You can also vote with your OKT to influence the future of the OKC through on-chain governance proposals.

Learn more about [being a delegator](./delegators/delegators-faq.html).

## OKC Explorer

The OKC block explorer allows you to search, view and analyze OKC data—like blocks, transactions, validators as well as other key information.

- [OKlink](https://www.oklink.com)

## OKC CLI

`exchaincli` is a command-line interface that lets you interact with the OKC. `exchaincli` is the only tool that supports 100% of the OKC features, including accounts, transfers, delegation, and governance. Learn more about exchaincli with the [delegator's CLI guide](./delegators/delegators-guide-cli.html).

## Running a full-node on the OKC Testnet

In order to run a full-node on the OKC testnet, you must first [install `exchaind`](./getting-start/install-okc.html). Then, follow [the guide](./getting-start/install-okc.html).

If you would like to run a validator node, follow the [validator setup guide](./validators/validators-guide-cli.html).

## Join the Community

Have questions, comments, or ideas? Feel free to participate and to become part of the OKC community through one of the following channels.

- [OKC Validator Chat](https://t.me/joinchat/HuUCNktBLftzEY1fZPStkw)
- [OKC Developer Chat](https://t.me/okchaintech)

## Contributing to this documentation

As an open source project we appreciate contributions from our community. If you see any errors or ways to improve these docs please open an issue or Pull Request.

This documentation can be run locally using `vuepress`:

1. Fork this repo.
2. Create and navigate into a new directory in your local dev environment:  `mkdir okc-docs`
3. Install vuepress globally: `npm install -g vuepress`
4. Create a new vuepress project setup using node v16: `npm init && npm install vue-template-compiler`
5. Clone your fork into the directory and rename it `dev`: `gh repo clone your-github-name/okexchain-docs && mv okexchain-docs dev`
6. Create a .vuepress dir and config.js in the top level directory: `mkdir .vuepress && touch .vuepress/config.js`

The contents of `config.js` will be:

```javascript
const okcDocs = require('./okc-docs');

module.exports = {
  title: 'OKC Documentation',
  description: 'A documentation site for OKC',
  themeConfig: {
    sidebar: okcDocs
  }
};
```

You can then run the project on localhost:8080 with the `vuepress dev` command. The formatting and stylings will be slightly different in standard vuepress but the content will be identical.

## Version

The version of the program relating to this documentation is: 0.10
