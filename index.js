document.addEventListener('DOMContentLoaded', (event) => {
document.body.addEventListener('click', function() {
    const intro = document.getElementById('intro');
    const menuItems = document.querySelectorAll('#menu .nav-link');
    const images = document.querySelectorAll('.image-container');

    intro.classList.add('to-header');

    setTimeout(() => {
        menuItems.forEach(link => {
            link.removeAttribute('tabindex');
            link.setAttribute('aria-disabled', 'false');
        });

        const menu = document.getElementById('menu');
        menu.style.display = 'flex';
        menu.style.opacity = '1';
        menu.style.pointerEvents = 'auto';
    }, 50);

    images.forEach(imgContainer => {
        imgContainer.style.display = 'block';
        imgContainer.offsetHeight;
        imgContainer.style.opacity = '1';
    });
}, 1000);
});
