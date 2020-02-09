# OKChain安装

目前，`OKChain`暂未开源，可以通过[官方渠道](https://github.com/okex/okchain-binaries)下载可执行程序`okchaind`和`okchaincli`。  
下载成功后，通过运行相应命令使用`OKChain`程序的相关功能。

> 注：
> 目前测试网使用的`OKChain`软件版本为`v0.1.0`。

## 验证OKChain版本

安装OKChain软件后，可以通过下面命令来验证版本信息：
```sh 
$ okchaind version 
$ okchaincli version
```
比如`okchaind version`应该输出类似下面的信息：
```sh
$ okchaind version
version: 0.1.0
git commit: 20d0f89a430a654fef1b4acfc9d8a0b7c0cd0e9b
vendor hash: d4d8ee8e21167b59436b409c577e7becaa0be2528da66754b22e7fc11c0aaeaa
build tags: netgo
cosmos-sdk: 0.34.10
tendermint: 0.31.11
go version go1.12.5 linux/amd64
```

<!--
## 2. 源码方式安装（开源后使用TODO）
### 2.1 安装Go
根据[官方Go文档](https://golang.org/doc/install)安装`go`。配置`$GOPATH`, `$GOBIN`和`$PATH`环境变量，示例：
```sh
mkdir -p $HOME/go/bin
echo "export GOPATH=$HOME/go" >> ~/.bash_profile
echo "export GOBIN=$GOPATH/bin" >> ~/.bash_profile
echo "export PATH=$PATH:$GOBIN" >> ~/.bash_profile
source ~/.bash_profile
```

注：`OKChain` 依赖于 `Go1.12.1+`

### 安装OKChain软件
下面, 我们安装`OKChain`软件，这里我们使用版本`v0.1.0`。

> 注意：
> `v0.1.0`是测试网使用的`OKChain`软件版本。

```sh
mkdir -p $GOPATH/src/github.com/ok-chain
cd $GOPATH/src/github.com/ok-chain
git clone https://github.com/ok-chain/okchain
cd okchain && git checkout master
make tools install
git checkout v0.1.0
```
-->
