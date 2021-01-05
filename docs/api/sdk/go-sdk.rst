Go SDK
======

SDK `download <https://github.com/okex/okexchain-go-sdk>`__

1 Account function
~~~~~~~~~~~~~~~~~~

1.1 Create an account
~~~~~~~~~~~~~~~~~~~~~

.. code:: go

    func CreateAccount(name, passWd string)(keys.Info, string, error)

Enter parameters:

+----------+----------+--------------------+
| Name     | Type     | Mark               |
+==========+==========+====================+
| name     | string   | account name       |
+----------+----------+--------------------+
| passWd   | string   | account password   |
+----------+----------+--------------------+

Printed results:

.. code:: go

    // Account API implementation class
    type localInfo struct {
        Name         string        `json:"name"`
        PubKey       crypto.PubKey `json:"pubkey"`
        PrivKeyArmor string        `json:"privkey.armor"`
        Algo         SigningAlgo   `json:"algo"`
    }

    // Mnemonic phrase
    string

1.2 Enter a mnemonic phrase to generate an account
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. code:: go

    func CreateAccountWithMnemo(mnemo, name, passWd string)(keys.Info, string, error)

Enter parameters:

+----------+----------+--------------------+
| Name     | Type     | Mark               |
+==========+==========+====================+
| mnemo    | string   | mnemonic phrase    |
+----------+----------+--------------------+
| name     | string   | account name       |
+----------+----------+--------------------+
| passWd   | string   | account password   |
+----------+----------+--------------------+

Results returned:

.. code:: go

    // Account API implementation class
    type localInfo struct {
        Name         string        `json:"name"`
        PubKey       crypto.PubKey `json:"pubkey"`
        PrivKeyArmor string        `json:"privkey.armor"`
        Algo         SigningAlgo   `json:"algo"`
    }

    // Mnemonic phrase
    string

1.3 Enter a private key to generate an account
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. code:: go

    func CreateAccountWithPrivateKey(privateKey, name, passWd string) (keys.Info, error)

Enter parameters:

+--------------+----------+--------------------+
| Name         | Type     | Mark               |
+==============+==========+====================+
| privateKey   | string   | private key        |
+--------------+----------+--------------------+
| name         | string   | account name       |
+--------------+----------+--------------------+
| passWd       | string   | account password   |
+--------------+----------+--------------------+

Results returned:

.. code:: go

    // Account API implementation class
    type localInfo struct {
        Name         string        `json:"name"`
        PubKey       crypto.PubKey `json:"pubkey"`
        PrivKeyArmor string        `json:"privkey.armor"`
        Algo         SigningAlgo   `json:"algo"`
    }

1.4 Generate a new mnemonic phrase
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. code:: go

    func GenerateMnemonic() (string, error)

Parameters entered: Null

Results returned:

.. code:: go

    // Mnemonic phrase
    string
2 module
~~~~~~~~

2.1 token
~~~~~~~~~

2.1.1 tx
~~~~~~~~

2.1.1.1 Send transfers coins to other receiver
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. code:: go

    func (tc tokenClient) Send(fromInfo keys.Info, passWd, toAddrStr, coinsStr, memo string, accNum, seqNum uint64)(resp sdk.TxResponse, err error)

Parameters entered:

+--------------+----------+---------------------------+
| Name         | Type     | Mark                      |
+==============+==========+===========================+
| fromInfo     | keys.Info| sender account            |
+--------------+----------+---------------------------+
| passWd       | string   | sender account password   |
+--------------+----------+---------------------------+
| toAddrStr    | string   | recipient address         |
+--------------+----------+---------------------------+
| coinsStr     | string   | transfer amount string    |
+--------------+----------+---------------------------+
| toAddrStr    | string   | recipient address         |
+--------------+----------+---------------------------+
| memo         | string   | remarks                   |
+--------------+----------+---------------------------+
| accNum       | string   | sender AccountNumber      |
+--------------+----------+---------------------------+
| seqNum       | string   | sender SequenceNumber     |
+--------------+----------+---------------------------+


Results returned:

.. code:: go

    // Tx reply message
        type TxResponse struct {
        Height    int64           `json:"height"`
        TxHash    string          `json:"txhash"`
        Codespace string          `json:"codespace,omitempty"`
        Code      uint32          `json:"code,omitempty"`
        Data      string          `json:"data,omitempty"`
        RawLog    string          `json:"raw_log,omitempty"`
        Logs      ABCIMessageLogs `json:"logs,omitempty"`
        Info      string          `json:"info,omitempty"`
        GasWanted int64           `json:"gas_wanted,omitempty"`
        GasUsed   int64           `json:"gas_used,omitempty"`
        Tx        Tx              `json:"tx,omitempty"`
        Timestamp string          `json:"timestamp,omitempty"`
    }

2.1.1.2  MultiSend multi-sends coins to several receivers
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. code:: go

    func (tc tokenClient) MultiSend(fromInfo keys.Info, passWd string, transfers []types.TransferUnit, memo string, accNum, seqNum uint64) (resp sdk.TxResponse, err error)

Enter parameters:

+------------+-------------+---------------------------+
| Name       | Type        | Mark                      |
+============+=============+===========================+
| fromInfo   | keys.Info   | sender account            |
+------------+-------------+---------------------------+
| passWd     | string      | sender account password   |
+------------+-------------+---------------------------+
| transfers  | string      | recipient address list    |
+------------+-------------+---------------------------+
| memo       | string      | remarks                   |
+------------+-------------+---------------------------+
| accNum     | uint64      | sender AccountNumber      |
+------------+-------------+---------------------------+
| seqNum     | uint64      | sender SequenceNumber     |
+------------+-------------+---------------------------+

Results returned:

.. code:: go

    // Tx reply message
    type TxResponse struct {
        Height    int64           `json:"height"`
        TxHash    string          `json:"txhash"`
        Codespace string          `json:"codespace,omitempty"`
        Code      uint32          `json:"code,omitempty"`
        Data      string          `json:"data,omitempty"`
        RawLog    string          `json:"raw_log,omitempty"`
        Logs      ABCIMessageLogs `json:"logs,omitempty"`
        Info      string          `json:"info,omitempty"`
        GasWanted int64           `json:"gas_wanted,omitempty"`
        GasUsed   int64           `json:"gas_used,omitempty"`
        Tx        Tx              `json:"tx,omitempty"`
        Timestamp string          `json:"timestamp,omitempty"`
    }

2.1.1.3  Issue issues a kind of token
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. code:: go

func (tc tokenClient) Issue(fromInfo keys.Info, passWd, orgSymbol, wholeName, totalSupply, tokenDesc, memo string, mintable bool, accNum, seqNum uint64) (resp sdk.TxResponse, err error)

Enter parameters:

+------------+-------------+---------------------------+
| Name       | Type        | Mark                      |
+============+=============+===========================+
| fromInfo   | keys.Info   | sender account            |
+------------+-------------+---------------------------+
| passWd     | string      | sender account password   |
+------------+-------------+---------------------------+
| orgSymbol  | string      | new token symbol          |
+------------+-------------+---------------------------+
| wholeName  | string      | whole name                |
+------------+-------------+---------------------------+
| totalSupply| uint64      | total supply              |
+------------+-------------+---------------------------+
| tokenDesc  | uint64      | sender SequenceNumber     |
+------------+-------------+---------------------------+
| memo       | string      | remarks                   |
+------------+-------------+---------------------------+
| mintable   | bool        | token can be minted       |
+------------+-------------+---------------------------+
| accNum     | uint64      | sender AccountNumber      |
+------------+-------------+---------------------------+
| seqNum     | uint64      | sender SequenceNumber     |
+------------+-------------+---------------------------+

Results returned:

.. code:: go

    // Tx reply message
    type TxResponse struct {
        Height    int64           `json:"height"`
        TxHash    string          `json:"txhash"`
        Codespace string          `json:"codespace,omitempty"`
        Code      uint32          `json:"code,omitempty"`
        Data      string          `json:"data,omitempty"`
        RawLog    string          `json:"raw_log,omitempty"`
        Logs      ABCIMessageLogs `json:"logs,omitempty"`
        Info      string          `json:"info,omitempty"`
        GasWanted int64           `json:"gas_wanted,omitempty"`
        GasUsed   int64           `json:"gas_used,omitempty"`
        Tx        Tx              `json:"tx,omitempty"`
        Timestamp string          `json:"timestamp,omitempty"`
    }

2.1.1.4  Mint increases the total supply of a kind of token by its owner
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. code:: go

    func (tc tokenClient) Mint(fromInfo keys.Info, passWd, coinsStr, memo string, accNum, seqNum uint64) (resp sdk.TxResponse, err error)

Enter parameters:

+------------+-------------+---------------------------+
| Name       | Type        | Mark                      |
+============+=============+===========================+
| fromInfo   | keys.Info   | sender account            |
+------------+-------------+---------------------------+
| passWd     | string      | sender account password   |
+------------+-------------+---------------------------+
| coinsStr   | string      | transfer amount string    |
+------------+-------------+---------------------------+
| memo       | string      | remarks                   |
+------------+-------------+---------------------------+
| accNum     | string      | sender AccountNumber      |
+------------+-------------+---------------------------+
| seqNum     | uint64      | sender SequenceNumber     |
+------------+-------------+---------------------------+

Results returned:

.. code:: go

    // Tx reply message
    type TxResponse struct {
        Height    int64           `json:"height"`
        TxHash    string          `json:"txhash"`
        Codespace string          `json:"codespace,omitempty"`
        Code      uint32          `json:"code,omitempty"`
        Data      string          `json:"data,omitempty"`
        RawLog    string          `json:"raw_log,omitempty"`
        Logs      ABCIMessageLogs `json:"logs,omitempty"`
        Info      string          `json:"info,omitempty"`
        GasWanted int64           `json:"gas_wanted,omitempty"`
        GasUsed   int64           `json:"gas_used,omitempty"`
        Tx        Tx              `json:"tx,omitempty"`
        Timestamp string          `json:"timestamp,omitempty"`
    }

2.1.1.5  Burn decreases the total supply of a kind of token by burning a specific amount of that from the own account
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. code:: go

func (tc tokenClient) Burn(fromInfo keys.Info, passWd, coinsStr, memo string, accNum, seqNum uint64) (resp sdk.TxResponse, err error)

Enter parameters:

+------------+-------------+---------------------------+
| Name       | Type        | Mark                      |
+============+=============+===========================+
| fromInfo   | keys.Info   | sender account            |
+------------+-------------+---------------------------+
| passWd     | string      | sender account password   |
+------------+-------------+---------------------------+
| coinsStr   | string      | transfer amount string    |
+------------+-------------+---------------------------+
| memo       | string      | remarks                   |
+------------+-------------+---------------------------+
| accNum     | uint64      | sender AccountNumber      |
+------------+-------------+---------------------------+
| seqNum     | uint64      | sender SequenceNumber     |
+------------+-------------+---------------------------+

Results returned:

.. code:: go

    // Tx reply message
    type TxResponse struct {
        Height    int64           `json:"height"`
        TxHash    string          `json:"txhash"`
        Codespace string          `json:"codespace,omitempty"`
        Code      uint32          `json:"code,omitempty"`
        Data      string          `json:"data,omitempty"`
        RawLog    string          `json:"raw_log,omitempty"`
        Logs      ABCIMessageLogs `json:"logs,omitempty"`
        Info      string          `json:"info,omitempty"`
        GasWanted int64           `json:"gas_wanted,omitempty"`
        GasUsed   int64           `json:"gas_used,omitempty"`
        Tx        Tx              `json:"tx,omitempty"`
        Timestamp string          `json:"timestamp,omitempty"`
    }

2.1.1.6  Edit modifies the info of a specific token by its owner
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. code:: go

func (tc tokenClient) Edit(fromInfo keys.Info, passWd, symbol, description, wholeName, memo string, isDescEdit, isWholeNameEdit bool, accNum, seqNum uint64) (resp sdk.TxResponse, err error)

Enter parameters:

+-----------------+-------------+---------------------------+
| Name            | Type        | Mark                      |
+=================+=============+===========================+
| fromInfo        | keys.Info   | sender account            |
+-----------------+-------------+---------------------------+
| passWd          | string      | sender account password   |
+-----------------+-------------+---------------------------+
| symbol          | string      | symbol of the token       |
+-----------------+-------------+---------------------------+
| description     | string      | description of the token  |
+-----------------+-------------+---------------------------+
| wholeName       | string      | whole name                |
+-----------------+-------------+---------------------------+
| memo            | string      | remarks                   |
+-----------------+-------------+---------------------------+
| isDescEdit      | bool        | description is need edit  |
+-----------------+-------------+---------------------------+
| isWholeNameEdit | bool        | whole name is need edit   |
+-----------------+-------------+---------------------------+
| accNum          | string      | sender AccountNumber      |
+-----------------+-------------+---------------------------+
| seqNum          | uint64      | sender SequenceNumber     |
+-----------------+-------------+---------------------------+

Results returned:

.. code:: go

    // Tx reply message
    type TxResponse struct {
        Height    int64           `json:"height"`
        TxHash    string          `json:"txhash"`
        Codespace string          `json:"codespace,omitempty"`
        Code      uint32          `json:"code,omitempty"`
        Data      string          `json:"data,omitempty"`
        RawLog    string          `json:"raw_log,omitempty"`
        Logs      ABCIMessageLogs `json:"logs,omitempty"`
        Info      string          `json:"info,omitempty"`
        GasWanted int64           `json:"gas_wanted,omitempty"`
        GasUsed   int64           `json:"gas_used,omitempty"`
        Tx        Tx              `json:"tx,omitempty"`
        Timestamp string          `json:"timestamp,omitempty"`
    }

2.1.2 query
~~~~~~~~~~~

2.1.2.1 QueryTokenInfo gets token info with a specific symbol or the owner address
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. code:: go

    func (tc tokenClient) QueryTokenInfo(ownerAddr, symbol string) (tokens []types.TokenResp, err error)

Enter parameters:

+-----------------+-------------+---------------------------+
| Name            | Type        | Mark                      |
+=================+=============+===========================+
| ownerAddr       | string      | owner address             |
+-----------------+-------------+---------------------------+
| symbol          | string      | symbol of the token       |
+-----------------+-------------+---------------------------+

Results returned:

.. code:: go

    // Return array token response
    type TokenResp struct {
        Description         string         `json:"description" v2:"description"`
        Symbol              string         `json:"symbol" v2:"symbol"`
        OriginalSymbol      string         `json:"original_symbol" v2:"original_symbol"`
        WholeName           string         `json:"whole_name" v2:"whole_name"`
        OriginalTotalSupply sdk.Dec        `json:"original_total_supply" v2:"original_total_supply"`
        Type                int            `json:"type"`
        Owner               sdk.AccAddress `json:"owner" v2:"owner"`
        Mintable            bool           `json:"mintable" v2:"mintable"`
        TotalSupply         sdk.Dec        `json:"total_supply" v2:"total_supply"`
    }


2.2 auth
~~~~~~~~

2.2.1 query
~~~~~~~~~~~

2.2.1.1 QueryAccount gets the account info
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. code:: go

    func (ac authClient) QueryAccount(accAddrStr string) (account types.Account, err error)

Enter parameters:

+-----------------+-------------+---------------------------+
| Name            | Type        | Mark                      |
+=================+=============+===========================+
| accAddrStr      | string      | string of account address |
+-----------------+-------------+---------------------------+

Results returned:

.. code:: go

    // Return account type
    account types.Account

2.3 staking
~~~~~~~~

2.3.1 tx
~~~~~~~~~~~

2.3.1.1 Deposit deposits an amount of okt to delegator account
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. code:: go

    func (sc stakingClient) Deposit(fromInfo keys.Info, passWd, coinsStr, memo string, accNum, seqNum uint64)(resp sdk.TxResponse, err error)

Enter parameters:

+------------+-------------+---------------------------+
| Name       | Type        | Mark                      |
+============+=============+===========================+
| fromInfo   | keys.Info   | sender account            |
+------------+-------------+---------------------------+
| passWd     | string      | sender account password   |
+------------+-------------+---------------------------+
| coinsStr   | string      | transfer amount string    |
+------------+-------------+---------------------------+
| memo       | string      | remarks                   |
+------------+-------------+---------------------------+
| accNum     | uint64      | sender AccountNumber      |
+------------+-------------+---------------------------+
| seqNum     | uint64      | sender SequenceNumber     |
+------------+-------------+---------------------------+

Results returned:

.. code:: go

    // Tx reply message
    type TxResponse struct {
        Height    int64           `json:"height"`
        TxHash    string          `json:"txhash"`
        Codespace string          `json:"codespace,omitempty"`
        Code      uint32          `json:"code,omitempty"`
        Data      string          `json:"data,omitempty"`
        RawLog    string          `json:"raw_log,omitempty"`
        Logs      ABCIMessageLogs `json:"logs,omitempty"`
        Info      string          `json:"info,omitempty"`
        GasWanted int64           `json:"gas_wanted,omitempty"`
        GasUsed   int64           `json:"gas_used,omitempty"`
        Tx        Tx              `json:"tx,omitempty"`
        Timestamp string          `json:"timestamp,omitempty"`
    }

2.3.1.2 Withdraw withdraws an amount of okt and the corresponding shares from all validators
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. code:: go

    func (sc stakingClient) Withdraw(fromInfo keys.Info, passWd, coinsStr, memo string, accNum, seqNum uint64) (resp sdk.TxResponse, err error)

Enter parameters:

+------------+-------------+---------------------------+
| Name       | Type        | Mark                      |
+============+=============+===========================+
| fromInfo   | keys.Info   | sender account            |
+------------+-------------+---------------------------+
| passWd     | string      | sender account password   |
+------------+-------------+---------------------------+
| coinsStr   | string      | transfer amount string    |
+------------+-------------+---------------------------+
| memo       | string      | remarks                   |
+------------+-------------+---------------------------+
| accNum     | uint64      | sender AccountNumber      |
+------------+-------------+---------------------------+
| seqNum     | uint64      | sender SequenceNumber     |
+------------+-------------+---------------------------+

Results returned:

.. code:: go

    // Tx reply message
    type TxResponse struct {
        Height    int64           `json:"height"`
        TxHash    string          `json:"txhash"`
        Codespace string          `json:"codespace,omitempty"`
        Code      uint32          `json:"code,omitempty"`
        Data      string          `json:"data,omitempty"`
        RawLog    string          `json:"raw_log,omitempty"`
        Logs      ABCIMessageLogs `json:"logs,omitempty"`
        Info      string          `json:"info,omitempty"`
        GasWanted int64           `json:"gas_wanted,omitempty"`
        GasUsed   int64           `json:"gas_used,omitempty"`
        Tx        Tx              `json:"tx,omitempty"`
        Timestamp string          `json:"timestamp,omitempty"`
    }

2.3.1.3 Vote votes to the some specific validators
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. code:: go

   func (sc stakingClient) AddShares(fromInfo keys.Info, passWd string, valAddrsStr []string, memo string, accNum, seqNum uint64) (resp sdk.TxResponse, err error)

Enter parameters:

+------------+-------------+---------------------------+
| Name       | Type        | Mark                      |
+============+=============+===========================+
| fromInfo   | keys.Info   | sender account            |
+------------+-------------+---------------------------+
| passWd     | string      | sender account password   |
+------------+-------------+---------------------------+
| valAddrsStr| string      | the string array of val   |
+------------+-------------+---------------------------+
| memo       | string      | remarks                   |
+------------+-------------+---------------------------+
| accNum     | uint64      | sender AccountNumber      |
+------------+-------------+---------------------------+
| seqNum     | uint64      | sender SequenceNumber     |
+------------+-------------+---------------------------+

Results returned:

.. code:: go

    // Tx reply message
    type TxResponse struct {
        Height    int64           `json:"height"`
        TxHash    string          `json:"txhash"`
        Codespace string          `json:"codespace,omitempty"`
        Code      uint32          `json:"code,omitempty"`
        Data      string          `json:"data,omitempty"`
        RawLog    string          `json:"raw_log,omitempty"`
        Logs      ABCIMessageLogs `json:"logs,omitempty"`
        Info      string          `json:"info,omitempty"`
        GasWanted int64           `json:"gas_wanted,omitempty"`
        GasUsed   int64           `json:"gas_used,omitempty"`
        Tx        Tx              `json:"tx,omitempty"`
        Timestamp string          `json:"timestamp,omitempty"`
    }

2.3.1.4 DestroyValidator deregisters the validator and unbond the min-self-delegation
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. code:: go

    func (sc stakingClient) DestroyValidator(fromInfo keys.Info, passWd string, memo string, accNum, seqNum uint64)(resp sdk.TxResponse, err error)

Enter parameters:

+------------+-------------+---------------------------+
| Name       | Type        | Mark                      |
+============+=============+===========================+
| fromInfo   | keys.Info   | sender account            |
+------------+-------------+---------------------------+
| passWd     | string      | sender account password   |
+------------+-------------+---------------------------+
| memo       | string      | remarks                   |
+------------+-------------+---------------------------+
| accNum     | uint64      | sender AccountNumber      |
+------------+-------------+---------------------------+
| seqNum     | uint64      | sender SequenceNumber     |
+------------+-------------+---------------------------+

Results returned:

.. code:: go

    // Tx reply message
    type TxResponse struct {
        Height    int64           `json:"height"`
        TxHash    string          `json:"txhash"`
        Codespace string          `json:"codespace,omitempty"`
        Code      uint32          `json:"code,omitempty"`
        Data      string          `json:"data,omitempty"`
        RawLog    string          `json:"raw_log,omitempty"`
        Logs      ABCIMessageLogs `json:"logs,omitempty"`
        Info      string          `json:"info,omitempty"`
        GasWanted int64           `json:"gas_wanted,omitempty"`
        GasUsed   int64           `json:"gas_used,omitempty"`
        Tx        Tx              `json:"tx,omitempty"`
        Timestamp string          `json:"timestamp,omitempty"`
    }

2.3.1.5 DestroyValidator deregisters the validator and unbond the min-self-delegation
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. code:: go

    func (sc stakingClient) CreateValidator(fromInfo keys.Info, passWd, pubkeyStr, moniker, identity, website, details, memo string, accNum, seqNum uint64) (resp sdk.TxResponse, err error)

Enter parameters:

+------------+-------------+---------------------------+
| Name       | Type        | Mark                      |
+============+=============+===========================+
| fromInfo   | keys.Info   | sender account            |
+------------+-------------+---------------------------+
| passWd     | string      | sender account password   |
+------------+-------------+---------------------------+
| pubkeyStr  | string      | string of public key      |
+------------+-------------+---------------------------+
| moniker    | string      | validator's name          |
+------------+-------------+---------------------------+
| identity   | string      | identity's signature      |
+------------+-------------+---------------------------+
| website    | string      | validator's website       |
+------------+-------------+---------------------------+
| details    | string      | validator's details       |
+------------+-------------+---------------------------+
| memo       | string      | remarks                   |
+------------+-------------+---------------------------+
| accNum     | uint64      | sender AccountNumber      |
+------------+-------------+---------------------------+
| seqNum     | uint64      | sender SequenceNumber     |
+------------+-------------+---------------------------+

Results returned:

.. code:: go

    // Tx reply message
    type TxResponse struct {
        Height    int64           `json:"height"`
        TxHash    string          `json:"txhash"`
        Codespace string          `json:"codespace,omitempty"`
        Code      uint32          `json:"code,omitempty"`
        Data      string          `json:"data,omitempty"`
        RawLog    string          `json:"raw_log,omitempty"`
        Logs      ABCIMessageLogs `json:"logs,omitempty"`
        Info      string          `json:"info,omitempty"`
        GasWanted int64           `json:"gas_wanted,omitempty"`
        GasUsed   int64           `json:"gas_used,omitempty"`
        Tx        Tx              `json:"tx,omitempty"`
        Timestamp string          `json:"timestamp,omitempty"`
    }

2.3.1.6 EditValidator edits the description on a validator by the owner
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. code:: go

    func (sc stakingClient) EditValidator(fromInfo keys.Info, passWd, moniker, identity, website, details, memo string, accNum, seqNum uint64) (resp sdk.TxResponse, err error)

Enter parameters:

+------------+-------------+---------------------------+
| Name       | Type        | Mark                      |
+============+=============+===========================+
| fromInfo   | keys.Info   | sender account            |
+------------+-------------+---------------------------+
| passWd     | string      | sender account password   |
+------------+-------------+---------------------------+
| moniker    | string      | validator's name          |
+------------+-------------+---------------------------+
| identity   | string      | identity's signature      |
+------------+-------------+---------------------------+
| website    | string      | validator's website       |
+------------+-------------+---------------------------+
| details    | string      | validator's details       |
+------------+-------------+---------------------------+
| memo       | string      | remarks                   |
+------------+-------------+---------------------------+
| accNum     | uint64      | sender AccountNumber      |
+------------+-------------+---------------------------+
| seqNum     | uint64      | sender SequenceNumber     |
+------------+-------------+---------------------------+

Results returned:

.. code:: go

    // Tx reply message
    type TxResponse struct {
        Height    int64           `json:"height"`
        TxHash    string          `json:"txhash"`
        Codespace string          `json:"codespace,omitempty"`
        Code      uint32          `json:"code,omitempty"`
        Data      string          `json:"data,omitempty"`
        RawLog    string          `json:"raw_log,omitempty"`
        Logs      ABCIMessageLogs `json:"logs,omitempty"`
        Info      string          `json:"info,omitempty"`
        GasWanted int64           `json:"gas_wanted,omitempty"`
        GasUsed   int64           `json:"gas_used,omitempty"`
        Tx        Tx              `json:"tx,omitempty"`
        Timestamp string          `json:"timestamp,omitempty"`
    }

2.3.1.7 RegisterProxy registers the identity of proxy
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. code:: go

    func (sc stakingClient) RegisterProxy(fromInfo keys.Info, passWd, memo string, accNum, seqNum uint64) (resp sdk.TxResponse, err error)

Enter parameters:

+------------+-------------+---------------------------+
| Name       | Type        | Mark                      |
+============+=============+===========================+
| fromInfo   | keys.Info   | sender account            |
+------------+-------------+---------------------------+
| passWd     | string      | sender account password   |
+------------+-------------+---------------------------+
| memo       | string      | remarks                   |
+------------+-------------+---------------------------+
| accNum     | uint64      | sender AccountNumber      |
+------------+-------------+---------------------------+
| seqNum     | uint64      | sender SequenceNumber     |
+------------+-------------+---------------------------+

Results returned:

.. code:: go

    // Tx reply message
    type TxResponse struct {
        Height    int64           `json:"height"`
        TxHash    string          `json:"txhash"`
        Codespace string          `json:"codespace,omitempty"`
        Code      uint32          `json:"code,omitempty"`
        Data      string          `json:"data,omitempty"`
        RawLog    string          `json:"raw_log,omitempty"`
        Logs      ABCIMessageLogs `json:"logs,omitempty"`
        Info      string          `json:"info,omitempty"`
        GasWanted int64           `json:"gas_wanted,omitempty"`
        GasUsed   int64           `json:"gas_used,omitempty"`
        Tx        Tx              `json:"tx,omitempty"`
        Timestamp string          `json:"timestamp,omitempty"`
    }

2.3.1.8 UnregisterProxy registers the identity of proxy
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. code:: go

    func (sc stakingClient) UnregisterProxy(fromInfo keys.Info, passWd, memo string, accNum, seqNum uint64) (resp sdk.TxResponse, err error)

Enter parameters:

+------------+-------------+---------------------------+
| Name       | Type        | Mark                      |
+============+=============+===========================+
| fromInfo   | keys.Info   | sender account            |
+------------+-------------+---------------------------+
| passWd     | string      | sender account password   |
+------------+-------------+---------------------------+
| memo       | string      | remarks                   |
+------------+-------------+---------------------------+
| accNum     | uint64      | sender AccountNumber      |
+------------+-------------+---------------------------+
| seqNum     | uint64      | sender SequenceNumber     |
+------------+-------------+---------------------------+

Results returned:

.. code:: go

    // Tx reply message
    type TxResponse struct {
        Height    int64           `json:"height"`
        TxHash    string          `json:"txhash"`
        Codespace string          `json:"codespace,omitempty"`
        Code      uint32          `json:"code,omitempty"`
        Data      string          `json:"data,omitempty"`
        RawLog    string          `json:"raw_log,omitempty"`
        Logs      ABCIMessageLogs `json:"logs,omitempty"`
        Info      string          `json:"info,omitempty"`
        GasWanted int64           `json:"gas_wanted,omitempty"`
        GasUsed   int64           `json:"gas_used,omitempty"`
        Tx        Tx              `json:"tx,omitempty"`
        Timestamp string          `json:"timestamp,omitempty"`
    }

2.3.1.8 BindProxy binds the staking tokens to a proxy
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. code:: go

    func (sc stakingClient) BindProxy(fromInfo keys.Info, passWd, proxyAddrStr, memo string, accNum, seqNum uint64) (resp sdk.TxResponse, err error)

Enter parameters:

+------------+-------------+---------------------------+
| Name       | Type        | Mark                      |
+============+=============+===========================+
| fromInfo   | keys.Info   | sender account            |
+------------+-------------+---------------------------+
| passWd     | string      | sender account password   |
+------------+-------------+---------------------------+
| memo       | string      | remarks                   |
+------------+-------------+---------------------------+
| accNum     | uint64      | sender AccountNumber      |
+------------+-------------+---------------------------+
| seqNum     | uint64      | sender SequenceNumber     |
+------------+-------------+---------------------------+

Results returned:

.. code:: go

    // Tx reply message
    type TxResponse struct {
        Height    int64           `json:"height"`
        TxHash    string          `json:"txhash"`
        Codespace string          `json:"codespace,omitempty"`
        Code      uint32          `json:"code,omitempty"`
        Data      string          `json:"data,omitempty"`
        RawLog    string          `json:"raw_log,omitempty"`
        Logs      ABCIMessageLogs `json:"logs,omitempty"`
        Info      string          `json:"info,omitempty"`
        GasWanted int64           `json:"gas_wanted,omitempty"`
        GasUsed   int64           `json:"gas_used,omitempty"`
        Tx        Tx              `json:"tx,omitempty"`
        Timestamp string          `json:"timestamp,omitempty"`
    }

2.3.1.9 UnbindProxy unbinds the staking tokens from a proxy
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. code:: go

    func (sc stakingClient) UnbindProxy(fromInfo keys.Info, passWd, memo string, accNum, seqNum uint64) (resp sdk.TxResponse, err error)

Enter parameters:

+------------+-------------+---------------------------+
| Name       | Type        | Mark                      |
+============+=============+===========================+
| fromInfo   | keys.Info   | sender account            |
+------------+-------------+---------------------------+
| passWd     | string      | sender account password   |
+------------+-------------+---------------------------+
| memo       | string      | remarks                   |
+------------+-------------+---------------------------+
| accNum     | uint64      | sender AccountNumber      |
+------------+-------------+---------------------------+
| seqNum     | uint64      | sender SequenceNumber     |
+------------+-------------+---------------------------+

Results returned:

.. code:: go

    // Tx reply message
    type TxResponse struct {
        Height    int64           `json:"height"`
        TxHash    string          `json:"txhash"`
        Codespace string          `json:"codespace,omitempty"`
        Code      uint32          `json:"code,omitempty"`
        Data      string          `json:"data,omitempty"`
        RawLog    string          `json:"raw_log,omitempty"`
        Logs      ABCIMessageLogs `json:"logs,omitempty"`
        Info      string          `json:"info,omitempty"`
        GasWanted int64           `json:"gas_wanted,omitempty"`
        GasUsed   int64           `json:"gas_used,omitempty"`
        Tx        Tx              `json:"tx,omitempty"`
        Timestamp string          `json:"timestamp,omitempty"`
    }

2.3.2 query
~~~~~~~~~~~


2.3.2.1 QueryValidators gets all the validators info
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. code:: go

    func (sc stakingClient) QueryValidators() (vals []types.Validator, err error)

Enter parameters: null

Results returned:

.. code:: go

    // Return array of validator
    []types.Validator

2.3.2.2 QueryValidator gets the info of a specific validator
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. code:: go

    func (sc stakingClient) QueryValidator(valAddrStr string) (val types.Validator, err error)

Enter parameters:

+------------+-------------+--------------------------+
| Name       | Type        | Mark                     |
+============+=============+==========================+
| valAddrStr | string      | string of validator addr |
+------------+-------------+--------------------------+

Results returned:

.. code:: go

    // Return validator info
    type Validator struct {
        OperatorAddress sdk.ValAddress `json:"operator_address" yaml:"operator_address"`
        ConsPubKey crypto.PubKey `json:"consensus_pubkey" yaml:"consensus_pubkey"`
        Jailed bool `json:"jailed" yaml:"jailed"`
        Status sdk.BondStatus `json:"status" yaml:"status"`
        Tokens sdk.Int `json:"tokens" yaml:"tokens"`
        DelegatorShares sdk.Dec `json:"delegator_shares" yaml:"delegator_shares"`
        Description Description `json:"description" yaml:"description"`
        UnbondingHeight int64 `json:"unbonding_height" yaml:"unbonding_height"`
        UnbondingCompletionTime time.Time `json:"unbonding_time" yaml:"unbonding_time"`
        Commission Commission `json:"commission" yaml:"commission"`
        MinSelfDelegation sdk.Dec `json:"min_self_delegation" yaml:"min_self_delegation"`
    }

2.3.2.3 QueryDelegator gets the detail info of a delegator
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. code:: go

    func (sc stakingClient) QueryDelegator(delAddrStr string) (delResp types.DelegatorResponse, err error)

Enter parameters:

+------------+-------------+--------------------------+
| Name       | Type        | Mark                     |
+============+=============+==========================+
| delAddrStr | string      | string of delegator addr |
+------------+-------------+--------------------------+

Results returned:

.. code:: go

    // Return delegator response
    type DelegatorResponse struct {
        DelegatorAddress     sdk.AccAddress   `json:"delegator_address" yaml:"delegator_address"`
        ValidatorAddresses   []sdk.ValAddress `json:"validator_address" yaml:"validator_address"`
        Shares               sdk.Dec          `json:"shares" yaml:"shares"`
        Tokens               sdk.Dec          `json:"tokens" yaml:"tokens"`
        UnbondedTokens       sdk.Dec          `json:"unbonded_tokens" yaml:"unbonded_tokens"`
        CompletionTime       time.Time        `json:"completion_time" yaml:"completion_time"`
        IsProxy              bool             `json:"is_proxy" yaml:"is_proxy"`
        TotalDelegatedTokens sdk.Dec          `json:"total_delegated_tokens" yaml:"total_delegated_tokens"`
        ProxyAddress         sdk.AccAddress   `json:"proxy_address" yaml:"proxy_address"`
    }


3 Information query
~~~~~~~~~~~~~~~~~~~

3.1 Query about account information
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. code:: go

    func (cli *OKChainClient) GetAccountInfoByAddr(addr string) (types.Account, error)

Enter paremeters:

+--------+----------+-------------------------+
| Name   | Type     | Mark                    |
+========+==========+=========================+
| addr   | string   | query account address   |
+--------+----------+-------------------------+

Results returned:

.. code:: go

    // Account API implementation class
    type BaseAccount struct {
        Address       AccAddress    `json:"address"`
        Coins         Coins         `json:"coins"`
        PubKey        crypto.PubKey `json:"public_key"`
        AccountNumber uint64        `json:"account_number"`
        Sequence      uint64        `json:"sequence"`
    }

3.2 Query about information on a cryptocurrency held in an account
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. code:: go

    func (cli *OKChainClient) GetTokensInfoByAddr(addr string) (types.AccountTokensInfo, error)

Enter parameters:

+--------+----------+-------------------------+
| Name   | Type     | Mark                    |
+========+==========+=========================+
| addr   | string   | query account address   |
+--------+----------+-------------------------+

Results returned:

.. code:: go

    // Return to account cryptocurrency information
    type AccountTokensInfo struct{
        Address    string    `json:"address"`
        Currencies CoinsInfo `json:"currencies"`
    }

3.3 Query about information on a specific cryptocurrency held in an account
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. code:: go

    func (cli *OKChainClient) GetTokenInfoByAddr(addr, symbol string) (types.AccountTokensInfo, error)

Enter parameters:

+----------+----------+-----------------------------+
| Name     | Type     | Mark                        |
+==========+==========+=============================+
| addr     | string   | query account address       |
+----------+----------+-----------------------------+
| symbol   | string   | query cryptocurrency name   |
+----------+----------+-----------------------------+

Results returned:

.. code:: go

    // Return to account cryptocurrency information
    type AccountTokensInfo struct{
        Address    string    `json:"address"`
        Currencies CoinsInfo `json:"currencies"`
    }

3.4 Query about information on all cryptocurrencies on-chain
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. code:: go

    func (cli *OKChainClient) GetTokensInfo() ([]types.Token, error)

Parameters entered: Null

Returned result:

.. code:: go

    // Return to cryptocurrency information segment
    []types.Token

3.5 Query about information on a specific cryptocurrency on-chain
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. code:: go

    func (cli *OKChainClient) GetTokenInfo(symbol string) (types.Token, error)

Enter parameters:

+----------+----------+-----------------------------+
| Name     | Type     | Mark                        |
+==========+==========+=============================+
| symbol   | string   | query cryptocurrency name   |
+----------+----------+-----------------------------+

Results returned:

.. code:: go

    // Return to cryptocurrency information
    type Token struct {
        Desc           string     `json:"desc"`
        Symbol         string     `json:"symbol"`
        OriginalSymbol string     `json:"originalSymbol"`
        WholeName      string     `json:"wholeName"`
        TotalSupply    int64      `json:"totalSupply"`
        Owner          AccAddress `json:"owner"`
        Mintable       bool       `json:"mintable"`
    }

3.6 Query about information on all trading pairs on-chain
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. code:: go

    func (cli *OKChainClient) GetProductsInfo() ([]types.TokenPair, error)

Parameters entered: Null

Results returned:

.. code:: go

    // Return to trading pair information segment
    []types.TokenPair

3.7 Query about information on market depth
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. code:: go

    func (cli *OKChainClient) GetDepthbookInfo(product string) (types.BookRes, error)

Enter parameters:

+-----------+----------+-------------------+
| Name      | Type     | Mark              |
+===========+==========+===================+
| product   | string   | query pair name   |
+-----------+----------+-------------------+

Results returned:

.. code:: go

    // Return to a trading pair information segment
    type BookRes struct {
        Asks []BookResItem `json:"asks"`
        Bids []BookResItem `json:"bids"`
    }

3.8 Query about candlestick data
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. code:: go

    func (cli *OKChainClient) GetCandlesInfo(product string, granularity, size int) ([][]string, error)

Enter parameters:

+---------------+----------+------------------------------------------------------------------------------------------------------------------------+
| Name          | Type     | Mark                                                                                                                   |
+===============+==========+========================================================================================================================+
| product       | string   | query pair name                                                                                                        |
+---------------+----------+------------------------------------------------------------------------------------------------------------------------+
| granularity   | int      | time granularity, time granularity, unit = second, eg.[60/180/300/900/1800/3600/7200/14400/21600/43200/86400/604800]   |
+---------------+----------+------------------------------------------------------------------------------------------------------------------------+
| size          | int      | number of candlestick data size: up to 1000 pieces of candlestick data                                                 |
+---------------+----------+------------------------------------------------------------------------------------------------------------------------+

Results returned:

.. code:: go

    // Return to a pair's candlestick data
    [][]string

3.9 Query about market data
~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. code:: go

    func (cli *OKChainClient) GetTickersInfo(count int) (types.Tickers, error)

Enter parameters:

+---------+--------+------------------------------------------------------------------------+
| Name    | Type   | Mark                                                                   |
+=========+========+========================================================================+
| count   | int    | size of market data obtained (default size = 100, if no input found)   |
+---------+--------+------------------------------------------------------------------------+

Results returned:

.. code:: go

    // Return to market data segment
    type Tickers []Ticker

3.10 Query about information on the latest transaction history of a trading pair
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. code:: go

    func (cli *OKChainClient) GetRecentTxRecord(product string, start, end, page, perPage int) ([]types.MatchResult, error)

Enter parameters:

+-----------+----------+-----------------------------------------------------------------------------------------------------------------------------------------------+
| Name      | Type     | Mark                                                                                                                                          |
+===========+==========+===============================================================================================================================================+
| product   | string   | query pair name                                                                                                                               |
+-----------+----------+-----------------------------------------------------------------------------------------------------------------------------------------------+
| start     | int      | start date (timestamp, unit = second)                                                                                                         |
+-----------+----------+-----------------------------------------------------------------------------------------------------------------------------------------------+
| end       | int      | end date (timestamp, unit = second)                                                                                                           |
+-----------+----------+-----------------------------------------------------------------------------------------------------------------------------------------------+
| page      | int      | page id                                                                                                                                       |
+-----------+----------+-----------------------------------------------------------------------------------------------------------------------------------------------+
| perPage   | int      | size per page (if you enter 0, the corresponding default number is 50; if you enter an integer greater than 200, the default number is 200)   |
+-----------+----------+-----------------------------------------------------------------------------------------------------------------------------------------------+

Results returned:

.. code:: go

    // Return to latest transaction history information segment
    []types.MatchResult

3.11 Query about information on unfilled orders in an address
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. code:: go

    func (cli *OKChainClient) GetOpenOrders(addr, product, side string, start, end, page, perPage int) ([]types.Order, error)

Enter parameters:

+-----------+----------+-----------------------------------------------------------------------------------------------------------------------------------------------+
| Name      | Type     | Mark                                                                                                                                          |
+===========+==========+===============================================================================================================================================+
| addr      | string   | account address                                                                                                                               |
+-----------+----------+-----------------------------------------------------------------------------------------------------------------------------------------------+
| product   | string   | query pair name                                                                                                                               |
+-----------+----------+-----------------------------------------------------------------------------------------------------------------------------------------------+
| side      | string   | "BUY" or "SELL"                                                                                                                               |
+-----------+----------+-----------------------------------------------------------------------------------------------------------------------------------------------+
| start     | int      | start date (timestamp, unit = second)                                                                                                         |
+-----------+----------+-----------------------------------------------------------------------------------------------------------------------------------------------+
| end       | int      | end date (timestamp, unit = second)                                                                                                           |
+-----------+----------+-----------------------------------------------------------------------------------------------------------------------------------------------+
| page      | int      | page id                                                                                                                                       |
+-----------+----------+-----------------------------------------------------------------------------------------------------------------------------------------------+
| perPage   | int      | size per page (if you enter 0, the corresponding default number is 50; if you enter an integer greater than 200, the default number is 200)   |
+-----------+----------+-----------------------------------------------------------------------------------------------------------------------------------------------+

Results returned:

.. code:: go

    // Return to unfilled order information segment
    []types.Order

3.12 Query about information on filled orders in an address
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. code:: go

    func (cli *OKChainClient) GetClosedOrders(addr, product, side string, start, end, page, perPage int) ([]types.Order, error)

Enter parameters:

+-----------+----------+-----------------------------------------------------------------------------------------------------------------------------------------------+
| Name      | Type     | Mark                                                                                                                                          |
+===========+==========+===============================================================================================================================================+
| addr      | string   | account address                                                                                                                               |
+-----------+----------+-----------------------------------------------------------------------------------------------------------------------------------------------+
| product   | string   | query pair name                                                                                                                               |
+-----------+----------+-----------------------------------------------------------------------------------------------------------------------------------------------+
| side      | string   | "BUY" or "SELL"                                                                                                                               |
+-----------+----------+-----------------------------------------------------------------------------------------------------------------------------------------------+
| start     | int      | start date (timestamp, unit = second)                                                                                                         |
+-----------+----------+-----------------------------------------------------------------------------------------------------------------------------------------------+
| end       | int      | end date (timestamp, unit = second)                                                                                                           |
+-----------+----------+-----------------------------------------------------------------------------------------------------------------------------------------------+
| page      | int      | page id                                                                                                                                       |
+-----------+----------+-----------------------------------------------------------------------------------------------------------------------------------------------+
| perPage   | int      | size per page (if you enter 0, the corresponding default number is 50; if you enter an integer greater than 200, the default number is 200)   |
+-----------+----------+-----------------------------------------------------------------------------------------------------------------------------------------------+

Results returned:

.. code:: go

    // Return to filled order information segment
    []types.Order

3.13 Query about information on transaction breakdown in an address
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. code:: go

    func (cli *OKChainClient) GetDealsInfo(addr, product, side string, start, end, page, perPage int) ([]types.Deal, error)

Enter parameters:

+-----------+----------+-----------------------------------------------------------------------------------------------------------------------------------------------+
| Name      | Type     | Mark                                                                                                                                          |
+===========+==========+===============================================================================================================================================+
| addr      | string   | account address                                                                                                                               |
+-----------+----------+-----------------------------------------------------------------------------------------------------------------------------------------------+
| product   | string   | query pair name                                                                                                                               |
+-----------+----------+-----------------------------------------------------------------------------------------------------------------------------------------------+
| side      | string   | "BUY" or "SELL"                                                                                                                               |
+-----------+----------+-----------------------------------------------------------------------------------------------------------------------------------------------+
| start     | int      | start date (timestamp, unit = second)                                                                                                         |
+-----------+----------+-----------------------------------------------------------------------------------------------------------------------------------------------+
| end       | int      | end date (timestamp, unit = second)                                                                                                           |
+-----------+----------+-----------------------------------------------------------------------------------------------------------------------------------------------+
| page      | int      | page id                                                                                                                                       |
+-----------+----------+-----------------------------------------------------------------------------------------------------------------------------------------------+
| perPage   | int      | size per page (if you enter 0, the corresponding default number is 50; if you enter an integer greater than 200, the default number is 200)   |
+-----------+----------+-----------------------------------------------------------------------------------------------------------------------------------------------+

Results returned:

.. code:: go

    // Return to transaction breakdown information segment
    []types.Deal

3.14 Query about information on transaction records in an address
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. code:: go

    func (cli *OKChainClient) GetTransactionsInfo(addr string, type_, start, end, page, perPage int) ([]types.Transaction, error)

Enter parameters:

+-----------+----------+-----------------------------------------------------------------------------------------------------------------------------------------------+
| Name      | Type     | Mark                                                                                                                                          |
+===========+==========+===============================================================================================================================================+
| addr      | string   | account address                                                                                                                               |
+-----------+----------+-----------------------------------------------------------------------------------------------------------------------------------------------+
| type\_    | int      | order type, 0: All types, 1:Transfer, 2:NewOrder, 3:CancelOrder                                                                               |
+-----------+----------+-----------------------------------------------------------------------------------------------------------------------------------------------+
| start     | int      | start Date (timestamp, unit = second)                                                                                                         |
+-----------+----------+-----------------------------------------------------------------------------------------------------------------------------------------------+
| end       | int      | end date (timestamp, unit = second)                                                                                                           |
+-----------+----------+-----------------------------------------------------------------------------------------------------------------------------------------------+
| page      | int      | page id                                                                                                                                       |
+-----------+----------+-----------------------------------------------------------------------------------------------------------------------------------------------+
| perPage   | int      | size per page (if you enter 0, the corresponding default number is 50; if you enter an integer greater than 200, the default number is 200)   |
+-----------+----------+-----------------------------------------------------------------------------------------------------------------------------------------------+

Results returned:

.. code:: go

    // Return to transaction record information segment
    []types.Transaction

4 Query about node data
~~~~~~~~~~~~~~~~~~~~~~~

4.1 Query about information on blocks at a height
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. code:: go

    func (cli *OKChainClient) QueryBlock(height *int64) (*ctypes.ResultBlock, error)

Enter parameters:

+----------+----------------------------------------+--------+
| Name     | Type                                   | Mark   |
+==========+========================================+========+
| height   | \*int64 \| block height (pointer) \|   |
+----------+----------------------------------------+--------+

Results returned:

.. code:: go

    // Return to block information
    type ResultBlock struct {
        BlockMeta *types.BlockMeta `json:"block_meta"`
        Block     *types.Block     `json:"block"`
    }

4.2 Query about a transaction
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. code:: go

    func (cli *OKChainClient) QueryTx(txHash []byte, prove bool) (*ctypes.ResultTx, error)

Enter parameters:

+----------+----------+----------------------------------------------------------------------+
| Name     | Type     | Mark                                                                 |
+==========+==========+======================================================================+
| txHash   | []byte   | transaction hash pending query must be a byte slice decoded by hex   |
+----------+----------+----------------------------------------------------------------------+
| prove    | bool     | default = false                                                      |
+----------+----------+----------------------------------------------------------------------+

Results returned:

.. code:: go

    // Query information returned
    type ResultTx struct {
        Hash     cmn.HexBytes           `json:"hash"`
        Height   int64                  `json:"height"`
        Index    uint32                 `json:"index"`
        TxResult abci.ResponseDeliverTx `json:"tx_result"`
        Tx       types.Tx               `json:"tx"`
        Proof    types.TxProof          `json:"proof,omitempty"`
    }

4.3 Query about all validator information
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. code:: go

    func (cli *OKChainClient) QueryCurrentValidators() (sdktypes.ResultValidatorsOutput, error)

Enter parameters: Null

Results returned:

.. code:: go

    // Return to all Validator information sets
    type ResultValidatorsOutput struct {
        BlockHeight int64             `json:"block_height"`
        Validators  []ValidatorOutput `json:"validators"`
    }

4.4 Query about all proposals
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. code:: go

    func (cli *OKChainClient) QueryProposals() (sdktypes.Proposals, error)

Enter parameters: Null

Results returned:

.. code:: go

    // Return to all proposal sets
    sdktypes.Proposals

4.5 Query about proposals based on proposal ID
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. code:: go

    func (cli *OKChainClient) QueryProposalByID(proposalID uint64) (sdktypes.Proposal, error)

Enter parameters:

+--------------+----------+---------------+
| Name         | Type     | Mark          |
+==============+==========+===============+
| proposalID   | uint64   | proposal id   |
+--------------+----------+---------------+

Results returned:

.. code:: go

    // Return to proposal information (API)
    type Proposal interface {
        GetProposalID() uint64
        SetProposalID(uint64)

        GetTitle() string
        SetTitle(string)

        GetDescription() string
        SetDescription(string)

        GetProposalType() ProposalKind
        SetProposalType(ProposalKind)

        GetStatus() ProposalStatus
        SetStatus(ProposalStatus)

        GetFinalTallyResult() TallyResult
        SetFinalTallyResult(TallyResult)

        GetSubmitTime() time.Time
        SetSubmitTime(time.Time)

        GetDepositEndTime() time.Time
        SetDepositEndTime(time.Time)

        GetTotalDeposit() DecCoins
        SetTotalDeposit(DecCoins)

        GetVotingStartTime() time.Time
        SetVotingStartTime(time.Time)

        GetVotingEndTime() time.Time
        SetVotingEndTime(time.Time)

        String() string

        GetProtocolDefinition() ProtocolDefinition
        SetProtocolDefinition(ProtocolDefinition)
    }

