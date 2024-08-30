const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

const owner = "0xA32c0c266f704f1E6989e91CAE2eBCeCB4e69F22";

module.exports = buildModule("MyNFTModule", (m) => {

  const mynft = m.contract("MyNFT", [owner]);

  return { mynft };
});