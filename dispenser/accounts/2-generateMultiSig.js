const { default: algosdk } = require('algosdk')

require('dotenv').config()

const walletAddress1 = process.env.ALGO_WALLET_ADDRESS_1
const walletAddress2 = process.env.ALGO_WALLET_ADDRESS_2
const walletAddress3 = process.env.ALGO_WALLET_ADDRESS_3

let multisigParams = {
    version: 1,
    threshold: 2,
    addrs: [ 
        walletAddress1,
        walletAddress2,
        walletAddress3,
    ],
}

// Calculate multisig account
let multisigAddress = algosdk.multisigAddress(multisigParams);
console.log("Using Address 1: ", walletAddress1);
console.log("Using Address 2: ", walletAddress2);
console.log("Using Address 3: ", walletAddress3);
console.log("Constructing with threshold: ", multisigParams.threshold);
console.log("Calculated multisig address: ", multisigAddress);

//the ordering of the accounts matter, different order, different address generated
console.log("-----------");
console.log("Changing the ordering of the accounts to show different result");
multisigParams = {
    version: 1,
    threshold: 2,
    addrs: [ 
        walletAddress2,
        walletAddress3,
        walletAddress1,
    ],
}

// Calculate multisig account
multisigAddress = algosdk.multisigAddress(multisigParams);
console.log("Using Address 1: ", walletAddress3);
console.log("Using Address 2: ", walletAddress2);
console.log("Using Address 3: ", walletAddress1);
console.log("Constructing with threshold: ", multisigParams.threshold);
console.log("Calculated multisig address: ", multisigAddress);

//similarly changing the threshold would have a different address generated
console.log("-----------");
console.log("Changing the threshold from (2 of 3) to (1 of 3) to show different result");
multisigParams = {
    version: 1,
    threshold: 1,
    addrs: [ 
        walletAddress2,
        walletAddress3,
        walletAddress1,
    ],
}
// Calculate multisig account
multisigAddress = algosdk.multisigAddress(multisigParams);
console.log("Using Address 1: ", walletAddress3);
console.log("Using Address 2: ", walletAddress2);
console.log("Using Address 3: ", walletAddress1);
console.log("Constructing with threshold: ", multisigParams.threshold);
console.log("Calculated multisig address: ", multisigAddress);