document.getElementById('connect-wallet').addEventListener('click', async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        document.getElementById('wallet-address').textContent = accounts[0];
      } catch (error) {
        console.error("Wallet connection failed:", error);
      }
    } else {
      alert("metamask not detected");
    }
  });
  