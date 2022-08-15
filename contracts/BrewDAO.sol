// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract BrewDAO is ERC20 {
    /**
        * @dev Owner will start off with all tokens.
        * @dev Max token supply 100,000 = shares of the brewery.
        * @dev Tokens will be transferred manually to investors after launch.
    */
    constructor() ERC20("BrewDAO", "BREW") {
        ERC20._mint(msg.sender, 100_000 * 10 ** 18);
    }
}
