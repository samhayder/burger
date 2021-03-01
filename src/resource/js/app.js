//Get DOM
let menu = document.querySelector('nav ul');
let menuIcon = document.querySelector('#menu_icon');
//Initial value
let showMenu = false;
//Event Listener
menuIcon.addEventListener('click', ()=> {
    if(!showMenu) {
        menu.classList.add('show');
        showMenu = true;
    } else {
        menu.classList.remove('show');
        showMenu = false;
    }
    
})