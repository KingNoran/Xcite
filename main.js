const imgObserver = new IntersectionObserver((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('img-slide');
        } else {
            entry.target.classList.remove('img-slide');
        }
    });

const mainImg = document.querySelector('.main-img');
const mainTxt = document.querySelector('.main-text');

mainImg.map((el) => imgObserver.observe(el));