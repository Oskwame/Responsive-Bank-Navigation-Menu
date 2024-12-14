

let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");
let logo = document.querySelector(".navbar .logo");


menuOpenBtn.onclick = function () {
  navLinks.style.left = "0"; // Open the sidebar
  logo.style.opacity = "0"; // Hide the logo
  logo.style.pointerEvents = "none"; // Disable interactions with the logo
  menuOpenBtn.style.opacity = "0";
};

menuCloseBtn.onclick = function () {
  navLinks.style.left = "-100%"; // Close the sidebar
  logo.style.opacity = "1"; // Show the logo
  logo.style.pointerEvents = "auto"; // Enable interactions with the logo
  menuOpenBtn.style.opacity="1";
};



