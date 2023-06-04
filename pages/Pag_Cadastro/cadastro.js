const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault();
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
    const active = nav.classList.contains('active');
    event.currentTarget.setAttribute('aria-expanded', active);
    if (active) {
        event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
    } else {
        event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
    }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);


const form = document.getElementById('form');
const campos = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.span-required');
const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

console.log(campos)


function setError(index) {
    campos[index].style.border = '2px solid red'
    spans[index].style.display = 'block'
}

function removeError(index) {
    campos[index].style.border = ''
    spans[index].style.display = 'none'
}









//                           BLOCO 1
function nameValidate() {
    if (campos[0].value === '') {
        setError(0)
    } else {
        removeError(0)
    }
}

function dateValidate() {
    if (campos[1].value === '') {
        setError(1)
    } else {
        removeError(1)
    }
}

function cpfValidate() {
    if (campos[2].value.length < 11) {
        setError(2)
    } else {
        removeError(2)
    }
}

function rgValidate() {
    if (campos[3].value.length < 9) {
        setError(3)
    } else {
        removeError(3)
    }
}

function continuar1() {
    let numValidar = 0;

    if (campos[0].value === '') {
        setError(0)
    } else {
        removeError(0)
        numValidar++
    }
    if (campos[1].value === '') {
        setError(1)
    } else {
        removeError(1)
        numValidar++
    }
    if (campos[2].value.length < 11) {
        setError(2)
    } else {
        removeError(2)
        numValidar++
    }
    if (campos[3].value.length < 9) {
        setError(3)
    } else {
        removeError(3)
        numValidar++
    }
    if (numValidar == 0) {
        document.getElementById("bloco1").classList.add('esconder')
        document.getElementById("bloco2").classList.remove('esconder')
    }
}









//                           BLOCO 2
function ruaValidate() {
    if (campos[4].value === '') {
        setError(4)
    } else {
        removeError(4)
    }
}

function numRuaValidate() {
    if (campos[5].value === '') {
        setError(5)
    } else {
        removeError(5)
    }
}

function cepValidate() {
    if (campos[6].value.length < 11) {
        setError(6)
    } else {
        removeError(6)
    }
}


function continuar2() {
    let numValidar = 0;

    if (campos[4].value === '') {
        setError(4)
    } else {
        removeError(4)
        numValidar++
    }
    if (campos[5].value === '') {
        setError(5)
    } else {
        removeError(5)
        numValidar++
    }
    if (campos[6].value === '') {
        setError(6)
    } else {
        removeError(6)
        numValidar++
    }

    if (numValidar == 0) {
        document.getElementById("bloco2").classList.add('esconder')
        document.getElementById("bloco3").classList.remove('esconder')
    }
}
function voltar2() {
    document.getElementById("bloco2").classList.add('esconder')
    document.getElementById("bloco1").classList.remove('esconder')
}









//                           BLOCO 3
function emailValidate() {
    if (emailRegex.test(campos[7].value)) {
        removeError(7)
    } else {
        setError(7)
    }
}

function telValidate() {
    if (campos[8].value.length < 11) {
        setError(8)
    } else {
        removeError(8)
    }
}

function senhaValidate() {
    if (campos[9].value.length < 8) {
        setError(9)
    } else {
        removeError(9)
    }
}

function compararSenha() {
    if (campos[9].value == campos[10].value && campos[10].value.length >= 8) {
        removeError(10)
    } else {
        setError(10)
    }
}

function continuar3() {
    let numValidar = 0;

    if (emailRegex.test(campos[7].value)) {
        removeError(7)
        numValidar++
    } else {
        setError(7)
    }
    if (campos[8].value.length < 11) {
        setError(8)
    } else {
        removeError(8)
        numValidar++
    }
    if (campos[9].value.length < 8) {
        setError(9)
    } else {
        removeError(9)
        numValidar++
    }
    if (campos[9].value == campos[10].value && campos[10].value.length >= 8) {
        removeError(10)
        numValidar++
    } else {
        setError(10)
    }
    if (numValidar == 0) {
        document.getElementById("bloco3").classList.add('esconder')
        document.getElementById("bloco4").classList.remove('esconder')
    }
}
function voltar3() {
    document.getElementById("bloco3").classList.add('esconder')
    document.getElementById("bloco2").classList.remove('esconder')
}

function voltar4() {
    document.getElementById("bloco4").classList.add('esconder')
    document.getElementById("bloco3").classList.remove('esconder')
}

function finalizar() {
    document.getElementById('popup').classList.remove('esconder')
}