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

let i = 0;
let text = "Demand";
let speed = 150;

function autoType(){
  if(i<text.length){
    document.getElementById("name").innerHTML += text.charAt(i);
    i++;
    setTimeout(autoType, speed)
  }

}

autoType()

let project = document.getElementById("project");
project.style.display = "none";

let contact = document.getElementById("contact");
contact.style.display = "none";

let hero = document.getElementById("hero-header");

document.querySelector(".message").addEventListener("click", function(){
  contact.style.display = "block";
  hero.style.display = "none";
});

document.querySelector(".work").addEventListener("click", function () {
    project.style.display = "block";
    hero.style.display = "none";
});


let navProject = document.getElementById("projects").addEventListener("click", function(){
  project.style.display = "block";
  hero.style.display = "none";
  contact.style.display = "none";
})

let navMessage = document.getElementById("contacts").addEventListener("click", function () {
    contact.style.display = "block";
    hero.style.display = "none";
    project.style.display = "none";
});
