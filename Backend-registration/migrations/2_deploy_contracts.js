var asset = artifacts.require("./Asset.sol");
var user = artifacts.require("./User.sol");
module.exports = function(deployer) {
  deployer.deploy(user);
  deployer.link(user,asset);
  deployer.deploy(asset);
};
