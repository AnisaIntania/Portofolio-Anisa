// contoh animasi scroll
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("shadow-sm");
  } else {
    navbar.classList.remove("shadow-sm");
  }
});
