"use strict"

const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
    header.classList.toggle ("sticky", window.scrollY > 0);

});


// let navigation = document.getElementById('navbar');
// let burgerbar = document.getElementById('burgerBar');

// burgerbar.addEventListener('click', function(){
//    navigation.classList.toggle('activenav')
// });


let menu = document.querySelector('#burgerBar');
let navbar = document.querySelector('.nav-ul');

menu.onclick = () => {
    menu.classList.toggle('fa-x');
    navbar.classList.toggle('open')
};

window.onscroll = () => {
    menu.classList.remove('fa-x');
    navbar.classList.remove('open')
}