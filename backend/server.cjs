const express = require('express');
const cors = require('cors');
const { exec } = require('child_process');
const { promisify } = require('util');
const path = require('path');
const fs = require('fs');

const execAsync = promisify(exec);
const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Absolute path to the project root (where package.json is)
const PROJECT_ROOT = '/home/theskepticgeek/BlueVaultFrontend/my-app';

// Mint endpoint
app.post('/api/mint', async (req, res) => {
  try {
    const { recipient, amount, ipfsHash } = req.body;
    
    if (!recipient || !amount || !ipfsHash) {
      return res.status(400).json({ 
        error: 'Missing required parameters: recipient, amount, or ipfsHash' 
      });
    }

    console.log('Minting request:', { recipient, amount, ipfsHash });

    // Use the EXACT SAME command that worked manually
    const command = `cd "${PROJECT_ROOT}" && RECIPIENT=${recipient} AMOUNT=${amount} IPFS_HASH=${ipfsHash} npx hardhat run scripts/mint.cjs --network polygon_amoy`;
    
    console.log('Executing command:', command);
    
    const { stdout, stderr } = await execAsync(command);

    console.log('Mint script stdout:', stdout);
    if (stderr) console.log('Mint script stderr:', stderr);
    
    // Check for successful output
    if (stdout.includes('Transaction hash:') || stdout.includes('SUCCESS:')) {
      let txHash;
      if (stdout.includes('Transaction hash:')) {
        txHash = stdout.match(/Transaction hash: (0x[a-fA-F0-9]{64})/)[1];
      } else {
        txHash = stdout.split('SUCCESS:')[1].trim();
      }
      
      res.json({ 
        success: true, 
        transactionHash: txHash,
        message: 'BVT tokens minted successfully' 
      });
    } else {
      console.error('Minting failed - stdout:', stdout);
      console.error('Minting failed - stderr:', stderr);
      res.status(500).json({ 
        success: false,
        error: 'Minting failed: ' + (stderr || stdout || 'Unknown error')
      });
    }
  } catch (error) {
    console.error('API error:', error);
    res.status(500).json({ 
      success: false,
      error: error.message 
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Backend server is running' });
});

app.listen(PORT, () => {
  console.log(`✅ Backend server running on http://localhost:${PORT}`);
  console.log(`Project root: ${PROJECT_ROOT}`);
});