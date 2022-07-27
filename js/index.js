let header = document.getElementById("navbar");
let btns = header.getElementsByClassName("nav-link");
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  let current = document.getElementsByClassName("nav-active");
  current[0].className = current[0].className.replace("nav-active", "");
  this.className += " nav-active";
  
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



window.addEventListener("scroll", display);

function display(){
  let displays = document.querySelectorAll(".display");

  for(let i = 0; i<displays.length; i++){
    let windowHeight = window.innerHeight;
    let displayTop = displays[i].getBoundingClientRect().top;
    let displayPoint = 150;

    if(displayTop<windowHeight-displayPoint){
      displays[i].classList.add("active")
    }
    else{
      displays[i].classList.remove("active");
    }
  }
 
}



window.onscroll = function(){scrollFunction()};

let topBtn = document.getElementById("top-btn");
topBtn.addEventListener("click", topFunction)

function scrollFunction(){
  

  if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
     topBtn.style.display = "block";
  } else {
     topBtn.style.display = "none";
  }
}

function topFunction(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// let project = document.getElementById("project");
// project.style.display = "none";

// let contact = document.getElementById("contact");
// contact.style.display = "none";

// let hero = document.getElementById("hero-header");

// document.querySelector(".message").addEventListener("click", function(){
//   contact.style.display = "block";
//   hero.style.display = "none";
// });

// document.querySelector(".work").addEventListener("click", function () {
//     project.style.display = "block";
//     hero.style.display = "none";
// });


// let navProject = document.getElementById("projects").addEventListener("click", function(){
//   project.style.display = "block";
//   hero.style.display = "none";
//   contact.style.display = "none";
// })

// let navMessage = document.getElementById("contacts").addEventListener("click", function () {
//     contact.style.display = "block";
//     hero.style.display = "none";
//     project.style.display = "none";
// });
