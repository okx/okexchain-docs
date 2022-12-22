# Sentry node

Validation nodes need to ensure that the network can withstand distributed denial-of-service (DDoS) attacks.

A recommended way to mitigate such risks is to use Sentry nodes to build a network topology that can protect validation nodes.

Validation nodes should only be connected to full nodes they trust, such as full nodes maintained by themselves or nodes run by other validators known in the community. Validation nodes will typically run in data centres. Most data centres provide networks that are directly connected to cloud service providers. Validation nodes can connect to Sentry nodes on the cloud through such networks. This shifts the burden of DDoS attacks directly from validation nodes to their Sentry nodes, and it may be necessary to start or activate new Sentry nodes to reduce the impact of such attacks when necessary.

Sentry nodes can quickly start or change their IP addresses. Since the links between verification nodes and Sentry nodes are in the private IP network, hackers cannot directly attack the verification nodes through the network. This will ensure that block proposals and votes of validation nodes will always be broadcast normally by Sentry nodes.

To configure the Sentry node architecture, you can follow the following instructions:

Validation nodes should edit their config.toml:

```bash
＃ Comma separated list of nodes to keep persistent connections
＃ Do not add private peers to this list if you do not want them advertised

persistent_peers = [list of sentry nodes]

＃ Set true to enable the peer-exchange reactor
pex = false
```

Sentry nodes should edit their config.toml:

```bash
＃ comma separated list of peer IDs to keep private (will not be gossiped to other peers)
＃ Example ID: 3e16af0cead27979e1fc3dac57d03df3c7a77acc

private_peer_ids = "node_ids_of_private_peers"
```
