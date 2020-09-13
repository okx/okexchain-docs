.. raw:: html

   <!---
   order: 2
   --->

Command line tool
=================

Introduction
------------

``okexchaintool`` is a tool for simple debugging.

Accept hexadecimal and base64 formats and return readable responses.

We usually encode the bytes as hex in the log, but JSON format encodes
the bytes as base64.

Usage
-----

okexchaintool pubkey
~~~~~~~~~~~~~~~~~~

The public key is converted in different formats. The following two
commands get the same result:
``bash okexchaintool pubkey TZTQnfqOsi89SeoXVnIw+tnFJnr4X8qVC0U8AsEmFk4= okexchaintool pubkey 4D94D09DFA8EB22F3D49EA17567230FAD9C5267AF85FCA950B453C02C126164E``
return

.. code:: bash

    Address: AB848E791827483D950C85F9CFC77D901FEE1E73
    Hex: 4D94D09DFA8EB22F3D49EA17567230FAD9C5267AF85FCA950B453C02C126164E
    JSON (base64): {"type":"tendermint/PubKeyEd25519","value":"TZTQnfqOsi89SeoXVnIw+tnFJnr4X8qVC0U8AsEmFk4="}
    Bech32 Acc: okchainpub1zcjduepqfk2dp80636ez702fagt4vu3sltvu2fn6lp0u49gtg57q9sfxze8qekanju
    Bech32 Validator Operator: okchainvaloperpub1zcjduepqfk2dp80636ez702fagt4vu3sltvu2fn6lp0u49gtg57q9sfxze8qzrmxpe
    Bech32 Validator Consensus: okchainvalconspub1zcjduepqfk2dp80636ez702fagt4vu3sltvu2fn6lp0u49gtg57q9sfxze8q0fuqw3

okexchaintool tx
~~~~~~~~~~~~~~

Input hex/base64 encoded tx and return full JSON response

.. code:: bash

    okexchaintool tx <hex or base64 transaction>
    okexchaintool tx tQEoKBapCkPJ7iE/ChR4HjtQEydR5yWMX4aw3+6hy78kcBIUYekVgLqZUXYQ32AIYki+ocuP4wMaEQoDb2tiEgoxMDAwMDAwMDAwEmoKJuta6YchAgYaL1tZ7ekqvweQhKojG8sDHUfN23qJWviAsTDIWvYUEkDuA/WIXaA1hccZUzn/DNgytttVfUR8wXxberfB0ZKMoQ2rtR1p/le4wl066D1SRR9xuTs0iBeVxzwgoEFdfbeW

return

.. code:: json

    {
      "type": "cosmos-sdk/StdTx",
      "value": {
        "msg": [
          {
            "type": "token/Send",
            "value": {
              "from_address": "okchain10q0rk5qnyag7wfvvt7rtphlw589m7frsmyq4ya",
              "to_address": "okchain1v853tq96n9ghvyxlvqyxyj97589clccr33yr7a",
              "amount": [
                {
                  "denom": "okt",
                  "amount": "10.00000000"
                }
              ]
            }
          }
        ],
        "signatures": [
          {
            "pub_key": {
              "type": "tendermint/PubKeySecp256k1",
              "value": "AgYaL1tZ7ekqvweQhKojG8sDHUfN23qJWviAsTDIWvYU"
            },
            "signature": "7gP1iF2gNYXHGVM5/wzYMrbbVX1EfMF8W3q3wdGSjKENq7Udaf5XuMJdOug9UkUfcbk7NIgXlcc8IKBBXX23lg=="
          }
        ],
        "memo": ""
      }
    }

okexchaintool addr
~~~~~~~~~~~~~~~~

okexchain account address format conversion
<<<<<<< HEAD
``bash okexchaintool addr okchain1v853tq96n9ghvyxlvqyxyj97589clccr33yr7a``
=======
``bash okchaintool addr okchain1v853tq96n9ghvyxlvqyxyj97589clccr33yr7a``
>>>>>>> master

return

.. code:: bash

    Address: [97 233 21 128 186 153 81 118 16 223 96 8 98 72 190 161 203 143 227 3]
    Address (hex): 61E91580BA99517610DF60086248BEA1CB8FE303
    Bech32 Acc: okchain1v853tq96n9ghvyxlvqyxyj97589clccr33yr7a
    Bech32 Val: okchainvaloper1v853tq96n9ghvyxlvqyxyj97589clccrd04xtm

okexchaintool raw-bytes
~~~~~~~~~~~~~~~~~~~~~

output raw bytes (eg. [10 21 13 255]) and convert them into hex

.. code:: bash

    okexchaintool raw-bytes <raw-bytes>
    okexchaintool raw-bytes "[10 21 13 255]"

return

.. code:: bash

    0A150DFF

okexchaintool hack
~~~~~~~~~~~~~~~~

for the current ``okexchaind`` state
<<<<<<< HEAD
``bash  okexchaintool hack $HOME/.okexchaind```
=======
``bash  okchaintool hack $HOME/.okexchaind```
>>>>>>> master

return

.. code:: bash

    I[2019-12-18|18:18:23.281][8016] Protocol V0: LoadContext
    D[2019-12-18|18:18:23.282][8016] &{EnableBackend:false EnableMktCompute:false LogSQL:false CleanUpsKeptDays:map[kline_m1:120 kline_m3:120 kline_m5:120] CleanUpsTime:00:00:00 OrmEngine:{EngineType:sqlite3 ConnectStr:/Users/hanxueyang/.okexchaind/data/sqlite3/backend.sqlite3}}
    I[2019-12-18|18:18:23.282][8016] launch app with version: 0
    ID CommitID{[]:0}
    LastBlockHeight 0

