app.post('/api/mint', async (req, res) => {
  try {
    const { amount, ipfsHash } = req.body;

    if (!amount || !ipfsHash) {
      return res.status(400).json({ 
        error: 'Missing required parameters: amount or ipfsHash' 
      });
    }

    console.log('Minting request:', { amount, ipfsHash });

    // Hardcoded recipient & contract address for local testing
    const recipient = "0x6c3aa30bdd2dE5383f8aF12CA3B3bEb8a9A2F255";
    const contractAddress = "0x0e1CD241e78bd9BfC1ae8B20fB504583150D2a2e";

    // Execute the mint script with dynamic amount
    const command = `RECIPIENT=${recipient} AMOUNT=${amount} IPFS_HASH=${ipfsHash} npx hardhat run scripts/mint.cjs --network localhost`;
    const { stdout, stderr } = await execAsync(command);

    console.log('Mint script output:', stdout);

    if (stdout.includes('Transaction hash:')) {
      const txHash = stdout.match(/Transaction hash: (0x[a-fA-F0-9]{64})/)[1];
      res.json({ 
        success: true, 
        transactionHash: txHash,
        message: 'BVT tokens minted successfully' 
      });
    } else {
      console.error('Minting failed:', stderr);
      res.status(500).json({ 
        success: false,
        error: 'Minting failed: ' + (stderr || stdout)
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
