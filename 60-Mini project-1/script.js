document.addEventListener('DOMContentLoaded', function () {
    const menu = document.querySelector('.menu');

    function toggleMenuTransparency() {
        if (window.scrollY > 0) {
           menu.classList.add('tranparent')
        }
        else {
            menu.classList.remove('transparent');
        }
    }
    window.addEventListener('scroll', toggleMenuTransparency);
});
