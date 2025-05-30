// Login Authentication
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;

    let user = JSON.parse(localStorage.getItem(email));

    if (user && user.password === password) {
        window.location.href = "../DashBoardHTML/main.html"; 
    } else {
        alert("Invalid credentials. Please try again or register.");
    }
});

// Reset Login Form
document.getElementById("resetLogin").addEventListener("click", function() {
    document.getElementById("loginForm").reset();
});


