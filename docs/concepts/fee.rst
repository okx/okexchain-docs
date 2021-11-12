Fee Model
=========

The details of this chapter are as follows:

- Each trader can obtain the data on the latest traded prices. The newly listed pairs take the initial prices as the latest traded prices.


Execute an order
----------------

**Fee conditions**

When the order is executed, a certain amount of fee is charged in proportion to the traded amount.

**Fee priority**

Use the token finally obtained by the user to pay the handling fee.

**Fee rules**

1. Execute the order first. Remove the token sold and add the token purchased in the user’s account
2. fee = the cryptocurrency bought * feeRate

**Fee parameter references**


+-------------+------------------+
| Operation   | Fee rate         |
+=============+==================+
| Deal        | 0.1%             |
+-------------+------------------+


Fees & Gas
----------

Each transaction may either supply fees or gas prices, but not both.

Validator’s have a minimum gas price (multi-denom) configuration and they use this value when determining if they should include the transaction in a block during `CheckTx`, where `gasPrices >= minGasPrices`. Note, your transaction must supply fees that are greater than or equal to any of the denominations the validator requires.

**Note**: With such a mechanism in place, validators may start to prioritize txs by `gasPrice` in the mempool, so providing higher fees or gas prices may yield higher tx priority.

e.g.

.. code:: bash

    exchaincli tx send ... --fees=0.0002okt


or

.. code:: bash

    exchaincli tx send ... --gas-prices=0.000000001okt


You need to use the ``--gas`` flag to specify the gas quantity you want to provide for this transaction, either use ``--gas number``
or ``--gas auto``. When use ``--gas auto`` to automatic estimate gas needed, a good advice is also to provide ``--gas-adjustment ratio``,
where ratio should be 1.5 or 2.0.

You need to use the `--gas` flag to specify the gas quantity you want to provide for this transaction, either use `--gas` number or `--gas` auto. When use `--gas` auto to automatic estimate gas needed, a good advice is also to provide `--gas-adjustment` ratio, where ratio should be 1.5 or 2.0.


Other fees
----------

In addition to the above fees, oec will also charge some additional fees as `Business fees` for below `Orders`.


+----------------+-------------------------------+------------------------------------------------+
| Module         | Command                       |  Business Fee      (OKT)                       |
+================+===============================+================================================+
| Dex            | List                          | 1000                                           |
+----------------+-------------------------------+------------------------------------------------+



Fee Related FAQ
----------

**1. Fee deduction rules**
* If provide `--fees` numFees, chain will deduction “numFees” from operation account, no matter success or fail.
* If provide `--gas-prices`, chain will deduction `gas_wanted*gas-prices` from operation account, no matter success or failed.
* Currently oec will not return the exceed gas provided, ie. if provided gas(gas_wanted) is small than gas used(gas_used), chain will consume gas_wanted gas and fail; if gas_wanted is bigger than gas_used, chain will also consume gas_wanted.

**2. Why account balance is not integer when provided “–fees intFees”**

* Besides gas fee, chain will also consume some other additional transaction fees for Dex and Token as list above.
