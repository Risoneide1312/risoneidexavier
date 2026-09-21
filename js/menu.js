const menuButton = document.getElementById('menu-button');
const menuNav = document.getElementById('menu-nav');

menuButton.addEventListener('click', () => {
    menuNav.style.display = 'flex';
    menuNav.style.position = 'fixed';
    menuNav.style.top = '80px';
    menuNav.style.right = '20px';
    menuNav.style.zIndex = '99999';
    menuNav.style.backgroundColor = 'white';
    menuNav.style.padding = '20px';
    menuNav.style.flexDirection = 'column';
    menuNav.style.gap = '15px';
});

menuNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        menuNav.style.display = 'none';
    });
});