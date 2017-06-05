var exchange = artifacts.require("./Exchange.sol");
var AToken = artifacts.require("./AToken.sol");
var CToken = artifacts.require("./CToken.sol");

module.exports = function(deployer) {
  deployer.deploy(AToken);
  deployer.deploy(CToken);
  deployer.link(AToken, CToken, exchange);
  deployer.deploy(exchange);
};
