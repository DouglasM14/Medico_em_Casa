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

const cep = document.getElementById('cep');
const rua = document.getElementById('rua');
const numeroCasa = document.getElementById('numeroCasa');
const complemento = document.getElementById('complemento');
const email = document.getElementById('email');
const telefone = document.getElementById('telefone');
const senha = document.getElementById('senha');
const senha2 = document.getElementById('senha2');
const doenças = document.getElementById('doenças');
const alergias = document.getElementById('alergias');
const condiçõesGeneticas = document.getElementById('condiçõesGeneticas');
const condiçõesPsiquiátricas = document.getElementById('condiçõesPsiquiátricas');
const cirurgias = document.getElementById('cirurgias');
const historico = document.getElementById('historico');

console.log(form);
console.log(nome);
console.log(cpf);
console.log(nome);
console.log(genero);
console.log(cep);
console.log(rua);
console.log(numeroCasa);
console.log(complemento);
console.log(email);
console.log(telefone);
console.log(senha);
console.log(senha2);
console.log(doenças);
console.log(alergias);
console.log(condiçõesGeneticas);
console.log(condiçõesPsiquiátricas);
console.log(cirurgias);
console.log(historico);

function continuar1() {
    const nome = document.getElementById('nome');
    const cpf = document.getElementById('cpf');
    const rg = document.getElementById('rg');
    const genero = document.getElementById('genero');
    validarInputs()
}


function validarInputs() {

    if (nome === '') {
        erro(nome, 'Nome invalido');
    } else {
        sucesso(nome);
    }

}

const erro = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};







// https://codepen.io/javascriptacademy-stash/pen/oNeNMNR?editors=0010


// function continuar1() {
//     document.getElementById("bloco1").classList.add('esconder')
//     document.getElementById("bloco2").classList.remove('esconder')
// }
// function continuar2() {
//     document.getElementById("bloco2").classList.add('esconder')
//     document.getElementById("bloco3").classList.remove('esconder')
// }
// function continuar3() {
//     document.getElementById("bloco3").classList.add('esconder')
//     document.getElementById("bloco4").classList.remove('esconder')
// }
// function Finalizar() {
//     console.log("formulario enviado")
// }
// function voltar2() {
//     document.getElementById("bloco2").classList.add('esconder')
//     document.getElementById("bloco1").classList.remove('esconder')
// }
// function voltar3() {
//     document.getElementById("bloco3").classList.add('esconder')
//     document.getElementById("bloco2").classList.remove('esconder')
// }
// function voltar4() {
//     document.getElementById("bloco4").classList.add('esconder')
//     document.getElementById("bloco3").classList.remove('esconder')
// }