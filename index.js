
const harmburger = document.querySelector('.harmburger');
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.nav-link');

harmburger.addEventListener('click', ()=>{
  navbar.classList.toggle('open');
  navbar.classList.remove('close');
});


navLinks.forEach(navLink => {
  navLink.addEventListener('click', function() {
    navLinks.forEach(navLink => navLink.classList.remove('active'));
    this.classList.add('active');
    navbar.classList.toggle('close');
  })
})