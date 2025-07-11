const hamburger = document.getElementById('hamContact');
const menu = document.getElementById('menuContact');

hamburger.addEventListener('click', ()=> {
    hamburger.classList.toggle('active');
    menu.classList.toggle('active');
})