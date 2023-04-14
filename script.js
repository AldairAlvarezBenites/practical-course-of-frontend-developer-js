const menuGmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

menuGmail.addEventListener("click", toggleDesktopMenu);

function toggleDesktopMenu (event) {
    desktopMenu.classList.toggle("inactive")
}