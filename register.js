
// Get registration form
const registerForm = document.getElementById("registerForm");

// Get password input fields
const newPassword = document.getElementById("newPassword");
const confirmPassword = document.getElementById("confirmPassword");

// Get password visibility icons
const showNewPassword = document.getElementById("showNewPassword");
const showConfirmPassword = document.getElementById("showConfirmPassword");

// Get registration message element
const registerMessage = document.getElementById("registerMessage");


// Function to show or hide a password
const toggleVisibility = (passwordInput, eyeIcon) => {

    // Check if password is currently hidden
    if (passwordInput.type === "password") {

        // Make password visible
        passwordInput.type = "text";

        // Change eye icon
        eyeIcon.classList.remove("fa-eye");
        eyeIcon.classList.add("fa-eye-slash");

    } else {

        // Hide password
        passwordInput.type = "password";

        // Restore normal eye icon
        eyeIcon.classList.remove("fa-eye-slash");
        eyeIcon.classList.add("fa-eye");
    }
};


// Show or hide the new password
showNewPassword.addEventListener("click", () => {
    toggleVisibility(newPassword, showNewPassword);
});


// Show or hide the confirmation password
showConfirmPassword.addEventListener("click", () => {
    toggleVisibility(confirmPassword, showConfirmPassword);
});


// Listen for registration form submission
registerForm.addEventListener("submit", (event) => {

    // Prevent the page from refreshing
    event.preventDefault();

    // Get password values
    const passwordValue = newPassword.value.trim();
    const confirmValue = confirmPassword.value.trim();

    // Clear previous message
    registerMessage.textContent = "";

    // Check minimum password length
    if (passwordValue.length < 8) {

        registerMessage.textContent =
            "Password must contain at least 8 characters.";

        registerMessage.className = "register-message error";

    }

    // Check whether passwords match
    else if (passwordValue !== confirmValue) {

        registerMessage.textContent =
            "Passwords do not match. Please try again.";

        registerMessage.className = "register-message error";

    }

    // Password validation passed
    else {

        registerMessage.textContent =
            "Password details are valid. School record verification is still required.";

        registerMessage.className = "register-message info";
    }

});
