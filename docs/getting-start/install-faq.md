# Install FAQ
## 1. How to resolve error: too many open files ?
### For Linux
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
### For MACOS
* if you are running under `zsh`, open file `/etc/zshrc`, add follow config
```shell script
  ulimit -n 20480
```

* if you are running under `bash`, open file `~/.bash_profile`, add follow config
```shell script
  ulimit -n 20480
```

### For docker-compose
* if you started up okexchaind with docker-compose, edit your `compose.yml` and add
```
    ulimits:
        nproc: 65535
        nofile:
            soft: 65535
            hard: 65535
```

* restarting docker-compose to apply new setting
```
    docker-compose -f ${compose.yml} down
    docker-compose -f ${compose.yml} up -d
```

## 2. Configure `trust-node` and `chain-id`
When using `okexchaincli` to query block/tx or send tx, the following errors may occur:
```shell script
$ okexchaincli query block 6547302
panic: runtime error: invalid memory address or nil pointer dereference
[signal SIGSEGV: segmentation violation code=0x1 addr=0x0 pc=0x4cecdea]
```

```shell script
$ okexchaincli tx send boos okchain1hzttsww347hz7v3unp5g4834mxcte3pw8639ny 1okt -y --fees 0.002okt
ERROR: chain ID required but not specified
```
You should use the flag
```shell script
$ okexchaincli query block 6547302 --trust-node
$ okexchaincli tx send boos okchain1hzttsww347hz7v3unp5g4834mxcte3pw8639ny 1okt -y --fees 0.002okt --chain-id okexchain-65
```
or local configuration
```shell script
$ okexchaincli config chain-id okexchain-65
$ okexchaincli config trust-node true
```
