// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract GreenPoint is ERC20, Ownable {
    // Конструктор: создает токен и выдает 1 млн монет владельцу
    constructor(address initialOwner) 
        ERC20("GreenPoint", "GPT") 
        Ownable(initialOwner) 
    {
        _mint(initialOwner, 1000000 * 10 ** decimals());
    }

    // Функция для выдачи наград (понадобится позже)
    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}