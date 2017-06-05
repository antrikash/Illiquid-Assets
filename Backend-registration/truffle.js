var DefaultBuilder = require("truffle-default-builder");
var web3 = require("web3");

module.exports = {
  
  build: new DefaultBuilder({
    
      "index.html": "index.html",
      
      "user.html": "user.html",

      "app.css": "app.css",
      
      "app.js": "app.js"

}),
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    }
  }
};
