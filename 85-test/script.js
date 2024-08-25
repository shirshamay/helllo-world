const button = document.querySelector('#button');
const paragraph = document.querySelector(".first");
button.addEventListener('click', function () {
    document.body.classList.toggle('dark');
    document.body.classList.toggle('purple');
});
