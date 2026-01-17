const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("GreenPoint Token Contract", function () {
  let GreenPoint;
  let greenPoint;
  let owner;
  let addr1;
  let addr2;

  // Перед каждым тестом загружаем контракт заново
  beforeEach(async function () {
    // Получаем тестовые кошельки
    [owner, addr1, addr2] = await ethers.getSigners();

    // Загружаем и деплоим контракт
    const GreenPointFactory = await ethers.getContractFactory("GreenPoint");
    greenPoint = await GreenPointFactory.deploy(owner.address);
  });

  // 1. Проверка баланса (Assignment req: Basic balance checks)
  it("Should assign the total supply of tokens to the owner", async function () {
    const ownerBalance = await greenPoint.balanceOf(owner.address);
    // Ожидаем 1 миллион токенов (с 18 нулями)
    const expectedSupply = ethers.parseUnits("1000000", 18);
    expect(ownerBalance).to.equal(expectedSupply);
  });

  // 2. Тест перевода (Assignment req: Transfer tests)
  it("Should transfer tokens between accounts", async function () {
    // Переводим 50 токенов от владельца к addr1
    const amount = ethers.parseUnits("50", 18);
    await greenPoint.transfer(addr1.address, amount);

    const addr1Balance = await greenPoint.balanceOf(addr1.address);
    expect(addr1Balance).to.equal(amount);
  });

  // 3. Тест ошибки при нехватке средств (Assignment req: Failing transfer tests)
  it("Should fail if sender doesn’t have enough tokens", async function () {
    // Пытаемся отправить 1 токен с пустого кошелька addr1
    // Это должно вызвать ошибку (reverted)
    await expect(
      greenPoint.connect(addr1).transfer(owner.address, 1)
    ).to.be.reverted;
  });

  // 4. Тест перевода самому себе (Assignment req: Edge case)
  it("Should allow transferring to self", async function () {
    const amount = ethers.parseUnits("10", 18);
    await greenPoint.transfer(owner.address, amount);
    
    // Баланс не должен измениться (кроме газа, но balanceOf смотрит только токены)
    const ownerBalance = await greenPoint.balanceOf(owner.address);
    const expectedSupply = ethers.parseUnits("1000000", 18);
    expect(ownerBalance).to.equal(expectedSupply);
  });
});