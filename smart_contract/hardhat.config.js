// https://eth-ropsten.alchemyapi.io/v2/lWtpzK20sy3ICsxWQC1Y-FnAMQv_a9PZ

const { solidity } = require("ethereum-waffle");

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks:{
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/lWtpzK20sy3ICsxWQC1Y-FnAMQv_a9PZ",
      accounts: [ '6704736c301a467bc320717b7c30e7532ddbd8a3b028605bd68e350f32d9385c' ]

    }
  }
}