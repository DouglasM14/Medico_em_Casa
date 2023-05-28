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



function continuar1() {
    document.getElementById("bloco1").classList.add('esconder')
    document.getElementById("bloco2").classList.remove('esconder')
}
function continuar2() {
    document.getElementById("bloco2").classList.add('esconder')
    document.getElementById("bloco3").classList.remove('esconder')
}
function continuar3() {
    document.getElementById("bloco3").classList.add('esconder')
    document.getElementById("bloco4").classList.remove('esconder')
}
function Finalizar() {
    console.log("formulario enviado")
}
function voltar2() {
    document.getElementById("bloco2").classList.add('esconder')
    document.getElementById("bloco1").classList.remove('esconder')
}
function voltar3() {
    document.getElementById("bloco3").classList.add('esconder')
    document.getElementById("bloco2").classList.remove('esconder')
}
function voltar4() {
    document.getElementById("bloco4").classList.add('esconder')
    document.getElementById("bloco3").classList.remove('esconder')
}