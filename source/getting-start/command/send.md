# send

## 转账

```bash
okchaincli tx send <addr> <amount> --from <name>
```

#### 参数说明

  |      Name       |      Type       |       Mark        |
  | :-------------: | :-------------: | :------------------: |
  | addr          | string           | 要转给的用户的地址|
  | amount          | string           | 要转账的数量，可以包含多个数字资产以逗号分隔比如1okt,2bcoin|
  | from          | string           | 数字资产的所有者|
  
  
#### 示例

```bash
okchaincli tx send okchain1jrhfgvmun4wd5qekxg2ma4xr405pn4dpwtx2qf 2okt --from alice -b block
```

#### 成功返回：

```
{
  "height": "63",
  "txhash": "AF5742022E2A183AB0C9BB90F130BFBBFEE1E69C05B20F4E417C2C9E93A52A16",
  "raw_log": "[{\"msg_index\":\"0\",\"success\":true,\"log\":\"\"}]",
  "logs": [
    {
      "msg_index": "0",
      "success": true,
      "log": ""
    }
  ],
  "tags": [
    {
      "key": "fee",
      "value": "0.01250000 okt"
    },
    {
      "key": "action",
      "value": "send"
    }
  ]
}
```

## 多签转账

多签分成以下多个步骤：

### 创建账户p1, p2, p3：

示例：
```bash
okchaincli keys add --pubkey=cosmospub1addwnpepqtg367t3j6myh4ces0luq3f6g87ptzwszpl9g5r28tgavypkdmm2w5l4zuq p1

okchaincli keys add --pubkey=cosmospub1addwnpepqg334a4my6ufrs7r0ajsd6lxac9arsvtqljf0fzrgr27xvf3n5uugpsxna8 p2

okchaincli keys add --pubkey=cosmospub1addwnpepqd7jd60n88tk98hyh72xsw48pjpfhdw0cd77ju59eqc88sxscfjkgx7tyfc p3
```

### 生成多签公钥： 

* 聚合p1，p2，p3的多签公钥，设置签名阈值为N，即任意N人的签名即可让签名通过。

* 示例中设置签名阈值为2：
```bash  
okchaincli keys add --multisig-threshold=2 --multisig=p1,p2,p3 p1p2p3
```

`--multisig-threshold`是将要对多签公钥发起的交易进行签名的最小私钥数。

`--multisig`标识必须包含要将组合成一个公钥的那些子公钥的名称，该公钥将在本地数据库中生成并存储为`new_key_name`。通过`--multisig`提供的所有名称必须已存在于本地数据库中。

* 显示账户地址并为其充值：
显示p1，p2，p3的账户地址，并为其充值100.1OKT
* 示例：
```bash
okchaincli keys show -a p1p2p3
okchaincli tx send cosmos1553hrs03kl2tlq47d9f6j477xdjp362l2cfetl 100.1okt --from=alice
okchaincli query account cosmos1553hrs03kl2tlq47d9f6j477xdjp362l2cfetl
```
### 多签：

#### 构造未签名交易：

构造未签名交易`unsignedTx.json`

##### 示例：

```bash
okchaincli tx send cosmos1xd07r5a3e2mf4srqck3hvzww24c65hpt604ge5 10okt \
  --chain-id=okchain \
  --from=cosmos1553hrs03kl2tlq47d9f6j477xdjp362l2cfetl \
  --generate-only > unsignedTx.json
```
#### p1, p2, p3分别签名：

##### 示例：
```bash
okchaincli tx sign \
  --multisig=cosmos1553hrs03kl2tlq47d9f6j477xdjp362l2cfetl \
  --from=alice \
  --output-document=p1signature.json \
  unsignedTx.json

 
okchaincli tx sign \
  --multisig=cosmos1553hrs03kl2tlq47d9f6j477xdjp362l2cfetl \
  --from=jack \
  --output-document=p2signature.json \
  unsignedTx.json 
```
#### 构造聚合签名：

构造聚合签名`signedTx.json`，因为门限设定的是2，所有有p1p2两个就可以执行

##### 示例：

```bash 
okchaincli tx multisign \
  unsignedTx.json \
  p1p2p3 \
  p1signature.json p2signature.json > signedTx.json
```

### 执行交易signedTx.json：

执行离线签名过的`signedTx.json`,并查询余额确认。

#### 示例：

```bash 
okchaincli tx broadcast signedTx.json

okchaincli query account cosmos1553hrs03kl2tlq47d9f6j477xdjp362l2cfetl
```
