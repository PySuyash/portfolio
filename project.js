const text = "Turning Complex Code into Beautiful Digital Experiences That Users Actually Love";
const speed = 30;
let index = 0;

function typeProject() {
    const heading = document.getElementById('projectMainHeading');
    if (index < text.length) {
        heading.innerHTML += text.charAt(index);
        index ++;
        setTimeout(typeProject, speed);
    }
}

typeProject();

const hamburger = document.getElementById('ham');
const menu = document.getElementById('menuProject');

hamburger.addEventListener('click', ()=> {
    hamburger.classList.toggle('active');
    menu.classList.toggle('active');
})