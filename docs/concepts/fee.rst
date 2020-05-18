Fee Model
=========

The details of this chapter are as follows:

-  Each can obtain data on the latest traded prices. The newly listed
   pairs take the initial prices as the latest traded prices



Execute an order
----------------

**Fee conditions**

When the order is executed, a certain amount of fee is charged in
proportion to the traded amount

**Fee priority**

Use the coin finally obtained by the user to pay the handling fee

**Fee rules**

1. Execute the order first. Remove the cryptocurrency sold and add the
   cryptocurrency bought in the user’s account
2. fee = the cryptocurrency bought * feeRate

**Fee parameter references**


+-------------+------------------+
| Operation   | Fee rate         |
+=============+==================+
| Deal        | 0.1%             |
+-------------+------------------+

Other fees
----------

+----------------+-------------------------------+------------------------------------------------+
| Module         | Order                         |  Business Fee      (OKT)                       |
+================+===============================+================================================+
| Dex            | List                          | 20000                                          |
+----------------+-------------------------------+------------------------------------------------+
| Token          | Issue                         | 20000                                          |
+----------------+-------------------------------+------------------------------------------------+
|                | Mint                          | 2000                                           |
+----------------+-------------------------------+------------------------------------------------+
|                | Burn                          | 10                                             |
+----------------+-------------------------------+------------------------------------------------+

