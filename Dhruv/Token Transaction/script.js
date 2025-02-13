// Web3 Token Balance Fetching

const connectButton = document.getElementById("connectWallet");
const walletAddressText = document.getElementById("walletAddress");
const tokenBalanceText = document.getElementById("tokenBalance");

// Smart contract details (Replace these)
const CONTRACT_ADDRESS = "0xYourContractAddress"; // Your contract address
const TOKEN_ABI = [
    // Your token contract ABI goes here
];

let web3;
let userAccount;

// Connect Wallet Function
async function connectWallet() {
    if (window.ethereum) {
        try {
            web3 = new Web3(window.ethereum);
            const accounts = await ethereum.request({ method: "eth_requestAccounts" });
            userAccount = accounts[0];
            walletAddressText.textContent = `Wallet: ${shortenAddress(userAccount)}`;
            getTokenBalance();
        } catch (error) {
            console.error("User denied account access");
        }
    } else {
        alert("Please install MetaMask!");
    }
}

// Shorten Wallet Address for UI
function shortenAddress(address) {
    return `${address.substring(0, 6)}...${address.substring(address.length - 4)}`;
}

// Get Token Balance
async function getTokenBalance() {
    if (!userAccount) return;

    const contract = new web3.eth.Contract(TOKEN_ABI, CONTRACT_ADDRESS);
    try {
        const balance = await contract.methods.balanceOf(userAccount).call();
        tokenBalanceText.textContent = web3.utils.fromWei(balance, "ether");
    } catch (error) {
        console.error("Error fetching balance:", error);
    }
}

// Event Listener
connectButton.addEventListener("click", connectWallet);
