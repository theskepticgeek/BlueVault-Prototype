<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Blue Vault Prototype</title>
    <style>
        :root {
            --primary-color: #3b82f6;
            --secondary-color: #1e40af;
            --accent-color: #60a5fa;
            --text-color: #1f2937;
            --light-bg: #f8fafc;
            --border-color: #e5e7eb;
            --success-color: #10b981;
            --warning-color: #f59e0b;
            --error-color: #ef4444;
        }
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
            line-height: 1.6;
            color: var(--text-color);
            background-color: var(--light-bg);
            padding: 20px;
            max-width: 900px;
            margin: 0 auto;
        }
        
        header {
            text-align: center;
            margin-bottom: 40px;
            padding: 30px 0;
            border-bottom: 1px solid var(--border-color);
        }
        
        h1 {
            font-size: 2.5rem;
            color: var(--primary-color);
            margin-bottom: 10px;
        }
        
        .tagline {
            font-size: 1.2rem;
            color: var(--secondary-color);
            margin-bottom: 20px;
        }
        
        .badge {
            display: inline-block;
            background-color: var(--primary-color);
            color: white;
            padding: 4px 8px;
            border-radius: 4px;
            font-size: 0.8rem;
            margin-right: 5px;
            margin-bottom: 5px;
        }
        
        h2 {
            font-size: 1.8rem;
            color: var(--secondary-color);
            margin: 30px 0 15px;
            padding-bottom: 8px;
            border-bottom: 1px solid var(--border-color);
        }
        
        h3 {
            font-size: 1.4rem;
            color: var(--secondary-color);
            margin: 25px 0 10px;
        }
        
        p {
            margin-bottom: 15px;
        }
        
        ul, ol {
            margin-left: 20px;
            margin-bottom: 20px;
        }
        
        li {
            margin-bottom: 8px;
        }
        
        code {
            background-color: #f1f5f9;
            padding: 2px 6px;
            border-radius: 4px;
            font-family: 'Courier New', monospace;
            font-size: 0.9rem;
        }
        
        pre {
            background-color: #1e293b;
            color: #e2e8f0;
            padding: 15px;
            border-radius: 6px;
            overflow-x: auto;
            margin: 15px 0;
            font-family: 'Courier New', monospace;
            font-size: 0.9rem;
            line-height: 1.4;
        }
        
        .note {
            background-color: #fef3c7;
            border-left: 4px solid var(--warning-color);
            padding: 15px;
            margin: 20px 0;
            border-radius: 4px;
        }
        
        .warning {
            background-color: #fef2f2;
            border-left: 4px solid var(--error-color);
            padding: 15px;
            margin: 20px 0;
            border-radius: 4px;
        }
        
        .success {
            background-color: #ecfdf5;
            border-left: 4px solid var(--success-color);
            padding: 15px;
            margin: 20px 0;
            border-radius: 4px;
        }
        
        .terminal {
            position: relative;
        }
        
        .terminal::before {
            content: "$";
            position: absolute;
            left: 15px;
            color: #94a3b8;
        }
        
        .terminal pre {
            padding-left: 30px;
        }
        
        .grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            gap: 15px;
            margin: 20px 0;
        }
        
        .card {
            background-color: white;
            border: 1px solid var(--border-color);
            border-radius: 8px;
            padding: 15px;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }
        
        .card h4 {
            color: var(--primary-color);
            margin-bottom: 10px;
        }
        
        .step {
            counter-increment: step-counter;
            margin-bottom: 30px;
            padding-left: 50px;
            position: relative;
        }
        
        .step::before {
            content: counter(step-counter);
            position: absolute;
            left: 0;
            top: 0;
            background-color: var(--primary-color);
            color: white;
            width: 35px;
            height: 35px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
        }
        
        footer {
            text-align: center;
            margin-top: 50px;
            padding-top: 20px;
            border-top: 1px solid var(--border-color);
            color: #6b7280;
            font-size: 0.9rem;
        }
        
        @media (max-width: 768px) {
            body {
                padding: 15px;
            }
            
            h1 {
                font-size: 2rem;
            }
            
            .grid {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
    <header>
        <h1>Blue Vault Prototype</h1>
        <p class="tagline">A decentralized application for secure document storage and NFT minting on Polygon blockchain.</p>
        <div>
            <span class="badge">Blockchain</span>
            <span class="badge">NFT</span>
            <span class="badge">IPFS</span>
            <span class="badge">Polygon</span>
            <span class="badge">Hardhat</span>
        </div>
    </header>

    <section>
        <h2>🚀 Quick Start</h2>
        
        <h3>Prerequisites</h3>
        <ul>
            <li><strong>Node.js:</strong> Version 18.x or higher</li>
            <li><strong>npm:</strong> Version 9.x or higher</li>
            <li><strong>Git:</strong> For cloning the repository</li>
        </ul>
        
        <div class="terminal">
            <pre># Verify your environment
node --version    # Should be 18.x or higher
npm --version     # Should be 9.x or higher
git --version</pre>
        </div>
    </section>

    <section>
        <h2>📥 Installation</h2>
        
        <div class="step">
            <h3>1. Clone the Repository</h3>
            <div class="terminal">
                <pre>git clone https://github.com/theskepticgeek/BlueVault-Prototype.git
cd BlueVault-Prototype</pre>
            </div>
        </div>
        
        <div class="step">
            <h3>2. Install Dependencies</h3>
            <div class="terminal">
                <pre># Install main project dependencies
npm install

# Install Privy authentication (if not already included)
npm install @privy-io/react-auth@latest

# Install Hardhat globally (if needed)
npm install -g hardhat</pre>
            </div>
        </div>
        
        <div class="step">
            <h3>3. Hardhat Setup & Smart Contract Configuration</h3>
            <p>Since this project uses Hardhat for smart contract interactions and backend processing, you need to set it up in the main directory:</p>
            <div class="terminal">
                <pre># Initialize Hardhat (if not already present)
npx hardhat init

# Compile smart contracts
npx hardhat compile

# Run tests to verify everything works
npx hardhat test</pre>
            </div>
            <div class="note">
                <strong>Note:</strong> Hardhat must be properly set up in the main directory as the backend depends on the compiled contracts and ABI files for NFT minting functionality.
            </div>
        </div>
        
        <div class="step">
            <h3>4. Environment Configuration</h3>
            <p>Create a <code>.env</code> file in the root directory with the following variables:</p>
            <pre># Privy Authentication
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
IPFS_HASH=bafkreidose72muwo275ggwordhi6yx2uootwty6onxphes2jp3i3bhes5q</pre>
        </div>
    </section>

    <section>
        <h2>🏃‍♂️ Running the Application</h2>
        <p>You need to run two servers simultaneously:</p>
        
        <div class="grid">
            <div class="card">
                <h4>Terminal 1 - Frontend (Root Directory)</h4>
                <div class="terminal">
                    <pre># From the main project directory
npm run dev</pre>
                </div>
                <p>Frontend will be available at: <a href="http://localhost:5173" target="_blank">http://localhost:5173</a></p>
            </div>
            
            <div class="card">
                <h4>Terminal 2 - Backend Server</h4>
                <div class="terminal">
                    <pre># Navigate to backend directory
cd backend

# Start the backend server
node server.cjs</pre>
                </div>
                <p>Backend API will be available at: <a href="http://localhost:3001" target="_blank">http://localhost:3001</a></p>
            </div>
        </div>
    </section>

    <section>
        <h2>🛠 Available Scripts</h2>
        
        <h3>Development</h3>
        <div class="terminal">
            <pre>npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint</pre>
        </div>
        
        <h3>Hardhat Commands</h3>
        <div class="terminal">
            <pre>npx hardhat compile  # Compile smart contracts (REQUIRED for backend)
npx hardhat test     # Run tests
npx hardhat node     # Start local blockchain node
npx hardhat run scripts/deploy.js --network amoy  # Deploy to Polygon Amoy</pre>
        </div>
    </section>

    <section>
        <h2>🔧 Important Configuration Notes</h2>
        
        <h3>Hardhat Setup Critical</h3>
        <p>The backend server depends on Hardhat being properly set up in the main directory because:</p>
        <ul>
            <li><strong>Contract ABI Generation:</strong> Backend needs the compiled contract ABIs for minting</li>
            <li><strong>TypeChain Types:</strong> Provides TypeScript types for contract interactions</li>
            <li><strong>Deployment Artifacts:</strong> Contains contract addresses and deployment info</li>
        </ul>
        
        <p>If you encounter backend errors related to contract interactions, always run:</p>
        <div class="terminal">
            <pre>npx hardhat compile</pre>
        </div>
        
        <h3>Wallet Setup</h3>
        <ul>
            <li>Install MetaMask browser extension</li>
            <li>Add Polygon Amoy testnet network to MetaMask</li>
            <li>Import test account using the private key from .env (for testing only)</li>
            <li>Get test MATIC from <a href="https://faucet.polygon.technology/" target="_blank">Polygon Amoy Faucet</a></li>
        </ul>
    </section>

    <section>
        <h2>🐛 Troubleshooting</h2>
        
        <h3>Common Issues</h3>
        
        <div class="grid">
            <div class="card">
                <h4>Hardhat Compilation Errors</h4>
                <div class="terminal">
                    <pre># Clear cache and recompile
npx hardhat clean
npx hardhat compile</pre>
                </div>
            </div>
            
            <div class="card">
                <h4>Dependency Issues</h4>
                <div class="terminal">
                    <pre># Clear and reinstall
rm -rf node_modules package-lock.json
npm install
npm install @privy-io/react-auth@latest</pre>
                </div>
            </div>
            
            <div class="card">
                <h4>Port Conflicts</h4>
                <div class="terminal">
                    <pre># Kill processes on commonly used ports
npx kill-port 5173  # Vite frontend
npx kill-port 3001  # Backend API
npx kill-port 8545  # Hardhat node</pre>
                </div>
            </div>
            
            <div class="card">
                <h4>Backend Contract Errors</h4>
                <div class="terminal">
                    <pre># Ensure contracts are compiled
npx hardhat compile
# Restart backend server
cd backend && node server.cjs</pre>
                </div>
            </div>
        </div>
        
        <h3>Verification Checklist</h3>
        <ul>
            <li>All dependencies installed (npm install completed without errors)</li>
            <li>Hardhat compiled successfully (npx hardhat compile)</li>
            <li>Environment variables set in .env file</li>
            <li>Frontend server running on http://localhost:5173</li>
            <li>Backend server running on http://localhost:3001</li>
            <li>MetaMask connected to Polygon Amoy testnet</li>
            <li>Test MATIC available in wallet</li>
        </ul>
    </section>

    <footer>
        <p>Blue Vault Prototype &copy; 2023</p>
    </footer>
</body>
</html>
