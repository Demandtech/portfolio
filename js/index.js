let header = document.getElementById("navbar");
let btns = header.getElementsByClassName("nav-link");
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  let current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  
  });
}


const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu(){
   hamburger.classList.toggle("change");
   navMenu.classList.toggle("change");
}

const navLink = document.querySelectorAll(".nav-link");
navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("change");
    navMenu.classList.remove("change");
}
