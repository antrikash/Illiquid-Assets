pragma solidity ^0.4.8;

contract User{
    
    userDetails[] public Users;

    mapping(uint => bytes32) public MobilesWithUserIDs;
    mapping(bytes32 => bytes32) public PasswordsWithUserIDs;
    mapping(bytes32 => address) public AddressWithUserIDs;
struct userDetails{
    bytes32 firstName;
    bytes32 lastName;
    bytes32 PAN_id;
    bytes32 userID;
	bytes32 userPwd;
    uint mobile;
}
function addNewUser(bytes32 _firstName, bytes32 _lastName, address _walletAddr, bytes32 _panID, bytes32 _userID, bytes32 _userPwd, uint _mobile) returns (bool addUser_status){
    userDetails memory newRegdUser;
    
    newRegdUser.firstName = _firstName;
    newRegdUser.lastName = _lastName;
    newRegdUser.PAN_id = _panID;
    newRegdUser.userID =_userID;
	newRegdUser.userPwd =_userPwd; 
    newRegdUser.mobile =_mobile; 
    
    Users.push(newRegdUser);
    AddressWithUserIDs[_userID] =_walletAddr;
    MobilesWithUserIDs[_mobile] = _userID;
	PasswordsWithUserIDs[_userID] = _userPwd;
    return true; 
}

function getWalletAddress(bytes32 _userID) constant returns (address _wallet){
    return AddressWithUserIDs[_userID];
}

function getUserIDs() constant returns ( bytes32[] ){
    uint length = Users.length;
    bytes32[] memory userIDs = new bytes32[](length);
 
    for (var i = 0; i < length; i++) {
 
            userDetails memory currentUser;
            currentUser = Users[i];
            
            userIDs[i] = currentUser.userID;
        
        }
        return userIDs;
}

function getUserPANIDs() constant returns ( bytes32[] ){
    uint length = Users.length;
    bytes32[] memory userPANIDs = new bytes32[](length);
 
    for (var i = 0; i < length; i++) {
 
            userDetails memory currentUser;
            currentUser = Users[i];
            
            userPANIDs[i] = currentUser.PAN_id;
        
        }
        return userPANIDs;
}



function getUsersDetails() constant returns (bytes32[], bytes32[], bytes32[], bytes32[], bytes32[], uint[]){

uint length = Users.length;

        bytes32[] memory firstNames = new bytes32[](length);
        bytes32[] memory lastNames = new bytes32[](length);
        bytes32[] memory PAN_ids = new bytes32[](length);
        bytes32[] memory userIDs = new bytes32[](length);
        bytes32[] memory userPwds = new bytes32[](length);
        uint[] memory mobiles = new uint[](length);
        
        for (var i = 0; i < length; i++) {
 
            userDetails memory currentUser;
            currentUser = Users[i];
            firstNames[i] = currentUser.firstName;
            lastNames[i] = currentUser.lastName;
            PAN_ids[i] = currentUser.PAN_id;
            userIDs[i] = currentUser.userID;
            userPwds[i] = currentUser.userPwd;
            mobiles[i] = currentUser.mobile;
        
        }
    return(firstNames, lastNames, PAN_ids, userIDs, userPwds, mobiles);
}
                                                                                                                                                              
function getUserIDbyMobNumber(uint _mobile) constant returns (bytes32 ){
    uint length = Users.length;

        for (var i = 0; i < length; i++) {
        
        userDetails memory currentUser;    
        currentUser = Users[i];

            if(currentUser.mobile == _mobile){

            return currentUser.userID;

            }

        }    
}
                                                                                                                                                                                                                                                                       
function getPasswordbyMobNumber(uint _mobile) constant returns (bytes32 ){
    uint length = Users.length;

        for (var i = 0; i < length; i++) {
        
        userDetails memory currentUser;    
        currentUser = Users[i];

            if(currentUser.mobile == _mobile){

            return currentUser.userPwd;

            }
        
        }    
}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
function getUserIDandPasswordbyMobNumber(uint _mobile) constant returns (bytes32, bytes32){
    uint length = Users.length;

        for (var i = 0; i < length; i++) {
        
        userDetails memory currentUser;    
        currentUser = Users[i];

            if(currentUser.mobile == _mobile){

            return ( currentUser.userID, currentUser.userPwd );

            }
           
        }    
}

}