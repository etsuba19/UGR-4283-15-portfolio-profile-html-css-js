const toggler = document.getElementById("nav-toggler");
const navbar = document.querySelector("nav");
toggler.onclick = () => {
  navbar.classList.toggle("show-nav");
  toggler.classList.toggle("ri-menu-line");
  toggler.classList.toggle("ri-close-line");
};
