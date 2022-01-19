require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace creek olympic short north rescue spawn pull hunt kitten bottom shine'; 
let testAccounts = [
"0xcb3dbb117519ff33cbe290dd281c7991384374ef20097b03b466df49a5a5bd0b",
"0x54ddd7c769b1c7d38988044ad7f0d7f7d38776cf082fcdf5313f4e2426c32c99",
"0x8f7ef6c9517c08281ef863a2ffd535d0a2b0f4e432f6e3db805a662bd1596737",
"0x9b8572ae05afb7995994b6be7439183f13dbcfbf46fec9c2145fff5b37af4867",
"0x119e8a6fd0ab4b73ee53fe78ccd49cd8487098e675418244289bcdd2cd2413b7",
"0xaa905f9fe72d0dba497010a9599116905f5790fe79056b3cd55fb6f9da4a1d3c",
"0x7df47b12bee43456fb240adf95fa993abbef12871cc7e31a6f928ba339539ac4",
"0x34ee57ed8cc34141d055ef285fb7315865bbe77eb3dc119a07f445d1cea258d1",
"0x46e513482efd7d461550e81fb15da8cd5ff5b735dd63d27ef8302b5025fbd278",
"0xe086878086ed31448fdf1fa2240206aa26bd779bb6fd6db351b00c26a7cb8f5a"
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

