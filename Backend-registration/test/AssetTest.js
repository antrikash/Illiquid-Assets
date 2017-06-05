var Assettoken = artifacts.require("./Asset.sol");

contract('Illiquid Assets - Assets testing',function(accounts) {
var assetName = "Test";
var quantity = 15;
var priceOfEach = 2000;
var assetType = "Bonds";
var assetID = "abc123";


it("should return true if successfully asset added and fetch all asset IDs", function() {   
    return Assettoken.deployed().then(function(instance){
     return instance.addNewAsset(assetName, quantity, priceOfEach, assetType, assetID);     
     then(function(){
    return instance.getAssetIDs();          
     }).then(function(count){          
    if(count != 0){
       return true;
      }
      else {
        return false;
      }
    }).then(function(fin_count) {
      assert.equal(fin_count,true,"Test failed: Error in adding asset or in fetching all asset IDs"); 
    });
  });
});

it("should return true if able to fetch all asset names", function() {   
    return Assettoken.deployed().then(function(instance){
    return instance.getAssetNames();          
     }).then(function(count){          
    if(count != 0){
       return true;
      }
      else {
        return false;
      }
    }).then(function(fin_count) {
      assert.equal(fin_count,true,"Test failed: Error in fetching all asset names"); 
    });
  });


it("should return true if able to fetch all asset details", function() {   
    return Assettoken.deployed().then(function(instance){
    return instance.getAssetsDetails();          
     }).then(function(count){          
    if(count != 0){
       return true;
      }
      else {
        return false;
      }
    }).then(function(fin_count) {
      assert.equal(fin_count,true,"Test failed: Error in fetching all asset details"); 
    });
  });

it("should return true if able to fetch single asset details by assetID", function() {   
    return Assettoken.deployed().then(function(instance){
    return instance.getAssetDetailsbyAssetID("abc123");          
     }).then(function(count){          
    if(count != 0){
       return true;
      }
      else {
        return false;
      }
    }).then(function(fin_count) {
      assert.equal(fin_count,true,"Test failed: Error in fetching asset details by assetID"); 
    });
  });

it("should fetch asset name by passing asset id", function() {
return Assettoken.deployed().then(function(instance){
return instance.getAssetNamebyAssetID("abc123");
}).then(function(asset_name) {

    function myFunction() {                         
    asset_name = asset_name.split("\d+[\+-")[0];
    assert.equal(asset_name,"Test","Test failed: Asset name is not Test for Asset ID: abc123");
    }
});
});

it("should fetch asset quantity by passing asset id", function() {
return Assettoken.deployed().then(function(instance){
return instance.getAssetQuantitybyAssetID("abc123");
}).then(function(qty) {
      assert.equal(qty,15,"Test failed: Asset quantity is not 15 for Asset ID: abc123");
});
});

it("should fetch asset type by passing asset id", function() {
return Assettoken.deployed().then(function(instance){
return instance.getAssetTypebyAssetID("abc123");
}).then(function(asset_type) {

    function myFunction() {                         
    asset_type = asset_type.split("\d+[\+-")[0];
    assert.equal(asset_type,"Bonds","Test failed: Asset type is not Bonds for Asset ID: abc123");
    }
});
});

it("should fetch price of each asset by passing asset id", function() {
return Assettoken.deployed().then(function(instance){
return instance.getEachAssetPricebyAssetID("abc123");
}).then(function(price) {
      assert.equal(price,2000,"Test failed: Asset price is not 2000 for Asset ID: abc123");
});
});

});
