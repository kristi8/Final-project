"use strict"

const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
    header.classList.toggle ("sticky", window.scrollY > 0);

});

// let menu = document.querySelector('#burger-bar');
// let navbar = document.querySelectorAll('.nav-ul');

