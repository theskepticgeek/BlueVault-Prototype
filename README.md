# Blue Vault Prototype

A decentralized application for secure document storage and NFT minting on Polygon blockchain.

![Blockchain](https://img.shields.io/badge/Blockchain-Polygon-blue)
![NFT](https://img.shields.io/badge/NFT-Minting-green)
![IPFS](https://img.shields.io/badge/IPFS-Storage-orange)

## 🚀 Quick Start

### Prerequisites

- **Node.js:** Version 18.x or higher
- **npm:** Version 9.x or higher  
- **Git:** For cloning the repository

```bash
# Verify your environment
node --version    # Should be 18.x or higher
npm --version     # Should be 9.x or higher
git --version
```

## 📥 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/theskepticgeek/BlueVault-Prototype.git
cd BlueVault-Prototype
```
### 2. Install Dependencies
```bash
# Install main project dependencies
npm install

# Install Privy authentication (if not already included)
npm install @privy-io/react-auth@latest

# Install Hardhat globally (if needed)
npm install -g hardhat
```
### 3. Hardhat Setup & Smart Contract Configuration

#### Since this project uses Hardhat for smart contract interactions and backend processing, you need to set it up in the main directory:
```bash
# Initialize Hardhat (if not already present)
npx hardhat init

# Compile smart contracts
npx hardhat compile

# Run tests to verify everything works
npx hardhat test
```
