// Menu
let menu = document.querySelector('.menu');
let barras = document.querySelectorAll('.barra');
let nav = document.querySelector('.navigation-close');

menu.addEventListener('click', () => {
    nav.classList.toggle('navigation-open');
    for(let barra of barras){
        barra.classList.toggle('barra-open');
    };
    verifyContas();
});

// Contas
let contas = document.querySelector('.contas');

function verifyContas() {
    if(nav.classList.length == 2) {
        contas.classList.add('contas-navopen');
    } else {
        contas.classList.remove('contas-navopen');
    }
}

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
        contas.style.display = 'none';
    } else {
        jessieAssist.style.display = 'none';
        contas.style.display = 'flex';
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
        contas.style.display = 'flex';
        verifyContas();
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