pragma solidity ^0.4.8;

import "./User.sol";


contract Asset is User{

assetDetails[] public Assets;

mapping(bytes32 => bytes32) public assetUser;

struct assetDetails{
    bytes32 assetName;
    uint quantity;
    uint priceOfEach;
    bytes32 assetType;
	bytes32 assetID;
}

function linkUserAsset(bytes32 _userID, bytes32 _assetID) returns (bool success){
assetUser[_userID] = _assetID;
return true;
}

function addNewAsset(bytes32 _assetName, uint _quantity, uint _priceOfEach, bytes32 _assetType, bytes32 _assetID) returns (bool addAsset_Status){

assetDetails memory newRegdAsset;
newRegdAsset.assetName = _assetName;
newRegdAsset.quantity = _quantity;
newRegdAsset.priceOfEach = _priceOfEach;
newRegdAsset.assetType = _assetType;
newRegdAsset.assetID = _assetID;
Assets.push(newRegdAsset);
return true;
}

function getAssetIds() constant returns (bytes32[]){
    uint length = Assets.length;
    bytes32[] memory assetIDs = new bytes32[](length);
 
    for (var i = 0; i < length; i++) {
 
            assetDetails memory currentAsset;
            currentAsset = Assets[i];
            
            assetIDs[i] = currentAsset.assetID;
        
        }
        return assetIDs;
}
function getAssetNames() constant returns (bytes32[]){
    uint length = Assets.length;
    bytes32[] memory assetNames = new bytes32[](length);
 
    for (var i = 0; i < length; i++) {
 
            assetDetails memory currentAsset;
            currentAsset = Assets[i];
            
            assetNames[i] = currentAsset.assetName;
        
        }
        return assetNames;
}


function getAssetsDetails() constant returns (bytes32[] , uint[] , uint[] , bytes32[] ,	bytes32[] ){

uint length = Assets.length;

        bytes32[] memory assetNames = new bytes32[](length);
        uint[] memory quantities = new uint[](length);
        uint[] memory pricesOfEach = new uint[](length);
        bytes32[] memory assetTypes = new bytes32[](length);
        bytes32[] memory assetIDs = new bytes32[](length);

        for (var i = 0; i < length; i++) {
 
            assetDetails memory currentAsset;
            currentAsset = Assets[i];
            assetNames[i] = currentAsset.assetName;
            quantities[i] = currentAsset.quantity;
            pricesOfEach[i] = currentAsset.priceOfEach;
            assetTypes[i] = currentAsset.assetType;
            assetIDs[i] = currentAsset.assetID;
        
        }
            return(assetNames, quantities, pricesOfEach, assetTypes, assetIDs);
}


function getAssetDetailsbyAssetID(bytes32 _assetID) constant returns (bytes32, uint, uint, bytes32){
    uint length = Assets.length;

        for (var i = 0; i < length; i++) {

            assetDetails memory currentAsset;
            currentAsset = Assets[i];

            if(currentAsset.assetID == _assetID){
                    
                return (currentAsset.assetName, currentAsset.quantity, currentAsset.priceOfEach, currentAsset.assetType);

            }
        }
        
}

function getAssetNamebyAssetID(bytes32 _assetID) constant returns (bytes32){
   
         uint length = Assets.length;

         for (var i = 0; i < length; i++) {

            assetDetails memory currentAsset;
            currentAsset = Assets[i];

            if(currentAsset.assetID == _assetID){
                    
                return (currentAsset.assetName);

            }
        }
}

function getAssetQuantitybyAssetID(bytes32 _assetID) constant returns (uint){
   
         uint length = Assets.length;

         for (var i = 0; i < length; i++) {

            assetDetails memory currentAsset;
            currentAsset = Assets[i];

            if(currentAsset.assetID == _assetID){
                    
                return (currentAsset.quantity);

            }
        }
}

function getAssetTypebyAssetID(bytes32 _assetID) constant returns (bytes32){
   
         uint length = Assets.length;

         for (var i = 0; i < length; i++) {

            assetDetails memory currentAsset;
            currentAsset = Assets[i];

            if(currentAsset.assetID == _assetID){
                    
                return (currentAsset.assetType);

            }
        }
}

function getEachAssetPricebyAssetID(bytes32 _assetID) constant returns (uint){
   
         uint length = Assets.length;

         for (var i = 0; i < length; i++) {

            assetDetails memory currentAsset;
            currentAsset = Assets[i];

            if(currentAsset.assetID == _assetID){
                    
                return (currentAsset.priceOfEach);

            }
        }
}


}