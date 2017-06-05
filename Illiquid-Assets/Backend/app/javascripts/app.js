
// var crc = require('../node_modules/crc');

var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));



var at_abi = [{"constant":true,"inputs":[{"name":"_holder","type":"address"}],"name":"getATBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_owner","type":"address"}],"name":"setATOwner","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"ATtransfer","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"ATtransferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOfAT","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"ATOwner","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowanceOfAT","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"inputs":[],"payable":false,"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"assetTransfer","type":"event"}];

var at_add = "0x89f9e5fe1dc042275ed478366b39a583836fd262";

var ct_abi = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_holder","type":"address"}],"name":"getCTBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOfCT","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"CTtransfer","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_owner","type":"address"}],"name":"setCTOwner","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"CTtransferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"CTOwner","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowanceOfCT","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"inputs":[],"payable":false,"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"currencyTransfer","type":"event"}]; 

var ct_add = "0xa66ff637f0af25f80c6107c99a65a676cefa0f1e";

var account_exchange = web3.eth.accounts[0];

var account_at = web3.eth.accounts[1];

var account_ct = web3.eth.accounts[2];

var ex_abi = [{"constant":true,"inputs":[{"name":"_holder","type":"address"}],"name":"getATBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"assetToken","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_owner","type":"address"}],"name":"setATOwner","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_holder","type":"address"}],"name":"getCTBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"ATtransfer","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOfCT","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"CTtransfer","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"ATtransferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"currencyToken","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_amt","type":"uint256"},{"name":"_seller","type":"address"}],"name":"tradeCurrencyWithAsset","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_amt","type":"uint256"},{"name":"_buyer","type":"address"}],"name":"tradeAssetWithCurrency","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_owner","type":"address"}],"name":"setCTOwner","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOfAT","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"CTtransferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"addressOfTokenUsedAsAsset","type":"address"},{"name":"addressOfTokenUsedAsCurrency","type":"address"}],"name":"setExchange","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"ATOwner","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowanceOfAT","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"CTOwner","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowanceOfCT","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"currencyTransfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"assetTransfer","type":"event"}];

var ex_add = "0x8a9780fab6107b2ab2094e4b1b5639727915e6f8";

var ct = web3.eth.contract(ct_abi).at(ct_add);

var at = web3.eth.contract(at_abi).at(at_add);

var e = web3.eth.contract(ex_abi).at(ex_add);

at.setATOwner(account_at,{from: account_exchange, gas: 200000});

ct.setCTOwner(account_ct,{from: account_exchange, gas: 200000});

e.setExchange(at_add, ct_add, {from: web3.eth.accounts[0], gas: 200000});

// var at = AToken.at(AToken.address);

// var ct = CToken.at(CToken.address);

// var co = ct.CTOwner(function(_err, _res){if(!_err){console.log(_res)}else{console.log(_err)}});

// var ao = at.ATOwner.call();

// // var ab = web3.Toat.getATBalance(ao);

// var ab = at.getATBalance(account_at, function(_err, _res){if(!_err){console.log(_res)}else{console.log(_err)}});

// var cb = ct.getCTBalance(account_ct, function(_err, _res){if(!_err){console.log(_res)}else{console.log(_err)}});

/*e.tradeCurrencyWithAsset(200, {from: web3.eth.accounts[2], gas: 200000})

e.tradeAssetWithCurrency(200, {from: web3.eth.accounts[1], gas: 200000})

var cb = ct.getCTBalance(account_ct, function(_err, _res){if(!_err){console.log(_res)}else{console.log(_err)}})

var ab = ct.getCTBalance(account_at, function(_err, _res){if(!_err){console.log(_res)}else{console.log(_err)}})*/


var ab = at.getATBalance(account_at, function(_err, _res){if(!_err){console.log("Before trade Asset balance of seller: ",_res.c[0])}else{console.log(_err)}});

var cb = ct.getCTBalance(account_ct, function(_err, _res){if(!_err){console.log("Before trade Currency balance of buyer: ",_res.c[0])}else{console.log(_err)}});

var cb = at.getATBalance(account_ct, function(_err, _res){if(!_err){console.log("Before trade Asset balance of buyer: ",_res.c[0])}else{console.log(_err)}});

var ab = ct.getCTBalance(account_at, function(_err, _res){if(!_err){console.log("Before trade Currency balance of seller: ",_res.c[0])}else{console.log(_err)}});

//console.log("Starting trade");//console.log("Asset balance of seller: ",

setTimeout(function(){
console.log("Starting trade");
console.log("Amount to trade: 500")

e.tradeCurrencyWithAsset(500, account_at, {from: account_ct, gas: 200000},function(_err,_res){if(!_err){console.log("Receipt of currency transaction", web3.eth.getTransactionReceipt(_res));}else{console.log(_err)}});

e.tradeAssetWithCurrency(500, account_ct, {from: account_at, gas: 200000},function(_err,_res){if(!_err){console.log("Receipt of asset transaction", web3.eth.getTransactionReceipt(_res));}else{console.log(_err)}});

var ab = at.getATBalance(account_at, function(_err, _res){if(!_err){console.log("After trade Asset balance of seller: ",_res.c[0])}else{console.log(_err)}});

var cb = ct.getCTBalance(account_ct, function(_err, _res){if(!_err){console.log("After trade Currency balance of buyer: ",_res.c[0])}else{console.log(_err)}});

var ab = ct.getCTBalance(account_at, function(_err, _res){if(!_err){console.log("After trade Currency balance of seller: ",_res.c[0])}else{console.log(_err)}});

var cb = at.getATBalance(account_ct, function(_err, _res){if(!_err){console.log("After trade Asset balance of buyer: ",_res.c[0])}else{console.log(_err)}});
}, 3000);


setTimeout(function(){
console.log("Trade done");

}, 5000);

