const darkMode = document.querySelector('.dark');
const lightMode = document.querySelector('.light');

darkMode.addEventListener('click', function(event) {
    event.preventDefault();
    const body = document.querySelector('.body');
    const link = document.querySelector('.link');
    body.style.background = 'black';
    body.style.color = 'white';
    link.style.color = 'white';
});

lightMode.addEventListener('click', function(e) {
    e.preventDefault();
    const corpo = document.querySelector('.body');
    const link = document.querySelector('.link');
    corpo.style.background = '#f5d4d4';
    corpo.style.color = 'black';
    link.style.color = 'black';
})


