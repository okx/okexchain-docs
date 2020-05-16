<!--
order: 7
-->

# OKChain Archives

With each breaking upgrade of the OKChain, the network is restarted at height 0. During this process, an export of the last state of the previous network is made to produce the genesis state of the new one.

As a result, the blocks of the previous networks are not downloaded by new clients (as they sync from the new genesis state), and may be deleted by existing full-nodes.

In an effort to maintain transparency, the interchain hosts archives of the previous versions of the OKChain network. These archives can be found [here](https://archive.interchain.io/).

If you would like to search explorers for previous hub data, these are some links where you can find the information:

### Big Dipper

- [OKChain 1](https://cosmoshub-1.bigdipper.live/)
- [OKChain 2](https://cosmoshub-2.bigdipper.live/)

### Hubble

- [OKChain 1](https://hubble.figment.network/cosmos/chains/cosmoshub-1)
- [OKChain 2](https://hubble.figment.network/cosmos/chains/cosmoshub-2)

If you want to makes archives available to the community, feel free to open a PR to this file and add them.
