const hamburgerBtn = document.getElementById('hamburger');
const navList = document.getElementById('nav-bar');

function toggleButton(){
    navList.classList.toggle('show')
}
hamburgerBtn.addEventListener('click', toggleButton)