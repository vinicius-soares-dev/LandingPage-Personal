const btn = document.querySelector('.btn');

btn.addEventListener('click', function(event) {
    event.preventDefault();
    const botao = event.target.querySelector('.btn');
    modoEscuro(botao);
});

function modoEscuro() {
    const body = document.querySelector('.body');
    const footer = document.querySelector('.rodape');
    const link = document.querySelector('.link');
    body.style.backgroundColor = 'black';
    body.style.color = 'white';
    footer.style.color = 'white';
    link.style.color = 'white';
    modoClaro();
}

function modoClaro() {
   const newF = document.querySelector('.btn');
   newF.innerHTML = 'Modo Claro';
   newF.addEventListener('click', function(event) {
    event.preventDefault();
    const botao = event.target.querySelector('.btn');
    claro(botao);
});

function claro() {
    const body = document.querySelector('.body');
    const footer = document.querySelector('.rodape');
    const link = document.querySelector('.link');
    body.style.backgroundColor = 'rgb(245, 212, 212)';
    body.style.color = 'black';
    footer.style.color = 'black';
    link.style.color = 'black';

}
   
}


