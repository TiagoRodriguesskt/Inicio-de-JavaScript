//var inputElement = document.getElementById('nome'); Buscando o id
//var inputElement = document.getElementsByTagName('input')[0]; Buscando pela Tag. Pode busca uma Tag única 
//var inputElement = document.getElementsByClassName('nome'); Buscando pela Tag 'class'
//var inputElement = document.querySelector('body div#app input'); //Buscando os elementos que está na DOM
//var inputElement = document.querySelector('input[name=nome] '); //Buscando os atributos que está na DOM
//var inputElement = document.querySelectorAll('input'); //Buscando todos os atributos que está na DOM

//Passando a função de botão clicado dentro JavaScript
var btnElement = document.querySelector('button.botao'); //Clicando no botão
var inputElement = document.querySelector('input[name=nome]') //trazendo o input que vai ser digitado pelo usuário

btnElement.onclick = function() {
  var text = inputElement.value; //Trazendo o valor da variavel text

   alert(text) //Mostrando o que foi digitado
  //alert('Cliquei') //mostrando essa mensagem
}
