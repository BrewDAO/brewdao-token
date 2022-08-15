import { ethers } from "hardhat";

async function main() {
  const BrewDAO = await ethers.getContractFactory("BrewDAO");
  const brewDAO = await BrewDAO.deploy();

  await brewDAO.deployed();

  console.log("BrewDAO contract deployed to :", brewDAO.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
