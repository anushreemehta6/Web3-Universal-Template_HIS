// wallet.js
document.addEventListener('DOMContentLoaded', () => {
    const connectWalletButton = document.getElementById('connect-wallet');
  
    // Check if MetaMask is installed
    if (typeof window.ethereum === 'undefined') {
      alert('Please install MetaMask to use this dApp!');
      return;
    }
  
    // Connect Wallet
    connectWalletButton.addEventListener('click', async () => {
      try {
        // Request account access
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const account = accounts[0];
        alert(`Connected with wallet: ${account}`);
        connectWalletButton.textContent = "Connected";
        connectWalletButton.disabled = true;
      } catch (error) {
        console.error('Error connecting wallet:', error);
        alert('Failed to connect wallet.');
      }
    });
  });