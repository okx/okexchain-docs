# Overview 
WebAssembly (abbreviated Wasm) is a binary instruction format for a stack-based virtual machine. Wasm is designed as a portable compilation target for programming languages, enabling deployment on the web for client and server applications or working as a virtual machine on blockchain.

Wasm of OKTC is developed based on [CosmWasm](https://github.com/CosmWasm/cosmwasm). CosmWasm is a smart contracting platform built for the Cosmos ecosystem. Simply put, it’s the Cosmos way of using WebAssembly hence the name.

CosmWasm is written as a module that can be plugged into the Cosmos SDK. This means that anyone currently building a blockchain using the Cosmos SDK can quickly and easily add CosmWasm smart contracting support to their chain, without adjusting existing logic.

[Rust](https://www.rust-lang.org/) is currently the most used programming language for CosmWasm. It is possible to have different programming languages like [AssemblyScript](https://www.assemblyscript.org/) in the future. Other programming languages are not recommended for now and will not be introduced.

- [Architecture](#Architecture) explains much of the high-level design and architecture of CosmWasm. It is crucial to understand the mental model and capabilities of the system before designing products using it. However, if you prefer to learn by coding then you can skip this section and visit as you need it.
- [Wasm Smart Contract](/dev/building-modules/wasm-module/wasm-contract.html) introduces what wasm contract is and how to develop wasm contract.

## Architecture

### Wasm in OKTC
   This architecture diagram mainly introduces the position of wasm in the entire OKTC system. The bottom layer is Tendermint Core, on top of that is Cosmo’s native module layer, then OKTC’s custom module layer, and the top layer is the API interface layer. Wasm is a module in OKTC’s custom module layer.
   ![](../../img/wasm-architecture.png)

### Wasm system ecosystem
   CosmoWasm is a Cosmos SDK module plugin, this project is responsible for helping Cosmos SDK support wasm virtual machine. CosmWasm is implemented in Rust and because the Go code runtime causes the contract to enlarge, the contract is mainly written with Rust then compiled to wasm bytecode. In order to facilitate the interaction between the contract and virtual machine, the virtual machine also uses Rust as a fundamental database. In its entirety, CosmWasm’s ecology is mainly divided into the following 3 parts:
- Contract standard library (similar to Ethereum’s precompiled contract)
   + [cosmwasm-std](https://github.com/CosmWasm/cosmwasm/tree/main/packages/std): This fundamental contract library contains fundamental category definitions, defined with Cosmos SDK’s fundamental module interaction information, IBC interface definitions, fundamental storage definitions, etc.
   + [cosmwasm-sechma](https://github.com/CosmWasm/cosmwasm/tree/main/packages/schema): A dev-dependency for CosmWasm contracts to generate JSON Schema files.
   + [cw-storage-plus](https://github.com/CosmWasm/cw-storage-plus): This optional addition to cosmwasm-std includes convenience helpers for interacting with storage.
- Contract tools, includes contract template, contract sample and contract compilation optimization tools.
   + [cosmwasm-template](https://github.com/CosmWasm/cosmwasm-template): a tool used for generating wasm contract templates, can generate contract templates, unit testing templates, ABI interface templates, etc., all with one click.
   + [rust-optimizer](https://github.com/cosmwasm/rust-optimizer): a docker image, used for compiling and optimizing Rust contracts, and also outputting wasm bytecode. The size of the contract bytecode compiled in the image is smaller, and at the same time, it ensures that different developers have the same compilation environment for the same contract, thereby ensuring that the generated wasm contracts have the same checksum (for on-chain and contract interaction).
- Contract virtual machine
   + [cosmwasm-vm](https://github.com/CosmWasm/cosmwasm/tree/main/packages/vm): Rust is based on wasmer engine virtual machine, used for fulfilling the contract execution needs of the host environment, calculating gas consumption; it is the core module for executing wasm contracts.

The relationship of different parts and the internal framework of CosmWasm is as shown in the diagram below:
![](../../img/wasm-module-architecture.png)
### More information  
For more information, please refer to [architecture](https://github.com/CosmWasm/docs/tree/archive/docs/03-architecture).
