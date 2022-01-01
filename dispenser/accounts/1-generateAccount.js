const algosdk = require("algosdk");

const account = algosdk.generateAccount();
const passphrase = algosdk.secretKeyToMnemonic(account.sk);
console.log("Account Address: " + account.addr);
console.log(" Account Mnemonic: " + passphrase);