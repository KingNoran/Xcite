const burger = document.querySelector('.hamburger');
const dropDown = document.querySelector('.dropDown');

burger.addEventListener('click', ()=>{
    dropDown.classList.toggle('show');
});