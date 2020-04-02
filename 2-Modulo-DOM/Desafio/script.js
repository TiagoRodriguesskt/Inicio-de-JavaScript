/**
    1º exercício
    Crie um botão que ao ser clicado cria um novo elemento em tela com a forma de um quadrado
    vermelho com 100px de altura e largura. Sempre que o botão for clicado um novo quadrado deve
    aparecer na tela.
*/
var boxElement = document.getElementById('.box');

var btnElement = document.getElementById("box");
var squaresElement = document.getElementById("quadrado");
btnElement.onclick = function() {
    var square = document.createElement("div");
    square.style.width = "100px";
    square.style.height = "100px";
    square.style.backgroundColor = "#F00";

    square.onmouseover = function() {
        square.style.backgroundColor = getRandomColor();
    };
    squaresElement.appendChild(square);
};
//-------------------------------------------------------------------------------------------------
/**
 *  2º exercício
    Utilizando o resultado do primeiro desafio, toda vez que o usuário passar o mouse por cima de
    algum quadrado troque sua cor para uma cor aleatória gerada pela função abaixo:
    function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
    }
    var newColor = getRandomColor(); // #E943F0
*/
function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
//--------------------------------------------------------------------------------------------------
/**
 *  3º exercício
 *  A partir do seguinte vetor:
    var nomes = ["Diego", "Gabriel", "Lucas"];
    Preencha uma lista (<ul>) no HTML com os itens da seguinte forma:
    ● Diego
    ● Gabriel
    ● Lucas
 */

var names = [
    "Gabriel",
    "Diego",
    "Lucas"
];
//pegando elemento UL
var elementoLista = document.querySelector("ul");
//peganddo o input text element
var inputNewName = document.getElementById("nome");

//percorrendo nome da lista de nomes
for (name of names) {
    //chamando função que insere o nome
    adicionaItem(name);
}

//Adicionando item ao elemento li filho do elemento ul
function adicionaItem(name) {
    console.log("TCL: adicionaItem -> name", name);
    //pegando elemento li filho de ul
    var elementoFilho = document.createElement("li");

    //criando o texto para inserir no li
    var textoDoFilho = document.createTextNode(name);

    //inserindo texto ao elemento li
    elementoFilho.appendChild(textoDoFilho);

    //inserindo o li ao elemento ul
    elementoLista.appendChild(elementoFilho);
}
//-------------------------------------------------------------------------------------------------
/**
 *  4º exercício
    Seguindo o resultado do exercício anterior adicione um input em tela e um botão como a seguir:
    <input type="text" name="nome">
    <button onClick="adicionar()">Adicionar</button>
    Ao clicar no botão, a função adicionar() deve ser disparada adicionando um novo item a lista de
 */
function adicionar() {
    adicionaItem(inputNewName.value);

    inputNewName.value = "";
}