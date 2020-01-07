## Create Genesis File and Start the Network
```bash
# You can run all of these commands from your home directory
cd $HOME

# Initialize the genesis.json file that will help you to bootstrap the network
okchaind init --chain-id okchain -v

# Create a key to hold your validator account
okchaincli keys testaccount

# Add that key into the genesis.app_state.accounts array in the genesis file
# NOTE: this command lets you set the number of coins. Make sure this account has some coins
# with the genesis.app_state.okt.params.bond_denom denom, the default is okt
okchaind add-genesis-account $(okchaincli keys show testaccount -a) 10okt

okchaincli config chain-id okchain
okchaincli config trust-node true
okchaincli config output json
okchaincli config indent true

# Now its safe to start `okchaind`
okchaind start
```

This setup puts all the data for okchaind in ~/.okchaind. You can examine the genesis file you created at ~/.okchaind/config/genesis.json. With this configuration okchaincli is also ready to use and has an account with tokens (both `okt` and custom).
