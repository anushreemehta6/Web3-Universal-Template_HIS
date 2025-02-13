// tokenBalances.js
document.addEventListener('DOMContentLoaded', () => {
    const eduBalance = document.getElementById('edu-balance');
    const certBalance = document.getElementById('cert-balance');
    const badgeBalance = document.getElementById('badge-balance');
  
    // Initialize Ethers.js provider
    const provider = new ethers.providers.Web3Provider(window.ethereum);
  
    // Fetch token balance
    const fetchTokenBalance = async (tokenAddress, tokenABI, userAddress) => {
      const contract = new ethers.Contract(tokenAddress, tokenABI, provider);
      const balance = await contract.balanceOf(userAddress);
      return ethers.utils.formatUnits(balance, 18); // Adjust decimals as needed
    };
  
    // Update token balances
    const updateBalances = async (userAddress) => {
      try {
        const edu = await fetchTokenBalance(
          window.CONFIG.EDU_TOKEN_ADDRESS,
          window.CONFIG.EDU_TOKEN_ABI,
          userAddress
        );
        const cert = await fetchTokenBalance(
          window.CONFIG.CERT_TOKEN_ADDRESS,
          window.CONFIG.CERT_TOKEN_ABI,
          userAddress
        );
        const badge = await fetchTokenBalance(
          window.CONFIG.BADGE_TOKEN_ADDRESS,
          window.CONFIG.BADGE_TOKEN_ABI,
          userAddress
        );
  
        eduBalance.textContent = edu;
        certBalance.textContent = cert;
        badgeBalance.textContent = badge;
      } catch (error) {
        console.error('Error fetching balances:', error);
        alert('Failed to fetch token balances.');
      }
    };
  
    // Expose function to initialize balances after wallet connection
    window.initializeTokenBalances = updateBalances;
  });