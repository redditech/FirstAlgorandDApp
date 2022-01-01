const { default: algosdk } = require('algosdk')

require('dotenv').config()

const walletAddress1 = process.env.ALGO_WALLET_ADDRESS_1
const walletAddress2 = process.env.ALGO_WALLET_ADDRESS_2
const walletAddress3 = process.env.ALGO_WALLET_ADDRESS_3

const multisigParams = {
    version: 1,
    threshold: 2,
    addrs: [
        walletAddress1,
        walletAddress2,
        walletAddress3,
    ],
}

// Calculate multisig account
const multisigAddress = algosdk.multisigAddress(multisigParams);
console.log("Constructing with threshold: ", multisigParams.threshold);
console.log("Calculated multisig address: ", multisigAddress);
