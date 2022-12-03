"use strict"

const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
    header.classList.toggle ("sticky", window.scrollY > 0);

});


let navigation = document.getElementById('navbar');
let burgerbar = document.getElementById('burgerBar');

burgerbar.addEventListener('click', function(){
   navigation.classList.toggle('activenav')
});
// let menu = document.querySelector('#burger-bar');
// let navbar = document.querySelector('.nav-ul');

// menu.onclick = () => {
//     menu.classList.toggle('activenav');
//     navbar.classList.toggle('open')
// }
