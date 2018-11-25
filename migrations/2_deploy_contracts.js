var ChainHome = artifacts.require("./ChainHome.sol");

module.exports = function(deployer) {
  deployer.deploy(ChainHome);
};
