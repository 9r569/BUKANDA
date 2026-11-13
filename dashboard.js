
// ======================================
// 1. GET DASHBOARD ELEMENTS
// ======================================

const menuBtn = document.getElementById("menuBtn");
const slideMenu = document.getElementById("slideMenu");
const menuOverlay = document.getElementById("menuOverlay");

const profileBtn = document.getElementById("profileBtn");
const profileDropdown = document.getElementById("profileDropdown");

const settingsBtn = document.getElementById("settingsBtn");
const settingsContent = document.getElementById("settingsContent");


// ======================================
// 2. OPEN AND CLOSE SLIDE MENU
// ======================================

menuBtn.addEventListener("click", () => {

    slideMenu.classList.toggle("active");
    menuOverlay.classList.toggle("active");

});

// Close menu using overlay

menuOverlay.addEventListener("click", () => {

    slideMenu.classList.remove("active");
    menuOverlay.classList.remove("active");

});

// Close menu when a menu link is clicked

const menuLinks = document.querySelectorAll(".slide-menu-links a");

menuLinks.forEach((link) => {

    link.addEventListener("click", () => {

        slideMenu.classList.remove("active");
        menuOverlay.classList.remove("active");

    });

});


// ======================================
// 3. OPEN AND CLOSE PROFILE DROPDOWN
// ======================================

profileBtn.addEventListener("click", (event) => {

    // Prevent document click from closing it immediately
    event.stopPropagation();

    profileDropdown.classList.toggle("active");

});

// Prevent clicks inside dropdown from closing it

profileDropdown.addEventListener("click", (event) => {

    event.stopPropagation();

});


// ======================================
// 4. SETTINGS EXPAND AND COLLAPSE
// ======================================

settingsBtn.addEventListener("click", () => {

    settingsBtn.classList.toggle("active");
    settingsContent.classList.toggle("active");

});


// ======================================
// 5. CLOSE PROFILE WHEN CLICKING OUTSIDE
// ======================================

document.addEventListener("click", () => {

    profileDropdown.classList.remove("active");

    settingsBtn.classList.remove("active");
    settingsContent.classList.remove("active");

});


// ======================================
// 6. DISPLAY STUDENT REGISTRATION NUMBER
// ======================================

const registrationNumber = sessionStorage.getItem("studentRegNumber");

const studentRegNumber = document.getElementById("studentRegNumber");

if (registrationNumber) {

    studentRegNumber.textContent =
        "Registration Number: " + registrationNumber;

} else {

    studentRegNumber.textContent =
        "Registration Number: Not available";

}

