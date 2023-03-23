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
* if you started up okbchaind with docker-compose, edit your `compose.yml` and add
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
When using `okbchaincli` to query block/tx or send tx, the following errors may occur:
```shell script
$ okbchaincli query block 6547302
panic: runtime error: invalid memory address or nil pointer dereference
[signal SIGSEGV: segmentation violation code=0x1 addr=0x0 pc=0x4cecdea]
```

```shell script
$ okbchaincli tx send boos ex1fh9tpkqka29n0mj307cu5cvp5ts0p4dl3mkv7r 1okb -y --fees 0.002okb
ERROR: chain ID required but not specified
```
You should use the flag
```shell script
$ okbchaincli query block 6547302 --trust-node
$ okbchaincli tx send boos ex1fh9tpkqka29n0mj307cu5cvp5ts0p4dl3mkv7r 1okb -y --fees 0.002okb --chain-id okbchaintest-195
```
or local configuration
```shell script
$ okbchaincli config chain-id okbchaintest-195
$ okbchaincli config trust-node true
```

## 3. Make sure commitID is the latest version
When you start your own node, to make sure that your commitID of okbchaind is consistent with the [official version](https://github.com/okx/exchain/releases), check it by:
```shell script
$ okbchaind version --long
# or
$ docker exec docker_container_name okbchaind version --long

```
For example, the commitID of v0.16.8.3 is ee5068ccb54b464aeaff7eef69fb2e8611551fed.
```shell script
name: exchain
server_name: okbchaind
client_name: okbchaincli
version: v1.0.0
commit: 4f496351ab3bdc4ce014706711f31589021dd0de
build_tags: netgo
go: go version go1.20 darwin/amd64
```



