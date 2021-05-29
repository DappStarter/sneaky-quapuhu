require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict industry flame street name reward stereo come install dry equal gas'; 
let testAccounts = [
"0x9da3df763b0bf3bf5d102b39c207ee94e77207e4f11330c10e409c14ad3c421e",
"0xc7e35749cae17ebfb3292c6ad592538dc9f92279bdf5217a507bba710b916796",
"0xb3cea417ab5e36dfeeab155644bb10ddbca15e1f35bedf5cdb2f7ee27deefb3b",
"0x4fd7c49d48feb9ff3d893d93fea88ea8c3f794baad627118c0969974d24820ba",
"0xaf19774fce4158a3b9af2392d5d8355e6a117e1a0725cb939437551924718530",
"0xe903b2ef5c7186fe4c6373e740a2e0ffb0d99f08f24458dc3b9389942929b907",
"0xe2688fe9f41e57d1b4dde5a5f5a2401d20ec943fdc2c6ff6f5b5694614e88262",
"0xa28ef30b444c2b8fb551dc51b8d292fe1b2e2f94d125b94f5f1279145fdbf681",
"0x6f932c5385c79419aad09bd140a2db679c8bd0732404c51fcc68d8c1f07338a4",
"0x87bf66d34d6839759affb15f6a74f527ebc7ffdac4d3418dc390013815778a72"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

