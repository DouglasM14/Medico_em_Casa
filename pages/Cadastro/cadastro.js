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