
 // Get password input and eye icon
const password = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");

// Show and hide password
togglePassword.addEventListener("click", () => {

    if (password.type === "password") {
        password.type = "text";
        togglePassword.classList.remove("fa-eye");
        togglePassword.classList.add("fa-eye-slash");
    } else {
        password.type = "password";
        togglePassword.classList.remove("fa-eye-slash");
        togglePassword.classList.add("fa-eye");
    }

});

// Get login form and other elements
const loginForm = document.getElementById("loginForm");
const username = document.getElementById("username");
const loginMessage = document.getElementById("loginMessage");

// Listen for login submission
loginForm.addEventListener("submit", (event) => {

    // Stop default form submission
    event.preventDefault();

    // Get entered details
    const registrationNumber = username.value.trim();
    const enteredPassword = password.value.trim();

    // Check empty fields
    if (registrationNumber === "" || enteredPassword === "") {

        loginMessage.textContent = "Please enter your login details.";
        loginMessage.className = "login-message error";
        return;
    }

    // Save student's registration number temporarily
sessionStorage.setItem("studentRegNumber", registrationNumber);

// Open student dashboard
window.location.href = "dashboard.html";
});
