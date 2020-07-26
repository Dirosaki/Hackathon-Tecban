// Menu
let menu = document.querySelector('.menu');
let barras = document.querySelectorAll('.barra');
let nav = document.querySelector('.navigation-close');
let contas = document.querySelector('.contas');

menu.addEventListener('click', () => {
    nav.classList.toggle('navigation-open');
    for(let barra of barras){
        barra.classList.toggle('barra-open');
    };
    contas.classList.toggle('contas-navopen');
});

// Contas



// Assistente
let jessieAssist = document.querySelector('.jessie');
let closeAssist = document.querySelector('.close-popup');
let startPopup = document.querySelector('.start');
let startIntro = document.querySelector('.listIntro');
let introList = document.querySelectorAll('.listIntro li');
let proxIntros = document.querySelectorAll('.listIntro li .proxIntro');
let body = document.querySelector('body');

(function verify() {
    if(localStorage.getItem('introducao') != 'true') {
        jessieAssist.style.display = 'flex';
    } else {
        jessieAssist.style.display = 'none';
    }
})()

function closePopup () {
    jessieAssist.style.display = 'none';
    // localStorage.setItem("introducao", true);
}

closeAssist.addEventListener('click', () => {
    closePopup();
    contas.style.display = 'flex';
} );

let i = 0;
startPopup.addEventListener('click', () => {
    closePopup();
    nav.classList.add('navigation-open');
    for(let barra of barras){
        barra.classList.add('barra-open');
    }
    startIntro.style.display = 'flex';
    introList[i].style.visibility = 'visible';
});

// Introdução
body.addEventListener('click', (event) => {
    if(event.target.dataset.number == i){
        i++;
        introList[i - 1].style.visibility = 'hidden';
        if(i >= 5) {
            i = 5;
        }
        introList[i].style.visibility = 'visible';
    }
    if(event.target.dataset.number == 5) {
        startIntro.style.display = 'none';
        if(nav.classList.length > 1){
            contas.classList.toggle('contas-navopen');
            contas.style.display = 'flex';
        }
        contas.style.display = 'flex';
        contas.classList.remove('contas-navopen');
    }
})




// Registra o service worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker
    .register('../service-worker.js')
    .then(function() { 
        console.log('Service Worker Registered'); 
    }, function(error){
        console.error(error);
    });
}