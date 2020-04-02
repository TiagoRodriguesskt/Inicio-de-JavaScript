//Busacndo um link no body
var linkElement = document.createElement('a'); //
linkElement.setAttribute('href', 'https://www.google.com.br/'); //

//Mostrando uma mensagem com o link do navegador
var textElement = document.createTextNode('Acessar o navegador'); //
linkElement.appendChild(textElement);

//Buscando o link dentro do id
var containerElement = document.querySelector('#app');
containerElement.appendChild(linkElement);

//Remove um input
var inputElement = document.querySelector('#nome');
containerElement.removeChild(inputElement);
