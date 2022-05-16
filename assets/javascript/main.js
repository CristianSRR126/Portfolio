// menu responsive

const nav = document.getElementById('nav');
const menu = document.getElementById('menu');
const menu_x = document.getElementById('menu-x');

document.getElementById('menu').addEventListener('click', toshow =>  {
    nav.style.right = '0%';
    menu_x.style.display = 'flex';
    menu.style.display = 'none';
});

document.getElementById('menu-x').addEventListener('click', disguise => {
    nav.style.right = '100%';
    menu_x.style.display = 'none';
    menu.style.display = 'flex';
});