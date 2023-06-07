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

const campos = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.span-required');

function setError(index) {
  campos[index].style.border = '2px solid red'
  spans[index].style.display = 'block'
}

function removeError(index) {
  campos[index].style.border = ''
  spans[index].style.display = 'none'
}

function verificarLogin() {
  if (campos[0].value === '') {
    setError(0)
  } else {
    removeError(0)
  }
  if (campos[1].value === '') {
    setError(1)
  } else {
    removeError(1)
  }
  if (campos[0].value == 'jesusmedico@gmail.com' && campos[1].value == 'jesus123') {
    document.getElementById('popup').classList.remove('esconder')
  }
}