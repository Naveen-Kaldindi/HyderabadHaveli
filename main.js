
// Back to Top Button
const backToTop = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
  backToTop.style.display = window.scrollY > 300 ? 'block' : 'none';
});
backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Smooth Scroll for "Get Started" Button
document.getElementById('get-started').addEventListener('click', () => {
  document.getElementById('special').scrollIntoView({ behavior: 'smooth' });
});

// Mobile Menu Toggle
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");
menuBtn.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuBtnIcon.className = isOpen ? "ri-close-line" : "ri-menu-line";
});
navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuBtnIcon.className = "ri-menu-line";
});

// ScrollReveal Animations
const revealOptions = { distance: "50px", origin: "bottom", duration: 1000 };
ScrollReveal().reveal(".header__image img", { ...revealOptions, origin: "right" });
ScrollReveal().reveal(".header__content h1, .header__content .section__description, .header__content .header__btn", revealOptions);
ScrollReveal().reveal(".explore__image img", { ...revealOptions, origin: "left" });
ScrollReveal().reveal(".explore__content .section__header, .explore__content .section__description, .explore__content .explore__btn", revealOptions);
ScrollReveal().reveal(".banner__card", { ...revealOptions, interval: 500 });
ScrollReveal().reveal(".chef__image img", { ...revealOptions, origin: "right" });
ScrollReveal().reveal(".chef__content .section__header, .chef__content .section__description, .chef__list li", { ...revealOptions, interval: 500 });

// Swiper Slider
new Swiper(".swiper", { loop: true, pagination: { el: ".swiper-pagination" } });
