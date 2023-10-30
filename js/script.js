const primaryNav = document.querySelector('.primary-navigation')
const buttonMenu = document.querySelector('.menu-button');
const buttonMenuItem = document.querySelector('.menu');

buttonMenu.addEventListener('click', () => {
    const isOpened = buttonMenu.getAttribute('aria-expanded');
    const visibility = primaryNav.getAttribute('data-visible');
    if (isOpened === 'false' || visibility === 'false') {
        buttonMenu.setAttribute('aria-expanded', 'true');
        primaryNav.setAttribute('data-visible', 'true')
        buttonMenuItem.style.fill = 'var(--bg)';
    } else {
        buttonMenu.setAttribute('aria-expanded', 'false');
        primaryNav.setAttribute('data-visible', 'false')
        buttonMenuItem.style.fill = 'var(--texto)';
    }
})