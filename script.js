const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menuBar');

hamburger.addEventListener('click', ()=> {
    hamburger.classList.toggle('active');
    menu.classList.toggle('active');
})


const TEXT = "Hi I Am Suyash And I Am a Web Developer";
const SPEED = 30;
let index = 0;
function typeWriter() {
    const heading = document.getElementById('main-heading');
    if (index < TEXT.length) {
        heading.innerHTML += TEXT.charAt(index);
        index ++;
        setTimeout(typeWriter, SPEED);
    }
}
typeWriter();
