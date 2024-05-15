const burger = document.querySelector('.hamburger');
const burgerLogo = document.querySelector('svg.burger');
const logo = document.querySelector('#logo');
const dropDown = document.querySelector('.dropDown');

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
