const { ethers } = require("hardhat");
// REMOVE the fs import since we're not using it anymore
// const fs = require('fs');
// const path = require('path');

async function main() {
  try {
    // Use environment variables
    const recipient = process.env.RECIPIENT;
    const amount = process.env.AMOUNT;
    const ipfsHash = process.env.IPFS_HASH;
    
    console.log('Environment variables:', { recipient, amount, ipfsHash });
    
    if (!recipient || !amount || !ipfsHash) {
      throw new Error('Missing RECIPIENT, AMOUNT, or IPFS_HASH environment variables');
    }

    // USE THE ACTUAL DEPLOYED CONTRACT ADDRESS ON POLYGON AMOY
    // Replace this with your actual deployed contract address!
    const contractAddress = "0x0e1CD241e78bd9BfC1ae8B20fB504583150D2a2e";
    
    console.log(`Using contract address: ${contractAddress}`);

    const Token = await ethers.getContractFactory("BlueVaultToken");
    const token = await Token.attach(contractAddress);
    
    const [owner] = await ethers.getSigners();
    console.log(`Using owner account: ${owner.address}`);
    
    // Test the connection first
    try {
      const name = await token.name();
      const symbol = await token.symbol();
      console.log(`Connected to contract: ${name} (${symbol})`);
    } catch (error) {
      console.error('Failed to connect to contract:', error);
      throw new Error('Contract not found or inaccessible at address: ' + contractAddress);
    }
    
    const tokenWithOwner = token.connect(owner);
    
    console.log(`Minting ${amount} BVT to ${recipient} with IPFS: ${ipfsHash}`);
    
    const tx = await tokenWithOwner.mint(
      recipient, 
      ethers.parseUnits(amount, 18),
      ipfsHash
    );
    
    await tx.wait();
    console.log("Transaction hash:", tx.hash);
    console.log("SUCCESS:" + tx.hash);
    
    // Verify the mint worked
    try {
      const recipientBalance = await token.balanceOf(recipient);
      console.log(`Recipient balance: ${ethers.formatUnits(recipientBalance, 18)} BVT`);
    } catch (balanceError) {
      console.warn('Could not check balance (might be expected on testnet):', balanceError);
    }
    
  } catch (error) {
    console.error("ERROR:" + error.message);
    process.exit(1);
  }
}

main().catch(console.error);