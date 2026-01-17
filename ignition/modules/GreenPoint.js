const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("GreenPointModule", (m) => {
  // Получаем адрес того, кто разворачивает контракт (Account #0)
  const deployer = m.getAccount(0);

  // Разворачиваем контракт GreenPoint и передаем deployer как владельца (initialOwner)
  const greenPoint = m.contract("GreenPoint", [deployer]);

  return { greenPoint };
});