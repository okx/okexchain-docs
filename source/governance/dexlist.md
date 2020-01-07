说明：   
1. 在发起上币申请提案前首先发行（[issue](/getting-start/command/token/#1)）token   
2. 上币申请提案分为[自动激活上币申请提案](/getting-start/ico/#242)和[主动激活上币申请提案](/getting-start/ico/#241)：  
&emsp;&emsp;a. 主动激活上币申请提案是指在发起上币申请提案时不指定`--blockHeight`参数，在提案通过后，通过[上币激活命令](/getting-start/command/gov/#4)来完成上币激活   
&emsp;&emsp;b. 自动激活上币申请提案是指在发起上币申请提案时通过指定`--blockHeight`参数，在提案通过后块高达到指定块高执行该提案完成上币激活。   
3. 主动激活上币提案可以由任意okt持有者发起，但在提案通过后`必须`由token的owner激活该提案。自动激活上币申请提案`必须`由token的owner发起。   
4. 主动激活上币提案在通过后应该在激活到期时间内（DexListExpireTime）完成，否则提案失效，该提案不能被激活，只能重新发起上币申请提案来上币。
