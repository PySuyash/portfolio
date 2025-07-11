const menu = document.getElementById('menuBlog');
const ham = document.getElementById('toggleBlog');

ham.addEventListener('click', ()=>{
    ham.classList.toggle('active');
    menu.classList.toggle('active');
})