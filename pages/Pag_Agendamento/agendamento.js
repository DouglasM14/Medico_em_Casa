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

function validarData() {
  // Obter o valor do input
  var inputDate = document.getElementById('date-input').value;

  // Obter a data atual
  var dataAtual = new Date();

  // Converter a data selecionada e a data atual em objetos Date
  var selectedDate = new Date(inputDate);
  var currentDate = new Date(dataAtual.getFullYear(), dataAtual.getMonth(), dataAtual.getDate());

  // Comparar a data selecionada com a data atual
  if (selectedDate < currentDate) {
    // Definir a data atual como valor do input
    var dia = ('0' + dataAtual.getDate()).slice(-2);
    var mes = ('0' + (dataAtual.getMonth() + 1)).slice(-2);
    var ano = dataAtual.getFullYear();
    var dataAtualFormatted = ano + '-' + mes + '-' + dia;
    document.getElementById('date-input').value = dataAtualFormatted;
  }
}