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

2 Tx function
~~~~~~~~~~~~~

2.1 Transfer
~~~~~~~~~~~~

.. code:: go

    func (cli *OKChainClient) Send(fromInfo keys.Info, passWd, toAddr, coinsStr, memo string, accNum, seqNum uint64) (resp types.TxResponse, err error) 

Enter parameters:

+------------+-------------+---------------------------+
| Name       | Type        | Mark                      |
+============+=============+===========================+
| fromInfo   | keys.Info   | sender account            |
+------------+-------------+---------------------------+
| passWd     | string      | sender account password   |
+------------+-------------+---------------------------+
| toAddr     | string      | recipient address         |
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
        Code      uint32          `json:"code,omitempty"`
        Data      string          `json:"data,omitempty"`
        RawLog    string          `json:"raw_log,omitempty"`
        Logs      ABCIMessageLogs `json:"logs,omitempty"`
        Info      string          `json:"info,omitempty"`
        GasWanted int64           `json:"-"`
        GasUsed   int64           `json:"-"`
        Tags      StringTags      `json:"tags,omitempty"`
        Codespace string          `json:"codespace,omitempty"`
        Tx        Tx              `json:"tx,omitempty"`
        Timestamp string          `json:"timestamp,omitempty"`
    }

2.2 Maker
~~~~~~~~~

.. code:: go

    func (cli *OKChainClient) NewOrder(fromInfo keys.Info, passWd, product, side, price, quantity, memo string, accNum, seqNum uint64) (types.TxResponse, error)

Enter parameters:

+------------+-------------+-----------------------------------------------+
| Name       | Type        | Mark                                          |
+============+=============+===============================================+
| fromInfo   | keys.Info   | maker account                                 |
+------------+-------------+-----------------------------------------------+
| passWd     | string      | maker account password                        |
+------------+-------------+-----------------------------------------------+
| product    | string      | pair name                                     |
+------------+-------------+-----------------------------------------------+
| side       | string      | "BUY" or "SELL"                               |
+------------+-------------+-----------------------------------------------+
| price      | string      | maker price (up to 1 decimal place)           |
+------------+-------------+-----------------------------------------------+
| quantity   | string      | maker order number (up to 2 decimal places)   |
+------------+-------------+-----------------------------------------------+
| memo       | string      | remarks                                       |
+------------+-------------+-----------------------------------------------+
| accNum     | uint64      | maker AccountNumber                           |
+------------+-------------+-----------------------------------------------+
| seqNum     | uint64      | maker SequenceNumber                          |
+------------+-------------+-----------------------------------------------+

Results returned:

.. code:: go

    // Tx reply message
    type TxResponse struct {
        Height    int64           `json:"height"`
        TxHash    string          `json:"txhash"`
        Code      uint32          `json:"code,omitempty"`
        Data      string          `json:"data,omitempty"`
        RawLog    string          `json:"raw_log,omitempty"`
        Logs      ABCIMessageLogs `json:"logs,omitempty"`
        Info      string          `json:"info,omitempty"`
        GasWanted int64           `json:"-"`
        GasUsed   int64           `json:"-"`
        Tags      StringTags      `json:"tags,omitempty"`
        Codespace string          `json:"codespace,omitempty"`
        Tx        Tx              `json:"tx,omitempty"`
        Timestamp string          `json:"timestamp,omitempty"`
    }

2.3 Taker
~~~~~~~~~

.. code:: go

    func (cli *OKChainClient) CancelOrder(fromInfo keys.Info, passWd, orderID, memo string, accNum, seqNum uint64) (types.TxResponse, error) 

Enter parameters:

+------------+-------------+--------------------------+
| Name       | Type        | Mark                     |
+============+=============+==========================+
| fromInfo   | keys.Info   | taker account            |
+------------+-------------+--------------------------+
| passWd     | string      | taker account password   |
+------------+-------------+--------------------------+
| orderID    | string      | taker order id           |
+------------+-------------+--------------------------+
| memo       | string      | remarks                  |
+------------+-------------+--------------------------+
| accNum     | uint64      | taker AccountNumber      |
+------------+-------------+--------------------------+
| seqNum     | uint64      | taker SequenceNumber     |
+------------+-------------+--------------------------+

Results returned:

.. code:: go

    // Tx reply message
    type TxResponse struct {
        Height    int64           `json:"height"`
        TxHash    string          `json:"txhash"`
        Code      uint32          `json:"code,omitempty"`
        Data      string          `json:"data,omitempty"`
        RawLog    string          `json:"raw_log,omitempty"`
        Logs      ABCIMessageLogs `json:"logs,omitempty"`
        Info      string          `json:"info,omitempty"`
        GasWanted int64           `json:"-"`
        GasUsed   int64           `json:"-"`
        Tags      StringTags      `json:"tags,omitempty"`
        Codespace string          `json:"codespace,omitempty"`
        Tx        Tx              `json:"tx,omitempty"`
        Timestamp string          `json:"timestamp,omitempty"`
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

