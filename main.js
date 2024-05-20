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

let mybutton = document.getElementById("scrollToTopBtn");

function nextSlide() {
    showSlide(++currentIndex);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function prevSlide() {
    showSlide(--currentIndex);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// Initialize slider
document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentIndex);
});


// AJAX 

$(document).ready(function() {
    $("form").submit(function(event) {
        event.preventDefault();
        console.log("Form submission prevented");

        let studID = document.getElementById("student-number").value;
        let name = document.getElementById("name").value;
        let course = document.getElementById("course").value;
        let year = document.getElementById("year-lvl").value;

        $.post("/db_operations.php", {"student-number":studID, "name":name, "course":course, "year-lvl":year}, function(data) {
            console.log("AJAX request successful", data); 
            alert("Registered Successfully!");
        });
    });
});
