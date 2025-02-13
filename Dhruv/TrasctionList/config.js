// config.js
// Replace with your smart contract ABI and address
const EDU_TOKEN_ABI = [
    // Paste EDU token ABI here
  ];
  
  const CERT_TOKEN_ABI = [
    // Paste CERT token ABI here
  ];
  
  const BADGE_TOKEN_ABI = [
    // Paste BADGE token ABI here
  ];
  
  const EDU_TOKEN_ADDRESS = "0xYourEduTokenAddress"; // Replace with EDU token address
  const CERT_TOKEN_ADDRESS = "0xYourCertTokenAddress"; // Replace with CERT token address
  const BADGE_TOKEN_ADDRESS = "0xYourBadgeTokenAddress"; // Replace with BADGE token address
  
  // Export for use in other files
  window.CONFIG = {
    EDU_TOKEN_ABI,
    CERT_TOKEN_ABI,
    BADGE_TOKEN_ABI,
    EDU_TOKEN_ADDRESS,
    CERT_TOKEN_ADDRESS,
    BADGE_TOKEN_ADDRESS,
  };