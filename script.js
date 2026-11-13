
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

// Open and close mobile menu
menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
});

// Close menu when clicking a link
const menuLinks = mobileMenu.querySelectorAll("a");

menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
        mobileMenu.classList.remove("active");
    });
});

// Close menu when clicking outside
document.addEventListener("click", (event) => {
    if (
        !mobileMenu.contains(event.target) &&
        !menuBtn.contains(event.target)
    ) {
        mobileMenu.classList.remove("active");
    }
});



// =====================================
// HERO TYPING EFFECT
// =====================================

// 1. GET HERO PARAGRAPH
const heroText = document.getElementById("heroTyping");

// Save original paragraph
const message = heroText.textContent.trim();

// Clear paragraph
heroText.textContent = "";

let index = 0;


// 2. CALCULATE TYPING SPEED
const typingDuration = 17000; // 17 seconds

const typingSpeed = typingDuration / message.length;


// 3. TYPING EFFECT
const typingEffect = () => {

    if (index < message.length) {

        // Display one character at a time
        heroText.textContent += message.charAt(index);

        index++;

        // Continue typing
        setTimeout(typingEffect, typingSpeed);

    } else {

        // Wait 2 seconds before restarting
        setTimeout(() => {

            heroText.textContent = "";

            index = 0;

            typingEffect();

        }, 2000);

    }

};


// 4. START TYPING
typingEffect();
