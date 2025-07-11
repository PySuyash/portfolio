function showDate() {
  const date = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = date.toLocaleDateString(undefined, options);
  document.getElementById("date-display").textContent = formattedDate;
}

window.onload = showDate;

const text = "Suyash — Web Developer & Python Programmer";
const speed = 30;
let index = 0;

function typeAbout() {
    const heading = document.getElementById('aboutme');
    if (index < text.length) {
        heading.innerHTML += text.charAt(index);
        index ++;
        setTimeout(typeAbout, speed);
    }
}

typeAbout();