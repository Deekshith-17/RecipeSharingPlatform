// User Registration
document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("registerName").value;
    let email = document.getElementById("registerEmail").value;
    let password = document.getElementById("registerPassword").value;
    let plan = document.getElementById("planSelect").value;

    let user = { name, email, password, plan, lastUpdated: new Date().toLocaleString() };
    localStorage.setItem(email, JSON.stringify(user));

    alert("Registration Successful! You can now log in.");
    window.location.href = "login.html";
});

// **Fixed Reset Button**
document.getElementById("resetRegister").addEventListener("click", function() {
    document.getElementById("registerForm").reset();
});