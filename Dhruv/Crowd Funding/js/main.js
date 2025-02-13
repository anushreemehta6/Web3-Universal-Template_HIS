document.addEventListener("DOMContentLoaded", async () => {
    document.getElementById("connectWallet").addEventListener("click", connectWallet);
    await initializeWeb3(); // Ensure Web3 is initialized on page load
});

async function connectWallet() {
    if (window.ethereum) {
        try {
            await window.ethereum.request({ method: "eth_requestAccounts" });
            const accounts = await web3.eth.getAccounts();
            window.userAccount = accounts[0];
            document.getElementById("walletAddress").innerText = `Connected: ${window.userAccount}`;
            console.log("Wallet Connected:", window.userAccount);
        } catch (error) {
            console.error("Wallet connection failed:", error);
            alert("Failed to connect wallet! Make sure MetaMask is unlocked.");
        }
    } else {
        alert("MetaMask not found! Install it to continue.");
        window.open("https://metamask.io/download/", "_blank");
    }
}

async function createCampaign() {
    const targetAmount = document.getElementById("targetAmount").value;
    const duration = document.getElementById("duration").value;

    if (!window.userAccount) return alert("Please connect your wallet first!");
    if (!targetAmount || isNaN(targetAmount) || targetAmount <= 0) return alert("Enter a valid target amount!");
    if (!duration || isNaN(duration) || duration <= 0) return alert("Enter a valid duration!");

    try {
        await contract.methods.createCampaign(web3.utils.toWei(targetAmount, "ether"), duration)
            .send({ from: window.userAccount });

        alert("Campaign created successfully!");
    } catch (error) {
        console.error("Error creating campaign:", error);
        alert("Failed to create campaign. Make sure to accept the transaction in MetaMask.");
    }
}

async function contribute() {
    const campaignId = document.getElementById("campaignId").value;
    const amount = document.getElementById("amount").value;

    if (!window.userAccount) return alert("Please connect your wallet first!");
    if (!campaignId || isNaN(campaignId) || campaignId < 0) return alert("Enter a valid campaign ID!");
    if (!amount || isNaN(amount) || amount <= 0) return alert("Enter a valid contribution amount!");

    try {
        await contract.methods.contribute(campaignId).send({
            from: window.userAccount,
            value: web3.utils.toWei(amount, "ether")
        });

        alert("Contribution successful!");
    } catch (error) {
        console.error("Error contributing:", error);
        alert("Contribution failed. Make sure to enter a valid amount and accept the transaction.");
    }
}

async function withdrawFunds() {
    const campaignId = document.getElementById("withdrawCampaignId").value;

    if (!window.userAccount) return alert("Please connect your wallet first!");
    if (!campaignId || isNaN(campaignId) || campaignId < 0) return alert("Enter a valid campaign ID!");

    try {
        await contract.methods.withdrawFunds(campaignId).send({ from: window.userAccount });

        alert("Funds withdrawn successfully!");
    } catch (error) {
        console.error("Error withdrawing funds:", error);
        alert("Withdrawal failed. Make sure to accept the transaction.");
    }
}

async function getCampaignDetails() {
    const campaignId = document.getElementById("detailsCampaignId").value;

    if (!campaignId || isNaN(campaignId) || campaignId < 0) return alert("Enter a valid campaign ID!");

    try {
        const details = await contract.methods.getCampaignDetails(campaignId).call();
        document.getElementById("campaignDetails").innerText = `
            Creator: ${details.creator}
            Target: ${web3.utils.fromWei(details.targetAmount, "ether")} ETH
            Deadline: ${new Date(details.deadline * 1000).toLocaleString()}
            Collected: ${web3.utils.fromWei(details.amountCollected, "ether")} ETH
            Completed: ${details.isCompleted ? "Yes" : "No"}
        `;
    } catch (error) {
        console.error("Error fetching campaign details:", error);
        alert("Failed to fetch campaign details. Check console for details.");
    }
}
