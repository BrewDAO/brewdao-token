import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("BrewDAO Token", function () {
  let brewDAO: any;
  let owner: SignerWithAddress;

  beforeEach("Deploy contract", async () => {
    [owner] = await ethers.getSigners();
    const BrewDAO = await ethers.getContractFactory("BrewDAO");
    brewDAO = await BrewDAO.deploy();
    await brewDAO.deployed();
  });

  describe("DAO instantiated with tokens in owner acccount", function () {
    it("Owner address should have all tokens initially", async function () {
      const ownerBalance = await brewDAO.balanceOf(owner.address);
      expect(ownerBalance).to.equal(
        ethers.utils.parseUnits("100000", 18)
      );
    });
  });
});
