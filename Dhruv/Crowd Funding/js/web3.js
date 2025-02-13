const contractAddress = "0x1f3de1912D11472fb56E498f5ff7e43B1468512D"; // Your deployed contract
const contractABI = [
    // Add your contract AB"abi": [
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "campaignId",
					"type": "uint256"
				}
			],
			"name": "CampaignArchived",
			"type": "event"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "campaignId",
					"type": "uint256"
				},
				{
					"indexed": false,
					"internalType": "address",
					"name": "creator",
					"type": "address"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "targetAmount",
					"type": "uint256"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "deadline",
					"type": "uint256"
				}
			],
			"name": "CampaignCreated",
			"type": "event"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "campaignId",
					"type": "uint256"
				},
				{
					"indexed": false,
					"internalType": "address",
					"name": "contributor",
					"type": "address"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "amount",
					"type": "uint256"
				}
			],
			"name": "ContributionMade",
			"type": "event"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "campaignId",
					"type": "uint256"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "newDeadline",
					"type": "uint256"
				}
			],
			"name": "DeadlineExtended",
			"type": "event"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "campaignId",
					"type": "uint256"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "amount",
					"type": "uint256"
				}
			],
			"name": "FundsWithdrawn",
			"type": "event"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "campaignId",
					"type": "uint256"
				},
				{
					"indexed": false,
					"internalType": "address",
					"name": "contributor",
					"type": "address"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "amount",
					"type": "uint256"
				}
			],
			"name": "RefundClaimed",
			"type": "event"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "_campaignId",
					"type": "uint256"
				}
			],
			"name": "archiveCampaign",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "campaignCount",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"name": "campaigns",
			"outputs": [
				{
					"internalType": "address payable",
					"name": "creator",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "targetAmount",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "deadline",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "amountCollected",
					"type": "uint256"
				},
				{
					"internalType": "bool",
					"name": "isCompleted",
					"type": "bool"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "_campaignId",
					"type": "uint256"
				}
			],
			"name": "claimRefund",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "_campaignId",
					"type": "uint256"
				}
			],
			"name": "contribute",
			"outputs": [],
			"stateMutability": "payable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				},
				{
					"internalType": "address",
					"name": "",
					"type": "address"
				}
			],
			"name": "contributions",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "_targetAmount",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "_durationInDays",
					"type": "uint256"
				}
			],
			"name": "createCampaign",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "_campaignId",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "_extraDays",
					"type": "uint256"
				}
			],
			"name": "extendDeadline",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "getCampaignCount",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "_campaignId",
					"type": "uint256"
				}
			],
			"name": "getCampaignDetails",
			"outputs": [
				{
					"internalType": "address",
					"name": "creator",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "targetAmount",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "deadline",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "amountCollected",
					"type": "uint256"
				},
				{
					"internalType": "bool",
					"name": "isCompleted",
					"type": "bool"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "_campaignId",
					"type": "uint256"
				}
			],
			"name": "withdrawFunds",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		}
	
];

if (typeof web3 !== "undefined") {
    web3 = new Web3(window.ethereum);
} else {
    console.error("MetaMask not found! Please install it.");
    alert("MetaMask not found! Please install it.");
}


let contract;

async function initializeWeb3() {
    if (window.ethereum) {
        web3 = new Web3(window.ethereum);

        try {
            // Request wallet connection
            await window.ethereum.request({ method: "eth_requestAccounts" });
            const accounts = await web3.eth.getAccounts();

            // Set global userAccount
            window.userAccount = accounts[0];

            // Initialize contract instance
            contract = new web3.eth.Contract(contractABI, contractAddress);

            console.log("Web3 Initialized:", web3);
            console.log("Wallet Connected:", window.userAccount);
            console.log("Contract Loaded:", contract);
        } catch (error) {
            console.error("Error initializing Web3:", error);
            alert("Failed to initialize Web3. Make sure MetaMask is connected.");
        }
    } else {
        console.error("MetaMask not detected!");
        alert("MetaMask is required to interact with this dApp.");
    }
}

// Exporting Web3 and contract
window.web3 = web3;
window.contract = contract;
window.initializeWeb3 = initializeWeb3;
