# Assignment 3: EcoStarter (GreenPoint Token)

This repository contains the implementation of the **GreenPoint (GPT)** ERC-20 token and a frontend dApp to interact with it.

## 📂 Repository Structure & Excluded Files

To follow industry best practices and keep the repository lightweight, the following directories are **intentionally excluded** via `.gitignore`:

* **`node_modules/`**: Contains external dependencies (hundreds of MBs). These are automatically installed based on `package.json`.
* **`artifacts/` & `cache/`**: Compiled contract data. These are regenerated automatically when you compile the project.
* **`.env`**: Contains secrets (security best practice).

**Only the source code (Contracts, Tests, Frontend) and configuration files are included.**

---

## 🚀 How to Run the Project

Since dependencies are excluded, please follow these steps to set up the environment locally.

### 1. Install Dependencies
Open a terminal in the project root and run:
```bash
npm install

```

*This command downloads all necessary libraries (Hardhat, OpenZeppelin, Ethers.js) listed in `package.json`.*

### 2. Start Local Blockchain

Open a **new terminal** window and run:

```bash
npx hardhat node

```

*Keep this terminal open! It runs the local Ethereum network.*

### 3. Deploy the Smart Contract

In the **first terminal**, run:

```bash
npx hardhat ignition deploy ignition/modules/GreenPoint.js --network localhost

```

*Copy the deployed contract address (e.g., `0x5Fb...`) if it changes, and update it in `frontend/index.html`.*

### 4. Run the Frontend

In the **first terminal**, go to the frontend folder and start the server:

```bash
cd frontend
npx http-server

```

Open the link provided (usually `http://127.0.0.1:8080`) in your browser.

---

## 🧪 How to Run Tests

To verify the smart contract logic (Transfers, Balances, Errors), run:

```bash
npx hardhat test

```

---

## 🦊 MetaMask Configuration (Localhost)

To interact with the dApp, configure MetaMask:

* **Network Name:** Hardhat Localhost
* **RPC URL:** `http://127.0.0.1:8545`
* **Chain ID:** `31337`
* **Currency Symbol:** `ETH`

**Importing a Test Account:**
Use one of the Private Keys displayed in the terminal running `npx hardhat node` (e.g., Account #0) to get test ETH.

---

### Authors

* Rashiduly Bekzat
* Toilybekov Assylkhan
* Tolganay Kadirbay
