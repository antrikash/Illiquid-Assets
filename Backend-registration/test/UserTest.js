var Usertoken = artifacts.require("./Asset.sol");

contract('Illiquid Assets - Users testing',function(accounts) {
var firstName = "Samir";
var lastName = "Tilak";
var PAN_id = "123abc";
var userID = "9cf405b4";
var userPwd = "Password";
var mobile = 9665049470;


it("should return true when user is added successfully and able to fetch all user IDs", function() {   
    return Usertoken.deployed().then(function(instance){
     return instance.addNewUser(firstName, lastName, PAN_id, userID, userPwd, mobile);     
     then(function(){
    return instance.getUserIDs();          
     }).then(function(count){          
    if(count != 0){
       return true;
      }
      else {
        return false;
      }
    }).then(function(fin_count) {
      assert.equal(fin_count,true,"Test failed: Error in adding User or fetching all user IDs"); 
    });
  });
});

it("should return true when user is added successfully and able to fetch all PAN IDs", function() {   
    return Usertoken.deployed().then(function(instance){
    return instance.getUserPANIDs();          
     }).then(function(count){          
    if(count != 0){
       return true;
      }
      else {
        return false;
      }
    }).then(function(fin_count) {
      assert.equal(fin_count,true,"Test failed: Error in fetching all PAN IDs"); 
    });
  });

it("should return true when user is added successfully and able to fetch all users details", function() {   
    return Usertoken.deployed().then(function(instance){
    return instance.getUsersDetails();          
     }).then(function(count){          
    if(count != 0){
       return true;
      }
      else {
        return false;
      }
    }).then(function(fin_count) {
      assert.equal(fin_count,true,"Test failed: Error in fetching all users details"); 
    });
  });


it("should fetch user ID by passing mobile number", function() {
return Usertoken.deployed().then(function(instance){
return instance.getUserIDbyMobNumber(9665049470);
}).then(function(user_ID) {

    function myFunction() {                         
    user_ID = user_ID.split("\d+[\+-")[0];
    assert.equal(user_ID,"9cf405b4","Test failed: User ID is not 9cf405b4 for mobile : 9665049470");
    }
});
});

it("should fetch user Password by passing mobile number", function() {
return Usertoken.deployed().then(function(instance){
return instance.getUserIDbyMobNumber(9665049470);
}).then(function(user_password) {

    function myFunction() {                         
    user_password = user_password.split("\d+[\+-")[0];
    assert.equal(user_password,"Password","Test failed: User_password is not Password for mobile : 9665049470");
    }
});
});

it("should return true if user ID and Password are fetched by passing mobile number", function() {
return Usertoken.deployed().then(function(instance){
return instance.getUserIDandPasswordbyMobNumber(9665049470);
}).then(function(count){          
    if(count != 0){
       return true;
      }
      else {
        return false;
      }
    }).then(function(fin_count) {
      assert.equal(fin_count,true,"Test failed: Error in fetching user ID and Password"); 
    });
});
});