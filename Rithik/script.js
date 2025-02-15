document.getElementById('swap-btn').addEventListener('click', function(event) {
    event.preventDefault();

    // Get the selected tokens and amount
    const fromToken = document.getElementById('from-token').value;
    const toToken = document.getElementById('to-token').value;
    const amount = parseFloat(document.getElementById('from-amount').value);

    // Ensure the amount is valid
    if (isNaN(amount) || amount <= 0) {
        alert('Please enter a valid amount.');
        return;
    }

    // Show the result in the "Converted Amount" field (same amount, just indicating the tokens swapped)
    document.getElementById('result').value = `${amount} ${toToken}`;

    // Show the success popup
    document.getElementById('popup').style.display = 'flex';
});

// Close popup when the close button is clicked
document.getElementById('close-popup').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'none';
});
