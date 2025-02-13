// script.js
document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const fromAmount = document.getElementById('from-amount');
    const toAmount = document.getElementById('to-amount');
    const fromToken = document.getElementById('from-token');
    const toToken = document.getElementById('to-token');
    const swapButton = document.getElementById('swap-button');
    const confirmSwapButton = document.getElementById('confirm-swap');
    const exchangeRate = document.getElementById('exchange-rate');
    const gasFee = document.getElementById('gas-fee');
  
    // Mock Data
    const rates = {
      ETH: { USDT: 2000, BTC: 0.05 },
      BTC: { USDT: 40000, ETH: 20 },
      USDT: { ETH: 0.0005, BTC: 0.000025 },
    };
  
    const gasFees = {
      ETH: '0.001 ETH',
      BTC: '0.0001 BTC',
      USDT: '10 USDT',
    };
  
    // Update Exchange Rate and Gas Fee
    const updateDetails = () => {
      const from = fromToken.value;
      const to = toToken.value;
      exchangeRate.textContent = `1 ${from} = ${rates[from][to]} ${to}`;
      gasFee.textContent = gasFees[from];
    };
  
    // Calculate "To" Amount
    const calculateToAmount = () => {
      const from = fromToken.value;
      const to = toToken.value;
      const amount = parseFloat(fromAmount.value);
      if (!isNaN(amount)) {
        toAmount.value = (amount * rates[from][to]).toFixed(4);
      } else {
        toAmount.value = '';
      }
    };
  
    // Swap Tokens
    swapButton.addEventListener('click', () => {
      const tempToken = fromToken.value;
      fromToken.value = toToken.value;
      toToken.value = tempToken;
      updateDetails();
      calculateToAmount();
    });
  
    // Confirm Swap
    confirmSwapButton.addEventListener('click', () => {
      alert(`Swapped ${fromAmount.value} ${fromToken.value} to ${toAmount.value} ${toToken.value}`);
    });
  
    // Initialize
    updateDetails();
    fromAmount.addEventListener('input', calculateToAmount);
    fromToken.addEventListener('change', updateDetails);
    toToken.addEventListener('change', updateDetails);
  });