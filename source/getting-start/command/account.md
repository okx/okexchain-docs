# account

## Key：

### 增加账号：

#### 参数说明：

  | Parameter |        Description         |
  | :-------: | :------------------------: |
  |   name    | 添加账号的名字（比如bob） |

#### 示例：

系统会随机生成助记词、公钥和地址等信息
```bash
okchaincli keys add <name> [flags]
```

#### 成功返回：

```
okchaincli keys add wind
  
# 示例输出
{
  "name": "wind",
  "type": "local",
  "address": "okchain1ltxwpg2f2frsnq3et3qp7sfz2u44qsaj5ytlcf",
  "pubkey": "okchainpub1addwnpepqg8g82chdrf4ra4fn39e0lhzmds6qgs75emlzp2kqw5n69xt0fz3cewvx06",
  "mnemonic": "alpha enroll regret dizzy bid reunion company divorce layer narrow ceiling state"
  }
  
# 通过助记词恢复key
okchaincli keys add --recover admin   -y -m "keen border system oil inject hotel hood potato shed pumpkin legend actor"
```

### 显示本地所有key信息：

#### 参数说明：

  无

#### 示例：

显示本地所有的key信息
```bash
okchaincli keys list [flags]
```

#### 成功返回：
```
  okchaincli keys list
  
  # 示例输出
  [
    {
      "name": "admin16",
      "type": "local",
      "address": "okchain1v853tq96n9ghvyxlvqyxyj97589clccr33yr7a",
      "pubkey": "okchainpub1addwnpepq2nfj9lqmqrwjyrqnp574tll493svxdltwlnqq3vn5ptmf2ceraesgyfegg"
    },
    {
      "name": "alice",
      "type": "local",
      "address": "okchain1vr9u0u829g68vcy6y362efm3tky4mhfxf28tth",
      "pubkey": "okchainpub1addwnpepq2nkjj2tv9yyvfaevc45n3tszsl9l7t642rh5j2udvwn5uee26gqv7vwhun"
    },
  ]
```

### 显示指定用户的key信息：

#### 参数说明：

  | Parameter |           Description           |
  | :-------: | :-----------------------------: |
  |   name    | 要显示账号信息的名字（比如bob) |

#### 示例：

显示指定用户的key信息
```bash
okchaincli keys show [name [name...]] [flags]
```

#### 成功返回：

```
  okchaincli keys show bob
  
  # 示例输出
  {
    "name": "bob",
    "type": "local",
    "address": "okchain10487f9wxss2g2ctvpewkmjk543vg65x9rzv09n",
    "pubkey": 	  "okchainpub1addwnpepq2gaqy8nk0z0plexzusvs4g97wsvjtqftnpjkmw25lfh2hjz3wk0svf030h"
  }
```

### 删除指定用户的key信息：

#### 参数说明：

  | Parameter |           Description           |
  | :-------: | :-----------------------------: |
  |   name    | 要删除账号信息的名字（比如bob) |

#### 示例：

删除指定用户的key信息
```bash
okchaincli keys delete <name> [flags]
```

#### 成功返回：

```
  okchaincli keys delete bob
  
  #示例输出
  DANGER - enter password to permanently delete key:
  Key deleted forever (uh oh!)
```

### 更新指定用户的key信息：

#### 参数说明：

  | Parameter | Description               |
  | --------- | ------------------------- |
  | name      | 更新用户的名字（比如bob) |

#### 示例：

更新指定用户的密码信息
```bash
okchaincli keys update <name> [flags]
```

#### 成功返回：

```
  okchaincli keys update bob
  
  # 示例输出
  Enter the current passphrase:
  Enter the new passphrase:
  Repeat the new passphrase:
  Password successfully updated!
```
### 生成bip39助记词：

#### 参数说明：

  无

#### 示例：

生成一个bip39的助记词
```bash
okchaincli keys mnemonic [flags]
```

#### 成功返回：

```
okchaincli keys mnemonic

# 示例输出
board zone elevator lesson welcome meadow love card obey cruise unlock double
```

## Account：

### 查询账号余额：

#### 参数说明：

  | Parameter |                         Description                          |
  | :-------: | :----------------------------------------------------------: |
  |  Address  | 用户的地址（比如okchain10q0rk5qnyag7wfvvt7rtphlw589m7frsmyq4ya） |

#### 示例：

查询用户的的信息，包括序列号，公钥以及token余额等信息
```bash
okchaincli query account <address>
```

#### 成功返回：

```
  okchaincli query account okchain10q0rk5qnyag7wfvvt7rtphlw589m7frsmyq4ya
  
  # 示例输出
  {
    "type": "auth/Account",
    "value": {
      "address": "okchain10q0rk5qnyag7wfvvt7rtphlw589m7frsmyq4ya",
      "coins": [
        {
          "denom": "acoin",
          "amount": "10000000.00000000"
        },
        {
          "denom": "bcoin",
          "amount": "10000000.00000000"
        },
        {
          "denom": "bcoin-805",
          "amount": "200000.00000000"
        },
        {
          "denom": "okt",
          "amount": "9920000.00000000"
        },
      ],
      "public_key": {
        "type": "tendermint/PubKeySecp256k1",
        "value": "AgYaL1tZ7ekqvweQhKojG8sDHUfN23qJWviAsTDIWvYU"
      },
      "account_number": "3",
      "sequence": "4"
    }
   }  
```
