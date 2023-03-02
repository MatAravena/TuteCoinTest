/**
 * @type import('hardhat/config').HardhatUserConfig
 */

 require('dotenv').config();
 require("@nomiclabs/hardhat-ethers");

module.exports = {
  solidity: "0.7.3",
  defaultNetwork: "ropsten",
  networks: {

    
     hardhat: {},
     ropsten: {
        url: API_URL,
        accounts: [`0x${PRIVATE_KEY}`]
     }
  },
};
