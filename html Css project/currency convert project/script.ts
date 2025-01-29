const currency = {
    USD: 1, 
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 28
};

document.getElementById('converter-form')?.addEventListener('submit', function(e) {
    e.preventDefault();

    let Fromcurrency = document.getElementById('from').value;
    let Tocurrency = document.getElementById('to').value;
    let Amountcurrency = parseFloat(document.getElementById('amount').value);  // Convert to number

    let fromAmount = currency[Fromcurrency];
    let toAmount = currency[Tocurrency];
    let baseAmount = Amountcurrency / fromAmount;
    let convertedAmount = baseAmount * toAmount;

    document.getElementById('result').textContent = `Converted Amount: ${Math.round(convertedAmount)}`;
});
