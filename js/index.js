const toggle = document.querySelector('.toggle');
const body = document.querySelector('body');
const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav-list')



toggle.addEventListener('click', function(){
 toggle.classList.toggle('dark');
 body.classList.toggle('dark')
})

hamburger.addEventListener('click', function(){
  console.log('clicked');
  navList.classList.toggle('nav-open')
})