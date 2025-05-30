document.getElementById("planSelect").addEventListener("change", function() {
    let planPrices = { free: 0, premium: 799, vip: 1499 };
    document.getElementById("totalCost").textContent = `₹${planPrices[this.value].toFixed(2)}`;
});

// Subscription Form Submission
document.getElementById("subscriptionForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let cardNumber = document.getElementById("cardNumber").value;
    let expiryDate = document.getElementById("expiryDate").value;
    let cvv = document.getElementById("cvv").value;

    if (cardNumber.length < 16 || cvv.length !== 3) {
        alert("Invalid card details! Please check your input.");
        return;
    }

    alert(`Subscription successful! You are now subscribed for ₹${document.getElementById("totalCost").textContent}`);
    document.getElementById("subscriptionForm").reset();
});

// Reset Button Functionality
document.getElementById("resetSubscription").addEventListener("click", function() {
    document.getElementById("subscriptionForm").reset();
});