# FARM GUIDE(CLI)

## cli command

### create a farm pool

The project team can use this command to create a farm pool for users to participate in the farming of their project. 

```shell
$ exchaincli tx farm create-pool [pool-name] [min-lock-amount] [yield-token]
```

- pool-name： the name of the farm pool, which is used to identify the pool.
- min-lock-amount：the minimum amount of farm tokens to join farm.
- yield-token：the name of reward token .

#### example：

```shell
$ exchaincli tx farm create-pool pool-eth-xxb 10eth xxb --from mykey
```



### provide reward token to farm pool

After the project team creates the farm pool, it needs to provide the reward token to the farm pool to make it work. 

> After the rewards of the farm pool are distributed, the project team can also use this command to continue adding rewards to extend the farming.

```shell
$ exchaincli tx farm provide [pool-name] [amount] [yield-per-block] [start-height-to-yield]
```

- pool-name: the name of the farm pool.
- amount：the total amount of  the reward tokens that the project team want to provide .
- yield-per-block: rewards amount per block.
- start-height-to-yield：block height at the beginning of farming.

#### example

```shell
$ exchaincli tx farm provide pool-eth-xxb 1000xxb 5 10000 --from mykey
```



### lock tokens for yield farming

The farmer can lock the farm token into the farm pool and start farming through this command. 

```shell
$ exchaincli tx farm lock [pool-name] [amount]
```

- pool-name：the name of the farm pool.
- amount:  the amount of farm tokens the farmer wants to lock.

#### example

```shell
$ exchaincli tx farm lock pool-eth-xxb 5eth --from mykey
```



### unlock token for yield farming

The farmer can unlock the farm tokens locked in the farm pool through this command, and receive all rewards. 

```shell
$ exchaincli tx farm unlock [pool-name] [amount]
```

- pool-name：the name of the farm pool.
- amount: the amount of farm tokens the farmer wants to unlock.

#### example

```shell
$ exchaincli tx farm lock pool-eth-xxb 1eth --from mykey
```



### claim yield farming rewards

Farmers can use this command to claim farming rewards without unlocking the farming token.

```shell
$ exchaincli tx farm claim [pool-name]
```

- pool-name：the name of the farm pool.

#### example

```shell
$ exchaincli tx farm claim pool-eth-xxb --from mykey
```



### destroy a farm pool

The project team can destroy the farming pool created by itself through this command, provided that the reward token has been collected and the locked farming token has been unlocked. 

```shell
$ exchaincli tx farm destroy-pool [pool-name]
```

- pool-name：the name of the farm pool.

#### example

```shell
$ exchaincli tx farm destroy-pool pool-eth-xxb --from mykey
```



### query command

#### 1. query the information of the specified farming pool

```shell
$ exchaincli query farm pool [pool-name]
```

##### example:

```shell
$ exchaincli query farm pool pool-eth-xxb
```



#### 2. query the information of all farming pools

```shell
$ exchaincli query farm pools
```



#### 3. query the number of farming pools

```shell
$ exchaincli query farm pool-num
```



#### 4. query the lock info of an account on a pool

```shell
$ exchaincli query farm lock-info [pool-name] [address]
```

##### example:

```shell
$ exchaincli query farm lock-info pool-eth-xxb ex1hcngft7gfkhn8z8fnlajzh7agyt0az0v6ztmme
```



#### 5. query the current rewards of an account

```shell
$ exchaincli query farm rewards [pool-name] [address]
```

##### example:

```shell
$ exchaincli query farm rewards pool-eth-xxb ex1hcngft7gfkhn8z8fnlajzh7agyt0az0v6ztmme
```



#### 6. query the name of pools that an account has locked coins in

```shell
$ exchaincli query farm account [address]
```

##### example:

```shell
$ exchaincli query farm account ex1hcngft7gfkhn8z8fnlajzh7agyt0az0v6ztmme
```



#### 7. query the addresses of accounts locked in a pool

```shell
$ exchaincli query farm accounts-locked-to [pool-name]
```

##### example:

```shell
$ exchaincli query farm accounts-locked-to pool-eth-xxb
```



#### 8. query the whitelist of pools to farm okt

```shell
$ exchaincli query farm whitelist
```

