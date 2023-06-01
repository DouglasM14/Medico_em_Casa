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

document.getElementById("botão1").classList.add('ativo')

function cartão() {
  document.getElementById("cartão").classList.remove('esconder')
  document.getElementById("boleto").classList.add('esconder')
  document.getElementById("pix").classList.add('esconder')
  document.getElementById("botão1").classList.add('ativo')
  document.getElementById("botão2").classList.remove('ativo')
  document.getElementById("botão3").classList.remove('ativo')
}
function debito() {
  document.getElementById("cartão").classList.add('esconder')
  document.getElementById("boleto").classList.remove('esconder')
  document.getElementById("pix").classList.add('esconder')
  document.getElementById("botão1").classList.remove('ativo')
  document.getElementById("botão2").classList.add('ativo')
  document.getElementById("botão3").classList.remove('ativo')
}
function pix() {
  document.getElementById("cartão").classList.add('esconder')
  document.getElementById("boleto").classList.add('esconder')
  document.getElementById("pix").classList.remove('esconder')
  document.getElementById("botão1").classList.remove('ativo')
  document.getElementById("botão2").classList.remove('ativo')
  document.getElementById("botão3").classList.add('ativo')
}
function agendar() {
  console.log("formulario enviado")
}