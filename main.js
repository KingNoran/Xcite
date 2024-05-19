// Declarations

const burger = document.querySelector('.hamburger');
const burgerLogo = document.querySelector('svg.burger');
const logo = document.querySelector('#logo');
const dropDown = document.querySelector('.dropDown');

//Main Page

burger.addEventListener('click', ()=>{
    dropDown.classList.toggle('show');
    if(dropDown.classList.contains('show')){
        burgerLogo.style["color"] = "#FD9F05"
    } else {
        burgerLogo.style["color"] = ""
    }
});

logo.addEventListener('click', ()=>{
    window.location.assign(`${window.location.origin}/Xcite/`);
});

// Courses and Projects

let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    if (index >= slides.length) currentIndex = 0;
    if (index < 0) currentIndex = slides.length - 1;
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[currentIndex].style.display = 'flex';
}

function nextSlide() {
    showSlide(++currentIndex);
}

function prevSlide() {
    showSlide(--currentIndex);
}

// Initialize slider
document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentIndex);
});
