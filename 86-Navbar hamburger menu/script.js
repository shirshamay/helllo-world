document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.querySelector('.navbar, .Mobile-menu');
    const MobileMenu = document.querySelector('.navbar, .Mobile-menu-list');

    toggleButton.addEventListener('click', function () {
        MobileMenu.classList.toggle('active');
    })
})