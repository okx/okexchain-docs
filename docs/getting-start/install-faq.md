# Install faq
## 1. How to resolve error: too many open files ?
* open file `/etc/sysctl.conf`, add follow config
```shell script
  fs.file-max = 500000
```
* run command: 
```shell script
  sysctl -p
```
* open file `/etc/security/limits.conf`, add follow config
```shell script
  soft nofile 65535
  hard nofile 65535
```
* open file `/etc/systemd/user.conf`, add follow config
```shell script
  DefaultLimitNOFILE=65535
```
* open file `/etc/systemd/system.conf`, add follow config
```shell script
  DefaultLimitNOFILE=65535
```
* reboot system, problem resolved
```shell script
  reboot
```
## 2. Configure `trust-node` and `chain-id`
When using `okchaincli` to query block/tx or send tx, the following errors may occur:
```shell script
$ okchaincli query block 6547302
panic: runtime error: invalid memory address or nil pointer dereference
[signal SIGSEGV: segmentation violation code=0x1 addr=0x0 pc=0x4cecdea]
```

```shell script
$ okchaincli tx send boos okchain1hzttsww347hz7v3unp5g4834mxcte3pw8639ny 1tokt -y --fees 0.002tokt
ERROR: chain ID required but not specified
```
You should use the flag
```shell script
$ okchaincli query block 6547302 --trust-node
$ okchaincli tx send boos okchain1hzttsww347hz7v3unp5g4834mxcte3pw8639ny 1tokt -y --fees 0.002tokt --chain-id okchain
```
or local configuration
```shell script
$ okchaincli config chain-id okchain
$ okchaincli config trust-node true
```