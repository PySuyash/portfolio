const menu = document.getElementById('menuQualities');
const ham = document.getElementById('toggleQualities');

ham.addEventListener('click', ()=>{
    ham.classList.toggle('active');
    menu.classList.toggle('active');
})

const text = "Web Developer | Python Programmer | Creative Thinker | Lifelong Learner";
const speed = 30;
let index = 0;

function mainText() {
    const heading = document.getElementById('main-heading');
    if (index < text.length) {
        heading.innerHTML += text.charAt(index);
        index ++;
        setTimeout(mainText, speed);
    }
} 

mainText();