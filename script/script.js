// Navbar Fixed
window.onscroll = function () {
  const header = this.document.querySelector("header");
  const toTop = document.querySelector("#to-top");
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
    toTop.classList.add("flex");
    toTop.classList.remove("hidden");
  } else {
    toTop.classList.add("hidden");
    toTop.classList.remove("flex");
    header.classList.remove("navbar-fixed");
  }
};
// Hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// klik di luar hamburger
window.addEventListener("click", function (e) {
  if (e.target !== hamburger && e.target !== navMenu) {
    hamburger.classList.remove("hamburger-active");
    navMenu.classList.add("hidden");
  }
});

// Darkmode Toggle
const darkToggle = document.querySelector("#dark-toggle");
const html = document.querySelector("html");
darkToggle.addEventListener("click", function () {
  if (darkToggle.checked) {
    html.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    html.classList.remove("dark");
    localStorage.theme = "light";
  }
});

// pindahkan posisi toggle sesuai mode
if (localStorage.theme == "dark") {
  darkToggle.checked = true;
} else {
  darkToggle.checked = false;
}
