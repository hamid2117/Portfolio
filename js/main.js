const menuBtn = document.querySelector('.menu-btn');
const stulish = document.querySelector('.menu-btn__style');
const nav = document.querySelector('.navbar');
const menuNav = document.querySelector('.navbar-menu');
const navItems =  document.querySelectorAll('navbar-menu-items')

let showMenu = false;// phla false rakhna

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if (!showMenu){
        stulish.classList.add('open');
        nav.classList.add('open');
        menuNav.classList.add('open');
        navItems.forEach(item => item.classList.add('open'));
        showMenu = true;
    } else {
        stulish.classList.remove('open');
        nav.classList.remove('open');
        menuNav.classList.remove('open');
        navItems.forEach(item => item.classList.remove('open'));
        showMenu = false;
    }
}