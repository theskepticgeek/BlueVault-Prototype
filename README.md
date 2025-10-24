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

    Note: Hardhat must be properly set up in the main directory as the backend depends on the compiled contracts and ABI files for NFT minting functionality.
### 4. Environment Configuration
#### Create a ```.env``` file in the root directory with the following variables:
```bash
# Privy Authentication
VITE_PRIVY_APP_ID=cmfp4249000n3i70cruuuvhuk

# Pinata IPFS Configuration
VITE_PINATA_API_KEY=f426b80f112b28bbc560
VITE_PINATA_SECRET_API_KEY=3fa610b30b3cb94f2881552ee1663393084fbf515d0028ee83f1cf15a583cdd9
VITE_PINATA_JWT=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJmNDQ4NjBhMy0zNjVjLTQ1OGUtOTJkMC1iZDYyNDNhOTM2YmQiLCJlbWFpbCI6ImtycmlzaGR1YmV5MTJAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInBpbl9wb2xpY3kiOnsicmVnaW9ucyI6W3siZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjEsImlkIjoiRlJBMSJ9LHsiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjEsImlkIjoiTllDMSJ9XSwidmVyc2lvbiI6MX0sIm1mYV9lbmFibGVkIjpmYWxzZSwic3RhdHVzIjoiQUNUSVZFIn0sImF1dGhlbnRpY2F0aW9uVHlwZSI6InNjb3BlZEtleSIsInNjb3BlZEtleUtleSI6ImY0MjZiODBmMTEyYjI4YmJjNTYwIiwic2NvcGVkS2V5U2VjcmV0IjoiM2ZhNjEwYjMwYjNjYjk0ZjI4ODE1NTJlZTE2NjMzOTMwODRmYmY1MTVkMDAyOGVlODNmMWNmMTVhNTgzY2RkOSIsImV4cCI6MTc4OTcyODc5MH0.mT1JEd2KNR2sPFG-JmmKqDd6VhcEj6CiZeFWTx4M5xI

# Blockchain Configuration
PRIVATE_KEY=12732428ea31d44376e42f2a3d415384b0abea8890e9e04e8c0a5462a5336f5b
ALCHEMY_API_KEY=hZRaxfyC0E-BtOnqbNBm4
POLYGON_AMOY_RPC_URL=https://rpc-amoy.polygon.technology

# Test Configuration
RECIPIENT=0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
AMOUNT=100
IPFS_HASH=bafkreidose72muwo275ggwordhi6yx2uootwty6onxphes2jp3i3bhes5q
```

## Running the Application
### You need to run two servers simultaneously:
### Terminal 1 - Frontend (Root Directory)
```bash
# From the main project directory
npm run dev
```
### Terminal 2 - Backend Server
```bash
# Navigate to backend directory
cd backend

# Start the backend server
node server.cjs
```
#### Backend API will be available at: ```http://localhost:3001```
