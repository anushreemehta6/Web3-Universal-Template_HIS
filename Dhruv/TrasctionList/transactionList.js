// transactionList.js
document.addEventListener('DOMContentLoaded', () => {
    const transactionList = document.getElementById('transaction-list');
  
    // Mock transaction data (replace with blockchain data)
    const transactions = [
      {
        type: "Swap",
        from: "10 EDU",
        to: "1 CERT",
        date: "2023-10-01",
      },
      {
        type: "Reward",
        amount: "5 BADGE",
        date: "2023-09-30",
      },
      {
        type: "Transfer",
        from: "2 CERT",
        to: "Alice",
        date: "2023-09-29",
      },
    ];
  
    // Render transactions
    const renderTransactions = () => {
      transactionList.innerHTML = transactions
        .map(
          (tx) => `
          <div class="transaction-item">
            <span class="transaction-type">${tx.type}</span>
            <span class="transaction-amount ${
              tx.type === "Transfer" || tx.type === "Swap" ? "negative" : ""
            }">
              ${tx.type === "Swap" ? `${tx.from} → ${tx.to}` : ""}
              ${tx.type === "Reward" ? `+${tx.amount}` : ""}
              ${tx.type === "Transfer" ? `-${tx.from} to ${tx.to}` : ""}
            </span>
            <span class="transaction-date">${tx.date}</span>
          </div>
        `
        )
        .join("");
    };
  
    // Fetch transactions when wallet is connected
    const connectWalletButton = document.getElementById('connect-wallet');
    connectWalletButton.addEventListener('click', () => {
      // Simulate fetching transactions after wallet connection
      setTimeout(() => {
        renderTransactions();
      }, 1000); // Simulate a delay for fetching data
    });
  });