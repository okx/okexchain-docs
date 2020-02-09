# staking

staking是支撑DEX PoS(Proof of Stake)共识机制的重要基础模块，它根据验证人所接受委托的权益总量确定每个选举周期内的出块者集合，并根据voting power来动态确定出块顺序。同时也为distribution和gov模块提供必要的委托关系与验证人信息查询的支持。

通过staking可以自由地创建validator、更新validator、委托权益给信赖的validator、从不再信任的validator那里解除委托以及将当前委托给某个validator的权益重新委托给其它validator。

## 轮替机制

OKChain每隔固定的块高数将对出块节点集合进行重新选举，这个固定的块高数被称为周期。在同一个周期内，出块节点集合保持固定，不会发生出块节点的身份变化。在每个周期的倒数第二个区块高度，staking将对下一周期的出块节点集合进行轮替。承托okt数量最多的21个节点将成为新周期的出块节点，而原周期的出块节点集合中承托okt数量位于top21以外的节点将被强制退出出块节点集合。okt数量仅计算整数，小数部分不参加轮替的承托数量比较。

## cli命令
staking cli共包含以下5个命令用以进行PoS操作，提供对权益流通的完整支持。


*  create-validator：创建validator

*  edit-validator：更新validator

*  delegate：委托权益

*  unbond：解除委托

*  redelegate：重新委托

### 创建validator

通过自委托将当前的节点升级为validator，并设置validator的描述信息和佣金费率以及相关变更限制。

```bash
okchaincli tx staking create-validator --amount=2okt --pubkey=$(okchaind tendermint show-validator) --moniker="my nickname" --identity="logo|||http://mywebsite/pic/logo.jpg" --website="http://mywebsite" --details="my slogan" --commission-rate="0.10" --commission-max-rate="0.50" --commission-max-change-rate="0.01" --min-self-delegation="1" --from jack
```

* amount表示自委托的okt数量
* pubkey表示当前节点的tendermint公钥
* moniker表示validator昵称
* identity指定validator头像图片地址
* website表示validator网站地址
* details表示validator补充介绍
* commission-rate表示当前佣金费率，仅支持2位小数
* commission-max-rate表示validator最大佣金费率，佣金费率不可设置超过该最大佣金费率，仅支持2位小数
* commission-max-change-rate表示每次变更佣金费率时可接受的最大调整费率，超过该最大调整费率的变更为无效变更，仅支持2位小数
* min-self-delegation表示最低自委托okt数量，小于该最低自委托okt数量为无效自委托
* from指定operator账户，这里为jack

### 更新validator

operator可以更新validator的相关描述信息，调整佣金费率。

```bash
okchaincli tx staking edit-validator --moniker=“my new nickname” --identity="logo|||http://mynewwebsite/pic/newlogo.jpg" --website="http://mynewwebsite" --details="my new slogan" --commission-rate="0.11" --from jack
```

- moniker表示validator拟更新的昵称
- identity指定validator拟更新的头像图片地址
- website表示validator拟更新的网站地址
- details表示validator拟更新的介绍
- commission-rate表示拟更新的佣金费率，每24小时只能更新一次佣金费率，调整幅度不能超过commission-max-change-rate
- from表示operator账户，这里为jack


### 委托权益

okchain用户可以通过委托自身权益给若干validator允许其代行相关义务，如提案投票等。通过委托权益，用户可以获得分红奖励、参与okchain治理。

```bash
okchaincli tx staking delegate okchainvaloper1005qzgwplwu8hf9pjhhtlm0t2x27hyppgqc2w6 20okt  --from rose
* 示例中okchainvaloper1005qzgwplwu8hf9pjhhtlm0t2x27hyppgqc2w6为validator地址，20okt为拟委托的okt数量
```

* from表示委托用户账户，这里为rose

### 解除委托

okchain用户可以解除委托，将获得的委托份额重新兑换为okt。用户解除委托后须等待2个选举周期方可收到重新兑换的okt。

```bash
okchaincli tx staking unbond okchainvaloper1005qzgwplwu8hf9pjhhtlm0t2x27hyppgqc2w6 10 --from rose
* 示例中okchainvaloper1005qzgwplwu8hf9pjhhtlm0t2x27hyppgqc2w6为validator地址，10为拟解除委托的委托份额
```

* from表示拟解除委托的用户账户，这里为rose

### 重新委托

okchain用户可以通过重新委托交易将委托在validator<sub>a</sub>处的委托份额重新委托至validator<sub>b</sub>处。当前周期进行的重新委托交易将会迟滞至下一周期生效。

```bash
okchaincli tx staking redelegate okchainvaloper1005qzgwplwu8hf9pjhhtlm0t2x27hyppgqc2w6 okchainvaloper1alq9na49n9yycysh889rl90g9nhe58lcs50wu5 10 --from rose
* 示例中okchainvaloper1005qzgwplwu8hf9pjhhtlm0t2x27hyppgqc2w6为validator_a地址，okchainvaloper1alq9na49n9yycysh889rl90g9nhe58lcs50wu5为validator_b地址，10为拟重新委托的委托份额
```

* from表示拟重新委托的用户账户，这里为rose

为了保证PoS安全，每个周期内的重新委托交易将划分为三种类型进行处理：


*  重新委托交易的src validator为下一周期的出块节点，则该交易将被延迟至下下周期执行，最早执行时间为下下周期第一个块高，最晚执行时间为下下周期倒数第二个块高；具有相同src validator的重新委托交易会覆盖延迟中的交易，仅执行最新的重新委托交易；

![bonded validator](/img/red1.png)


*  重新委托交易的src validator为退出出块节点集合的节点，则该交易将被延迟至下周期第一个块高执行；

![unbonding validator](/img/red2.png)


*  重新委托交易的src validator不在下一周期的出块节点集合内，同时也不为退出出块节点集合的节点，则该交易即时执行。

![unbonded validator](/img/red3.png)
