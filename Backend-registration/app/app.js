var web3 = require("web3");
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
var account_asset = '0x243c0f33b9bef1467fca1783cf19d90c4ebd6761';
var addr_asset = '0x8c4abf4da330ace8cd436bee7e8fa63e42411bec';
var abi_asset = [{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"UserPasswords","outputs":[{"name":"","type":"bytes32"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_assetName","type":"bytes32"},{"name":"_quantity","type":"uint256"},{"name":"_priceOfEach","type":"uint256"},{"name":"_assetType","type":"bytes32"},{"name":"_assetID","type":"uint256"}],"name":"addNewAsset","outputs":[{"name":"addAsset_Status","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"Users","outputs":[{"name":"PAN_id","type":"bytes32"},{"name":"userID","type":"bytes32"},{"name":"userPwd","type":"bytes32"},{"name":"mobile","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_assetID","type":"uint256"}],"name":"getAssetDetailsbyAssetID","outputs":[{"name":"","type":"bytes32"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"bytes32"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"Assets","outputs":[{"name":"assetName","type":"bytes32"},{"name":"quantity","type":"uint256"},{"name":"priceOfEach","type":"uint256"},{"name":"assetType","type":"bytes32"},{"name":"assetID","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_panID","type":"bytes32"},{"name":"_userID","type":"bytes32"},{"name":"_userPwd","type":"bytes32"},{"name":"_mobile","type":"uint256"}],"name":"addNewUser","outputs":[{"name":"addUser_status","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"UserUniqueIDs","outputs":[{"name":"","type":"bytes32"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_asstname","type":"bytes32"}],"name":"getAssetDetailsbyAssetName","outputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"bytes32"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_panID","type":"bytes32"}],"name":"getUserDetailsbyPANID","outputs":[{"name":"_userID","type":"bytes32"}],"payable":false,"type":"function"}];

var name;
var qty;
var prc;
var typ;
var assettoken = web3.eth.contract(abi_asset).at(addr_asset);
function calculate(){
    qty = document.getElementById("quantity").value;
    prc = document.getElementById("price").value;
    var tot ;
    tot = qty * prc;
    document.getElementById("total").value = tot;
}

function saveAssetData(){

    name = document.getElementById("asset-name").value;
    qty = document.getElementById("quantity").value;
    prc = document.getElementById("price").value;
    typ = document.getElementById("type").value;
	var asset_ID = hashFnv32a(name+Date.now(),true);
    alert("Asset Successfully added and asset unique ID is: " + asset_ID);
var result = assettoken.addNewAsset(name, qty, prc, typ, asset_ID, { from: account_asset, gas: 2000000 });
}

function resetAssetData(){
    document.getElementById("asset-name").value = "";
    document.getElementById("quantity").value ="";
    document.getElementById("price").value = "";
    document.getElementById("total").value = "";

}
function saveUserData(){

    var first_name = document.getElementById("first-name").value;
    var last_name = document.getElementById("last-name").value;
    var mobileNumber = document.getElementById("mob-number").value;
    var walletAddr = document.getElementById("wallet-address").value;
    var PAN_Number = document.getElementById("pan-number").value;
    var password =  document.getElementById("password").value;
	var str = mobileNumber.concat(PAN_Number);
    var user_ID = hashFnv32a(str,true);
    alert(" Hi " + first_name + "\n Successfully registered \n your unique ID is: " + user_ID);
var result = assettoken.addNewUser(first_name, last_name , walletAddr , PAN_Number, user_ID, password, mobileNumber, { from: account_asset, gas: 200000 });

}

function hashFnv32a(str, asString, seed) {
    /*jshint bitwise:false */
    var i, l,
        hval = (seed === undefined) ? 0x811c9dc5 : seed;

    for (i = 0, l = str.length; i < l; i++) {
        hval ^= str.charCodeAt(i);
        hval += (hval << 1) + (hval << 4) + (hval << 7) + (hval << 8) + (hval << 24);
    }
    if( asString ){
        // Convert to 8 digit hex string
        return ("0000000" + (hval >>> 0).toString(16)).substr(-8);
    }
    return hval >>> 0;
}




function resetUserData(){

    document.getElementById("mob-number").value = "";
    document.getElementById("pan-number").value = "";
    document.getElementById("password").value = "";
    document.getElementById("conf-password").value = "";
    
}
