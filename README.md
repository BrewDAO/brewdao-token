# BrewDAO Token

This project contains the code for the v.0.1 implementation of the BrewDAO ERC-20 token. 

The project uses [Hardhat](https://hardhat.org/) as a development environment to take care of testing and deployment.

The initial version of the smart contract is incredibly simple - we simply inherit the ERC-20 implementation from [OpenZeppelin](https://www.openzeppelin.com/), and mint 100,000 tokens to the admin address that created the contract.

We will use [Snapshot](https://snapshot.org/) for creating proposals and voting, and will track beer consumption through a simple [Firebase](https://firebase.google.com/) cloud server.

The purpose of this contract is to get up and running quickly and prove the concept. In time, this contract will be replaced by something more substantial.